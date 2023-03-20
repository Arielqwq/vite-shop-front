import{v as p,aB as C,aF as I,c as n,h as l,g as y,r as B,b6 as D,b7 as f,z as M,A as L,b8 as N,b9 as H,ba as K,ak as S,Q as G}from"./index.1232a2b2.js";const J={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},V={xs:2,sm:4,md:8,lg:16,xl:24};var ae=p({name:"QSeparator",props:{...C,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const c=y(),e=I(t,c.proxy.$q),r=n(()=>t.vertical===!0?"vertical":"horizontal"),s=n(()=>` q-separator--${r.value}`),u=n(()=>t.inset!==!1?`${s.value}-${J[t.inset]}`:""),o=n(()=>`q-separator${s.value}${u.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(e.value===!0?" q-separator--dark":"")),k=n(()=>{const d={};if(t.size!==void 0&&(d[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const g=t.spaced===!0?`${V.md}px`:t.spaced in V?`${V[t.spaced]}px`:t.spaced,b=t.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${b[0]}`]=d[`margin${b[1]}`]=g}return d});return()=>l("hr",{class:o.value,style:k.value,"aria-orientation":r.value})}});function U(t,c){const e=B(null),r=n(()=>t.disable===!0?null:l("span",{ref:e,class:"no-outline",tabindex:-1}));function s(u){const o=c.value;u!==void 0&&u.type.indexOf("key")===0?o!==null&&document.activeElement!==o&&o.contains(document.activeElement)===!0&&o.focus():e.value!==null&&(u===void 0||o!==null&&o.contains(u.target)===!0)&&e.value.focus()}return{refocusTargetEl:r,refocusTarget:s}}var W={xs:30,sm:35,md:40,lg:50,xl:60};const X={...C,...N,...H,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:t=>t==="tf"||t==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Y=["update:modelValue"];function Z(t,c){const{props:e,slots:r,emit:s,proxy:u}=y(),{$q:o}=u,k=I(e,o),d=B(null),{refocusTargetEl:g,refocusTarget:b}=U(e,d),z=D(e,W),m=n(()=>e.val!==void 0&&Array.isArray(e.modelValue)),x=n(()=>{const a=f(e.val);return m.value===!0?e.modelValue.findIndex(v=>f(v)===a):-1}),i=n(()=>m.value===!0?x.value>-1:f(e.modelValue)===f(e.trueValue)),h=n(()=>m.value===!0?x.value===-1:f(e.modelValue)===f(e.falseValue)),$=n(()=>i.value===!1&&h.value===!1),w=n(()=>e.disable===!0?-1:e.tabindex||0),O=n(()=>`q-${t} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(k.value===!0?` q-${t}--dark`:"")+(e.dense===!0?` q-${t}--dense`:"")+(e.leftLabel===!0?" reverse":"")),Q=n(()=>{const a=i.value===!0?"truthy":h.value===!0?"falsy":"indet",v=e.color!==void 0&&(e.keepColor===!0||(t==="toggle"?i.value===!0:h.value!==!0))?` text-${e.color}`:"";return`q-${t}__inner relative-position non-selectable q-${t}__inner--${a}${v}`}),T=n(()=>{const a={type:"checkbox"};return e.name!==void 0&&Object.assign(a,{".checked":i.value,"^checked":i.value===!0?"checked":void 0,name:e.name,value:m.value===!0?e.val:e.trueValue}),a}),A=K(T),E=n(()=>{const a={tabindex:w.value,role:t==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":$.value===!0?"mixed":i.value===!0?"true":"false"};return e.disable===!0&&(a["aria-disabled"]="true"),a});function q(a){a!==void 0&&(S(a),b(a)),e.disable!==!0&&s("update:modelValue",F(),a)}function F(){if(m.value===!0){if(i.value===!0){const a=e.modelValue.slice();return a.splice(x.value,1),a}return e.modelValue.concat([e.val])}if(i.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(h.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function P(a){(a.keyCode===13||a.keyCode===32)&&S(a)}function R(a){(a.keyCode===13||a.keyCode===32)&&q(a)}const j=c(i,$);return Object.assign(u,{toggle:q}),()=>{const a=j();e.disable!==!0&&A(a,"unshift",` q-${t}__native absolute q-ma-none q-pa-none`);const v=[l("div",{class:Q.value,style:z.value,"aria-hidden":"true"},a)];g.value!==null&&v.push(g.value);const _=e.label!==void 0?M(r.default,[e.label]):L(r.default);return _!==void 0&&v.push(l("div",{class:`q-${t}__label q-anchor--skip`},_)),l("div",{ref:d,class:O.value,...E.value,onClick:q,onKeydown:P,onKeyup:R},v)}}const ee=l("div",{key:"svg",class:"q-checkbox__bg absolute"},[l("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[l("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),l("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ne=p({name:"QCheckbox",props:X,emits:Y,setup(t){function c(e,r){const s=n(()=>(e.value===!0?t.checkedIcon:r.value===!0?t.indeterminateIcon:t.uncheckedIcon)||null);return()=>s.value!==null?[l("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[l(G,{class:"q-checkbox__icon",name:s.value})])]:[ee]}return Z("checkbox",c)}});export{ae as Q,ne as a};