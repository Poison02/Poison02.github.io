"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[83804],{27489:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=o(74848),i=o(28453);const s={slug:"why-i-dont-use-qiniu-cloud",title:"\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91",date:new Date("2020-12-23T00:00:00.000Z"),authors:"kuizuo",tags:["\u968f\u7b14","cloud-service"],keywords:["\u968f\u7b14","cloud-service"]},r=void 0,u={permalink:"/blog/why-i-dont-use-qiniu-cloud",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/lifestyle/\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91.md",source:"@site/blog/lifestyle/\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91.md",title:"\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91",description:"\u4e03\u725b\u4e91\u662f\u56fd\u5185\u9c9c\u6709\u7684\u514d\u8d39\u63d0\u4f9b\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u7684\u4e00\u4e2a\u4e91\u670d\u52a1\u5546\uff0c\u548c\u817e\u8baf\u4e91\uff0c\u963f\u91cc\u4e91\u4e00\u6837\uff0c\u4f46\u8fd9\u4e24\u8005\u6536\u8d39\uff0c\u800c\u4e03\u725b\u4e91\u4e0d\u6536\u8d39\uff0c\u5f53\u7136\u4e5f\u4e0d\u662f\u7edd\u5bf9\u514d\u8d39\uff0c\u5bf9\u8c61\u5b58\u50a8\u514d\u8d39\u7a7a\u95f4 10g\uff0c\u6bcf\u4e2a\u6708\u8fd8\u6709 10g \u7684 cdn \u52a0\u901f\u670d\u52a1\uff08\u591a\u6570\u4eba\u57fa\u672c\u7528\u4e0d\u5b8c\uff09\uff0c\u8d85\u51fa\u90e8\u5206\u989d\u5916\u6536\u8d39\uff0c\u6b64\u5916 https \u6536\u8d39\u3002",date:"2020-12-23T00:00:00.000Z",formattedDate:"2020\u5e7412\u670823\u65e5",tags:[{label:"\u968f\u7b14",permalink:"/blog/tags/\u968f\u7b14"},{label:"cloud-service",permalink:"/blog/tags/cloud-service"}],readingTime:4.04,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5373\u5c06\u6bd5\u4e1a\u7684\u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"why-i-dont-use-qiniu-cloud",title:"\u4e3a\u4ec0\u4e48\u6211\u4e0d\u7528\u4e03\u725b\u4e91",date:"2020-12-23T00:00:00.000Z",authors:"kuizuo",tags:["\u968f\u7b14","cloud-service"],keywords:["\u968f\u7b14","cloud-service"]},unlisted:!1,prevItem:{title:"2020 \xb7 \u7f16\u7a0b\u4e4b\u65c5-\u8d77\u70b9",permalink:"/blog/2020-year-end-summary"},nextItem:{title:"HTTP\u8bf7\u6c42\u4e4bContent-Type",permalink:"/blog/content-type-of-http-request"}},l={authorsImageUrls:[void 0]},c=[];function a(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,n.jsx)(t.p,{children:"\u4e03\u725b\u4e91\u662f\u56fd\u5185\u9c9c\u6709\u7684\u514d\u8d39\u63d0\u4f9b\u5bf9\u8c61\u5b58\u50a8\u670d\u52a1\u7684\u4e00\u4e2a\u4e91\u670d\u52a1\u5546\uff0c\u548c\u817e\u8baf\u4e91\uff0c\u963f\u91cc\u4e91\u4e00\u6837\uff0c\u4f46\u8fd9\u4e24\u8005\u6536\u8d39\uff0c\u800c\u4e03\u725b\u4e91\u4e0d\u6536\u8d39\uff0c\u5f53\u7136\u4e5f\u4e0d\u662f\u7edd\u5bf9\u514d\u8d39\uff0c\u5bf9\u8c61\u5b58\u50a8\u514d\u8d39\u7a7a\u95f4 10g\uff0c\u6bcf\u4e2a\u6708\u8fd8\u6709 10g \u7684 cdn \u52a0\u901f\u670d\u52a1\uff08\u591a\u6570\u4eba\u57fa\u672c\u7528\u4e0d\u5b8c\uff09\uff0c\u8d85\u51fa\u90e8\u5206\u989d\u5916\u6536\u8d39\uff0c\u6b64\u5916 https \u6536\u8d39\u3002"})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>u});var n=o(96540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);