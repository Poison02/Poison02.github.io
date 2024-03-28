"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[68065],{76449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=t(74848),r=t(28453);const i={id:"pinia",slug:"/pinia",title:"Pinia",date:new Date("2020-10-23T00:00:00.000Z"),authors:"kuizuo",tags:["vue","pinia"],keywords:["vue","pinia"]},a=void 0,o={id:"skill/web/vue/pinia",title:"Pinia",description:"\u5b98\u65b9\u6587\u6863\uff1aIntroduction | Pinia (vuejs.org)",source:"@site/docs/skill/web/vue/Pinia.md",sourceDirName:"skill/web/vue",slug:"/pinia",permalink:"/en/docs/pinia",draft:!1,unlisted:!1,tags:[{label:"vue",permalink:"/en/docs/tags/vue"},{label:"pinia",permalink:"/en/docs/tags/pinia"}],version:"current",frontMatter:{id:"pinia",slug:"/pinia",title:"Pinia",date:"2020-10-23T00:00:00.000Z",authors:"kuizuo",tags:["vue","pinia"],keywords:["vue","pinia"]},sidebar:"skill",previous:{title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4b\u57fa\u672c\u6570\u636e\u7c7b\u578b",permalink:"/en/docs/vue-reactive-data-basic-type"},next:{title:"React",permalink:"/en/docs/category/react"}},c={},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u521b\u5efa Store",id:"\u521b\u5efa-store",level:2},{value:"\u521b\u5efa modules",id:"\u521b\u5efa-modules",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u83b7\u53d6 state",id:"\u83b7\u53d6-state",level:3},{value:"\u4fee\u6539 state",id:"\u4fee\u6539-state",level:3},{value:"\u4e0e vuex \u5bf9\u6bd4",id:"\u4e0e-vuex-\u5bf9\u6bd4",level:2},{value:"\u6570\u636e\u6301\u4e45\u5316",id:"\u6570\u636e\u6301\u4e45\u5316",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u5b98\u65b9\u6587\u6863\uff1a",(0,s.jsx)(n.a,{href:"https://pinia.vuejs.org/introduction.html",children:"Introduction | Pinia (vuejs.org)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install pinia\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efa-store",children:"\u521b\u5efa Store"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 src/store \u4e2d\u521b\u5efa index.ts\uff0c\u5e76\u5bfc\u51fa store"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="src/store/index.ts"',children:"import { createPinia } from 'pinia'\n\nconst store = createPinia()\n\nexport default store\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728 main.ts \u4e2d\u5f15\u5165\u5e76\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="main.ts"',children:"import { createApp } from 'vue'\nimport App from './App.vue'\nimport store from './store'\n\nconst app = createApp(App)\napp.use(store)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u521b\u5efa-modules",children:"\u521b\u5efa modules"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 src/store \u76ee\u5f55\u4e0b\u521b\u5efa modules \u76ee\u5f55\uff0c\u91cc\u9762\u5b58\u653e\u9879\u76ee\u4e2d\u6240\u9700\u8981\u4f7f\u7528\u5230\u7684\u72b6\u6001\u3002\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="store/modules/user.ts"',children:"import { defineStore } from 'pinia'\n\ninterface UserState {\n  name: string\n}\n\nexport const useUserStore = defineStore({\n  id: 'user',\n  state: (): UserState => {\n    return {\n      name: 'kuizuo',\n    }\n  },\n  getters: {\n    getName(): string {\n      return this.name\n    },\n  },\n  actions: {\n    setName(name: string) {\n      this.name = name\n    },\n  },\n})\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsx)(n.h3,{id:"\u83b7\u53d6-state",children:"\u83b7\u53d6 state"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-vue",children:"<template>\n  <div>{{ userStore.name }}</div>\n</template>\n\n<script lang=\"ts\" setup>\nimport { useUserStore } from '/@/store/modules/user'\n\nconst userStore = useUserStore()\n<\/script>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u8fc7\u8fd9\u6837\u5199\u6cd5\u4e0d\u4f18\u96c5\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528 computed"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const name = computed(() => userStore.getName) // \u524d\u63d0\u5b9a\u4e49\u4e86getters\nconst name = computed(() => userStore.name)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["state \u4e5f\u53ef\u4ee5\u4f7f\u7528\u89e3\u6784\uff0c\u4f46\u4f7f\u7528\u89e3\u6784\u4f1a\u4f7f\u5176\u5931\u53bb\u54cd\u5e94\u5f0f\uff0c\u8fd9\u65f6\u5019\u53ef\u4ee5\u7528 pinia \u7684 ",(0,s.jsx)(n.code,{children:"storeToRefs"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { storeToRefs } from 'pinia'\nconst { name } = storeToRefs(userStore)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4fee\u6539-state",children:"\u4fee\u6539 state"}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,s.jsx)(n.code,{children:'userStore.name = "xxx"'})," \u6765\u8fdb\u884c\u4fee\u6539\uff0c\u4f46\u4e0d\u5efa\u8bae\uff0c\u800c\u662f\u4f7f\u7528 actions \u6765\u4fee\u6539\uff0c\u5728\u4e0a\u9762\u5df2\u7ecf\u5b9a\u4e49\u4e00\u4e2a setName \u65b9\u6cd5\u7528\u6765\u4fee\u6539 state"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"userStore.setName('xxx')\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e0e-vuex-\u5bf9\u6bd4",children:"\u4e0e vuex \u5bf9\u6bd4"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u96be\u53d1\u73b0\uff0cpinia \u6bd4 vuex \u5c11\u4e86\u4e2a",(0,s.jsx)(n.code,{children:"mutations"}),"\uff0c\u4e5f\u5c31\u662f\u53d8\u66f4\u72b6\u6001\u7684\u51fd\u6570\uff0c\u800c pinia \u5219\u662f\u5c06\u5176\u4e0e action \u5408\u5e76\u5728\u4e00\u8d77\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Vuex \u4e2d mutation \u662f\u65e0\u6cd5\u5f02\u6b65\u64cd\u4f5c\u7684\uff0c\u800c Action \u53ef\u4ee5\u5305\u542b\u4efb\u610f\u5f02\u6b65\u64cd\u4f5c\u3002\u50cf\u4e0a\u9762\u8981\u5199\u5f02\u6b65\u64cd\u4f5c\u7684\u53ea\u9700\u8981\u5728 actions \u4e2d\u6b63\u5e38\u7684\u7f16\u5199 async await \u8bed\u6cd5\u7684\u5f02\u6b65\u51fd\u6570\u5373\u53ef\u3002\u5982"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"export const useUserStore = defineStore({\n  id: 'user',\n  actions: {\n    async login(user) {\n      const { data } = await api.login(user)\n      return data\n    },\n  },\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u800c vuex \u4e2d\u5199\u6cd5\u4e0e\u8c03\u7528\u5c31\u4e0d\u582a\u5165\u76ee\u4e86 \ud83d\ude02"}),"\n",(0,s.jsx)(n.h2,{id:"\u6570\u636e\u6301\u4e45\u5316",children:"\u6570\u636e\u6301\u4e45\u5316"}),"\n",(0,s.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i pinia-plugin-persistedstate\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"{2,5}",children:"import { createPinia } from 'pinia'\nimport piniaPluginPersist from 'pinia-plugin-persistedstate'\n\nconst store = createPinia()\nstore.use(piniaPluginPersist)\n\nexport default store\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5bf9\u5e94\u7684 store \u4e2d\u5f00\u542f persist \u5373\u53ef\uff0c",(0,s.jsx)(n.strong,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6570\u636e\u662f\u5b58\u653e\u5728 sessionStorage(\u4f1a\u8bdd\u5b58\u50a8)\uff0c\u5e76\u4ee5 store \u4e2d\u7684 id \u4f5c\u4e3a key"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"{8-10}",children:"export const useUserStore = defineStore({\n  id: 'user',\n  state: (): UserState => {\n    return {\n      name: 'kuizuo',\n    }\n  },\n  persist: {\n    enabled: true,\n  },\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:"persist \u8fd8\u6709\u5176\u4ed6\u914d\u7f6e\uff0c\u4f8b\u5982\u81ea\u5b9a\u4e49 key\uff0c\u5b58\u653e\u4f4d\u7f6e\u6539\u4e3a localStorage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"{3-8}",children:"persist: {\n\tenabled: true,\n\tstrategies: [\n\t\t{\n\t\t\tkey: 'my_user',\n\t\t\tstorage: localStorage\n\t\t}\n\t]\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd8\u53ef\u4ee5\u4f7f\u7528 paths \u6765\u6307\u5b9a\u90a3\u4e9b state \u6301\u4e45\u5316\uff0c\u5982\u4e0b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:"{5}",children:"persist: {\n  enabled: true,\n  strategies: [\n    {\n      paths: ['name']\n    }\n  ]\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);