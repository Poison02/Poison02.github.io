"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[84094],{96987:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=s(74848),i=s(28453);const t={slug:"use-jsonpath-to-parse-json-data",title:"\u4f7f\u7528JSONPath\u89e3\u6790json\u6570\u636e",date:new Date("2021-09-20T00:00:00.000Z"),authors:"kuizuo",tags:["javascript","json","node"],keywords:["javascript","json","node"],description:"jsonpath \u80fd\u591f\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u7684\u4ecejson\u6570\u636e\u4e2d\u63d0\u53d6\u60f3\u8981\u7684\u6570\u636e",image:"/img/blog/jsonpath.png",sticky:3},d=void 0,o={permalink:"/en/blog/use-jsonpath-to-parse-json-data",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/\u4f7f\u7528JSONPath\u89e3\u6790json\u6570\u636e.md",source:"@site/blog/develop/\u4f7f\u7528JSONPath\u89e3\u6790json\u6570\u636e.md",title:"\u4f7f\u7528JSONPath\u89e3\u6790json\u6570\u636e",description:"jsonpath \u80fd\u591f\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u7684\u4ecejson\u6570\u636e\u4e2d\u63d0\u53d6\u60f3\u8981\u7684\u6570\u636e",date:"2021-09-20T00:00:00.000Z",formattedDate:"September 20, 2021",tags:[{label:"javascript",permalink:"/en/blog/tags/javascript"},{label:"json",permalink:"/en/blog/tags/json"},{label:"node",permalink:"/en/blog/tags/node"}],readingTime:7.323333333333333,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/en/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"use-jsonpath-to-parse-json-data",title:"\u4f7f\u7528JSONPath\u89e3\u6790json\u6570\u636e",date:"2021-09-20T00:00:00.000Z",authors:"kuizuo",tags:["javascript","json","node"],keywords:["javascript","json","node"],description:"jsonpath \u80fd\u591f\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u7684\u4ecejson\u6570\u636e\u4e2d\u63d0\u53d6\u60f3\u8981\u7684\u6570\u636e",image:"/img/blog/jsonpath.png",sticky:3},unlisted:!1,prevItem:{title:"\u8bb0 ThinkPHP \u9879\u76ee\u90e8\u7f72",permalink:"/en/blog/thinkphp-deploy"},nextItem:{title:"\u4f7f\u7528Vue\u5f00\u53d1Chrome\u63d2\u4ef6",permalink:"/en/blog/vue-chrome-extension"}},l={authorsImageUrls:[void 0]},c=[{value:"\u57fa\u672c\u8bed\u6cd5",id:"\u57fa\u672c\u8bed\u6cd5",level:2},{value:"\u8fc7\u6ee4\u5668\u8868\u8fbe\u5f0f",id:"\u8fc7\u6ee4\u5668\u8868\u8fbe\u5f0f",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"\u7ec8\u6781\u5b9e\u6218",id:"\u7ec8\u6781\u5b9e\u6218",level:2},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",level:3},{value:"\u6570\u636e",id:"\u6570\u636e",level:3},{value:"\u9700\u6c42",id:"\u9700\u6c42",level:3},{value:"js \u5b9e\u73b0\u904d\u5386",id:"js-\u5b9e\u73b0\u904d\u5386",level:3},{value:"jsonpath \u83b7\u53d6",id:"jsonpath-\u83b7\u53d6",level:3},{value:"\u6700\u7ec8\u601d\u8003",id:"\u6700\u7ec8\u601d\u8003",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u4e4b\u524d\u5b66\u4e60\u722c\u866b\u7684\u65f6\u5019\uff0c\u5982\u679c\u662f HTML \u7684\u6570\u636e\uff0c\u901a\u8fc7 xpath \u6216\u662f css \u9009\u62e9\u5668\uff0c\u5c31\u80fd\u5f88\u5feb\u7684\u83b7\u53d6\u6211\u4eec\u60f3\u8981\u7684\u6570\u636e\uff0c\u5982\u679c\u662f json \u6709\u6ca1\u6709\u7c7b\u4f3c xpath \u8fd9\u79cd\uff0c\u80fd\u591f\u76f4\u63a5\u6839\u636e\u6761\u4ef6\u5b9a\u4f4d\u6570\u636e\uff0c\u800c\u4e0d\u9700\u8981\u81ea\u884c json \u89e3\u6790\u5728\u904d\u5386\u83b7\u53d6\u3002\u7b54\u6848\u662f\u6709\u7684\uff0c\u4e5f\u5c31\u662f JSONPath\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u7ebf\u6d4b\u8bd5\u7f51\u5740 ",(0,r.jsx)(e.a,{href:"https://www.jsonpath.cn/",children:"JSONPath \u5728\u7ebf\u9a8c\u8bc1"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u6240\u9009\u7528\u7684\u73af\u5883\u662f Node + JavaScript\uff0c\u7528\u5230 jsonpath \u8fd9\u4e2a\u5305 ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/jsonpath",children:"jsonpath - npm (npmjs.com)"})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u53c2\u8003\u94fe\u63a5 ",(0,r.jsx)(e.a,{href:"https://www.jianshu.com/p/8c0ade82891b",children:"JsonPath - \u6839\u636e\u8868\u8fbe\u5f0f\u8def\u5f84\u89e3\u6790 Json - \u7b80\u4e66 (jianshu.com)"})]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u57fa\u672c\u8bed\u6cd5",children:"\u57fa\u672c\u8bed\u6cd5"}),"\n",(0,r.jsx)(e.h3,{id:"\u8fc7\u6ee4\u5668\u8868\u8fbe\u5f0f",children:"\u8fc7\u6ee4\u5668\u8868\u8fbe\u5f0f"}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u5e38\u7684\u8868\u8fbe\u5f0f\u683c\u5f0f\u4e3a\uff1a",(0,r.jsx)(e.code,{children:"[?(@.age > 18)]"})," \u8868\u793a\u5f53\u524d\u8282\u70b9\u5c5e\u6027 age \u5927\u4e8e 18"]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u64cd\u4f5c\u7b26"}),(0,r.jsx)(e.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"=="})}),(0,r.jsx)(e.td,{children:"\u7b49\u4e8e\u7b26\u53f7\uff0c\u4f46\u6570\u5b57 1 \u4e0d\u7b49\u4e8e\u5b57\u7b26 1(note that 1 is not equal to \u20181\u2019)"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"!="})}),(0,r.jsx)(e.td,{children:"\u4e0d\u7b49\u4e8e\u7b26\u53f7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<"})}),(0,r.jsx)(e.td,{children:"\u5c0f\u4e8e\u7b26\u53f7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"<="})}),(0,r.jsx)(e.td,{children:"\u5c0f\u4e8e\u7b49\u4e8e\u7b26\u53f7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:">"})}),(0,r.jsx)(e.td,{children:"\u5927\u4e8e\u7b26\u53f7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:">="})}),(0,r.jsx)(e.td,{children:"\u5927\u4e8e\u7b49\u4e8e\u7b26\u53f7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"=~"})}),(0,r.jsx)(e.td,{children:"\u5224\u65ad\u662f\u5426\u7b26\u5408\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u4f8b\u5982[?(@.name =~ /foo.*?/i)]"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"in"})}),(0,r.jsx)(e.td,{children:"\u6240\u5c5e\u7b26\u53f7\uff0c\u4f8b\u5982[?(@.size in [\u2018S\u2019, \u2018M\u2019])]"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"nin"})}),(0,r.jsx)(e.td,{children:"\u6392\u9664\u7b26\u53f7"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"size"})}),(0,r.jsx)(e.td,{children:"size of left (array or string) should match right"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"empty"})}),(0,r.jsx)(e.td,{children:"\u5224\u7a7a Null \u7b26\u53f7"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:"\u8bed\u6cd5\u5c31\u8fd9\u4e9b\uff0c\u4e0d\u8fc7\u5355\u5355\u6709\u8bed\u6cd5\uff0c\u4e0d\u5b9e\u8df5\u80af\u5b9a\u662f\u4e0d\u591f\u7684\u3002\u4e0b\u9762\u5c31\u662f\u4e00\u4e9b\u5b98\u65b9\u7b80\u5355\u4f8b\u5b50\u64cd\u4f5c\uff0c\u8fd8\u6709\u4e00\u4e2a\u7ec8\u6781\u5b9e\u6218"}),"\n",(0,r.jsx)(e.h2,{id:"\u4ee3\u7801\u6f14\u793a",children:"\u4ee3\u7801\u6f14\u793a"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var jp = require('jsonpath')\n\nvar cities = [\n  { name: 'London', population: 8615246 },\n  { name: 'Berlin', population: 3517424 },\n  { name: 'Madrid', population: 3165235 },\n  { name: 'Rome', population: 2870528 },\n]\n\nvar names = jp.query(cities, '$..name')\n\n// [ \"London\", \"Berlin\", \"Madrid\", \"Rome\" ]\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u4f7f\u7528 js \u6765\u904d\u5386\u7684\u8bdd\uff0c\u4e5f\u7b80\u5355"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"let names = cities.map(c => c.name)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u4e2a\u6570\u636e\u53ef\u80fd\u8fd8\u6ca1\u90a3\u4e48\u590d\u6742\uff0c\u5728\u770b\u770b\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u4ee3\u7801\u6765\u6e90\u4e8e",(0,r.jsx)(e.a,{href:"https://goessner.net/articles/JsonPath",children:"https://goessner.net/articles/JsonPath"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "store": {\n    "book": [\n      {\n        "category": "reference",\n        "author": "Nigel Rees",\n        "title": "Sayings of the Century",\n        "price": 8.95\n      },\n      {\n        "category": "fiction",\n        "author": "Evelyn Waugh",\n        "title": "Sword of Honour",\n        "price": 12.99\n      },\n      {\n        "category": "fiction",\n        "author": "Herman Melville",\n        "title": "Moby Dick",\n        "isbn": "0-553-21311-3",\n        "price": 8.99\n      },\n      {\n        "category": "fiction",\n        "author": "J. R. R. Tolkien",\n        "title": "The Lord of the Rings",\n        "isbn": "0-395-19395-8",\n        "price": 22.99\n      }\n    ],\n    "bicycle": {\n      "color": "red",\n      "price": 19.95\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"JsonPath"}),(0,r.jsx)(e.th,{children:"Result"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"$.store.book[*].author"})}),(0,r.jsx)(e.td,{children:"\u6240\u6709 book \u7684 author \u8282\u70b9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"$..author"})}),(0,r.jsx)(e.td,{children:"\u6240\u6709 author \u8282\u70b9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"$.store.*"})}),(0,r.jsx)(e.td,{children:"store \u4e0b\u7684\u6240\u6709\u8282\u70b9\uff0cbook \u6570\u7ec4\u548c bicycle \u8282\u70b9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"$.store..price"})}),(0,r.jsx)(e.td,{children:"store \u4e0b\u7684\u6240\u6709 price \u8282\u70b9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"$..book[2]"})}),(0,r.jsx)(e.td,{children:"\u5339\u914d\u7b2c 3 \u4e2a book \u8282\u70b9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"$..book[(@.length-1)]"}),"\uff0c\u6216 ",(0,r.jsx)(e.code,{children:"$..book[-1:]"})]}),(0,r.jsx)(e.td,{children:"\u5339\u914d\u5012\u6570\u7b2c 1 \u4e2a book \u8282\u70b9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:[(0,r.jsx)(e.code,{children:"$..book[0,1]"}),"\uff0c\u6216 ",(0,r.jsx)(e.code,{children:"$..book[:2]"})]}),(0,r.jsx)(e.td,{children:"\u5339\u914d\u524d\u4e24\u4e2a book \u8282\u70b9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"$..book[?(@.isbn)]"})}),(0,r.jsx)(e.td,{children:"\u8fc7\u6ee4\u542b isbn \u5b57\u6bb5\u7684\u8282\u70b9"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"$..book[?(@.price<10)]"})}),(0,r.jsxs)(e.td,{children:["\u8fc7\u6ee4",(0,r.jsx)(e.code,{children:"price<10"}),"\u7684\u8282\u70b9"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"$..*"})}),(0,r.jsx)(e.td,{children:"\u9012\u5f52\u5339\u914d\u6240\u6709\u5b50\u8282\u70b9"})]})]})]}),"\n",(0,r.jsxs)(e.p,{children:["\u5bf9\u5e94\u7684\u8bed\u6cd5\u53ef\u76f4\u63a5\u5230\u5728 JSONPath \u5728\u7ebf\u9a8c\u8bc1\u7f51\u7ad9\u4e0a\u8fdb\u884c\u6d4b\u8bd5\u3002\u8981\u63d0\u4e00\u70b9\u7684\u662f\uff0cjsonpath \u662f\u652f\u6301\u4f7f\u7528 || \u4e0e && \u8fdb\u884c\u8fc7\u6ee4\u7684\uff0c\u6bd4\u5982\u4e0a\u9762\u8981\u83b7\u53d6 category \u4e3a fiction\uff0cprice \u5927\u4e8e 10 \u7684\u8bed\u6cd5\u4e3a",(0,r.jsx)(e.code,{children:'$..book[?(@.price>10 && @.category=="fiction")]'})," \u7ed3\u679c\u5982\u4e0b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'[\n  {\n    "category": "fiction",\n    "author": "Evelyn Waugh",\n    "title": "Sword of Honour",\n    "price": 12.99\n  },\n  {\n    "category": "fiction",\n    "author": "J. R. R. Tolkien",\n    "title": "The Lord of the Rings",\n    "isbn": "0-395-19395-8",\n    "price": 22.99\n  }\n]\n'})}),"\n",(0,r.jsx)(e.h2,{id:"\u7ec8\u6781\u5b9e\u6218",children:"\u7ec8\u6781\u5b9e\u6218"}),"\n",(0,r.jsx)(e.p,{children:"\u4e5f\u8bb8\u4f60\u4f1a\u89c9\u5f97\u4e0a\u9762\u7684\u4f8b\u5b50\u592a\u8fc7\u7b80\u5355\u4e86\uff0c\u53ef\u80fd\u6ca1\u8fbe\u5230\u4f60\u9884\u671f\u6240\u60f3\u8981\u7684\u6548\u679c\uff0c\u751a\u81f3\u8fd8\u4e0d\u5982\u4f7f\u7528 json \u904d\u5386\u5462\uff0c\u4e0b\u9762\u6211\u5217\u4e3e\u4e00\u4e2a\u662f\u6211\u5b9e\u6218\u4e2d\u9047\u5230\u7684\u4f8b\u5b50\uff08\u5b9e\u9645\u4e0a\u8fd9\u6837\u7684\u4f8b\u5b50\u7279\u522b\u591a\uff09\uff0c\u6211\u5148\u628a\u90e8\u5206\u6570\u636e\u5c55\u793a\u51fa\u6765\uff08\u5220\u9664\u90e8\u5206\u6ca1\u7528\u5230\u7684\u53c2\u6570\uff0c\u5b9e\u9645\u53c2\u6570\u8fdc\u6bd4\u8fd9\u591a\uff09\uff0c\u7136\u540e\u901a\u8fc7 js \u904d\u5386\uff0c\u4ee5\u53ca jsonpath \u6765\u83b7\u53d6\u6211\u60f3\u8981\u7684\u6570\u636e\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u7ed3\u6784",children:"\u7ed3\u6784"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210919194116296.png",alt:"image-20210919194116296"})}),"\n",(0,r.jsx)(e.h3,{id:"\u6570\u636e",children:"\u6570\u636e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "role": "unit",\n  "children": [\n    {\n      "role": "section",\n      "children": [\n        {\n          "role": "node",\n          "children": [\n            {\n              "summary": "{\\"indexMap\\": {}, \\"questionsList\\": []}",\n              "role": "group",\n              "tab_type": "text",\n              "name": "Learning objectives",\n              "scoreDetail": [],\n              "id": "u1g2",\n              "url": "u1g2",\n              "tags": []\n            }\n          ],\n          "suggestedDuration": "0",\n          "name": "1-1 Learning objectives",\n          "block_id": "90ed499f91084e2aa1b7032d2e4ecd76",\n          "url": "u1g1",\n          "tags": []\n        }\n      ],\n      "name": "Learning objectives",\n      "tags": []\n    },\n    {\n      "role": "section",\n      "children": [\n        {\n          "role": "node",\n          "children": [\n            {\n              "role": "node",\n              "children": [\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Practice-1",\n                  "scoreDetail": [0],\n                  "id": "u1g6",\n                  "url": "u1g6",\n                  "tags": []\n                },\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Practice-2",\n                  "scoreDetail": [1, 1, 1, 1],\n                  "id": "u1g7",\n                  "url": "u1g7",\n                  "tags": []\n                },\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Practice-3",\n                  "scoreDetail": [1, 1, 1, 1, 1],\n                  "id": "u1g544",\n                  "url": "u1g544",\n                  "tags": []\n                },\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Practice-4",\n                  "scoreDetail": [1, 1, 1, 1, 1],\n                  "id": "u1g9",\n                  "url": "u1g9",\n                  "tags": []\n                }\n              ],\n              "name": "Practice",\n              "block_id": "f6768dc9474746b9ba071e7f211534d9",\n              "url": "u1g5",\n              "tags": []\n            }\n          ],\n          "suggestedDuration": "0",\n          "name": "1-2 Sharing",\n          "block_id": "1c97a87a9feb4a8aa7d6ed39482d866d",\n          "url": "u1g3",\n          "tags": []\n        },\n        {\n          "role": "node",\n          "children": [\n            {\n              "role": "group",\n              "tab_type": "video",\n              "name": "Get the skills",\n              "scoreDetail": [],\n              "id": "u1g16",\n              "url": "u1g16",\n              "tags": []\n            },\n            {\n              "role": "node",\n              "children": [\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Use the skills-1",\n                  "scoreDetail": [0, 0],\n                  "id": "u1g615",\n                  "url": "u1g615",\n                  "tags": []\n                },\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Use the skills-2",\n                  "scoreDetail": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n                  "id": "u1g18",\n                  "url": "u1g18",\n                  "tags": []\n                },\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Use the skills-3",\n                  "scoreDetail": [0, 0, 0, 0, 0, 0, 0],\n                  "id": "u1g19",\n                  "url": "u1g19",\n                  "tags": []\n                }\n              ],\n              "name": "Use the skills",\n              "block_id": "2d8a81799bcc44ccab2646b613557b2b",\n              "url": "u1g17",\n              "tags": []\n            },\n            {\n              "role": "node",\n              "children": [\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Think and speak",\n                  "scoreDetail": [0],\n                  "id": "u1g21",\n                  "url": "u1g21",\n                  "tags": []\n                }\n              ],\n              "name": "Think and speak",\n              "block_id": "5833925c8c5e4ddab7a114b15d610983",\n              "url": "u1g20",\n              "tags": []\n            }\n          ],\n          "suggestedDuration": "0",\n          "name": "1-3 Listening",\n          "block_id": "681817aaf75845468e464e1a8d82f2c8",\n          "url": "u1g14",\n          "tags": []\n        },\n        {\n          "role": "node",\n          "children": [\n            {\n              "role": "node",\n              "children": [\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Get a clue",\n                  "scoreDetail": [0, 0, 0],\n                  "id": "u1g25",\n                  "url": "u1g25",\n                  "tags": []\n                }\n              ],\n              "name": "Get a clue",\n              "block_id": "b332335ab3554dffb92afcae5f815b5a",\n              "url": "u1g24",\n              "tags": []\n            },\n            {\n              "role": "node",\n              "children": [\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "View it-1",\n                  "scoreDetail": [1, 1, 1, 1],\n                  "id": "u1g27",\n                  "url": "u1g27",\n                  "tags": []\n                },\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "View it-2",\n                  "scoreDetail": [1, 1, 1, 1, 1, 1, 1],\n                  "id": "u1g545",\n                  "url": "u1g545",\n                  "tags": []\n                },\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "View it-3",\n                  "scoreDetail": [1, 1, 1, 1, 1, 1, 1, 1],\n                  "id": "u1g29",\n                  "url": "u1g29",\n                  "tags": []\n                }\n              ],\n              "name": "View it",\n              "block_id": "a2ecf6464d5f480e98242ebe4431a73b",\n              "url": "u1g26",\n              "tags": []\n            },\n            {\n              "role": "node",\n              "children": [\n                {\n                  "role": "group",\n                  "tab_type": "task",\n                  "name": "Think and speak",\n                  "scoreDetail": [0, 0],\n                  "id": "u1g31",\n                  "url": "u1g31",\n                  "tags": []\n                }\n              ],\n              "name": "Think and speak",\n              "block_id": "120d0784e63c414793f5e648c416144b",\n              "url": "u1g30",\n              "tags": []\n            }\n          ],\n          "suggestedDuration": "0",\n          "name": "1-4 Viewing",\n          "block_id": "765a1be83ac5437aaca8fa150ad5af2e",\n          "url": "u1g22",\n          "tags": []\n        }\n      ],\n      "name": "Listening to the world",\n      "tags": []\n    }\n  ]\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u9700\u6c42",children:"\u9700\u6c42"}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u770b\u5230\u6570\u636e\u6bd4\u4e00\u5f00\u59cb\u7684\u4f8b\u5b50\u590d\u6742\u4e86\u53ef\u4e0d\u662f\u4e00\u70b9\uff0c\u4e0d\u8fc7\u5148\u522b\u7ba1\u8fd9\u4e9b\u6570\u636e\u662f\u5e72\u5565\u7684\uff0c\u8bf4\u8bf4\u9700\u6c42\uff0c\u4ece\u7ed3\u6784\u4e0a\u4e5f\u80fd\u770b\u51fa\u6765\uff0c\u662f\u6709\u5f88\u591a",(0,r.jsx)(e.code,{children:"children"}),"\u5d4c\u5957\u7684\uff0c\u800c\u9700\u6c42\u5c31\u662f",(0,r.jsxs)(e.strong,{children:["\u83b7\u53d6",(0,r.jsx)(e.code,{children:"role"}),"\u4e3a",(0,r.jsx)(e.code,{children:"group"}),"\u7684",(0,r.jsx)(e.code,{children:"children"}),"\u8282\u70b9\u6570\u636e"]})]}),"\n",(0,r.jsx)(e.h3,{id:"js-\u5b9e\u73b0\u904d\u5386",children:"js \u5b9e\u73b0\u904d\u5386"}),"\n",(0,r.jsx)(e.p,{children:"\u5148\u8bf4\u8bf4 js \u5982\u4f55\u5b9e\u73b0\u7684\uff0c\u6211\u8d34\u4e00\u4e0b\u5bf9\u5e94\u7684\u4ee3\u7801\uff08\u5f53\u65f6\u9879\u76ee\u7684\u4ee3\u7801\uff0c\u7a0d\u5fae\u4fee\u6539\u7684\u4e00\u70b9\uff09\uff0c\u53ef\u81ea\u5df1\u7c98\u8d34\u8fd0\u884c\u4e00\u4e0b\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"let groupList = []\nfor (const node of json.children ?? []) {\n  if (node.role == 'group') groupList.push({ ...node })\n\n  for (const group of node.children ?? []) {\n    if (group.role == 'group') groupList.push({ ...group })\n\n    for (const child of group.children ?? []) {\n      if (child.role == 'group') groupList.push({ ...child })\n\n      let children4 = child.children ?? []\n      for (const child of children4) {\n        if (child.role == 'group') groupList.push({ ...child })\n      }\n    }\n  }\n}\nconsole.log(groupList)\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u56e0\u4e3a\u8fd9\u4e9b\u6570\u636e\u4e2d\uff0c\u662f\u5b58\u5728\u4e0d\u786e\u5b9a\u6027\u7684\uff0c\u4e5f\u5c31\u662f\u5728\u5f53\u524d\u8282\u70b9\u4e0b\uff0c\u4e8c\u7ea7\u8282\u70b9\u53ef\u80fd\u6709",(0,r.jsx)(e.code,{children:"children"}),"\uff0c\u800c\u5176\u4ed6\u8282\u70b9\u4e0b\u7684\u4e8c\u7ea7\u5f88\u53ef\u80fd\u6ca1\u6709 ",(0,r.jsx)(e.code,{children:"children"}),"\uff0c\u6240\u4ee5\u6211\u5728\u8fd9\u8fb9\u5c31\u52a0\u4e0a ",(0,r.jsx)(e.code,{children:"?? []"})," \uff08Typescript \u4e2d\u7684",(0,r.jsx)(e.code,{children:"??"}),"\u8bed\u6cd5\uff0c\u4f60\u53ef\u4ee5\u628a ",(0,r.jsx)(e.code,{children:"??"})," \u5f53\u505a ",(0,r.jsx)(e.code,{children:"||"})," \uff09\u6765\u5224\u65ad\u662f\u5426\u6709",(0,r.jsx)(e.code,{children:"children"}),"\u8282\u70b9\uff0c\u6709\u4e9b\u8bfb\u8005\u53ef\u80fd\u4f1a\u601d\u8003\uff0c\u4e3a\u5565\u4e0d\u7528\u9012\u5f52\u5462\u3002\u8bf4\u7684\u662f\u633a\u8f7b\u677e\u7684\uff0c\u4f46\u662f\u9012\u5f52\u662f\u5f88\u5bb9\u6613\u51fa\u95ee\u9898\u7684\uff0c\u4e07\u4e00\u722c\u53d6\u5230\u540e\u53f0\u6570\u636e\u8fdb\u884c\u4e86\u4e00\u4e9b\u4fee\u6539\uff0c\u5f88\u6709\u53ef\u80fd\u5bf9\u4e8e\u7684\u9012\u5f52\u7b97\u6cd5\u5c06\u5931\u6548\uff0c\u751a\u81f3\u5bfc\u81f4\u5806\u6808\u6ea2\u51fa\uff0c\u6240\u4ee5\u6211\u8fd9\u8fb9\u503c\u5faa\u73af 4 \u7ea7",(0,r.jsx)(e.code,{children:"chilren"}),"\u8282\u70b9\uff08\u5b9e\u9645\u9047\u5230\u7684\u8c8c\u4f3c\u4e5f\u53ea\u6709 4 \u7ea7\uff0c\u8c01\u53c8\u80fd\u4fdd\u8bc1\u722c\u53d6\u5230\u6570\u636e\u5c31\u4e00\u5b9a\u53ea\u6709 4 \u7ea7\u5462\uff09\u3002"]}),"\n",(0,r.jsx)(e.h3,{id:"jsonpath-\u83b7\u53d6",children:"jsonpath \u83b7\u53d6"}),"\n",(0,r.jsx)(e.p,{children:"\u4e8e\u662f\u4e86\u89e3\u5230 jsonpath \u540e\uff0c\u6211\u7b2c\u4e00\u4e2a\u65f6\u95f4\u5c31\u5f00\u59cb\u5206\u6790\u8fd9\u6837\u7684\u6570\u636e\uff0c\u679c\u4e0d\u5176\u7136\uff0c\u5f97\u5230\u4e86\u6211\u60f3\u8981\u7684\u7ed3\u679c \u2b07\ufe0f"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210919200826079.png",alt:"image-20210919200826079"})}),"\n",(0,r.jsxs)(e.p,{children:["\u8bed\u6cd5\uff1a",(0,r.jsx)(e.code,{children:'$..children[?(@.role=="group")]'})]}),"\n",(0,r.jsxs)(e.p,{children:["\u8bed\u6cd5\u610f\u601d\u5f88\u660e\u786e\uff0c\u6839\u8282\u70b9\u4e0b\u904d\u5386\u6240\u6709",(0,r.jsx)(e.code,{children:"children"}),"\u8282\u70b9\uff0c\u540c\u65f6",(0,r.jsx)(e.code,{children:"role"}),"\u7b49\u4e8e",(0,r.jsx)(e.code,{children:"group"}),"\uff0c\u5448\u73b0\u7684\u6548\u679c\u5982\u4e0a\u56fe\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u800c\u56de\u5230\u9700\u6c42\uff0c",(0,r.jsxs)(e.strong,{children:["\u5c31\u662f\u83b7\u53d6",(0,r.jsx)(e.code,{children:"role"}),"\u4e3a",(0,r.jsx)(e.code,{children:"group"}),"\u7684",(0,r.jsx)(e.code,{children:"children"}),"\u8282\u70b9\u6570\u636e"]}),"\uff0c\u800c jsonpath \u5c31\u5e2e\u6211\u8f7b\u677e\u5b9e\u73b0\u6211\u60f3\u8981\u7684\u6548\u679c\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6700\u7ec8\u601d\u8003",children:"\u6700\u7ec8\u601d\u8003"}),"\n",(0,r.jsx)(e.p,{children:"\u5b9e\u9645\u4e0a\u8fd9\u6837\u7684\u9700\u6c42\u6211\u5df2\u7ecf\u4e0d\u6b62\u9047\u5230\u4e00\u6b21\uff0c\u4e8c\u6b21\u4e86\uff0c\u7136\u800c\u6211\u5bfb\u6c42\u767e\u5ea6\u4e0e\u7fa4\u53cb\u7684\u65f6\u5019\uff0c\u7ed9\u6211\u7684\u7ed3\u679c\u90fd\u4e0d\u5c3d\u4eba\u610f\u3002\u4f46\u90fd\u6ca1\u6709\u63d0\u53ca\u5230 jsonpath \u6765\u8fdb\u884c\u83b7\u53d6\u3002\u4e5f\u8bb8\u662f\u6211\u7684\u641c\u7d22\u65b9\u5f0f\u6709\u95ee\u9898\uff0c\u4f46\u5343\u7bc7\u4e00\u5f8b\u90fd\u662f js \u5982\u4f55\u89e3\u6790\u591a\u5c42 json\uff0c\u4ee5\u53ca\u904d\u5386\u6240\u6709\u7684\u5b50\u5143\u7d20\uff0c\u867d\u7136\u8fd9\u4e9b\u529e\u6cd5\u786e\u5b9e\u80fd\u89e3\u51b3\u6211\u7684\u95ee\u9898\uff0c\u4f46\u6bcf\u6b21\u9047\u5230\u8fd9\u79cd\u6570\u636e\uff0c\u90fd\u9700\u8981\u82b1\u4e0a\u957f\u65f6\u95f4\u53bb\u7f16\u5199\u5bf9\u5e94\u7684\u903b\u8f91\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u56de\u60f3\u8d77\u5f53\u65f6\u722c\u53d6 HTML \u9875\u9762\u6570\u636e\u7684\u65f6\u5019\uff08\u6570\u636e\u4e0e\u4e0a\u9762\u5c55\u793a\u7684\u5dee\u4e0d\u591a\uff0c\u90fd\u662f\u6811\u7ed3\u6784\u591a\u5c42\uff09\uff0c\u800c\u6211\u53ea\u63a5\u89e6\u5230\u4e86\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u6ca1\u4e86\u89e3\u8fc7 CSS \u9009\u62e9\u5668\u4e0e xpath\u3002\u600e\u4e48\u529e\uff0c\u4e3a\u4e86\u5b9e\u73b0\u76ee\u7684\uff0c\u53ea\u597d\u7528\u73b0\u6709\u7684\u6280\u672f\u53bb\u5b9e\u73b0\uff0c\u4e8e\u662f\u7f16\u5199\u4e00\u4e2a\u6b63\u5219\u8868\u8fbe\u5f0f\u5c31\u82b1\u8d39\u4e86\u8fd1\u4e00\u4e2a\u4e0b\u5348\u7684\u65f6\u95f4\uff0c\u800c\u4f7f\u7528 CSS \u9009\u62e9\u5668 10 \u5206\u949f\u4e0d\u5230\u5c31\u8fbe\u5230\u76ee\u7684\u3002\u6ca1\u60f3\u5230\u7adf\u7136\u6709\u8fd9\u4e48\u597d\u7528\u7684\u65b9\u6cd5\uff0c\u65e9\u77e5\u9053\u591a\u53bb\u4e86\u89e3\u70b9\u6280\u672f\u4e86\u3002\u53ef\u80fd\u73b0\u5728\u7684\u5fc3\u60c5\u548c\u5f53\u65f6\u4e00\u6837\uff0c\u53ea\u4e0d\u8fc7 HTML \u6362\u6210\u4e86 JSON\uff0c\u7f16\u8f91\u5668\u8fd8\u662f\u90a3\u4e2a\u7f16\u8f91\u5668\uff0c\u800c\u6211\u4f9d\u65e7\u8fd8\u662f\u6211"}),"\n",(0,r.jsx)(e.p,{children:"\u4e5f\u8bb8\u8fd9\u5c31\u662f\u7f16\u7a0b\uff0c\u4e5f\u8bb8\u8fd9\u5c31\u662f\u4eba\u751f\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>o});var r=s(96540);const i={},t=r.createContext(i);function d(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);