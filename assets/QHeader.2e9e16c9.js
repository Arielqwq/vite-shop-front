import{v as w,c as o,h as c,A as B,i as H,I as m,J as O,r as q,w as s,L,al as _,g as $}from"./index.0a97dc81.js";import{Q as C}from"./QResizeObserver.acf06d93.js";var R=w({name:"QToolbar",props:{inset:Boolean},setup(t,{slots:f}){const i=o(()=>"q-toolbar row no-wrap items-center"+(t.inset===!0?" q-toolbar--inset":""));return()=>c("div",{class:i.value,role:"toolbar"},B(f.default))}}),S=w({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:f,emit:i}){const{proxy:{$q:v}}=$(),a=H(O,m);if(a===m)return console.error("QHeader needs to be child of QLayout"),m;const d=q(parseInt(t.heightHint,10)),l=q(!0),h=o(()=>t.reveal===!0||a.view.value.indexOf("H")>-1||v.platform.is.ios&&a.isContainer.value===!0),b=o(()=>{if(t.modelValue!==!0)return 0;if(h.value===!0)return l.value===!0?d.value:0;const e=d.value-a.scroll.value.position;return e>0?e:0}),y=o(()=>t.modelValue!==!0||h.value===!0&&l.value!==!0),Q=o(()=>t.modelValue===!0&&y.value===!0&&t.reveal===!0),V=o(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),z=o(()=>{const e=a.rows.value.top,u={};return e[0]==="l"&&a.left.space===!0&&(u[v.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(u[v.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),u});function r(e,u){a.update("header",e,u)}function n(e,u){e.value!==u&&(e.value=u)}function p({height:e}){n(d,e),r("size",e)}function x(e){Q.value===!0&&n(l,!0),i("focusin",e)}s(()=>t.modelValue,e=>{r("space",e),n(l,!0),a.animate()}),s(b,e=>{r("offset",e)}),s(()=>t.reveal,e=>{e===!1&&n(l,t.modelValue)}),s(l,e=>{a.animate(),i("reveal",e)}),s(a.scroll,e=>{t.reveal===!0&&n(l,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const g={};return a.instances.header=g,t.modelValue===!0&&r("size",d.value),r("space",t.modelValue),r("offset",b.value),L(()=>{a.instances.header===g&&(a.instances.header=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=_(f.default,[]);return t.elevated===!0&&e.push(c("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(c(C,{debounce:0,onResize:p})),c("header",{class:V.value,style:z.value,onFocusin:x},e)}}});export{S as Q,R as a};