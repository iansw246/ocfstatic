"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4460],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),l=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={title:"User disk quotas"},i=void 0,s={unversionedId:"staff/procedures/user-quotas",id:"staff/procedures/user-quotas",title:"User disk quotas",description:"We use the standard Unix quota utilities to set disk quotas.",source:"@site/docs/staff/procedures/user-quotas.md",sourceDirName:"staff/procedures",slug:"/staff/procedures/user-quotas",permalink:"/docs/staff/procedures/user-quotas",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/procedures/user-quotas.md",tags:[],version:"current",frontMatter:{title:"User disk quotas"},sidebar:"tutorialSidebar",previous:{title:"SSL certificates",permalink:"/docs/staff/procedures/ssl"},next:{title:"Configuring virtual hosting",permalink:"/docs/staff/procedures/vhost"}},u={},l=[{value:"Summary of useful commands",id:"summary-of-useful-commands",level:3},{value:"View your own quota",id:"view-your-own-quota",level:4},{value:"View another user&#39;s quota",id:"view-another-users-quota",level:4},{value:"Print a summary of every user&#39;s disk quota",id:"print-a-summary-of-every-users-disk-quota",level:4},{value:"Setting custom disk quotas",id:"setting-custom-disk-quotas",level:4},{value:"Raising disk quotas for every user",id:"raising-disk-quotas-for-every-user",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We use the standard Unix quota utilities to set disk quotas."),(0,n.kt)("h3",{id:"summary-of-useful-commands"},"Summary of useful commands"),(0,n.kt)("p",null,"All of these can be executed on ",(0,n.kt)("inlineCode",{parentName:"p"},"filehost"),". Some of them also work on other\nservers which mount NFS."),(0,n.kt)("h4",{id:"view-your-own-quota"},"View your own quota"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"quota\n")),(0,n.kt)("h4",{id:"view-another-users-quota"},"View another user's quota"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"quota -u daradib\n")),(0,n.kt)("h4",{id:"print-a-summary-of-every-users-disk-quota"},"Print a summary of every user's disk quota"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"repquota /dev/mapper/vg-homes\n")),(0,n.kt)("h4",{id:"setting-custom-disk-quotas"},"Setting custom disk quotas"),(0,n.kt)("p",null,"Sometimes we want to set a custom disk quota for a staff member or other\nspecial snowflake (e.g. perhaps a user wants to host their research or\nsomething on OCF, which we encourage)."),(0,n.kt)("p",null,"To make an exception, just change their quota individually using ",(0,n.kt)("inlineCode",{parentName:"p"},"edquota -u {username}"),". This will open a file in your editor showing their quota. Change\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"soft")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"hard")," columns to the number of kibibytes you wish to allocate,\nthen save the file."),(0,n.kt)("p",null,"You can disable the quota entirely by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"0")," for both the ",(0,n.kt)("inlineCode",{parentName:"p"},"soft")," and\n",(0,n.kt)("inlineCode",{parentName:"p"},"hard")," limit, but this is ",(0,n.kt)("strong",{parentName:"p"},"not recommended"),' because the next time somebody\ntries to raise disk quotas, it will "raise" your quota from "no quota" to the\nnew quota. To mimic an infinite quota, just give the account a very large quota\ninstead.'),(0,n.kt)("h2",{id:"raising-disk-quotas-for-every-user"},"Raising disk quotas for every user"),(0,n.kt)("p",null,"Are you trying to raise disk quotas for every user? Congratulations on finding\nthis page! The SM who wrote this section spent a couple of hours trying to\nfigure out ",(0,n.kt)("em",{parentName:"p"},"how in the hell")," our automatic disk quotas were working, despite\nall internet documentation claiming there is no way to set default disk quotas."),(0,n.kt)("p",null,"Indeed, you cannot configure a default quota. You can, however, set quotas for\nnon-existent users! We've set quotas for user IDs 1000 through 99999 in order\nto mimic default users."),(0,n.kt)("p",null,"To raise disk quotas, you can use a command like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'soft_limit="5242880"  # 5 GiB in KiB\nhard_limit="5767168"  # 5.5 GiB in KiB\n\nfor i in $(seq 1000 99999); do\n    quotatool -b -Rr  -q "$soft_limit" -l "$hard_limit" -u ":$i" /dev/mapper/vg-homes\ndone\n')),(0,n.kt)("p",null,"The flags assure that we set a block limit (rather than an inode limit) and\nthat we only raise quotas (so that we don't accidentally lower the quota of a\nspecial snowflake)."),(0,n.kt)("p",null,'The "soft limit" is like a warning limit; it can be configured to be enforced\nafter a grace period, but we don\'t do this. In practice, we announce the limit\nto the public as "X GB", with a soft limit of "X GB" and a hard limit of "X+0.5\nGB".'),(0,n.kt)("p",null,"Since the soft limit is never enforced, the real limit is the hard limit."))}d.isMDXComponent=!0}}]);