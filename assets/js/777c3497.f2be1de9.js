"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[80814],{38091:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var l=s(74848),i=s(28453);const t={id:"look-up-port-and-kill-process",slug:"/look-up-port-and-kill-process",title:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u53ca\u7ed3\u675f\u8fdb\u7a0b",date:new Date("2022-05-09T00:00:00.000Z"),authors:"kuizuo",tags:["system"],keywords:["system"]},r=void 0,c={id:"skill/misc/look-up-port-and-kill-process",title:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u53ca\u7ed3\u675f\u8fdb\u7a0b",description:"Linux",source:"@site/docs/skill/misc/\u67e5\u770b\u7aef\u53e3\u5360\u7528\u53ca\u7ed3\u675f\u8fdb\u7a0b.md",sourceDirName:"skill/misc",slug:"/look-up-port-and-kill-process",permalink:"/docs/look-up-port-and-kill-process",draft:!1,unlisted:!1,tags:[{label:"system",permalink:"/docs/tags/system"}],version:"current",frontMatter:{id:"look-up-port-and-kill-process",slug:"/look-up-port-and-kill-process",title:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u53ca\u7ed3\u675f\u8fdb\u7a0b",date:"2022-05-09T00:00:00.000Z",authors:"kuizuo",tags:["system"],keywords:["system"]},sidebar:"skill",previous:{title:"\u6742\u9879",permalink:"/docs/category/\u6742\u9879"}},d={},o=[{value:"Linux",id:"linux",level:2},{value:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5",id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5",level:3},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:4},{value:"netstat",id:"netstat",level:3},{value:"\u7ed3\u675f\u8fdb\u7a0b",id:"\u7ed3\u675f\u8fdb\u7a0b",level:3},{value:"Windows",id:"windows",level:2},{value:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u7684 PID",id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u7684-pid",level:3},{value:"\u67e5\u770b\u6307\u5b9a PID \u7684\u8fdb\u7a0b",id:"\u67e5\u770b\u6307\u5b9a-pid-\u7684\u8fdb\u7a0b",level:3},{value:"\u7ed3\u675f\u8fdb\u7a0b",id:"\u7ed3\u675f\u8fdb\u7a0b-1",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"linux",children:"Linux"}),"\n",(0,l.jsx)(n.h3,{id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5",children:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"lsof -i:\u7aef\u53e3\u53f7\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u5b9e\u4f8b",children:"\u5b9e\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"[root@VM-4-5-centos]# lsof -i:5002\nCOMMAND   PID USER   FD   TYPE   DEVICE SIZE/OFF NODE NAME\nnode    15196  www   25u  IPv6 63810147      0t0  TCP *:rfe (LISTEN)\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u66f4\u591a lsof \u7684\u547d\u4ee4\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"lsof -i:8080\uff1a\u67e5\u770b8080\u7aef\u53e3\u5360\u7528\nlsof abc.txt\uff1a\u663e\u793a\u5f00\u542f\u6587\u4ef6abc.txt\u7684\u8fdb\u7a0b\nlsof -c abc\uff1a\u663e\u793aabc\u8fdb\u7a0b\u73b0\u5728\u6253\u5f00\u7684\u6587\u4ef6\nlsof -c -p 1234\uff1a\u5217\u51fa\u8fdb\u7a0b\u53f7\u4e3a1234\u7684\u8fdb\u7a0b\u6240\u6253\u5f00\u7684\u6587\u4ef6\nlsof -g gid\uff1a\u663e\u793a\u5f52\u5c5egid\u7684\u8fdb\u7a0b\u60c5\u51b5\nlsof +d /usr/local/\uff1a\u663e\u793a\u76ee\u5f55\u4e0b\u88ab\u8fdb\u7a0b\u5f00\u542f\u7684\u6587\u4ef6\nlsof +D /usr/local/\uff1a\u540c\u4e0a\uff0c\u4f46\u662f\u4f1a\u641c\u7d22\u76ee\u5f55\u4e0b\u7684\u76ee\u5f55\uff0c\u65f6\u95f4\u8f83\u957f\nlsof -d 4\uff1a\u663e\u793a\u4f7f\u7528fd\u4e3a4\u7684\u8fdb\u7a0b\nlsof -i -U\uff1a\u663e\u793a\u6240\u6709\u6253\u5f00\u7684\u7aef\u53e3\u548cUNIX domain\u6587\u4ef6\n"})}),"\n",(0,l.jsx)(n.h3,{id:"netstat",children:"netstat"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"netstat -tunlp"})," \u7528\u4e8e\u663e\u793a tcp\uff0cudp \u7684\u7aef\u53e3\u548c\u8fdb\u7a0b\u7b49\u76f8\u5173\u60c5\u51b5\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"netstat \u67e5\u770b\u7aef\u53e3\u5360\u7528\u8bed\u6cd5\u683c\u5f0f\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"netstat -tunlp | grep \u7aef\u53e3\u53f7\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"-t (tcp) \u4ec5\u663e\u793a tcp \u76f8\u5173\u9009\u9879"}),"\n",(0,l.jsx)(n.li,{children:"-u (udp)\u4ec5\u663e\u793a udp \u76f8\u5173\u9009\u9879"}),"\n",(0,l.jsx)(n.li,{children:"-n \u62d2\u7edd\u663e\u793a\u522b\u540d\uff0c\u80fd\u663e\u793a\u6570\u5b57\u7684\u5168\u90e8\u8f6c\u5316\u4e3a\u6570\u5b57"}),"\n",(0,l.jsx)(n.li,{children:"-l \u4ec5\u5217\u51fa\u5728 Listen(\u76d1\u542c)\u7684\u670d\u52a1\u72b6\u6001"}),"\n",(0,l.jsx)(n.li,{children:"-p \u663e\u793a\u5efa\u7acb\u76f8\u5173\u94fe\u63a5\u7684\u7a0b\u5e8f\u540d"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u7ed3\u675f\u8fdb\u7a0b",children:"\u7ed3\u675f\u8fdb\u7a0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"kill -9 PID\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://www.runoob.com/w3cnote/linux-check-port-usage.html",children:"Linux \u67e5\u770b\u7aef\u53e3\u5360\u7528\u60c5\u51b5 | \u83dc\u9e1f\u6559\u7a0b (runoob.com)"})}),"\n",(0,l.jsx)(n.h2,{id:"windows",children:"Windows"}),"\n",(0,l.jsx)(n.h3,{id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u7684-pid",children:"\u67e5\u770b\u7aef\u53e3\u5360\u7528\u7684 PID"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'netstat -ano | findstr "\u7aef\u53e3\u53f7"\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'  netstat -ano | findstr "8080"\n  TCP    0.0.0.0:8080           0.0.0.0:0              LISTENING       18180\n  TCP    192.168.123.210:14075  115.236.121.240:8080   ESTABLISHED     14060\n  TCP    [::]:8080              [::]:0                 LISTENING       18180\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u67e5\u770b\u6307\u5b9a-pid-\u7684\u8fdb\u7a0b",children:"\u67e5\u770b\u6307\u5b9a PID \u7684\u8fdb\u7a0b"}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u60f3\u770b\u5360\u7528\u8fdb\u7a0b\uff0c\u53ef\u4ee5\u7ee7\u7eed\u8f93\u5165\u547d\u4ee4\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'tasklist|findstr "PID"\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'tasklist|findstr "18180"\njava.exe                     18180 Console                    1    852,996 K\n'})}),"\n",(0,l.jsx)(n.h3,{id:"\u7ed3\u675f\u8fdb\u7a0b-1",children:"\u7ed3\u675f\u8fdb\u7a0b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"taskkill /T /F /PID PID\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u4f8b"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"taskkill /T /F /PID 8080\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5f3a\u5236\uff08/F \u53c2\u6570\uff09\u6740\u6b7b pid \u4e3a 8080 \u7684\u6240\u6709\u8fdb\u7a0b\u5305\u62ec\u5b50\u8fdb\u7a0b\uff08/T \u53c2\u6570\uff09"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var l=s(96540);const i={},t=l.createContext(i);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);