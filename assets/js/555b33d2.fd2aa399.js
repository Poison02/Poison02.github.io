"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[22032],{76282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var o=n(74848),r=n(28453);const i={slug:"discoveries-of-an-algorithm-neophyte",title:"\u4e00\u4f4d\u672a\u66fe\u6d89\u8db3\u7b97\u6cd5\u7684\u521d\u5b66\u8005\u6536\u83b7",date:new Date("2023-09-16T00:00:00.000Z"),authors:"kuizuo",tags:["\u7b97\u6cd5"],keywords:["\u7b97\u6cd5"]},s=void 0,l={permalink:"/blog/discoveries-of-an-algorithm-neophyte",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/lifestyle/\u4e00\u4f4d\u672a\u66fe\u6d89\u8db3\u7b97\u6cd5\u7684\u521d\u5b66\u8005\u6536\u83b7.md",source:"@site/blog/lifestyle/\u4e00\u4f4d\u672a\u66fe\u6d89\u8db3\u7b97\u6cd5\u7684\u521d\u5b66\u8005\u6536\u83b7.md",title:"\u4e00\u4f4d\u672a\u66fe\u6d89\u8db3\u7b97\u6cd5\u7684\u521d\u5b66\u8005\u6536\u83b7",description:"\u6b63\u5982\u6807\u9898\u6240\u8a00\uff0c\u5728\u6211\u56db\u5e74\u7684\u7f16\u7a0b\u7ecf\u5386\u4e2d\u5c31\u6ca1\u5237\u8fc7\u4e00\u9053\u7b97\u6cd5\u9898\uff0c\u8fd9\u53ef\u80fd\u4e0e\u6211\u6240\u7f16\u5199\u7684\u5e94\u7528\u6709\u5173\uff0c\u7b97\u6cd5\u5bf9\u6211\u800c\u8a00\u63d0\u5347\u4e0d\u662f\u7279\u522b\u5927\u3002\u52a0\u4e0a\u6211\u51e0\u4e4e\u90fd\u662f\u5728\u9700\u6c42\u4e2d\u5b66\u4e60\uff0c\u800c\u975e\u7cfb\u7edf\u6027\u7684\u5b66\u4e60\u3002\u6240\u4ee5\u50cf\u7b97\u6cd5\u8fd9\u79cd\u57fa\u7840\u77e5\u8bc6\u6211\u81ea\u7136\u5c31\u4e0d\u662f\u5f88\u719f\u6089\u3002",date:"2023-09-16T00:00:00.000Z",formattedDate:"2023\u5e749\u670816\u65e5",tags:[{label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"}],readingTime:9.39,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5373\u5c06\u6bd5\u4e1a\u7684\u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"discoveries-of-an-algorithm-neophyte",title:"\u4e00\u4f4d\u672a\u66fe\u6d89\u8db3\u7b97\u6cd5\u7684\u521d\u5b66\u8005\u6536\u83b7",date:"2023-09-16T00:00:00.000Z",authors:"kuizuo",tags:["\u7b97\u6cd5"],keywords:["\u7b97\u6cd5"]},unlisted:!1,prevItem:{title:"\u5173\u4e8e restful api \u8def\u5f84\u5b9a\u4e49\u7684\u601d\u8003",permalink:"/blog/restful-api-url-definition"},nextItem:{title:"Nest grpc \u5b9e\u8df5\u4e4b\u8c03\u7528 python ddddocr \u5e93",permalink:"/blog/nest-grpc-ocr"}},c={authorsImageUrls:[void 0]},a=[{value:"\u90a3\u6211\u4e3a\u4f55\u4f1a\u63a5\u89e6\u7b97\u6cd5\u5462\uff1f",id:"\u90a3\u6211\u4e3a\u4f55\u4f1a\u63a5\u89e6\u7b97\u6cd5\u5462",level:2}];function u(e){const t={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u6b63\u5982\u6807\u9898\u6240\u8a00\uff0c\u5728\u6211\u56db\u5e74\u7684\u7f16\u7a0b\u7ecf\u5386\u4e2d\u5c31\u6ca1\u5237\u8fc7\u4e00\u9053\u7b97\u6cd5\u9898\uff0c\u8fd9\u53ef\u80fd\u4e0e\u6211\u6240\u7f16\u5199\u7684\u5e94\u7528\u6709\u5173\uff0c\u7b97\u6cd5\u5bf9\u6211\u800c\u8a00\u63d0\u5347\u4e0d\u662f\u7279\u522b\u5927\u3002\u52a0\u4e0a\u6211\u51e0\u4e4e\u90fd\u662f",(0,o.jsx)(t.strong,{children:"\u5728\u9700\u6c42\u4e2d\u5b66\u4e60\uff0c\u800c\u975e\u7cfb\u7edf\u6027\u7684\u5b66\u4e60"}),"\u3002\u6240\u4ee5\u50cf\u7b97\u6cd5\u8fd9\u79cd\u57fa\u7840\u77e5\u8bc6\u6211\u81ea\u7136\u5c31\u4e0d\u662f\u5f88\u719f\u6089\u3002"]}),"\n",(0,o.jsx)(t.h2,{id:"\u90a3\u6211\u4e3a\u4f55\u4f1a\u63a5\u89e6\u7b97\u6cd5\u5462",children:"\u90a3\u6211\u4e3a\u4f55\u4f1a\u63a5\u89e6\u7b97\u6cd5\u5462\uff1f"}),"\n",(0,o.jsx)(t.p,{children:"\u6211\u5728\u4eca\u5e74\u6691\u5047\u671f\u95f4\u6709\u4e00\u4e2a\u9762\u8bd5\uff0c\u5f53\u65f6\u9762\u8bd5\u5b98\u60f3\u8003\u5bdf\u4e0b\u6211\u7684\u7b97\u6cd5\u80fd\u529b\uff0c\u800c\u6211\u76f4\u63a5\u660e\u6446\u4e86\u8bf4\u6211\u4e0d\u884c\uff08\u6307\u7b97\u6cd5\u4e0a\u7684\u4e0d\u884c\uff09\uff0c\u4f46\u9762\u8bd5\u5b98\u8fd8\u662f\u60f3\u7ee7\u7eed\u8003\u5bdf\uff0c\u4e8e\u662f\u5c31\u51fa\u4e86\u9053\u6590\u6ce2\u90a3\u5951\u6570\u5217\u4f5c\u4e3a\u8003\u9898\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u4f46\u6211\u6bd5\u7adf\u4e5f\u63a5\u89e6\u4e86 4 \u5e74\u7684\u4ee3\u7801\uff0c\u867d\u8bf4\u4e0d\u5237\u7b97\u6cd5\uff0c\u4f46\u8d77\u7801\u4e5f\u770b\u8fc7\u8bb8\u591a\u6587\u7ae0\u548c\u4ee3\u7801\uff0c\u6590\u6ce2\u90a3\u5951\u6570\u5217\u4f7f\u7528\u9012\u5f52\u5b9e\u73b0\u7684\u4ee3\u7801\u4e5f\u6709\u5370\u8c61\uff0c\u4e8e\u662f\u5f88\u5feb\u6211\u5c31\u5199\u51fa\u4e86\u4e0b\u9762\u7684\u4ee3\u7801\u4f5c\u4e3a\u6211\u7684\u7b54\u6848\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-typescript",children:"function fib(n) {\n  if (n <= 1) return n\n\n  return fib(n - 1) + fib(n - 2)\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u9762\u8bd5\u5b98\u95ee\u6211\u8fd8\u6709\u6ca1\u6709\u66f4\u597d\u7684\u7b54\u6848\uff0c\u6211\u4fbf\u6447\u4e86\u6447\u5934\u8868\u793a\u8fd9 5 \u884c\u4e0d\u5230\u7684\u4ee3\u7801\u96be\u9053\u4e0d\u662f\u6700\u4f18\u89e3\uff1f"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"\u4e8b\u5b9e\u4e0a\u8fd9\u4efd\u4ee3\u7801\u770b\u8d77\u6765\u5f88\u7b80\u6d01\uff0c\u5b9e\u9645\u5374\u662f\u8017\u65f6\u6700\u6162\u7684\u89e3\u6cd5"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u6beb\u65e0\u7591\u95ee\uff0c\u5728\u7b97\u6cd5\u8fd9\u5173\u6211\u80af\u5b9a\u662f\u6302\u4e86\u7684\uff0c\u4e0d\u8fc7\u597d\u5728\u9879\u76ee\u7ecf\u9a8c\u53ca\u540e\u7eed\u7684\u9879\u76ee\u5b9e\u8df5\u8003\u6838\u8f83\u4e3a\u987a\u5229\uff0c\u4e0d\u7136\u7ed3\u5c40\u5c31\u662f\u56de\u53bb\u7b49\u901a\u77e5\u4e86\u3002\u6700\u540e\u9762\u8bd5\u63a5\u8fd1\u5c3e\u58f0\u65f6\uff0c\u9762\u8bd5\u5b98\u53cb\u60c5\u63d0\u9192\u6211\u52a0\u5f3a\u57fa\u7840\u77e5\u8bc6\uff08\u7b97\u6cd5\uff09\uff0c\u5f3a\u8c03\u5404\u79cd\u5e94\u7528\u6846\u67b6\u4e0d\u65ad\u66f4\u65b0\u8fed\u4ee3\uff0c\u4f46\u8ba1\u7b97\u673a\u7684\u5e95\u5c42\u57fa\u7840\u77e5\u8bc6\u662f\u4e0d\u53d8\u7684\u3002\u4e8e\u662f\u5728\u9762\u8bd5\u5b98\u7684\u5efa\u8bae\u4e0b\uff0c\u4fbf\u6709\u4e86\u672c\u6587\u3002"})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var o=n(96540);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);