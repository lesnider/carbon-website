"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[58823],{28399:function(e,t,r){r.d(t,{Z:function(){return b}});var s=r(67294),n=r(88650),a=r.n(n),i=r(1597),l=r(64905),o=r(81151),d=r(75900),u=r.n(d);var c=e=>{let{title:t,theme:r,tabs:n=[]}=e;return s.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12"},s.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:n}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:l,branch:o}=r||n,d=`${a}/edit/${o}${l}/src/pages${t}`;return a?s.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},s.createElement("div",{className:"cds--col"},s.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},p=r(56328),k=r(51721);let L=function(e){function t(){return e.apply(this,arguments)||this}return(0,k.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,n=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=a()(e,{lower:!0,strict:!0}),l=t===n,o=new RegExp(`${n}/?(#.*)?$`),d=r.replace(o,t);return s.createElement("li",{key:e,className:u()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},s.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return s.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},s.createElement("nav",{"aria-label":e},s.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(s.Component);var y=L,h=r(17680),S=r(75387),g=r(50041);var T=e=>{let{date:t}=e;const r=new Date(t);return t?s.createElement(g.X2,{className:"last-modified-date-module--row--XJoYQ"},s.createElement(g.sg,null,s.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var b=e=>{let{pageContext:t,children:r,location:n,Title:d}=e;const{frontmatter:u={},relativePagePath:k,titleType:L}=t,{tabs:g,title:b,theme:x,description:C,keywords:w,date:v}=u,{interiorTheme:A}=(0,S.Z)(),{site:{pathPrefix:E}}=(0,i.useStaticQuery)("2456312558"),f=E?n.pathname.replace(E,""):n.pathname,R=g?f.split("/").filter(Boolean).slice(-1)[0]||a()(g[0],{lower:!0}):"",N=x||A;return s.createElement(o.Z,{tabs:g,homepage:!1,theme:N,pageTitle:b,pageDescription:C,pageKeywords:w,titleType:L},s.createElement(c,{title:d?s.createElement(d,null):b,label:"label",tabs:g,theme:N}),g&&s.createElement(y,{title:b,slug:f,tabs:g,currentTab:R}),s.createElement(h.Z,{padded:!0},r,s.createElement(m,{relativePagePath:k}),s.createElement(T,{date:v})),s.createElement(p.Z,{pageContext:t,location:n,slug:f,tabs:g,currentTab:R}),s.createElement(l.Z,null))}},94169:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return o},default:function(){return y}});var s=r(45987),n=(r(67294),r(64983)),a=r(28399),i=r(16069);const l=["components"],o={},d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},u=d("AnchorLinks"),c=d("AnchorLink"),m=d("Row"),p=d("Column"),k={_frontmatter:o},L=a.Z;function y(e){let{components:t}=e,r=(0,s.Z)(e,l);return(0,n.kt)(L,Object.assign({},k,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(u,{mdxType:"AnchorLinks"},(0,n.kt)(c,{mdxType:"AnchorLink"},"How it works"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"How it works"),(0,n.kt)("p",null,"The Carbon inline loading component is used to notify users that their action is\nbeing processed. W3C WAI-ARIA ",(0,n.kt)("inlineCode",{parentName:"p"},'role="alert"')," and ",(0,n.kt)("inlineCode",{parentName:"p"},'aria-live="assertive"')," are\nused to ensure screen reader users are also provided the same information."),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("p",null,"This component has been validated to meet the\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/"},"WCAG 2.0 AA")," and\n",(0,n.kt)("a",{parentName:"p",href:"http://www.section508.gov/"},"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If the inline loading message is changed, be sure it is clear and concise.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#4_1_3"},"IBM Accessibility Checklist - Checkpoint 4.1.3 Status Message"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html"},"4.1.3"),")")),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Accessibility issues are tracked in the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+loading%22+"},"Carbon Component GitHub repository"),"."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test:"),(0,n.kt)("br",null),"- No violations")))))),(0,n.kt)("h3",null,"MacOS screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{mdxType:"Column"},(0,n.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver(VO) Test:"),(0,n.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Tab to the "Toggle state" button. VO announces "You are currently on a button, to select this button press Control-Option-Space."'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Press Control-Option-Space keys. VO announces, "Loading data".'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Press Control-Option-Space keys again and VO announces, "Data loaded".')))))))),(0,n.kt)("h3",null,"Windows screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- JAWS 19.1810.64",(0,n.kt)("br",null),"- Firefox version 67",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"JAWS test:"),(0,n.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Tab to the "Toggle state" button. JAWS announces "Toggle state button, to activate press the Space bar."'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Press the Space key. JAWS announces, "Alert, Loading data".'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Press the Space key again and JAWS announces, "Alert, Data loaded".')))))))),(0,n.kt)("h3",null,"iOS screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,n.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",(0,n.kt)("br",null),"- Safari version 13.1.3",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver test:"),(0,n.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Swipe Right to the Toggle state button. VO announces, "Toggle state button".'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Double tap to select the button. VO announces, "Loading data eclipse".'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Double tap to select the button again. VO announces, "Data loaded".')))))))))}y.isMDXComponent=!0}}]);