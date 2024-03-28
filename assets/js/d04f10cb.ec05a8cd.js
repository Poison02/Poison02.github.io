"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[63705],{48856:(e,l,s)=>{s.r(l),s.d(l,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=s(74848),t=s(28453);const n={id:"mysql-like-optimization",slug:"/mysql-like-optimization",title:"mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316",date:new Date("2021-01-07T00:00:00.000Z"),tags:["mysql","database"],keywords:["mysql","database"]},a=void 0,o={id:"skill/database/mysql/mysql-like-optimization",title:"mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316",description:"1\u3001\u524d\u8a00",source:"@site/docs/skill/database/mysql/Mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316.md",sourceDirName:"skill/database/mysql",slug:"/mysql-like-optimization",permalink:"/docs/mysql-like-optimization",draft:!1,unlisted:!1,tags:[{label:"mysql",permalink:"/docs/tags/mysql"},{label:"database",permalink:"/docs/tags/database"}],version:"current",frontMatter:{id:"mysql-like-optimization",slug:"/mysql-like-optimization",title:"mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316",date:"2021-01-07T00:00:00.000Z",tags:["mysql","database"],keywords:["mysql","database"]},sidebar:"skill",previous:{title:"mysql\u66ff\u6362\u51fd\u6570replace",permalink:"/docs/mysql-replace-function"},next:{title:"MySql\u7b14\u8bb0",permalink:"/docs/skill/database/mysql"}},r={},d=[{value:"1\u3001\u524d\u8a00",id:"1\u524d\u8a00",level:2},{value:"2\u3001LIKE &#39;%keyword%&#39;",id:"2like-keyword",level:2},{value:"3\u3001\u6dfb\u52a0\u524d\u7f00",id:"3\u6dfb\u52a0\u524d\u7f00",level:2},{value:"4\u3001\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u524d\u7f00",id:"4\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u524d\u7f00",level:2},{value:"\u7136\u800c\u3002\u3002\u3002",id:"\u7136\u800c",level:2}];function c(e){const l={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h2,{id:"1\u524d\u8a00",children:"1\u3001\u524d\u8a00"}),"\n",(0,i.jsx)(l.p,{children:"\u5728\u6211\u5b58\u50a8\u9898\u5e93\u7684\u65f6\u5019\uff0c\u641c\u9898\u80af\u5b9a\u8981\u7528\u6a21\u7cca\u641c\u7d22\u9898\u76ee\uff0c\u4f46\u4e00\u822c\u60c5\u51b5\u4e0b like \u6a21\u7cca\u67e5\u8be2\u7684\u5199\u6cd5\u4e3a\uff08field \u5df2\u5efa\u7acb\u7d22\u5f15\uff09"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-sql",children:"SELECT `column` FROM `table` WHERE `field` LIKE '%keyword%';\n"})}),"\n",(0,i.jsx)(l.p,{children:"\u4f46\u662f\u95ee\u9898\u6765\u4e86\uff0c\u56e0\u4e3a\u662f\u6a21\u7cca\u641c\u7d22\uff0c\u4e00\u65e6\u6570\u636e\u8fc7\u5927\uff0c\u67e5\u8be2\u901f\u5ea6\u5c06\u4f1a\u975e\u5e38\u6162\uff0c\u540c\u65f6\u8bf7\u6c42\u8fc7\u591a\u8fd8\u4f1a\u5bfc\u81f4\u670d\u52a1\u5668\u8d1f\u8f7d\uff08\u6211\u7684\u9898\u5e93 API \u63a5\u53e3\u5c31\u662f\u8fd9\u6837\uff09\uff0c\u5b9d\u5854\u9762\u677f\u5982\u4e0b"}),"\n",(0,i.jsx)(l.p,{children:(0,i.jsx)(l.img,{src:"https://img.kuizuo.cn/image-20210116000628122.png",alt:"image-20210116000628122"})}),"\n",(0,i.jsx)(l.p,{children:"\u6240\u4ee5\uff0c\u8981\u4fdd\u8bc1\u591a\u5e76\u53d1\u67e5\u9898\u67e5\u9898\u7684\u540c\u65f6\uff0c\u6709\u80fd\u5feb\u901f\u641c\u7d22\u5230\u5bf9\u5e94\u7684\u9898\u76ee\uff0c\u6570\u636e\u5e93\u63d0\u901f\u5c31\u663e\u5f97\u5c24\u4e3a\u91cd\u8981\u4e86\uff0c\u5728\u7ffb\u770b\u76f8\u5173\u6587\u7ae0\u89e3\u51b3\u4e86\u6211\u8fd9\u4e00\u95ee\u9898\u3002"}),"\n",(0,i.jsxs)(l.blockquote,{children:["\n",(0,i.jsxs)(l.p,{children:["\u53c2\u8003\u94fe\u63a5 ",(0,i.jsx)(l.a,{href:"https://www.imooc.com/article/300874",children:"MySql \u6a21\u7cca\u67e5\u8be2 LIKE \u4f18\u5316"})]}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"2like-keyword",children:"2\u3001LIKE '%keyword%'"}),"\n",(0,i.jsx)(l.p,{children:"\u5728\u6ca1\u600e\u4e48\u4e86\u89e3 LIKE \u6a21\u7cca\u67e5\u8be2\u524d\uff0c\u4e00\u76f4\u4ee5\u4e3a LIKE \u4f1a\u7528\u5230\u7d22\u5f15\uff0c\u641c\u7d22\u4e86\u76f8\u5173\u8d44\u6599\u624d\u53d1\u73b0\uff0c%keyword% \u5bf9\u5e94\u8fd9\u79cd\u7684\u6a21\u7cca\u641c\u7d22\uff0c\u7528\u4e0d\u5230\u7d22\u5f15\uff0c\u800c\u662f\u5168\u8868\u626b\u63cf\uff0c\u4e5f\u5c31\u5bfc\u81f4\u67e5\u8be2\u901f\u5ea6\u7279\u522b\u6162\u3002"}),"\n",(0,i.jsx)(l.h2,{id:"3\u6dfb\u52a0\u524d\u7f00",children:"3\u3001\u6dfb\u52a0\u524d\u7f00"}),"\n",(0,i.jsx)(l.p,{children:"\u4e0a\u9762\u5199\u5230 %keyword% \u7528\u4e0d\u5230\u7d22\u5f15\uff0c\u4f46\u5982\u679c\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u4e00\u4e2a\u524d\u7f00\u6587\u672c\uff0c\u6bd4\u5982\u6211\u8fd9\u91cc\u6dfb\u52a0\u4e3a KZTK_(\u6127\u600d\u9898\u5e93)\uff0c\u7136\u540e\u62fc\u63a5\u4e3a KZTK_%keyword%"}),"\n",(0,i.jsx)(l.h2,{id:"4\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u524d\u7f00",children:"4\u3001\u7ed9\u5b57\u6bb5\u6dfb\u52a0\u524d\u7f00"}),"\n",(0,i.jsx)(l.pre,{children:(0,i.jsx)(l.code,{className:"language-sql",children:"UPDATE kz_answer SET `topic` = CONCAT('KZTK_',topic)\n"})}),"\n",(0,i.jsx)(l.h2,{id:"\u7136\u800c",children:"\u7136\u800c\u3002\u3002\u3002"}),"\n",(0,i.jsx)(l.p,{children:"\u7136\u800c\u4e0a\u9762\u7684\u90a3\u4e9b\u64cd\u4f5c\u5bf9\u767e\u4e07\u7ea7\u522b\u7684\u6570\u636e\u6765\u8bf4\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u901f\u5ea6\u7684\u63d0\u5347\uff0c\u56e0\u4e3a Like \u641c\u7d22\u672c\u6765\u5c31\u5f88\u6162\u3002\u4e0a\u9762\u6240\u8bf4\u7684\u9700\u6c42\u5176\u5b9e\u66f4\u5e94\u8be5\u6362\u4e00\u4e2a\u6570\u636e\u5e93\uff0c\u4e5f\u5c31\u662f elasticsearch\u3002\u60f3\u5236\u4f5c\u4e00\u4e2a\u641c\u7d22\u5f15\u64ce\u4f3c\u7684\u6570\u636e\u5e93\uff0c\u5e76\u4e14\u6709\u9ad8\u6548\u7684\u67e5\u8be2\u901f\u5ea6\uff0c\u5e76\u4e14\u53ef\u9488\u5bf9\u5173\u952e\u8bcd\uff0c\u6a21\u7cca\u641c\u7d22\uff0c\u6b63\u597d\u5c31\u7b26\u5408\u8fd9\u4e2a\u573a\u666f\u3002"})]})}function m(e={}){const{wrapper:l}={...(0,t.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,l,s)=>{s.d(l,{R:()=>a,x:()=>o});var i=s(96540);const t={},n=i.createContext(t);function a(e){const l=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(n.Provider,{value:l},e.children)}}}]);