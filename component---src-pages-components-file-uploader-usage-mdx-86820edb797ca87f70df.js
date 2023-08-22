"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[8756],{91769:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return h}});var l=t(45987),n=(t(67294),t(3905)),i=t(3624);const o=["components"],s={},r=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},p=r("PageDescription"),d=r("AnchorLinks"),c=r("AnchorLink"),g=r("ComponentDemo"),m=r("ComponentVariant"),u=r("Row"),A=r("Column"),b={_frontmatter:s},f=i.Z;function h(e){let{components:a}=e,t=(0,l.Z)(e,o);return(0,n.kt)(f,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(p,{mdxType:"PageDescription"},(0,n.kt)("p",null,"File uploaders allow users to select one or more files to upload to a specific\nlocation.")),(0,n.kt)(d,{mdxType:"AnchorLinks"},(0,n.kt)(c,{mdxType:"AnchorLink"},"Overview"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Live demo"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Formatting"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Content"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Universal behaviors"),(0,n.kt)(c,{mdxType:"AnchorLink"},"File uploader"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Drag and drop file uploader"),(0,n.kt)(c,{mdxType:"AnchorLink"},"References"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Feedback")),(0,n.kt)("h2",null,"Overview"),(0,n.kt)("p",null,"File uploaders allow users to upload content of their own. A file uploader is\ncommonly found in forms, but can also live as a standalone element. There are\ntwo variants of file uploaders—our default file uploader and a drag and drop\nfile uploader."),(0,n.kt)("h3",null,"Variants"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Variant"),(0,n.kt)("th",{parentName:"tr",align:null},"Way it works"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#file-uploader"},"File uploader")),(0,n.kt)("td",{parentName:"tr",align:null},"Upload one or more files by clicking an action button that prompts a file selection dialog.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#drag-and-drop-file-uploader"},"Drag and drop file uploader")),(0,n.kt)("td",{parentName:"tr",align:null},"Drag and drop selected files directly into a drop zone area to upload.")))),(0,n.kt)("h3",null,"When to use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Uploading one or more files."),(0,n.kt)("li",{parentName:"ul"},"Uploading files by dragging and dropping."),(0,n.kt)("li",{parentName:"ul"},"Showing the process of uploading.")),(0,n.kt)("h3",null,"When not to use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do not use upload in a modal when multiple files are uploaded, as uploaded\nfiles stack vertically.")),(0,n.kt)("h2",null,"Live demo"),(0,n.kt)(g,{components:[{id:"file-uploader",label:"File uploader"},{id:"drag-and-drop",label:"Drag and drop"},{id:"upload-states",label:"Upload states"}],mdxType:"ComponentDemo"},(0,n.kt)(m,{id:"file-uploader",knobs:{FileUploader:["multiple"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-fileuploader--file-uploader","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-file-uploader--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-file-uploader--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvfileuploader--default"},mdxType:"ComponentVariant"},'\n      <div className="cds--file__container">\n        <FileUploader\n          accept={[\n            \'.jpg\',\n            \'.png\'\n          ]}\n          buttonKind="primary"\n          buttonLabel="Add files"\n          filenameStatus="edit"\n          iconDescription="Clear file"\n          labelDescription="only .jpg files at 500mb or less"\n          labelTitle="Upload"\n        />\n      </div>\n    '),(0,n.kt)(m,{id:"drag-and-drop",knobs:{FileUploaderDropContainer:["multiple","disabled"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-fileuploader--drag-and-drop-upload-container-example-application","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-file-uploader--drag-and-drop-upload-container-example-application",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-file-uploader--drag-and-drop",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvfileuploader--default"},mdxType:"ComponentVariant"},"\n      <div className=\"cds--file__container\">\n        <strong className='cds--file--label'>Account photo</strong>\n        <p className='cds--label-description'>\n          Only .jpg and .png files. 500kb max file size\n        </p>\n        <FileUploaderDropContainer\n          accept={[\n            'image/jpeg',\n            'image/png'\n          ]}\n          labelText=\"Drag and drop files here or click to upload\"\n          tabIndex={0}\n        />\n      </div>\n    "),(0,n.kt)(m,{id:"upload-states",knobs:{FileUploaderItem:["status","invalid"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-fileuploader--file-uploader-item","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-file-uploader--file-uploader-item",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-file-uploader--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvfileuploader--default"},mdxType:"ComponentVariant"},"\n      <div className=\"cds--file__container\">\n        <FileUploaderItem name='color.jpg' errorSubject='File size exceeds limits' errorBody='500 kb max file size. Select a new file and try again.'/>\n      </div>\n    ")),(0,n.kt)("h2",null,"Formatting"),(0,n.kt)("h3",null,"Anatomy"),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAChklEQVQoz42RzU8TQRiH320VYwztYmlxUw9ohMQEQ7BNEaSAtBVUJHa0BbdoFGM0Bo+mVgryUUR64+LFg8R45eLJhL/AYFRku0uCQSi0Al0+dmfAQlPW7Eqi8fuXPMk77+HJ/GaAP9ULgqsPeFcfcI4O6iXUwlGmEPItZiiwWMDyA/+Vn4QwCvVwyMSAkaaBpmlwOp3AsiwghH7ht+HKw8BVhIE7ETZPlAWrFEWBw+ZC2mgqMNEmxuA5BnC3tRq8yAcIef8t5Ot6KcEdAd4dKeIcHe3PwZXTaK8qPm4vPeKwlVn9l7x5yHthP0KIRgiZEEL6vwuru4Gv7YFYbY+Rsz8oGYBc6l4La/b6fJZb1y6abrBnmasBP8MGWq2BQMAajUZ3qS2mpqao9UwapGQK+Lo+zaEl5nxI8TXd8L4mwgi2oBt2b+rz2rIj1jvb07nXt8f3XFHi0Kw0+AZFUJQRWFpago2NDZDFFfgUfEGNQYv6XBpa1LpC/SMYb4jmTjpCxe1FwzmVHZmwK5J9Vh7OPikNZofZoS2PoojG+IJ8AGNsIevrBTi1Yvh4+ym8zb8JXEXndyFf3U1pP+3pP/ih7H6TMsrlbOHFV5IYT0mpmZkv0vzsVpqIMsaEYCwTQlbXVteUVXF56J2hzS00DpaodVXPN6F6UIWn+/dO2EKMuvu8sNIQn19snZ1fbJmOL1yWZNJMCPZjjP2EEJ8syQGcSdtew3nDZFN0X+xkF8QqO3duWLMj9PTDhD0ETQCwnEpBIpHQmJubA0IIYIw11FmWJCDZTXijY0E4MwB/FtpC2m45JeqSyaQ+mUzqEomEjhCiwxhrqLMsSXqcSVNj0AzCucc7wi5N+BU7mVbCpL2kzQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader anatomy",title:"File uploader anatomy",src:"/static/76c4e62b484ddfb555c06be97743be8c/3cbba/file-uploader-usage-1.png",srcSet:["/static/76c4e62b484ddfb555c06be97743be8c/7fc1e/file-uploader-usage-1.png 288w","/static/76c4e62b484ddfb555c06be97743be8c/a5df1/file-uploader-usage-1.png 576w","/static/76c4e62b484ddfb555c06be97743be8c/3cbba/file-uploader-usage-1.png 1152w","/static/76c4e62b484ddfb555c06be97743be8c/92c65/file-uploader-usage-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Heading:")," Text to describe the upload section."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Description:")," Text to help the user make an informed selection."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Button or drop zone label:")," The action to select a file to upload."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Uploaded file:")," A file that has successfully been uploaded."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"x:")," The delete ",(0,n.kt)("inlineCode",{parentName:"li"},"x")," icon will remove the uploaded file.")),(0,n.kt)("h3",null,"Sizing"),(0,n.kt)("p",null,"The button and uploaded files should be the same height. If the file uploader is\npresent in a form with other inputs, use the same height for the form inputs and\nthe file uploader for consistency."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVQoz5XRv2sTYRzH8U+SQgsmubucORMyKIh2kFJ/xbrEQQxqXczTJm1zbVFTLYogLjq0g0MXs/gTpZPi4iCO+j+IXToHNL8utrmkuXueJ6lU00cuqItX1C+84TO94LkDfp6maQiHw72c7dZ/nd/v/71lWYaiKJAkCYlEAtlsFoSQP9rxVgdvQ5Y1BAYk7N0VgRTaE1TUyG5JjQaSQ8DN6VNIkTQISf0ddDCngdODEBBIjl7wxONH9504fvhA/NiRWGY8pZDUxRAhRCaEqIQQ3z+B70euY2XoFu4tncf8bCY0Np7W5i+NqbnsaHRWz0Sz+nRM1/VYPp/vE0KgUCh4GGNwcgUFgOrBa/7lQw8V6Yp4E7ux/TlweXu1f0aUMSHOpe83IMRb1Ot1dDqdHsQ577UjaOyf6389nA+eXPy+cGap+2Jksfts+G73ZfbRVlKIhlReoxHGmMY5j3DOg+12G06u4AKAD2rOX88th751zHd2o2zaZrG4aVdLW195gzLGOWOUc96ybVtYlvXcNE00m02fK3gHwIqa6yukHgx8qbfOlqvrM6Xq+uSn8tqUTfkE5yzDGMtwztOUUp1SGrcsC7Zte1zBVw6oXUVp6imaGxswqgYMw0ClUul9p18/wNmU0l6tVssB3Z/8GMDH8ByKk08c0Fur1Xy1Ws1rGIaXc+5ljPVyNqXURyn1uIE/AP1tNGmecptmAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader sizes",title:"File uploader sizes",src:"/static/6f1001627fb6d5958363195ebbba6a18/3cbba/file-uploader-usage-2.png",srcSet:["/static/6f1001627fb6d5958363195ebbba6a18/7fc1e/file-uploader-usage-2.png 288w","/static/6f1001627fb6d5958363195ebbba6a18/a5df1/file-uploader-usage-2.png 576w","/static/6f1001627fb6d5958363195ebbba6a18/3cbba/file-uploader-usage-2.png 1152w","/static/6f1001627fb6d5958363195ebbba6a18/92c65/file-uploader-usage-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"File uploader size"),(0,n.kt)("th",{parentName:"tr",align:null},"Height (px/rem)"),(0,n.kt)("th",{parentName:"tr",align:null},"Use case"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Large")),(0,n.kt)("td",{parentName:"tr",align:null},"48/3"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose this size when there is a lot of space to work with.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Medium")),(0,n.kt)("td",{parentName:"tr",align:null},"40/2.5"),(0,n.kt)("td",{parentName:"tr",align:null},"This is our default size and should be used whenever possible.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Small")),(0,n.kt)("td",{parentName:"tr",align:null},"32/2"),(0,n.kt)("td",{parentName:"tr",align:null},"Use when space is constricted or when placing a file uploader in a form that is long and complex.")))),(0,n.kt)("h3",null,"Alignment"),(0,n.kt)("p",null,"Left align the button or drop zone area with the uploaded files. Multiple files\nwill stack vertically."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACQUlEQVQoz42STUhUYRSGz507Oi40o0UWkaRBEzlBuAijVYtaRJDtok2ihAZToUUtgqJVf9TCdRkmkWDSQukHUigI0rRpciZNi+SO9975u3O/b84Zxr+ZE3dI0dLohYfvrJ7vvHAAlsIM7K0D3n0AitvYVXt5wV3RklfLGnLujY15ZUNjHsp/819hh5rjwL56BdoY9l2ch/ImBvVUHuAEg//hnMJsAxECEQEiFnDmVQl6Wwu0HHmjHNs/CC21vSXbGmcfb/fnhzY15QZLG3KjpQ35wzsv5JwvFSklsNNmBWsKWa2CB3vuwem9PZ5dZ+fafVe4v9LPPZub+dUOf+6Q0+H5h2yxEMLNzEXMrP5L6AnXXS15CyeLuP1lyaIwOsiOvCdremABZwYWZmkojfiZCANENCKlnBJC3EgkEpBKpdQ/he6gt7XyS82l6kDVueqpo3e2xs1Ej2HGxnUj+smMxgOINEqEI4g4QkTD6XT6m5Tyum3bIIT4S6gEva1FoYPXPO+g3m2e7ypLGrF+LaJN27Y9ns1mJxBxgoiW3q9SSkMIcXO9DQs8AwC9uQMW+8Y8STP2WjcM0zTNH4j4cyVE9F1KaUkp71qWBbZtry3U7vcp80+GIX3rhSceMW5rM5FuXdc7iagLEZchok4pZa8Q4kwymXQ2dK19h8zQDT54CjWKzgSBj6MQCodW3ZxDJpNxJODINE1TTNOEdYWPYAt0QAVEF9EVHgupk1OTKhGpiLhMJpNRnZqWZbkMw4BYLLZK9AuPLLaVIwn+4wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader left alignment",title:"File uploader left alignment",src:"/static/9c3694931ea2905b19df508e40e51fdc/3cbba/file-uploader-usage-3.png",srcSet:["/static/9c3694931ea2905b19df508e40e51fdc/7fc1e/file-uploader-usage-3.png 288w","/static/9c3694931ea2905b19df508e40e51fdc/a5df1/file-uploader-usage-3.png 576w","/static/9c3694931ea2905b19df508e40e51fdc/3cbba/file-uploader-usage-3.png 1152w","/static/9c3694931ea2905b19df508e40e51fdc/92c65/file-uploader-usage-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h3",null,"Placement"),(0,n.kt)("p",null,"When including a button as the action to upload a file, use either a primary or\ntertiary button depending on your use case. If there is already a primary button\npresent on the page, use a tertiary button for the file uploader so it does not\nconflict with the primary action."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQ4y5WTT0sbQRjG8x30lg9QyGdQ6MEP0HsP/Qwe9KQQtR6aUw+C5xRzCAmKh5BSzTG3QPAQYkJAXSiUJhs32b/ZmXmf8u5ksq6oxReendmdmd/MvO+zOQAgIkiVlZC6NeMsgFZ9pVRGehzImc5rwcO8gOPnr2uUf5yhWq2iVqslqtfrqFQq6Ha7GsgPxyd8uyQcnRO+Xuh2p0I4vdKbqeVJx/YMf8dT2LYN13URBEEi3/exWCxS4B+HsHVM2CwSPh4SNoqED9uEzycpUBEhjjzEEQMCzOdzhGGYwBgeRdF7rqzndAYz3N4/Igo9uJ4Hb6kM0CwyyV4lfVUIJH0uyG9bYjITUFIgjgWESCWl1MDn1XqpetxKqfC/4Hm5t2+c2objwbLQ799iOBwmGgwGGI1GsCwLjuM8vXLqO+PBhdCt2Zmj3W6j0Wig2WwmarVaKJfLKBQKKJVKKZAhU5dgu4SJS5gFhFgSvChrbM6VeTeb9Ho95PN5FA8OUiBXkb1ooAyMYoL/DMh2CYIw8Rxbhr91Oh2sr61hf3/vbdvoz9kcTqZzTGxn5b1YSNyN+vj0ZRffqzfZHL6m7L/8QslIgQ0jlqf4B+nI17anhKNLAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader button placement",title:"File uploader button placement",src:"/static/b9df3963b69c5f2dac7e612a0ca4647b/3cbba/file-uploader-usage-4.png",srcSet:["/static/b9df3963b69c5f2dac7e612a0ca4647b/7fc1e/file-uploader-usage-4.png 288w","/static/b9df3963b69c5f2dac7e612a0ca4647b/a5df1/file-uploader-usage-4.png 576w","/static/b9df3963b69c5f2dac7e612a0ca4647b/3cbba/file-uploader-usage-4.png 1152w","/static/b9df3963b69c5f2dac7e612a0ca4647b/92c65/file-uploader-usage-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h2",null,"Content"),(0,n.kt)("h3",null,"Main elements"),(0,n.kt)("h4",null,"Heading"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Informs users about the purpose of the upload section. “Upload files” is the\ndefault text that appears with the file uploader."),(0,n.kt)("li",{parentName:"ul"},"Keep the heading short and concise by limiting it to a single line of text.")),(0,n.kt)("h4",null,"Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Descriptions help communicate to the user what file size or format limitations\nthere are.")),(0,n.kt)("h4",null,"Button or drop zone label"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Button labels should be concise and describe the action that will be taken\nupon click. “Add files” is the default text that appears with the file\nuploader."),(0,n.kt)("li",{parentName:"ul"},"Drop zone area label should describe that you can either drag and drop a file\ninto the drop zone or click on the button to upload a file.")),(0,n.kt)("h4",null,"Uploaded file text"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The name of the file that has been uploaded.")),(0,n.kt)("h3",null,"Overflow"),(0,n.kt)("p",null,"Use an ellipsis (…) if the filename extends beyond the width of its parent\nelement."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABbUlEQVQoz5WTy0oDMRSG0+pKEFpcufHySq58Bpc+QnEjXlaiD+LCtS/QRQtdWZIMs7Bz6SQ5fzPTzEAlYZSCrZfABwdy8p8/h3MYaw8ARkQBAJ0/Et5tPP5iNpsFFosFK8syUFXVZ5Gvop+xz/NsFUzTlCVJ4pMOrbUnZVkeVVV1TETHAAJEdATgFMDBr4Kr1cqzmyTJq5TScc7ncRwrAIqIAgBypdSqKIpHXzzP852tgu03u0R0QUTXxpiBUuoKwDoDIrolorO2552/OHwWQrwLIaaccz6dTrkQgkspPW/z+dy7vMmyjGVZttmhr9YKdrXWl1rrB631nTHmHsA63t2TMeZca82MMd1fHaZp+iKlzDnnURRFMYCYiAIApFLKFEVx/2MPvcPRaMSGwyFzzu3Xdd1vmqbnnOsRUQ9AwMfW2r61ds85F8Zqq+BkMmHj8Zgtl0tW1zVrmsaLf5tDPyrW2pD3o+A/N4Vt2pQPgTT5Bv5pwdYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader button placement",title:"File uploader button placement",src:"/static/2fb818075fe95cc07c89e048631f95a4/3cbba/file-uploader-usage-5.png",srcSet:["/static/2fb818075fe95cc07c89e048631f95a4/7fc1e/file-uploader-usage-5.png 288w","/static/2fb818075fe95cc07c89e048631f95a4/a5df1/file-uploader-usage-5.png 576w","/static/2fb818075fe95cc07c89e048631f95a4/3cbba/file-uploader-usage-5.png 1152w","/static/2fb818075fe95cc07c89e048631f95a4/92c65/file-uploader-usage-5.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h3",null,"Further guidance"),(0,n.kt)("p",null,"For further content guidance, see Carbon’s\n",(0,n.kt)("a",{parentName:"p",href:"https://www.carbondesignsystem.com/guidelines/content/overview"},"content guidelines"),"."),(0,n.kt)("h3",null,"Loading states"),(0,n.kt)("p",null,"A file that is being uploaded has three distinct states—loading, success, and\nuploaded."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"84.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAACmUlEQVQ4y4WUv2/TQBTHX11QQIj+BWwMSBUMrBHir2BkYOnC0rFiaDtUYoSqEipiBrGytQsDQjAyQGmD2tQ+/zifz8nZd/cSO06I0ZkkalpXfdJHPp19X79733cHMAlEnA6hLMs5GGPQ7/eh30MIYwllmc29rw0jOP1gb28PNjc3YW1tDXZ3dyHPc9BaV+QZwoevCn61Bbz/HMCn7+xKwQbnfJ8Q4jmO84dSeoyIx1rrCkRshR0dJqneMdlGXWXNCTmOU9HtdqeC14UQLzjnbxhjrxlj24i4rbWuQMRXHaHfplI9i7sK4k5iTTUMswEhBI6OjkApBXEcQxAE4Hle9TRbNfNK/d826ygQiawScF0Pzgs2pti23SCENCiltymlS0EQVERRNAcNo6WAhrds+7Rxdr3BCJqULdu2q2e73bZGoxGMx+MKk8VwOJzxdzSEFIcgsxJsx7Ns+9SaahhmqbZaLaCUghFDxLtZlt3Psmw5z/NlRJzRQ1xOJD7opnjHC1PYeQpQW0Mp5cLElJtxHP/0PK90XTcPgqBAxEJrXWiNRdbX2SnF8iTofdz/kcG3373FWsGDgwNI09QILiRJ8jAMw0dhGDYZY01ErNCIzV4Pm1zgYy7w3omnwCnLCxnOakgIsQ4PDy0pZeWw67rg+z4URQGDwQDywQBGwwGEYgAsHcOJ7S86NTWsddm46/t+rcshm7ps17p8oQ8557MM5/tQVWNTGiHEpA/delPOnJRrQojnURRtMcbWOecbiLihta5AxHWl1Esp5ROzptPpLMwJ1pzlG5zzL67rCkKI7/s+RUSqta5ARE9KqZMkeRdFkTlVi1feNufDzJkeNQKXXlfnw9RmdXUVVlZWLtyHpmbmh4ZJa116H/4DHjRdSVvvhXoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader loading states",title:"File uploader loading states",src:"/static/02858754e5f83f21705f2e291817e493/3cbba/file-uploader-usage-6.png",srcSet:["/static/02858754e5f83f21705f2e291817e493/7fc1e/file-uploader-usage-6.png 288w","/static/02858754e5f83f21705f2e291817e493/a5df1/file-uploader-usage-6.png 576w","/static/02858754e5f83f21705f2e291817e493/3cbba/file-uploader-usage-6.png 1152w","/static/02858754e5f83f21705f2e291817e493/92c65/file-uploader-usage-6.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h3",null,"Interactions"),(0,n.kt)("h4",null,"Mouse"),(0,n.kt)("p",null,"Dragging your mouse anywhere within the bounds of the drop zone area with an\nattached file will enable you to drop it inside of the area and begin to upload."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB1klEQVQoz51RTW8SURQ9o7Qm1nRq0kIFsbGlUF007mqtoHEWrEXCj3Dhyl/gQlkQXbjo0vgR49a4Mpr4kdjGIFA6wMz0gzrNzHsDkQK2wrxJzGsYlwomvcnJPTe5OffkHmBAeTweSJKEVCqFRCLxF45U8XgcyWTyaIKR2bCLuXDEF5kNhy5E5oJ3b98Zfnw/M7ScfuR5eO/B0Jsnr47znZawn6sKrGTALhn9BU+f82M04IN3OjjuC80ET50NeEcC/vGJmfO+sangxGRoahKAUP2UA99ugZUNsEGCzWwFrZyK+mr5YitbuParIF9uZgtL1sq3qLWSj5qrcuxA3l1wFLLYXdP99v8c5j83hK8fG2gUazczzzsL6aed+fQz+1LmhT3/8nUn3N1qn+HVupdtWtNMIZKzYcHRqNBX8MP7H3j3toE92boB8BGADwP8JMCPcW6A79bBNmrofNHAVBpztmpwNmv9HXLNFLhmwqmYt3jVuM53zEWukyt821z6rZGoo9EYU+lVppI4KxkSUwiYQvo7bBdN/CyaOMjrJ5rrdKy5TsU92RLbJSraFSIylYqOSkeZQsRu/runF8jAUNyFsgF7TYd7XSW9H7m9N//h1OXdgv7PlA8BH3kP0dszY+0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader drop zone click target",title:"File uploader drop zone click target",src:"/static/5ad43ce4c5ead7a7932b74b226a22e18/3cbba/file-uploader-usage-7a.png",srcSet:["/static/5ad43ce4c5ead7a7932b74b226a22e18/7fc1e/file-uploader-usage-7a.png 288w","/static/5ad43ce4c5ead7a7932b74b226a22e18/a5df1/file-uploader-usage-7a.png 576w","/static/5ad43ce4c5ead7a7932b74b226a22e18/3cbba/file-uploader-usage-7a.png 1152w","/static/5ad43ce4c5ead7a7932b74b226a22e18/92c65/file-uploader-usage-7a.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("p",null,"To remove an uploaded file, click the “x” (or delete) icon."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABKElEQVQoz7WSPUvDUBSG3zY/0L2zS3fp0M0/4SalIBTUrUtDh6BdHESlna6WJrlt4s29N/3IPQnpIJFmCCKV4NAXHs5w4OGcwwFOFWNMBRFV9Ri/e0dzaBRFUSKlbIZhaAVBYAkhLCKyjDEllKXWhgtrvRINMf2AevfrhVEUwfd9uK6L5XJZTVVOlqXY8E+sVwLhG2tI5tUKm3EcXyqlBlLKnta6T0R9Y0wJpWlvF+m7rYzPtbs6iJt1Qkspde153vNisXjknE+IaGKMKaE0fdgK9bqJdFfOOTQPa4VgjMG2bQyHQziOgyzLqpWzfQ7xwhBMGWYDG/PxU/0NR6MR2u02Wq0WOp0O8jxHkiRIdgn2xRfYjY3Z7Rj3Zxdwuld/C3++zX84ab4B81BTaKGfvD8AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader uploaded file click target",title:"File uploader uploaded file click target",src:"/static/0bb6549146ba4fcda9f36ea024918049/3cbba/file-uploader-usage-7b.png",srcSet:["/static/0bb6549146ba4fcda9f36ea024918049/7fc1e/file-uploader-usage-7b.png 288w","/static/0bb6549146ba4fcda9f36ea024918049/a5df1/file-uploader-usage-7b.png 576w","/static/0bb6549146ba4fcda9f36ea024918049/3cbba/file-uploader-usage-7b.png 1152w","/static/0bb6549146ba4fcda9f36ea024918049/92c65/file-uploader-usage-7b.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h4",null,"Keyboard"),(0,n.kt)("h4",null,"Upload button or drop zone:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The file uploader button or drop zone can be activated by pressing ",(0,n.kt)("inlineCode",{parentName:"li"},"Space")," or\n",(0,n.kt)("inlineCode",{parentName:"li"},"Enter"),"."),(0,n.kt)("li",{parentName:"ul"},"After the file selection dialog closes, focus should retain the user’s point\nof regard and return to the element that invoked it.")),(0,n.kt)("h4",null,"Uploaded file:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pressing ",(0,n.kt)("inlineCode",{parentName:"li"},"Tab")," shifts focus to the “x” icon."),(0,n.kt)("li",{parentName:"ul"},"Pressing ",(0,n.kt)("inlineCode",{parentName:"li"},"Space")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Enter")," while the “x” icon is in focus will delete the\nfile.")),(0,n.kt)("p",null,"For additional keyboard interactions, see the\n",(0,n.kt)("a",{parentName:"p",href:"/components/file-uploader/accessibility"},"accessibility tab"),"."),(0,n.kt)("h3",null,"Validation"),(0,n.kt)("p",null,"When a specific file cannot be uploaded successfully it will show an error\nstate. We have an option for a single line or multi-line error state depending\non how descriptive the message needs to be. Error messages should provide clear\nguidance to help the user resolve the error."),(0,n.kt)("p",null,"If the error relates to the file uploader as a whole instead of an individual\nfile, you can alternatively use an inline error notification."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADHUlEQVQ4y3WUy28bVRSHf34gL8D9C5DYILGxChH8CWzZsII9S+iiQl2ULFqJNQt2qIhWBTWAo7hJ6zzc0DycOHaImkfjccYeZx4ee8a+d+wZ37Fjh0anGjekBMyRvsU90v10dPU7FzgvvrSMGoAmAJco7BFFTogiw38R9PpEEZ8o7BMhYGzx+SWcAHgBwCGCTQRBhFMiDIgwPOfkvB/gEYW8/xNa330/mq4NhJv5whfW/sHttlT6xpPLk+5RgDzpVZTJzvbOTafw57d8q/AJf34IvvMsNFbYvPszHAAMeIMbhlKr14k7Dvm9HgnfJ9HrkT8YUNeyqWPWqa3pSc45nHojOl744z1kAawDUa+q5v2GRV2jduIZtWHXsofC84ai0xmKbrcvPI88uXxHNCx0G1bkkkjTtBH6/BKICIdAqPVr8r3mdOrDVnJmgk0/nGCpuQk+lx7BUnMfsJm5j5r3H7zDpn6HtZC5cAS8PlSr0DiD8igNtrIGnt0EW10HD8jmwLcKr8nl0cosY5cIuqL8RxgboaoxTddjaqUSMw+Lb9Uk6Uq9dBS3ZDluyeW4VQ6oxBtSKd4oSlfMovSmquuv7v3t0LQYVFUNjzCMsC5JYZkoZK1lUc5uoLV/gF6lClGuQMhl+KoObzUL/scKnI0cDEWJHBtG6MKhquGLUZ8TofHp50EWQ/bm1mdGfvs6293/ypVK19yi9Aq5fK2T3/6Sb+a/Zhu5j5t7B3CXV0Jj39C+98soNhyIsurxkWma1OacekKQ73nkuy4JIcjTNGpXj8mpKFPMtsE1PXpJ+M8c7gEBUVc3djqWRY5h/MUN46xt22dt1z3rCnHmD4enQR69Y/Unn3MIziPjc3jnLoIlIiBqHhZzxb09kp7t+jVF6Vu63m/oet9lrO+3O6LLHXKP5B+69QY80xwvNG9M4gBACYD92/S7fCFzlaUXE72V9cRgNZsYPF1LdNKLCTb7OMFn0++37j94myVTYMmZ8btcv3kLVWD041jTKbSWnqA5v4h+NofTXAGnm3l0njwFW8iAL2TQmkqCzT4Ge/jokuglpeisQ7B5bpYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader invalid states",title:"File uploader invalid states",src:"/static/b5ba8b2390d203a35047c33f7b021c55/3cbba/file-uploader-usage-8.png",srcSet:["/static/b5ba8b2390d203a35047c33f7b021c55/7fc1e/file-uploader-usage-8.png 288w","/static/b5ba8b2390d203a35047c33f7b021c55/a5df1/file-uploader-usage-8.png 576w","/static/b5ba8b2390d203a35047c33f7b021c55/3cbba/file-uploader-usage-8.png 1152w","/static/b5ba8b2390d203a35047c33f7b021c55/92c65/file-uploader-usage-8.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h2",null,"File uploader"),(0,n.kt)("p",null,"A file uploader traditionally uploads one or more files by clicking an action\nbutton that prompts a file selection dialog. Once you have selected one or more\nfiles from the dialog, the selected files will populate below the file uploader\non the page. Your file may temporarily display a loading state before uploading\nhas been successfully completed."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:12,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB10lEQVQoz62QQYvTQBTH33foZJp0pkk7M2+ymTRdCoKCsOhhj7alDbRQL70K3sSbx+1Fxc+xRJYePCx4V/bswY/i2oSMTOgWkS56cODHn8fM+7/5P4D/fZ6vVrBYLF7kef59uVx+mc/nN+Px+GYymfwV9246nX6dzWbf8jx/u16vAXp9AZx33/cFWkRtu92uJR6xnuf9E77v206nYxlj12maAnTDCIIguOj1hZVS3UZRVPk8qDqcVYyxytWc8yoMw6amlFbtdvuAEOJnr9dzhldJkgBkJgYdmw0i2jAMd0EQNL806cAmZuCGWCmlVUodRUpZuXsp5VZKCTDKYkiz0caYxAohdowx6yY+fnhqzx4N7cDENj45sVrr+6j2utVaAzDGwffbG7cHQrxdq9WqGeN18uRl3X/6psbsrNYoaqWwRjxK5dIh4hYRATzPc1y4BVNKf3geKRnj5eD8VZk+e1emD87L08yU2XBYaq1LRDzontu94VVjSCl1fKCUOkNLCLGcczs00o7SfhM5TQc2NaaJ6Jrvif65ibw3XFFKrymll4SQj5zzQmFcCKkLqbBQShZKqQIRC631n1xqrT9prV//bniAEAKccxBCQBRFjd7hIrmmOz3GL28C64eVqk9gAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader in context example",title:"File uploader in context example",src:"/static/55ee0879c4354a10cad84d3acf883e22/3cbba/file-uploader-usage-9.png",srcSet:["/static/55ee0879c4354a10cad84d3acf883e22/7fc1e/file-uploader-usage-9.png 288w","/static/55ee0879c4354a10cad84d3acf883e22/a5df1/file-uploader-usage-9.png 576w","/static/55ee0879c4354a10cad84d3acf883e22/3cbba/file-uploader-usage-9.png 1152w","/static/55ee0879c4354a10cad84d3acf883e22/0b124/file-uploader-usage-9.png 1728w","/static/55ee0879c4354a10cad84d3acf883e22/0c3f5/file-uploader-usage-9.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h2",null,"Drag and drop file uploader"),(0,n.kt)("p",null,"Drag and drop file uploaders are used to directly upload files by dragging and\ndropping them into a drop zone area. Alternatively, you can also traditionally\nopen files through a file selection dialog by clicking the text link description\ninside the drop zone."),(0,n.kt)("p",null,"The drop zone component lets users upload files by dragging and dropping the\nfiles into an area on a page, or activating a button."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:12,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACTUlEQVQoz62QzUtUURjG378hM8HRyXTGO85oi4oK1DEEHRAZY2glbVwUMZvAAoNatEmIiEBwdubGO87cmyJGEUgEBcasW/Qf+MGkzty5M+fec849T5wRhb52PfDjhfec8/A8h+h/a3JyklKpVDaVSn2fmJjYHh8fL42MjDQZHh7+g2QyWRoaGiqNjY2V0ul0aWpq6msmk/mWyWRezMzMEK2trZFlWS9XV1dh2zZM08Ty8muYKyuwrCIKhQKKxeIp+Xwem5ubyGaz6OzsRHd3NyKRCOLx+IfBwUEiIQRJKZ85joNqtepVHUfW6p70hZIA/snS0pI0DEMODAz40WgUsVhsPRQKEe3t7VG5XJ7f2dnB/v4+Pzg4xMFhFY7LwHwB13V/oVKpQGthYQHhcBiJRELqhIZhbLS3txP5vk+c8/kf5TJqNYcLwSEFRyAF/iYhjve5XA6tra3aSOqE2rCjo4NISqFrzzu1Bg4rde64TLkNXzUYV0EQqN8lhFAAVC6XU21tbaqvLy57Ir2I9sY2zrScI4JSzT+UASACMBFAcAkhAwj9XqODnUxxHFEsLi6KlpazoudC2LtohHApcX79xvV+InVs+KruuqhWKtDT9zww1oDnec16SqlTTiqbZh7Xrl7GlWQaXaNz6Bp9tNV/8zkRAG04zRh777pugTFmc85tn3NbCGErpX5B7wBYWx8/2Q/v331z64Fp0T28ozuYo9s4NaSjoyPa3d1tTsYY1ev15tTnusUJ+q7eff6yTU8fz9L0k7dEsyDKgmga9BNx/zN67lQznQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"File uploader in context example",title:"File uploader in context example",src:"/static/768eb47e75a19b30f090fd310858e9fb/3cbba/file-uploader-usage-10a.png",srcSet:["/static/768eb47e75a19b30f090fd310858e9fb/7fc1e/file-uploader-usage-10a.png 288w","/static/768eb47e75a19b30f090fd310858e9fb/a5df1/file-uploader-usage-10a.png 576w","/static/768eb47e75a19b30f090fd310858e9fb/3cbba/file-uploader-usage-10a.png 1152w","/static/768eb47e75a19b30f090fd310858e9fb/0b124/file-uploader-usage-10a.png 1728w","/static/768eb47e75a19b30f090fd310858e9fb/0c3f5/file-uploader-usage-10a.png 1856w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("p",null,"When dragging files into the drop zone area, the drop zone border changes in\ncolor and thickness to indicate the area has been activated and is ready for\nfiles. Additionally once the cursor hits the drop zone area it changes with a\npreview of the file you are about to upload. The style of cursor change is\nrendered by the browser you use."),(0,n.kt)(u,{mdxType:"Row"},(0,n.kt)(A,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB4UlEQVQoz2NgQAJiYmJ4MclAQEAAjPn5+eHs////M3h6ejKEhoYyBAUFoWDCBgqKMvCDsQiPgJCosICQGP//F3wMsW5SDFmBSgxJfpoMS+0ZGOTirjMwp/xn4E/6B8Y4gYmBBoOxvjqDmbG2tImBppqpgbpMiLeVQFSgk2BUgDVfdICNYLE3A4ty7CkGhnSogYl4DPRK6GLwTOxl8IzvEPGOa1TwiG2Vdg6rkncJLVVyDqtUsg9rUDFO3CGoW/2fWzj+A7NA0h8GyYzfuA3kTvjPwJXwH0SLcif8l+JO/C/KnfRflDv5vxh70n9h0YL/XAyM/1kZGP4zCSb/E+RN+s/AEPQfTxgm/QFj/sQ/ogJJf+UFkv5KCyT9lRNI+iOunveV/cCFzwz//5/l+f//rjpTxB8+2bCHDP0rn+M2kC/xLwwLCiTBAh1C//8/hXHjwcMMUzacSV667+Jlmcz/4oEdXxnK5z9kxGkgLNb4k/7x8yf9E+JP+icIw0Ipf4QY3P9zGdc8TzarfzJdLu+tvGrxSwatsheMxLgQBfMn/WUQTv3B8P8/A4NZ3VMGvar7DBolnxkMq98y6Fe9wu1lfiQD+JJQDZTKhBjo2v6Y0aPzPpNK4ScGg8o3DOZ1L1EMAQAYuL7uVroePgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Drag and drop file uploader in context example",title:"Drag and drop file uploader in context example",src:"/static/ae223b48fdac2e0c46c7a09078a9595f/3cbba/file-uploader-usage-10b.png",srcSet:["/static/ae223b48fdac2e0c46c7a09078a9595f/7fc1e/file-uploader-usage-10b.png 288w","/static/ae223b48fdac2e0c46c7a09078a9595f/a5df1/file-uploader-usage-10b.png 576w","/static/ae223b48fdac2e0c46c7a09078a9595f/3cbba/file-uploader-usage-10b.png 1152w","/static/ae223b48fdac2e0c46c7a09078a9595f/92c65/file-uploader-usage-10b.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,n.kt)("h2",null,"References"),(0,n.kt)("p",null,"Page Laubheimer,\n",(0,n.kt)("a",{parentName:"p",href:"https://www.nngroup.com/articles/drag-drop/"},"Drag–and–Drop: How to Design for Ease of Use"),",\n(Nielsen Norman Group, 2020)"),(0,n.kt)("h2",null,"Feedback"),(0,n.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}h.isMDXComponent=!0}}]);