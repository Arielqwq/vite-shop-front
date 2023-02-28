import{v as w,c as l,h as c,A as B,i as H,O as m,P as O,r as q,w as s,K as _,aq as $,g as C}from"./index.5f65fe0b.js";import{Q as F}from"./QResizeObserver.172266a1.js";var S=w({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:f}){const i=l(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>c("div",{class:i.value,role:"toolbar"},B(f.default))}}),I=w({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:f,emit:i}){const{proxy:{$q:v}}=C(),a=H(O,m);if(a===m)return console.error("QHeader needs to be child of QLayout"),m;const d=q(parseInt(t.heightHint,10)),o=q(!0),h=l(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||v.platform.is.ios&&a.isContainer.value===!0),b=l(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return o.value===!0?d.value:0;const e=d.value-a.scroll.value.position;return e>0?e:0}),y=l(()=>t.modelValue!==!0||h.value===!0&&o.value!==!0),Q=l(()=>t.modelValue===!0&&y.value===!0&&t.reveal===!0),V=l(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),z=l(()=>{const e=a.rows.value.top,u={};return e[0]==="l"&&a.left.space===!0&&(u[v.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(u[v.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),u});function r(e,u){a.update("header",e,u)}function n(e,u){e.value!==u&&(e.value=u)}function p({height:e}){n(d,e),r("size",e)}function x(e){Q.value===!0&&n(o,!0),i("focusin",e)}s(()=>t.modelValue,e=>{r("space",e),n(o,!0),a.animate()}),s(b,e=>{r("offset",e)}),s(()=>t.reveal,e=>{e===!1&&n(o,t.modelValue)}),s(o,e=>{a.animate(),i("reveal",e)}),s(a.scroll,e=>{t.reveal===!0&&n(o,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const g={};return a.instances.header=g,t.modelValue===!0&&r("size",d.value),r("space",t.modelValue),r("offset",b.value),_(()=>{a.instances.header===g&&(a.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=$(f.default,[]);return t.elevated===!0&&e.push(c("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(c(F,{debounce:0,onResize:p})),c("header",{class:V.value,style:z.value,onFocusin:x},e)}}});export{I as Q,S as a};
