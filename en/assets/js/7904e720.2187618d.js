"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[41497],{83125:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var i=t(74848),s=t(28453);const l={slug:"vue-chrome-extension",title:"\u4f7f\u7528Vue\u5f00\u53d1Chrome\u63d2\u4ef6",date:new Date("2021-09-18T00:00:00.000Z"),authors:"kuizuo",tags:["chrome","plugin","vue","develop"],keywords:["chrome","plugin","vue","develop"],description:"\u4f7f\u7528 Vue2 \u5f00\u53d1\u4e00\u4e2a Chrome \u63d2\u4ef6",image:"/img/blog/vue-chrome-extension.png"},o=void 0,r={permalink:"/en/blog/vue-chrome-extension",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/program/\u4f7f\u7528Vue\u5f00\u53d1Chrome\u63d2\u4ef6.md",source:"@site/blog/program/\u4f7f\u7528Vue\u5f00\u53d1Chrome\u63d2\u4ef6.md",title:"\u4f7f\u7528Vue\u5f00\u53d1Chrome\u63d2\u4ef6",description:"\u4f7f\u7528 Vue2 \u5f00\u53d1\u4e00\u4e2a Chrome \u63d2\u4ef6",date:"2021-09-18T00:00:00.000Z",formattedDate:"September 18, 2021",tags:[{label:"chrome",permalink:"/en/blog/tags/chrome"},{label:"plugin",permalink:"/en/blog/tags/plugin"},{label:"vue",permalink:"/en/blog/tags/vue"},{label:"develop",permalink:"/en/blog/tags/develop"}],readingTime:10.12,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/en/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"vue-chrome-extension",title:"\u4f7f\u7528Vue\u5f00\u53d1Chrome\u63d2\u4ef6",date:"2021-09-18T00:00:00.000Z",authors:"kuizuo",tags:["chrome","plugin","vue","develop"],keywords:["chrome","plugin","vue","develop"],description:"\u4f7f\u7528 Vue2 \u5f00\u53d1\u4e00\u4e2a Chrome \u63d2\u4ef6",image:"/img/blog/vue-chrome-extension.png"},unlisted:!1,prevItem:{title:"\u4f7f\u7528JSONPath\u89e3\u6790json\u6570\u636e",permalink:"/en/blog/use-jsonpath-to-parse-json-data"},nextItem:{title:"MongoDB\u6309\u65f6\u95f4\u5206\u7ec4",permalink:"/en/blog/mongodb-time-grouping"}},c={authorsImageUrls:[void 0]},a=[{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",level:2},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:3},{value:"\u5b89\u88c5\u7ec4\u4ef6\u5e93",id:"\u5b89\u88c5\u7ec4\u4ef6\u5e93",level:3},{value:"\u5b89\u88c5 elementUI",id:"\u5b89\u88c5-elementui",level:4},{value:"\u5b89\u88c5 tailwindcss",id:"\u5b89\u88c5-tailwindcss",level:4},{value:"\u9879\u76ee\u642d\u5efa",id:"\u9879\u76ee\u642d\u5efa",level:2},{value:"\u9875\u9762\u642d\u5efa",id:"\u9875\u9762\u642d\u5efa",level:3},{value:"\u60ac\u6d6e\u7a97",id:"\u60ac\u6d6e\u7a97",level:3},{value:"\u529f\u80fd\u5b9e\u73b0",id:"\u529f\u80fd\u5b9e\u73b0",level:3},{value:"\u8f93\u51fa\u76f8\u5173\u4fe1\u606f",id:"\u8f93\u51fa\u76f8\u5173\u4fe1\u606f",level:4},{value:"\u5b9e\u73b0\u8bc4\u8bba",id:"\u5b9e\u73b0\u8bc4\u8bba",level:4},{value:"\u76f8\u5173\u6a21\u677f",id:"\u76f8\u5173\u6a21\u677f",level:2},{value:"\u6574\u4f53\u4f53\u9a8c",id:"\u6574\u4f53\u4f53\u9a8c",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...n.components},{Details:t}=e;return t||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u6211\u5f53\u65f6\u5b66\u4e60\u5f00\u53d1 Chrome \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u8fd8\u4e0d\u4f1a Vue\uff0c\u66f4\u522b\u8bf4 Webpack \u4e86\uff0c\u6240\u4ee5\u4f7f\u7528\u7684\u90fd\u662f\u539f\u751f\u7684 html \u5f00\u53d1\uff0c\u6548\u7387\u5c31\u4e0d\u63d0\u4e86\uff0c\u800c\u8fd9\u6b21\u5c31\u51c6\u5907\u4f7f\u7528 vue-cli \u6765\u8fdb\u884c\u7f16\u5199\u4e00\u4e2a\u67d0 B \u7ad9\u83b7\u53d6\u89c6\u9891\u4fe1\u606f,\u8bc4\u8bba\u7684\u529f\u80fd\uff08\u539f\u672c\u662f\u6253\u7b97\u505a\u81ea\u52a8\u56de\u590d\u7684\uff09\uff0c\u987a\u4fbf\u5de9\u56fa\u4e0b chrome \u5f00\u53d1\uff08\u5feb\u4e00\u5e74\u6ca1\u78b0\u811a\u672c\u7c7b\u76f8\u5173\u6280\u672f\u4e86\uff09\uff0c\u987a\u4fbf\u5199\u5957\u6a21\u677f\u4f9b\u81ea\u5df1\u540e\u7eed\u7f16\u5199 Chrome \u63d2\u4ef6\u505a\u94fa\u57ab\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u73af\u5883\u642d\u5efa",children:"\u73af\u5883\u642d\u5efa"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://vue-web-extension.netlify.app/",children:"Vue Web-Extension - A Web-Extension preset for VueJS (vue-web-extension.netlify.app)"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"npm install -g @vue/cli\nnpm install -g @vue/cli-init\nvue create --preset kocal/vue-web-extension my-extension\ncd my-extension\nnpm run server\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f1a\u63d0\u4f9b\u51e0\u4e2a\u9009\u9879\uff0c\u5982 Eslint\uff0cbackground.js\uff0ctab \u9875\uff0caxios\uff0c\u5982\u4e0b\u56fe"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210916142751129.png",alt:"image-20210916142751129"})}),"\n",(0,i.jsx)(e.p,{children:"\u9009\u62e9\u5b8c\u540e\uff0c\u5c06\u4f1a\u81ea\u52a8\u4e0b\u8f7d\u4f9d\u8d56\uff0c\u901a\u8fc7 npm run server \u5c06\u4f1a\u5728\u6839\u76ee\u5f55\u751f\u6210 dist \u6587\u4ef6\u5939\uff0c\u5c06\u8be5\u6587\u4ef6\u62d6\u81f3 Chrome \u63d2\u4ef6\u7ba1\u7406\u4fbf\u53ef\u5b89\u88c5\uff0c\u7531\u4e8e\u4f7f\u7528\u4e86 webpack\uff0c\u6240\u4ee5\u66f4\u6539\u4ee3\u7801\u5c06\u4f1a\u70ed\u66f4\u65b0\uff0c\u4e0d\u7528\u53cd\u590d\u7684\u7f16\u8bd1\u5bfc\u5165\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u9879\u76ee\u7ed3\u6784",children:"\u9879\u76ee\u7ed3\u6784"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-tree",children:"\u251c\u2500src\n|  \u251c\u2500App.vue\n|  \u251c\u2500background.js\n|  \u251c\u2500main.js\n|  \u251c\u2500manifest.json\n|  \u251c\u2500views\n|  |   \u251c\u2500About.vue\n|  |   \u2514Home.vue\n|  \u251c\u2500store\n|  |   \u2514index.js\n|  \u251c\u2500standalone\n|  |     \u251c\u2500App.vue\n|  |     \u2514main.js\n|  \u251c\u2500router\n|  |   \u2514index.js\n|  \u251c\u2500popup\n|  |   \u251c\u2500App.vue\n|  |   \u2514main.js\n|  \u251c\u2500override\n|  |    \u251c\u2500App.vue\n|  |    \u2514main.js\n|  \u251c\u2500options\n|  |    \u251c\u2500App.vue\n|  |    \u2514main.js\n|  \u251c\u2500devtools\n|  |    \u251c\u2500App.vue\n|  |    \u2514main.js\n|  \u251c\u2500content-scripts\n|  |        \u2514content-script.js\n|  \u251c\u2500components\n|  |     \u2514HelloWorld.vue\n|  \u251c\u2500assets\n|  |   \u2514logo.png\n\u251c\u2500public\n\u251c\u2500.browserslistrc\n\u251c\u2500.eslintrc.js\n\u251c\u2500.gitignore\n\u251c\u2500babel.config.js\n\u251c\u2500package.json\n\u251c\u2500vue.config.js\n\u251c\u2500yarn.lock\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6839\u636e\u6240\u9009\u7684\u9875\u9762\uff0c\u5e76\u5728 src \u4e0e vue.config.js \u4e2d\u914d\u7f6e\u9875\u9762\u4fe1\u606f\u7f16\u8bd1\u540e dist \u76ee\u5f55\u7ed3\u6784\u5982\u4e0b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\u251c\u2500devtools.html\n\u251c\u2500favicon.ico\n\u251c\u2500index.html\n\u251c\u2500manifest.json\n\u251c\u2500options.html\n\u251c\u2500override.html\n\u251c\u2500popup.html\n\u251c\u2500_locales\n\u251c\u2500js\n\u251c\u2500icons\n\u251c\u2500css\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u5b89\u88c5\u7ec4\u4ef6\u5e93",children:"\u5b89\u88c5\u7ec4\u4ef6\u5e93"}),"\n",(0,i.jsx)(e.h4,{id:"\u5b89\u88c5-elementui",children:"\u5b89\u88c5 elementUI"}),"\n",(0,i.jsx)(e.p,{children:"\u6574\u4f53\u7684\u5f00\u53d1\u548c vue2 \u5f00\u53d1\u57fa\u672c\u4e0a\u6ca1\u592a\u5927\u7684\u533a\u522b\uff0c\u4e0d\u8fc7\u65e2\u7136\u662f\u7528 vue \u6765\u5f00\u53d1\u7684\u8bdd\uff0c\u90a3\u80af\u5b9a\u5c11\u4e0d\u4e86\u7ec4\u4ef6\u5e93\u4e86\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u8981\u5bfc\u5165 Element-ui \u4e5f\u5341\u5206\u7b80\u5355\uff0c",(0,i.jsx)(e.code,{children:"Vue.use(ElementUI); "}),"Vue2 \u4e2d\u600e\u4e48\u5bfc\u5165 element\uff0c\u4fbf\u600e\u4e48\u5bfc\u5165\u3002\u6f14\u793a\u5982\u4e0b"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210916150154078.png",alt:"image-20210916150154078"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u8fc7\u6211\u6ca1\u6709\u4f7f\u7528 babel-plugin-component \u6765\u6309\u9700\u5f15\u5165\uff0c\u6309\u9700\u5f15\u5165\u4e00\u4e2a\u6309\u94ae\u6253\u5305\u540e\u5927\u7ea6 1.6m\uff0c\u800c\u5168\u91cf\u5f15\u5165\u5219\u662f 5.5 \u5de6\u53f3\u3002\u81f3\u4e8e\u4e3a\u4ec0\u4e48\u4e0d\u7528\uff0c\u56e0\u4e3a\u6211\u9700\u8981\u5728 content-scripts.js \u4e2d\u5f15\u5165 element \u7ec4\u4ef6\uff0c\u5982\u679c\u4f7f\u7528 babel-plugin-component \u5c06\u65e0\u6cd5\u6309\u9700\u5bfc\u5165\u7ec4\u4ef6\u4ee5\u53ca\u6837\u5f0f\uff08\u5e94\u8be5\u662f\u53ea\u652f\u6301 vue \u6587\u4ef6\u6309\u9700\u5f15\u5165\uff0c\u603b\u4e4b\u5c31\u662f\u6298\u817e\u4e86\u6211\u4e00\u4e2a\u665a\u4e0a\u7684\u65f6\u95f4\uff09"}),"\n",(0,i.jsx)(e.h4,{id:"\u5b89\u88c5-tailwindcss",children:"\u5b89\u88c5 tailwindcss"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u8fc7\u5b98\u65b9\u63d0\u4f9b\u4e86\u5982\u4f55\u4f7f\u7528 TailwindCSS\uff0c\u8fd9\u91cc\u5c31\u6f14\u793a\u4e00\u4e0b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://www.tailwindcss.cn/docs/guides/vue-3-vite",children:"\u5728 Vue 3 \u548c Vite \u5b89\u88c5 Tailwind CSS - Tailwind CSS \u4e2d\u6587\u6587\u6863"})}),"\n",(0,i.jsx)(e.p,{children:"\u63a8\u8350\u5b89\u88c5\u4f4e\u7248\u672c\uff0c\u6700\u65b0\u7248\u6709\u517c\u5bb9\u6027\u95ee\u9898"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa postcss.config.js \u6587\u4ef6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="postcss.config.js"',children:"// postcss.config.js\nmodule.exports = {\n  plugins: [\n    // ...\n    require('tailwindcss'),\n    require('autoprefixer'), // if you have installed `autoprefixer`\n    // ...\n  ],\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa tailwind.config.js \u6587\u4ef6"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="tailwind.config.js"',children:"// tailwind.config.js\nmodule.exports = {\n  purge: {\n    // Specify the paths to all of the template files in your project\n    content: ['src/**/*.vue'],\n\n    // Whitelist selectors by using regular expression\n    whitelistPatterns: [\n      /-(leave|enter|appear)(|-(to|from|active))$/, // transitions\n      /data-v-.*/, // scoped css\n    ],\n  },\n  // ...\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 src/popup/App.vue \u4e2d\u5bfc\u5165\u6837\u5f0f\uff0c\u6216\u5728\u65b0\u5efa style.css \u5728 mian.js \u4e2d",(0,i.jsx)(e.code,{children:'import "../style.css";'})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-vue",metastring:'title="src/popup/App.vue"',children:"<style>\n/* purgecss start ignore */\n@tailwind base;\n@tailwind components;\n/* purgecss end ignore */\n\n@tailwind utilities;\n</style>\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ece\u5b98\u65b9\u4f8b\u5b50\u5bfc\u5165\u4e00\u4e2a\u767b\u9646\u8868\u5355\uff0c\u6548\u679c\u5982\u4e0b"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210916152633247.png",alt:"image-20210916152633247"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9879\u76ee\u642d\u5efa",children:"\u9879\u76ee\u642d\u5efa"}),"\n",(0,i.jsx)(e.h3,{id:"\u9875\u9762\u642d\u5efa",children:"\u9875\u9762\u642d\u5efa"}),"\n",(0,i.jsx)(e.p,{children:"\u9875\u9762\u642d\u5efa\u5c31\u6ca1\u4ec0\u4e48\u597d\u8bf4\u7684\u4e86\uff0c\u56e0\u4e3a\u4f7f\u7528\u7684\u662f element-ui\uff0c\u6240\u4ee5\u9875\u9762\u5f88\u5feb\u5c31\u642d\u5efa\u5b8c\u6bd5\u4e86\uff0c\u6548\u679c\u5982\u56fe"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210918115438700.png",alt:"image-20210918115438700"})}),"\n",(0,i.jsx)(e.h3,{id:"\u60ac\u6d6e\u7a97",children:"\u60ac\u6d6e\u7a97"}),"\n",(0,i.jsx)(e.p,{children:"\u60ac\u6d6e\u7a97\u5176\u5b9e\u53ef\u6709\u53ef\u65e0\uff0c\u4e0d\u8fc7\u4e4b\u524d\u5199 Chrome \u63d2\u4ef6\u7684\u65f6\u5019\u5c31\u5199\u4e86\u60ac\u6d6e\u7a97\uff0c\u6240\u4ee5 vue \u7248\u7684\u4e5f\u987a\u5e26\u5199\u4e00\u4efd\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u8981\u6ce8\u610f\u7684\u662f\u60ac\u6d6e\u7a97\u662f\u5185\u5d4c\u5230\u7f51\u9875\u7684\uff08\u4e14\u5728 document \u52a0\u8f7d\u524d\u8f7d\u5165\uff0c\u4e5f\u5c31\u662f",(0,i.jsx)(e.code,{children:'"run_at": "document_start"'}),"\uff09\uff0c\u6240\u4ee5\u9700\u8981\u901a\u8fc7 content-scripts.js \u624d\u80fd\u64cd\u4f5c\u9875\u9762 Dom \u5143\u7d20\uff0c\u9996\u5148\u5728\u914d\u7f6e\u6e05\u5355 manifest.json \u4e0e vue.confing.js \u4e2d\u5339\u914d\u8981\u6dfb\u52a0\u7684\u7f51\u7ad9\uff0c\u4ee5\u53ca\u6ce8\u5165\u7684 js \u4ee3\u7801\uff0c\u5982\u4e0b"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",metastring:'title="manifest.json"',children:'  "content_scripts": [\n    {\n      "matches": ["https://www.bilibili.com/video/*"],\n      "js": ["js/jquery.js", "js/content-script.js"],\n      "css": ["css/index.css"],\n      "run_at": "document_start"\n    },\n    {\n      "matches": ["https://www.bilibili.com/video/*"],\n      "js": ["js/jquery.js", "js/bilibili.js"],\n      "run_at": "document_end"\n    }\n  ]\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="vue.config.js"',children:"\tcontentScripts: {\n          entries: {\n            'content-script': ['src/content-scripts/content-script.js'],\n            bilibili: ['src/content-scripts/bilibili.js'],\n          },\n        },\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u7531\u4e8e\u662f\u7528 Vue\uff0c\u4f46\u53c8\u8981\u5728 js \u4e2d\u751f\u6210\u7ec4\u4ef6\uff0c\u5c31\u4f7f\u7528",(0,i.jsx)(e.code,{children:"document.createElement"}),"\u6765\u8fdb\u884c\u521b\u5efa\u5143\u7d20\uff0cVue \u7ec4\u4ef6\u5982\u4e0b\uff08\u53ef\u62d6\u62fd\uff09"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210917142340863.png",alt:"image-20210917142340863"})}),"\n",(0,i.jsxs)(e.admonition,{type:"warning",children:[(0,i.jsxs)(e.p,{children:["\u5982\u679c\u4f7f\u7528",(0,i.jsx)(e.code,{children:"babel-plugin-component"}),"\u6309\u9700\u5f15\u5165\uff0c\u7ec4\u4ef6\u7684\u6837\u5f0f\u5c06\u65e0\u6cd5\u8f7d\u5165\uff0c\u540c\u65f6\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5982\u679c\u7f16\u5199\u4e86 style \u6807\u7b7e\uff0c\u90a3\u4e48\u4e5f\u540c\u6837\u65e0\u6cd5\u8f7d\u5165\uff0c\u62a5\u9519\uff1aCannot read properties of undefined (reading 'appendChild')"]}),(0,i.jsx)(e.p,{children:"\u5927\u81f4\u5c31\u662f css-loader \u65e0\u6cd5\u52a0\u8f7d\u5bf9\u5e94\u7684 css \u4ee3\u7801\uff0c\u5982\u679c\u6267\u610f\u8981\u5199 css \u7684\u8bdd\uff0c\u76f4\u63a5\u5728 manifest.json \u4e2d\u6ce8\u5165 css \u5373\u53ef"})]}),"\n",(0,i.jsxs)(t,{open:!0,children:[(0,i.jsx)("summary",{children:"\u5b8c\u6574\u4ee3\u7801"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="content-script.js"',children:"// \u6ce8\u610f\uff0c\u8fd9\u91cc\u5f15\u5165\u7684vue\u662f\u8fd0\u884c\u65f6\u7684\u6a21\u5757\uff0c\u56e0\u4e3acontent\u662f\u63d2\u5165\u5230\u76ee\u6807\u9875\u9762\uff0c\u5bf9\u7ec4\u4ef6\u7684\u6e32\u67d3\u9700\u8981\u8fd0\u884c\u65f6\u7684vue\uff0c \u800c\u4e0d\u662f\u7f16\u8bd1\u73af\u5883\u7684vue \uff08\u6211\u4e5f\u4e0d\u77e5\u9053\u6211\u5728\u8bf4\u5565\uff0c\u53cd\u6b63\u5927\u6982\u610f\u601d\u5c31\u662f\u8fd9\u6837\uff09\nimport Vue from 'vue/dist/vue.esm.js'\nimport ElementUI, { Message } from 'element-ui'\nVue.use(ElementUI)\n\n// \u6ce8\u610f\uff0c\u5fc5\u987b\u8bbe\u7f6e\u4e86run_at=document_start\u6b64\u6bb5\u4ee3\u7801\u624d\u4f1a\u751f\u6548\ndocument.addEventListener('DOMContentLoaded', function () {\n  console.log('vue-chrome\u6269\u5c55\u5df2\u8f7d\u5165')\n\n  insertFloat()\n})\n\n// \u5728target\u9875\u9762\u4e2d\u65b0\u5efa\u4e00\u4e2a\u5e26\u6709id\u7684dom\u5143\u7d20\uff0c\u5c06vue\u5bf9\u8c61\u6302\u8f7d\u5230\u8fd9\u4e2adom\u4e0a\u3002\nfunction insertFloat() {\n  let element = document.createElement('div')\n  let attr = document.createAttribute('id')\n  attr.value = 'appPlugin'\n  element.setAttributeNode(attr)\n  document.getElementsByTagName('body')[0].appendChild(element)\n\n  let link = document.createElement('link')\n  let linkAttr = document.createAttribute('rel')\n  linkAttr.value = 'stylesheet'\n  let linkHref = document.createAttribute('href')\n  linkHref.value = 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'\n  link.setAttributeNode(linkAttr)\n  link.setAttributeNode(linkHref)\n  document.getElementsByTagName('head')[0].appendChild(link)\n\n  let left = 0\n  let top = 0\n  let mx = 0\n  let my = 0\n  let onDrag = false\n\n  var drag = {\n    inserted: function (el) {\n      ;(el.onmousedown = function (e) {\n        left = el.offsetLeft\n        top = el.offsetTop\n        mx = e.clientX\n        my = e.clientY\n        if (my - top > 40) return\n\n        onDrag = true\n      }),\n        (window.onmousemove = function (e) {\n          if (onDrag) {\n            let nx = e.clientX - mx + left\n            let ny = e.clientY - my + top\n            let width = el.clientWidth\n            let height = el.clientHeight\n            let bodyWidth = window.document.body.clientWidth\n            let bodyHeight = window.document.body.clientHeight\n\n            if (nx < 0) nx = 0\n            if (ny < 0) ny = 0\n\n            if (ny > bodyHeight - height && bodyHeight - height > 0) {\n              ny = bodyHeight - height\n            }\n\n            if (nx > bodyWidth - width) {\n              nx = bodyWidth - width\n            }\n\n            el.style.left = nx + 'px'\n            el.style.top = ny + 'px'\n          }\n        }),\n        (el.onmouseup = function (e) {\n          if (onDrag) {\n            onDrag = false\n          }\n        })\n    },\n  }\n\n  window.kz_vm = new Vue({\n    el: '#appPlugin',\n    directives: {\n      drag: drag,\n    },\n    template: `\n      <div class=\"float-page\" ref=\"float\" v-drag>\n        <el-card class=\"box-card\" :body-style=\"{ padding: '15px' }\">\n          <div slot=\"header\" class=\"clearfix\" style=\"cursor: move\">\n            <span>\u60ac\u6d6e\u7a97</span>\n            <el-button style=\"float: right; padding: 3px 0\" type=\"text\" @click=\"toggle\">{{ show ? '\u6536\u8d77' : '\u5c55\u5f00'}}</el-button>\n          </div>\n          <transition name=\"ul\">\n            <div v-if=\"show\" class=\"ul-box\">\n              <span> {{user}} </span>\n            </div>\n          </transition>\n        </el-card>\n      </div>\n      `,\n    data: function () {\n      return {\n        show: true,\n        list: [],\n        user: {\n          username: '',\n          follow: 0,\n          title: '',\n          view: 0,\n        },\n      }\n    },\n    mounted() {},\n    methods: {\n      toggle() {\n        this.show = !this.show\n      },\n    },\n  })\n}\n"})})]}),"\n",(0,i.jsxs)(e.p,{children:["\u56e0\u4e3a\u53ea\u80fd\u5728 js \u4e2d\u7f16\u5199 vue \u7ec4\u4ef6\uff0c\u6240\u4ee5\u5f97\u7528 template \u6a21\u677f\uff0c\u540c\u65f6\u4f7f\u7528\u4e86 directives\uff0c\u7ed9\u7ec4\u4ef6\u6dfb\u52a0\u4e86\u62d6\u62fd\u7684\u529f\u80fd\uff08\u5c24\u5176\u662f",(0,i.jsx)(e.code,{children:"window.onmousemove"}),"\uff0c\u5982\u679c\u662f\u5143\u7d20\u7ed1\u5b9a\u4ed6\u81ea\u8eab\u7684\u9f20\u6807\u79fb\u52a8\u4e8b\u4ef6\uff0c\u90a3\u4e48\u62d6\u62fd\u9f20\u6807\u5c06\u4f1a\u5341\u5206\u5361\u987f\uff09\uff0c\u8fd8\u4f7f\u7528\u4e86 transition \u6765\u8fdb\u884c\u7f13\u6162\u52a8\u753b\u6548\u679c\u5176\u4e2d\u6ce8\u5165\u7684 css \u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-css",children:".float-page {\n  width: 400px;\n  border-radius: 8px;\n  position: fixed;\n  left: 50%;\n  top: 25%;\n  z-index: 1000001;\n}\n\n.el-card__header {\n  padding: 10px 15px !important;\n}\n\n.ul-box {\n  height: 200px;\n  overflow: hidden;\n}\n\n.ul-enter-active,\n.ul-leave-active {\n  transition: all 0.5s;\n}\n.ul-enter,\n.ul-leave-to {\n  height: 0;\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u76f8\u5173\u903b\u8f91\u53ef\u81ea\u884c\u89c2\u770b\uff0c\u8fd9\u91cc\u4e0d\u5728\u8d58\u8ff0\u4e86\uff0c\u5e76\u4e0d\u590d\u6742\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4e5f\u987a\u5e26\u662f\u590d\u4e60\u4e00\u4e0b HTML \u4e2d\u9f20\u6807\u4e8b\u4ef6\u548c vue \u81ea\u5b9a\u4e49\u547d\u4ee4\u4e86"}),"\n",(0,i.jsx)(e.h3,{id:"\u529f\u80fd\u5b9e\u73b0",children:"\u529f\u80fd\u5b9e\u73b0"}),"\n",(0,i.jsx)(e.p,{children:"\u4e3b\u8981\u529f\u80fd"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u68c0\u6d4b\u89c6\u9891\u9875\u9762\uff0c\u8f93\u51fa\u5bf9\u5e94 up \u4e3b\uff0c\u5173\u6ce8\u6570\u4ee5\u53ca\u89c6\u9891\u6807\u9898\u64ad\u653e\uff08\u53c2\u6570\u8fc7\u591a\u5c31\u4e0d\u4e00\u4e00\u663e\u793a\u4e86\uff09"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u76d1\u63a7\u5173\u952e\u8bcd\u6839\u636e\u5185\u5bb9\u5224\u65ad\u662f\u5426\u70b9\u8d5e\uff0c\u4f8b\u5982\u6587\u672c\u51fa\u73b0\u4e86\u4e0b\u6b21\u4e00\u5b9a\uff0c\u90a3\u4e48\u5c31\u70b9\u8d5e\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u8f93\u51fa\u76f8\u5173\u4fe1\u606f",children:"\u8f93\u51fa\u76f8\u5173\u4fe1\u606f"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e2a\u5176\u5b9e\u53ea\u8981\u63a5\u89e6\u8fc7\u4e00\u4e22\u4e22\u722c\u866b\u7684\u80af\u5b9a\u90fd\u4f1a\u77e5\u9053\u5982\u4f55\u5b9e\u73b0\uff0c\u901a\u8fc7\u53f3\u952e\u5ba1\u67e5\u5143\u7d20\uff0c\u50cf\u8fd9\u6837"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210918104907148.png",alt:"image-20210918104907148"})}),"\n",(0,i.jsx)(e.p,{children:"\u7136\u540e\u4f7f\u7528 dom \u64cd\u4f5c\uff0c\u9009\u62e9\u5bf9\u5e94\u7684\u5143\u7d20\uff0c\u8f93\u51fa\u4fbf\u53ef"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"> document.querySelector(\"#v_upinfo > div.up-info_right > div.name > a.username\").innerText\n< '\u8001\u756a\u8304'\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u7136\u4f7f\u7528 JQuery \u6548\u679c\u4e5f\u662f\u4e00\u6837\u7684\u3002\u540e\u7eed\u6211\u90fd\u4f1a\u4f7f\u7528 JQuery \u6765\u8fdb\u884c\u64cd\u4f5c"}),"\n",(0,i.jsx)(e.p,{children:"\u5728 src/content-script/bilibili.js \u4e2d\u5199\u4e0b\u5982\u4e0b\u4ee3\u7801"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"window.onload = function () {\n  console.log('\u52a0\u8f7d\u5b8c\u6bd5')\n\n  function getInfo() {\n    let username = $('#v_upinfo > div.up-info_right > div.name > a.username').text()\n    let follow = $(\n      `#v_upinfo > div.up-info_right > div.btn-panel > div.default-btn.follow-btn.btn-transition.b-gz.following > span > span > span`,\n    ).text()\n    let title = $(`#viewbox_report > h1 > span`).text()\n    let view = $('#viewbox_report > div > span.view').attr('title')\n\n    console.log(username, follow, title, view)\n  }\n\n  getInfo()\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u91cd\u65b0\u52a0\u8f7d\u63d2\u4ef6\uff0c\u7136\u540e\u8f93\u51fa\u67e5\u770b\u7ed3\u679c"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"\u52a0\u8f7d\u5b8c\u6bd5\nbilibili.js:19 \u8001\u756a\u8304 1606.0\u4e07 \u9876\u7ea7\u753b\u8d28 \u603b\u64ad\u653e\u65702368406\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4e9b\u6570\u636e\u80af\u5b9a\u5355\u7eaf\u7684\u8f93\u51fa\u80af\u5b9a\u662f\u6ca1\u4ec0\u4e48\u4f5c\u7528\u7684\uff0c\u8981\u80fd\u663e\u793a\u5230\u5185\u5d4c\u60ac\u6d6e\u7a97\u53e3\uff0c\u6216\u8005\u662f popup \u9875\u9762\u4e0a\uff08\u751a\u81f3\u53d1\u9001 ajax \u8bf7\u6c42\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u4fdd\u5b58\uff09"}),"\n",(0,i.jsx)(e.p,{children:"\u5bf9\u4e0a\u9762\u4ee3\u7801\u5fae\u6539\u4e00\u4e0b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"window.onload = function () {\n  console.log('\u52a0\u8f7d\u5b8c\u6bd5')\n\n  function getInfo() {\n    let username = $('#v_upinfo > div.up-info_right > div.name > a.username').text().trim()\n    let follow = $(\n      `#v_upinfo > div.up-info_right > div.btn-panel > div.default-btn.follow-btn.btn-transition.b-gz.following > span > span > span`,\n    ).text()\n    let title = $(`#viewbox_report > h1 > span`).text()\n    let view = $('#viewbox_report > div > span.view').attr('title')\n\n    //console.log(username, follow, title, view);\n    window.kz_vm.user = {\n      username,\n      follow,\n      title,\n      view,\n    }\n  }\n  getInfo()\n}\n"})}),"\n",(0,i.jsxs)(e.p,{children:["\u5176\u4e2d",(0,i.jsx)(e.code,{children:"window.kz_vm"}),"\u662f\u901a\u8fc7",(0,i.jsx)(e.code,{children:"window.kz_vm = new Vue()"})," \u521d\u59cb\u5316\u7684\uff0c\u65b9\u4fbf\u6211\u4eec\u64cd\u4f5c vm \u5bf9\u8c61\uff0c\u5c31\u9700\u8981\u901a\u8fc7 jquery \u9009\u62e9\u5143\u7d20\u5728\u6dfb\u52a0\u5c5e\u6027\u4e86\u3002\u5982\u679c\u4f60\u60f3\u7684\u8bdd\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5728 content-script.js \u4e0a\u7f16\u5199\u4ee3\u7801\uff0c\u8fd9\u6837\u5c31\u65e0\u9700\u4f7f\u7528 window \u5bf9\u8c61\uff0c\u4f46\u8fd9\u6837\u5bfc\u81f4\u4e00\u4e9b\u4e1a\u52a1\u903b\u8f91\u90fd\u5806\u5728\u4e00\u4e2a\u6587\u4ef6\u91cc\uff0c\u6240\u4ee5\u6211\u4e60\u60ef\u5206\u6210 bilibili.js \u7136\u540e\u6ce8\u5165\u65b9\u5f0f\u4e3a document_end\uff0c\u7136\u540e\u5728\u64cd\u4f5c dom \u5143\u7d20\u5417\uff0c\u5b9e\u73b0\u6548\u679c\u5982\u4e0b"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20210918110958104.png",alt:"image-20210918110958104"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u50cf\u663e\u793a\u5230 popup \u9875\u9762\u53ea\u9700\u8981\u901a\u8fc7\u9875\u9762\u901a\u4fe1\u5c31\u884c\u4e86\uff0c\u4e0d\u8fc7\u524d\u63d0\u5f97\u5148 popup \u6253\u5f00\u624d\u884c\uff0c\u6240\u4ee5\u4e00\u822c\u90fd\u662f\u901a\u8fc7 background \u6765\u8fdb\u884c\u4e2d\u8f6c\uff0c\u4e00\u822c\u6765\u8bf4\u5f88\u5c11 content \u2013> popup\uff08\u56e0\u4e3a\u64cd\u4f5c popup \u7684\u524d\u63d0\u90fd\u662f popup \u8981\u6253\u5f00\uff09\uff0c\u76f8\u5bf9\u66f4\u591a\u7684\u662f content \u2013> background \u6216 popup \u2013> content"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html#content-script%E4%B8%BB%E5%8A%A8%E5%8F%91%E6%B6%88%E6%81%AF%E7%BB%99%E5%90%8E%E5%8F%B0",children:"content-script \u4e3b\u52a8\u53d1\u6d88\u606f\u7ed9\u540e\u53f0 \u6211\u662f\u5c0f\u8317\u540c\u5b66 - \u535a\u5ba2\u56ed (cnblogs.com)"})}),"\n",(0,i.jsx)(e.h4,{id:"\u5b9e\u73b0\u8bc4\u8bba",children:"\u5b9e\u73b0\u8bc4\u8bba"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u8fb9\u7b80\u5355\u7f16\u5199\u4e86\u4e00\u4e0b\u9875\u9762\uff0c\u901a\u8fc7 popup \u7ed9 content\uff0c\u8ba9 content \u8f93\u5165\u8bc4\u8bba\u5185\u5bb9\uff0c\u4e0e\u70b9\u51fb\u53d1\u9001\uff0c\u5148\u770b\u6548\u679c"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://img.kuizuo.cn/bilibili_comment.gif",alt:"bilibili_comment"})}),"\n",(0,i.jsx)(e.p,{children:"\u540c\u6837\u7684\uff0c\u627e\u5230\u5bf9\u5e94\u5143\u7d20\u4f4d\u7f6e"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"// \u8bc4\u8bba\u6587\u672c\u6846\n$('#comment > div > div.comment > div > div.comment-send > div.textarea-container > textarea').val(\n  '\u8981\u56de\u590d\u7684\u5185\u5bb9',\n)\n// \u8bc4\u8bba\u6309\u94ae\n$('#comment > div > div.comment > div > div.comment-send > div.textarea-container > button').click()\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u7740\u5c31\u662f\u5199\u9875\u9762\u901a\u4fe1\u7684\u4e86\uff0c\u53ef\u4ee5\u770b\u5230\u662f popup \u5411 content \u53d1\u9001\u8bf7\u6c42"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="src/content-script/bilibili.js"',children:"window.onload = function () {\n  console.log('content\u52a0\u8f7d\u5b8c\u6bd5')\n\n  function comment() {\n    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n      let { cmd, message } = request\n      if (cmd === 'addComment') {\n        $(\n          '#comment > div > div.comment > div > div.comment-send > div.textarea-container > textarea',\n        ).val(message)\n        $(\n          '#comment > div > div.comment > div > div.comment-send > div.textarea-container > button',\n        ).click()\n      }\n\n      sendResponse('\u6211\u6536\u5230\u4e86\u4f60\u7684\u6d88\u606f\uff01')\n    })\n  }\n\n  comment()\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-html",metastring:'title="src/popup/App.vue"',children:"<template>\n  <div>\n    <el-container>\n      <el-header height=\"24\">B\u7ad9\u5c0f\u5de5\u5177</el-header>\n      <el-main>\n        <el-row :gutter=\"5\">\n          <el-input\n            type=\"textarea\"\n            :rows=\"2\"\n            placeholder=\"\u8bf7\u8f93\u5165\u5185\u5bb9\"\n            v-model=\"message\"\n            class=\"mb-5\"\n          >\n          </el-input>\n\n          <div>\n            <el-button @click=\"addComment\">\u8bc4\u8bba</el-button>\n          </div>\n        </el-row>\n      </el-main>\n    </el-container>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: 'App',\n    data() {\n      return {\n        message: '',\n        list: [],\n        open: false,\n      }\n    },\n    created() {\n      chrome.storage.sync.get('list', obj => {\n        this.list = obj['list']\n      })\n    },\n    mounted() {\n      chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {\n        console.log('\u6536\u5230\u6765\u81eacontent-script\u7684\u6d88\u606f\uff1a')\n        console.log(request, sender, sendResponse)\n        sendResponse('\u6211\u662f\u540e\u53f0\uff0c\u6211\u5df2\u6536\u5230\u4f60\u7684\u6d88\u606f\uff1a' + JSON.stringify(request))\n      })\n    },\n    methods: {\n      sendMessageToContentScript(message, callback) {\n        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {\n          chrome.tabs.sendMessage(tabs[0].id, message, function (response) {\n            if (callback) callback(response)\n          })\n        })\n      },\n      addComment() {\n        this.sendMessageToContentScript({ cmd: 'addComment', message: this.message }, function () {\n          console.log('\u6765\u81eacontent\u7684\u56de\u590d\uff1a' + response)\n        })\n      },\n    },\n  }\n<\/script>\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4ee3\u7801\u5c31\u4e0d\u89e3\u8bfb\u4e86\uff0c\u8c03\u7528 sendMessageToContentScript \u65b9\u6cd5\u5373\u53ef\u3002\u76f8\u5173\u6e90\u7801\u53ef\u81ea\u884c\u4e0b\u8f7d\u67e5\u770b"}),"\n",(0,i.jsx)(e.p,{children:"\u5b9e\u73b0\u7c7b\u4f3c\u70b9\u8d5e\u529f\u80fd\u4e5f\u662f\u540c\u7406\u7684\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u76f8\u5173\u6a21\u677f",children:"\u76f8\u5173\u6a21\u677f"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://github.com/antfu/vitesse-webext",children:"vitesse-webext"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.a,{href:"https://www.plasmo.com/",children:"plasmo"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6574\u4f53\u4f53\u9a8c",children:"\u6574\u4f53\u4f53\u9a8c"}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u65f6\u5199 Chrome \u63d2\u4ef6\u7684\u6548\u7387\u4e0d\u80fd\u8bf4\u6162\uff0c\u53cd\u6b63\u4e0d\u5feb\u5c31\u662f\u4e86\uff0c\u50cf\u4e00\u4e9b tips\uff0c\u90fd\u5f97\u81ea\u884c\u5c01\u88c5\u3002\u7528\u8fc7 Vue \u7684\u90fd\u77e5\u9053\u5199\u7f51\u9875\u5f88\u65b9\u4fbf\uff0c\u5199 Chrome \u63d2\u4ef6\u672a\u5c1d\u4e0d\u662f\u7f16\u5199\u4e00\u4e2a\u7f51\u9875\uff0c\u5f53\u65f6\u7684\u6211\u5728\u63a5\u89e6\u4e86 Vue \u540e\u5c31\u840c\u53d1\u4e86\u4f7f\u7528 vue \u6765\u7f16\u5199 Chrome \u7684\u60f3\u6cd5\uff0c\u5f53\u7136\u80af\u5b9a\u4e0d\u6b62\u6211\u4e00\u4e2a\u8fd9\u4e48\u60f3\u8fc7\uff0c\u6240\u4ee5\u6211\u5728 github \u4e0a\u5c31\u80fd\u641c\u7d22\u5230\u76f8\u5e94\u7684\u6e90\u7801\uff0c\u4e8e\u662f\u5c31\u6709\u4e86\u8fd9\u7bc7\u6587\u7ae0\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u6709\u6d89\u53ca\u5230\u722c\u53d6\u6570\u636e\u76f8\u5173\u7684\uff0c\u6211\u80af\u5b9a\u662f\u9996\u9009\u4f7f\u7528 HTTP \u534f\u8bae\uff0c\u5982\u679c\u5728\u641e\u4e0d\u5b9a\u6211\u4f1a\u9009\u62e9\u4f7f\u7528 puppeteerjs\uff0c\u4e0d\u8fc7 Chrome \u63d2\u4ef6\u4e3b\u8981\u8fd8\u662f\u589e\u5f3a\u9875\u9762\u529f\u80fd\u7684\uff0c\u53ef\u4ee5\u5b9e\u73b0\u539f\u672c\u9875\u9762\u4e0d\u5177\u5907\u7684\u529f\u80fd\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u672c\u6587\u4ec5\u4ec5\u53ea\u662f\u521d\u6b65\u4f53\u9a8c\uff0c\u7b80\u5355\u7f16\u5199\u4e86\u4e2a\u5c0f\u9879\u76ee\uff0c\u540e\u671f\u6709\u53ef\u80fd\u4f1a\u5b9e\u73b0\u4e00\u4e2a\u767e\u5ea6\u7f51\u76d8\u4e00\u952e\u586b\u5199\u63d0\u53d6\u7801\uff0cJs \u81ea\u5410 Hooke \u76f8\u5173\u7684\u3002\uff08\u539f\u672c\u662f\u6253\u7b97\u505a pdd \u5546\u5bb6\u81ea\u52a8\u56de\u590d\u7684\uff0c\u5ba2\u6237\u8bf4\u8981\u7528\u5ba2\u6237\u7aef\u800c\u4e0d\u662f\u7f51\u9875\u7aef\uff08\u5ba2\u6237\u7aef\u53ef\u4ee5\u591a\u53f7\u767b\u9646\uff09\uff0c\u65e0\u5948\uff0c\u8fd9\u7bc7\u535a\u5ba2\u5c31\u62ff B \u7ad9\u6765\u6f14\u793a\u4e86\uff09"})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function o(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);