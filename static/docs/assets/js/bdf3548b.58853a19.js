"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"Ruby on Rails"},o=void 0,s={unversionedId:"services/webapps/rails",id:"services/webapps/rails",title:"Ruby on Rails",description:"Note: This document only applies to student groups with virtual hosts who",source:"@site/docs/services/webapps/rails.md",sourceDirName:"services/webapps",slug:"/services/webapps/rails",permalink:"/docs/services/webapps/rails",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/services/webapps/rails.md",tags:[],version:"current",frontMatter:{title:"Ruby on Rails"},sidebar:"tutorialSidebar",previous:{title:"Python (Django, Flask, etc.)",permalink:"/docs/services/webapps/python"},next:{title:"What type of web hosting do I need?",permalink:"/docs/services/webhostingsolutions"}},p={},l=[{value:"Setting up RVM",id:"setting-up-rvm",level:2},{value:"Installing unicorn",id:"installing-unicorn",level:2},{value:"Preparing your app to be supervised",id:"preparing-your-app-to-be-supervised",level:2},{value:"Supervise your app with systemd",id:"supervise-your-app-with-systemd",level:2},{value:"Suggestions/improvements?",id:"suggestionsimprovements",level:2}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: This document only applies to student groups with virtual hosts who\nhave applied for apphosting. For normal user accounts or for groups without\napphosting, you'll want to host with FastCGI instead. See our instructions for\nthat ",(0,a.kt)("a",{parentName:"strong",href:"/docs/services/web/rails"},"here"),".")),(0,a.kt)("p",null,"You will want to deploy your application using ",(0,a.kt)("a",{parentName:"p",href:"https://rvm.io/"},"RVM")," so that you can easily\ninstall and manage dependencies and versions."),(0,a.kt)("h2",{id:"setting-up-rvm"},"Setting up RVM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a directory for your app to live in:"),(0,a.kt)("p",{parentName:"li"},"mkdir -p ~/myapp\ncd ~/myapp")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install RVM in your home directory. Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"rvm")," is terrible and will\nmodify your shell config files without asking, but that's probably what you\nwant, since it will make using and managing Ruby/Rails easier."),(0,a.kt)("p",{parentName:"li"},"Go find ",(0,a.kt)("a",{parentName:"p",href:"https://rvm.io/"},"the RVM commands")," appropriate for your app, and copy the\nlines straight into your shell to install it. In general this is a bad way\nto install things, but it only has to be done once. At the time of writing,\nit looks like this:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"gpg2 --keyserver hkp://keys.gnupg.net --recv-keys D39DC0E3\ncurl -sSL https://get.rvm.io | bash -s stable\n")),(0,a.kt)("p",{parentName:"li"},"Go ahead and run it, and source ",(0,a.kt)("inlineCode",{parentName:"p"},"rvm"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},". ~/.rvm/scripts/rvm\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install whatever version of Ruby you want. (Newer is better)."),(0,a.kt)("p",{parentName:"li"},"rvm install ruby-2.4.0\nrvm use ruby-2.4.0")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Copy your code to ",(0,a.kt)("inlineCode",{parentName:"p"},"~/myapp/src")," or similar, and install any dependencies\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle install")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"gem")," manually, if you aren't using bundler)."),(0,a.kt)("p",{parentName:"li"},"This will download and build whatever gems you have in your ",(0,a.kt)("inlineCode",{parentName:"p"},"Gemfile"),". We've\ntried to install all the headers (dev packages) needed for building common\ngems, but if building a gem fails due to a missing header, just ",(0,a.kt)("a",{parentName:"p",href:"/docs/contact"},"send us an email")," so we can add it."))),(0,a.kt)("h2",{id:"installing-unicorn"},"Installing unicorn"),(0,a.kt)("p",null,"We recommend using unicorn to serve your application. After setting up RVM, add\na few lines to your app's ",(0,a.kt)("inlineCode",{parentName:"p"},"Gemfile")," (or add a single line if you already have a\n",(0,a.kt)("inlineCode",{parentName:"p"},":production")," group):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"group :production do\n  gem 'unicorn'\nend\n")),(0,a.kt)("p",null,"and run ",(0,a.kt)("inlineCode",{parentName:"p"},"bundle install")," to install it, as with any new gems."),(0,a.kt)("h2",{id:"preparing-your-app-to-be-supervised"},"Preparing your app to be supervised"),(0,a.kt)("p",null,"Create a file at ",(0,a.kt)("inlineCode",{parentName:"p"},"~/myapp/run")," with content like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!/bin/bash -e\n. ~/.rvm/scripts/rvm\ncd ~/myapp/src\nRAILS_ENV=production \\\n      exec ~/.rvm/gems/ruby-2.4.0/bin/unicorn_rails \\\n      -l /srv/apps/$(whoami)/$(whoami).sock\n")),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"~/myapp/src")," with the path to your app (make sure the path is\ncorrect for the version of Ruby you are using), then make ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," executable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"chmod +x ~/myapp/run\n")),(0,a.kt)("p",null,"Test executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," script. You should be able to access your website while\nrunning it (or see any errors in your terminal)."),(0,a.kt)("p",null,"Some things to keep in mind:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You may need to migrate your database first."),(0,a.kt)("li",{parentName:"ul"},"Make sure you've set secret keys for the app and any gems that need them\n(e.g. devise)."),(0,a.kt)("li",{parentName:"ul"},"Static file serving is off by default in production, but you'll want to turn\nit on: set both ",(0,a.kt)("inlineCode",{parentName:"li"},"config.assets.compile")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"config.serve_static_assets"),"\n(rails 4.1), ",(0,a.kt)("inlineCode",{parentName:"li"},"config.serve_static_files")," (rails 4.2), or\n",(0,a.kt)("inlineCode",{parentName:"li"},"config.public_file_server.enabled")," (rails 5) to true in\n",(0,a.kt)("inlineCode",{parentName:"li"},"config/environments/production.rb"),".")),(0,a.kt)("h2",{id:"supervise-your-app-with-systemd"},"Supervise your app with systemd"),(0,a.kt)("p",null,"Cool, your app works. ",(0,a.kt)("a",{parentName:"p",href:"/docs/services/webapps#supervise"},"Set up systemd")," to\nsupervise your app (so that it starts and restarts automatically)."),(0,a.kt)("h2",{id:"suggestionsimprovements"},"Suggestions/improvements?"),(0,a.kt)("p",null,"If you have a better way to host Rails-based apps on the app server (or a\nsuggestion for how we could improve this documentation), ",(0,a.kt)("a",{parentName:"p",href:"/docs/contact"},"send us an email"),"!"))}c.isMDXComponent=!0}}]);