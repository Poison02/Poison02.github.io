"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[97913],{26878:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>t});var l=n(74848),a=n(28453);const r={slug:"java-reflect",title:"java\u53cd\u5c04",date:new Date("2022-01-16T00:00:00.000Z"),authors:"kuizuo",tags:["java"],keywords:["java"]},c=void 0,i={id:"skill/programming-languages/java/Java\u53cd\u5c04",title:"java\u53cd\u5c04",description:"\u4ec0\u4e48\u662f\u53cd\u5c04\uff1f",source:"@site/docs/skill/programming-languages/java/Java\u53cd\u5c04.md",sourceDirName:"skill/programming-languages/java",slug:"/skill/programming-languages/java/java-reflect",permalink:"/docs/skill/programming-languages/java/java-reflect",draft:!1,unlisted:!1,tags:[{label:"java",permalink:"/docs/tags/java"}],version:"current",frontMatter:{slug:"java-reflect",title:"java\u53cd\u5c04",date:"2022-01-16T00:00:00.000Z",authors:"kuizuo",tags:["java"],keywords:["java"]},sidebar:"skill",previous:{title:"Java",permalink:"/docs/category/java"},next:{title:"Python",permalink:"/docs/category/python"}},d={},t=[{value:"\u4ec0\u4e48\u662f\u53cd\u5c04\uff1f\u3000\u3000",id:"\u4ec0\u4e48\u662f\u53cd\u5c04",level:2},{value:"\u53cd\u5c04\u80fd\u505a\u4ec0\u4e48\uff1f",id:"\u53cd\u5c04\u80fd\u505a\u4ec0\u4e48",level:2},{value:"\u53cd\u5c04\u5e38\u7528 API",id:"\u53cd\u5c04\u5e38\u7528-api",level:2},{value:"\u83b7\u53d6 Class \u5bf9\u8c61",id:"\u83b7\u53d6-class-\u5bf9\u8c61",level:3},{value:"\u54ea\u4e9b\u6709 Class \u5bf9\u8c61",id:"\u54ea\u4e9b\u6709-class-\u5bf9\u8c61",level:4},{value:"\u521b\u5efa\u7c7b\u5bf9\u8c61\uff08\u4e0e\u83b7\u53d6\u6784\u9020\u51fd\u6570\uff09",id:"\u521b\u5efa\u7c7b\u5bf9\u8c61\u4e0e\u83b7\u53d6\u6784\u9020\u51fd\u6570",level:3},{value:"\u83b7\u53d6\u7c7b\u5c5e\u6027",id:"\u83b7\u53d6\u7c7b\u5c5e\u6027",level:3},{value:"\u83b7\u53d6\u7c7b\u65b9\u6cd5",id:"\u83b7\u53d6\u7c7b\u65b9\u6cd5",level:3},{value:"\u83b7\u53d6\u7236\u7c7b",id:"\u83b7\u53d6\u7236\u7c7b",level:3},{value:"\u83b7\u53d6\u5185\u90e8\u7c7b",id:"\u83b7\u53d6\u5185\u90e8\u7c7b",level:3},{value:"\u83b7\u53d6\u63a5\u53e3",id:"\u83b7\u53d6\u63a5\u53e3",level:3},{value:"\u5176\u4ed6\u65b9\u6cd5",id:"\u5176\u4ed6\u65b9\u6cd5",level:3}];function o(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"\u4ec0\u4e48\u662f\u53cd\u5c04",children:"\u4ec0\u4e48\u662f\u53cd\u5c04\uff1f\u3000\u3000"}),"\n",(0,l.jsx)(s.p,{children:"Java \u53cd\u5c04\uff08Reflection\uff09\u5c31\u662f\u5728\u8fd0\u884c\u72b6\u6001\u4e2d\uff0c\u5bf9\u4e8e\u4efb\u610f\u4e00\u4e2a\u7c7b\uff0c\u90fd\u80fd\u591f\u77e5\u9053\u8fd9\u4e2a\u7c7b\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff1b\u5bf9\u4e8e\u4efb\u610f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90fd\u80fd\u591f\u8c03\u7528\u5b83\u7684\u4efb\u610f\u65b9\u6cd5\u548c\u5c5e\u6027\uff1b\u5e76\u4e14\u80fd\u6539\u53d8\u5b83\u7684\u5c5e\u6027\u3002\uff08\u6458\u81ea\u7f51\u7edc\uff09"}),"\n",(0,l.jsx)(s.h2,{id:"\u53cd\u5c04\u80fd\u505a\u4ec0\u4e48",children:"\u53cd\u5c04\u80fd\u505a\u4ec0\u4e48\uff1f"}),"\n",(0,l.jsx)(s.p,{children:"\u7531\u4e8e\u6211\u4eec\u80fd\u591f\u77e5\u9053\u8fd9\u4e2a\u7c7b\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u5e76\u4e14\u53ef\u4ee5\u8c03\u7528\u5176\u65b9\u6cd5\u4e0e\u5c5e\u6027\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u53ef\u4ee5\u5728\u5916\u90e8\uff0c\u4e0d\u901a\u8fc7\u4fee\u6539\u7c7b\u7684\u5f62\u5f0f\u6765\u7ed9\u7c7b\u589e\u52a0\u989d\u5916\u81ea\u5b9a\u4e49\u529f\u80fd\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u5728\u4e00\u4e9b\u6846\u67b6\u5f00\u53d1\u4e2d\uff0c\u53ef\u4ee5\u66f4\u7075\u6d3b\u7684\u7f16\u5199\u4ee3\u7801\uff0c\u5728\u8fd0\u884c\u65f6\u88c5\u914d\u65e0\u9700\u9488\u5bf9\u539f\u7c7b\u8fdb\u884c\u5927\u5e45\u5ea6\u6539\u52a8\uff0c\u964d\u4f4e\u4ee3\u7801\u8026\u5408\u5ea6\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u5728\u5b89\u5353\u9006\u5411\u4e2d\uff0c\u53cd\u5c04\u7684\u4e3b\u8981\u4f5c\u7528\u5c31\u662f\u5bfb\u627e\u5230\u67d0\u4e2a\u7c7b\uff0c\u53bb\u6ce8\u5165\u6211\u4eec\u7684\u4ee3\u7801\uff0c\u4ee5\u4fbf\u67e5\u770b\u8c03\u7528\u524d\u540e\u7684\u53c2\u6570\u4e0e\u7ed3\u679c\uff0c\u4e5f\u79f0\u4e4b\u4e3a hook\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"\u53cd\u5c04\u5e38\u7528-api",children:"\u53cd\u5c04\u5e38\u7528 API"}),"\n",(0,l.jsx)(s.h3,{id:"\u83b7\u53d6-class-\u5bf9\u8c61",children:"\u83b7\u53d6 Class \u5bf9\u8c61"}),"\n",(0,l.jsx)(s.p,{children:"\u5728\u53cd\u5c04\u4e2d\uff0c\u8981\u83b7\u53d6\u4e00\u4e2a\u7c7b\u6216\u8c03\u7528\u4e00\u4e2a\u7c7b\u7684\u65b9\u6cd5\uff0c\u6211\u4eec\u9996\u5148\u9700\u8981\u83b7\u53d6\u5230\u8be5\u7c7b\u7684 Class \u5bf9\u8c61\uff0c\u83b7\u53d6 Class \u7c7b\u5bf9\u8c61\u4ee5\u4e0b\u65b9\u6cd5\uff1a"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"1\u3001\u4f7f\u7528 Class.forName \u9759\u6001\u65b9\u6cd5\u3002\u5f53\u4f60\u77e5\u9053\u8be5\u7c7b\u7684\u5168\u8def\u5f84\u540d\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u65b9\u6cd5\u83b7\u53d6 Class \u7c7b\u5bf9\u8c61\u3002"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'Class cls = Class.forName("java.lang.String");\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"2\u3001\u4f7f\u7528 .class \u65b9\u6cd5\u3002"})}),"\n",(0,l.jsx)(s.p,{children:"\u8fd9\u79cd\u65b9\u6cd5\u53ea\u9002\u5408\u5728\u7f16\u8bd1\u524d\u5c31\u77e5\u9053\u64cd\u4f5c\u7684 Class\u3002"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"Class cls = String.class;\n"})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"3\u3001\u4f7f\u7528\u7c7b\u5bf9\u8c61\u7684 getClass() \u65b9\u6cd5\u3002"})}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'String str = new String("Hello");\nClass cls = str.getClass();\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"4\u3001ClassLoader.loadClass()"})}),"\n",(0,l.jsxs)(s.p,{children:["\u524d\u63d0\uff1a\u5df2\u7ecf\u83b7\u53d6\u5230 ClassLoader \u7684\u60c5\u51b5\u4e0b\uff08Person \u662f\u5b9a\u4e49\u597d\u7684\u7c7b\uff0c\u5176\u4e2d",(0,l.jsx)(s.code,{children:"String.class.getClassLoader()"}),"\u83b7\u53d6\u5230\u5f97\u4e3a null\uff09"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'ClassLoader clsl = Person.class.getClassLoader();\nClass<?> cls = clsl.loadClass("Person");\n'})}),"\n",(0,l.jsxs)(s.p,{children:["\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u7c7b\u5bf9\u8c61\u83b7\u53d6 ",(0,l.jsx)(s.code,{children:"int.class"})," ",(0,l.jsx)(s.code,{children:"Integer.TYPE"})," \u5f97\u5230",(0,l.jsx)(s.code,{children:"int"})]}),"\n",(0,l.jsxs)(s.p,{children:["\u5305\u88c5\u7c7b\u7684 Class \u7c7b\u5bf9\u8c61\u83b7\u53d6 ",(0,l.jsx)(s.code,{children:"Integer.class"})," \u5f97\u5230 ",(0,l.jsx)(s.code,{children:"class java.lang.Integer"})]}),"\n",(0,l.jsx)(s.h4,{id:"\u54ea\u4e9b\u6709-class-\u5bf9\u8c61",children:"\u54ea\u4e9b\u6709 Class \u5bf9\u8c61"}),"\n",(0,l.jsx)(s.p,{children:"\u5e76\u975e\u6240\u6709 java \u5bf9\u8c61\u90fd\u6709 Class \u5bf9\u8c61\uff0c\u83b7\u53d6\u65b9\u5f0f\u5982\u4e0a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u5916\u90e8\u7c7b"}),"\n",(0,l.jsx)(s.li,{children:"\u5185\u90e8\u7c7b"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u5185\u90e8\u7c7b\u7684\u83b7\u53d6\u65b9\u5f0f\u901a\u8fc7$\u8fde\u63a5\u5916\u90e8\u7c7b\u4e0e\u5185\u90e8\u7c7b\uff0c\u591a\u4e2a\u5185\u90e8\u7c7b\u4e5f\u53ef\u901a\u8fc7$1\uff0c$2 \u4f9d\u6b21\u83b7\u53d6"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'Class cls1 = Class.forName("OutClass$InnerClass");\nClass cls2 = Class.forName("OutClass$1");\n'})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u63a5\u53e3 =>",(0,l.jsx)(s.code,{children:"interface DemoI"})]}),"\n",(0,l.jsxs)(s.li,{children:["\u6570\u7ec4 => ",(0,l.jsx)(s.code,{children:"class [Ljava.lang.String;"})]}),"\n",(0,l.jsx)(s.li,{children:"\u679a\u4e3e enum"}),"\n",(0,l.jsx)(s.li,{children:"Thread.State"}),"\n",(0,l.jsx)(s.li,{children:"\u6ce8\u89e3 anntation"}),"\n",(0,l.jsx)(s.li,{children:"\u57fa\u672c\u6570\u636e\u7c7b\u578b"}),"\n",(0,l.jsx)(s.li,{children:"\u5305\u88c5\u7c7b"}),"\n",(0,l.jsx)(s.li,{children:"void"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"\u521b\u5efa\u7c7b\u5bf9\u8c61\u4e0e\u83b7\u53d6\u6784\u9020\u51fd\u6570",children:"\u521b\u5efa\u7c7b\u5bf9\u8c61\uff08\u4e0e\u83b7\u53d6\u6784\u9020\u51fd\u6570\uff09"}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"1\u3001\u901a\u8fc7 Class \u5bf9\u8c61\u7684 newInstance \u65b9\u6cd5"}),"\uff08\u65e0\u6cd5\u4f20\u53c2\uff09"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"Person p = Person.class.newInstance();\n// \u76f8\u5f53\u4e8e Person p = new Person();\n"})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"2\u3001\u901a\u8fc7 Constructor \u5bf9\u8c61\u7684 newInstance() \u65b9\u6cd5"})," \uff08\u53ef\u4f20\u53c2\u6570\uff09"]}),"\n",(0,l.jsx)(s.p,{children:"\u53ef\u4ee5\u4f20\u53c2\u6570\uff0c\u4f46\u9700\u8981\u77e5\u9053\u4f20\u5165\u53c2\u6570\u7c7b\u578b\uff0c\u4ee5\u786e\u5b9a\u54ea\u4e2a\u6784\u9020\u51fd\u6570\u3002"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'Constructor<Person> constructor = Person.class.getConstructor(String.class);\nPerson p = constructor.newInstance("kuizuo");\n'})}),"\n",(0,l.jsxs)(s.p,{children:["\u5982\u679c\u6784\u9020\u51fd\u6570\u662f\u79c1\u6709\u65b9\u6cd5\uff0c\u5219\u901a\u8fc7",(0,l.jsx)(s.code,{children:"getDeclaredConstructor"}),"\u83b7\u53d6 Constructor"]}),"\n",(0,l.jsxs)(s.p,{children:["\u540c\u65f6\u8bbe\u7f6e\u662f\u5426\u8bbf\u95ee ",(0,l.jsx)(s.code,{children:"constructor.setAccessible(true)"})," \u624d\u53ef\u8bbf\u95ee"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'Constructor<Person> constructor = Person.class.getDeclaredConstructor(String.class);\nconstructor.setAccessible(true);\nPerson p = constructor.newInstance("kuizuo");\n'})}),"\n",(0,l.jsxs)(s.p,{children:[(0,l.jsx)(s.strong,{children:"getParamerTypes"})," \u83b7\u53d6\u53c2\u6570\u7c7b\u578b\u6570\u7ec4(Class [])"]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u8981\u83b7\u53d6\u79c1\u6709\u5c5e\u6027\uff0c\u79c1\u6709\u65b9\u6cd5\u6216\u79c1\u6709\u6784\u9020\u5668\uff0c\u5219\u5fc5\u987b\u4f7f\u7528\u6709 declared \u5173\u952e\u5b57\u7684\u65b9\u6cd5\u3002"})}),"\n",(0,l.jsx)(s.h3,{id:"\u83b7\u53d6\u7c7b\u5c5e\u6027",children:"\u83b7\u53d6\u7c7b\u5c5e\u6027"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"**getField **\u53ea\u53ef\u83b7\u53d6\u516c\u6709\u5c5e\u6027"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'Field nameField = Person.class.getField("name");\nString name =(String) nameField.get(p);\n'})}),"\n",(0,l.jsx)(s.p,{children:"\u8bbe\u7f6e\u5c5e\u6027\u503c"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'Field nameField = Person.class.getField("name");\nnameField.set(p,"kuizuo12");\n'})}),"\n",(0,l.jsx)(s.p,{children:"\u8bbe\u7f6e\u9759\u6001\u5c5e\u6027\u503c set \u7b2c\u4e00\u4e2a\u53c2\u6570\u7ed9 null \u5373\u53ef"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'Field nameField = Person.class.getField("name");\nnameField.set(null,"kuizuo12");\n'})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"**getDeclaredField **\u53ea\u53ef\u83b7\u53d6\u6240\u6709\u5c5e\u6027"}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"getFields"})," \u83b7\u53d6\u6240\u6709\u5171\u6709\u5c5e\u6027"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"getDeclaredFields"})," \u83b7\u53d6\u6240\u6709\u5c5e\u6027"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"  Field[] fields = Person.class.getDeclaredFields();\n  for (Field field : fields) {\n      System.out.println(field.getName());\n  }\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u83b7\u53d6\u7c7b\u65b9\u6cd5",children:"\u83b7\u53d6\u7c7b\u65b9\u6cd5"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"getMethod"})," \u83b7\u53d6"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u53c2\u6570\u4e00\u4e3a\u65b9\u6cd5\u540d\uff0c\u5176\u4f59\u53c2\u6570\u4e3a\u53c2\u6570\u7c7b\u578b"}),"\n",(0,l.jsxs)(s.p,{children:["\u8c03\u7528\u901a\u8fc7",(0,l.jsx)(s.code,{children:"method.invoke"}),"\u8c03\u7528\uff0c\u53c2\u6570\u4e00\u4e3a\u5bf9\u8c61\uff0c\u5176\u4f59\u53c2\u6570\u4e3a\u5b9e\u53c2"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'Method method = Person.class.getMethod("say", String.class);\nmethod.invoke(p, "hello")\uff1b\n\n'})}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.strong,{children:"\u5982\u679c\u662f\u9759\u6001\u65b9\u6cd5\uff0cinvoke \u7b2c\u4e00\u4e2a\u53c2\u6570\u53ef\u4f20\u5165 null"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"getDeclaredMethod"})," \u53ef\u83b7\u53d6\u79c1\u6709\u65b9\u6cd5 \uff08\u4e5f\u9700\u8981 setAccessible\uff09"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'Method method = Person.class.getDeclaredMethod("say", String.class);\nmethod.setAccessible(true);\nmethod.invoke(p, "hello");\n'})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"getMethods"})," \u83b7\u53d6\u6240\u6709\u516c\u6709\u65b9\u6cd5"]}),"\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"getDeclaredMethods"}),"\u83b7\u53d6\u6240\u6709\u65b9\u6cd5"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"Method[] methods = Person.class.getDeclaredMethods();\nfor (Method method : methods) {\n    System.out.println(method.getName());\n}\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u83b7\u53d6\u7236\u7c7b",children:"\u83b7\u53d6\u7236\u7c7b"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"getSuperclass"})}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u63a5\u53e3\u65e0\u7236\u7c7b"}),"\n",(0,l.jsx)(s.h3,{id:"\u83b7\u53d6\u5185\u90e8\u7c7b",children:"\u83b7\u53d6\u5185\u90e8\u7c7b"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.strong,{children:"getClasses"})}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"Class<?>[] classes = Person.class.getClasses();\nSystem.out.println(classes[0]);\n"})}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.strong,{children:"getDeclaredClasses"})," \u83b7\u53d6\u6240\u6709\u5185\u90e8\u7c7b\uff08\u5305\u62ec\u79c1\u6709\uff09"]}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"\u83b7\u53d6\u63a5\u53e3",children:"\u83b7\u53d6\u63a5\u53e3"}),"\n",(0,l.jsx)(s.p,{children:"\u524d\u63d0\uff1a\u5b9e\u73b0\uff08implements\uff09\u4e00\u4e2a\u63a5\u53e3"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:"Class<?>[] interfaces = Person.class.getInterfaces();\nSystem.out.println(interfaces.length);\n"})}),"\n",(0,l.jsx)(s.h3,{id:"\u5176\u4ed6\u65b9\u6cd5",children:"\u5176\u4ed6\u65b9\u6cd5"}),"\n",(0,l.jsxs)(s.p,{children:["\u5b98\u65b9\u6587\u6863 ",(0,l.jsx)(s.a,{href:"https://docs.oracle.com/javase/8/docs/api/",children:"Class (Java Platform SE 8 ) (oracle.com)"})]}),"\n",(0,l.jsx)(s.p,{children:"\u5927\u81f4\u5e38\u7528\u7684\u65b9\u6cd5\u5982\u4e0a\uff0c\u5176\u4f59\u7684 Class \u7c7b\u7684\u65b9\u6cd5\u8fd8\u6709"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"getName \u83b7\u53d6\u5168\u7c7b\u540d"}),"\n",(0,l.jsx)(s.li,{children:"getSimpleName \u83b7\u53d6\u7b80\u5355\u7c7b\u540d"}),"\n",(0,l.jsx)(s.li,{children:"getModifiers \u83b7\u53d6\u6807\u8bc6\u7b26"}),"\n",(0,l.jsx)(s.li,{children:"getAnnotations \u83b7\u53d6\u6ce8\u89e3"}),"\n",(0,l.jsx)(s.li,{children:"getPackage \u83b7\u53d6\u5305\u540d"}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u5177\u4f53\u4ee3\u7801\u5c31\u4e0d\u6f14\u793a\u4e86\u3002"})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var l=n(96540);const a={},r=l.createContext(a);function c(e){const s=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),l.createElement(r.Provider,{value:s},e.children)}}}]);