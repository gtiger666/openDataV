import{a as $}from"./@vueuse.f12362bf.js";import{_ as m,f as k}from"./index.8c99d488.js";import{p as b,r as i,c as g,y as c,B as t,u as r,z as j,A as w,am as L,an as x,x as p}from"./@vue.93899e90.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";const n=s=>(L("data-v-99afb1f2"),s=s(),x(),s),y=["width","height"],C=["id"],B=n(()=>t("feMorphology",{operator:"dilate",radius:"1",in:"SourceAlpha",result:"thicken"},null,-1)),M=n(()=>t("feGaussianBlur",{in:"thicken",stdDeviation:"2",result:"blurred"},null,-1)),Q=["flood-color"],I=["values"],S=n(()=>t("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),V=n(()=>t("feMerge",null,[t("feMergeNode",{in:"softGlowColored"}),t("feMergeNode",{in:"SourceGraphic"})],-1)),N=["fill","stroke","d"],G=["filter","stroke"],z=["filter","stroke","d"],E=["filter","stroke","d"],A=["filter","stroke","d"],R={class:"border-box-content"},D=b({props:{element:null,propValue:null},setup(s){const v=s,f=i(null),e=i(150),o=i(150),a=i(`borderr-box-12-filterId-${k()}`);$(f,d=>{const u=d[0].contentRect;e.value=u.width,o.value=u.height});const l=g(()=>[v.propValue.color1,v.propValue.color2]);return(d,h)=>(p(),c("div",{class:"dv-border-box-12",ref:(u,_)=>{_.mainEl=u,f.value=u}},[(p(),c("svg",{class:"dv-border-svg-container",width:e.value,height:o.value},[t("defs",null,[t("filter",{id:a.value,height:"150%",width:"150%",x:"-25%",y:"-25%"},[B,M,t("feFlood",{"flood-color":r(l)[1],result:"glowColor"},[t("animate",{attributeName:"flood-color",values:`
                ${r(l)[1]};
                ${r(l)[1]};
                ${r(l)[1]};
              `,dur:"3s",begin:"0s",repeatCount:"indefinite"},null,8,I)],8,Q),S,V],8,C)]),e.value&&o.value?(p(),c("path",{key:0,fill:s.propValue.backgroundColor,"stroke-width":"2",stroke:r(l)[0],d:`
          M15 5 L ${e.value-15} 5 Q ${e.value-5} 5, ${e.value-5} 15
          L ${e.value-5} ${o.value-15} Q ${e.value-5} ${o.value-5}, ${e.value-15} ${o.value-5}
          L 15, ${o.value-5} Q 5 ${o.value-5} 5 ${o.value-15} L 5 15
          Q 5 5 15 5
        `},null,8,N)):j("",!0),t("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${a.value})`,stroke:r(l)[1],d:"M 20 5 L 15 5 Q 5 5 5 15 L 5 20"},null,8,G),t("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${a.value})`,stroke:r(l)[1],d:`M ${e.value-20} 5 L ${e.value-15} 5 Q ${e.value-5} 5 ${e.value-5} 15 L ${e.value-5} 20`},null,8,z),t("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${a.value})`,stroke:r(l)[1],d:`
          M ${e.value-20} ${o.value-5} L ${e.value-15} ${o.value-5}
          Q ${e.value-5} ${o.value-5} ${e.value-5} ${o.value-15}
          L ${e.value-5} ${o.value-20}
        `},null,8,E),t("path",{"stroke-width":"2",fill:"transparent","stroke-linecap":"round",filter:`url(#${a.value})`,stroke:r(l)[1],d:`
          M 20 ${o.value-5} L 15 ${o.value-5}
          Q 5 ${o.value-5} 5 ${o.value-15}
          L 5 ${o.value-20}
        `},null,8,A)],8,y)),t("div",R,[w(d.$slots,"default",{},void 0,!0)])],512))}});var oe=m(D,[["__scopeId","data-v-99afb1f2"]]);export{oe as default};
