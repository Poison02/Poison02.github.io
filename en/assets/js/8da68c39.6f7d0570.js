"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1365],{61447:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(74848),s=t(28453);const r={id:"go-call-js",slug:"/go-call-js",title:"Go\u8c03\u7528js\u4ee3\u7801",date:new Date("2022-05-22T00:00:00.000Z"),authors:"kuizuo",tags:["go","javascript"],keywords:["go","javascript"]},l=void 0,i={id:"skill/programming-languages/go/go-call-js",title:"Go\u8c03\u7528js\u4ee3\u7801",description:"\u8fd0\u884c js \u4ee3\u7801",source:"@site/docs/skill/programming-languages/go/Go\u8c03\u7528js\u4ee3\u7801.md",sourceDirName:"skill/programming-languages/go",slug:"/go-call-js",permalink:"/en/docs/go-call-js",draft:!1,unlisted:!1,tags:[{label:"go",permalink:"/en/docs/tags/go"},{label:"javascript",permalink:"/en/docs/tags/javascript"}],version:"current",frontMatter:{id:"go-call-js",slug:"/go-call-js",title:"Go\u8c03\u7528js\u4ee3\u7801",date:"2022-05-22T00:00:00.000Z",authors:"kuizuo",tags:["go","javascript"],keywords:["go","javascript"]},sidebar:"skill",previous:{title:"Go\u53d1\u9001http\u8bf7\u6c42",permalink:"/en/docs/go-send-http-request"},next:{title:"Go\u5e76\u53d1",permalink:"/en/docs/go-concurrent"}},a={},c=[{value:"\u8fd0\u884c js \u4ee3\u7801",id:"\u8fd0\u884c-js-\u4ee3\u7801",level:2},{value:"\u8c03\u7528\u51fd\u6570",id:"\u8c03\u7528\u51fd\u6570",level:2},{value:"\u5c01\u88c5\u6210 go \u51fd\u6570",id:"\u5c01\u88c5\u6210-go-\u51fd\u6570",level:2}];function u(n){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"\u8fd0\u884c-js-\u4ee3\u7801",children:"\u8fd0\u884c js \u4ee3\u7801"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'import (\n  "fmt"\n\n  "github.com/robertkrimen/otto"\n)\n\nfunc main() {\n  vm := otto.New()\n  result, _ := vm.Run(`\n      foo = 1 + 2\n      console.log(foo)\n      result = foo;\n  `)\n  fmt.Println(result) // 4\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u8c03\u7528\u51fd\u6570",children:"\u8c03\u7528\u51fd\u6570"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:"func main() {\n  vm := otto.New()\n  vm.Run(`\n  function hello(name){\n      console.log('hello ' + name)\n      return 'OK'\n  }\n`)\n\n  ret, _ := vm.Call(\"hello\", nil, \"kuizuo\")\n  fmt.Println(ret)\n}\n\n"})}),"\n",(0,o.jsx)(e.p,{children:"\u8fd9\u91cc\u4ee5 go \u8c03\u7528 js \u7684 CryptoJS \u6765\u5b9e\u73b0\u52a0\u5bc6\u6f14\u793a\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'func main() {\n  bytes, _ := ioutil.ReadFile("md5.js")\n  vm := otto.New()\n  vm.Run(string(bytes))\n\n  ret, _ := vm.Call("MD5", nil, "a123456")\n  fmt.Println(ret)\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"\u5c01\u88c5\u6210-go-\u51fd\u6570",children:"\u5c01\u88c5\u6210 go \u51fd\u6570"}),"\n",(0,o.jsx)(e.p,{children:"\u4e0d\u8fc7\u8fd9\u6837\u5199\u6cd5\u4e0d\u65b9\u4fbf\uff0c\u53ef\u4ee5\u5c06\u5176\u5c01\u88c5\u4e3a\u4e00\u4e2a go \u51fd\u6570\u6765\u8c03\u7528\u3002"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'import (\n  "fmt"\n  "io/ioutil"\n\n  "github.com/robertkrimen/otto"\n)\n\nvar vm = otto.New()\n\nfunc initJs() {\n  bytes, _ := ioutil.ReadFile("md5.js")\n  vm.Run(string(bytes))\n}\n\nfunc md5(content string) string {\n  ret, err := vm.Call("MD5", nil, content)\n  if err != nil {\n    return ""\n  }\n  return ret.String()\n}\n\nfunc main() {\n  initJs()\n  result := md5("a123456")\n  fmt.Println(result)\n}\n\n'})})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function l(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);