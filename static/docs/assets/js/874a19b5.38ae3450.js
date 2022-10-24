"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"WordPress"},s=void 0,i={unversionedId:"services/web/wordpress",id:"services/web/wordpress",title:"WordPress",description:"WordPress is a popular CMS (content management system) on the Web.",source:"@site/docs/services/web/wordpress.md",sourceDirName:"services/web",slug:"/services/web/wordpress",permalink:"/docs/services/web/wordpress",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/services/web/wordpress.md",tags:[],version:"current",frontMatter:{title:"WordPress"},sidebar:"tutorialSidebar",previous:{title:"Ruby on Rails",permalink:"/docs/services/web/rails"},next:{title:"Web application hosting (group)",permalink:"/docs/services/webapps/"}},l={},p=[{value:"Installing WordPress",id:"installing-wordpress",level:2},{value:"Migrating from WordPress.com to OCF",id:"migrating-from-wordpresscom-to-ocf",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"I forgot my admin password and can&#39;t log in",id:"i-forgot-my-admin-password-and-cant-log-in",level:3},{value:"I forgot my MySQL (database) password",id:"i-forgot-my-mysql-database-password",level:3},{value:"My site URL is configured incorrectly",id:"my-site-url-is-configured-incorrectly",level:3}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"WordPress is a popular CMS (content management system) on the Web."),(0,n.kt)("p",null,"OCF's ",(0,n.kt)("a",{parentName:"p",href:"/docs/services/web"},"web hosting")," supports local WordPress installations,\nand groups using WordPress are eligible for ",(0,n.kt)("a",{parentName:"p",href:"/docs/services/vhost"},"virtual hosting")," (mygroup.berkeley.edu names)."),(0,n.kt)("p",null,"Instructions for using WordPress are provided below; you can also ",(0,n.kt)("a",{parentName:"p",href:"/staff-hours"},"drop by during staff hours")," for in-person assistance."),(0,n.kt)("h2",{id:"installing-wordpress"},"Installing WordPress"),(0,n.kt)("p",null,"The easiest way to set up WordPress is via ",(0,n.kt)("a",{parentName:"p",href:"/docs/services/shell"},"SSH"),". Some\nsimple instructions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to our ",(0,n.kt)("a",{parentName:"p",href:"https://ssh.ocf.berkeley.edu/"},"web-based SSH client")," and sign in\nwith your username and password.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create your web root by entering ",(0,n.kt)("inlineCode",{parentName:"p"},"makehttp")," and hitting enter.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create your MySQL database by entering ",(0,n.kt)("inlineCode",{parentName:"p"},"makemysql"),". Copy the password it\ngives you -- you'll need it later.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to your web directory and download WordPress by entering these lines\nindividually:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/public_html\nwp core download\n")),(0,n.kt)("p",{parentName:"li"},"This will download the latest version of WordPress into your web directory\nusing ",(0,n.kt)("a",{parentName:"p",href:"https://wp-cli.org/"},"wp-cli"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visit your web admin dashboard and complete the installation process. Your\nwebsite will be ",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.ocf.berkeley.edu/~username")," and the dashboard\n",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.ocf.berkeley.edu/~username/wp-admin"),"."),(0,n.kt)("p",{parentName:"li"},"You can choose whatever you want for most options, but you'll need to use:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database Name:")," Your user name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database User Name:")," Your user name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database Password:")," Your MySQL password (the one you copied from step 3\nabove)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Database Host:")," ",(0,n.kt)("inlineCode",{parentName:"li"},"mysql")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Table Prefix:")," Anything you want (the default ",(0,n.kt)("inlineCode",{parentName:"li"},"wp_")," is fine)")))),(0,n.kt)("p",null,"Your WordPress installation is now ready! You can log in using the username and\npassword you created and start configuring your site."),(0,n.kt)("h2",{id:"migrating-from-wordpresscom-to-ocf"},"Migrating from WordPress.com to OCF"),(0,n.kt)("p",null,"If you already have a site hosted at WordPress.com and you'd like to move it to\nOCF web hosting, for example, to become eligible for ",(0,n.kt)("a",{parentName:"p",href:"/docs/services/vhost"},"virtual hosting"),", you can move most of your website's functionality and content\nto the OCF's servers. Generally, the process is simple and sites migrated from\nWordPress.com hosting to the OCF function quite well, apart from possible minor\ndifferences in the appearance of themes. However, if you're looking to create\nyour website from scratch, in most cases it will be much easier to just install\nWordPress on your OCF account and start editing it here, rather than creating\nit locally or on another provider like WordPress.com and transferring things\nover."),(0,n.kt)("p",null,"If you have an old WordPress installation lying around -- if you are replacing\nan old student group website, for example -- you should archive it before\nproceeding. See the example on our ",(0,n.kt)("a",{parentName:"p",href:"/docs/services/web/backups"},"backup page")," to\neasily make a backup over SSH."),(0,n.kt)("p",null,"The basic steps to migration are as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the steps above to install WordPress on your OCF account.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the web admin dashboard to install all the themes and plugins you were\nusing at WordPress.com")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into your WordPress.com dashboard and go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings > Export")," to\ndownload a zipped XML file with all your site's posts and content. Note that\nthis export usually will not include all of your media content.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Unzip this file and change the file extension of all .xml files to .wxr")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Log into the dashboard at your OCF WordPress installation and go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Tools > Import > WordPress"),", then upload the .wxr file with all your content.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You will have to re-upload most of your media files to your OCF WordPress\ninstallation. Additionally, you should try and go through most of your posts\nand pages with images, as you may need to relink things again."))),(0,n.kt)("p",null,"Further details can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://en.support.wordpress.com/moving-to-a-self-hosted-wordpress-site/"},"the support page by WordPress.com"),"."),(0,n.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,n.kt)("h3",{id:"i-forgot-my-admin-password-and-cant-log-in"},"I forgot my admin password and can't log in"),(0,n.kt)("p",null,'First, try using the "Forgot Password" feature on your site. You can find a\nlink from the login page.'),(0,n.kt)("p",null,"If you're not able to recover your password via email, you can use\n",(0,n.kt)("a",{parentName:"p",href:"https://wp-cli.org/"},"wp-cli")," instead, using the instructions below. (If you're not\ncomfortable following these instructions, consider coming in to ",(0,n.kt)("a",{parentName:"p",href:"/staff-hours"},"staff hours")," instead."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to our ",(0,n.kt)("a",{parentName:"p",href:"https://ssh.ocf.berkeley.edu/"},"web-based SSH client")," and sign in\nwith your username and password.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change directory to your WordPress installation (probably ",(0,n.kt)("inlineCode",{parentName:"p"},"~/public_html"),",\nunless you changed it):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/public_html\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Figure out your username using the command ",(0,n.kt)("inlineCode",{parentName:"p"},"wp user list"),". You should see\noutput like the below:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ wp user list\n+----+------------+--------------+---------------+\n| ID | user_login | display_name | roles         |\n+----+------------+--------------+---------------+\n| 1  | admin      | Your Name    | administrator |\n+----+------------+--------------+---------------+\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Reset your password using the username given above."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ wp user update admin --user_pass=new_password\n")),(0,n.kt)("p",{parentName:"li"},"(Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"admin")," in the command above with your real username, and\n",(0,n.kt)("inlineCode",{parentName:"p"},"new_password")," with your new password.)"))),(0,n.kt)("h3",{id:"i-forgot-my-mysql-database-password"},"I forgot my MySQL (database) password"),(0,n.kt)("p",null,"The database password used by WordPress is recorded in the WordPress\nconfiguration file ",(0,n.kt)("inlineCode",{parentName:"p"},"wp-config.php")," on the line that looks like"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"define('DB_PASSWORD', 'password_here');\n")),(0,n.kt)("p",null,"If you ever need your password back, you can always find where WordPress is\ninstalled (usually ",(0,n.kt)("inlineCode",{parentName:"p"},"~/public_html")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"~/public_html/wordpress"),") and open\n",(0,n.kt)("inlineCode",{parentName:"p"},"wp-config.php")," in an editor or get the password over SSH like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cat ~/path/to/wordpress/wp-config.php | grep DB_PASSWORD\n")),(0,n.kt)("h3",{id:"my-site-url-is-configured-incorrectly"},"My site URL is configured incorrectly"),(0,n.kt)("p",null,"If your site URL is configured incorrectly, you may have issues such as being\nunable to log in or being caught in a redirect loop."),(0,n.kt)("p",null,"If that's the case, you can fix it by:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to our ",(0,n.kt)("a",{parentName:"p",href:"https://ssh.ocf.berkeley.edu/"},"web-based SSH client")," and sign in\nwith your username and password.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Change directory to your WordPress installation (probably ",(0,n.kt)("inlineCode",{parentName:"p"},"~/public_html"),",\nunless you changed it):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ~/public_html\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the following commands, substituting the correct URL for ",(0,n.kt)("inlineCode",{parentName:"p"},"example.com"),":"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ wp option update home 'https://example.com'\n$ wp option update siteurl 'https://example.com'\n")))),(0,n.kt)("p",null,"If you've just received virtual hosting and you're changing your site URL from\n",(0,n.kt)("inlineCode",{parentName:"p"},"https://www.ocf.berkeley.edu/~yourgroup")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"https://yourgroup.berkeley.edu"),",\nyou may additionally need to edit the ",(0,n.kt)("inlineCode",{parentName:"p"},".htaccess")," file in the root of your\nWordPress installation. Specifically, you should replace ",(0,n.kt)("inlineCode",{parentName:"p"},"/~yourgroup/")," with\n",(0,n.kt)("inlineCode",{parentName:"p"},"/")," whenever it occurs in that file."))}d.isMDXComponent=!0}}]);