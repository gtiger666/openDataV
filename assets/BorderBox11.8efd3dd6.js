import{a as x}from"./@vueuse.f12362bf.js";import{_ as j,f as k}from"./index.8c99d488.js";import{p as V,r as $,c as v,y as _,B as o,u as l,H as w,am as B,an as N,x as h}from"./@vue.93899e90.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";const r=d=>(B("data-v-56e93363"),d=d(),N(),d),S=["width","height"],z=["id"],I=r(()=>o("feMorphology",{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"},null,-1)),G=r(()=>o("feGaussianBlur",{in:"thicken",stdDeviation:"3",result:"blurred"},null,-1)),M=["flood-color"],R=r(()=>o("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),E=r(()=>o("feMerge",null,[o("feMergeNode",{in:"softGlowColored"}),o("feMergeNode",{in:"SourceGraphic"})],-1)),W=["fill","points"],D=["stroke","filter","points"],L=["stroke","points"],A=["stroke","points"],F=["stroke","fill","filter","points"],H=["filter","fill","points"],O=r(()=>o("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),q=[O],J=["filter","fill","points"],K=r(()=>o("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),P=[K],Q=["filter","fill","points"],T=r(()=>o("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),U=[T],X=["filter","fill","points"],Y=r(()=>o("animate",{attributeName:"opacity",values:"1;0.7;1",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),Z=[Y],ee=["filter","fill","points"],le=r(()=>o("animate",{attributeName:"opacity",values:"0.7;0.4;0.7",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),te=[le],oe=["filter","fill","points"],ie=r(()=>o("animate",{attributeName:"opacity",values:"0.5;0.2;0.5",dur:"2s",begin:"0s",repeatCount:"indefinite"},null,-1)),ae=[ie],ue=["x","fill","font-size"],se=["fill","filter","points"],re=["fill","filter","points"],ne=V({props:{propValue:null,element:null},setup(d){const u=d,f=$(null),e=$(150),i=$(150),s=$(`border-box-11-filterId-${k()}`);x(f,n=>{const c=n[0].contentRect;e.value=c.width,i.value=c.height});const a=v(()=>{const n=u.propValue.colorLeft,p=u.propValue.colorRight;return n&&p?[n,p]:n?[n,n]:p?[p,p]:["#8aaafb","#1f33a2"]}),m=v(()=>u.propValue.backgroundColor?u.propValue.backgroundColor:"transparent"),g=v(()=>u.propValue.title?u.propValue.title:""),t=v(()=>u.propValue.titleWidth?parseInt(u.propValue.titleWidth):250),y=v(()=>u.propValue.titleSize?u.propValue.titleSize:18),b=v(()=>u.propValue.titleColor?u.propValue.titleColor:"#fff");return(n,p)=>(h(),_("div",{class:"dv-border-box-11",ref:(c,C)=>{C.mainEl=c,f.value=c}},[(h(),_("svg",{class:"dv-border-svg-container",width:e.value,height:i.value},[o("defs",null,[o("filter",{id:s.value,height:"150%",width:"150%",x:"-25%",y:"-25%"},[I,G,o("feFlood",{"flood-color":l(a)[1],result:"glowColor"},null,8,M),R,E],8,z)]),o("polygon",{fill:l(m),points:`
        20, 32 ${e.value*.5-l(t)/2}, 32 ${e.value*.5-l(t)/2+20}, 53
        ${e.value*.5+l(t)/2-20}, 53 ${e.value*.5+l(t)/2}, 32
        ${e.value-20}, 32 ${e.value-8}, 48 ${e.value-8}, ${i.value-25} ${e.value-20}, ${i.value-8}
        20, ${i.value-8} 8, ${i.value-25} 8, 50
      `},null,8,W),o("polyline",{stroke:l(a)[0],filter:`url(#${s.value})`,points:`
          ${(e.value-l(t))/2}, 30
          20, 30 7, 50 7, ${50+(i.value-167)/2}
          13, ${55+(i.value-167)/2} 13, ${135+(i.value-167)/2}
          7, ${140+(i.value-167)/2} 7, ${i.value-27}
          20, ${i.value-7} ${e.value-20}, ${i.value-7} ${e.value-7}, ${i.value-27}
          ${e.value-7}, ${140+(i.value-167)/2} ${e.value-13}, ${135+(i.value-167)/2}
          ${e.value-13}, ${55+(i.value-167)/2} ${e.value-7}, ${50+(i.value-167)/2}
          ${e.value-7}, 50 ${e.value-20}, 30 ${(e.value+l(t))/2}, 30
          ${(e.value+l(t))/2-20}, 7 ${(e.value-l(t))/2+20}, 7
          ${(e.value-l(t))/2}, 30 ${(e.value-l(t))/2+20}, 52
          ${(e.value+l(t))/2-20}, 52 ${(e.value+l(t))/2}, 30
        `},null,8,D),o("polygon",{stroke:l(a)[0],fill:"transparent",points:`
          ${(e.value+l(t))/2-5}, 30 ${(e.value+l(t))/2-21}, 11
          ${(e.value+l(t))/2-27}, 11 ${(e.value+l(t))/2-8}, 34
        `},null,8,L),o("polygon",{stroke:l(a)[0],fill:"transparent",points:`
          ${(e.value-l(t))/2+5}, 30 ${(e.value-l(t))/2+22}, 49
          ${(e.value-l(t))/2+28}, 49 ${(e.value-l(t))/2+8}, 26
        `},null,8,A),o("polygon",{stroke:l(a)[0],fill:l(a)[1],filter:`url(#${s.value})`,points:`
          ${(e.value+l(t))/2-11}, 37 ${(e.value+l(t))/2-32}, 11
          ${(e.value-l(t))/2+23}, 11 ${(e.value-l(t))/2+11}, 23
          ${(e.value-l(t))/2+33}, 49 ${(e.value+l(t))/2-22}, 49
        `},null,8,F),o("polygon",{filter:`url(#${s.value})`,fill:l(a)[0],opacity:"1",points:`
          ${(e.value-l(t))/2-10}, 37 ${(e.value-l(t))/2-31}, 37
          ${(e.value-l(t))/2-25}, 46 ${(e.value-l(t))/2-4}, 46
        `},q,8,H),o("polygon",{filter:`url(#${s.value})`,fill:l(a)[0],opacity:"0.7",points:`
          ${(e.value-l(t))/2-40}, 37 ${(e.value-l(t))/2-61}, 37
          ${(e.value-l(t))/2-55}, 46 ${(e.value-l(t))/2-34}, 46
        `},P,8,J),o("polygon",{filter:`url(#${s.value})`,fill:l(a)[0],opacity:"0.5",points:`
          ${(e.value-l(t))/2-70}, 37 ${(e.value-l(t))/2-91}, 37
          ${(e.value-l(t))/2-85}, 46 ${(e.value-l(t))/2-64}, 46
        `},U,8,Q),o("polygon",{filter:`url(#${s.value})`,fill:l(a)[0],opacity:"1",points:`
          ${(e.value+l(t))/2+30}, 37 ${(e.value+l(t))/2+9}, 37
          ${(e.value+l(t))/2+3}, 46 ${(e.value+l(t))/2+24}, 46
        `},Z,8,X),o("polygon",{filter:`url(#${s.value})`,fill:l(a)[0],opacity:"0.7",points:`
          ${(e.value+l(t))/2+60}, 37 ${(e.value+l(t))/2+39}, 37
          ${(e.value+l(t))/2+33}, 46 ${(e.value+l(t))/2+54}, 46
        `},te,8,ee),o("polygon",{filter:`url(#${s.value})`,fill:l(a)[0],opacity:"0.5",points:`
          ${(e.value+l(t))/2+90}, 37 ${(e.value+l(t))/2+69}, 37
          ${(e.value+l(t))/2+63}, 46 ${(e.value+l(t))/2+84}, 46
        `},ae,8,oe),o("text",{class:"dv-border-box-11-title",x:`${e.value/2}`,y:"32",fill:l(b),"font-size":l(y),"text-anchor":"middle","dominant-baseline":"middle"},w(l(g)),9,ue),o("polygon",{fill:l(a)[0],filter:`url(#${s.value})`,points:`
          7, ${53+(i.value-167)/2} 11, ${57+(i.value-167)/2}
          11, ${133+(i.value-167)/2} 7, ${137+(i.value-167)/2}
        `},null,8,se),o("polygon",{fill:l(a)[0],filter:`url(#${s.value})`,points:`
          ${e.value-7}, ${53+(i.value-167)/2} ${e.value-11}, ${57+(i.value-167)/2}
          ${e.value-11}, ${133+(i.value-167)/2} ${e.value-7}, ${137+(i.value-167)/2}
        `},null,8,re)],8,S))],512))}});var je=j(ne,[["__scopeId","data-v-56e93363"]]);export{je as default};
