"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[97558],{43670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var r=t(74848),a=t(28453);const c={id:"vue-reactive-data-object",slug:"/vue-reactive-data-object",title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bObject",date:new Date("2022-05-10T00:00:00.000Z"),authors:"kuizuo",tags:["vue","javascript"],keywords:["vue","javascript"]},s=void 0,o={id:"skill/web/vue/vue-reactive-data-object",title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bObject",description:"\u5728\u9605\u8bfb\u300a\u6df1\u5165\u6d45\u51fa Vue.js\u300b\u4e0e\u300aVue.js \u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u300b\uff0c\u4e86\u89e3\u5230 vue \u662f\u5982\u4f55\u4fa6\u6d4b\u6570\u636e\uff0c\u540c\u65f6\u81ea\u5df1\u5728\u63a5\u89e6 js \u9006\u5411\u65f6\u4e5f\u5e38\u5e38\u4f1a\u7528\u5230\u3002\u4e8e\u662f\u5c31\u51c6\u5907\u5199\u7bc7 js \u5982\u4f55\u76d1\u542c\u6570\u636e\u53d8\u5316\uff0c\u8fd9\u7bc7\u4e3a\u76d1\u542c Object \u6570\u636e\u3002",source:"@site/docs/skill/web/vue/Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bObject.md",sourceDirName:"skill/web/vue",slug:"/vue-reactive-data-object",permalink:"/en/docs/vue-reactive-data-object",draft:!1,unlisted:!1,tags:[{label:"vue",permalink:"/en/docs/tags/vue"},{label:"javascript",permalink:"/en/docs/tags/javascript"}],version:"current",frontMatter:{id:"vue-reactive-data-object",slug:"/vue-reactive-data-object",title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bObject",date:"2022-05-10T00:00:00.000Z",authors:"kuizuo",tags:["vue","javascript"],keywords:["vue","javascript"]},sidebar:"skill",previous:{title:"Vue",permalink:"/en/docs/category/vue"},next:{title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bArray",permalink:"/en/docs/vue-reactive-data-array"}},l={},i=[{value:"Object.defineproperty",id:"objectdefineproperty",level:2},{value:"Proxy \u4e0e Reflect",id:"proxy-\u4e0e-reflect",level:2},{value:"this \u95ee\u9898",id:"this-\u95ee\u9898",level:3},{value:"\u533a\u522b\u589e\u52a0\u548c\u4fee\u6539",id:"\u533a\u522b\u589e\u52a0\u548c\u4fee\u6539",level:3},{value:"\u6df1\u54cd\u5e94",id:"\u6df1\u54cd\u5e94",level:3},{value:"\u6700\u7ec8\u4ee3\u7801",id:"\u6700\u7ec8\u4ee3\u7801",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5728\u9605\u8bfb\u300a\u6df1\u5165\u6d45\u51fa Vue.js\u300b\u4e0e\u300aVue.js \u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u300b\uff0c\u4e86\u89e3\u5230 vue \u662f\u5982\u4f55\u4fa6\u6d4b\u6570\u636e\uff0c\u540c\u65f6\u81ea\u5df1\u5728\u63a5\u89e6 js \u9006\u5411\u65f6\u4e5f\u5e38\u5e38\u4f1a\u7528\u5230\u3002\u4e8e\u662f\u5c31\u51c6\u5907\u5199\u7bc7 js \u5982\u4f55\u76d1\u542c\u6570\u636e\u53d8\u5316\uff0c\u8fd9\u7bc7\u4e3a\u76d1\u542c Object \u6570\u636e\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"objectdefineproperty",children:"Object.defineproperty"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const data = {\n  username: 'kuizuo',\n  password: 'a123456',\n}\n\nfunction defineReactive(data, key, val) {\n  Object.defineProperty(data, key, {\n    enumerable: true,\n    configurable: true,\n    get() {\n      console.log('GET', val)\n      return val\n    },\n    set(newVal) {\n      if (val === newVal) return\n\n      val = newVal\n      console.log('SET', val)\n    },\n  })\n}\n\nfunction observe(data) {\n  Object.keys(data).forEach(function (key) {\n    defineReactive(data, key, data[key])\n  })\n}\n\nobserve(data)\n\ndata.username\ndata.username = '\u6127\u600d'\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\u5c31\u53ef\u4ee5\u53d1\u73b0\uff0c\u53ea\u8981\u53d6\u503c\u4e0e\u8d4b\u503c\u5c31\u4f1a\u8fdb\u5165 get \u548c set \u51fd\u6570\u5185\uff0c\u5728\u8fd9\u91cc\u9762\u4fbf\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e9b\u529f\u80fd\uff0c\u4f8b\u5982 Vue \u4e2d\u6536\u96c6\u4f9d\u8d56\uff0c\u5728\u60f3\u76d1\u542c\u6d4f\u89c8\u5668\u4e2d cookies \u7684\u53d6\u503c\u4e0e\u8d4b\u503c\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"!(function () {\n  let cookie = document.cookie\n  Object.defineProperty(document, 'cookie', {\n    get() {\n      console.log('cookie get', cookie)\n      return cookie\n    },\n    set(newVal) {\n      cookie = newVal\n      console.log('cookie set', cookie)\n    },\n  })\n})()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 object.defineproperty \u80fd\u76d1\u542c\u5bf9\u8c61\u4e0a\u7684\u67d0\u4e2a\u5c5e\u6027\u4fee\u6539\u4e0e\u83b7\u53d6\uff0c\u4f46\u662f\u65e0\u6cd5\u76d1\u542c\u5230\u5bf9\u8c61\u5c5e\u6027\u7684\u589e\u548c\u5220\u3002\u8fd9\u5728 es5 \u662f\u65e0\u6cd5\u5b9e\u73b0\u7684\uff0c\u56e0\u4e3a\u8fd8\u4e0d\u652f\u6301",(0,r.jsx)(n.a,{href:"https://baike.baidu.com/item/%E5%85%83%E7%BC%96%E7%A8%8B/6846171",children:"\u5143\u7f16\u7a0b"}),"\u3002\u8fd9\u4e5f\u5c31\u662f\u4e3a\u4ec0\u4e48 Vue2 \u4e2d",(0,r.jsx)(n.a,{href:"https://cn.vuejs.org/v2/guide/reactivity.html#%E5%AF%B9%E4%BA%8E%E5%AF%B9%E8%B1%A1",children:"\u5bf9\u4e8e\u5bf9\u8c61"}),"\u65e0\u6cd5\u76d1\u542c\u5230 data \u7684\u67d0\u4e2a\u5c5e\u6027\u589e\u52a0\u4e0e\u5220\u9664\u4e86"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var vm = new Vue({\n  data: {\n    a: 1,\n  },\n})\n\n// `vm.a` \u662f\u54cd\u5e94\u5f0f\u7684\n\nvm.b = 2\n// `vm.b` \u662f\u975e\u54cd\u5e94\u5f0f\u7684\n"})}),"\n",(0,r.jsx)(n.h2,{id:"proxy-\u4e0e-reflect",children:"Proxy \u4e0e Reflect"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f46\u5728 ES6 \u4e2d\u63d0\u4f9b\u4e86 Proxy \u53ef\u4ee5\u5b9e\u73b0\u5143\u7f16\u7a0b\uff0c\u540c\u65f6 Vue3 \u4e5f\u4f7f\u7528 Proxy \u6765\u91cd\u5199",(0,r.jsx)(n.a,{href:"https://v3.cn.vuejs.org/guide/reactivity.html",children:"\u54cd\u5e94\u5f0f\u7cfb\u7edf"}),"\u3002\u6240\u4ee5\u5c31\u5f88\u6709\u5fc5\u8981\u53bb\u4e86\u89e3\u8be5 API"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function reactive(target) {\n  return new Proxy(target, {\n    get(target, key) {\n      const res = target[key]\n      console.log('GET', key, res)\n      return res\n    },\n    set(target, key, newValue) {\n      target[key] = newValue\n      console.log('SET', key, newValue)\n    },\n    deleteProperty(target, key) {\n      console.log('DELETE', key)\n      delete target[key]\n    },\n  })\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4f46\u4e0a\u8ff0\u5199\u6cd5\u4e2d\u4f7f\u7528\u4e86",(0,r.jsx)(n.code,{children:"target[key]"})," \u662f\u80fd\u83b7\u53d6\u5230 target \u7684\u503c\uff0c\u4f46\u53ef\u80fd\u4f1a\u5b58\u5728\u4e00\u5b9a\u9690\u60a3\uff08\u5982 this \u95ee\u9898\uff09\uff0c\u6240\u4ee5\u66f4\u63a8\u8350\u4f7f\u7528",(0,r.jsx)(n.code,{children:"Reflect"}),"\u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function reactive(target) {\n  return new Proxy(target, {\n    get(target, key, receiver) {\n      const res = Reflect.get(target, key, receiver)\n      console.log('GET', key, res)\n      return res\n    },\n    set(target, key, newValue, receiver) {\n      const res = Reflect.set(target, key, newValue, receiver)\n      console.log('SET', key, newValue)\n      return res\n    },\n    deleteProperty(target, key) {\n      const res = Reflect.deleteProperty(target, key)\n      console.log('DELETE', key)\n\n      return res\n    },\n  })\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8c03\u7528\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const target = {\n  foo: 1,\n  bar: 1,\n}\n\nlet p = reactive(target)\np.foo++\ndelete p.bar\n\nconsole.log(target)\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8f93\u51fa\u5185\u5bb9\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET foo 1\nSET foo 2\nDELETE bar\n{ foo: 2 }\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5176\u4e2d\u8fd9\u91cc\u7684 get,set,deleteProperty \u53ef\u4ee5\u62e6\u622a\u5230\u5bf9\u8c61\u5c5e\u6027\u7684\u53d6\u503c\uff0c\u8d4b\u503c\u4e0e\u5220\u9664\u7684\u64cd\u4f5c\u3002\u76f8\u6bd4 Object.defineproperty \u9664\u4e86\u597d\u7528\u5916\uff0c\u53ef\u64cd\u4f5c\u7a7a\u95f4\u4e5f\u5927\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"this-\u95ee\u9898",children:(0,r.jsx)(n.a,{href:"https://es6.ruanyifeng.com/#docs/proxy#this-%E9%97%AE%E9%A2%98",children:"this \u95ee\u9898"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c target \u5bf9\u8c61\u5b58\u5728 this\uff0c\u90a3\u4e48\u4e0d\u505a\u4efb\u4f55\u62e6\u622a\u7684\u60c5\u51b5\u4e0b\uff0ctarget \u7684 this \u6240\u6307\u5411\u7684\u662f target\uff0c\u800c\u4e0d\u662f\u4ee3\u7406\u5bf9\u8c61 proxy"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const target = {\n  m: function () {\n    console.log(this === proxy)\n  },\n}\nconst handler = {}\n\nconst proxy = new Proxy(target, handler)\n\ntarget.m() // false\nproxy.m() // true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5177\u4f53\u53ef\u770b\uff1a",(0,r.jsx)(n.a,{href:"https://es6.ruanyifeng.com/#docs/proxy#this-%E9%97%AE%E9%A2%98",children:"this \u95ee\u9898"})]}),"\n",(0,r.jsx)(n.h3,{id:"\u533a\u522b\u589e\u52a0\u548c\u4fee\u6539",children:"\u533a\u522b\u589e\u52a0\u548c\u4fee\u6539"}),"\n",(0,r.jsx)(n.p,{children:"\u5bf9\u8c61\u5c5e\u6027\u589e\u52a0\u8fd8\u662f\u4fee\u6539\u90fd\u4f1a\u89e6\u53d1 set\uff0c\u6240\u4ee5\u9700\u8981\u5728 set \u4e2d\u533a\u522b\u589e\u52a0\u548c\u4fee\u6539\uff0c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:"{6}",children:"function reactive(target) {\n  return new Proxy(target, {\n    set(target, key, newVal, receiver) {\n      const oldVal = target[key]\n\n      const type = Object.prototype.hasOwnProperty.call(target, key) ? 'SET' : 'ADD'\n      const res = Reflect.set(target, key, newVal, receiver)\n\n      if (oldVal !== newVal) {\n        console.log(type, key, newValue)\n      }\n\n      return res\n    },\n  })\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u6df1\u54cd\u5e94",children:"\u6df1\u54cd\u5e94"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u6570\u636e\u542b\u591a\u5c42\u5bf9\u8c61\uff0c\u50cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const p = reactive({ foo: { bar: 1 } })\n\n// \u5c06\u4e0d\u4f1a\u89e6\u53d1\np.foo.bar = 2\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u9700\u8981\u5c06 get \u4e2d\u5305\u88c5\u4e3a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:"{6-9}",children:"function reactive(target) {\n  return new Proxy(target, {\n    get(target, key, receiver) {\n      const res = Reflect.get(target, key, receiver)\n\n      if (typeof res === 'object' && res !== null) {\n        // \u5c06\u5176\u5305\u88c5\u6210\u54cd\u5e94\u5f0f\u6570\u636e\n        return reactive(res)\n      }\n\n      console.log('GET', key, res)\n      return res\n    },\n  })\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6700\u7ec8\u4ee3\u7801",children:"\u6700\u7ec8\u4ee3\u7801"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u7a0d\u52a0\u5bf9 console.log \u8fdb\u884c\u5c01\u88c5\uff0c\u6700\u7ec8\u5b9e\u73b0\u5bf9 Object \u4ee3\u7406\u7684\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const target = {\n  foo: 1,\n  bar: 1,\n}\n\nfunction log(type, key, val) {\n  console.log(type, key, val)\n}\n\nfunction reactive(target) {\n  return new Proxy(target, {\n    get(target, key, receiver) {\n      const res = Reflect.get(target, key, receiver)\n\n      if (typeof res === 'object' && res !== null) {\n        return reactive(res)\n      }\n\n      log('GET', key, res)\n      return res\n    },\n    set(target, key, newVal, receiver) {\n      const oldVal = target[key]\n\n      const type = Object.prototype.hasOwnProperty.call(target, key) ? 'SET' : 'ADD'\n      const res = Reflect.set(target, key, newVal, receiver)\n\n      if (oldVal !== newVal) {\n        log(type, key, newVal)\n      }\n\n      return res\n    },\n    deleteProperty(target, key) {\n      const hadKey = Object.prototype.hasOwnProperty.call(target, key)\n\n      const res = Reflect.deleteProperty(target, key)\n\n      if (res && hadKey) {\n        log('DELETE', key, res)\n      }\n\n      return res\n    },\n  })\n}\n\nconst p = reactive(target)\np.a = 1\np.foo++\ndelete p.bar\n\nconsole.log(target)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u7136\uff0c\u53ef\u4ee5\u5c06 log \u51fd\u6570\u7684\u8fdb\u4e00\u6b65\u7684\u5c01\u88c5\uff0c\u5982 Vue3 \u4e2d get \u65b9\u6cd5\u7684",(0,r.jsx)(n.em,{children:"track"}),"\uff0cset \u65b9\u6cd5\u4e2d\u7684",(0,r.jsx)(n.em,{children:"trigger"}),"\u3002\u66f4\u597d\u7684\u76d1\u542c\u6570\u636e\u53d8\u5316\u4ee5\u53ca\u6267\u884c\u81ea\u5b9a\u4e49\u51fd\u6570\u7b49\u7b49\uff0c\u8fd9\u91cc\u53ea\u8c08\u8bba\u76d1\u542c\u6570\u636e\u53d8\u5316\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u6b64\u5916 Proxy \u8fd8\u4e0d\u53ea\u6709\u76d1\u542c\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u8fd8\u53ef\u4ee5\u76d1\u542c\u5bf9\u8c61\u65b9\u6cd5\u7b49\u7b49\uff0c\u5177\u4f53\u53ef\u5728",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy",children:"MDN"}),"\u4e2d\u67e5\u8be2\u76f8\u5bf9\u4e8e\u7684\u62e6\u622a\u5668\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://es6.ruanyifeng.com/#docs/proxy",children:"Proxy - ECMAScript 6 \u5165\u95e8 (ruanyifeng.com)"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy",children:"Proxy() \u6784\u9020\u5668 - JavaScript | MDN (mozilla.org)"})}),"\n",(0,r.jsx)(n.p,{children:"\u300aVue.js \u8bbe\u8ba1\u4e0e\u5b9e\u73b0\u300b"}),"\n",(0,r.jsx)(n.p,{children:"\u300a\u6df1\u5165\u6d45\u51fa Vue.js\u300b"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(96540);const a={},c=r.createContext(a);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);