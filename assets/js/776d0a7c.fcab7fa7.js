"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80912],{69439:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(74848),n=a(28453);const o={slug:"graphql-practice",title:"GraphQL \u5b9e\u8df5\u4e0e\u670d\u52a1\u642d\u5efa",date:new Date("2022-11-24T00:00:00.000Z"),authors:"kuizuo",tags:["api","graphql","nest","strapi"],keywords:["api","graphql","nest","strapi"],description:"\u6709\u5173 GraphQL \u4ecb\u7ecd\u53ca\u4e0a\u624b\u5b9e\u8df5\uff0c\u5e76\u5728 Nest.js \u548c Strapi \u4e2d\u642d\u5efa GraphQL \u670d\u52a1",image:"https://img.kuizuo.cn/320f3e5a66900d68e93de38154989948.png"},p=void 0,i={permalink:"/blog/graphql-practice",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/program/GraphQL\u5b9e\u8df5.md",source:"@site/blog/program/GraphQL\u5b9e\u8df5.md",title:"GraphQL \u5b9e\u8df5\u4e0e\u670d\u52a1\u642d\u5efa",description:"\u6709\u5173 GraphQL \u4ecb\u7ecd\u53ca\u4e0a\u624b\u5b9e\u8df5\uff0c\u5e76\u5728 Nest.js \u548c Strapi \u4e2d\u642d\u5efa GraphQL \u670d\u52a1",date:"2022-11-24T00:00:00.000Z",formattedDate:"2022\u5e7411\u670824\u65e5",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"graphql",permalink:"/blog/tags/graphql"},{label:"nest",permalink:"/blog/tags/nest"},{label:"strapi",permalink:"/blog/tags/strapi"}],readingTime:12.57,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5373\u5c06\u6bd5\u4e1a\u7684\u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"graphql-practice",title:"GraphQL \u5b9e\u8df5\u4e0e\u670d\u52a1\u642d\u5efa",date:"2022-11-24T00:00:00.000Z",authors:"kuizuo",tags:["api","graphql","nest","strapi"],keywords:["api","graphql","nest","strapi"],description:"\u6709\u5173 GraphQL \u4ecb\u7ecd\u53ca\u4e0a\u624b\u5b9e\u8df5\uff0c\u5e76\u5728 Nest.js \u548c Strapi \u4e2d\u642d\u5efa GraphQL \u670d\u52a1",image:"https://img.kuizuo.cn/320f3e5a66900d68e93de38154989948.png"},unlisted:!1,prevItem:{title:"2022 \xb7 \u9006\u5411\u5230Web\u5f00\u53d1",permalink:"/blog/2022-year-end-summary"},nextItem:{title:"Protocol \u534f\u8bae\u590d\u73b0\u6a21\u677f",permalink:"/blog/protocol-template"}},s={authorsImageUrls:[void 0]},l=[];function c(t){const e={admonition:"admonition",blockquote:"blockquote",p:"p",...(0,n.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"GraphQL \u65e2\u662f\u4e00\u79cd\u7528\u4e8e API \u7684\u67e5\u8be2\u8bed\u8a00\u4e5f\u662f\u4e00\u4e2a\u6ee1\u8db3\u4f60\u6570\u636e\u67e5\u8be2\u7684\u8fd0\u884c\u65f6\u3002 GraphQL \u5bf9\u4f60\u7684 API \u4e2d\u7684\u6570\u636e\u63d0\u4f9b\u4e86\u4e00\u5957\u6613\u4e8e\u7406\u89e3\u7684\u5b8c\u6574\u63cf\u8ff0\uff0c\u4f7f\u5f97\u5ba2\u6237\u7aef\u80fd\u591f\u51c6\u786e\u5730\u83b7\u5f97\u5b83\u9700\u8981\u7684\u6570\u636e\uff0c\u800c\u4e14\u6ca1\u6709\u4efb\u4f55\u5197\u4f59\uff0c\u4e5f\u8ba9 API \u66f4\u5bb9\u6613\u5730\u968f\u7740\u65f6\u95f4\u63a8\u79fb\u800c\u6f14\u8fdb\uff0c\u8fd8\u80fd\u7528\u4e8e\u6784\u5efa\u5f3a\u5927\u7684\u5f00\u53d1\u8005\u5de5\u5177\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5927\u6982\u7387\u4f60\u542c\u8bf4\u8fc7 GraphQL\uff0c\u77e5\u9053\u5b83\u662f\u4e00\u79cd\u4e0e Rest API \u67b6\u6784\u5c5e\u4e8e API \u63a5\u53e3\u7684\u67e5\u8be2\u8bed\u8a00\u3002\u4f46\u5927\u6982\u7387\u4f60\u4e5f\u4e0e\u6211\u4e00\u6837\u6ca1\u6709\u5c1d\u8bd5\u8fc7 GraphQL\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e8b\u5b9e\u4e0a\u4ece 2012 \u5e74 Facebook \u9996\u6b21\u5c06 GraphQL \u5e94\u7528\u4e8e\u79fb\u52a8\u5e94\u7528\uff0c\u5230 GraphQL \u89c4\u8303\u4e8e 2015 \u5e74\u5b9e\u73b0\u5f00\u6e90\u3002\u53ef\u5982\u4eca\u73b0\u72b6\u662f GraphQL \u4e0d\u6e29\u4e0d\u706b\uff0c\u65f6\u4e0d\u65f6\u53c8\u6709\u65b0\u7684\u6587\u7ae0\u4ecb\u7ecd\uff0c\u4e0d\u77e5\u9053\u7684\u8fd8\u4ee5\u4e3a\u662f\u4ec0\u4e48\u65b0\u6280\u672f\u3002"}),"\n",(0,r.jsx)(e.admonition,{title:"\u76ee\u6807",type:"tip",children:(0,r.jsx)(e.p,{children:"\u672c\u6587\u5c06\u4e0a\u624b\u4f7f\u7528 GraphQL\uff0c\u5e76\u7528 Nestjs \u4e0e Strapi \u8fd9\u4e24\u4e2a Node \u6846\u67b6\u642d\u5efa GraphQL \u670d\u52a1\u3002"})})]})}function h(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},28453:(t,e,a)=>{a.d(e,{R:()=>p,x:()=>i});var r=a(96540);const n={},o=r.createContext(n);function p(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:p(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);