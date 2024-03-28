"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[49239],{43570:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>t});var r=o(74848),s=o(28453);const d={id:"docker-deploy-node-project",slug:"/docker-deploy-node-project",title:"Docker\u90e8\u7f72Node\u9879\u76ee",date:new Date("2022-05-25T00:00:00.000Z"),authors:"kuizuo",tags:["docker","node"],keywords:["docker","node"]},c=void 0,l={id:"skill/docker/docker-deploy-node-project",title:"Docker\u90e8\u7f72Node\u9879\u76ee",description:"\u628a\u4e00\u4e2a Node.js web \u5e94\u7528\u7a0b\u5e8f\u7ed9 Docker \u5316 | Node.js (nodejs.org)",source:"@site/docs/skill/docker/Docker\u90e8\u7f72Node\u9879\u76ee.md",sourceDirName:"skill/docker",slug:"/docker-deploy-node-project",permalink:"/docs/docker-deploy-node-project",draft:!1,unlisted:!1,tags:[{label:"docker",permalink:"/docs/tags/docker"},{label:"node",permalink:"/docs/tags/node"}],version:"current",frontMatter:{id:"docker-deploy-node-project",slug:"/docker-deploy-node-project",title:"Docker\u90e8\u7f72Node\u9879\u76ee",date:"2022-05-25T00:00:00.000Z",authors:"kuizuo",tags:["docker","node"],keywords:["docker","node"]},sidebar:"skill",previous:{title:"Docker\u8bbf\u95ee\u5bbf\u4e3b\u673a\u4e0a\u670d\u52a1",permalink:"/docs/docker-accesses-host-service"},next:{title:"\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6",permalink:"/docs/fix-docker-config-that-cannot-start-up"}},i={},t=[{value:"\u90e8\u7f72 Express \u9879\u76ee",id:"\u90e8\u7f72-express-\u9879\u76ee",level:2},{value:"\u90e8\u7f72 Express+MongoDB+Redis",id:"\u90e8\u7f72-expressmongodbredis",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://nodejs.org/zh-cn/docs/guides/nodejs-docker-webapp/",children:"\u628a\u4e00\u4e2a Node.js web \u5e94\u7528\u7a0b\u5e8f\u7ed9 Docker \u5316 | Node.js (nodejs.org)"})}),"\n",(0,r.jsx)(n.h2,{id:"\u90e8\u7f72-express-\u9879\u76ee",children:"\u90e8\u7f72 Express \u9879\u76ee"}),"\n",(0,r.jsx)(n.p,{children:"\u524d\u63d0\uff1a\u51c6\u5907\u4e00\u4e2a Express \u9879\u76ee\u4ee5\u53ca Docker \u73af\u5883"}),"\n",(0,r.jsx)(n.p,{children:"\u5728 Express \u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa Dockerfile \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",metastring:'title="Dockerfile"',children:'FROM node:alpine as builder\n\nWORKDIR /app\n\nCOPY . .\n\nRUN npm install\n\nEXPOSE 3000\n\nCMD ["npm", "run", "start"]\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u8ff0\u4ee3\u7801\u7684\u5927\u81f4\u610f\u601d\u5982\u4e0b"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u4e0b\u8f7d node \u73af\u5883"}),"\n",(0,r.jsx)(n.li,{children:"\u8bbe\u7f6e RUN CMD COPY ADD \u6307\u4ee4\u7684\u5de5\u4f5c\u76ee\u5f55"}),"\n",(0,r.jsx)(n.li,{children:"\u62f7\u8d1d\u5bbf\u4e3b\u673a\uff08\u5f53\u524d\u8fd0\u884c\u7ec8\u7aef\u7684\u4f4d\u7f6e\uff09\u7684\u6587\u4ef6\u5230\u5bb9\u5668\u4e2d\u7684 app \u76ee\u5f55\u4e2d"}),"\n",(0,r.jsx)(n.li,{children:"\u5b89\u88c5 npm \u5305"}),"\n",(0,r.jsx)(n.li,{children:"\u66b4\u9732 3000 \u7aef\u53e3"}),"\n",(0,r.jsxs)(n.li,{children:["\u6267\u884c",(0,r.jsx)(n.code,{children:"npm run start"}),"\u811a\u672c\u547d\u4ee4"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u6267\u884c\u547d\u4ee4\u524d\uff0c\u8fd8\u9700\u8981\u521b\u5efa.dockerignore\uff0c\u5c06\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u6587\u4ef6\u6392\u9664\uff08\u5176\u4f5c\u7528\u4e8e.gitignore \u4e00\u81f4\uff09"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",metastring:'title=".dockerignore"',children:"/dist\n/node_modules\npackage-lock.json\nyarn.lock\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u65f6\u6253\u5f00\u7ec8\u7aef\uff0c\u8f93\u5165"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker build -t my-app .\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u4f1a\u6267\u884c Dockerfile \u547d\u4ee4\uff0c\u5f85\u6240\u6709\u547d\u4ee4\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u5c06\u4f1a\u521b\u5efa my-app \u7684\u955c\u50cf"}),"\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u542f\u52a8\u5bb9\u5668\u547d\u4ee4\uff0c\u5c06\u670d\u52a1\u542f\u52a8\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run --name my-app -p 3000:3000 my-app\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u65f6\u8bbf\u95ee\u5bf9\u5e94\u673a\u5668\u7684 3000 \u7aef\u53e3\u5373\u53ef\u8bbf\u95ee express \u9879\u76ee\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60f3\u6253\u5f00\u5bb9\u5668\u5185\u7684\u7ec8\u7aef\uff0c\u6709\u4ee5\u4e0b\u4e24\u79cd\u9009\u62e9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker exec -it \u5bb9\u5668ID/\u540d /bin/bash  # \u8fdb\u5165\u540e\u5f00\u542f\u65b0\u7684\u7ec8\u7aef \u53ef\u5728\u91cc\u9762\u64cd\u4f5c(\u5e38\u7528) \u6216\u8005\u4e3a/bin/sh\ndocker attach \u5bb9\u5668ID/\u540d # \u4e0d\u4f1a\u542f\u52a8\u65b0\u7684\u8fdb\u7a0b \u5355\u5355\u53ea\u662f\u8fdb\u5165\u5bb9\u5668\u7684\u7ec8\u7aef\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u90e8\u7f72-expressmongodbredis",children:"\u90e8\u7f72 Express+MongoDB+Redis"}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u8bbe\u6211\u73b0\u5728\u8981\u90e8\u7f72 Express + MongoDB+Redis \u7684\u670d\u52a1\u7684\u8bdd\uff0c\u53ef\u4ee5\u4f7f\u7528 docker-compose.yml \u6765\u81ea\u52a8\u5316\u90e8\u7f72\u591a\u4e2a\u5bb9\u5668\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa docker-compose.yml \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:"version: '3.9'\n\nservices:\n  mongodb:\n    image: mongo:4.4.6\n    restart: always\n    ports:\n      - 27017:27017\n    networks:\n      - backend\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: root\n      MONGO_INITDB_ROOT_PASSWORD: 123\n    volumes:\n      - db-data:/data/db\n\n  redis:\n    image: redis:latest\n    command:\n      - /bin/bash\n      - -c\n      - redis-server --appendonly yes\n    ports:\n      - 6379:6379\n    networks:\n      - backend\n\n  web:\n    build: .\n    restart: always\n    environment:\n      - NODE_ENV=development\n      - MYSQL_HOST=mysql\n      - REDIS_HOST=redis\n    ports:\n      - 5000:5000\n    networks:\n      - backend\n    depends_on:\n      - mongodb\n      - redis\n\nnetworks:\n  backend:\n\nvolumes:\n  db-data:\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd0\u884c\u547d\u4ee4\uff0c",(0,r.jsx)(n.strong,{children:"\u91cd\u65b0\u90e8\u7f72\u7684\u8bdd\u53ef\u4ee5\u6dfb\u52a0--build \u53c2\u6570"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"docker-compose up -d\n"})}),"\n",(0,r.jsx)(n.p,{children:"web \u540e\u7aef\u9879\u76ee\u4e2d\u6d89\u53ca\u5230\uff0c\u6570\u636e\u5e93\u7684\u8fde\u63a5\u5730\u5740\uff08Host\uff09\u8981\u4ee5 docker-compose.yml \u4e2d\u7684 service \u540d\u4e00\u81f4\u3002\u4f8b\u5982\u4e0a\u9762\u6240\u5b9a\u4e49\u7684 environment \u4e2d"}),"\n",(0,r.jsx)(n.p,{children:"MYSQL_HOST=mysql"}),"\n",(0,r.jsx)(n.p,{children:"REDIS_HOST=redis"}),"\n",(0,r.jsxs)(n.p,{children:["\u800c\u4e0d\u80fd\u4e3a localhost\uff0c\u56e0\u4e3a",(0,r.jsx)(n.strong,{children:"docker \u5bb9\u5668\u5185\u7684 localhost \u4e0e\u5bbf\u4e3b\u673a\u7684 localhost \u5e76\u4e0d\u662f\u540c\u4e00\u4e2a\u5730\u5740"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6216\u8005\u662f\u5728\u914d\u7f6e\u4e2d\u5c06 localhost \u4fee\u6539\u4e3a docker \u7f51\u7edc\u7684 ip\uff0c\u4e00\u822c\u4e3a 172.17.0.1\uff0c\u5177\u4f53\u6839\u636e docker \u5b9e\u9645\u7f51\u7edc\u800c\u5b9a\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>l});var r=o(96540);const s={},d=r.createContext(s);function c(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);