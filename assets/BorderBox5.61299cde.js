import{a as f}from"./@vueuse.f12362bf.js";import{_ as h}from"./index.8c99d488.js";import{p as g,r as u,c as p,y as v,E as k,u as t,B as r,x as d}from"./@vue.93899e90.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";const j=["width","height"],y=["fill","points"],x=["stroke","points"],B=["stroke","points"],V=["stroke","points"],C=["stroke","points"],w=["stroke","points"],E=["stroke","points"],R=g({props:{propValue:null,element:null},setup(_){const a=_,c=u(null),e=u(150),o=u(150);f(c,s=>{const i=s[0].contentRect;e.value=i.width,o.value=i.height});const n=p(()=>{const s=a.propValue.colorLeft,l=a.propValue.colorRight;return s&&l?[s,l]:s?[s,s]:l?[l,l]:["rgba(255, 255, 255, 0.35)","rgba(255, 255, 255, 0.20)"]}),m=p(()=>a.propValue.backgroundColor?a.propValue.backgroundColor:"transparent"),b=p(()=>a.propValue.reverse?a.propValue.reverse:!1);return(s,l)=>(d(),v("div",{class:"dv-border-box-5",ref:(i,$)=>{$.mainEl=i,c.value=i}},[(d(),v("svg",{class:k(`dv-border-svg-container  ${t(b)&&"dv-reverse"}`),width:e.value,height:o.value},[r("polygon",{fill:t(m),points:`
        10, 22 ${e.value-22}, 22 ${e.value-22}, ${o.value-86} ${e.value-84}, ${o.value-24} 10, ${o.value-24}
      `},null,8,y),r("polyline",{class:"dv-bb5-line-1",stroke:t(n)[0],points:`8, 5 ${e.value-5}, 5 ${e.value-5}, ${o.value-100}
          ${e.value-100}, ${o.value-5} 8, ${o.value-5} 8, 5`},null,8,x),r("polyline",{class:"dv-bb5-line-2",stroke:t(n)[1],points:`3, 5 ${e.value-20}, 5 ${e.value-20}, ${o.value-60}
          ${e.value-74}, ${o.value-5} 3, ${o.value-5} 3, 5`},null,8,B),r("polyline",{class:"dv-bb5-line-3",stroke:t(n)[1],points:`50, 13 ${e.value-35}, 13`},null,8,V),r("polyline",{class:"dv-bb5-line-4",stroke:t(n)[1],points:`15, 20 ${e.value-35}, 20`},null,8,C),r("polyline",{class:"dv-bb5-line-5",stroke:t(n)[1],points:`15, ${o.value-20} ${e.value-110}, ${o.value-20}`},null,8,w),r("polyline",{class:"dv-bb5-line-6",stroke:t(n)[1],points:`15, ${o.value-13} ${e.value-110}, ${o.value-13}`},null,8,E)],10,j))],512))}});var P=h(R,[["__scopeId","data-v-4c1dd7d6"]]);export{P as default};
