"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22300],{76373:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const i={slug:"typescript-full-stack-technology-trpc",title:"Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC",date:new Date("2023-03-07T00:00:00.000Z"),authors:"kuizuo",tags:["trpc","next","prisma","zod","auth.js"],keywords:["trpc","next","prisma","zod","auth.js"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 tRPC \u6280\u672f\u4ee5\u53ca\u5b83\u4e0e\u4f20\u7edf RESTful API \u7684\u533a\u522b\u3002\u540c\u65f6 tRPC \u53ef\u4ee5\u5e2e\u52a9\u4eba\u4eec\u66f4\u5feb\u5730\u5f00\u53d1\u5168\u6808 TypeScript \u5e94\u7528\u7a0b\u5e8f\uff0c\u540c\u65f6\u65e0\u9700\u4f20\u7edf\u7684 API \u5c42\uff0c\u5e76\u4fdd\u8bc1\u5e94\u7528\u7a0b\u5e8f\u5728\u5feb\u901f\u8fed\u4ee3\u65f6\u7684\u7a33\u5b9a\u6027\u3002",image:"https://img.kuizuo.cn/trpc-banner.png",toc_max_heading_level:3},l=void 0,a={permalink:"/en/blog/typescript-full-stack-technology-trpc",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/program/Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC.md",source:"@site/blog/program/Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC.md",title:"Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 tRPC \u6280\u672f\u4ee5\u53ca\u5b83\u4e0e\u4f20\u7edf RESTful API \u7684\u533a\u522b\u3002\u540c\u65f6 tRPC \u53ef\u4ee5\u5e2e\u52a9\u4eba\u4eec\u66f4\u5feb\u5730\u5f00\u53d1\u5168\u6808 TypeScript \u5e94\u7528\u7a0b\u5e8f\uff0c\u540c\u65f6\u65e0\u9700\u4f20\u7edf\u7684 API \u5c42\uff0c\u5e76\u4fdd\u8bc1\u5e94\u7528\u7a0b\u5e8f\u5728\u5feb\u901f\u8fed\u4ee3\u65f6\u7684\u7a33\u5b9a\u6027\u3002",date:"2023-03-07T00:00:00.000Z",formattedDate:"March 7, 2023",tags:[{label:"trpc",permalink:"/en/blog/tags/trpc"},{label:"next",permalink:"/en/blog/tags/next"},{label:"prisma",permalink:"/en/blog/tags/prisma"},{label:"zod",permalink:"/en/blog/tags/zod"},{label:"auth.js",permalink:"/en/blog/tags/auth-js"}],readingTime:14.94,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/en/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"typescript-full-stack-technology-trpc",title:"Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC",date:"2023-03-07T00:00:00.000Z",authors:"kuizuo",tags:["trpc","next","prisma","zod","auth.js"],keywords:["trpc","next","prisma","zod","auth.js"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 tRPC \u6280\u672f\u4ee5\u53ca\u5b83\u4e0e\u4f20\u7edf RESTful API \u7684\u533a\u522b\u3002\u540c\u65f6 tRPC \u53ef\u4ee5\u5e2e\u52a9\u4eba\u4eec\u66f4\u5feb\u5730\u5f00\u53d1\u5168\u6808 TypeScript \u5e94\u7528\u7a0b\u5e8f\uff0c\u540c\u65f6\u65e0\u9700\u4f20\u7edf\u7684 API \u5c42\uff0c\u5e76\u4fdd\u8bc1\u5e94\u7528\u7a0b\u5e8f\u5728\u5feb\u901f\u8fed\u4ee3\u65f6\u7684\u7a33\u5b9a\u6027\u3002",image:"https://img.kuizuo.cn/trpc-banner.png",toc_max_heading_level:3},unlisted:!1,prevItem:{title:"\u8ddd\u79bb\u6211\u4e0a\u7bc7\u7b14\u8bb0\u8fd8\u662f\u5728?",permalink:"/en/blog/why-i-dont-write-notes"},nextItem:{title:"\u5c06 Supabase \u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u540e\u7aef\u670d\u52a1",permalink:"/en/blog/use-supabase-as-backend-service"}},o={authorsImageUrls:[void 0]},c=[];function p(t){const e={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u60f3\u6210\u4e3a\u4e00\u4e2a ",(0,r.jsx)(e.strong,{children:"Typescript \u5168\u6808\u5de5\u7a0b\u5e08"}),"\uff0c\u90a3\u4e48\u4f60\u53ef\u80fd\u9700\u8981\u5173\u6ce8\u4e00\u4e0b ",(0,r.jsx)(e.a,{href:"https://trpc.io/",children:"tRPC"})," \u6846\u67b6\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u672c\u6587\u603b\u5171\u4f1a\u63a5\u89e6\u5230\u4ee5\u4e0b\u4e3b\u8981\u6280\u672f\u6808\u3002"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://nextjs.org/",title:"Next.js",children:"Next.js"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://trpc.io/",title:"TRPC",children:"TRPC"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://www.prisma.io/",title:"Prisma",children:"Prisma"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://github.com/vriad/zod",title:"Zod",children:"Zod"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://authjs.dev/",title:"Auth.js",children:"Auth.js"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u4e0d\u662f\u4ecb\u7ecd tRPC \u5417\uff0c\u600e\u4e48\u7a81\u7136\u51fa\u73b0\u8fd9\u4e48\u591a\u6280\u672f\u6808\u3002\u597d\u5427\uff0c\u4e3b\u8981\u8fd9\u4e9b\u6280\u672f\u6808\u90fd\u4e0e typescript \u76f8\u5173\uff0c\u5e76\u4e14\u5728 trpc \u7684\u793a\u4f8b\u5e94\u7528\u4e2d\u90fd\u6216\u591a\u6216\u5c11\u4f7f\u7528\u5230\uff0c\u56e0\u6b64\u4e5f\u662f\u6709\u5fc5\u8981\u4e86\u89e3\u4e00\u4e0b\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u7ebf\u4f53\u9a8c\u5730\u5740\uff1a",(0,r.jsx)(e.a,{href:"https://trpc.kuizuo.cn/",children:"TRPC demo"})]})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>l,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function l(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:l(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);