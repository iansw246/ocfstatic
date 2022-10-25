"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=l(n),c=r,m=h["".concat(p,".").concat(c)]||h[c]||u[c]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Creating new hosts (servers, desktops)"},s=void 0,i={unversionedId:"staff/procedures/new-host",id:"staff/procedures/new-host",title:"Creating new hosts (servers, desktops)",description:"Bringing up new hosts is pretty easy, but has a few easy-to-miss steps. This",source:"@site/docs/staff/procedures/new-host.md",sourceDirName:"staff/procedures",slug:"/staff/procedures/new-host",permalink:"/docs/staff/procedures/new-host",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/staff/procedures/new-host.md",tags:[],version:"current",frontMatter:{title:"Creating new hosts (servers, desktops)"},sidebar:"tutorialSidebar",previous:{title:"Installing updates with apt-dater",permalink:"/docs/staff/procedures/installing-updates"},next:{title:"Printing maintenance",permalink:"/docs/staff/procedures/printing"}},p={},l=[{value:"Step 0. Pick a hostname and IP",id:"step-0-pick-a-hostname-and-ip",level:2},{value:"Step 1. (New hosts only) Add to LDAP, DNS, Puppet, Kerberos",id:"step-1-new-hosts-only-add-to-ldap-dns-puppet-kerberos",level:2},{value:"Step 1.1. Add the LDAP entry",id:"step-11-add-the-ldap-entry",level:3},{value:"Step 1.2. Add the DNS record",id:"step-12-add-the-dns-record",level:3},{value:"Step 1.3. Add node config to Puppet",id:"step-13-add-node-config-to-puppet",level:3},{value:"Step 1.4. Create the Kerberos keytab",id:"step-14-create-the-kerberos-keytab",level:3},{value:"Step 2. Create the host, run Debian installer",id:"step-2-create-the-host-run-debian-installer",level:2},{value:"Virtual hosts",id:"virtual-hosts",level:3},{value:"Physical hosts",id:"physical-hosts",level:3},{value:"Step 3. Log in and start Puppet",id:"step-3-log-in-and-start-puppet",level:2},{value:"Virtual hosts",id:"virtual-hosts-1",level:3},{value:"Physical hosts",id:"physical-hosts-1",level:3},{value:"Step 4. Sign the Puppet cert and run Puppet",id:"step-4-sign-the-puppet-cert-and-run-puppet",level:2},{value:"Step 4.1. Upgrade packages",id:"step-41-upgrade-packages",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bringing up new hosts is pretty easy, but has a few easy-to-miss steps. This\nprocess requires both root and a ",(0,r.kt)("inlineCode",{parentName:"p"},"/admin")," principal."),(0,r.kt)("p",null,"It's preferable to not bring up servers at a whim, but if you must, you should\nuse hostnames of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"hozer-{60..89}")," and their corresponding IP addresses\n(rather than allocating new ones). Please clean up when you're finished by\nrunning ",(0,r.kt)("inlineCode",{parentName:"p"},"virsh undefine hozer-{num}")," to remove the VM and ",(0,r.kt)("inlineCode",{parentName:"p"},"lvremove /dev/vg/hozer-{num}")," to remove the logical volume."),(0,r.kt)("h2",{id:"step-0-pick-a-hostname-and-ip"},"Step 0. Pick a hostname and IP"),(0,r.kt)("p",null,"If you are creating a brand-new host, you can find a list of IP addresses\nalready in use in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocf/dns/blob/master/etc/zones/db.226.229.169.in-addr.arpa"},"DNS repo on GitHub"),". Hostnames must be\nbased on (un)natural disasters; check out ",(0,r.kt)("inlineCode",{parentName:"p"},"~staff/server_name_ideas")," if you're\nhaving trouble thinking of one."),(0,r.kt)("h2",{id:"step-1-new-hosts-only-add-to-ldap-dns-puppet-kerberos"},"Step 1. (New hosts only) Add to LDAP, DNS, Puppet, Kerberos"),(0,r.kt)("p",null,"Only do these if a server with this hostname has never existed before (or if\nit's been long enough that some of these steps have never been done before).\nUnfortunately, these steps tend to change a lot as our infrastructure evolves."),(0,r.kt)("h3",{id:"step-11-add-the-ldap-entry"},"Step 1.1. Add the LDAP entry"),(0,r.kt)("p",null,"On supernova, ",(0,r.kt)("inlineCode",{parentName:"p"},"kinit $USER/admin ldap-add-host <hostname> <ip>"),". If setting up\na desktop, also do ",(0,r.kt)("inlineCode",{parentName:"p"},"kinit $USER/admin ldapvi cn=<hostname>")," and set the ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\nattribute to ",(0,r.kt)("inlineCode",{parentName:"p"},"desktop"),". If doing a staff VM, set it to ",(0,r.kt)("inlineCode",{parentName:"p"},"staffvm")," instead."),(0,r.kt)("h3",{id:"step-12-add-the-dns-record"},"Step 1.2. Add the DNS record"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocf/dns"},"DNS repo")," from GitHub, run ",(0,r.kt)("inlineCode",{parentName:"p"},"make"),", and push a commit\nwith the new records."),(0,r.kt)("h3",{id:"step-13-add-node-config-to-puppet"},"Step 1.3. Add node config to Puppet"),(0,r.kt)("p",null,"Only do this if you are creating a staff VM, a server which will run a service,\nor a special snowflake. Make a commit to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ocf/puppet"},"Puppet repo")," which\nadds a file ",(0,r.kt)("inlineCode",{parentName:"p"},"hieradata/nodes/<hostname>.yaml")," for the new host. Follow the\nexample of a similar node's ",(0,r.kt)("inlineCode",{parentName:"p"},"host.yaml")," file."),(0,r.kt)("h3",{id:"step-14-create-the-kerberos-keytab"},"Step 1.4. Create the Kerberos keytab"),(0,r.kt)("p",null,"On the puppetmaster, run ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo gen-keytab"),"."),(0,r.kt)("h2",{id:"step-2-create-the-host-run-debian-installer"},"Step 2. Create the host, run Debian installer"),(0,r.kt)("h3",{id:"virtual-hosts"},"Virtual hosts"),(0,r.kt)("p",null,"We have a handy script, ",(0,r.kt)("inlineCode",{parentName:"p"},"makevm"),", that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Creates a logical volume (disk) for the new VM"),(0,r.kt)("li",{parentName:"ul"},"Adds a new VM using virt-install and PXE boots it"),(0,r.kt)("li",{parentName:"ul"},"Waits for the Debian installer to finish"),(0,r.kt)("li",{parentName:"ul"},"SSHs to the new server and sets its IP")),(0,r.kt)("p",null,"To use it, log on to the target physical server (",(0,r.kt)("inlineCode",{parentName:"p"},"riptide"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"hal"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pandemic"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"jaws"),"),\nand run ",(0,r.kt)("inlineCode",{parentName:"p"},"makevm --help"),". A typical invocation looks something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"makevm -m 4096 -c 2 -s 15 arsenic 169.229.226.47\n")),(0,r.kt)("h3",{id:"physical-hosts"},"Physical hosts"),(0,r.kt)("p",null,"All you need to do to run the Debian installer is PXE boot. On desktops, you\nsometimes need to enable this in the BIOS before you can select it from the\nboot menu."),(0,r.kt)("p",null,"Be warned that the default action (automated install) happens after 5 seconds.\nSo don't PXE-boot your laptop and walk away!"),(0,r.kt)("p",null,"We preseed a bunch of settings (random questions, mirror locations, packages,\netc.). The install should be completely hands-free, and will restart to a login\ntty."),(0,r.kt)("h2",{id:"step-3-log-in-and-start-puppet"},"Step 3. Log in and start Puppet"),(0,r.kt)("h3",{id:"virtual-hosts-1"},"Virtual hosts"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"makevm")," script at the very end drops you into a shell. In this shell, you\nshould run:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"puppet agent --test"),".")),(0,r.kt)("h3",{id:"physical-hosts-1"},"Physical hosts"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log in as ",(0,r.kt)("inlineCode",{parentName:"p"},"root:r00tme"),". You can change the password if you want, but don't\nhave to (Puppet will change it soon anyway).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the IP address and hostname is set correctly. This may have\nhappened by DHCP if it's a desktop, but if not, fix it and restart:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Edit ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/hostname")," so it has the desired hostname instead of\ndhcp-",(0,r.kt)("em",{parentName:"li"},"whatever"),"."),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"hostname -F /etc/hostname"),"."),(0,r.kt)("li",{parentName:"ol"},"Find out what the ethernet interface's name and current IP address is\nby running ",(0,r.kt)("inlineCode",{parentName:"li"},"ip addr"),". The ethernet interface should be named something\nlike ",(0,r.kt)("inlineCode",{parentName:"li"},"eno1")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"enp4s2"),". (In the following instructions, substitute\n",(0,r.kt)("inlineCode",{parentName:"li"},"eno1")," with the correct name.)"),(0,r.kt)("li",{parentName:"ol"},"Remove the incorrect IP addresses with ",(0,r.kt)("inlineCode",{parentName:"li"},"ip addr del $WRONG_ADDRESS dev eno1"),"."),(0,r.kt)("li",{parentName:"ol"},"Add the correct IP addresses with ",(0,r.kt)("inlineCode",{parentName:"li"},"ip addr add $CORRECT_ADDRESS dev eno1"),". Make sure that \\$CORRECT_ADDRESS includes the netmask."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"puppet agent --test")))),(0,r.kt)("h2",{id:"step-4-sign-the-puppet-cert-and-run-puppet"},"Step 4. Sign the Puppet cert and run Puppet"),(0,r.kt)("p",null,"On the puppetmaster, ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo puppetserver ca list")," to see pending requests. When\nyou see yours, use ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo puppetserver ca sign --certname hostname.ocf.berkeley.edu"),"."),(0,r.kt)("p",null,"Log back into the host and run ",(0,r.kt)("inlineCode",{parentName:"p"},"puppet agent --test")," to start the Puppet\nrun. You may need to repeat this once or twice until the run converges."),(0,r.kt)("h3",{id:"step-41-upgrade-packages"},"Step 4.1. Upgrade packages"),(0,r.kt)("p",null,"The first Puppet run and various other things may be broken if one or more\npackages are out of date, e.g. Puppet. Remedy this with an ",(0,r.kt)("inlineCode",{parentName:"p"},"apt update && apt upgrade"),"."))}u.isMDXComponent=!0}}]);