import{_ as p,u as d}from"./index.8c99d488.js";import{h as c}from"./index.59cf4f9c.js";import{p as n,r as f,q as v,y as m,H as V,I as C,x as j}from"./@vue.93899e90.js";import"./@vueuse.f12362bf.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";import"./axios.19d3e859.js";const h=n({props:{element:null,propValue:null},setup(t){const u=t,r=f(u.propValue.TextValue||""),i=o=>{const e=o;if(u.propValue.datatag&&e.TagName===u.propValue.datatag){const a=Number(e.TagValue);s(a)}};v(()=>{u.propValue.history&&l()}),u.propValue.history&&(l(),d("actual",i));function l(){c.get({url:u.propValue.history+u.propValue.dataTag}).then(o=>{s(o.TagValue)}).catch(o=>{console.log(o)})}function s(o){if(u.propValue.isHeZha=="true"){const e=[{code:"0",value:"\u5206\u95F8"},{code:"1",value:"\u5408\u95F8"}];for(let a in e)e[a].code==o&&(r.value=e[a].value)}else if(u.propValue.isGuZhang=="true"){const e=[{code:"0",value:"\u6B63\u5E38"},{code:"2",value:"\u6545\u969C"}];for(let a in e)e[a].code==o&&(r.value=e[a].value)}else if(u.propValue.isGuZhangBianHao=="true"){const e=[{code:1,value:"\u77ED\u8DEF"},{code:2,value:"\u8FC7\u8F7D\u6545\u969C\u53CD"},{code:3,value:"\u8FC7\u538B\u6545\u969C"},{code:4,value:"\u6B20\u538B\u6545\u969C"},{code:5,value:"\u4E0D\u5E73\u8861\u6545\u969C"},{code:6,value:"\u6F0F\u7535\u8DF3\u95F8"},{code:7,value:"\u6F0F\u7535\u95ED\u9501"},{code:8,value:"\u74E6\u65AF\u95ED\u9501"},{code:9,value:"\u98CE\u7535\u95ED\u9501"},{code:10,value:"\u8FDC\u65B9\u5206\u52B1"},{code:11,value:"\u8FC7\u8F7D\u6545\u969C\u5B9A"}];for(let a in e)e[a].code==o&&(r.value=e[a].value)}}return(o,e)=>(j(),m("div",{class:"textBorder",style:C({color:t.propValue.color,borderStyle:t.propValue.borderStyle,borderWidth:t.propValue.borderWidth+"px",borderColor:t.propValue.borderColor,justifyContent:t.propValue.justifyContent,fontSize:t.propValue.fontSize+"px"})},V(r.value),5))}});var A=p(h,[["__scopeId","data-v-5bc55114"]]);export{A as default};
