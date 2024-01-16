"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5589],{9775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(5893),n=r(3905);const o={sidebar_position:1},s="Create a Page",c={id:"tutorial-basics/create-a-page",title:"Create a Page",description:"Add Markdown or React files to src/pages to create a standalone page:",source:"@site/docs/tutorial-basics/create-a-page.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create-a-page",permalink:"/docs/tutorial-basics/create-a-page",draft:!1,unlisted:!1,editUrl:"https://github.com/leetaehwan/leetaehwan.github.io/edit/main/docs/tutorial-basics/create-a-page.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Basics",permalink:"/docs/category/tutorial---basics"},next:{title:"Create a Document",permalink:"/docs/tutorial-basics/create-a-document"}},i={},l=[{value:"Create your first React Page",id:"create-your-first-react-page",level:2},{value:"Create your first Markdown Page",id:"create-your-first-markdown-page",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"create-a-page",children:"Create a Page"}),"\n",(0,a.jsxs)(t.p,{children:["Add ",(0,a.jsx)(t.strong,{children:"Markdown or React"})," files to ",(0,a.jsx)(t.code,{children:"src/pages"})," to create a ",(0,a.jsx)(t.strong,{children:"standalone page"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"src/pages/index.js"})," \u2192 ",(0,a.jsx)(t.code,{children:"localhost:3000/"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"src/pages/foo.md"})," \u2192 ",(0,a.jsx)(t.code,{children:"localhost:3000/foo"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"src/pages/foo/bar.js"})," \u2192 ",(0,a.jsx)(t.code,{children:"localhost:3000/foo/bar"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-your-first-react-page",children:"Create your first React Page"}),"\n",(0,a.jsxs)(t.p,{children:["Create a file at ",(0,a.jsx)(t.code,{children:"src/pages/my-react-page.js"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",metastring:'title="src/pages/my-react-page.js"',children:"import React from 'react';\nimport Layout from '@theme/Layout';\n\nexport default function MyReactPage() {\n  return (\n    <Layout>\n      <h1>My React page</h1>\n      <p>This is a React page</p>\n    </Layout>\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["A new page is now available at ",(0,a.jsx)(t.a,{href:"http://localhost:3000/my-react-page",children:"http://localhost:3000/my-react-page"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"create-your-first-markdown-page",children:"Create your first Markdown Page"}),"\n",(0,a.jsxs)(t.p,{children:["Create a file at ",(0,a.jsx)(t.code,{children:"src/pages/my-markdown-page.md"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mdx",metastring:'title="src/pages/my-markdown-page.md"',children:"# My Markdown page\n\nThis is a Markdown page\n"})}),"\n",(0,a.jsxs)(t.p,{children:["A new page is now available at ",(0,a.jsx)(t.a,{href:"http://localhost:3000/my-markdown-page",children:"http://localhost:3000/my-markdown-page"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,n.ah)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>l});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),g=n,h=u["".concat(i,".").concat(g)]||u[g]||d[g]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));p.displayName="MDXCreateElement"}}]);