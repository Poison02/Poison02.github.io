"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[33383],{13831:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=o(74848),t=o(28453);const i={id:"axios-request-gbk-page-encoding-solution",slug:"/axios-request-gbk-page-encoding-solution",title:"axios\u8bf7\u6c42gbk\u9875\u9762\u4e71\u7801\u89e3\u51b3",date:new Date("2021-09-19T00:00:00.000Z"),authors:"kuizuo",tags:["node","axios","encode"],keywords:["node","axios","encode"]},r=void 0,a={id:"skill/node/axios-request-gbk-page-encoding-solution",title:"axios\u8bf7\u6c42gbk\u9875\u9762\u4e71\u7801\u89e3\u51b3",description:"\u4f7f\u7528 axios \u8bf7\u6c42 gbk \u7f16\u7801\u7684\u7f51\u7ad9\uff0c\u5c06\u4f1a\u51fa\u73b0\u4e71\u7801\uff0c\u539f\u56e0\u5f88\u7b80\u5355\uff0cnode \u9ed8\u8ba4\u5b57\u7b26\u7f16\u7801\u4e3a utf8\uff0c\u5982\u679c\u8981\u6b63\u5e38\u663e\u793a gbk \u6570\u636e\u7684\u8bdd\u5c31\u9700\u8981\u5c06 gbk \u8f6c utf8 \u683c\u5f0f\u3002",source:"@site/docs/skill/node/axios\u8bf7\u6c42gbk\u9875\u9762\u4e71\u7801\u89e3\u51b3.md",sourceDirName:"skill/node",slug:"/axios-request-gbk-page-encoding-solution",permalink:"/en/docs/axios-request-gbk-page-encoding-solution",draft:!1,unlisted:!1,tags:[{label:"node",permalink:"/en/docs/tags/node"},{label:"axios",permalink:"/en/docs/tags/axios"},{label:"encode",permalink:"/en/docs/tags/encode"}],version:"current",frontMatter:{id:"axios-request-gbk-page-encoding-solution",slug:"/axios-request-gbk-page-encoding-solution",title:"axios\u8bf7\u6c42gbk\u9875\u9762\u4e71\u7801\u89e3\u51b3",date:"2021-09-19T00:00:00.000Z",authors:"kuizuo",tags:["node","axios","encode"],keywords:["node","axios","encode"]},sidebar:"skill",previous:{title:"Node",permalink:"/en/docs/category/node"},next:{title:"npkill\u5feb\u901f\u5220\u9664node_modules\u6587\u4ef6",permalink:"/en/docs/npkill-quickly-move-node-modules"}},d={},c=[{value:"\u89e3\u51b3\u529e\u6cd5",id:"\u89e3\u51b3\u529e\u6cd5",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u4f7f\u7528 axios \u8bf7\u6c42 gbk \u7f16\u7801\u7684\u7f51\u7ad9\uff0c\u5c06\u4f1a\u51fa\u73b0\u4e71\u7801\uff0c\u539f\u56e0\u5f88\u7b80\u5355\uff0cnode \u9ed8\u8ba4\u5b57\u7b26\u7f16\u7801\u4e3a utf8\uff0c\u5982\u679c\u8981\u6b63\u5e38\u663e\u793a gbk \u6570\u636e\u7684\u8bdd\u5c31\u9700\u8981\u5c06 gbk \u8f6c utf8 \u683c\u5f0f\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u51b3\u529e\u6cd5",children:"\u89e3\u51b3\u529e\u6cd5"}),"\n",(0,s.jsxs)(n.p,{children:["\u501f\u52a9",(0,s.jsx)(n.code,{children:"iconv-lite"}),"\uff0c\u4e0d\u8ba9 axios \u81ea\u52a8\u5904\u7406\u54cd\u5e94\u6570\u636e\uff0c\u6dfb\u52a0",(0,s.jsx)(n.code,{children:"responseType"}),"\u548c",(0,s.jsx)(n.code,{children:"transformResponse"}),"\u53c2\u6570\uff0c\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import axios from 'axios'\nimport * as iconv from 'iconv-lite'\n\naxios\n  .get(`https://www.ip138.com/`, {\n    responseType: 'arraybuffer',\n    transformResponse: [\n      function (data) {\n        return iconv.decode(data, 'gbk')\n      },\n    ],\n  })\n  .then((res) => {\n    console.log(res.data)\n  })\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6216\u8005\u4e0d\u4f7f\u7528",(0,s.jsx)(n.code,{children:"transformResponse"}),"\uff0c\u5728\u54cd\u5e94\u7ed3\u675f\u540e\u4f7f\u7528",(0,s.jsx)(n.code,{children:"iconv.decode(res.data, 'gbk')"}),"\uff0c\u4f7f\u7528",(0,s.jsx)(n.code,{children:"transformResponse"}),"\u76f8\u5bf9\u4f18\u96c5\u4e00\u70b9\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u8fd4\u56de\u7684\u662f json \u683c\u5f0f\u7684\u8bdd\uff0c\u53ef\u4ee5\u76f4\u63a5",(0,s.jsx)(n.code,{children:"JSON.parse"}),"\u8f6c\u4e3a json \u5bf9\u8c61\uff08\u524d\u63d0\u5f97\u786e\u4fdd\u662f json \u683c\u5f0f\uff0c\u4e0d\u7136\u89e3\u6790\u62a5\u9519\uff09"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"return JSON.parse(iconv.decode(data, 'gbk'))\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var s=o(96540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);