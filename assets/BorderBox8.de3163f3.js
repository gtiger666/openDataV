import{a as L}from"./@vueuse.f12362bf.js";import{_ as V,f as c}from"./index.8c99d488.js";import{p as B,r as n,c as d,y as k,B as e,u as r,x as g,am as w,an as C}from"./@vue.93899e90.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";const x=i=>(w("data-v-5f395df8"),i=i(),C(),i),I=["width","height"],R=["id","d"],E=["id"],M=x(()=>e("stop",{offset:"0%","stop-color":"#fff","stop-opacity":"1"},null,-1)),S=x(()=>e("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"},null,-1)),z=[M,S],N=["id"],D=["fill"],G=["dur","path"],O=["fill","points"],q=["stroke","xlink:href"],A=["stroke","xlink:href","mask"],F=["from","to","dur"],H=B({props:{propValue:null,element:null},setup(i){const a=i,f=n(null),t=n(150),o=n(150),p=n(`border-box-8-path-${c()}`),h=n(`border-box-8-gradient-${c()}`),v=n(`border-box-8-mask-${c()}`);L(f,s=>{const u=s[0].contentRect;t.value=u.width,o.value=u.height});const _=d(()=>{const s=a.propValue.colorLeft,l=a.propValue.colorRight;return s&&l?[s,l]:s?[s,s]:l?[l,l]:["rgba(126, 208, 234, 1)","rgba(96, 195, 231, 1)"]}),j=d(()=>a.propValue.backgroundColor?a.propValue.backgroundColor:"transparent"),m=d(()=>a.propValue.dur?a.propValue.dur:3),$=d(()=>(t.value+o.value-5)*2),b=d(()=>a.propValue.reverse?`M 2.5, 2.5 L 2.5, ${o.value-2.5} L ${t.value-2.5}, ${o.value-2.5} L ${t.value-2.5}, 2.5 L 2.5, 2.5`:`M2.5, 2.5 L${t.value-2.5}, 2.5 L${t.value-2.5}, ${o.value-2.5} L2.5, ${o.value-2.5} L2.5, 2.5`);return(s,l)=>(g(),k("div",{class:"dv-border-box-8",ref:(u,y)=>{y.mainEl=u,f.value=u}},[(g(),k("svg",{class:"dv-border-svg-container",width:t.value,height:o.value},[e("defs",null,[e("path",{id:p.value,d:r(b),fill:"transparent"},null,8,R),e("radialGradient",{id:h.value,cx:"50%",cy:"50%",r:"50%"},z,8,E),e("mask",{id:v.value},[e("circle",{cx:"0",cy:"0",r:"150",fill:`url(#${h.value})`},[e("animateMotion",{dur:`${r(m)}s`,path:r(b),rotate:"auto",repeatCount:"indefinite"},null,8,G)],8,D)],8,N)]),e("polygon",{fill:r(j),points:`5, 5 ${t.value-5}, 5 ${t.value-5} ${o.value-5} 5, ${o.value-5}`},null,8,O),e("use",{stroke:r(_)[0],"stroke-width":"1","xlink:href":`#${p.value}`},null,8,q),e("use",{stroke:r(_)[1],"stroke-width":"3","xlink:href":`#${p.value}`,mask:`url(#${v.value})`},[e("animate",{attributeName:"stroke-dasharray",from:`0, ${r($)}`,to:`${r($)}, 0`,dur:`${r(m)}s`,repeatCount:"indefinite"},null,8,F)],8,A)],8,I))],512))}});var se=V(H,[["__scopeId","data-v-5f395df8"]]);export{se as default};
