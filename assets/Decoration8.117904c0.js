import{a as h}from"./@vueuse.f12362bf.js";import{_ as f}from"./index.8c99d488.js";import{p as j,r as i,c as $,y as u,B as l,u as p,x as d}from"./@vue.93899e90.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";const k=["width","height"],y=["stroke","points"],b=["stroke","points"],g=["stroke","points"],w=j({props:{element:null,propValue:null},setup(m){const a=m,c=i(null),r=i(200),e=i(60);h(c,o=>{const s=o[0].contentRect;r.value=s.width,e.value=s.height});const n=$(()=>[a.propValue.color1,a.propValue.color2]),t=o=>a.propValue.reverse?r.value-o:o;return(o,v)=>(d(),u("div",{class:"dv-decoration-8",ref:(s,_)=>{_.mainEl=s,c.value=s}},[(d(),u("svg",{width:r.value,height:e.value},[l("polyline",{stroke:p(n)[0],"stroke-width":"2",fill:"transparent",points:`${t(0)}, 0 ${t(30)}, ${e.value/2}`},null,8,y),l("polyline",{stroke:p(n)[0],"stroke-width":"2",fill:"transparent",points:`${t(20)}, 0 ${t(50)}, ${e.value/2} ${t(r.value)}, ${e.value/2}`},null,8,b),l("polyline",{stroke:p(n)[1],fill:"transparent","stroke-width":"3",points:`${t(0)}, ${e.value-3}, ${t(200)}, ${e.value-3}`},null,8,g)],8,k))],512))}});var F=f(w,[["__scopeId","data-v-63d4c9bb"]]);export{F as default};
