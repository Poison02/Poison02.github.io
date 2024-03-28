"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[52776],{8924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=t(74848),i=t(28453);const s={slug:"sse-server-send-event",title:"SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",date:new Date("2022-03-16T00:00:00.000Z"),authors:"kuizuo",tags:["http"],keywords:["http"]},l=void 0,o={permalink:"/en/blog/sse-server-send-event",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6.md",source:"@site/blog/develop/SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6.md",title:"SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",description:"\u5148\u653e\u4e00\u5f20 gif \u56fe\u5c55\u793a\u4e0b\u6548\u679c",date:"2022-03-16T00:00:00.000Z",formattedDate:"March 16, 2022",tags:[{label:"http",permalink:"/en/blog/tags/http"}],readingTime:2.1266666666666665,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/en/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"sse-server-send-event",title:"SSE \u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6",date:"2022-03-16T00:00:00.000Z",authors:"kuizuo",tags:["http"],keywords:["http"]},unlisted:!1,prevItem:{title:"\u642d\u5efaElectron+Vue3\u5f00\u53d1\u73af\u5883",permalink:"/en/blog/electron-vue3-development-environment"},nextItem:{title:"HTTP\u8bf7\u6c42\u914d\u7f6e\u5ba2\u6237\u7aefSSL\u8bc1\u4e66",permalink:"/en/blog/http-config-client-ssl-certificate"}},c={authorsImageUrls:[void 0]},a=[{value:"\u4f18\u70b9",id:"\u4f18\u70b9",level:3},{value:"\u670d\u52a1\u5668\u5b9e\u73b0",id:"\u670d\u52a1\u5668\u5b9e\u73b0",level:2},{value:"\u6570\u636e\u683c\u5f0f",id:"\u6570\u636e\u683c\u5f0f",level:3},{value:"\u5ba2\u6237\u7aef API",id:"\u5ba2\u6237\u7aef-api",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5148\u653e\u4e00\u5f20 gif \u56fe\u5c55\u793a\u4e0b\u6548\u679c"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://img.kuizuo.cn/sse.gif",alt:"sse"})}),"\n",(0,r.jsx)(n.p,{children:"\u5b9e\u73b0\u4e0a\u9762\u8fd9\u4e2a\u6548\u679c\u4e4b\u524d\uff0c\u5148\u8865\u5145\u70b9\u524d\u7f6e\u77e5\u8bc6"}),"\n",(0,r.jsx)(n.p,{children:"\u4f17\u6240\u5468\u77e5\uff0c\u5728 HTTP \u534f\u8bae\u4e2d\uff0c\u670d\u52a1\u5668\u65e0\u6cd5\u5411\u6d4f\u89c8\u5668\u63a8\u9001\u4fe1\u606f\uff0c\u53ef\u4ee5\u4f7f\u7528 WebSocket \u6765\u5b9e\u73b0\u4e24\u8005\u53cc\u5411\u901a\u4fe1\u3002\u800c\u5728\u8fd9\u91cc\u6240\u8981\u4ecb\u7ecd\u7684\u662f SSE\uff08Server-Sent Events\uff09\uff0c\u5728\u6d4f\u89c8\u5668\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u540e\uff0c\u670d\u52a1\u5668\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u6d41\u6570\u636e\uff08\u662f\u5355\u5411\u7684\uff09\uff0c\u6765\u5b9e\u73b0\u63a5\u6536\u670d\u52a1\u5668\u7684\u6570\u636e\uff0c\u4f8b\u5982\u5728\u7ebf\u89c6\u9891\u64ad\u653e\uff0c\u548c\u50cf\u4e0a\u9762\u6240\u6f14\u793a\u7684\u6548\u679c\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://www.ruanyifeng.com/blogimg/asset/2017/bg2017052702.jpg",alt:"img"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4e8e SSE \u6807\u51c6\u6587\u6863 ",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events",children:"MDN \u6587\u6863"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u4f18\u70b9",children:"\u4f18\u70b9"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"SSE \u4f7f\u7528 HTTP \u534f\u8bae\uff0c\u73b0\u6709\u7684\u670d\u52a1\u5668\u8f6f\u4ef6\u90fd\u652f\u6301\u3002WebSocket \u662f\u4e00\u4e2a\u72ec\u7acb\u534f\u8bae\u3002"}),"\n",(0,r.jsx)(n.li,{children:"SSE \u5c5e\u4e8e\u8f7b\u91cf\u7ea7\uff0c\u4f7f\u7528\u7b80\u5355\uff1bWebSocket \u534f\u8bae\u76f8\u5bf9\u590d\u6742\u3002"}),"\n",(0,r.jsx)(n.li,{children:"SSE \u9ed8\u8ba4\u652f\u6301\u65ad\u7ebf\u91cd\u8fde\uff0cWebSocket \u9700\u8981\u81ea\u5df1\u5b9e\u73b0\u3002"}),"\n",(0,r.jsx)(n.li,{children:"SSE \u4e00\u822c\u53ea\u7528\u6765\u4f20\u9001\u6587\u672c\uff0c\u4e8c\u8fdb\u5236\u6570\u636e\u9700\u8981\u7f16\u7801\u540e\u4f20\u9001\uff0cWebSocket \u9ed8\u8ba4\u652f\u6301\u4f20\u9001\u4e8c\u8fdb\u5236\u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.li,{children:"SSE \u652f\u6301\u81ea\u5b9a\u4e49\u53d1\u9001\u7684\u6d88\u606f\u7c7b\u578b\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u670d\u52a1\u5668\u5b9e\u73b0",children:"\u670d\u52a1\u5668\u5b9e\u73b0"}),"\n",(0,r.jsx)(n.h3,{id:"\u6570\u636e\u683c\u5f0f",children:"\u6570\u636e\u683c\u5f0f"}),"\n",(0,r.jsx)(n.p,{children:"\u670d\u52a1\u5668\u5411\u6d4f\u89c8\u5668\u53d1\u9001\u7684 SSE \u6570\u636e\uff0c\u5fc5\u987b\u662f UTF-8 \u7f16\u7801\u7684\u6587\u672c\uff0c\u5177\u6709\u5982\u4e0b\u7684 HTTP \u5934\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"Content-Type: text/event-stream; charset=utf-8\nCache-Control: no-cache\nConnection: keep-alive\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 Node \u5b9e\u73b0\u7684\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var http = require('http')\n\nhttp\n  .createServer(function (req, res) {\n    var fileName = '.' + req.url\n\n    if (fileName === './stream') {\n      res.writeHead(200, {\n        'Content-Type': 'text/event-stream',\n        'Cache-Control': 'no-cache',\n        Connection: 'keep-alive',\n        'Access-Control-Allow-Origin': '*',\n      })\n      res.write('retry: 10000\\n')\n      res.write('event: connecttime\\n')\n      res.write('data: ' + new Date() + '\\n\\n')\n      res.write('data: ' + new Date() + '\\n\\n')\n\n      interval = setInterval(function () {\n        res.write('data: ' + new Date() + '\\n\\n')\n      }, 1000)\n\n      req.connection.addListener(\n        'close',\n        function () {\n          clearInterval(interval)\n        },\n        false,\n      )\n    }\n  })\n  .listen(8844, '127.0.0.1')\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7 node server.js \u8fd0\u884c\u670d\u52a1\u7aef\uff0c\u6b64\u65f6\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.jsx)(n.a,{href:"http://127.0.0.1:8844/stream",children:"http://127.0.0.1:8844/stream"})," \u5f97\u5230\u7684\u6548\u679c\u5c31\u662f\u5f00\u5934\u7684 gif \u6240\u6f14\u793a\u7684\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5ba2\u6237\u7aef-api",children:"\u5ba2\u6237\u7aef API"}),"\n",(0,r.jsxs)(n.p,{children:["\u50cf\u4e0a\u9762\u662f\u76f4\u63a5\u5411\u670d\u52a1\u5668\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u6709",(0,r.jsx)(n.code,{children:"EventSource"}),"\u5bf9\u8c61\uff0c\u6bd4\u5982\u76d1\u542c SSE \u8fde\u63a5\uff0c\u4ee5\u53ca\u4e3b\u52a8\u5173\u95ed SSE \u8fde\u63a5\uff0c\u5177\u4f53\u7684\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <meta name=\"viewport\" content=\"width=device-width\" />\n    <title>JS Bin</title>\n  </head>\n  <body>\n    <div id=\"example\"></div>\n    <script>\n      var source = new EventSource('http://127.0.0.1:8844/stream')\n      var div = document.getElementById('example')\n\n      source.onopen = function (event) {\n        div.innerHTML += '<p>Connection open ...</p>'\n      }\n\n      source.onerror = function (event) {\n        div.innerHTML += '<p>Connection close.</p>'\n      }\n\n      source.addEventListener(\n        'connecttime',\n        function (event) {\n          div.innerHTML += '<p>Start time: ' + event.data + '</p>'\n        },\n        false,\n      )\n\n      source.onmessage = function (event) {\n        div.innerHTML += '<p>Ping: ' + event.data + '</p>'\n      }\n    <\/script>\n  </body>\n</html>\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5e76\u4e14\u7531\u4e8e\u662f\u8c03\u7528\u6d4f\u89c8\u5668 API\uff0c\u5728\u5f00\u53d1\u8005\u5de5\u5177\u7684\u7f51\u7edc\u9762\u677f\u4e0a\u8fd8\u80fd\u770b\u5230\u5bf9\u5e94\u7684 EventStream\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220316134321431.png",alt:"image-20220316134321431"})}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Server-sent_events/Using_server-sent_events",children:"\u4f7f\u7528\u670d\u52a1\u5668\u53d1\u9001\u4e8b\u4ef6 - Web API \u63a5\u53e3\u53c2\u8003 | MDN (mozilla.org)"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html",children:"Server-Sent Events \u6559\u7a0b - \u962e\u4e00\u5cf0\u7684\u7f51\u7edc\u65e5\u5fd7 (ruanyifeng.com)"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var r=t(96540);const i={},s=r.createContext(i);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);