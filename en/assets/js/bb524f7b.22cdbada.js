"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[13839],{99485:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=n(74848),s=n(28453);const l={slug:"js-binary-data",title:"JavaScript\u4e2d\u7684\u4e8c\u8fdb\u5236\u6570\u636e",date:new Date("2022-01-24T00:00:00.000Z"),authors:"kuizuo",tags:["javascript"],keywords:["javascript"]},i=void 0,d={permalink:"/en/blog/js-binary-data",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/JavaScript\u4e2d\u7684\u4e8c\u8fdb\u5236\u6570\u636e.md",source:"@site/blog/develop/JavaScript\u4e2d\u7684\u4e8c\u8fdb\u5236\u6570\u636e.md",title:"JavaScript\u4e2d\u7684\u4e8c\u8fdb\u5236\u6570\u636e",description:"\u5728\u6211\u7f16\u5199 js \u4ee3\u7801\u4e2d\uff0c\u5173\u4e8e\u5904\u7406\u4e8c\u8fdb\u5236\u6570\u636e\u4e86\u89e3\u751a\u5c11\uff0c\u597d\u50cf\u90fd\u662f\u7528\u6570\u7ec4\u8868\u793a\uff0c\u4f46\u662f\u6210\u5458\u53c8\u5f88\u6a21\u7cca\u3002\u5c24\u5176\u662f\u5728\u9047\u5230\u4e00\u4e9b http \u7684 post \u8bf7\u6c42\u6216 websocket\uff0c\u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\uff08\u5b57\u8282\uff09\u65f6\uff0c\u8fd8\u6709\u4e00\u4e9b\u7b97\u6cd5\u7684\u7ffb\u8bd1\uff0c\u6570\u636e\u7684\u8f6c\u5316\uff0c\u534f\u8bae\u7684\u590d\u73b0\uff0c\u90fd\u9700\u8981\u4e0d\u65ad\u7684\u4ece\u7f51\u7edc\u4e0a\u67e5\u9605\uff0c\u5e76\u672a\u7cfb\u7edf\u7684\u4ece\u6587\u6863\u6559\u7a0b\u4e2d\u5165\u624b\u3002\u4e8e\u662f\u5199\u8fd9\u7bc7\u7684\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u52a0\u56fa\u5bf9\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u7406\u89e3\uff0c\u4ee5\u53ca JavaScript \u4e2d\u5982\u4f55\u64cd\u4f5c\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u3002",date:"2022-01-24T00:00:00.000Z",formattedDate:"January 24, 2022",tags:[{label:"javascript",permalink:"/en/blog/tags/javascript"}],readingTime:5.923333333333333,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/en/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"js-binary-data",title:"JavaScript\u4e2d\u7684\u4e8c\u8fdb\u5236\u6570\u636e",date:"2022-01-24T00:00:00.000Z",authors:"kuizuo",tags:["javascript"],keywords:["javascript"]},unlisted:!1,prevItem:{title:"\u8bb0\u4e00\u6b21Github\u63d0\u4ea4PR\u8fc7\u7a0b",permalink:"/en/blog/github-pr-experience"},nextItem:{title:"SpringBoot\u70ed\u66f4\u65b0",permalink:"/en/blog/springboot-hot-update"}},c={authorsImageUrls:[void 0]},a=[{value:"ArrayBuffer",id:"arraybuffer",level:2},{value:"TypedArray",id:"typedarray",level:2},{value:"NodeJS \u7684 Buffer",id:"nodejs-\u7684-buffer",level:2},{value:"Buffer.from",id:"bufferfrom",level:3},{value:"buf.toJSON()",id:"buftojson",level:3},{value:"ArrayBuffer \u548c Buffer \u533a\u522b",id:"arraybuffer-\u548c-buffer-\u533a\u522b",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:2},{value:"\u7f16\u7801\u8f6c\u5316",id:"\u7f16\u7801\u8f6c\u5316",level:3},{value:"\u5c06\u8bf7\u6c42\u56fe\u7247\u8f6c\u5316\u6210 base64 \u7f16\u7801",id:"\u5c06\u8bf7\u6c42\u56fe\u7247\u8f6c\u5316\u6210-base64-\u7f16\u7801",level:3},{value:"http \u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\u4e0e WebSocket",id:"http-\u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\u4e0e-websocket",level:3},{value:"\u6587\u4ef6\u8bfb\u5199",id:"\u6587\u4ef6\u8bfb\u5199",level:3},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function f(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"\u5728\u6211\u7f16\u5199 js \u4ee3\u7801\u4e2d\uff0c\u5173\u4e8e\u5904\u7406\u4e8c\u8fdb\u5236\u6570\u636e\u4e86\u89e3\u751a\u5c11\uff0c\u597d\u50cf\u90fd\u662f\u7528\u6570\u7ec4\u8868\u793a\uff0c\u4f46\u662f\u6210\u5458\u53c8\u5f88\u6a21\u7cca\u3002\u5c24\u5176\u662f\u5728\u9047\u5230\u4e00\u4e9b http \u7684 post \u8bf7\u6c42\u6216 websocket\uff0c\u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\uff08\u5b57\u8282\uff09\u65f6\uff0c\u8fd8\u6709\u4e00\u4e9b\u7b97\u6cd5\u7684\u7ffb\u8bd1\uff0c\u6570\u636e\u7684\u8f6c\u5316\uff0c\u534f\u8bae\u7684\u590d\u73b0\uff0c\u90fd\u9700\u8981\u4e0d\u65ad\u7684\u4ece\u7f51\u7edc\u4e0a\u67e5\u9605\uff0c\u5e76\u672a\u7cfb\u7edf\u7684\u4ece\u6587\u6863\u6559\u7a0b\u4e2d\u5165\u624b\u3002\u4e8e\u662f\u5199\u8fd9\u7bc7\u7684\u76ee\u7684\u5c31\u662f\u4e3a\u4e86\u52a0\u56fa\u5bf9\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u7406\u89e3\uff0c\u4ee5\u53ca JavaScript \u4e2d\u5982\u4f55\u64cd\u4f5c\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"arraybuffer",children:"ArrayBuffer"}),"\n",(0,t.jsx)(r.p,{children:"\u5176\u4ed6\u8bed\u8a00 java\uff0c\u6613\u6240\u8868\u793a\u7684\u662f\u5b57\u8282\u6570\u7ec4\uff0c\u5b57\u8282\u96c6\uff0c\u800c\u5728 js \u4e2d\u5219\u79f0\u4e8c\u8fdb\u5236\u6570\u7ec4\uff08\u90fd\u662f\u7528\u6765\u8868\u793a\u4e8c\u8fdb\u5236\u6570\u636e\u7684\uff09\uff0c\u8981\u6ce8\u610f\u7684\u662f\u8fd9\u91cc\u7684\u4e8c\u8fdb\u5236\u6570\u7ec4\u5e76\u4e0d\u662f\u771f\u6b63\u7684\u6570\u7ec4\uff0c\u800c\u662f\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\u3002\uff08\u540e\u6587\u4f1a\u63d0\u5230\uff09"}),"\n",(0,t.jsxs)(r.p,{children:["\u5b58\u50a8\u4e8c\u8fdb\u5236\u6570\u636e\u7528\u5230\u7684\u5c31\u662f",(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\uff0c\u4f46 ",(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\u4e0d\u80fd\u76f4\u63a5\u8bfb\u5199\uff0c\u53ea\u80fd\u5b58\u50a8\uff0c\u9700\u8981\u901a\u8fc7\u89c6\u56fe\u6765\u8fdb\u884c\u64cd\u4f5c\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u4f8b\u5982\u5b58\u50a8\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u5219\u662f ArrayBuffer \u5bf9\u8c61\uff0c\u4f8b\u5982\u8bf7\u6c42\u56fe\u7247\u65f6\uff0c\u5c31\u4f1a\u6307\u5b9a\u53c2\u6570 ",(0,t.jsx)(r.code,{children:"responseType: 'arraybuffer'"}),"\u8868\u793a\u8fd4\u56de\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u4e5f\u5c31\u662f\u56fe\u7247\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\u4e5f\u662f\u4e00\u4e2a\u6784\u9020\u51fd\u6570\uff0c\u53ef\u4ee5\u5206\u914d\u4e00\u6bb5\u53ef\u4ee5\u5b58\u653e\u6570\u636e\u7684\u8fde\u7eed\u5185\u5b58\u533a\u57df\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const buffer = new ArrayBuffer(8)\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"ArrayBuffer {\n  [Uint8Contents]: <00 00 00 00 00 00 00 00>,\n  byteLength: 8\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u8fd9\u91cc\u7684 buffer.byteLength \u5c5e\u6027\u7528\u4e8e\u83b7\u53d6\u5b57\u8282\u957f\u5ea6\uff08\u8fd4\u56de 32\uff09\uff0c\u76f4\u63a5\u6253\u5370 buf \u7684\u7ed3\u679c"}),"\n",(0,t.jsxs)(r.p,{children:["\u5176\u4e2d\u8fd8\u6709\u4e00\u4e2a",(0,t.jsx)(r.code,{children:"slice"}),"\u65b9\u6cd5\uff0c\u5141\u8bb8\u5c06\u5185\u5b58\u533a\u57df\u7684\u4e00\u90e8\u5206\uff0c\u62f7\u8d1d\u751f\u6210\u4e00\u4e2a\u65b0\u7684",(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\u5bf9\u8c61\u3002\u4e0b\u9762\u4ee3\u7801\u62f7\u8d1d",(0,t.jsx)(r.code,{children:"buffer"}),"\u5bf9\u8c61\u7684\u524d 3 \u4e2a\u5b57\u8282\uff08\u4ece 0 \u5f00\u59cb\uff0c\u5230\u7b2c 3 \u4e2a\u5b57\u8282\u524d\u9762\u7ed3\u675f\uff09"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const buffer = new ArrayBuffer(8)\nconst newBuffer = buffer.slice(0, 3)\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u9664\u4e86",(0,t.jsx)(r.code,{children:"slice"}),"\u65b9\u6cd5\uff0c",(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\u5bf9\u8c61\u4e0d\u63d0\u4f9b\u4efb\u4f55\u76f4\u63a5\u8bfb\u5199\u5185\u5b58\u7684\u65b9\u6cd5\uff0c\u53ea\u5141\u8bb8\u5728\u5176\u4e0a\u65b9\u5efa\u7acb\u89c6\u56fe\uff0c\u7136\u540e\u901a\u8fc7\u89c6\u56fe\u8bfb\u5199\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"typedarray",children:"TypedArray"}),"\n",(0,t.jsxs)(r.p,{children:["\u4e0d\u8fc7\u53ea\u6709\u7a7a\u6570\u636e\u53ef\u6ca1\u7528\uff0c\u80af\u5b9a\u9700\u8981\u64cd\u4f5c",(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\uff0c\u4e5f\u5c31\u8981\u4ecb\u7ecd\u4e0b",(0,t.jsx)(r.code,{children:"TypedArray"}),"\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\u5bf9\u8c61\u4f5c\u4e3a\u5185\u5b58\u533a\u57df\uff0c\u53ef\u4ee5\u5b58\u653e\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\u3002\u540c\u4e00\u6bb5\u5185\u5b58\uff0c\u4e0d\u540c\u6570\u636e\u6709\u4e0d\u540c\u7684\u89e3\u8bfb\u65b9\u5f0f\uff0c\u8fd9\u5c31\u53eb\u505a\u201c\u89c6\u56fe\u201d\uff08view\uff09\uff0c",(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\u6709\u4e24\u79cd\u89c6\u56fe\uff0c\u4e00\u79cd\u662f",(0,t.jsx)(r.code,{children:"TypedArray"}),"\u89c6\u56fe\uff0c\u53e6\u4e00\u79cd\u662f",(0,t.jsx)(r.code,{children:"DataView"}),"\u89c6\u56fe\u3002\u8fd9\u91cc\u53ea\u4ecb\u7ecd",(0,t.jsx)(r.code,{children:"TypedArray"})]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"TypedArray"}),"\u89c6\u56fe\u4e00\u5171\u5305\u62ec 9 \u79cd\u7c7b\u578b\uff0c\u6bcf\u4e00\u79cd\u89c6\u56fe\u90fd\u662f\u4e00\u79cd\u6784\u9020\u51fd\u6570\u901a\u8fc7 9 \u4e2a\u6784\u9020\u51fd\u6570\uff0c\u53ef\u4ee5\u751f\u6210 9 \u79cd\u6570\u636e\u683c\u5f0f\u7684\u89c6\u56fe\uff0c\u6bd4\u5982",(0,t.jsx)(r.code,{children:"Uint8Array"}),"\uff08\u65e0\u7b26\u53f7 8 \u4f4d\u6574\u6570\uff0c\u8868\u793a\u4e00\u4e2a\u5b57\u8282\uff09\u6570\u7ec4\u89c6\u56fe\uff0c\u5177\u4f53\u5982\u4e0b"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"\u6570\u636e\u7c7b\u578b"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"\u5b57\u8282\u957f\u5ea6"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"\u542b\u4e49"}),(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"\u5bf9\u5e94\u7684 C \u8bed\u8a00\u7c7b\u578b"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"Int8"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"1"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"8 \u4f4d\u5e26\u7b26\u53f7\u6574\u6570"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"signed char"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"Uint8"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"1"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"8 \u4f4d\u4e0d\u5e26\u7b26\u53f7\u6574\u6570"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"unsigned char"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"Uint8C"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"1"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"8 \u4f4d\u4e0d\u5e26\u7b26\u53f7\u6574\u6570\uff08\u81ea\u52a8\u8fc7\u6ee4\u6ea2\u51fa\uff09"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"unsigned char"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"Int16"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"2"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"16 \u4f4d\u5e26\u7b26\u53f7\u6574\u6570"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"short"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"Uint16"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"2"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"16 \u4f4d\u4e0d\u5e26\u7b26\u53f7\u6574\u6570"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"unsigned short"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"Int32"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"4"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"32 \u4f4d\u5e26\u7b26\u53f7\u6574\u6570"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"int"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"Uint32"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"4"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"32 \u4f4d\u4e0d\u5e26\u7b26\u53f7\u7684\u6574\u6570"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"unsigned int"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"Float32"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"4"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"32 \u4f4d\u6d6e\u70b9\u6570"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"float"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"Float64"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"8"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"64 \u4f4d\u6d6e\u70b9\u6570"}),(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"double"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"\u89c6\u56fe\u7684\u6784\u9020\u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\u7b2c\u4e00\u4e2a\u53c2\u6570\uff08\u5fc5\u9700\uff09\uff1a\u89c6\u56fe\u5bf9\u5e94\u7684\u5e95\u5c42",(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\u5bf9\u8c61\u3002"]}),"\n",(0,t.jsx)(r.li,{children:"\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff08\u53ef\u9009\uff09\uff1a\u89c6\u56fe\u5f00\u59cb\u7684\u5b57\u8282\u5e8f\u53f7\uff0c\u9ed8\u8ba4\u4ece 0 \u5f00\u59cb\u3002"}),"\n",(0,t.jsx)(r.li,{children:"\u7b2c\u4e09\u4e2a\u53c2\u6570\uff08\u53ef\u9009\uff09\uff1a\u89c6\u56fe\u5305\u542b\u7684\u6570\u636e\u4e2a\u6570\uff0c\u9ed8\u8ba4\u76f4\u5230\u672c\u6bb5\u5185\u5b58\u533a\u57df\u7ed3\u675f\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u6f14\u793a"}),"\n",(0,t.jsx)(r.p,{children:"\u4e0d\u59a8\u7ed9\u5b83\u5199\u5165\u5b57\u7b26\u4e32 abc\uff0c\u5bf9\u5e94\u7684\u5341\u8fdb\u5236 ASCII \u7801\u4e3a 97,98,99\uff0c\u7531\u4e8e ASCII \u7801\u5360\u7528\u4e00\u4e2a\u5b57\u8282\u5b58\u50a8\uff0c\u6240\u4ee5\u8fd9\u91cc\u9009\u62e9 Uint8Array \u7528\u4e8e\u8868\u793a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const buffer = new ArrayBuffer(8);\nconst buf = new Uint8Array(buffer);\nbuf.set([97, 98, 99]);\nconsole.log(buf.buffer);\n\n// \u8f93\u51fa\u7ed3\u679c\nArrayBuffer {\n  [Uint8Contents]: <61 62 63 00 00 00 00 00>,\n  byteLength: 8\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u53ef\u4ee5\u770b\u5230 abc \u786e\u5b9e\u5b58\u5165\u4e86\uff0c\u5e76\u7528\u5341\u516d\u8fdb\u5236\u7684\u5f62\u5f0f\u8868\u793a\uff0c\u4e3a\u4e86\u9a8c\u8bc1\uff0c\u8fd9\u91cc\u4f7f\u7528 NodeJS \u4e2d\u7684 Buffer \u6765\u6f14\u793a\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528\u539f\u751f\u7684",(0,t.jsx)(r.a,{href:"https://es6.ruanyifeng.com/#docs/arraybuffer#ArrayBuffer-%E4%B8%8E%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E4%BA%92%E7%9B%B8%E8%BD%AC%E6%8D%A2",children:"TextEncoder"})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"Buffer.from(buf.buffer).toString() // abc\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u6570\u7ec4\u4e0b\u6807\u7684\u5f62\u5f0f\uff0c\u6765\u8bbf\u95ee\u6570\u636e\uff0c\u5982",(0,t.jsx)(r.code,{children:"buf[0]"}),"\u8fd4\u56de\u7684\u5c31\u662f 97\uff0c\u4f46 buf \u53c8\u6709 length \u4e0e\u5176\u4ed6\u7684\u5c5e\u6027\u65b9\u6cd5\uff0c\u8fd9\u79cd\u6570\u7ec4\u5c31\u7edf\u79f0\u4e3a\u7c7b\u6570\u7ec4\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["buf \u8fd8\u6709\u4e00\u4e9b\u65b9\u6cd5\uff0c\u65e0\u975e\u5c31\u662f\u64cd\u4f5c\u5b57\u8282\u590d\u5236\uff0c\u504f\u79fb\u5c31\u4e0d\u505a\u8fc7\u591a\u4ecb\u7ecd\u4e0e\u6f14\u793a\u4e86\uff0c\u5177\u4f53\u53ef\u67e5\u770b",(0,t.jsx)(r.a,{href:"https://es6.ruanyifeng.com/#docs/arraybuffer",children:"\u6587\u6863"})]}),"\n",(0,t.jsx)(r.h2,{id:"nodejs-\u7684-buffer",children:"NodeJS \u7684 Buffer"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"http://nodejs.cn/api/buffer.html#buffer_buffers_and_character_encodings",children:"buffer \u7f13\u51b2\u533a | Node.js API \u6587\u6863 (nodejs.cn)"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5728 Nodejs \u4e2d\u6709\u4e13\u95e8\u7684\u64cd\u4f5c",(0,t.jsx)(r.code,{children:"ArrayBuffer"})," \u7684\u5bf9\u8c61",(0,t.jsx)(r.code,{children:"Buffer"}),"\uff0c",(0,t.jsx)(r.code,{children:"Buffer"})," \u7c7b\u662f JavaScript ",(0,t.jsx)(r.a,{href:"http://url.nodejs.cn/ZbDkpm",children:(0,t.jsx)(r.code,{children:"Uint8Array"})})," \u7c7b\u7684\u5b50\u7c7b"]}),"\n",(0,t.jsxs)(r.p,{children:["\u6240\u4ee5",(0,t.jsx)(r.code,{children:"Uint8Array"}),"\u6709\u7684\u5c5e\u6027\u65b9\u6cd5 Buffer \u4e5f\u6709\uff0c\u4e0d\u8fc7 Nodejs \u5bf9 Buffer \u589e\u52a0\u4e86\u989d\u5916\u7684\u65b9\u6cd5\u4f9b\u5f00\u53d1\u8005\u8c03\u7528\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"bufferfrom",children:(0,t.jsx)(r.a,{href:"http://nodejs.cn/api/buffer.html#static-method-bufferfromarray",children:"Buffer.from"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4e0a\u9762\u7684\u4ee3\u7801 ",(0,t.jsx)(r.code,{children:"Buffer.from(buf.buffer).toString()"}),"\uff0c\u4e5f\u5c31\u662f\u5c06",(0,t.jsx)(r.code,{children:"ArrayBuffer"})," \u6570\u636e\u8f6c\u4e3a utf8 \u7f16\u7801\u6587\u672c\u3002\u5176\u4e2d toString \u8fd8\u80fd\u8f6c\u4e3a\u4ee5\u4e0b\u7f16\u7801\uff08toString \u9ed8\u8ba4 utf8\uff09"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"type BufferEncoding = 'ascii' | 'utf8' | 'utf-8' | 'utf16le' | 'ucs2' | 'ucs-2' | 'base64' | 'base64url' | 'latin1' | 'binary' | 'hex'\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u4e0d\u8fc7 Nodejs \u4e0d\u652f\u6301 gbk \u7f16\u7801\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528\u7b2c\u4e09\u65b9\u5305\uff0c\u5982 iconv-lite"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Buffer.from()"}),"\u6709\u591a\u4e2a\u65b9\u6cd5\u5b9e\u73b0\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u53ef\u4ee5\u4f20\u5165 ArrayBuffer | Uint8Array | string\uff0c\u5982\u679c\u662f string \u7c7b\u578b\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u7f16\u7801\u683c\u5f0f\uff0c\u4f8b\u5982\u5b9e\u73b0\u7f16\u7801\u8f6c\u5316"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"// base64\nBuffer.from(str).toString('base64') // \u5c06str\u8f6cbase64\u7f16\u7801\nBuffer.from(str, 'base64').toString() // \u5c06base64\u7f16\u7801\u8f6cstr\n\n// hex\nBuffer.from(str).toString('hex') // \u5c06str\u8f6chex\u7f16\u7801\nBuffer.from(str, 'hex').toString() // \u5c06hex\u7f16\u7801\u8f6cstr\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u5c01\u88c5 Base64 \u7f16\u7801\u4e0e\u89e3\u7801"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"const Base64 = {\n  encode: (str) => {\n    return Buffer.from(str).toString('base64')\n  },\n  decode: (str) => {\n    return Buffer.from(str, 'base64').toString()\n  },\n}\n"})}),"\n",(0,t.jsx)(r.h3,{id:"buftojson",children:(0,t.jsx)(r.a,{href:"http://nodejs.cn/api/buffer.html#buftojson",children:"buf.toJSON()"})}),"\n",(0,t.jsx)(r.p,{children:"\u5c06\u4f1a\u5f97\u5230 buf \u7684\u89c6\u56fe\u7c7b\u578b\uff0c\u4e0e\u4e8c\u8fdb\u5236\u6570\u7ec4\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"// let buf = Buffer.from('abc');\nlet buf = Buffer.from([97, 98, 99])\nconsole.log(buf) // <Buffer 61 62 63>\n\nbuf.toJSON() // { type: 'Buffer', data: [ 97, 98, 99 ] }\n// \u6548\u679c\u7b49\u540c\u4e8e JSON.stringify(buf);\n\nbuf.values() // [ 97, 98, 99 ]   \u53ef\u4ee5\u76f4\u63a5\u5f97\u5230\u4e8c\u8fdb\u5236\u6570\u636e\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5b98\u65b9\u6587\u6863: ",(0,t.jsx)(r.a,{href:"http://nodejs.cn/api/buffer.html#buffer",children:"buffer \u7f13\u51b2\u533a | Node.js API \u6587\u6863 (nodejs.cn)"})]}),"\n",(0,t.jsx)(r.h2,{id:"arraybuffer-\u548c-buffer-\u533a\u522b",children:"ArrayBuffer \u548c Buffer \u533a\u522b"}),"\n",(0,t.jsx)(r.p,{children:"\u4e0a\u8ff0\u5bf9\u8fd9\u4e24\u8005\u8fdb\u884c\u4e86\u4ecb\u7ecd\uff0c\u8fd9\u91cc\u603b\u7ed3\u4e00\u4e0b"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"ArrayBuffer"})," \u5bf9\u8c61\u7528\u6765\u8868\u793a\u901a\u7528\u7684\u3001\u56fa\u5b9a\u957f\u5ea6\u7684\u539f\u59cb\u4e8c\u8fdb\u5236\u6570\u636e\u7f13\u51b2\u533a\uff0c\u662f\u4e00\u4e2a\u5b57\u8282\u6570\u7ec4\uff0c\u53ef\u8bfb\u4f46\u4e0d\u53ef\u76f4\u63a5\u5199\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"Buffer"})," \u662f Node.JS \u4e2d\u7528\u4e8e\u64cd\u4f5c ",(0,t.jsx)(r.code,{children:"ArrayBuffer"})," \u7684\u89c6\u56fe\uff0c\u7ee7\u627f\u81ea",(0,t.jsx)(r.code,{children:"Uint8Array"}),"\uff0c\u662f ",(0,t.jsx)(r.code,{children:"TypedArray"})," \u7684\u4e00\u79cd\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u901a\u4fd7\u70b9\u6765\u8bf4\uff08",(0,t.jsx)(r.strong,{children:"\u5bf9\u6211\u800c\u8a00"}),"\uff09\uff0c",(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\u76f8\u5f53\u4e8e\u5176\u4ed6\u8bed\u8a00\u7684\u5b57\u8282\u6570\u7ec4\u3001\u5b57\u8282\u96c6\uff0c\u4f46\u4e0d\u53ef\u5199\uff0c\u800c",(0,t.jsx)(r.code,{children:"Buffer"})," \u5bf9\u8c61\u5219\u662f\u64cd\u4f5c",(0,t.jsx)(r.code,{children:"ArrayBuffer"}),"\u7684\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u5e94\u7528",children:"\u5e94\u7528"}),"\n",(0,t.jsx)(r.p,{children:"\u4e0e\u4e8c\u8fdb\u5236\u6570\u636e\u6709\u5173\u7684\u5730\u65b9\u5c31\u6709\u5e94\u7528"}),"\n",(0,t.jsx)(r.h3,{id:"\u7f16\u7801\u8f6c\u5316",children:"\u7f16\u7801\u8f6c\u5316"}),"\n",(0,t.jsx)(r.h3,{id:"\u5c06\u8bf7\u6c42\u56fe\u7247\u8f6c\u5316\u6210-base64-\u7f16\u7801",children:"\u5c06\u8bf7\u6c42\u56fe\u7247\u8f6c\u5316\u6210 base64 \u7f16\u7801"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"axios\n  .get('\u56fe\u7247url\u5730\u5740', {\n    responseType: 'arraybuffer',\n  })\n  .then((res) => {\n    let base64Img = res.data.toString('base64')\n    console.log(base64Img)\n  })\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u5728 axios \u8bf7\u6c42\u56fe\u7247\u6570\u636e\u7684\u65f6\u5019\uff0c\u6307\u5b9a",(0,t.jsx)(r.code,{children:"responseType: 'arraybuffer'"}),"\uff0c\u8fd4\u56de\u7684 data \u5c31\u662f\u4e00\u4e2a buffer \u5bf9\u8c61\u3002\uff08\u5f53\u65f6\u5199\u6210\u8fd9\u6837\u7684\u4ee3\u7801 ",(0,t.jsx)(r.code,{children:"Buffer.from(res.data).buffer"}),"\uff0c\u4e0d\u8fc7\u4e0d\u59a8\u788d\uff09"]}),"\n",(0,t.jsx)(r.h3,{id:"http-\u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\u4e0e-websocket",children:"http \u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\u4e0e WebSocket"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"axios.post('http://example.com', Buffer.from('abc')).then((res) => {\n  console.log(res.data)\n})\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"let socket = new WebSocket('ws://127.0.0.1:8081')\nsocket.binaryType = 'arraybuffer'\n\n// Wait until socket is open\nsocket.addEventListener('open', function (event) {\n  // Send binary data\n  const typedArray = new Uint8Array(4)\n  socket.send(typedArray.buffer)\n})\n\n// Receive binary data\nsocket.addEventListener('message', function (event) {\n  const arrayBuffer = event.data\n  // \xb7\xb7\xb7\n})\n"})}),"\n",(0,t.jsx)(r.h3,{id:"\u6587\u4ef6\u8bfb\u5199",children:"\u6587\u4ef6\u8bfb\u5199"}),"\n",(0,t.jsx)(r.p,{children:"\u7b49\u7b49\u3002\u3002\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://es6.ruanyifeng.com/#docs/arraybuffer",children:"ArrayBuffer - ECMAScript 6 \u5165\u95e8 (ruanyifeng.com)"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://www.zhihu.com/question/26246195/answer/1231680251#ref_1",children:"ArrayBuffer \u548c Buffer \u6709\u4f55\u533a\u522b\uff1f - \u77e5\u4e4e (zhihu.com)"})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var t=n(96540);const s={},l=t.createContext(s);function i(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);