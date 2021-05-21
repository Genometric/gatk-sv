## Generate BAF file from a sharded VCF ##

version 1.0

import "BAFFromGVCFs.wdl" as baf
import "Structs.wdl"

workflow BAFFromShardedVCF {
  input {
    Array[File] vcfs
    File? vcf_header  # If provided, added to the beginning of each VCF
    Array[String] samples  # Can be a subset of samples in the VCF
    String batch
    String sv_base_mini_docker
    String sv_pipeline_docker
    RuntimeAttr? runtime_attr_baf_gen
    RuntimeAttr? runtime_attr_gather
    RuntimeAttr? runtime_attr_sample
  }

  scatter (idx in range(length(vcfs))) {
    call GenerateBAF {
      input:
        vcf = vcfs[idx],
        vcf_header = vcf_header,
        samples = samples,
        batch = batch,
        shard = "~{idx}",
        sv_pipeline_docker = sv_pipeline_docker,
        runtime_attr_override = runtime_attr_baf_gen,
    }
  }

  call baf.GatherBAF {
    input:
      batch = batch,
      BAF = GenerateBAF.BAF,
      sv_base_mini_docker = sv_base_mini_docker,
      runtime_attr_override = runtime_attr_gather
  }

  scatter (sample in samples) {
    call ScatterBAFBySample {
      input:
        sample = sample,
        BAF = GatherBAF.out,
        sv_base_mini_docker = sv_base_mini_docker,
        runtime_attr_override = runtime_attr_sample
    }
  }

  output {
    Array[File] baf_files = ScatterBAFBySample.out
    Array[File] baf_file_indexes = ScatterBAFBySample.out_index
  }
}

task GenerateBAF {
  input {
    File vcf
    File? vcf_header
    Array[String] samples
    String batch
    String shard
    String sv_pipeline_docker
    RuntimeAttr? runtime_attr_override
  }

  RuntimeAttr default_attr = object {
    cpu_cores: 1,
    mem_gb: 3.75,
    disk_gb: 10,
    boot_disk_gb: 10,
    preemptible_tries: 3,
    max_retries: 1
  }
  RuntimeAttr runtime_attr = select_first([runtime_attr_override, default_attr])

  output {
    File BAF = "BAF.~{batch}.shard-~{shard}.txt"
  }
  command <<<

    set -euo pipefail
    SAMPLES="~{write_lines(samples)}"
    bcftools view -M2 -v snps ~{if defined(vcf_header) then "<(cat ~{vcf_header} ~{vcf})" else vcf} \
      | bcftools reheader -s $SAMPLES \
      | python /opt/sv-pipeline/02_evidence_assessment/02d_baftest/scripts/Filegenerate/generate_baf.py \
               --unfiltered --samples-list $SAMPLES \
      > BAF.~{batch}.shard-~{shard}.txt

  >>>
  runtime {
    cpu: select_first([runtime_attr.cpu_cores, default_attr.cpu_cores])
    memory: select_first([runtime_attr.mem_gb, default_attr.mem_gb]) + " GiB"
    disks: "local-disk " + select_first([runtime_attr.disk_gb, default_attr.disk_gb]) + " HDD"
    bootDiskSizeGb: select_first([runtime_attr.boot_disk_gb, default_attr.boot_disk_gb])
    docker: sv_pipeline_docker
    preemptible: select_first([runtime_attr.preemptible_tries, default_attr.preemptible_tries])
    maxRetries: select_first([runtime_attr.max_retries, default_attr.max_retries])
  }

}

task ScatterBAFBySample {
  input {
    File BAF
    String sample
    String sv_base_mini_docker
    RuntimeAttr? runtime_attr_override
  }

  Int vm_disk_size = ceil(size(BAF, "GB") + 10)

  RuntimeAttr default_attr = object {
    cpu_cores: 1,
    mem_gb: 1,
    disk_gb: vm_disk_size,
    boot_disk_gb: 10,
    preemptible_tries: 3,
    max_retries: 1
  }
  RuntimeAttr runtime_attr = select_first([runtime_attr_override, default_attr])

  output {
    File out = "BAF.~{sample}.txt.gz"
    File out_index = "BAF.~{sample}.txt.gz.tbi"
  }
  command <<<

    set -euo pipefail
    zcat ~{BAF} | awk -F "\t" -v OFS="\t" '{if ($4=="~{sample}") print}' | bgzip -c > BAF.~{sample}.txt.gz
    tabix -s 1 -b 2 -e 2 BAF.~{sample}.txt.gz

  >>>
  runtime {
    cpu: select_first([runtime_attr.cpu_cores, default_attr.cpu_cores])
    memory: select_first([runtime_attr.mem_gb, default_attr.mem_gb]) + " GiB"
    disks: "local-disk " + select_first([runtime_attr.disk_gb, default_attr.disk_gb]) + " HDD"
    bootDiskSizeGb: select_first([runtime_attr.boot_disk_gb, default_attr.boot_disk_gb])
    docker: sv_base_mini_docker
    preemptible: select_first([runtime_attr.preemptible_tries, default_attr.preemptible_tries])
    maxRetries: select_first([runtime_attr.max_retries, default_attr.max_retries])
  }
}