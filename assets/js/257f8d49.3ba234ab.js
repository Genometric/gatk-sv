"use strict";(self.webpackChunkGATK_SV=self.webpackChunkGATK_SV||[]).push([[88],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"ReGenotypeCNVs",description:"Regenotype CNVs",sidebar_position:10,slug:"rgcnvs"},i=void 0,s={unversionedId:"modules/regenotype_cnvs",id:"modules/regenotype_cnvs",title:"ReGenotypeCNVs",description:"Regenotype CNVs",source:"@site/docs/modules/regenotype_cnvs.md",sourceDirName:"modules",slug:"/modules/rgcnvs",permalink:"/gatk-sv/docs/modules/rgcnvs",draft:!1,editUrl:"https://github.com/broadinstitute/gatk-sv/tree/master/website/docs/modules/regenotype_cnvs.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"ReGenotypeCNVs",description:"Regenotype CNVs",sidebar_position:10,slug:"rgcnvs"},sidebar:"tutorialSidebar",previous:{title:"GenotypeBatch",permalink:"/gatk-sv/docs/modules/gb"},next:{title:"MakeCohortVcf",permalink:"/gatk-sv/docs/modules/cvcf"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Outputs",id:"outputs",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Re-genotypes probable mosaic variants across multiple batches."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Genotype batch")),(0,o.kt)("h3",{id:"inputs"},"Inputs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Per-sample median coverage estimates (GatherBatchEvidence)"),(0,o.kt)("li",{parentName:"ul"},"Pre-genotyping depth VCFs (FilterBatch)"),(0,o.kt)("li",{parentName:"ul"},"Batch PED files (FilterBatch)"),(0,o.kt)("li",{parentName:"ul"},"Cohort depth VCF (MergeBatchSites)"),(0,o.kt)("li",{parentName:"ul"},"Genotyped depth VCFs (GenotypeBatch)"),(0,o.kt)("li",{parentName:"ul"},"Genotyped depth RD cutoffs file (GenotypeBatch)")),(0,o.kt)("h3",{id:"outputs"},"Outputs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Re-genotyped depth VCFs.")))}d.isMDXComponent=!0}}]);