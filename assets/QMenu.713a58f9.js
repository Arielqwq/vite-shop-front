import{v as ae,az as ne,aA as se,aB as le,C as ue,aC as A,aD as ie,aE as re,r as M,c as u,aF as ce,ao as de,ap as fe,aG as ve,aH as ge,aI as he,aJ as me,aK as ye,aL as D,w as R,aM as Pe,aN as Ce,aO as H,aP as K,aQ as xe,aR as Te,aS as ke,P as Se,aT as Oe,aU as be,aV as qe,h as L,A as Be,O as Ee,K as we,g as Fe,ak as Ae,aW as Me}from"./index.0ea2ded6.js";let De=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,De=e.scrollLeft>=0,e.remove()}var He=ae({name:"QMenu",inheritAttrs:!1,props:{...ne,...se,...le,...ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:A},self:{type:String,validator:A},offset:{type:Array,validator:ie},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...re,"click","escapeKey"],setup(e,{slots:c,emit:d,attrs:v}){let n=null,f,i,g;const x=Fe(),{proxy:h}=x,{$q:o}=h,a=M(null),s=M(!1),Q=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),W=ce(e,o),{registerTick:j,removeTick:I}=de(),{registerTimeout:T}=fe(),{transitionProps:U,transitionStyle:_}=ve(e),{localScrollTarget:k,changeScrollEvent:z,unconfigureScrollTarget:G}=ge(e,w),{anchorEl:l,canShow:J}=he({showing:s}),{hide:S}=me({showing:s,canShow:J,handleShow:Y,handleHide:Z,hideOnRouteChange:Q,processOnMount:!0}),{showPortal:O,hidePortal:b,renderPortal:N}=ye(x,a,ee,"menu"),m={anchorEl:l,innerRef:a,onClickOutside(t){if(e.persistent!==!0&&s.value===!0)return S(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&Ae(t),!0}},q=u(()=>D(e.anchor||(e.cover===!0?"center middle":"bottom start"),o.lang.rtl)),V=u(()=>e.cover===!0?q.value:D(e.self||"top start",o.lang.rtl)),$=u(()=>(e.square===!0?" q-menu--square":"")+(W.value===!0?" q-menu--dark q-dark":"")),X=u(()=>e.autoClose===!0?{onClick:p}:{}),B=u(()=>s.value===!0&&e.persistent!==!0);R(B,t=>{t===!0?(Pe(P),Ce(m)):(H(P),K(m))});function y(){Me(()=>{let t=a.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function Y(t){if(n=e.noRefocus===!1?document.activeElement:null,xe(F),O(),w(),f=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const C=Te(t);if(C.left!==void 0){const{top:te,left:oe}=l.value.getBoundingClientRect();f={left:C.left-oe,top:C.top-te}}}i===void 0&&(i=R(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,r)),e.noFocus!==!0&&document.activeElement.blur(),j(()=>{r(),e.noFocus!==!0&&y()}),T(()=>{o.platform.is.ios===!0&&(g=e.autoClose,a.value.click()),r(),O(!0),d("show",t)},e.transitionDuration)}function Z(t){I(),b(),E(!0),n!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),T(()=>{b(!0),d("hide",t)},e.transitionDuration)}function E(t){f=void 0,i!==void 0&&(i(),i=void 0),(t===!0||s.value===!0)&&(ke(F),G(),K(m),H(P)),t!==!0&&(n=null)}function w(){(l.value!==null||e.scrollTarget!==void 0)&&(k.value=Se(l.value,e.scrollTarget),z(k.value,r))}function p(t){g!==!0?(Oe(h,t),d("click",t)):g=!1}function F(t){B.value===!0&&e.noFocus!==!0&&be(a.value,t.target)!==!0&&y()}function P(t){d("escapeKey"),S(t)}function r(){const t=a.value;t===null||l.value===null||qe({el:t,offset:e.offset,anchorEl:l.value,anchorOrigin:q.value,selfOrigin:V.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(){return L(Ee,U.value,()=>s.value===!0?L("div",{role:"menu",...v,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+$.value,v.class],style:[v.style,_.value],...X.value},Be(c.default)):null)}return we(E),Object.assign(h,{focus:y,updatePosition:r}),N}});export{He as Q,De as r};
