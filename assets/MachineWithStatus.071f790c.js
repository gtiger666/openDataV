import{h as m}from"./index.59cf4f9c.js";import{_ as n,u as d}from"./index.8c99d488.js";import{p as f,r as v,q as _,y as g,B as j,u as o,I as h,x as b}from"./@vue.93899e90.js";import"./axios.19d3e859.js";import"./vue-router.62208e1c.js";import"./@vueuse.f12362bf.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";var p="./assets/pumpBlue.0ff01770.png",y="./assets/pumpGray.69a5a4b4.png",x="./assets/pumpRed.e7258492.png";const B=["src"],N=f({props:{element:null,propValue:null},setup(l){let a=v(l.propValue),t=p;const u=e=>{const s=e;if(a.value.tagName&&s.TagName===a.value.tagName){let c=Number(s.TagValue);r(c)}};_(()=>{i()});function i(){m.post({url:a.value.history,data:[a.value.tagName]}).then(e=>{let s=e.Results[0].TagValue;r(s)}).catch(e=>{console.log(e.message||e)})}d("actual",u);function r(e){switch(e){case 0:t=y;break;case 1:t=p;break;case 2:case 3:t=x;break}}return(e,s)=>(b(),g("div",{class:"machine",style:h(["border-color:"+o(a).borderColor+";"])},[j("img",{src:o(t),alt:""},null,8,B)],4))}});var H=n(N,[["__scopeId","data-v-59a3f026"]]);export{H as default};
