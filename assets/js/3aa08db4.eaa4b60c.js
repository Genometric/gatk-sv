"use strict";(self.webpackChunkGATK_SV=self.webpackChunkGATK_SV||[]).push([[726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Overview",description:"Overview of the constituting components",sidebar_position:0},o=void 0,l={unversionedId:"modules/index",id:"modules/index",title:"Overview",description:"Overview of the constituting components",source:"@site/docs/modules/index.md",sourceDirName:"modules",slug:"/modules/",permalink:"/gatk-sv/docs/modules/",draft:!1,editUrl:"https://github.com/broadinstitute/gatk-sv/tree/master/website/docs/modules/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",description:"Overview of the constituting components",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Modules",permalink:"/gatk-sv/docs/category/modules"},next:{title:"GatherSampleEvidence",permalink:"/gatk-sv/docs/modules/gse"}},p={},s=[],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The pipeline is written in ",(0,a.kt)("a",{parentName:"p",href:"https://openwdl.org"},"Workflow Description Language (WDL)"),",\nconsisting of multiple modules to be executed in the following order. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"GatherSampleEvidence")," SV evidence collection, including calls from a configurable set of\nalgorithms (Manta, MELT, and Wham), read depth (RD), split read positions (SR),\nand discordant pair positions (PE).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"EvidenceQC")," Dosage bias scoring and ploidy estimation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"GatherBatchEvidence")," Copy number variant calling using\n",(0,a.kt)("inlineCode",{parentName:"p"},"cn.MOPS")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GATK gCNV"),"; B-allele frequency (BAF) generation;\ncall and evidence aggregation.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ClusterBatch")," Variant clustering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"GenerateBatchMetrics")," Variant filtering metric generation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"FilterBatch")," Variant filtering; outlier exclusion")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"GenotypeBatch")," Genotyping")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"MakeCohortVcf")," Cross-batch integration; complex variant resolution and re-genotyping; vcf cleanup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Module 07 (in development)")," Downstream filtering, including minGQ, batch effect check,\noutlier samples removal and final recalibration;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AnnotateVCF")," Annotations, including functional annotation,\nallele frequency (AF) annotation and AF annotation with external population callsets;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Module 09 (in development)")," Visualization, including scripts that generates IGV screenshots and rd plots.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Additional modules to be added: de novo and mosaic scripts"))))}m.isMDXComponent=!0}}]);