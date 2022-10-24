"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7733],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(t),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return t?r.createElement(m,i(i({ref:n},c),{},{components:t})):r.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={title:"High performance computing"},i=void 0,l={unversionedId:"services/hpc/hpc",id:"services/hpc/hpc",title:"High performance computing",description:"NOTE: We are in the process of trialing this service to users so that we can",source:"@site/docs/services/hpc/hpc.md",sourceDirName:"services/hpc",slug:"/services/hpc/",permalink:"/docs/services/hpc/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/services/hpc/hpc.md",tags:[],version:"current",frontMatter:{title:"High performance computing"},sidebar:"tutorialSidebar",previous:{title:"Content removal policy",permalink:"/docs/services/account/content-removal"},next:{title:"Slurm",permalink:"/docs/services/hpc/slurm"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Gaining Access",id:"gaining-access",level:2},{value:"Connecting",id:"connecting",level:3},{value:"The Cluster",id:"the-cluster",level:2},{value:"Slurm",id:"slurm",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Virtual Environments",id:"virtual-environments",level:3},{value:"Singularity",id:"singularity",level:3},{value:"Installing",id:"installing",level:4},{value:"Building Your Container",id:"building-your-container",level:4},{value:"Using Your Container",id:"using-your-container",level:4},{value:"Working on HPC Infrastructure",id:"working-on-hpc-infrastructure",level:4}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE: We are in the process of trialing this service to users so that we can\nmake the service as accommodating and secure as possible. This means that items\nconcerning the service, including this documentation, are subject to change.\nWe will do our best to keep everyone updated and notified of changes as they come.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"At the OCF we offer a High Performance Computing (HPC) service for individuals\nand groups that need to run computationally demanding software. We currently\nhave one main HPC server; however, we have plans to expand the cluster to make\nuse the resources at our disposal."),(0,a.kt)("h2",{id:"gaining-access"},"Gaining Access"),(0,a.kt)("p",null,"In order to access the HPC cluster, please send an access request to\n",(0,a.kt)("a",{parentName:"p",href:"mailto:help@ocf.berkeley.edu"},"help@ocf.berkeley.edu"),". Make sure to include\nyour OCF username or ",(0,a.kt)("a",{parentName:"p",href:"/docs/membership#h2_group-accounts"},"group account")," name\nand a detailed technical description of the projects you plan to run on our\nHPC infrastructure. This would include information about the nature of the\nsoftware being run, as well as the amount of computational resources that are\nexpected to be needed."),(0,a.kt)("h3",{id:"connecting"},"Connecting"),(0,a.kt)("p",null,"Once you submit your proposal and are approved access you will be able to\nconnect to our Slurm master node via SSH by running the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh my_ocf_username@hpcctl.ocf.berkeley.edu\n")),(0,a.kt)("p",null,"If you have trouble connecting please ",(0,a.kt)("a",{parentName:"p",href:"/docs/contact"},"contact us")," at\n",(0,a.kt)("a",{parentName:"p",href:"mailto:help@ocf.berkeley.edu"},"help@ocf.berkeley.edu"),", or come to\n",(0,a.kt)("a",{parentName:"p",href:"/staff-hours"},"staff hours")," when the lab is open and chat with us in person.\nWe also have a #hpc_users channel on ",(0,a.kt)("a",{parentName:"p",href:"https://fco.slack.com/"},"slack")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/contact/irc"},"irc"),"\nwhere you can ask questions and talk to us about anything HPC."),(0,a.kt)("h2",{id:"the-cluster"},"The Cluster"),(0,a.kt)("p",null,"As of Fall 2018, the OCF HPC cluster is composed of one server, with the\nfollowing specifications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 Intel Xeon ",(0,a.kt)("a",{parentName:"li",href:"https://ark.intel.com/products/92984/Intel-Xeon-Processor-E5-2640-v4-25M-Cache-2-40-GHz-"},"E5-2640v4")," CPUs (10c/20t @ 2.4GHz)"),(0,a.kt)("li",{parentName:"ul"},"4 NVIDIA 1080Ti GPUs"),(0,a.kt)("li",{parentName:"ul"},"256GB ECC DDR4-2400 RAM")),(0,a.kt)("p",null,"We have plans to expand the cluster with additional nodes of comparable\nspecifications as funding becomes available. The current hardware was\ngenerously funded by a series of grants from the ",(0,a.kt)("a",{parentName:"p",href:"https://techfund.berkeley.edu"},"Student Tech Fund"),"."),(0,a.kt)("h2",{id:"slurm"},"Slurm"),(0,a.kt)("p",null,"We currently use ",(0,a.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/"},"Slurm")," as our workload manager for the cluster.\nSlurm is a free and open source job scheduler that evenly distributes jobs\nacross an HPC cluster, where each computer in the cluster is referred to\nas a node.\nThe only way to access our HPC nodes is through Slurm."),(0,a.kt)("p",null,"Detailed documentation for how to access Slurm is ",(0,a.kt)("a",{parentName:"p",href:"/docs/services/hpc/slurm"},"here"),"."),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("p",null,"For managing application dependencies, you currently have two options:"),(0,a.kt)("h3",{id:"virtual-environments"},"Virtual Environments"),(0,a.kt)("p",null,"First you can use a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/venv.html"},"virtual environment")," if you are using Python\npackages. To create a virtual environment navigate to your home directory\nand run the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"virtualenv -p python3 venv\n. venv/bin/activate\n")),(0,a.kt)("p",null,"This will allow you to ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install")," any Python packages that the OCF does not\nalready have for your program."),(0,a.kt)("h3",{id:"singularity"},"Singularity"),(0,a.kt)("p",null,"For those who need access to non-Python dependencies or have already integrated\ntheir program into Docker, the second option is to use Singularity containers.\n",(0,a.kt)("a",{parentName:"p",href:"https://singularity.lbl.gov/"},"Singularity")," is a containerization platform developed at Lawrence\nBerkeley National Laboratory that is designed specifically for HPC environments.\nTo read more about the benefits of Singularity you can look\n",(0,a.kt)("a",{parentName:"p",href:"http://www.admin-magazine.com/HPC/Articles/Singularity-A-Container-for-HPC"},"here"),". We suggest a particular workflow, which will help\nsimplify deploying your program on our infrastructure."),(0,a.kt)("h4",{id:"installing"},"Installing"),(0,a.kt)("p",null,"We recommend that you do your development on our HPC infrastructure, but you\ncan also develop on your own machine if you would like. If you are running\nLinux on your system, you can install Singularity from the official ",(0,a.kt)("inlineCode",{parentName:"p"},"apt")," repos:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install singularity-container\n")),(0,a.kt)("p",null,"If you do not have an ",(0,a.kt)("inlineCode",{parentName:"p"},"apt")," based Linux distribution, installation instructions\ncan be found ",(0,a.kt)("a",{parentName:"p",href:"https://singularity.lbl.gov/install-linux"},"here"),". Otherwise, if you are running Mac you can\nlook ",(0,a.kt)("a",{parentName:"p",href:"https://singularity.lbl.gov/install-mac"},"here"),", or Windows ",(0,a.kt)("a",{parentName:"p",href:"https://singularity.lbl.gov/install-windows"},"here"),"."),(0,a.kt)("h4",{id:"building-your-container"},"Building Your Container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"singularity build --sandbox ./my_container docker://ubuntu\n")),(0,a.kt)("p",null,"This will create a Singularity container named ",(0,a.kt)("inlineCode",{parentName:"p"},"my_container"),". If you are\nworking on our infrastructure you will ",(0,a.kt)("em",{parentName:"p"},"not")," be able to install non-pip\npackages on your container, because you do not have root privileges."),(0,a.kt)("p",null,"If you would like to create your own container with new packages, you must\ncreate the container on your own machine, using the above command with\n",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," prepended, and then transfer it over to our infrastructure."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker://ubuntu")," option notifies Singularity to bootstrap the container from\nthe official Ubuntu docker container on ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),". There is also\na ",(0,a.kt)("a",{parentName:"p",href:"https://singularity-hub.org/"},"Singularity Hub"),", from which you can directly pull\nSingularity images in a similar fashion. We also have some pre-built containers\nthat you may use to avoid having to build your own. They are currently located\nat ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/containers")," on the Slurm master node."),(0,a.kt)("h4",{id:"using-your-container"},"Using Your Container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"singularity shell my_container\n")),(0,a.kt)("p",null,"The above command will allow you to shell into your container. By default your\nhome directory in the container is linked to your real home directory outside\nof the container environment, which helps you avoid having to transfer files\nin and out of the container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"singularity exec --nv my_container ./my_executable.sh\n")),(0,a.kt)("p",null,"This command will open your container and run the ",(0,a.kt)("inlineCode",{parentName:"p"},"my_executable.sh")," script in\nthe container environment. The ",(0,a.kt)("inlineCode",{parentName:"p"},"--nv")," option allows the container to interface with\nthe GPU. This command is useful when using ",(0,a.kt)("inlineCode",{parentName:"p"},"srun")," so you can run your program\nin a single command."),(0,a.kt)("h4",{id:"working-on-hpc-infrastructure"},"Working on HPC Infrastructure"),(0,a.kt)("p",null,"If you were using a sandboxed container for testing, we suggest you convert it\nto a Singularity image file. This is because images are more portable and\neasier to interact with than sandboxed containers. You can make this\nconversion using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo singularity build my_image.simg ./my_sandboxed_container\n")),(0,a.kt)("p",null,"If you were working on the image on your own computer, you can transfer it over\nto your home directory on our infrastructure using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"scp my_image.simg my_ocf_username@hpcctl.ocf.berkeley.edu:~/\n")),(0,a.kt)("p",null,"To actually submit a Slurm job that uses your Singularity container and runs\nyour script ",(0,a.kt)("inlineCode",{parentName:"p"},"my_executable.sh"),", run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"srun --gres=gpu --partition=ocf-hpc singularity exec --nv my_image.simg ./my_executable.sh\n")),(0,a.kt)("p",null,"This will submit a Slurm job to run your executable on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ocf-hpc")," Slurm\npartition. The ",(0,a.kt)("inlineCode",{parentName:"p"},"--gres=gpu")," option is what allows multiple users to run jobs\non a single node so it is important to include. Without it, you will not be\nable to interface with the GPUs."))}p.isMDXComponent=!0}}]);