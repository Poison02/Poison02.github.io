"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[45555],{91065:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>o,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=s(74848),t=s(28453);const c={id:"hash-table",slug:"/algorithm/hash-table",title:"\u54c8\u5e0c\u8868",authors:"kuizuo",tags:["algorithm","hash-table"],keywords:["algorithm","hash-table"]},l=void 0,i={id:"skill/algorithm/hash-table",title:"\u54c8\u5e0c\u8868",description:"\u5feb\u4e50\u6570",source:"@site/docs/skill/algorithm/5.\u54c8\u5e0c\u8868.md",sourceDirName:"skill/algorithm",slug:"/algorithm/hash-table",permalink:"/en/docs/algorithm/hash-table",draft:!1,unlisted:!1,tags:[{label:"algorithm",permalink:"/en/docs/tags/algorithm"},{label:"hash-table",permalink:"/en/docs/tags/hash-table"}],version:"current",sidebarPosition:5,frontMatter:{id:"hash-table",slug:"/algorithm/hash-table",title:"\u54c8\u5e0c\u8868",authors:"kuizuo",tags:["algorithm","hash-table"],keywords:["algorithm","hash-table"]}},a={},d=[{value:"\u5feb\u4e50\u6570",id:"\u5feb\u4e50\u6570",level:2},{value:"\u6211\u7684\u89e3\u6cd5",id:"\u6211\u7684\u89e3\u6cd5",level:3},{value:"\u6539\u8fdb",id:"\u6539\u8fdb",level:3},{value:"\u6700\u957f\u8fde\u7eed\u5e8f\u5217",id:"\u6700\u957f\u8fde\u7eed\u5e8f\u5217",level:2},{value:"\u54c8\u5e0c\u8868",id:"\u54c8\u5e0c\u8868",level:3},{value:"\u5355\u8bcd\u89c4\u5f8b",id:"\u5355\u8bcd\u89c4\u5f8b",level:2},{value:"\u6211\u7684\u89e3\u6cd5",id:"\u6211\u7684\u89e3\u6cd5-1",level:3},{value:"\u6b63\u786e\u7b54\u6848",id:"\u6b63\u786e\u7b54\u6848",level:3},{value:"\u540c\u6784\u5b57\u7b26\u4e32",id:"\u540c\u6784\u5b57\u7b26\u4e32",level:3}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u5feb\u4e50\u6570",children:(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/happy-number",children:"\u5feb\u4e50\u6570"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u7f16\u5199\u4e00\u4e2a\u7b97\u6cd5\u6765\u5224\u65ad\u4e00\u4e2a\u6570 ",(0,r.jsx)(e.code,{children:"n"})," \u662f\u4e0d\u662f\u5feb\u4e50\u6570\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u300c\u5feb\u4e50\u6570\u300d"})," \u5b9a\u4e49\u4e3a\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5bf9\u4e8e\u4e00\u4e2a\u6b63\u6574\u6570\uff0c\u6bcf\u4e00\u6b21\u5c06\u8be5\u6570\u66ff\u6362\u4e3a\u5b83\u6bcf\u4e2a\u4f4d\u7f6e\u4e0a\u7684\u6570\u5b57\u7684\u5e73\u65b9\u548c\u3002"}),"\n",(0,r.jsxs)(e.li,{children:["\u7136\u540e\u91cd\u590d\u8fd9\u4e2a\u8fc7\u7a0b\u76f4\u5230\u8fd9\u4e2a\u6570\u53d8\u4e3a 1\uff0c\u4e5f\u53ef\u80fd\u662f ",(0,r.jsx)(e.strong,{children:"\u65e0\u9650\u5faa\u73af"})," \u4f46\u59cb\u7ec8\u53d8\u4e0d\u5230 1\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:["\u5982\u679c\u8fd9\u4e2a\u8fc7\u7a0b ",(0,r.jsx)(e.strong,{children:"\u7ed3\u679c\u4e3a"})," 1\uff0c\u90a3\u4e48\u8fd9\u4e2a\u6570\u5c31\u662f\u5feb\u4e50\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679c ",(0,r.jsx)(e.code,{children:"n"})," \u662f ",(0,r.jsx)(e.em,{children:"\u5feb\u4e50\u6570"})," \u5c31\u8fd4\u56de ",(0,r.jsx)(e.code,{children:"true"})," \uff1b\u4e0d\u662f\uff0c\u5219\u8fd4\u56de ",(0,r.jsx)(e.code,{children:"false"})," \u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b 1\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\u8f93\u5165\uff1an = 19\n\u8f93\u51fa\uff1atrue\n\u89e3\u91ca\uff1a\n1\xb2 + 9\xb2 = 82\n8\xb2 + 2\xb2 = 68\n6\xb2 + 8\xb2 = 100\n1\xb2 + 0\xb2 + 02 = 1\n"})}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6211\u7684\u89e3\u6cd5",children:"\u6211\u7684\u89e3\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var isHappy = function (n) {\n  let deep = 0\n  while (n !== 1 && deep < 10) {\n    const digits = n.toString().split('')\n\n    n = 0\n    digits.forEach(num => {\n      n += Math.pow(num, 2)\n    })\n\n    deep++\n  }\n\n  return n === 1\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u4e2a\u89e3\u6cd5\u5176\u5b9e\u5f88\u7c97\u7cd9\uff0c\u901a\u8fc7\u80af\u5b9a\u662f\u80fd\u901a\u8fc7\u7684\uff0c\u4f46\u6709\u51e0\u4e2a\u5f88\u660e\u663e\u7684\u95ee\u9898\u3002"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\u9996\u5148\u5728",(0,r.jsx)(e.strong,{children:"\u6570\u4f4d\u5206\u79bb"}),"\u6211\u91c7\u7528 ",(0,r.jsx)(e.code,{children:"n.toString().split('')"})," \uff0c\u4e0d\u8fc7\u8fd9\u662f\u501f\u7528\u5230\u4e86 js \u7684\u7279\u6027\uff0c\u8981\u662f\u6362\u5176\u4ed6\u8bed\u8a00\u80af\u5b9a\u4e0d\u884c\u3002"]}),"\n",(0,r.jsx)(e.li,{children:"\u91cd\u590d\u8ba1\u7b97\uff0c\u6bd4\u5982 19 \u7b2c\u4e00\u6b21\u8ba1\u7b97 1\xb2 + 9\xb2 = 82\uff0c\u7b2c\u4e8c\u6b21\u8ba1\u7b97 8\xb2 + 2\xb2 = 68\uff0c\u7b2c\u4e09\u6b21\u8ba1\u7b97 6\xb2 + 8\xb2 = 100 ...\uff0c\u8fd9\u91cc\u7684 8\xb2 \u5c31\u53ef\u4ee5\u5c06\u5176\u7ed3\u679c\u5b58\u8d77\u6765\uff0c\u907f\u514d\u91cd\u590d\u8ba1\u7b97\u3002"}),"\n",(0,r.jsx)(e.li,{children:"\u56e0\u4e3a\u5b58\u5728\u67d0\u4e9b\u6570(\u5982 2)\u4f1a\u65e0\u9650\u5faa\u73af\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u7f6e\u4e00\u4e2a\u6df1\u5ea6\u9650\u5236 deep\uff0c\u4e0d\u7136\u4f1a\u6b7b\u5faa\u73af\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6539\u8fdb",children:"\u6539\u8fdb"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u6570\u4f4d\u5206\u79bb\u4e0a\u53ef\u4ee5\u4f9d\u6b21\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"num % 10"})," \u6765\u5f97\u5230 \u4e2a\u5341\u767e...\u4f4d, \u901a\u8fc7\u4e0b\u65b9\u4ee3\u7801\u5219\u53ef\u4ee5\u5f97\u5230\u6240\u6709\u4f4d\u4e0a\u7684\u6570\u5b57\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"function getDigist(nums) {\n  let digits = []\n  while (nums > 0) {\n    digits.unshift(nums % 10)\n    nums = Math.floor(nums / 10)\n  }\n\n  return digits\n}\n\ngetDigist(1234)\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u800c\u8981\u907f\u514d\u91cd\u590d\u8fd0\u7b97\u6700\u7b80\u5355\u5c31\u662f\u4f7f\u7528\u54c8\u5e0c\u96c6\u5408\uff0c\u5c06\u8ba1\u7b97\u8fc7\u7684\u7ed3\u679c\u5b58\u8d77\u6765\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"const cache = {}\n\ndigits.forEach(num => {\n  if (!cache[num]) {\n    cache[num] = Math.pow(num, 2)\n  }\n\n  n += cache[num]\n})\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u7136\u800c\u73b0\u5728\u8fd8\u6709\u4e00\u4e2a\u95ee\u9898\uff0c\u5c31\u662f\u5982\u4f55\u5904\u7406 deep \u7684\u95ee\u9898\uff0c\u7531\u4e8e\u5b98\u65b9\u9898\u89e3\u4e2d\u5bf9\u4e8e\u8fd9\u90e8\u5206\u7ed9\u51fa",(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/happy-number/solutions/224894/kuai-le-shu-by-leetcode-solution/",children:"\u5206\u6790"}),"\uff0c\u8fd9\u91cc\u4fbf\u4e0d\u8d58\u8ff0\u4e86\u3002\u5982\u679c\u4e00\u4e2a\u6570\u4e0d\u662f\u5feb\u4e50\u6570\uff0c\u90a3\u4e48\u5b83\u4e00\u5b9a\u5b58\u5728\u4e00\u4e2a\u5faa\u73af\uff0c\u53ef\u4ee5\u5c06\u751f\u6210\u5faa\u73af\u94fe\u7684\u6570\u5b57\u5b58\u5165\u54c8\u5e0c\u96c6\u5408\u4e2d\u6765\u5224\u65ad\u662f\u5426\u5904\u4e8e\u65e0\u9650\u5faa\u73af\u4e2d\u3002\u6700\u7ec8\u4ee3\u7801\u5982\u4e0b"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var isHappy = function (n) {\n  function getDigist(nums) {\n    let digits = []\n    while (nums > 0) {\n      digits.unshift(nums % 10)\n      nums = Math.floor(nums / 10)\n    }\n    return digits\n  }\n\n  const cache = {}\n  const set = new Set()\n\n  while (n !== 1 && !set.has(n)) {\n    const digits = getDigist(n)\n    set.add(n)\n\n    n = 0\n    digits.forEach(num => {\n      if (!cache[num]) {\n        cache[num] = Math.pow(num, 2)\n      }\n\n      n += cache[num]\n    })\n  }\n\n  return n === 1\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u6700\u957f\u8fde\u7eed\u5e8f\u5217",children:(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/longest-consecutive-sequence",children:"\u6700\u957f\u8fde\u7eed\u5e8f\u5217"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u7ed9\u5b9a\u4e00\u4e2a\u672a\u6392\u5e8f\u7684\u6574\u6570\u6570\u7ec4 ",(0,r.jsx)(e.code,{children:"nums"})," \uff0c\u627e\u51fa\u6570\u5b57\u8fde\u7eed\u7684\u6700\u957f\u5e8f\u5217\uff08\u4e0d\u8981\u6c42\u5e8f\u5217\u5143\u7d20\u5728\u539f\u6570\u7ec4\u4e2d\u8fde\u7eed\uff09\u7684\u957f\u5ea6\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8bf7\u4f60\u8bbe\u8ba1\u5e76\u5b9e\u73b0\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a ",(0,r.jsx)(e.code,{children:"O(n)"})," \u7684\u7b97\u6cd5\u89e3\u51b3\u6b64\u95ee\u9898\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b 1\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\u8f93\u5165\uff1anums = [100,4,200,1,3,2]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\u6700\u957f\u6570\u5b57\u8fde\u7eed\u5e8f\u5217\u662f [1, 2, 3, 4]\u3002\u5b83\u7684\u957f\u5ea6\u4e3a 4\u3002\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b 2\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"\u8f93\u5165\uff1anums = [0,3,7,2,5,8,4,6,0,1]\n\u8f93\u51fa\uff1a9\n"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u6211\u7684\u89e3\u6cd5"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsx)(e.li,{children:"\u5bf9\u6570\u7ec4\u53bb\u91cd\u5e76\u6392\u5e8f"}),"\n",(0,r.jsxs)(e.li,{children:["\u5224\u65ad ",(0,r.jsx)(e.code,{children:"nums[i]"})," === ",(0,r.jsx)(e.code,{children:"nums[i+1] - 1"}),"\uff0c\u4e3a\u771f\u5219\u7f13\u5b58\u5f53\u524d\u6700\u957f\u5e8f\u5217\u7684\u957f\u5ea6"]}),"\n",(0,r.jsx)(e.li,{children:"\u4e0d\u7b26\u5408\u6761\u4ef6\u5219\u91cd\u65b0\u8ba1\u7b97\u5f53\u524d\u6700\u957f\u5e8f\u5217\u7684\u957f\u5ea6\uff0c\u53d6 maxLen \u548c currentLen \u6700\u5927\u503c\u4f5c\u4e3a\u8fd4\u56de\u503c"}),"\n"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var longestConsecutive = function (nums) {\n  if (nums.length === 0) return 0\n\n  nums = [...new Set(nums)]\n  nums = nums.sort((a, b) => a - b)\n\n  const n = nums.length\n\n  let maxLen = 0\n  let currentLen = 0\n\n  for (let i = 0; i < n - 1; i++) {\n    if (nums[i] === nums[i + 1] - 1) {\n      currentLen++\n    } else {\n      maxLen = Math.max(maxLen, currentLen)\n      currentLen = 0\n    }\n  }\n\n  maxLen = Math.max(maxLen, currentLen) + 1\n\n  return maxLen\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u54c8\u5e0c\u8868",children:"\u54c8\u5e0c\u8868"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var longestConsecutive = function (nums) {\n  let numSet = new Set(nums)\n\n  let maxLen = 0\n\n  for (let num of numSet) {\n    if (!numSet.has(num - 1)) {\n      let currentNum = num\n      let currentLen = 1\n\n      while (numSet.has(currentNum + 1)) {\n        currentNum++\n        currentLen++\n      }\n\n      maxLen = Math.max(maxLen, currentLen)\n    }\n  }\n\n  return maxLen\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u89e3\u91ca: \u53ea\u6709\u5f53\u4e00\u4e2a\u6570\u662f\u8fde\u7eed\u5e8f\u5217\u7684\u7b2c\u4e00\u4e2a\u6570\u7684\u60c5\u51b5\u4e0b\u624d\u4f1a\u8fdb\u5165\u5185\u5c42\u5faa\u73af ",(0,r.jsx)(e.code,{children:"if (!numSet.has(num - 1))"}),"\uff0c\u7136\u540e\u5728\u5185\u5c42\u5faa\u73af\u4e2d\u5339\u914d\u8fde\u7eed\u5e8f\u5217\u4e2d\u7684\u6570\uff0c\u56e0\u6b64\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e2a\u6570\u53ea\u4f1a\u8fdb\u5165\u5185\u5c42\u5faa\u73af\u4e00\u6b21\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5355\u8bcd\u89c4\u5f8b",children:(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/word-pattern",children:"\u5355\u8bcd\u89c4\u5f8b"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u7ed9\u5b9a\u4e00\u79cd\u89c4\u5f8b ",(0,r.jsx)(e.code,{children:"pattern"})," \u548c\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,r.jsx)(e.code,{children:"s"})," \uff0c\u5224\u65ad ",(0,r.jsx)(e.code,{children:"s"})," \u662f\u5426\u9075\u5faa\u76f8\u540c\u7684\u89c4\u5f8b\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u91cc\u7684 ",(0,r.jsx)(e.strong,{children:"\u9075\u5faa"})," \u6307\u5b8c\u5168\u5339\u914d\uff0c\u4f8b\u5982\uff0c ",(0,r.jsx)(e.code,{children:"pattern"})," \u91cc\u7684\u6bcf\u4e2a\u5b57\u6bcd\u548c\u5b57\u7b26\u4e32 ",(0,r.jsx)(e.code,{children:"s"})," \u4e2d\u7684\u6bcf\u4e2a\u975e\u7a7a\u5355\u8bcd\u4e4b\u95f4\u5b58\u5728\u7740\u53cc\u5411\u8fde\u63a5\u7684\u5bf9\u5e94\u89c4\u5f8b\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b1:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'\u8f93\u5165: pattern = "abba", s = "dog cat cat dog"\n\u8f93\u51fa: true\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b 2:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'\u8f93\u5165:pattern = "abba", s = "dog cat cat fish"\n\u8f93\u51fa: false\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b 3:"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:'\u8f93\u5165: pattern = "aaaa", s = "dog cat cat dog"\n\u8f93\u51fa: false\n'})}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u6211\u7684\u89e3\u6cd5-1",children:"\u6211\u7684\u89e3\u6cd5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var wordPattern = function (pattern, s) {\n    // \u63d0\u53d6 pattern \u7684\u7d22\u5f15 { a: [0,3], b:[1,2] }\n    const rules = {}\n    pattern.split('').forEach((p, i) => {\n        rules[p] ||= []\n        rules[p].push(i)\n    })\n\n    const words = s.match(/[a-z]+\\b/g)\n\n    for (let value of Object.values(rules)) {\n        const group = new Set()\n\n        for (let v of value) {\n            if (group.size === 0) {\n                group.add(words[v])\n            }\n\n            if (!group.has(words[v])) {\n                return false\n            }\n\n            group.add(words[v])\n        }\n    }\n    return true\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u800c\u5bf9\u4e8e\u4e0b\u5217\u6570\u636e\u4f1a\u8fd4\u56de true\uff0c\u663e\u7136\u662f\u4e0d\u7b26\u5408\u6761\u4ef6\u7684\u3002"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:'pattern = "abba"'}),"\n",(0,r.jsx)(e.p,{children:'s = "dog dog dog dog"'}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u539f\u56e0\u5c31\u5728\u4e8e ab \u8981\u4e0d\u540c\uff0c\u56e0\u6b64\u5c31\u9700\u8981\u6539\u8fdb\u9a8c\u8bc1\u7ec4 group\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e8e\u662f\u5c31\u60f3\u5230\u65e2\u7136\u63d0\u53d6 pattern \u7684\u7d22\u5f15\uff0c\u4e0d\u5982\u4e5f\u63d0\u53d6 words \u7d22\u5f15\uff0c\u7136\u540e\u5224\u65ad\u4e24\u8005\u503c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:'var wordPattern = function (pattern, s) {\n    function convertArray(arr) {\n        const result = [];\n        let charMap = {};\n\n        for (let i = 0; i < arr.length; i++) {\n            const char = arr[i];\n            if (charMap[char] === undefined) {\n                charMap[char] = [i];\n            } else {\n                charMap[char].push(i);\n            }\n        }\n\n        for (const char in charMap) {\n            result.push(charMap[char]);\n        }\n\n        return result;\n    }\n\n  \t// "abba" => [[0, 3], [1, 2]]\n    const patternValues = convertArray(pattern)\n    // "dog cat cat dog" => [[0, 3], [1, 2]]\n    const wordValues = convertArray(s.match(/[a-z]+\\b/g))\n\n    for (let i in patternValues) {\n        if (JSON.stringify(patternValues[i]) !== JSON.stringify(wordValues[i])) {\n            return false\n        }\n    }\n\n    return true\n};\n'})}),"\n",(0,r.jsxs)(e.p,{children:["\u7136\u800c\u6211\u6ca1\u60f3\u5230\uff0c\u4f46\u6709\u5b57\u6bcd\u4e3a ",(0,r.jsx)(e.strong,{children:"constructor"})," \u65f6\uff0c",(0,r.jsx)(e.code,{children:"wordsRules[w]"}),"  \u5c31\u4f1a\u53d8\u6210 ",(0,r.jsx)(e.code,{children:"wordsRules[constructor]"})," \u76f8\u5f53\u4e8e\u4e0b\u56fe\u6240\u793a\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/202309210100004.png",alt:"image-20230921010005890"})}),"\n",(0,r.jsxs)(e.p,{children:["\u4e0d\u8fc7\u4e5f\u597d\u89e3\u51b3\uff0c\u56e0\u4e3a\u8fd9\u91cc\u7684 key ",(0,r.jsx)(e.code,{children:"a,b,dog,cat"})," \u4e8b\u5b9e\u4e0a\u6211\u4eec\u90fd\u6ca1\u7528\u5230\u3002\u53ea\u9700\u8981\u628a",(0,r.jsx)(e.code,{children:"{ a: [0,3], b: [1,2] }"})," \u8f6c\u6210 ",(0,r.jsx)(e.code,{children:"[[0,3], [1,2]]"})," \u5373\u53ef\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u7136\u800c\u6211\u53d1\u73b0 \u5c06 ",(0,r.jsx)(e.code,{children:'"abba"'})," \u8f6c\u6210 ",(0,r.jsx)(e.code,{children:"[[0,3], [1,2]]"})," \u5728\u4e0d\u501f\u52a9 ",(0,r.jsx)(e.code,{children:"Object.values()"})," \u60c5\u51b5\u4e0b\u662f\u4e00\u4ef6\u5f88\u56f0\u96be\u7684\u4e8b\u60c5\u3002\u4e8e\u662f\u65e2\u7136 ",(0,r.jsx)(e.code,{children:"{}[constructor]"})," \u4e0d\u884c\uff0c\u90a3\u4e48\u6211\u5c31\u7528 ",(0,r.jsx)(e.code,{children:"Map.get()"})," \u6765\u89e3\u51b3\u4fbf\u53ef\u3002\u8d34\u4e0a ",(0,r.jsx)(e.code,{children:"convertArray"})," \u51fd\u6570\u4ee3\u7801"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"function convertArray(arr) {\n        const result = [];\n        const charMap = new Map();\n\n        for (let i = 0; i < arr.length; i++) {\n            const char = arr[i];\n            if (charMap.has(char)) {\n                charMap.get(char).push(i);\n            } else {\n                charMap.set(char, [i]);\n            }\n        }\n\n        charMap.forEach((indices) => result.push(indices));\n\n        return result;\n    }\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5f88\u663e\u7136\uff0c\u4e0a\u8ff0\u7684\u89e3\u6cd5\u7f3a\u9677\u5f88\u591a\uff0c\u8fd9\u91cc\u5c31\u4e0d\u4e00\u4e00\u5217\u4e3e\u4e86\uff0c\u76f4\u63a5\u6765\u770b\u6b63\u786e\u7b54\u6848\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u6b63\u786e\u7b54\u6848",children:"\u6b63\u786e\u7b54\u6848"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var wordPattern = function (pattern, s) {\n    const word2ch = new Map();\n    const ch2word = new Map();\n    const words = s.split(' ');\n    if (pattern.length !== words.length) {\n        return false;\n    }\n\n    for (const [i, word] of words.entries()) {\n        const ch = pattern[i];\n        if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {\n            return false;\n        }\n        word2ch.set(word, ch);\n        ch2word.set(ch, word);\n    }\n    return true;\n};\xcf\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u8981\u5224\u65ad\u4e00\u4e2a\u96c6\u5408\u4e0e\u53e6\u4e00\u4e2a\u96c6\u5408\u662f\u5426\u76f8\u540c\u7684\u5173\u7cfb\u53eb\u300c\u53cc\u5c04\u300d\uff0c\u5229\u7528 \u4e24\u4e2a\u54c8\u5e0c\u96c6\u5408\u7684 key \u4e0e value \u6765\u5224\u65ad\u4fbf\u53ef\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u540c\u6784\u5b57\u7b26\u4e32",children:(0,r.jsx)(e.a,{href:"https://leetcode.cn/problems/isomorphic-strings",children:"\u540c\u6784\u5b57\u7b26\u4e32"})}),"\n",(0,r.jsx)(e.p,{children:"\u6709\u4e86\u4e0a\u9898\u89e3\u9898\u601d\u8def\uff0c\u8fd9\u9898\u5c31\u5bb9\u6613\u8bb8\u591a\u4e86\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"var isIsomorphic = function(s, t) {\n    const s2t = {};\n    const t2s = {};\n  \n    for (let i = 0; i < s.length; ++i) {\n        const x = s[i], y = t[i];\n        if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {\n            return false;\n        }\n        s2t[x] = y;\n        t2s[y] = x;\n    }\n    return true;\n};\n"})})]})}function o(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},28453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>i});var r=s(96540);const t={},c=r.createContext(t);function l(n){const e=r.useContext(c);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);