import{v as oe,at as ne,au as se,av as le,C as ue,aw as A,ax as ie,ay as re,r as M,c as u,az as ce,af as de,ag as fe,aA as ve,aB as ge,aC as he,aD as me,aE as ye,aF as D,w as R,aG as xe,aH as Ce,aI as H,aJ as K,aK as Pe,aL as Te,aM as ke,am as Se,aN as Oe,aO as be,aP as qe,h as L,A as Be,aQ as Ee,L as we,g as Fe,ab as Ae,aR as Me}from"./index.884d5890.js";let De=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,De=e.scrollLeft>=0,e.remove()}var He=oe({name:"QMenu",inheritAttrs:!1,props:{...ne,...se,...le,...ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:A},self:{type:String,validator:A},offset:{type:Array,validator:ie},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...re,"click","escapeKey"],setup(e,{slots:c,emit:d,attrs:v}){let n=null,f,i,g;const P=Fe(),{proxy:h}=P,{$q:a}=h,o=M(null),s=M(!1),Q=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),j=ce(e,a),{registerTick:W,removeTick:I}=de(),{registerTimeout:T}=fe(),{transitionProps:_,transitionStyle:z}=ve(e),{localScrollTarget:k,changeScrollEvent:G,unconfigureScrollTarget:J}=ge(e,w),{anchorEl:l,canShow:N}=he({showing:s}),{hide:S}=me({showing:s,canShow:N,handleShow:Y,handleHide:Z,hideOnRouteChange:Q,processOnMount:!0}),{showPortal:O,hidePortal:b,renderPortal:U}=ye(P,o,ee,"menu"),m={anchorEl:l,innerRef:o,onClickOutside(t){if(e.persistent!==!0&&s.value===!0)return S(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&Ae(t),!0}},q=u(()=>D(e.anchor||(e.cover===!0?"center middle":"bottom start"),a.lang.rtl)),$=u(()=>e.cover===!0?q.value:D(e.self||"top start",a.lang.rtl)),V=u(()=>(e.square===!0?" q-menu--square":"")+(j.value===!0?" q-menu--dark q-dark":"")),X=u(()=>e.autoClose===!0?{onClick:p}:{}),B=u(()=>s.value===!0&&e.persistent!==!0);R(B,t=>{t===!0?(xe(x),Ce(m)):(H(x),K(m))});function y(){Me(()=>{let t=o.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function Y(t){if(n=e.noRefocus===!1?document.activeElement:null,Pe(F),O(),w(),f=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const C=Te(t);if(C.left!==void 0){const{top:te,left:ae}=l.value.getBoundingClientRect();f={left:C.left-ae,top:C.top-te}}}i===void 0&&(i=R(()=>a.screen.width+"|"+a.screen.height+"|"+e.self+"|"+e.anchor+"|"+a.lang.rtl,r)),e.noFocus!==!0&&document.activeElement.blur(),W(()=>{r(),e.noFocus!==!0&&y()}),T(()=>{a.platform.is.ios===!0&&(g=e.autoClose,o.value.click()),r(),O(!0),d("show",t)},e.transitionDuration)}function Z(t){I(),b(),E(!0),n!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),T(()=>{b(!0),d("hide",t)},e.transitionDuration)}function E(t){f=void 0,i!==void 0&&(i(),i=void 0),(t===!0||s.value===!0)&&(ke(F),J(),K(m),H(x)),t!==!0&&(n=null)}function w(){(l.value!==null||e.scrollTarget!==void 0)&&(k.value=Se(l.value,e.scrollTarget),G(k.value,r))}function p(t){g!==!0?(Oe(h,t),d("click",t)):g=!1}function F(t){B.value===!0&&e.noFocus!==!0&&be(o.value,t.target)!==!0&&y()}function x(t){d("escapeKey"),S(t)}function r(){const t=o.value;t===null||l.value===null||qe({el:t,offset:e.offset,anchorEl:l.value,anchorOrigin:q.value,selfOrigin:$.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(){return L(Ee,_.value,()=>s.value===!0?L("div",{role:"menu",...v,ref:o,tabindex:-1,class:["q-menu q-position-engine scroll"+V.value,v.class],style:[v.style,z.value],...X.value},Be(c.default)):null)}return we(E),Object.assign(h,{focus:y,updatePosition:r}),U}});export{He as Q,De as r};
