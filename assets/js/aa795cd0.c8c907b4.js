"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[12133],{38271:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=n(74848),a=n(28453);const r={slug:"rust-wasm-md5",title:"Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528",date:new Date("2023-01-04T00:00:00.000Z"),authors:"kuizuo",tags:["rust","wasm"],keywords:["rust","wasm"],image:"https://img.kuizuo.cn/202312270251453.png"},l=void 0,i={permalink:"/blog/rust-wasm-md5",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/develop/Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528.md",source:"@site/blog/develop/Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528.md",title:"Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528",description:"\u6211\u521d\u8bc6 WebAssembly \u662f\u5f53\u521d\u60f3\u8981\u5206\u6790\u67d0\u4e2a\u7f51\u7ad9\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u6700\u7ec8\u5b9a\u4f4d\u5230\u4e86\u4e00\u4e2a .wasm \u6587\u4ef6\uff0c\u6ca1\u9519\uff0c\u8fd9\u4e2a\u5c31\u662f WebAssembly \u7684\u6784\u5efa\u4ea7\u7269\uff0c\u80fd\u591f\u76f4\u63a5\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e2d\u3002\u5728\u6211\u5f53\u65f6\u770b\u6765\u8fd9\u95e8\u6280\u672f\u5f88\u5148\u8fdb\uff0c\u4e0d\u8fc7\u5982\u4eca\u770b\u6765\u7edd\u5927\u591a\u6570\u7684 web \u5e94\u7528\u8c8c\u4f3c\u90fd\u6ca1\u4f7f\u7528\u4e0a\uff0c\u8fc4\u4eca\u4e3a\u6b62\u6211\u4e5f\u53ea\u5728\u8fd9\u4e2a\u7f51\u7ad9\u4e2d\u770b\u5230\u4f7f\u7528 WebAssembly \u7684\uff08\u4e5f\u8bb8\u6709\u5f88\u591a\uff0c\u53ea\u662f\u6ca1\u5b9e\u8d28\u5206\u6790\u8fc7\uff09\u3002",date:"2023-01-04T00:00:00.000Z",formattedDate:"2023\u5e741\u67084\u65e5",tags:[{label:"rust",permalink:"/blog/tags/rust"},{label:"wasm",permalink:"/blog/tags/wasm"}],readingTime:4.86,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5373\u5c06\u6bd5\u4e1a\u7684\u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"rust-wasm-md5",title:"Rust\u5b9e\u73b0MD5\u52a0\u5bc6\u5e76\u6253\u5305\u6210WebAssembly\u8c03\u7528",date:"2023-01-04T00:00:00.000Z",authors:"kuizuo",tags:["rust","wasm"],keywords:["rust","wasm"],image:"https://img.kuizuo.cn/202312270251453.png"},unlisted:!1,prevItem:{title:"Deno \u4e0d\u53ea\u662f\u4e2a Javascript \u8fd0\u884c\u65f6",permalink:"/blog/deno-is-not-only-a-javascript-runtime"},nextItem:{title:"2022 \xb7 \u9006\u5411\u5230Web\u5f00\u53d1",permalink:"/blog/2022-year-end-summary"}},m={authorsImageUrls:[void 0]},c=[{value:"\u4f7f\u7528 wasm-pack \u6253\u5305 rust \u4e3a wasm \u6587\u4ef6",id:"\u4f7f\u7528-wasm-pack-\u6253\u5305-rust-\u4e3a-wasm-\u6587\u4ef6",level:2},{value:"\u6784\u5efa rust lib",id:"\u6784\u5efa-rust-lib",level:3},{value:"\u6253\u5305",id:"\u6253\u5305",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"Rust \u5b9e\u73b0 MD5 \u7b97\u6cd5",id:"rust-\u5b9e\u73b0-md5-\u7b97\u6cd5",level:2},{value:"\u5728\u9879\u76ee\u4e2d\u4f7f\u7528",id:"\u5728\u9879\u76ee\u4e2d\u4f7f\u7528",level:2},{value:"\u601d\u8003\uff1a\u4e3a\u4f55\u4e0d\u4f7f\u7528 js \u7684 md5 \u800c\u662f wasm \u7684 md5",id:"\u601d\u8003\u4e3a\u4f55\u4e0d\u4f7f\u7528-js-\u7684-md5-\u800c\u662f-wasm-\u7684-md5",level:2},{value:"\u76f8\u5173\u94fe\u63a5",id:"\u76f8\u5173\u94fe\u63a5",level:2}];function d(s){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,a.R)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["\u6211\u521d\u8bc6 WebAssembly \u662f\u5f53\u521d\u60f3\u8981\u5206\u6790\u67d0\u4e2a\u7f51\u7ad9\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u6700\u7ec8\u5b9a\u4f4d\u5230\u4e86\u4e00\u4e2a ",(0,t.jsx)(e.code,{children:".wasm"})," \u6587\u4ef6\uff0c\u6ca1\u9519\uff0c\u8fd9\u4e2a\u5c31\u662f WebAssembly \u7684\u6784\u5efa\u4ea7\u7269\uff0c\u80fd\u591f\u76f4\u63a5\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e2d\u3002\u5728\u6211\u5f53\u65f6\u770b\u6765\u8fd9\u95e8\u6280\u672f\u5f88\u5148\u8fdb\uff0c\u4e0d\u8fc7\u5982\u4eca\u770b\u6765\u7edd\u5927\u591a\u6570\u7684 web \u5e94\u7528\u8c8c\u4f3c\u90fd\u6ca1\u4f7f\u7528\u4e0a\uff0c\u8fc4\u4eca\u4e3a\u6b62\u6211\u4e5f\u53ea\u5728\u8fd9\u4e2a\u7f51\u7ad9\u4e2d\u770b\u5230\u4f7f\u7528 WebAssembly \u7684\uff08\u4e5f\u8bb8\u6709\u5f88\u591a\uff0c\u53ea\u662f\u6ca1\u5b9e\u8d28\u5206\u6790\u8fc7\uff09\u3002"]}),"\n",(0,t.jsx)(e.p,{children:"\u6070\u597d\u6700\u8fd1\u6b63\u5728\u63a5\u89e6 Rust\uff0c\u800c Rust \u5f00\u53d1 WebAssembly \u4e5f\u975e\u5e38\u65b9\u4fbf\uff0c\u56e0\u6b64\u672c\u6587\u7b97\u662f\u6211\u5bf9 Rust + WebAssembly \u7684\u521d\u63a2\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u6709\u5173 ",(0,t.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/WebAssembly",children:"WebAssembly "}),"\u4e0d\u505a\u8fc7\u591a\u4ecb\u7ecd\uff0c\u4f60\u53ef\u4ee5\u5230 ",(0,t.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/WebAssembly",children:"MDN"})," \u4e2d\u67e5\u770b\u76f8\u5173\u4ecb\u7ecd\u3002\u672c\u6587\u91cd\u70b9\u4e8e Rust + WebAssembly \u5b9e\u8df5\u4e0e\u76f8\u5173\u5de5\u5177\uff0c\u5728 ",(0,t.jsx)(e.a,{href:"https://github.com/rustwasm",children:"Rust and WebAssembly (github.com)"})," \u6216 ",(0,t.jsx)(e.a,{href:"https://github.com/rwasm",children:"https://github.com/rwasm"})," \u4e2d\u67e5\u770b rustwasm \u76f8\u5173\u751f\u6001\u3002"]}),"\n",(0,t.jsxs)(e.h2,{id:"\u4f7f\u7528-wasm-pack-\u6253\u5305-rust-\u4e3a-wasm-\u6587\u4ef6",children:["\u4f7f\u7528 ",(0,t.jsx)(e.a,{href:"https://rustwasm.github.io/wasm-pack/installer/",children:"wasm-pack"})," \u6253\u5305 rust \u4e3a wasm \u6587\u4ef6"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e0b\u8f7d wasm-pack\uff0c\u7528\u4e8e\u5c06 rust \u4ee3\u7801\u6253\u5305\u6210 .wasm \u6587\u4ef6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"cargo install wasm-pack\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4f7f\u7528 cargo \u6709\u53ef\u80fd\u65e0\u6cd5\u5b89\u88c5 wasm-pack\uff08\u7b14\u8005\u5c31\u5b89\u88c5\u4e0d\u4e86 openssl-sys\uff09\uff0c\u53ef\u4ee5\u5230 ",(0,t.jsx)(e.a,{href:"https://rustwasm.github.io/wasm-pack/installer/",children:"wasm-pack"})," \u5b98\u7f51\u4e0b\u8f7d\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u8fdb\u884c\u5b89\u88c5\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u6784\u5efa-rust-lib",children:"\u6784\u5efa rust lib"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"cargo new --lib hello-wasm\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5c06\u4f1a\u521b\u5efa rust \u5e93\u5de5\u7a0b\uff0c\u5e76\u521b\u5efa ",(0,t.jsx)(e.code,{children:"src/lib.rs"}),"\u3002\u4fee\u6539\u4e3a\u4ee5\u4e0b\u5185\u5bb9\uff08\u5148\u4e0d\u5fc5\u5728\u610f\u4ee3\u7801\uff09"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",metastring:"title='src/lib.rs' icon='simple-icons:rust'",children:'extern crate wasm_bindgen;\n\nuse wasm_bindgen::prelude::*;\n\n#[wasm_bindgen]\nextern {\n    pub fn alert(s: &str);\n}\n\n#[wasm_bindgen]\npub fn greet(name: &str) {\n    alert(&format!("Hello, {}!", name));\n}\n\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u63a5\u7740\u5728 Cargo.toml \u6587\u4ef6\u4e2d\u6dfb\u52a0 wasm-bindgen \u4f9d\u8d56\uff0c",(0,t.jsx)(e.code,{children:"wasm-bindgen"})," \u6765\u63d0\u4f9b JavaScript \u548c Rust \u7c7b\u578b\u4e4b\u95f4\u7684\u6865\u6881\uff0c\u5141\u8bb8 JavaScript \u4f7f\u7528\u5b57\u7b26\u4e32\u8c03\u7528 Rust API\uff0c\u6216\u8c03\u7528 Rust \u51fd\u6570\u6765\u6355\u83b7 JavaScript \u5f02\u5e38\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-toml",metastring:"title='Cargo.toml' icon='logos:toml'",children:'[package]\nname = "hello-wasm"\nversion = "0.1.0"\n\n[lib]\ncrate-type = ["cdylib"]\n\n[dependencies]\nwasm-bindgen = "0.2"\n\n'})}),"\n",(0,t.jsx)(e.h3,{id:"\u6253\u5305",children:"\u6253\u5305"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"wasm-pack build\n"})}),"\n",(0,t.jsx)(e.p,{children:"WebAssembly \u6784\u5efa\u4ea7\u7269\u5c06\u4f1a\u8f93\u51fa\u5728 pkg \u76ee\u5f55\u4e0b\uff0c\u5982\u4e0b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"\u251c\u2500pkg\n|  \u251c\u2500.gitignore\n|  \u251c\u2500hello_wasm.d.ts\n|  \u251c\u2500hello_wasm.js\n|  \u251c\u2500hello_wasm_bg.js\n|  \u251c\u2500hello_wasm_bg.wasm\n|  \u2514\u2500hello_wasm_bg.wasm.d.ts\n"})}),"\n",(0,t.jsxs)(e.admonition,{type:"info",children:[(0,t.jsx)(e.p,{children:"\u5982\u679c\u60f3\u5f53 npm \u5305\u53d1\u5e03\u7684\u8bdd\uff0c\u53ef\u4ee5\u6dfb\u52a0 \u2014scope \u53c2\u6570\uff0c\u5c06\u4f1a\u5728 pkg \u4e0b\u751f\u6210 package.json \u6587\u4ef6\u7528\u4e8e\u53d1\u5e03\u6216\u5f53\u505a\u4e00\u4e2a npm \u5305\u6765\u4f7f\u7528\uff0c\u8fd9\u6837\u4e5f\u53ef\u4ee5\u5728\u524d\u7aef\u5de5\u7a0b\u4e2d\u76f4\u63a5\u5f53\u505a\u4e00\u4e2a\u6a21\u5757\u6765\u5bfc\u5165\u4f7f\u7528\u3002"}),(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"wasm-pack build --scope mynpmusername\n"})})]}),"\n",(0,t.jsxs)(e.p,{children:["\u501f\u52a9 ",(0,t.jsx)(e.a,{href:"https://rustwasm.github.io/wasm-pack/installer/",children:"wasm-pack"})," \u53ef\u4ee5\u975e\u5e38\u8f7b\u677e\u7684\u5c06 rust \u6253\u5305\u6210 wasm\uff0c\u540c\u65f6\u8fd8\u63d0\u4f9b\u4e86 js \u76f8\u5173\u652f\u6301\u3002\u76f4\u63a5\u6253\u5305\u6210 js \u53ef\u5bfc\u5165\u7684 npm \u5305\uff0c\u800c\u4e0d\u662f\u8ba9\u7528\u6237\u5bfc\u5165 wasm \u6587\u4ef6\u7136\u540e\u901a\u8fc7\u6d4f\u89c8\u5668 ",(0,t.jsx)(e.code,{children:"WebAssembly"})," \u5bf9\u8c61\u6765\u52a0\u8f7d WebAssembly \u4ee3\u7801\uff0c\u5176\u4ed6\u8bed\u8a00\u7684 WebAssembly \u5f00\u53d1\u4e5f\u662f\u5982\u6b64\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u6b64\u5916 ",(0,t.jsx)(e.a,{href:"https://rustwasm.github.io/",children:"rustwasm"})," \u8fd8\u63d0\u4f9b\u4e86\u5bf9\u5e94\u7684\u6a21\u677f ",(0,t.jsx)(e.a,{href:"https://github.com/rustwasm/wasm-pack-template",children:"rustwasm/wasm-pack-template"}),"\uff0c\u53ef\u4ee5\u5e2e\u4f60\u7701\u53bb\u4e0a\u9762\u7684\u4e00\u7cfb\u5217\u914d\u7f6e\u64cd\u4f5c\uff0c\u4e13\u6ce8\u4e8e\u4f60\u7684 wasm \u5f00\u53d1\u3002"]}),"\n",(0,t.jsx)(e.h3,{id:"\u8fd0\u884c",children:"\u8fd0\u884c"}),"\n",(0,t.jsx)(e.p,{children:"\u7531\u4e8e\u4e0a\u9762\u6211\u4eec\u5df2\u7ecf\u5c06\u5176\u6253\u5305\u6210\u4e86\u4e00\u4e2a npm \u5305\uff0c\u53ea\u9700\u8981\u5c06\u914d\u7f6e\u597d package.json \u7684\u4f9d\u8d56\u5373\u53ef\uff0c\u672c\u5730\u7684\u8bdd\u53ef\u901a\u8fc7\u4e0b\u65b9\u683c\u5f0f\uff0c\u5c06 pkg \u76ee\u5f55\u66f4\u6539\u4e3a hello-wasm\uff0c\u5e76\u653e\u7f6e\u5728\u6839\u76ee\u5f55\u4e0b\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:"title='package.json' icon='logos:nodejs-icon'",children:'  "dependencies": {\n    "hello-wasm": "file:./hello-wasm"\n  },\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u65f6\u5019\u5c31\u53ef\u4ee5\u901a\u8fc7 js \u76f4\u63a5\u5bfc\u5165\u4f7f\u7528"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'const js = import("./hello-wasm/hello_wasm.js");\njs.then(js => {\n  js.greet("WebAssembly");\n});\n'})}),"\n",(0,t.jsxs)(e.p,{children:["\u5728 vite \u751f\u6001\u4e2d\u6709\u4e2a ",(0,t.jsx)(e.a,{href:"https://github.com/rwasm/vite-plugin-rsw",children:"rwasm/vite-plugin-rsw"})," \u63d2\u4ef6\uff0c\u80fd\u591f\u5728 vite \u4e2d\u5feb\u901f\u4f7f\u7528 wasm-pack\u3002\u4e0b\u6587\u4e2d\u7684\u4e00\u4e2a\u5e94\u7528\u793a\u4f8b\u4e5f\u5c06\u91c7\u7528\u8be5\u63d2\u4ef6\u8fdb\u884c\u5f00\u53d1\u3002"]}),"\n",(0,t.jsx)(e.h2,{id:"rust-\u5b9e\u73b0-md5-\u7b97\u6cd5",children:"Rust \u5b9e\u73b0 MD5 \u7b97\u6cd5"}),"\n",(0,t.jsxs)(e.p,{children:["\u56de\u5230\u4e00\u5f00\u59cb\u7684\u6807\u9898\uff0c\u5728\u5b9e\u73b0\u8fd9\u4e2a\u529f\u80fd\u6211\u4e00\u822c\u4f1a\u60f3 js \u5982\u4f55\u5b9e\u73b0 MD5 \u7b97\u6cd5\uff0c\u901a\u5e38\u6765\u8bf4 MD5 \u7b97\u6cd5\u662f\u4e2a\u6bd4\u8f83\u6d41\u884c\u7684\u52a0\u5bc6\u7b97\u6cd5\uff0c\u901a\u8fc7\u641c\u7d22\u5f15\u64ce\u80fd\u591f\u5feb\u901f\u5e2e\u6211\u627e\u5230\u4e00\u4efd js \u7684 MD5 \u7b97\u6cd5\u3002\u4e0d\u8fc7\u6211\u66f4\u4e60\u60ef\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5bfc\u5165\u7684\u52a0\u5bc6\u5e93\uff0c\u5982",(0,t.jsx)(e.a,{href:"https://www.npmjs.com/package/crypto-js",children:"crypto-js"}),"\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u540c\u7406\uff0c\u5728 rust \u4e2d\u53ef\u4ee5\u5230 ",(0,t.jsx)(e.a,{href:"https://crates.io/",children:"crates.io"})," \u4e2d\u4e5f\u53ef\u4ee5\u627e\u5230\u4f60\u60f3\u8981\u7684\u5e93\uff0c\u5982 ",(0,t.jsx)(e.a,{href:"https://crates.io/crates/digest",children:"digest"}),"\uff0c\u4e0d\u8fc7\u6211\u8fd9\u91cc\u4e3b\u8981\u662f\u5b9e\u73b0 MD5 \u7b97\u6cd5\u4fbf\u4f7f\u7528\u7684\u662f ",(0,t.jsx)(e.a,{href:"https://crates.io/crates/md-5",children:"md-5"}),"\u3002\u4ee5\u4e0b\u662f\u6211\u7684\u5c01\u88c5\u4ee3\u7801\u3002"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:'use md5::{Digest, Md5};\n\nfn md5(input: &str) -> String {\n    let mut hasher = Md5::new();\n\n    hasher.update(input.as_bytes());\n\n    let result = hasher.finalize();\n    format!("{:x}", result)\n}\n\nfn main() {\n    let result = md5("123456");\n    println!("{}", result);\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u7136\u540e\u5c06\u8fd9\u4e00\u90e8\u5206\u7684\u4ee3\u7801\u66ff\u6362\u5230\u4e00\u5f00\u59cb\u7684\u793a\u4f8b\u4e2d\u3002"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",metastring:"title='lib.rs' icon='simple-icons:rust'",children:'extern crate wasm_bindgen;\nextern crate md5;\n\nuse wasm_bindgen::prelude::*;\nuse md5::{Digest, Md5};\n\n#[wasm_bindgen]\npub fn md5(input: &str)-> String {\n    let mut hasher = Md5::new();\n\n    hasher.update(input.as_bytes());\n\n    let result = hasher.finalize();\n    format!("{:x}", result)\n}\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u6b64\u65f6\u901a\u8fc7 wasm-pack \u5c06\u4e0a\u8ff0\u4ee3\u7801\u6253\u5305\u6210 npm \u5305\u5f62\u5f0f\u5373\u53ef\u5728 js \u4e2d\u8c03\u7528 rust \u63d0\u4f9b\u7684 md5 \u51fd\u6570\uff0c\u81f3\u6b64\u5c31\u5df2\u7ecf\u5b8c\u6210\u4e86\u672c\u6807\u9898\u7684\u5185\u5bb9\u4e86\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u5728\u9879\u76ee\u4e2d\u4f7f\u7528",children:"\u5728\u9879\u76ee\u4e2d\u4f7f\u7528"}),"\n",(0,t.jsxs)(e.p,{children:["\u8fd9\u91cc\u6211\u6240\u501f\u7528 ",(0,t.jsx)(e.a,{href:"https://github.com/rwasm/vite-plugin-rsw",children:"rwasm/vite-plugin-rsw"})," \u63d2\u4ef6\uff0c\u5728 vite \u4e2d\u914d\u5408 wasm-pack \u8fdb\u884c\u5f00\u53d1\u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002\u4ee3\u7801\u90e8\u5206\u5c31\u4e0d\u505a\u89e3\u8bfb\u4e86\uff0c\u6709\u5174\u8da3\u53ef\u81ea\u884c\u5230\u7ffb\u9605\u6e90\u7801\uff1a",(0,t.jsx)(e.a,{href:"https://github.com/kuizuo/rust-wasm-md5",children:"kuizuo/rust-wasm-md5"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u5728\u7ebf\u5730\u5740\uff1a",(0,t.jsx)(e.a,{href:"http://rust-wasm-md5.kuizuo.cn/",children:"http://rust-wasm-md5.kuizuo.cn"})," \uff08\u4e0d\u4fdd\u8bc1\u5730\u5740\u957f\u671f\u53ef\u7528\uff09"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://img.kuizuo.cn/image__XHPNCbC-B.png",alt:""})}),"\n",(0,t.jsx)(e.h2,{id:"\u601d\u8003\u4e3a\u4f55\u4e0d\u4f7f\u7528-js-\u7684-md5-\u800c\u662f-wasm-\u7684-md5",children:"\u601d\u8003\uff1a\u4e3a\u4f55\u4e0d\u4f7f\u7528 js \u7684 md5 \u800c\u662f wasm \u7684 md5"}),"\n",(0,t.jsx)(e.p,{children:"\u4f17\u6240\u5468\u77e5\uff0c\u4f60\u5728\u6d4f\u89c8\u5668\u4e2d\u6309\u4e0b F12 \u6253\u5f00 DevTools\uff0c\u5e76\u9009\u62e9\u6e90\u4ee3\u7801\u9762\u677f\u4e2d\u5c31\u53ef\u4ee5\u770b\u5230\u5f53\u524d\u8bbf\u95ee\u7684\u7f51\u7ad9\u7684\u6240\u6709\u4ee3\u7801\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://img.kuizuo.cn/image_6019y_U19n.png",alt:""})}),"\n",(0,t.jsx)(e.p,{children:"\u800c\u5bf9\u4e8e\u4e00\u4e9b\u5177\u6709\u719f\u7ec3\u5ea6\u7684\u9006\u5411\u5206\u6790\u8005\u4e2d\uff0c\u5982\u679c\u4e0d\u7ecf\u8fc7\u4efb\u4f55\u5904\u7406\u7684\u4ee3\u7801\u88ab\u6253\u5305\u5230\u751f\u4ea7\u73af\u5883\u4e2d\u80fd\u591f\u5feb\u901f\u7684\u5b9a\u4f4d\u51fa\u67d0\u4e2a\u529f\u80fd\u7684\u5177\u4f53\u4ee3\u7801\u4f4d\u7f6e\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u800c\u901a\u8fc7 wasm \u5c31\u80fd\u5f88\u6709\u6548\u7684\u5c06\u4ee3\u7801\u9690\u85cf\u8d77\u6765\uff0c\u4e0d\u8ba9\u9006\u5411\u5206\u6790\u8005\u67e5\u770b\uff0c\u5c31\u50cf\u4e0b\u9762\u8fd9\u6837"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://img.kuizuo.cn/image_BbA3n6wFws.png",alt:""})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{src:"https://img.kuizuo.cn/image_81tgfDE_P7.png",alt:""})}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u91cc\u6211\u5e76\u6ca1\u6709\u5c06 md5 \u66f4\u6539\u6210\u4e0d\u6613\u731c\u6d4b\u7684\u540d\u5b57\uff0c\u4f60\u4e5f\u53ef\u81ea\u884c\u4e0b\u65ad\u70b9\u5c1d\u8bd5\u4e00\u756a\uff0c\u5b9a\u4f4d\u4ee3\u7801\u3002\u5f53\u4f60\u5b9a\u4f4d\u5230\u5177\u4f53\u4ee3\u7801\u540e\uff0c\u5c31\u4f1a\u5f97\u5230\u4e0a\u56fe\u7684\u4e8c\u8fdb\u5236\u4ee3\u7801\u683c\u5f0f\uff0c\u51e0\u4e4e\u65e0\u6cd5\u89e3\u8bfb\u5176\u610f\u601d\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e0d\u8fc7\u867d\u8bf4\u89e3\u8bfb\u4e0d\u51fa wasm \u7684\u539f\u4ee3\u7801\uff08\u81f3\u5c11\u76ee\u524d\u6765\u8bf4\u5f88\u96be\u53cd\u7f16\u8bd1\u6210\u539f\u59cb\u4ee3\u7801\uff09\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u6263\u4ee3\u7801\u7684\u65b9\u5f0f\u6765\u8c03\u7528 wasm \u5bf9\u5916\u63d0\u4f9b\u7684\u51fd\u6570\uff08\u8fd9\u91cc\u4e3a md5 \u51fd\u6570\uff09\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u91cc\u4ec5\u662f wasm \u7684\u4e00\u79cd\u5b9e\u9645\u7528\u4f8b\uff0c\u66f4\u591a\u60c5\u51b5\u4e0b\u5e94\u8be5\u8fd8\u662f\u7528 Wasm \u6765\u63d0\u9ad8 web \u5e94\u7528\u6027\u80fd\u7684\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u76f8\u5173\u94fe\u63a5",children:"\u76f8\u5173\u94fe\u63a5"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/WebAssembly/Rust_to_wasm",children:"\u7f16\u8bd1 Rust \u4e3a WebAssembly - WebAssembly | MDN (mozilla.org)"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://rustwasm.github.io/",children:"Rust and WebAssembly"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://rustmagazine.github.io/rust_magazine_2021/chapter_2/rust_wasm_frontend.html",children:"\u524d\u7aef\u5165\u95e8 \uff5c Rust \u548c WebAssembly - Rust \u7cbe\u9009"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/rwasm/vite-plugin-rsw",children:"rwasm/vite-plugin-rsw: \ud83e\udd9e wasm-pack plugin for Vite (github.com)"})})]})}function h(s={}){const{wrapper:e}={...(0,a.R)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(d,{...s})}):d(s)}},28453:(s,e,n)=>{n.d(e,{R:()=>l,x:()=>i});var t=n(96540);const a={},r=t.createContext(a);function l(s){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:l(s.components),t.createElement(r.Provider,{value:e},s.children)}}}]);