import{V as v,W as j}from"./echarts.b68702ec.js";import{a as x}from"./@vueuse.f12362bf.js";import{h as m}from"./index.59cf4f9c.js";import{c as S}from"./index.8c99d488.js";import{t as k}from"./mydark.8efe4250.js";import{p as C,r as A,q as O,w as F,o as I,y as V,x as W}from"./@vue.93899e90.js";import{X as B}from"./zrender.aa8f9b3b.js";import"./tslib.34a40861.js";import"./axios.19d3e859.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";const ee=C({props:{element:null,propValue:null},setup(h){const s=h;v("mydark",k);const p=S(),i=A(null);let t=null,a=0,n,c;O(()=>{u(),clearInterval(n),b(),n=setInterval(f,s.propValue.interval),setTimeout(w,1e3)});const u=()=>{m.get({url:s.propValue.history}).then(e=>{a=e.data||0}).catch(e=>{console.log(e),a=Math.round(Math.random()*100)}).finally(()=>{f()})};x(i,e=>{const o=e[0],{width:r,height:l}=o.contentRect;t==null||t.resize({width:r,height:l})});const g=()=>{let e=[];for(let o=0;o<100;o++)o%2==0?e.push({name:(o+1).toString(),value:20,itemStyle:{normal:{color:"rgb(0,255,255,.3)"}}}):e.push({name:(o+1).toString(),value:20,itemStyle:{normal:{color:"rgb(0,0,0,0)",borderWidth:1,borderColor:"rgba(0,255,255,1)"}}});return e},d=()=>{let e=a.toFixed(2).split(".")[0],o=a.toFixed(2).split(".")[1],r=s.propValue.fontSize,l=s.propValue.lineLength;return{title:{text:"{a|"+e+"}{a|."+o+"%}",x:"center",y:"center",textStyle:{rich:{a:{fontSize:r,color:"#fff",fontWeight:"600"}}}},series:[{type:"gauge",radius:"80%",clockwise:!1,startAngle:"90",endAngle:"-269.9999",splitNumber:30,detail:{offsetCenter:[0,-20],formatter:" "},pointer:{show:!1},axisLine:{show:!0,lineStyle:{color:[[0,"#2CFAFC"],[36.7/100,"#0ff"],[1,"#0f232e"]],width:20}},axisTick:{show:!1},splitLine:{show:!0,length:l,lineStyle:{shadowBlur:10,shadowColor:"rgba(0, 255, 255, 1)",shadowOffsetY:"0",color:"#020f18",width:2}},axisLabel:{show:!1}},{type:"pie",radius:["54%","58%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{color:"#0C355E"}},label:{show:!1},data:g()},{type:"pie",radius:[0,"30%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{shadowBlur:20,shadowColor:"#000",color:new B(.4,.3,1,[{offset:0,color:"#0FF"},{offset:1,color:"#060f20"}])}},label:{show:!1},data:[100]},{type:"pie",radius:["84%","85.5%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{shadowBlur:20,shadowColor:"rgba(0, 255, 255,.3)",color:"#0f232e"}},label:{show:!1},data:[100]},{type:"pie",radius:["88%","89.5%"],hoverAnimation:!1,clockWise:!1,itemStyle:{normal:{shadowBlur:20,shadowColor:"rgba(0, 255, 255,.3)",color:"rgba(15, 35, 46,.6)"}},label:{show:!1},data:[100]}]}},f=()=>{m.get({url:s.propValue.history}).then(e=>{a=e.data||0}).catch(e=>{p.isEditMode&&(a=Math.round(Math.random()*100))}).finally(()=>{let e=a.toFixed(2).split(".")[0],o=a.toFixed(2).split(".")[1];const r="{a|"+e+"}{a|."+o+"%}";t&&t.setOption({title:{text:r}})})},b=()=>{t=j(i.value,"mydark"),t.clear(),t.setOption(d())};p.isEditMode&&F(()=>s.propValue,(e,o)=>{console.log(e),t&&(t.clear(),t.setOption(d()))},{deep:!0});const y=()=>{if(t){let e=t.getOption();e.series[1].startAngle=e.series[1].startAngle+1,t.setOption({series:e.series})}},w=()=>{c=setInterval(y,100)};return I(()=>{clearInterval(n),clearInterval(c),t&&(t.clear(),t.dispose())}),(e,o)=>(W(),V("div",{ref:(r,l)=>{l.chartEl=r,i.value=r}},null,512))}});export{ee as default};
