import{h as r}from"./moment.08a7f518.js";import{_ as n}from"./index.8c99d488.js";import{p as m,r as l,q as i,o as u,y as c,H as d,x as f}from"./@vue.93899e90.js";import"./@vueuse.f12362bf.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";const _=m({props:{element:null,propValue:null},setup(s){const e=s;let t;const o=l(r(Date.now()).format(e.propValue.format)),p=()=>{const a=e.propValue.format;o.value=r(Date.now()).format(a)};return i(()=>{t=setInterval(p,1e3)}),u(()=>{clearInterval(t)}),(a,j)=>(f(),c("span",null,d(o.value),1))}});var C=n(_,[["__scopeId","data-v-96867fa8"]]);export{C as default};
