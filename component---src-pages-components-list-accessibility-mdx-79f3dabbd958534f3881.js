"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[19758],{28399:function(t,e,r){r.d(e,{Z:function(){return g}});var i=r(67294),n=r(88650),s=r.n(n),l=r(1597),a=r(64905),o=r(81151),d=r(75900),u=r.n(d);var m=t=>{let{title:e,theme:r,tabs:n=[]}=t;return i.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var c=t=>{let{relativePagePath:e,repository:r}=t;const{site:{siteMetadata:{repository:n}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:a,branch:o}=r||n,d=`${s}/edit/${o}${a}/src/pages${e}`;return s?i.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},p=r(56328),h=r(51721);let k=function(t){function e(){return t.apply(this,arguments)||this}return(0,h.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:r}=this.props,n=r.split("/").filter(Boolean).slice(-1)[0],a=e.map((t=>{const e=s()(t,{lower:!0,strict:!0}),a=e===n,o=new RegExp(`${n}/?(#.*)?$`),d=r.replace(o,e);return i.createElement("li",{key:t,className:u()({"PageTabs-module--selected-item--aBB0K":a},"PageTabs-module--list-item--024o6")},i.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},t))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":t},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},a))))))},e}(i.Component);var L=k,y=r(17680),S=r(75387),T=r(50041);var w=t=>{let{date:e}=t;const r=new Date(e);return e?i.createElement(T.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(T.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var g=t=>{let{pageContext:e,children:r,location:n,Title:d}=t;const{frontmatter:u={},relativePagePath:h,titleType:k}=e,{tabs:T,title:g,theme:x,description:b,keywords:f,date:C}=u,{interiorTheme:v}=(0,S.Z)(),{site:{pathPrefix:I}}=(0,l.useStaticQuery)("2456312558"),R=I?n.pathname.replace(I,""):n.pathname,A=T?R.split("/").filter(Boolean).slice(-1)[0]||s()(T[0],{lower:!0}):"",O=x||v;return i.createElement(o.Z,{tabs:T,homepage:!1,theme:O,pageTitle:g,pageDescription:b,pageKeywords:f,titleType:k},i.createElement(m,{title:d?i.createElement(d,null):g,label:"label",tabs:T,theme:O}),T&&i.createElement(L,{title:g,slug:R,tabs:T,currentTab:A}),i.createElement(y.Z,{padded:!0},r,i.createElement(c,{relativePagePath:h}),i.createElement(w,{date:C})),i.createElement(p.Z,{pageContext:e,location:n,slug:R,tabs:T,currentTab:A}),i.createElement(a.Z,null))}},30696:function(t,e,r){r.r(e),r.d(e,{_frontmatter:function(){return o},default:function(){return L}});var i=r(45987),n=(r(67294),r(64983)),s=r(28399),l=r(16069);const a=["components"],o={},d=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)},u=d("AnchorLinks"),m=d("AnchorLink"),c=d("Row"),p=d("Column"),h={_frontmatter:o},k=s.Z;function L(t){let{components:e}=t,r=(0,i.Z)(t,a);return(0,n.kt)(k,Object.assign({},h,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)(u,{mdxType:"AnchorLinks"},(0,n.kt)(m,{mdxType:"AnchorLink"},"How it works"),(0,n.kt)(m,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(m,{mdxType:"AnchorLink"},"Resources"),(0,n.kt)(m,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"How it works"),(0,n.kt)("p",null,"Different List elements are used to add structure to a group of related\ninformation. The List Carbon component provides both an ordered list and an\nunordered list which can contain nested lists. It’s important to understand that\ndifferent types of lists are used to group information according to its nature\nto provide orientation for users. Ordered lists are used for sequential\ninformation and are automatically enumerated by the browser. Unordered lists are\nused when the order of the items is not relevant and are marked with bullets."),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("p",null,"This component has been validated to meet the\n",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG20/"},"WCAG 2.0 AA")," and\n",(0,n.kt)("a",{parentName:"p",href:"http://www.section508.gov/"},"Section 508")," accessibility guidelines, however\nchanges made by the content owner can affect accessibility compliance. Be sure\nto review and follow the guidance in this section when updating or adding new\ncontent to this component."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ensure content such as HTML elements and form controls are included using the\nappropriate Carbon Components and tested for accessibility."),(0,n.kt)("li",{parentName:"ol"},"Lists should not be used for visual indentation or layout purposes.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("h4",null,"Helpful resources for creating customized accessible implementations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/tutorials/page-structure/content/"},"W3C Content Structure tutorial"),"\ncovers the usage of lists."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_1"},"IBM Accessibility Checklist - Checkpoint 1.3.1 Info and Relationships"),"\n(WCAG Technique ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Techniques/html/H48"},"H48"),")")),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Accessibility issues are tracked in the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+list%22+"},"Carbon Component GitHub repository"),"."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(c,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test"),(0,n.kt)("br",null),"- No Violations")))))),(0,n.kt)("h3",null,"macOS Screen reader tests"),(0,n.kt)(c,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver(VO) test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Control-Option-Right Arrow to read the first list item. VO announces that there are three items in the list, then reads the item number, position, and text."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Control-Option-Right Arrow to read the next item and VO announces you are in another list that contains two items."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Continue to navigate to each item using Control-Option-Right Arrow and VO announces similar information for each item and advises when you reach the end of th nested list and the parent list.")))),(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Safari version 13.0.2",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver(VO) test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Control-Option-Right Arrow to read the first list item. VO announces that there are three items in the list, then reads the item number, position, and text. (Note: Safari displays the first list item as 0)"),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Control-Option-Right Arrow to read the next item and VO announces you are in another list that contains two items."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Continue to navigate to each item using Control-Option-Right Arrow and VO announces similar information for each item and advises when you reach the end of th nested list and the parent list.")))))))),(0,n.kt)("h3",null,"Windows screen reader tests"),(0,n.kt)(c,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- Firefox version 67",(0,n.kt)("br",null),"- JAWS 19.1810.64",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"JAWS test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Navigate the list with Up and Down Arrow keys."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'JAWS announces, "The beginning of the list, number of items in the list, nesting level, content of the list item, and end of list".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Information and the list item content are announced on two separate lines on the virtual viewer. For example, "List of 2 items nesting level 1. a. Ordered list level 2".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Bullets and item numbers are also placed on a separate line.")))),(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- Chrome version 71.0.3578.98 (Official Build) (64-bit)",(0,n.kt)("br",null),"- JAWS version 19.1810.64",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"JAWS test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Navigate the list with Up and Down Arrow keys."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'JAWS announces, "The beginning of the list, number of items in the list, nesting level, content of the list item, and end of list".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Information and the list item content are announced on two separate lines on the virtual viewer. For example, "List of 2 items nesting level 1. a. Ordered list level 2".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Bullets and item numbers are also placed on a separate line.")))),(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- Chrome version 71.0.3578.98 (Official Build) (64-bit)",(0,n.kt)("br",null),"- NVDA version 2018.4.1",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"NVDA test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Navigate the list with Up and Down Arrow keys."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'NVDA announces, "The beginning of the list, number of items in the list, nesting level, content of the list item, and end of list".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'List item parameters are announced together with the list item content. For example, "List with 3 items. 1. Ordered list. Level 1".')))))))),(0,n.kt)("h3",null,"Android screen reader tests"),(0,n.kt)(c,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- Android version 9 with Talkback",(0,n.kt)("br",null),"- Chrome version 71.0.3578.98 (Official Build) (64-bit)",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"Talkback test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Navigate list items by swiping left or right, or using the Left and Right Arrow keys."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'Talkback announces, "In list" when entering a list. "Out of list" when exiting a list.'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Talkback also announces entering or exiting nested lists. Number of list items, nesting levels, and content of the list item."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Bullets and numbers are announced separately from the list item content.")))))))),(0,n.kt)("h3",null,"iOS screen reader tests"),(0,n.kt)(c,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(l.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(l.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(l.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,n.kt)(l.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(l.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",(0,n.kt)("br",null),"- Safari version 13.1.3",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(l.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver test:"),(0,n.kt)(l.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Navigate list items by swiping left or right, or using the Left and Right Arrow keys on the keyboard when the quick navigation is turned on."),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'iOS announces, "The start of the list, nesting level, the content of the list item and the end of the list".'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},'When navigating the list, "list start" is announced on the beginning of the list, and "list end" is announced at the end of the list, regardless of the direction we are approaching from.'),(0,n.kt)(l.ListItem,{mdxType:"ListItem"},"Information about the list, bullets and numbers and list item contents are pronounced separately, we have to navigate through these one by one.")))))))))}L.isMDXComponent=!0}}]);