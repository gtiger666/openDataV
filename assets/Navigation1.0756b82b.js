import{a as w}from"./@vueuse.f12362bf.js";import{_ as y,f as C,c as V}from"./index.8c99d488.js";import{p as x,r as c,c as d,y as $,B as l,u as t,am as I,an as S,x as h}from"./@vue.93899e90.js";import"./vue-router.62208e1c.js";import"./pinia.7738838c.js";import"./vue-demi.b3a9cad9.js";import"./mitt.550594b0.js";import"./element-plus.da7f9641.js";import"./lodash.1a3e162a.js";import"./nprogress.5f640c6a.js";import"./async-validator.5d25c98b.js";import"./@popperjs.a8a4a6a0.js";import"./resize-observer-polyfill.8deb1e21.js";import"./lodash-es.ef547d44.js";const v=n=>(I("data-v-e62a367e"),n=n(),S(),n),W=["width","height"],B=["id"],M=v(()=>l("feMorphology",{operator:"dilate",radius:"2",in:"SourceAlpha",result:"thicken"},null,-1)),N=v(()=>l("feGaussianBlur",{in:"thicken",stdDeviation:"3",result:"blurred"},null,-1)),E=["flood-color"],G=v(()=>l("feComposite",{in:"glowColor",in2:"blurred",operator:"in",result:"softGlowColored"},null,-1)),R=v(()=>l("feMerge",null,[l("feMergeNode",{in:"softGlowColored"}),l("feMergeNode",{in:"SourceGraphic"})],-1)),z=["fill","points"],L=["stroke","stroke-width","points"],O=["stroke","points"],U=["fill","points"],A=["fill","points"],D=x({props:{propValue:null,element:null},setup(n){const s=n,f=c(null),e=c(150),o=c(150),_=c(`border-box-11-filterId-${C()}`),g=V();w(f,r=>{const p=r[0].contentRect;e.value=p.width,o.value=p.height});const u=d(()=>{const r=s.propValue.colorLeft,i=s.propValue.colorRight;return r&&i?[r,i]:r?[r,r]:i?[i,i]:["#11eefd","#0078d2"]}),m=d(()=>s.propValue.backgroundColor?s.propValue.backgroundColor:"transparent"),a=d(()=>s.propValue.titleWidth?parseInt(s.propValue.titleWidth):250),k=d(()=>s.propValue.strokeWdith?parseInt(s.propValue.strokeWdith):4),b=()=>{if(!g.isEditMode){const r=s.propValue.routerUrl;r&&window.open(r)}};return(r,i)=>(h(),$("div",{class:"navigation-1",ref:(p,j)=>{j.mainEl=p,f.value=p},onClick:b},[(h(),$("svg",{class:"navigation-svg-container",width:e.value,height:o.value},[l("defs",null,[l("filter",{id:_.value,height:"150%",width:"150%",x:"-25%",y:"-25%"},[M,N,l("feFlood",{"flood-color":t(u)[1],result:"glowColor"},null,8,E),G,R],8,B)]),l("polygon",{fill:t(m),points:`
        20, 32 ${e.value*.5-t(a)/2}, 32 ${e.value*.5-t(a)/2+20}, 53
        ${e.value*.5+t(a)/2-20}, 53 ${e.value*.5+t(a)/2}, 32
        ${e.value-20}, 32 ${e.value-8}, 48 ${e.value-8}, ${o.value-25} ${e.value-20}, ${o.value-8}
        20, ${o.value-8} 8, ${o.value-25} 8, 50
      `},null,8,z),l("polyline",{stroke:t(u)[0],"stroke-width":`${t(k)}`,fill:"transparent",points:`
          ${(e.value-t(a))/2}, 30
          22, 30 7, 50 7, ${50+(o.value-167)/2}
          13, ${55+(o.value-167)/2} 13, ${135+(o.value-167)/2}
          7, ${140+(o.value-167)/2} 7, ${o.value-27}
          20, ${o.value-7} ${e.value-20}, ${o.value-7} ${e.value-7}, ${o.value-27}
          ${e.value-7}, ${140+(o.value-167)/2} ${e.value-13}, ${135+(o.value-167)/2}
          ${e.value-13}, ${55+(o.value-167)/2} ${e.value-7}, ${50+(o.value-167)/2}
          ${e.value-7}, 50 ${e.value-20}, 30 ${(e.value+t(a))/2-14}, 30
        `},null,8,L),l("polygon",{stroke:t(u)[0],fill:"transparent",points:`
          ${(e.value-t(a))/2}, 10 ${(e.value-t(a))/2}, 50
          ${(e.value+t(a))/2-14}, 50 ${(e.value+t(a))/2-14}, 10
        `},null,8,O),l("polygon",{fill:t(u)[0],filter:"transparent",points:`
          7, ${53+(o.value-167)/2} 11, ${57+(o.value-167)/2}
          11, ${133+(o.value-167)/2} 7, ${137+(o.value-167)/2}
        `},null,8,U),l("polygon",{fill:t(u)[0],filter:"transparent",points:`
          ${e.value-7}, ${53+(o.value-167)/2} ${e.value-11}, ${57+(o.value-167)/2}
          ${e.value-11}, ${133+(o.value-167)/2} ${e.value-7}, ${137+(o.value-167)/2}
        `},null,8,A)],8,W))],512))}});var le=y(D,[["__scopeId","data-v-e62a367e"]]);export{le as default};
