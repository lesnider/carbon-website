"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[59258],{45959:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return a},default:function(){return C}});var o=n(45987),s=(n(67294),n(3905)),p=n(3624),c=n(41652);const i=["components"],a={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)},d=r("PageDescription"),m=r("Row"),l=r("Column"),u=r("ResourceCard"),y=r("MdxIcon"),b=r("ComponentDemo"),g=r("ComponentVariant"),h={_frontmatter:a},k=p.Z;function C(e){let{components:t}=e,n=(0,o.Z)(e,i);return(0,s.kt)(k,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(d,{mdxType:"PageDescription"},(0,s.kt)("p",null,"Preview the code snippet component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,s.kt)("h2",null,"Documentation"),(0,s.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,s.kt)(l,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--inline",mdxType:"ResourceCard"},(0,s.kt)(y,{name:"react",mdxType:"MdxIcon"}))),(0,s.kt)(l,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(u,{subTitle:"Web Components",href:"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--inline",mdxType:"ResourceCard"},(0,s.kt)(y,{name:"webcomponents",mdxType:"MdxIcon"}))),(0,s.kt)(l,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",mdxType:"ResourceCard"},(0,s.kt)(y,{name:"angular",mdxType:"MdxIcon"}))),(0,s.kt)(l,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,s.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default",mdxType:"ResourceCard"},(0,s.kt)(y,{name:"vue",mdxType:"MdxIcon"})))),(0,s.kt)("h2",null,"Live demo"),(0,s.kt)(b,{scope:{codeSnippet:c.o,codeSnippetSingle:c.L},components:[{id:"code-snippet-single",label:"Single line"},{id:"code-snippet-multi",label:"Multi line"},{id:"code-snippet-inline",label:"Inline"}],mdxType:"ComponentDemo"},(0,s.kt)(g,{id:"code-snippet-single",knobs:{CodeSnippet:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--singleline","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--singleline",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default"},mdxType:"ComponentVariant"},`\n    <CodeSnippet type="single">\n    ${c.L}\n    </CodeSnippet>\n`),(0,s.kt)(g,{id:"code-snippet-multi",knobs:{CodeSnippet:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--multiline","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--multiline",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default"},mdxType:"ComponentVariant"},`\n      <CodeSnippet type="multi">\n      {\`${c.o}\`}\n      </CodeSnippet>\n  `),(0,s.kt)(g,{id:"code-snippet-inline",knobs:{CodeSnippet:["disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-codesnippet--inline","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-code-snippet--inline",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-code-snippet--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcodesnippet--default"},mdxType:"ComponentVariant"},`\n    <CodeSnippet type="inline">${c.L}</CodeSnippet>\n`)),(0,s.kt)("h2",null,"Sample data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'const codeSnippet = `"scripts": {\n  "build": "lerna run build --stream --prefix --npm-client yarn",\n  "ci-check": "carbon-cli ci-check",\n  "clean": "lerna run clean && lerna clean --yes && rimraf node_modules",\n  "doctoc": "doctoc --title \'## Table of Contents\'",\n  "format": "prettier --write \'**/*.{js,md,scss,ts}\' \'!**/{build,es,lib,storybook,ts,umd}/**\'",\n  "format:diff": "prettier --list-different \'**/*.{js,md,scss,ts}\' \'!**/{build,es,lib,storybook,ts,umd}/**\' \'!packages/components/**\'",\n  "lint": "eslint actions config codemods packages",\n  "lint:styles": "stylelint \'**/*.{css,scss}\' --report-needless-disables --report-invalid-scope-disables",\n  "sync": "carbon-cli sync",\n  "test": "cross-env BABEL_ENV=test jest",\n  "test:e2e": "cross-env BABEL_ENV=test jest --testPathPattern=e2e --testPathIgnorePatterns=\'examples,/packages/components/,/packages/react/\'"\n},\n"resolutions": {\n  "react": "~16.9.0",\n  "react-dom": "~16.9.0",\n  "react-is": "~16.9.0",\n  "react-test-renderer": "~16.9.0"\n}`;\n\nconst codeSnippetSingle = `node -v`;\n')))}C.isMDXComponent=!0}}]);