version 1.0

import "Structs.wdl"

workflow HelloWorld {
    input {
        String docker_tag
        RuntimeAttr? runtime_override
    }

    call PrintHello {
        input:
            docker_tag = docker_tag,
            runtime_override = runtime_override
    }

    output {
        File output_file = PrintHello.output_file
    }
}

task PrintHello {
    input {
        String docker_tag
        RuntimeAttr? runtime_override
    }

    output {
        File output_file = "output.txt"
    }

    RuntimeAttr runtime_default = object {
        cpu_cores: 1,
        mem_gb: 4,
        boot_disk_gb: 10,
        preemptible_tries: 3,
        max_retries: 1,
        disk_gb: 10
    }
    RuntimeAttr runtime_attr = select_first([runtime_override, runtime_default])

    runtime {
        docker: docker_tag
        cpu: select_first([runtime_attr.cpu_cores, runtime_default.cpu_cores])
        memory: select_first([runtime_attr.mem_gb, runtime_default.mem_gb]) + " GiB"
        disks: "local-disk " + select_first([runtime_attr.disk_gb, runtime_default.disk_gb]) + " SSD"
        bootDiskSizeGb: select_first([runtime_attr.boot_disk_gb, runtime_default.boot_disk_gb])
        preemptible: select_first([runtime_attr.preemptible_tries, runtime_default.preemptible_tries])
        maxRetries: select_first([runtime_attr.max_retries, runtime_default.max_retries])
    }

    command <<<
        set -Eeuo pipefail
        echo "Hello world!!!" > output.txt
    >>>
}


