"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[99930],{40297:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>r});var t=a(74848),i=a(28453);const c={slug:"use-supabase-as-backend-service",title:"\u5c06 Supabase \u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u540e\u7aef\u670d\u52a1",date:new Date("2023-02-18T00:00:00.000Z"),authors:"kuizuo",tags:["supabase","nuxt","project"],keywords:["supabase","nuxt","project"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Supabase \u4f5c\u4e3a\u540e\u7aef\u670d\u52a1\uff0c\u4f7f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u66f4\u5feb\u5730\u6784\u5efa\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\uff0c\u65e0\u9700\u914d\u7f6e\u6570\u636e\u5e93\u6216\u7f16\u5199\u590d\u6742\u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7801\u3002\u5c06\u4f7f\u7528 Nuxt.js \u548c Supabase\uff0c\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u56fe\u5e8a\u7f51\u7ad9\u4e3a\u4f8b\uff0c\u6765\u6f14\u793a\u5982\u4f55\u5728\u524d\u7aef\u4e2d\u4f7f\u7528 Supabase API \u548c Storage \u670d\u52a1\u3002",image:"https://img.kuizuo.cn/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png",toc_max_heading_level:3},p=void 0,n={permalink:"/blog/use-supabase-as-backend-service",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/program/\u5c06 Supabase \u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u540e\u7aef\u670d\u52a1.md",source:"@site/blog/program/\u5c06 Supabase \u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u540e\u7aef\u670d\u52a1.md",title:"\u5c06 Supabase \u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u540e\u7aef\u670d\u52a1",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Supabase \u4f5c\u4e3a\u540e\u7aef\u670d\u52a1\uff0c\u4f7f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u66f4\u5feb\u5730\u6784\u5efa\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\uff0c\u65e0\u9700\u914d\u7f6e\u6570\u636e\u5e93\u6216\u7f16\u5199\u590d\u6742\u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7801\u3002\u5c06\u4f7f\u7528 Nuxt.js \u548c Supabase\uff0c\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u56fe\u5e8a\u7f51\u7ad9\u4e3a\u4f8b\uff0c\u6765\u6f14\u793a\u5982\u4f55\u5728\u524d\u7aef\u4e2d\u4f7f\u7528 Supabase API \u548c Storage \u670d\u52a1\u3002",date:"2023-02-18T00:00:00.000Z",formattedDate:"2023\u5e742\u670818\u65e5",tags:[{label:"supabase",permalink:"/blog/tags/supabase"},{label:"nuxt",permalink:"/blog/tags/nuxt"},{label:"project",permalink:"/blog/tags/project"}],readingTime:9.53,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5373\u5c06\u6bd5\u4e1a\u7684\u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"use-supabase-as-backend-service",title:"\u5c06 Supabase \u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u540e\u7aef\u670d\u52a1",date:"2023-02-18T00:00:00.000Z",authors:"kuizuo",tags:["supabase","nuxt","project"],keywords:["supabase","nuxt","project"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528 Supabase \u4f5c\u4e3a\u540e\u7aef\u670d\u52a1\uff0c\u4f7f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u66f4\u5feb\u5730\u6784\u5efa\u548c\u90e8\u7f72\u5e94\u7528\u7a0b\u5e8f\uff0c\u65e0\u9700\u914d\u7f6e\u6570\u636e\u5e93\u6216\u7f16\u5199\u590d\u6742\u7684\u8eab\u4efd\u9a8c\u8bc1\u4ee3\u7801\u3002\u5c06\u4f7f\u7528 Nuxt.js \u548c Supabase\uff0c\u4ee5\u5b9e\u73b0\u4e00\u4e2a\u56fe\u5e8a\u7f51\u7ad9\u4e3a\u4f8b\uff0c\u6765\u6f14\u793a\u5982\u4f55\u5728\u524d\u7aef\u4e2d\u4f7f\u7528 Supabase API \u548c Storage \u670d\u52a1\u3002",image:"https://img.kuizuo.cn/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png",toc_max_heading_level:3},unlisted:!1,prevItem:{title:"Typescript \u5168\u6808\u6700\u503c\u5f97\u5b66\u4e60\u7684\u6280\u672f\u6808 TRPC",permalink:"/blog/typescript-full-stack-technology-trpc"},nextItem:{title:"\ud83c\udf4b \u4f7f\u7528 Fresh \u6846\u67b6\u6784\u5efaWeb \u5e94\u7528",permalink:"/blog/use-fresh-build-web-applicatioin"}},l={authorsImageUrls:[void 0]},r=[{value:"\u4ec0\u4e48\u662f Supabase?",id:"\u4ec0\u4e48\u662f-supabase",level:2},{value:"BaaS \u4e0e CMS \u6709\u4f55\u4e0d\u540c\uff1f",id:"baas-\u4e0e-cms-\u6709\u4f55\u4e0d\u540c",level:2},{value:"\u6ce8\u518c Supabase",id:"\u6ce8\u518c-supabase",level:2},{value:"\u4f53\u9a8c\u4e00\u4e0b",id:"\u4f53\u9a8c\u4e00\u4e0b",level:2},{value:"\u4f7f\u7528\u7c7b\u5e93",id:"\u4f7f\u7528\u7c7b\u5e93",level:3},{value:"Supabase \u4e3b\u8981\u529f\u80fd",id:"supabase-\u4e3b\u8981\u529f\u80fd",level:2},{value:"Database \u6570\u636e\u5e93",id:"database-\u6570\u636e\u5e93",level:3},{value:"Authentication \u8eab\u4efd\u9a8c\u8bc1",id:"authentication-\u8eab\u4efd\u9a8c\u8bc1",level:3},{value:"\u7b2c\u4e09\u65b9\u767b\u5f55",id:"\u7b2c\u4e09\u65b9\u767b\u5f55",level:4},{value:"Bucket \u5b58\u50a8\u6876",id:"bucket-\u5b58\u50a8\u6876",level:3},{value:"Edge Functions \u8fb9\u7f18\u51fd\u6570",id:"edge-functions-\u8fb9\u7f18\u51fd\u6570",level:3},{value:"<strong>\u4f7f\u7528 Supabase \u7f16\u5199\u4e00\u4e2a\u7b80\u6613\u56fe\u5e8a</strong>",id:"\u4f7f\u7528-supabase-\u7f16\u5199\u4e00\u4e2a\u7b80\u6613\u56fe\u5e8a",level:2},{value:"\u4e00\u4e9b\u4f60\u53ef\u80fd\u6bd4\u8f83\u597d\u5947\u7684\u95ee\u9898",id:"\u4e00\u4e9b\u4f60\u53ef\u80fd\u6bd4\u8f83\u597d\u5947\u7684\u95ee\u9898",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:3},{value:"\u8d39\u7528",id:"\u8d39\u7528",level:3},{value:"\u7f51\u901f",id:"\u7f51\u901f",level:3},{value:"\u57df\u540d",id:"\u57df\u540d",level:3},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",del:"del",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"\u5bf9\u4e8e\u60f3\u5feb\u901f\u5b9e\u73b0\u4e00\u4e2a\u4ea7\u54c1\u800c\u8a00\uff0c\u5982\u679c\u4f7f\u7528\u4f20\u7edf\u5f00\u53d1\uff0c\u53c8\u8981\u517c\u987e\u524d\u7aef\u5f00\u53d1\uff0c\u540c\u65f6\u53c8\u8981\u82b1\u8d39\u65f6\u95f4\u6784\u5efa\u540e\u7aef\u670d\u52a1\u3002\u7136\u800c\u6709\u8fd9\u4e48\u4e00\u4e2a\u5e73\u53f0\uff08Baas Backend as a service\uff09\u540e\u7aef\u5373\u670d\u52a1\uff0c\u80fd\u591f\u8ba9\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4e13\u6ce8\u4e8e\u524d\u7aef\u5f00\u53d1\uff0c\u800c\u65e0\u9700\u82b1\u8d39\u5927\u91cf\u65f6\u95f4\u548c\u7cbe\u529b\u6765\u6784\u5efa\u548c\u7ef4\u62a4\u540e\u7aef\u57fa\u7840\u8bbe\u65bd\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u5bf9\u4e8e\u53ea\u4f1a\u524d\u7aef\u7684\u4eba\u6765\u8bf4\uff0c\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u9009\u62e9\u3002\u540e\u7aef\u5373\u670d\u52a1\u7684\u5e73\u53f0\u4f7f\u5f97\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u5feb\u901f\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\uff0c\u66f4\u5feb\u5730\u5c06\u5176\u63a8\u5411\u5e02\u573a\u3002\u5f53\u7136\u4e86\uff0c\u4f60\u53ef\u4ee5\u5c06\u4f60\u7684\u540e\u7aef\u5e94\u7528\u63a5\u5165 Baas\uff0c\u8fd9\u6837\u4f60\u5c31\u65e0\u9700\u914d\u7f6e\u6570\u636e\u5e93\uff0c\u7f16\u5199\u590d\u6742\u7684\u8eab\u4efd\u6548\u9a8c\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u5982\u679c\u4f60\u60f3\u4e86\u89e3 Baas\uff0c\u6211\u60f3\u8fd9\u7bc7\u6587\u7ae0\u6216\u8bb8\u5bf9\u4f60\u6709\u6240\u5e2e\u52a9\u3002"}),"\n",(0,t.jsxs)(s.h2,{id:"\u4ec0\u4e48\u662f-supabase",children:["\u4ec0\u4e48\u662f ",(0,t.jsx)(s.a,{href:"https://supabase.com/",title:"Supabase",children:"Supabase"}),"?"]}),"\n",(0,t.jsxs)(s.p,{children:["\u5728\u6458\u8981\u90e8\u5206\u4e5f\u4ecb\u7ecd\u5230\u540d\u8bcd BaaS (Backend as a Service) \uff0c\u610f\u601d\u4e3a",(0,t.jsx)(s.strong,{children:"\u540e\u7aef\u5373\u670d\u52a1"}),"\u3002\u8fd9\u4e2a\u6982\u5ff5\u662f\u5728\u6211\u63a5\u89e6 Serverless \u7684\u65f6\u5019\u4e86\u89e3\u5230\u7684\uff0c\u66f4\u51c6\u786e\u6765\u8bf4\u662f\u817e\u8baf\u4e91\u5f00\u53d1\u3002\u5f53\u65f6\u5728\u7f16\u5199\u5c0f\u7a0b\u5e8f\u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u4e13\u6ce8\u4e0e\u5e94\u7528\u4e1a\u52a1\u903b\u8f91\uff0c\u800c\u4e0d\u7528\u7f16\u5199\u6570\u636e\u5b58\u50a8\uff0c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u6587\u4ef6\u5b58\u50a8\u7b49\u540e\u7aef\u670d\u52a1\uff0c\u8fd9\u4e9b\u7edf\u7edf\u7531 BaaS \u5e73\u53f0\u6240\u63d0\u4f9b\u3002 \u901a\u5e38\u4f1a\u914d\u5408 Serverless \u51fd\u6570\u4f7f\u7528\uff0c\u901a\u5e38\u4e5f\u53eb FaaS\uff08Function as a Service\uff09\u3002\u901a\u5e38\u6765\u8bf4\uff0cFaaS \u4f1a\u4f9d\u8d56\u4e8e BaaS \u5e73\u53f0\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u800c Supabase \u4fbf\u662f BaaS \u7684\u5e73\u53f0\u4e4b\u4e00\u3002Supabase \u662f\u4e00\u4e2a\u5f00\u6e90\u7684 Firebase \u66ff\u4ee3\u54c1\u3002\u4f7f\u7528 Postgres \u6570\u636e\u5e93\u3001\u8eab\u4efd\u9a8c\u8bc1\u3001\u5373\u65f6 API\u3001\u8fb9\u7f18\u51fd\u6570\u3001\u5b9e\u65f6\u8ba2\u9605\u548c\u5b58\u50a8\u542f\u52a8\u9879\u76ee\u3002"}),"\n",(0,t.jsxs)(s.p,{children:["\u4f60\u4e5f\u8bb8\u542c\u8fc7 Firebase\uff0c\u7531 Google \u63d0\u4f9b\u7684\u79c1\u6709\u4e91\u670d\u52a1\uff0c\u4f46\u5f00\u53d1\u8005\u65e0\u6cd5\u4fee\u6539\u548c\u6269\u5c55\u5176\u5e95\u5c42\u4ee3\u7801\u3002\u800c Supabase \u662f\u5f00\u6e90\u7684\uff0c\u63d0\u4f9b\u4e86\u7c7b\u4f3c Firebase \u7684\u529f\u80fd\uff0c\u4e14\u5b9a\u4ef7\u7075\u6d3b\uff0c\u5e76\u4e14\u5b98\u65b9\u81ea\u79f0\u4e3a ",(0,t.jsx)(s.a,{href:"https://link.juejin.cn/?target=https://firebase.google.com/",title:"Firebase",children:"Firebase"}),"\u7684\u66ff\u4ee3\u54c1\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"baas-\u4e0e-cms-\u6709\u4f55\u4e0d\u540c",children:"BaaS \u4e0e CMS \u6709\u4f55\u4e0d\u540c\uff1f"}),"\n",(0,t.jsx)(s.p,{children:"BaaS \u901a\u5e38\u53ea\u4e13\u6ce8\u4e8e\u5e94\u7528\u7684\u540e\u7aef\u670d\u52a1\uff0c\u800c CMS \u5219\u662f\u4e13\u6ce8\u4e0e\u5185\u5bb9\u7ba1\u7406\u3002\u4e0d\u8fc7 BaaS \u6bd4\u8f83\u4f9d\u8d56\u4e91\u670d\u52a1\uff0c\u800c CMS \u901a\u5e38\u53ea\u4f9d\u8d56\u4e8e web \u540e\u7aef\u6280\u672f\u3002\u5982\u679c\u4f60\u60f3\u642d\u5efa\u4e00\u4e2a\u5185\u5bb9\u7ad9\u70b9\uff08\u89c6\u9891\uff0c\u97f3\u9891\uff0c\u6587\u7ae0\uff09\uff0c\u5e76\u4e14\u4f5c\u4e3a\u7f51\u7ad9\u7ba1\u7406\u5458\uff0c\u90a3\u4e48 CMS \u5c31\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u9009\u62e9\uff0c\u5e76\u4e14\u6709\u76f8\u5f53\u591a\u7684\u4e3b\u9898\u6a21\u677f\u3002\u53cd\u4e4b\uff0c\u4e0d\u60f3\u642d\u5efa\u540e\u7aef\u670d\u52a1\uff0c\u51cf\u5c11\u8fd0\u8425\u7a0b\u5e8f\uff0c\u90a3\u4e48\u6beb\u4e0d\u72b9\u8c6b\u7684\u9009\u62e9 BaaS\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u6ce8\u518c-supabase",children:"\u6ce8\u518c Supabase"}),"\n",(0,t.jsxs)(s.p,{children:["\u8fdb\u5165 ",(0,t.jsx)(s.a,{href:"https://app.supabase.com/sign-in",children:"supabase \u767b\u5f55\u754c\u9762"})," \u9009\u62e9 Continue With Github"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_2yiQ9NHv21.png",alt:""})}),"\n",(0,t.jsxs)(s.p,{children:["\u8f93\u5165 Github \u8d26\u53f7\u5bc6\u7801\u8fdb\u5165",(0,t.jsx)(s.a,{href:"https://app.supabase.com/projects",title:"\u4e3b\u9875\u9762",children:"\u4e3b\u9875\u9762"}),"\uff0c\u65b0\u5efa\u4e00\u4e2a\u9879\u76ee"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_0eoOyP8DM2.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u4e3a\u8be5\u9879\u76ee\u8d77\u540d\uff0c\u8bbe\u7f6e\u6570\u636e\u5e93\u5bc6\u7801\uff0c\u4ee5\u53ca\u5206\u914d\u5730\u533a\u3002"}),"\n",(0,t.jsxs)(s.admonition,{type:"warning",children:[(0,t.jsx)(s.p,{children:"\u521b\u5efa supabase \u9879\u76ee\u5bf9\u5bc6\u7801\u8981\u6c42\u975e\u5e38\u4e25\u683c\uff0c\u50cf a123456 \u8fd9\u79cd\u6839\u672c\u65e0\u6cd5\u901a\u8fc7\uff0c\u50cf \u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf \u5bc6\u7801\u5c31\u53ef\u4ee5\u3002"}),(0,t.jsx)(s.p,{children:"\u5730\u533a\u65b9\u9762\u4f18\u5148\u5c31\u8fd1\u539f\u5219\uff0c\u800c\u6700\u8fd1\u7684\u4e5f\u5c31\u662f\u65e5\u672c\u4e0e\u97e9\u56fd\uff0c\u5f88\u65e0\u5948 supabase \u5728\u5927\u9646\u548c\u6e2f\u6fb3\u53f0\u5e76\u672a\u8bbe\u7acb\u670d\u52a1\u5668\u3002"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_N5CQnx8cnU.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u7b49\u5f85\u7247\u523b\uff0c\u4f60\u5c06\u62e5\u6709\u4e00\u4e2a\u514d\u8d39\u7684\u540e\u7aef\u670d\u52a1\uff01"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_Z33n9aUOC7.png",alt:""})}),"\n",(0,t.jsxs)(s.p,{children:["supabase \u4f1a\u63d0\u4f9b\u4e00\u4e2a\u4e8c\u7ea7\u57df\u540d\u4f9b\u5f00\u53d1\u8005\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u8fd9\u91cc Project Configuration \u7684 URL\uff0c\u5bf9\u5e94\u7684\u8fd9\u4e2a\u4e8c\u7ea7\u57df\u540d azlbliyjwcxxxxx \u4e5f\u5c31\u662f\u4f60\u8fd9\u4e2a\u9879\u76ee\u7684\u552f\u4e00\u6807\u8bc6 Reference ID\uff08\u4e0b\u6587\u79f0 \u9879\u76ee id\uff09\u3002\u4f60\u53ef\u4ee5\u5230 ",(0,t.jsx)(s.a,{href:"https://app.supabase.com/project/azlbliyjwcemojkwazto/settings/api",title:"https://app.supabase.com/project/\u4f60\u7684\u9879\u76eeid/settings/api",children:"https://app.supabase.com/project/\u4f60\u7684\u9879\u76ee id/settings/api"})," \u4e2d\u67e5\u770b\u76f8\u5173\u914d\u7f6e\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u4f53\u9a8c\u4e00\u4e0b",children:"\u4f53\u9a8c\u4e00\u4e0b"}),"\n",(0,t.jsxs)(s.p,{children:["\u8fd9\u91cc\u53c2\u8003\u5230\u4e86\u5b98\u65b9\u6587\u6863 ",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/guides/database/api",title:"Serverless APIs",children:"Serverless APIs"}),"\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a todos \u8868\uff0c\u5e76\u65b0\u589e\u5b57\u6bb5\uff08\u5217\uff09task \u4e3a varchar \u7c7b\u578b\uff0cSave \u4fdd\u5b58\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_Do9LHoUsYo.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"Insert row \u6dfb\u52a0\u4e00\u884c\u8bb0\u5f55\uff0cid \u4e3a 1\uff0ctask \u4e3a code\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_R9PEyH-spd.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_MLm6_i1Pb-.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u73b0\u5728\u6709\u4e86\u6570\u636e\u540e\uff0c\u6b63\u5e38\u6765\u8bf4\u6211\u4eec\u5e94\u8be5\u505a\u4ec0\u4e48\uff1f\u8bf7\u6c42\u4e00\u4e0b\u6570\u636e\u770b\u770b\uff1f\u4e0d\u4e0d\u4e0d\uff0c\u5e94\u8be5\u662f\u8bbe\u7f6e\u6570\u636e\u7684\u6743\u9650\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u6253\u5f00\u5230\u4e0b\u56fe\u754c\u9762\uff0c\u6211\u4eec\u8981\u4e3a todos \u6570\u636e\u65b0\u589e\u4e00\u4e2a policy \u7b56\u7565\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_MEKk1-qQFl.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_W-C-pGNh1o.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"supabase \u9488\u5bf9\u4e0d\u540c\u7684\u573a\u666f\u63d0\u4f9b\u4e86\u76f8\u5e94\u7684\u7b56\u7565\u65b9\u6848\u6a21\u677f\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u9700\u6c42\u8fdb\u884c\u8bbe\u7f6e\uff0c\u8fd9\u91cc\u4f5c\u4e3a\u6f14\u793a\u4e0d\u8003\u8651\u592a\u590d\u6742\uff0c\u9009\u62e9\u7b2c\u4e00\u4e2a\u5141\u8bb8\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8bf7\u6c42\u5230 todos \u6570\u636e\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_Oa_424N4gz.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u63a5\u7740\u4e0b\u4e00\u6b65\u5373\u53ef"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_wV_MqXQXcK.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u6b64\u65f6\u5c31\u65b0\u589e\u4e86\u4e00\u4e2a\u6240\u6709\u7528\u6237\u90fd\u53ef\u67e5\u8be2\u7684 todo \u7684\u7b56\u7565\uff0c\u540c\u6837\u7684\u4f60\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u53ea\u6709\u6388\u6743\u7528\u6237\u624d\u80fd\u591f\u521b\u5efa\u66f4\u65b0\u5220\u9664 todo\uff0c\u66f4\u65b0\u4e0e\u5220\u9664\u53ea\u80fd\u64cd\u4f5c\u5c5e\u4e8e\u81ea\u5df1\u7684 todo \u8d44\u6e90\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u8fd9\u65f6\u5019\u8bbe\u7f6e\u597d\u4e86\u6570\u636e\u7684\u6743\u9650\u540e\uff0c\u5c31\u53ef\u4ee5\u5c1d\u8bd5\u53bb\u8bf7\u6c42\u4e86\uff0c\u6253\u5f00\u4e0b\u56fe\u9875\u9762\uff0c\u5c06 URL \u4e0e apikey \u590d\u5236\u4e0b\u6765\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_GDEeyFCI2E.png",alt:""})}),"\n",(0,t.jsxs)(s.p,{children:["\u9009\u62e9\u4f60\u4e00\u4e2a http \u8bf7\u6c42\u5de5\u5177\uff0c\u8fd9\u91cc\u6211\u9009\u7528 ",(0,t.jsx)(s.a,{href:"https://hoppscotch.io/",title:"hoppscotch",children:"hoppscotch"}),"\uff0c\u5c06\u4fe1\u606f\u586b\u5199\u4e0a\u53bb\uff0c\u8bf7\u6c42\u5c06\u4f1a\u5f97\u5230\u4e00\u5f00\u59cb\u6240\u521b\u5efa\u7684 todo \u6570\u636e\u3002"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_aSbRfmlwb9.png",alt:""})}),"\n",(0,t.jsxs)(s.p,{children:["\u9664\u4e86 restful api \u98ce\u683c\uff0c\u8fd8\u652f\u6301 graphql \u98ce\u683c\uff0c\u53ef\u67e5\u9605\u6587\u6863 ",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/guides/database/api#using-the-api",title:"Using the API",children:"Using the API"})]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_R0HtkYmznS.png",alt:""})}),"\n",(0,t.jsx)(s.h3,{id:"\u4f7f\u7528\u7c7b\u5e93",children:"\u4f7f\u7528\u7c7b\u5e93"}),"\n",(0,t.jsxs)(s.p,{children:["\u6b63\u5e38\u60c5\u51b5\u80af\u5b9a\u4e0d\u4f1a\u50cf\u4e0a\u9762\u90a3\u6837\u53bb\u4f7f\u7528\uff0c\u800c\u662f\u901a\u8fc7\u4ee3\u7801\u7684\u65b9\u5f0f\u8fdb\u884c\u767b\u5f55\uff0cCRUD\u3002\u8fd9\u91cc\u4f7f\u7528 ",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/reference/javascript/installing",title:"Javascript Client Library",children:"Javascript Client Library"}),"\uff0c\u66ff\u6211\u4eec\u5c01\u88c5\u597d\u4e86 supabase \u7684\u529f\u80fd\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u9996\u5148\uff0c\u5b89\u88c5\u4f9d\u8d56"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install @supabase/supabase-js\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u521b\u5efa \u5ba2\u6237\u7aef\u5b9e\u4f8b"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { createClient } from '@supabase/supabase-js'\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u6b64\u65f6\u51c6\u5907\u597d\u4e0a\u8ff0\u7684 URL \u4e0e apikey\uff0c\u7528\u4e8e\u521b\u5efa supabase \u5b9e\u4f8b\uff0c\u4e0d\u8fc7 supabase \u8fd8\u63d0\u4f9b ",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/reference/javascript/typescript-support",children:"type \u7c7b\u578b\u652f\u6301"}),"\uff0c\u53ef\u4ee5\u5c06\u751f\u6210\u7684 ",(0,t.jsx)(s.code,{children:"database.types.ts"})," \u5bfc\u5165\u5230\u5b9e\u4f8b\u4e2d\uff0c\u5982"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"import { createClient } from '@supabase/supabase-js'\nimport { Database } from 'lib/database.types'\n\nconst supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u6b64\u65f6\u6709\u4e86 supabse \u5bf9\u8c61\u540e\uff0c\u5c31\u80fd\u591f\u8bf7\u6c42\u6570\u636e\u4e86\uff0c\u50cf\u4e0a\u8ff0\u901a\u8fc7 http \u7684\u65b9\u5f0f\u83b7\u53d6 todos \u6570\u636e\uff0c\u5728\u8fd9\u91cc\u5bf9\u5e94\u7684\u4ee3\u7801\u4e3a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"const { data, error } = await supabase.from('todos').select()\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://supabase.com/docs/reference/javascript/select",children:"\u5b98\u65b9\u7684\u6f14\u793a\u4f8b\u5b50"})," \u975e\u5e38\u6e05\u6670\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5728\u6f14\u793a\u65b0\u589e\u66f4\u65b0\u7b49\u793a\u4f8b\u3002"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image-20230218182910913.png",alt:"image-20230218182910913"})}),"\n",(0,t.jsx)(s.h2,{id:"supabase-\u4e3b\u8981\u529f\u80fd",children:(0,t.jsx)(s.a,{href:"https://supabase.com/docs",children:"Supabase \u4e3b\u8981\u529f\u80fd"})}),"\n",(0,t.jsx)(s.h3,{id:"database-\u6570\u636e\u5e93",children:"Database \u6570\u636e\u5e93"}),"\n",(0,t.jsx)(s.p,{children:"supabase \u57fa\u4e8e PostgreSQL \u6570\u636e\u5e93\uff0c\u56e0\u6b64\u5f53\u4f60\u521b\u5efa\u5b8c\u9879\u76ee\u540e\uff0c\u5c31\u81ea\u52a8\u4e3a\u4f60\u5206\u914d\u597d\u4e86\u4e00\u4e2a\u53ef\u8bbf\u95ee\u7684 PostgreSQL \u6570\u636e\u5e93\uff0c\u4f60\u5b8c\u5168\u53ef\u4ee5\u5c06\u5176\u5f53\u505a\u4e00\u4e2a\u8fdc\u7a0b\u7684 PostgreSQL \u6570\u636e\u4e3b\u673a\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u53ef\u4ee5\u5728\u5982\u4e0b\u9875\u9762\u4e2d\u67e5\u770b\u5230\u6709\u5173\u6570\u636e\u5e93\u8fde\u63a5\u7684\u4fe1\u606f\uff0c\u5f53\u7136\u4f60\u770b\u4e0d\u5230\u5bc6\u7801\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_6uCHh3qrlE.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u6d4b\u8bd5\u8fde\u63a5\uff0c\u7ed3\u679c\u5982\u4e0b\uff0c\u5e76\u65e0\u95ee\u9898"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_8-JOTiLI0G.png",alt:""})}),"\n",(0,t.jsx)(s.h3,{id:"authentication-\u8eab\u4efd\u9a8c\u8bc1",children:"Authentication \u8eab\u4efd\u9a8c\u8bc1"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://supabase.com/docs/guides/auth/overview",title:"Auth | Supabase Docs",children:"Auth | Supabase Docs"})}),"\n",(0,t.jsxs)(s.p,{children:["supabase \u4ee4\u6211\u611f\u5174\u8da3\u7684\u662f ",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security",title:"Row Level Security",children:"Row Level Security"}),"\uff0csupabase \u4f7f\u7528 Postgres \u7684 Row-Level-Security\uff08\u884c\u7ea7\u5b89\u5168\uff09\u7b56\u7565\uff0c\u53ef\u4ee5\u9650\u5236\u4e0d\u540c\u7528\u6237\u5bf9\u540c\u4e00\u5f20\u8868\u7684\u4e0d\u540c\u6570\u636e\u884c\u7684\u8bbf\u95ee\u6743\u9650\u3002\u8fd9\u79cd\u5b89\u5168\u673a\u5236\u53ef\u4ee5\u786e\u4fdd\u53ea\u6709\u6388\u6743\u7528\u6237\u624d\u80fd\u8bbf\u95ee\u5176\u6240\u9700\u8981\u7684\u6570\u636e\u884c\uff0c\u4fdd\u62a4\u654f\u611f\u6570\u636e\u514d\u53d7\u672a\u6388\u6743\u7684\u8bbf\u95ee\u548c\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsx)(s.p,{children:"\u5728\u4f20\u7edf\u7684\u8bbf\u95ee\u63a7\u5236\u6a21\u578b\u4e2d\uff0c\u7528\u6237\u901a\u5e38\u53ea\u6709\u5bf9\u6574\u4e2a\u8868\u7684\u8bbf\u95ee\u6743\u9650\uff0c\u65e0\u6cd5\u9650\u5236\u4ed6\u4eec\u5bf9\u8868\u4e2d\u7279\u5b9a\u6570\u636e\u884c\u7684\u8bbf\u95ee\u3002\u800c\u884c\u7ea7\u5b89\u5168\u6280\u672f\u5219\u901a\u8fc7\u5c06\u8bbf\u95ee\u6743\u9650\u6388\u4e88\u5230\u7279\u5b9a\u7684\u6570\u636e\u884c\uff0c\u4ece\u800c\u8ba9\u4e0d\u540c\u7684\u7528\u6237\u53ea\u80fd\u8bbf\u95ee\u4ed6\u4eec\u88ab\u6388\u6743\u7684\u884c\u3002\u8fd9\u79cd\u884c\u7ea7\u5b89\u5168\u6709\u4e00\u4e2a\u5f88\u7ecf\u5178\u5e94\u7528\u573a\u666f-\u591a\u79df\u6237\u7cfb\u7edf\uff1a\u5141\u8bb8\u4e0d\u540c\u7684\u5ba2\u6237\u5728\u540c\u4e00\u5f20\u8868\u4e2d\u5b58\u50a8\u6570\u636e\uff0c\u4f46\u6bcf\u4e2a\u5ba2\u6237\u53ea\u80fd\u8bbf\u95ee\u5176\u81ea\u5df1\u7684\u6570\u636e\u884c\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u8fd9\u5bf9\u4e8e\u4f20\u7edf\u540e\u7aef\u5f00\u53d1\u800c\u8a00\uff0c\u5982\u679c\u4e0d\u501f\u7528\u4e00\u4e9b\u5b89\u5168\u6846\u67b6\uff0c\u5b9e\u73b0\u8d77\u6765\u5341\u5206\u68d8\u624b\uff0c\u8981\u4e48\u4e1a\u52a1\u4ee3\u7801\u4e0e\u5b89\u5168\u4ee3\u7801\u903b\u8f91\u6df7\u6742\u4e0d\u582a\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u6743\u9650\u7ec6\u5206\u65b9\u9762\uff0c\u65e0\u9700\u62c5\u5fc3\uff0csupabase \u5df2\u7ecf\u4e3a\u4f60\u505a\u597d\u4e86\u51c6\u5907\uff0c\u5c31\u7b49\u4f60\u6765\u8fdb\u884c\u5f00\u53d1\u3002"}),"\n",(0,t.jsx)(s.h4,{id:"\u7b2c\u4e09\u65b9\u767b\u5f55",children:"\u7b2c\u4e09\u65b9\u767b\u5f55"}),"\n",(0,t.jsx)(s.p,{children:"\u5bf9\u4e8e\u60f3\u8981\u63d0\u4f9b\u7b2c\u4e09\u65b9\u767b\u5f55\uff0csupabse \u96c6\u6210\u591a\u6570\u5e73\u53f0\uff08\u9664\u4e86\u56fd\u5185\uff09\uff0c\u53ea\u9700\u8981\u63d0\u4f9b Clinet ID, Client Secret, Redirect URL \u4fbf\u53ef\u5b8c\u6210\u7b2c\u4e09\u65b9\u767b\u5f55\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_OvBRJ_elZR.png",alt:""})}),"\n",(0,t.jsxs)(s.p,{children:["\u8fd9\u91cc\u6f14\u793a\u4e0b\u5982\u4f55\u4f7f\u7528 Github\uff0c\u9996\u5148\u5230\u6253\u5f00",(0,t.jsx)(s.a,{href:"https://github.com/settings/applications/new",title:"New OAuth Application (github.com)",children:"New OAuth Application (github.com)"})," \u521b\u5efa\u4e00\u4e2a Oauth Apps\uff0c\u5176\u4e2d Authorization callback URL \u7531 supabase \u63d0\u4f9b\uff0c\u5982\u4e0b\u56fe\u3002"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_QVspy-oxQK.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_jyaUMSDed2.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u5f53\u4f60\u521b\u5efa\u5b8c\u540e\uff0c\u4f1a\u63d0\u4f9b Client ID\uff0c\u4e0e Client secret\uff0c\u5c06\u8fd9\u4e24\u4e2a\u503c\u586b\u5199\u5230 supabase \u4e2d\uff0c\u5e76\u542f\u7528\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_QpRRxpR5o5.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u6b64\u65f6\u6253\u5f00\u5982\u4e0b\u9875\u9762\uff0c\u5c06 Site URL \u66ff\u6362\u6210\u5f00\u53d1\u73af\u5883\uff0c\u6216\u662f\u7ebf\u4e0a\u73af\u5883\uff0c\u5728 Github \u767b\u5f55\u540e\u5c06\u4f1a\u8df3\u8f6c\u5230\u8fd9\u4e2a\u5730\u5740\u4e0a"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_zmfXC85ayC.png",alt:""})}),"\n",(0,t.jsxs)(s.p,{children:["\u6b64\u65f6 supabase \u652f\u6301 github \u767b\u5f55\u5c31\u5df2\u7ecf\u914d\u7f6e\u5b8c\u6bd5\uff0c\u5f53\u4f60\u5728\u524d\u7aef\u89e6\u53d1\u767b\u5f55\u6309\u94ae\u540e\uff0c\u501f\u52a9",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/reference/javascript/auth-signinwithoauth",title:"supabase \u7684js\u5e93",children:"supabase \u7684 js \u5e93"}),"\uff0c\u5982"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"const { data, error } = await supabase.auth.signInWithOAuth({\n  provider: 'github',\n})\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u4fbf\u53ef\u5b8c\u6210 Github \u7b2c\u4e09\u65b9\u767b\u5f55\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"bucket-\u5b58\u50a8\u6876",children:"Bucket \u5b58\u50a8\u6876"}),"\n",(0,t.jsx)(s.p,{children:"\u63a5\u89e6\u8fc7\u5bf9\u8c61\u5b58\u50a8\u7684\u5f00\u53d1\u8005\u5bf9 Bucket \u5e94\u8be5\u4e0d\u964c\u751f\uff0c\u76f8\u5f53\u4e8e\u7ed9\u4f60\u4e00\u4e2a\u4e91\u76d8\uff0c\u8fd9\u91cc\u6f14\u793a\u5982\u4f55\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u6253\u5f00\u5982\u4e0b\u754c\u9762\uff0c\u8fd9\u91cc\u9009\u62e9\u516c\u5f00\u5b58\u50a8\u6876\uff0c\u6bd4\u5982\u8bf4\u7528\u4e8e\u56fe\u5e8a\u3002"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_2Is4Bfwf8f.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684 upload files\uff0c\u9009\u62e9\u4f60\u8981\u4e0a\u4f20\u7684\u56fe\u7247\u3002\u4f60\u53ef\u4ee5\u4e3a\u6b64\u751f\u6210\u4e00\u4e2a\u8bbf\u95ee URL"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_vkuzeZZVJ_.png",alt:""})}),"\n",(0,t.jsxs)(s.p,{children:["\u4f60\u53ef\u4ee5\u8bbf\u95ee ",(0,t.jsx)(s.a,{href:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/publilc/1.png",children:"1.png"})," \u6765\u67e5\u770b\u8fd9\u5f20\u56fe\u7247\u3002\u5982\u679c\u662f\u516c\u5f00\u7684\u8bdd \u4e00\u822c\u90fd\u662f\u7c7b\u4f3c",(0,t.jsx)(s.a,{href:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/new-bucket/1.png",children:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/new-bucket/1.png"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u800c\u79c1\u6709\u7684\u4e3a ",(0,t.jsx)(s.a,{href:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/sign/new-bucket/1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCIxxxxxxxxxxxxxxxxx",children:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/sign/new-bucket/1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCIxxxxxxxxxxxxxxxxx"})," \u8def\u5f84\u7a0d\u5fae\u53d8\u5316\u4e86\u4e0b\uff0c\u8fd8\u6709\u5c31\u662f\u591a\u4e86\u4e2a token\uff0c\u5982\u679c\u4e0d\u643a\u5e26 token \u5219\u8bbf\u95ee\u4e0d\u4e86\u56fe\u7247\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u4f60\u53ef\u4ee5\u5230",(0,t.jsx)(s.a,{href:"https://supabase.github.io/storage-api/",title:"Supabase Storage API",children:"Supabase Storage API"})," \u67e5\u770b storage \u76f8\u5173 api\u3002"]}),"\n",(0,t.jsx)(s.admonition,{title:"\u73b0\u5b66\u73b0\u7528",type:"tip",children:(0,t.jsx)(s.p,{children:"\u672c\u6587\u4e2d\u7684\u6240\u6709\u56fe\u7247\u6570\u636e\u90fd\u6765\u6e90\u4e8e supabase bucket\u3002"})}),"\n",(0,t.jsx)(s.h3,{id:"edge-functions-\u8fb9\u7f18\u51fd\u6570",children:"Edge Functions \u8fb9\u7f18\u51fd\u6570"}),"\n",(0,t.jsx)(s.p,{children:"\u8fb9\u7f18\u51fd\u6570\u53ef\u4ee5\u5206\u5e03\u5728\u5168\u7403\u7684\u63a5\u8fd1\u60a8\u7684\u7528\u6237\u5404\u4e2a\u5730\u65b9\uff0c\u7c7b\u4f3c\u4e0e CDN\uff0c\u4f46 CDN \u4e3b\u8981\u670d\u52a1\u4e8e\u9759\u6001\u8d44\u6e90\uff0c\u800c Edge Functions \u53ef\u4ee5\u5c06\u4f60\u7684\u540e\u7aef\u5e94\u7528\u63a5\u53e3\uff0c\u50cf CDN \u90a3\u6837\u90e8\u7f72\u5230\u5168\u7403\u5404\u5730\u3002"}),"\n",(0,t.jsx)(s.p,{children:"\u6709\u5174\u8da3\u53ef\u81ea\u884c\u4e86\u89e3\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u4f7f\u7528-supabase-\u7f16\u5199\u4e00\u4e2a\u7b80\u6613\u56fe\u5e8a",children:(0,t.jsx)(s.strong,{children:"\u4f7f\u7528 Supabase \u7f16\u5199\u4e00\u4e2a\u7b80\u6613\u56fe\u5e8a"})}),"\n",(0,t.jsxs)(s.p,{children:["\u5982\u679c\u53ea\u5355\u7eaf\u770b\u770b supabase \u6587\u6863\uff0c\u4e0d\u53bb\u52a8\u624b\u5b9e\u8df5\u63a5\u5165\u4e00\u4e0b\uff0c\u603b\u89c9\u5f97\u8fd8\u662f\u5dee\u70b9\u610f\u601d\u3002\u4e8e\u662f\u6211\u51c6\u5907\u4f7f\u7528 Nuxt \u4f5c\u4e3a\u524d\u7aef\u6846\u67b6\u63a5\u5165 supabase\uff0c\u5b98\u65b9\u6a21\u5757 ",(0,t.jsx)(s.a,{href:"https://supabase.nuxtjs.org/",title:"Nuxt Supabase",children:"Nuxt Supabase"})," \u53bb\u7f16\u5199\u4e00\u4e2a\u5e94\u7528\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u539f\u672c\u6211\u662f\u6253\u7b97\u5199\u4e2a Todo List \u7684\uff08\u607c\uff0c\u600e\u4e48\u53c8\u662f Todo List\uff09\uff0c\u4f46\u662f\u770b\u5230 ",(0,t.jsx)(s.a,{href:"https://supabase.com/docs/guides/resources/examples#official-examples",title:"\u5b98\u65b9\u793a\u4f8b",children:"\u5b98\u65b9\u793a\u4f8b"}),"\uff08\u4e00\u5806 Todo List\uff09\u540e\u6211\u77ac\u95f4\u5c31\u6ca1\u4e86\u5174\u81f4 \ud83e\udd40\u3002"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_1polvJf0q0.png",alt:""})}),"\n",(0,t.jsxs)(s.p,{children:["\u601d\u6765\u60f3\u53bb\uff0c\u4e0d\u59a8\u5c31\u7b80\u5355\u505a\u4e2a\u56fe\u5e8a\u5427\u3002\u9879\u76ee\u5730\u5740\uff1a",(0,t.jsx)(s.a,{href:"https://image.kuizuo.cn",children:"https://image.kuizuo.cn"})," \u6709\u5174\u8da3\u53ef\u81ea\u884c\u9605\u8bfb",(0,t.jsx)(s.a,{href:"https://github.com/kuizuo/image-hosting",children:"\u6e90\u7801"}),"\u3002\uff08",(0,t.jsx)(s.strong,{children:"\u5199\u7684\u76f8\u5bf9\u5306\u5fd9\uff0c\u4ec5\u4f5c\u4e3a\u6f14\u793a\uff0c\u968f\u65f6\u6709\u53ef\u80fd\u5220\u9664\uff0c\u8bf7\u52ff\u5c06\u6b64\u7ad9\u4f5c\u4e3a\u6c38\u4e45\u56fe\u5e8a\uff01"}),"\uff09"]}),"\n",(0,t.jsx)(s.h2,{id:"\u4e00\u4e9b\u4f60\u53ef\u80fd\u6bd4\u8f83\u597d\u5947\u7684\u95ee\u9898",children:"\u4e00\u4e9b\u4f60\u53ef\u80fd\u6bd4\u8f83\u597d\u5947\u7684\u95ee\u9898"}),"\n",(0,t.jsx)(s.h3,{id:"\u8d44\u6e90",children:"\u8d44\u6e90"}),"\n",(0,t.jsxs)(s.p,{children:["\u53ef\u4ee5\u5230 ",(0,t.jsx)(s.a,{href:"https://app.supabase.com/project/%E9%A1%B9%E7%9B%AEid/settings/billing/usage",children:"https://app.supabase.com/project/\u9879\u76eeid/settings/billing/usage"})," \u4e2d\u67e5\u770b\u76f8\u5173\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\uff0c\u8fd9\u91cc\u6211\u5c31\u5c06\u622a\u56fe\u653e\u51fa\u6765\u4e86\u3002"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_Bllhp6XlFz.png",alt:""})}),"\n",(0,t.jsx)(s.p,{children:"\u8bf4\u5b9e\u8bdd\uff0c\u5bf9\u4e8e\u4e2a\u4eba\u72ec\u7acb\u5f00\u53d1\u8005\u7684\u9879\u76ee\u90fd\u7ef0\u7ef0\u6709\u4f59\u4e86\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"\u8d39\u7528",children:"\u8d39\u7528"}),"\n",(0,t.jsxs)(s.p,{children:["\u5728 ",(0,t.jsx)(s.a,{href:"https://supabase.com/pricing",title:"\u8d44\u8d39\u6807\u51c6",children:"\u8d44\u8d39\u6807\u51c6"})," \u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u514d\u8d39\u7248",(0,t.jsx)(s.strong,{children:"\u6700\u591a 2 \u4e2a\u9879\u76ee"}),"\uff0c\u4e0d\u8fc7\u5728\u4e0a\u8ff0\u7684\u8d44\u6e90\uff0c\u5176\u5b9e\u5df2\u7ecf\u975e\u5e38\u9999\u4e86\uff0c\u6bd5\u7adf\u53ea\u9700\u8981\u4e00\u4e2a GIthub \u8d26\u53f7\u5c31\u80fd\u514d\u8d39\u4f7f\u7528\uff0c\u8fd8\u8981\u5565\u81ea\u884c\u8f66\u3002"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://azlbliyjwcemojkwazto.supabase.co/storage/v1/object/public/public/image_MNtdzsdJ2t.png",alt:""})}),"\n",(0,t.jsx)(s.h3,{id:"\u7f51\u901f",children:"\u7f51\u901f"}),"\n",(0,t.jsx)(s.p,{children:"\u56fd\u5185\u56e0\u4e3a\u6ca1\u6709 supabase \u7684\u670d\u52a1\u5668\u8282\u70b9\uff0c\u7136\u540e\u4e14\u6709\u9632\u706b\u5899\u7684\u5b58\u5728\uff0c\u6240\u4ee5\u8bf7\u6c42\u901f\u5ea6\u504f\u6162\u3002\u4e0d\u8fc7\u4f53\u9a8c\u4e0b\u6765\u81f3\u5c11\u4e0d\u7528\u68af\u5b50\uff0c\u901f\u5ea6\u6162\u70b9\u4f46\u4e5f\u8fd8\u5728\u53ef\u63a5\u53d7\u8303\u56f4\u3002"}),"\n",(0,t.jsx)(s.h3,{id:"\u57df\u540d",children:"\u57df\u540d"}),"\n",(0,t.jsxs)(s.p,{children:["\u7528\u8fc7 vercel \u7684\u4f60\u5e94\u8be5\u4f1a\u60f3\u662f\u4e0d\u662f\u4e5f\u80fd\u81ea\u5b9a\u4e49\u57df\u540d\u5462? \u5f53\u7136\uff0c\u4e0d\u8fc7\u8fd9\u662f supabase pro \u7248\u624d\u652f\u6301\uff0c\u4e00\u4e2a\u6708$25(\u7f8e\u5200)\uff0c\u7b97\u4e86\u7b97\u4e86\uff0c\u518d\u4e00\u773c azlbliyjwcxxxxx.supabase.co",(0,t.jsx)(s.del,{children:"\u5c31\u4f1a\u7206\u70b8"}),"\u611f\u89c9\u4e5f\u86ee\u597d\u8bb0\u7684\u3002"]}),"\n",(0,t.jsx)(s.h2,{id:"\u7ed3\u8bed",children:"\u7ed3\u8bed"}),"\n",(0,t.jsx)(s.p,{children:"\u8bf4\u53e5\u5b9e\u8bdd\uff0c\u771f\u5fc3\u611f\u89c9 supabase \u4e0d\u9519\uff0c\u5c24\u5176\u662f\u5bf9\u4e2a\u4eba/\u72ec\u7acb\u5f00\u53d1\u8005\u800c\u8a00\uff0c\u6ca1\u5fc5\u8981\u81ea\u884c\u53bb\u8d2d\u4e70\u670d\u52a1\u5668\uff0c\u53bb\u642d\u5efa\u540e\u7aef\u670d\u52a1\uff0c\u5f88\u591a\u65f6\u5019\u6211\u4eec\u53ea\u60f3\u4e13\u6ce8\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u548c\u529f\u80fd\u5b9e\u73b0\uff0c\u800c\u4e0d\u662f\u82b1\u8d39\u5927\u91cf\u65f6\u95f4\u548c\u7cbe\u529b\u5728\u670d\u52a1\u5668\u548c\u540e\u7aef\u670d\u52a1\u7684\u90e8\u7f72\u548c\u7ba1\u7406\u4e0a\u3002"})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,s,a)=>{a.d(s,{R:()=>p,x:()=>n});var t=a(96540);const i={},c=t.createContext(i);function p(e){const s=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:p(e.components),t.createElement(c.Provider,{value:s},e.children)}}}]);