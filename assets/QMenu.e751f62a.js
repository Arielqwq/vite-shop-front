import{v as ae,at as ne,r as A,c as l,au as se,w as M,aC as ue,h as D,an as le,I as ie,g as re,A as ce,ao as de,a5 as fe}from"./index.dabf6670.js";import{u as ve,v as R,a as ge,b as he,c as me,r as H,s as ye,p as K,d as xe}from"./position-engine.e3644d97.js";import{d as Ce,e as Pe,u as ke,f as Te,g as Se}from"./use-prevent-scroll.95c3e0ff.js";import{u as be,b as Oe,n as qe,o as Be,p as Ee,r as we,q as j,k as Fe,s as Ae,t as Me}from"./use-key-composition.35068efe.js";let De=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,De=e.scrollLeft>=0,e.remove()}var Le=ae({name:"QMenu",inheritAttrs:!1,props:{...ve,...Ce,...ne,...be,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:R},self:{type:String,validator:R},offset:{type:Array,validator:ge},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Pe,"click","escapeKey"],setup(e,{slots:c,emit:d,attrs:v}){let n=null,f,i,g;const P=re(),{proxy:h}=P,{$q:o}=h,a=A(null),s=A(!1),L=l(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),Q=se(e,o),{registerTick:W,removeTick:p}=Oe(),{registerTimeout:k}=ke(),{transitionProps:I,transitionStyle:_}=qe(e),{localScrollTarget:T,changeScrollEvent:U,unconfigureScrollTarget:$}=he(e,w),{anchorEl:u,canShow:z}=me({showing:s}),{hide:S}=Te({showing:s,canShow:z,handleShow:X,handleHide:Y,hideOnRouteChange:L,processOnMount:!0}),{showPortal:b,hidePortal:O,renderPortal:G}=Be(P,a,ee,"menu"),m={anchorEl:u,innerRef:a,onClickOutside(t){if(e.persistent!==!0&&s.value===!0)return S(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&fe(t),!0}},q=l(()=>K(e.anchor||(e.cover===!0?"center middle":"bottom start"),o.lang.rtl)),J=l(()=>e.cover===!0?q.value:K(e.self||"top start",o.lang.rtl)),N=l(()=>(e.square===!0?" q-menu--square":"")+(Q.value===!0?" q-menu--dark q-dark":"")),V=l(()=>e.autoClose===!0?{onClick:Z}:{}),B=l(()=>s.value===!0&&e.persistent!==!0);M(B,t=>{t===!0?(Ae(x),xe(m)):(j(x),H(m))});function y(){Fe(()=>{let t=a.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function X(t){if(n=e.noRefocus===!1?document.activeElement:null,Ee(F),b(),w(),f=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const C=ue(t);if(C.left!==void 0){const{top:te,left:oe}=u.value.getBoundingClientRect();f={left:C.left-oe,top:C.top-te}}}i===void 0&&(i=M(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,r)),e.noFocus!==!0&&document.activeElement.blur(),W(()=>{r(),e.noFocus!==!0&&y()}),k(()=>{o.platform.is.ios===!0&&(g=e.autoClose,a.value.click()),r(),b(!0),d("show",t)},e.transitionDuration)}function Y(t){p(),O(),E(!0),n!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),k(()=>{O(!0),d("hide",t)},e.transitionDuration)}function E(t){f=void 0,i!==void 0&&(i(),i=void 0),(t===!0||s.value===!0)&&(we(F),$(),H(m),j(x)),t!==!0&&(n=null)}function w(){(u.value!==null||e.scrollTarget!==void 0)&&(T.value=Se(u.value,e.scrollTarget),U(T.value,r))}function Z(t){g!==!0?(Me(h,t),d("click",t)):g=!1}function F(t){B.value===!0&&e.noFocus!==!0&&de(a.value,t.target)!==!0&&y()}function x(t){d("escapeKey"),S(t)}function r(){const t=a.value;t===null||u.value===null||ye({el:t,offset:e.offset,anchorEl:u.value,anchorOrigin:q.value,selfOrigin:J.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(){return D(le,I.value,()=>s.value===!0?D("div",{role:"menu",...v,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+N.value,v.class],style:[v.style,_.value],...V.value},ce(c.default)):null)}return ie(E),Object.assign(h,{focus:y,updatePosition:r}),G}});export{Le as Q,De as r};
