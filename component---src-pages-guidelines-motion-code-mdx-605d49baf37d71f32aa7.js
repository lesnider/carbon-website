"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[16005],{28399:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(88650),o=a.n(r),l=a(1597),i=a(64905),s=a(68636),m=a(75900),d=a.n(m);var c=e=>{let{title:t,theme:a,tabs:r=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:i,branch:s}=a||r,m=`${o}/edit/${s}${i}/src/pages${t}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=o()(e,{lower:!0,strict:!0}),i=t===r,s=new RegExp(`${r}/?(#.*)?$`),m=a.replace(s,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${m}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var N=k,f=a(17680),b=a(75387),h=a(50041);var y=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(h.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(h.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:t,children:a,location:r,Title:m}=e;const{frontmatter:d={},relativePagePath:g,titleType:k}=t,{tabs:h,title:v,theme:C,description:E,keywords:w,date:x}=d,{interiorTheme:P}=(0,b.Z)(),{site:{pathPrefix:T}}=(0,l.useStaticQuery)("2456312558"),D=T?r.pathname.replace(T,""):r.pathname,$=h?D.split("/").filter(Boolean).slice(-1)[0]||o()(h[0],{lower:!0}):"",S=C||P;return n.createElement(s.Z,{tabs:h,homepage:!1,theme:S,pageTitle:v,pageDescription:E,pageKeywords:w,titleType:k},n.createElement(c,{title:m?n.createElement(m,null):v,label:"label",tabs:h,theme:S}),h&&n.createElement(N,{title:v,slug:D,tabs:h,currentTab:$}),n.createElement(f.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(y,{date:x})),n.createElement(u.Z,{pageContext:t,location:r,slug:D,tabs:h,currentTab:$}),n.createElement(i.Z,null))}},8755:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return f}});var n=a(45987),r=(a(67294),a(64983)),o=a(28399);const l=["components"],i={},s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=s("PageDescription"),d=s("InlineNotification"),c=s("Row"),p=s("Column"),u=s("ResourceCard"),g=s("MdxIcon"),k={_frontmatter:i},N=o.Z;function f(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,r.kt)(N,Object.assign({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{mdxType:"PageDescription"},(0,r.kt)("p",null,"The Carbon motion package empowers consistent cadence and movement of elements\nacross digital experiences.")),(0,r.kt)(d,{mdxType:"InlineNotification"},(0,r.kt)("p",null,"If you’re using ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/react"),", you probably don’t need need to install the\nmotion package separately. See our ",(0,r.kt)("a",{parentName:"p",href:"/developing/frameworks/react/"},"Carbon React"),"\nguide to start building.")),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/motion")," package enables you to access motion curves and durations\nbuilt for the IBM Design Language in Sass. You can access these values directly\nfrom the package by writing the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/motion';\n.selector {\n  // Set `transition-timing-function` directly\n  @include motion.motion(standard, productive);\n\n  // Alternatively\n  transition: opacity motion.motion(standard, productive);\n\n  // Or use a duration\n  transition: opacity motion.$duration-fast-01;\n}\n")),(0,r.kt)("h4",null,"API"),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$duration-fast-01")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$duration-fast-02")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$duration-moderate-01")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$duration-moderate-02")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$duration-slow-01")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$duration-slow-02")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$easings")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Map")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@mixin motion")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mixin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"@function motion")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mixin")))),(0,r.kt)("h3",null,"JavaScript"),(0,r.kt)("p",null,"If you’re using ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/motion")," as a JavaScript dependency, we export our\neasings and a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"motion")," that you can use. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// CommonJS\nconst { easings, motion } = require('@carbon/motion');\n")),(0,r.kt)("p",null,"You can also include this as a JavaScript module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ESM\nimport { easings, motion } from '@carbon/motion';\n\nmotion('standard', 'productive'); // Returns a string `cubic-bezier()` function\n")),(0,r.kt)("h3",null,"Configuration"),(0,r.kt)("p",null,"You can configure parts of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/motion")," package with Sass Modules. For\nexample, you can change the ",(0,r.kt)("inlineCode",{parentName:"p"},"$prefix")," used by writing the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/motion' with ($prefix: 'custom-prefix');\n")),(0,r.kt)("p",null,"For a full list of options that you can configure, check out the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Option"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"$prefix")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The prefix that is used in selectors, CSS Custom Properties, etc."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'cds'"))))),(0,r.kt)("h2",null,"Resources"),(0,r.kt)(c,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(p,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(u,{subTitle:"IBM motion generator",href:"https://ibm.github.io/motion/",mdxType:"ResourceCard"},(0,r.kt)(g,{name:"bee",mdxType:"MdxIcon"})))))}f.isMDXComponent=!0}}]);