"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[93685],{91398:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var c=i(74848),l=i(28453);const s={id:"python-cv2-usage",slug:"/python-cv2-usage",title:"Python\u4e2d\u7684cv2\u4f7f\u7528",date:new Date("2022-03-06T00:00:00.000Z"),authors:"kuizuo",tags:["python"],keywords:["python"]},t=void 0,r={id:"skill/programming-languages/python/python-cv2-usage",title:"Python\u4e2d\u7684cv2\u4f7f\u7528",description:"\u6a21\u5757 cv2 \u7684\u7528\u6cd5 - \u9668\u843d&\u65b0\u751f - \u535a\u5ba2\u56ed (cnblogs.com)",source:"@site/docs/skill/programming-languages/python/Python\u4e2d\u7684cv2\u4f7f\u7528.md",sourceDirName:"skill/programming-languages/python",slug:"/python-cv2-usage",permalink:"/en/docs/python-cv2-usage",draft:!1,unlisted:!1,tags:[{label:"python",permalink:"/en/docs/tags/python"}],version:"current",frontMatter:{id:"python-cv2-usage",slug:"/python-cv2-usage",title:"Python\u4e2d\u7684cv2\u4f7f\u7528",date:"2022-03-06T00:00:00.000Z",authors:"kuizuo",tags:["python"],keywords:["python"]},sidebar:"skill",previous:{title:"Python",permalink:"/en/docs/category/python"},next:{title:"Python\u6307\u5b9a\u7248\u672c\u8fd0\u884c",permalink:"/en/docs/python-specified-versiton-run"}},o={},a=[{value:"\u5e38\u7528\u65b9\u6cd5",id:"\u5e38\u7528\u65b9\u6cd5",level:2},{value:"\u8bfb\u53d6\u56fe\u50cf",id:"\u8bfb\u53d6\u56fe\u50cf",level:3},{value:"\u5199\u5165\u56fe\u50cf",id:"\u5199\u5165\u56fe\u50cf",level:3},{value:"\u663e\u793a\u56fe\u50cf",id:"\u663e\u793a\u56fe\u50cf",level:3},{value:"img \u7684\u4e00\u4e9b\u5c5e\u6027",id:"img-\u7684\u4e00\u4e9b\u5c5e\u6027",level:3},{value:"\u989c\u8272\u8f6c\u5316",id:"\u989c\u8272\u8f6c\u5316",level:3},{value:"cv \u56fe\u7247\u5bf9\u8c61\u4e0e\u4e8c\u8fdb\u5236\u56fe\u7247\u8f6c\u5316",id:"cv-\u56fe\u7247\u5bf9\u8c61\u4e0e\u4e8c\u8fdb\u5236\u56fe\u7247\u8f6c\u5316",level:3},{value:"\u6dfb\u52a0\u8fb9\u6846",id:"\u6dfb\u52a0\u8fb9\u6846",level:3},{value:"\u6dfb\u52a0\u6587\u672c",id:"\u6dfb\u52a0\u6587\u672c",level:3},{value:"\u56fe\u7247\u7f29\u653e",id:"\u56fe\u7247\u7f29\u653e",level:3}];function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://www.cnblogs.com/shizhengwen/p/8719062.html",children:"\u6a21\u5757 cv2 \u7684\u7528\u6cd5 - \u9668\u843d&\u65b0\u751f - \u535a\u5ba2\u56ed (cnblogs.com)"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://www.cnblogs.com/zlel/p/9267629.html",children:"Python-OpenCV \u57fa\u672c\u64cd\u4f5c cv2 - \u83dc\u9e1f\u7a0b\u5e8f\u733f_python - \u535a\u5ba2\u56ed (cnblogs.com)"})}),"\n",(0,c.jsx)(e.h2,{id:"\u5e38\u7528\u65b9\u6cd5",children:"\u5e38\u7528\u65b9\u6cd5"}),"\n",(0,c.jsx)(e.h3,{id:"\u8bfb\u53d6\u56fe\u50cf",children:"\u8bfb\u53d6\u56fe\u50cf"}),"\n",(0,c.jsx)(e.p,{children:"cv2.imread(filepath,flags)"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"filepath\uff1a\u8981\u8bfb\u5165\u56fe\u7247\u7684\u5b8c\u6574\u8def\u5f84"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsx)(e.p,{children:"flags\uff1a\u8bfb\u5165\u56fe\u7247\u7684\u6807\u5fd7"}),"\n"]}),"\n",(0,c.jsxs)(e.li,{children:["\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"cv2.IMREAD_COLOR\uff1a\u9ed8\u8ba4\u53c2\u6570(3)\uff0c\u8bfb\u5165\u4e00\u526f\u5f69\u8272\u56fe\u7247\uff0c\u5ffd\u7565 alpha \u901a\u9053"}),"\n",(0,c.jsx)(e.li,{children:"cv2.IMREAD_GRAYSCALE\uff1a\u8bfb\u5165\u7070\u5ea6\u56fe\u7247"}),"\n",(0,c.jsx)(e.li,{children:"cv2.IMREAD_UNCHANGED\uff1a\u987e\u540d\u601d\u4e49\uff0c\u8bfb\u5165\u5b8c\u6574\u56fe\u7247\uff0c\u5305\u62ec alpha \u901a\u9053"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(e.h3,{id:"\u5199\u5165\u56fe\u50cf",children:"\u5199\u5165\u56fe\u50cf"}),"\n",(0,c.jsx)(e.p,{children:"cv2.imwrite(filepath, img, flags)"}),"\n",(0,c.jsxs)(e.ul,{children:["\n",(0,c.jsx)(e.li,{children:"filepath: \u8981\u4fdd\u5b58\u56fe\u50cf\u7684\u6587\u4ef6\u540d"}),"\n",(0,c.jsx)(e.li,{children:"img: \u8981\u4fdd\u5b58\u7684\u56fe\u50cf"}),"\n",(0,c.jsx)(e.li,{children:"flags: \u53ef\u9009\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570\uff0c\u5b83\u9488\u5bf9\u7279\u5b9a\u7684\u683c\u5f0f\uff1a\u5bf9\u4e8e JPEG\uff0c\u5176\u8868\u793a\u7684\u662f\u56fe\u50cf\u7684\u8d28\u91cf\uff0c\u7528 0 - 100 \u7684\u6574\u6570\u8868\u793a\uff0c\u9ed8\u8ba4 95;\u5bf9\u4e8e png ,\u7b2c\u4e09\u4e2a\u53c2\u6570\u8868\u793a\u7684\u662f\u538b\u7f29\u7ea7\u522b\u3002\u9ed8\u8ba4\u4e3a 3."}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"cv2.IMWRITE_JPEG_QUALITY \u7c7b\u578b\u4e3a long ,\u5fc5\u987b\u8f6c\u6362\u6210 int"}),"\n",(0,c.jsx)(e.p,{children:"cv2.IMWRITE_PNG_COMPRESSION, \u4ece 0 \u5230 9 \u538b\u7f29\u7ea7\u522b\u8d8a\u9ad8\u56fe\u50cf\u8d8a\u5c0f\u3002"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"cv2.imwrite('1.png',img, [int(cv2.IMWRITE_JPEG_QUALITY), 95])\ncv2.imwrite('1.png',img, [int(cv2.IMWRITE_PNG_COMPRESSION), 9])\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u663e\u793a\u56fe\u50cf",children:"\u663e\u793a\u56fe\u50cf"}),"\n",(0,c.jsx)(e.p,{children:"\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"import cv2\n\nimg = cv2.imread('temp.jpg')\ncv2.imwrite('save.jpg', img)\ncv2.imshow('img', img)\ncv2.waitKey(0)\ncv2.destroyAllWindow()\n"})}),"\n",(0,c.jsx)(e.h3,{id:"img-\u7684\u4e00\u4e9b\u5c5e\u6027",children:"img \u7684\u4e00\u4e9b\u5c5e\u6027"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"img.shape # (1200, 1920, 3) \u5bbd\u3001\u9ad8\u3001\u901a\u9053\u6570\nimg.size # \u50cf\u7d20\u4e2a\u6570\nimg.dtype # uint8\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u989c\u8272\u8f6c\u5316",children:"\u989c\u8272\u8f6c\u5316"}),"\n",(0,c.jsx)(e.p,{children:"\u7531\u4e8e cv2 \u5f97\u5230\u7684\u56fe\u7247\u662f BGR \u683c\u5f0f\uff0c\u800c\u975e\u4f20\u7edf\u7684 RGB \u683c\u5f0f\uff0c\u56e0\u6b64\u9700\u8981\u8fdb\u884c\u8f6c\u5316\u3002"}),"\n",(0,c.jsx)(e.p,{children:"\u6709\u4ee5\u4e0b\u4e09\u79cd\u65b9\u6cd5"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"im_bgr = cv2.imread('temp.jpg')\n\nim_rgb = im_bgr[:, :, [2, 1, 0]]\nim_rgb = im_bgr[:, :, ::-1]\nim_rgb = cv2.cvtColor(im_bgr, cv2.COLOR_BGR2RGB)\n"})}),"\n",(0,c.jsx)(e.p,{children:"\u8fd8\u6709\u4e00\u4e9b\u989c\u8272\u7a7a\u95f4\u8f6c\u5316"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"#\u5f69\u8272\u56fe\u50cf\u8f6c\u4e3a\u7070\u5ea6\u56fe\u50cf\nimg2 = cv2.cvtColor(img,cv2.COLOR_RGB2GRAY)\n#\u7070\u5ea6\u56fe\u50cf\u8f6c\u4e3a\u5f69\u8272\u56fe\u50cf\nimg3 = cv2.cvtColor(img,cv2.COLOR_GRAY2RGB)\n# cv2.COLOR_X2Y\uff0c\u5176\u4e2dX,Y = RGB, BGR, GRAY, HSV, YCrCb, XYZ, Lab, Luv, HLS\n"})}),"\n",(0,c.jsx)(e.h3,{id:"cv-\u56fe\u7247\u5bf9\u8c61\u4e0e\u4e8c\u8fdb\u5236\u56fe\u7247\u8f6c\u5316",children:"cv \u56fe\u7247\u5bf9\u8c61\u4e0e\u4e8c\u8fdb\u5236\u56fe\u7247\u8f6c\u5316"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:"def bytes2cv(im):\n    return cv2.imdecode(np.array(bytearray(im), dtype='uint8'), cv2.IMREAD_UNCHANGED)\n\ndef cv2bytes(im):\n    return np.array(cv2.imencode('.png', im)[1]).tobytes()\n"})}),"\n",(0,c.jsx)(e.h3,{id:"\u6dfb\u52a0\u8fb9\u6846",children:"\u6dfb\u52a0\u8fb9\u6846"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:'import cv2\n\nposes = [[111, 46, 151, 86], [177, 46, 212, 80],\n         [246, 89, 286, 128], [240, 18, 280, 56]]\n\nimg = cv2.imread("1.jpg")\n\nfor box in poses:\n    x1, y1, x2, y2 = box\n    img = cv2.rectangle(img, (x1, y1), (x2, y2), color=(0, 0, 255), thickness=2)\n\ncv2.imwrite("result.jpg", img)\n'})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:"https://img.kuizuo.cn/result.png",alt:"result"})}),"\n",(0,c.jsx)(e.h3,{id:"\u6dfb\u52a0\u6587\u672c",children:"\u6dfb\u52a0\u6587\u672c"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:'import cv2\n\nimg = cv2.imread(\'temp.jpg\')\n# \u56fe\u7247\u5bf9\u8c61\u3001\u6587\u672c\u3001\u50cf\u7d20\u3001\u5b57\u4f53\u3001\u5b57\u4f53\u5927\u5c0f\u3001\u989c\u8272\u3001\u5b57\u4f53\u7c97\u7ec6\nimg_text = cv2.putText(img, "kuizuo", (50, 50),\n                    cv2.FONT_HERSHEY_DUPLEX, 5.5, (35, 175, 255), 2)\ncv2.imwrite("result.jpg", img_text)\n'})}),"\n",(0,c.jsx)(e.p,{children:"\u6548\u679c\u5982\u4e0b"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20220306203918438.png",alt:"image-20220306203918438"})}),"\n",(0,c.jsx)(e.h3,{id:"\u56fe\u7247\u7f29\u653e",children:"\u56fe\u7247\u7f29\u653e"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-python",children:'import cv2\n\nimg = cv2.imread("1.png")\ncv2.imshow("img", img)\n\nimg1 = cv2.resize(img, (200, 100))\n\ncv2.imshow("img1", img1)\n\ncv2.waitKey()\n'})})]})}function d(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},28453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>r});var c=i(96540);const l={},s=c.createContext(l);function t(n){const e=c.useContext(s);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),c.createElement(s.Provider,{value:e},n.children)}}}]);