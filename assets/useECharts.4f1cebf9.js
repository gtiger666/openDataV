import{V as b,W as y}from"./echarts.b68702ec.js";import{t as S}from"./mydark.8efe4250.js";import{a as w}from"./@vueuse.f12362bf.js";import{c as z,E as n,g as C,d as E,u as L}from"./index.8c99d488.js";import{q as v,o as O}from"./@vue.93899e90.js";b("mydark",S);const R=(t,c,o,f)=>{const m=z();let e=null;const s={};w(c,i=>{const h=i[0],{width:r,height:l}=h.contentRect;e==null||e.resize({width:r,height:l})});const x=()=>{if(s.color=t.color,t.axis.length===2&&(o===n.LINE||o===n.BAR)&&(s.xAxis={type:t.axis[0].type,show:t.axis[0].show,name:t.axis[0].name,nameLocation:t.axis[0].nameLocation,position:t.axis[0].position,scale:t.axis[0].scale},s.yAxis={type:t.axis[1].type,show:t.axis[1].show,name:t.axis[1].name,nameLocation:t.axis[1].nameLocation,position:t.axis[1].position,scale:t.axis[1].scale}),t.title.length>0&&(s.title={show:t.title[0].show,text:t.title[0].text||"",subtext:t.title[0].subtext||"",left:t.title[0].left||"center",top:t.title[0].top||"top",textStyle:{color:t.title[0].textColor,fontSize:t.title[0].textSize},subtextStyle:{color:t.title[0].subtextColor,fontSize:t.title[0].subtextSize}}),t.legend.length>0&&(s.legend={show:t.legend[0].show,type:t.legend[0].type,top:t.legend[0].top||"10%",left:t.legend[0].left||"10%",orient:t.legend[0].orient||"vertical",textStyle:{color:t.legend[0].textColor||"#fff",fontSize:t.legend[0].textSize||12}}),t.tooltip.length>0&&(s.tooltip={show:t.tooltip[0].show,trigger:t.tooltip[0].trigger||"item",formatter:t.tooltip[0].formatter||"{a} <br/>{b} : {c} ({d}%)"}),t.series.length>0){const i=t.series[0];switch(o){case n.PIE:s.series=E(i);break;case n.LINE:s.series=C(i);break;default:s.series=[]}}return s},g=()=>{e=y(c.value,"mydark"),e.setOption(x())},d=i=>{e==null||e.setOption(i)};v(()=>{g()}),O(()=>{e&&(e.clear(),e.dispose())});const a=()=>{e==null||e.setOption(x())};return m.isEditMode&&L(f,a),{updateChart:d,getOptions:x}};export{R as u};
