var n=(r,t,a)=>new Promise((p,e)=>{var o=s=>{try{u(a.next(s))}catch(i){e(i)}},l=s=>{try{u(a.throw(s))}catch(i){e(i)}},u=s=>s.done?p(s.value):Promise.resolve(s.value).then(o,l);u((a=a.apply(r,t)).next())});import{_ as c,u as m}from"./index.8c99d488.js";import{h as d}from"./index.59cf4f9c.js";import{p as f,r as _,q as j,y as v,H as g,x}from"./@vue.93899e90.js";import"./@vueuse.f12362bf.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";import"./axios.19d3e859.js";const b=f({props:{element:null,propValue:null},setup(r){const t=r,a=_("0"),p=e=>{const o=e;if(t.propValue.tagName&&o.TagName===t.propValue.tagName){const l=o.TagValue;a.value=l}};return j(()=>n(this,null,function*(){try{const e=yield d.post({url:t.propValue.history,data:[t.propValue.tagName]});e.ErrorCode===200&&(a.value=e.Results[0].TagValue)}catch(e){console.log(e==null?void 0:e.message)}})),m("actual",p),(e,o)=>(x(),v("span",null,g(a.value),1))}});var R=c(b,[["__scopeId","data-v-266cb088"]]);export{R as default};
