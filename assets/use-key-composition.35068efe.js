import{a9 as Be,I as K,ag as ke,ah as Ie,g as z,ai as ge,aj as te,r as q,a as Oe,ak as Fe,h as s,al as He,c,a6 as ze,am as ve,v as Le,w as $,an as fe,A as Q,ao as je,o as Ee,i as Qe,ap as Ue,aq as Ke,ar as Ne,a5 as Ge,aa as We,H as Ze,as as j,at as Je,au as Xe,Q as pe,av as Ye}from"./index.dabf6670.js";import{d as et,e as tt,u as ot,f as nt,h as lt,i as it}from"./use-prevent-scroll.95c3e0ff.js";let se,J=0;const h=new Array(256);for(let e=0;e<256;e++)h[e]=(e+256).toString(16).substring(1);const at=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let n=t;n>0;n--)o.push(Math.floor(Math.random()*256));return o}})(),he=4096;function ut(){(se===void 0||J+16>he)&&(J=0,se=at(he));const e=Array.prototype.slice.call(se,J,J+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,h[e[0]]+h[e[1]]+h[e[2]]+h[e[3]]+"-"+h[e[4]]+h[e[5]]+"-"+h[e[6]]+h[e[7]]+"-"+h[e[8]]+h[e[9]]+"-"+h[e[10]]+h[e[11]]+h[e[12]]+h[e[13]]+h[e[14]]+h[e[15]]}function rt(){let e;const t=z();function o(){e=void 0}return Be(o),K(o),{removeTick:o,registerTick(n){e=n,ke(()=>{e===n&&(Ie(t)===!1&&e(),e=void 0)})}}}let P=[],U=[];function Re(e){U=U.filter(t=>t!==e)}function st(e){Re(e),U.push(e)}function be(e){Re(e),U.length===0&&P.length>0&&(P[P.length-1](),P=[])}function $e(e){U.length===0?e():P.push(e)}function dt(e){P=P.filter(t=>t!==e)}let ft=1,ct=document.body;function vt(e,t){const o=document.createElement("div");if(o.id=t!==void 0?`q-portal--${t}--${ft++}`:e,ge.globalNodes!==void 0){const n=ge.globalNodes.class;n!==void 0&&(o.className=n)}return ct.appendChild(o),o}function mt(e){e.remove()}const oe=[];function It(e){return oe.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function gt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return te(e)}else if(e.__qPortal===!0){const o=te(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=te(e)}while(e!=null)}function Ot(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=gt(e,t);continue}e.hide(t)}e=te(e)}}function pt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ht(e,t,o,n){const u=q(!1),f=q(!1);let i=null;const d={},m=n==="dialog"&&pt(e);function x(C){if(C===!0){be(d),f.value=!0;return}f.value=!1,u.value===!1&&(m===!1&&i===null&&(i=vt(!1,n)),u.value=!0,oe.push(e.proxy),st(d))}function v(C){if(f.value=!1,C!==!0)return;be(d),u.value=!1;const _=oe.indexOf(e.proxy);_!==-1&&oe.splice(_,1),i!==null&&(mt(i),i=null)}return Oe(()=>{v(!0)}),e.proxy.__qPortal=!0,Fe(e.proxy,"contentEl",()=>t.value),{showPortal:x,hidePortal:v,portalIsActive:u,portalIsAccessible:f,renderPortal:()=>m===!0?o():u.value===!0?[s(He,{to:i},o())]:void 0}}const bt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function yt(e,t=()=>{},o=()=>{}){return{transitionProps:c(()=>{const n=`q-transition--${e.transitionShow||t()}`,u=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${u}-leave-from`,leaveActiveClass:`${u}-leave-active`,leaveToClass:`${u}-leave-to`}}),transitionStyle:c(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}const V=[];let H;function qt(e){H=e.keyCode===27}function Ct(){H===!0&&(H=!1)}function xt(e){H===!0&&(H=!1,ze(e,27)===!0&&V[V.length-1](e))}function Ae(e){window[e]("keydown",qt),window[e]("blur",Ct),window[e]("keyup",xt),H=!1}function wt(e){ve.is.desktop===!0&&(V.push(e),V.length===1&&Ae("addEventListener"))}function ye(e){const t=V.indexOf(e);t>-1&&(V.splice(t,1),V.length===0&&Ae("removeEventListener"))}const T=[];function Pe(e){T[T.length-1](e)}function _t(e){ve.is.desktop===!0&&(T.push(e),T.length===1&&document.body.addEventListener("focusin",Pe))}function qe(e){const t=T.indexOf(e);t>-1&&(T.splice(t,1),T.length===0&&document.body.removeEventListener("focusin",Pe))}let X=0;const St={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},Ce={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var Ht=Le({name:"QDialog",inheritAttrs:!1,props:{...et,...bt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...tt,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const u=z(),{proxy:{$q:f}}=u,i=q(null),d=q(!1),m=q(!1);let x=null,v=null,C,_;const k=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:S}=it(),{registerTimeout:A}=ot(),{registerTick:E,removeTick:w}=rt(),{transitionProps:R,transitionStyle:D}=yt(e,()=>Ce[e.position][0],()=>Ce[e.position][1]),{showPortal:B,hidePortal:F,portalIsAccessible:g,renderPortal:b}=ht(u,i,Me,"dialog"),{hide:p}=nt({showing:d,hideOnRouteChange:k,handleShow:I,handleHide:Z,processOnMount:!0}),{addToHistory:N,removeFromHistory:G}=lt(d,p,k),W=c(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${St[e.position]}`+(m.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),M=c(()=>d.value===!0&&e.seamless!==!0),ne=c(()=>e.autoClose===!0?{onClick:Ve}:{}),le=c(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${M.value===!0?"modal":"seamless"}`,n.class]);$(()=>e.maximized,a=>{d.value===!0&&ie(a)}),$(M,a=>{S(a),a===!0?(_t(ae),wt(O)):(qe(ae),ye(O))});function I(a){N(),v=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,ie(e.maximized),B(),m.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),E(l)):w(),A(()=>{if(u.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:y,bottom:ue}=document.activeElement.getBoundingClientRect(),{innerHeight:me}=window,re=window.visualViewport!==void 0?window.visualViewport.height:me;y>0&&ue>re/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-re,ue>=me?1/0:Math.ceil(document.scrollingElement.scrollTop+ue-re/2))),document.activeElement.scrollIntoView()}_=!0,i.value.click(),_=!1}B(!0),m.value=!1,o("show",a)},e.transitionDuration)}function Z(a){w(),G(),L(!0),m.value=!0,F(),v!==null&&(((a&&a.type.indexOf("key")===0?v.closest('[tabindex]:not([tabindex^="-"])'):void 0)||v).focus(),v=null),A(()=>{F(!0),m.value=!1,o("hide",a)},e.transitionDuration)}function l(a){$e(()=>{let y=i.value;y===null||y.contains(document.activeElement)===!0||(y=(a!==""?y.querySelector(a):null)||y.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||y.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||y.querySelector("[autofocus], [data-autofocus]")||y,y.focus({preventScroll:!0}))})}function r(a){a&&typeof a.focus=="function"?a.focus({preventScroll:!0}):l(),o("shake");const y=i.value;y!==null&&(y.classList.remove("q-animate--scale"),y.classList.add("q-animate--scale"),x!==null&&clearTimeout(x),x=setTimeout(()=>{x=null,i.value!==null&&(y.classList.remove("q-animate--scale"),l())},170))}function O(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&r():(o("escapeKey"),p()))}function L(a){x!==null&&(clearTimeout(x),x=null),(a===!0||d.value===!0)&&(ie(!1),e.seamless!==!0&&(S(!1),qe(ae),ye(O))),a!==!0&&(v=null)}function ie(a){a===!0?C!==!0&&(X<1&&document.body.classList.add("q-body--dialog"),X++,C=!0):C===!0&&(X<2&&document.body.classList.remove("q-body--dialog"),X--,C=!1)}function Ve(a){_!==!0&&(p(a),o("click",a))}function Te(a){e.persistent!==!0&&e.noBackdropDismiss!==!0?p(a):e.noShake!==!0&&r(a.relatedTarget)}function ae(a){e.allowFocusOutside!==!0&&g.value===!0&&je(i.value,a.target)!==!0&&l('[tabindex]:not([tabindex="-1"])')}Object.assign(u.proxy,{focus:l,shake:r,__updateRefocusTarget(a){v=a||null}}),K(L);const De=f.platform.is.ios===!0||f.platform.is.safari?"onClick":"onFocusin";function Me(){return s("div",{role:"dialog","aria-modal":M.value===!0?"true":"false",...n,class:le.value},[s(fe,{name:"q-transition--fade",appear:!0},()=>M.value===!0?s("div",{class:"q-dialog__backdrop fixed-full",style:D.value,"aria-hidden":"true",tabindex:-1,[De]:Te}):null),s(fe,R.value,()=>d.value===!0?s("div",{ref:i,class:W.value,style:D.value,tabindex:-1,...ne.value},Q(t.default)):null)])}return b}});function Bt({validate:e,resetValidation:t,requiresQForm:o}){const n=Qe(Ue,!1);if(n!==!1){const{props:u,proxy:f}=z();Object.assign(f,{validate:e,resetValidation:t}),$(()=>u.disable,i=>{i===!0?(typeof t=="function"&&t(),n.unbindComponent(f)):n.bindComponent(f)}),Ee(()=>{u.disable!==!0&&n.bindComponent(f)}),K(()=>{u.disable!==!0&&n.unbindComponent(f)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const xe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,we=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,_e=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Y=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,de={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>xe.test(e),hexaColor:e=>we.test(e),hexOrHexaColor:e=>_e.test(e),rgbColor:e=>Y.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>Y.test(e)||ee.test(e),hexOrRgbColor:e=>xe.test(e)||Y.test(e),hexaOrRgbaColor:e=>we.test(e)||ee.test(e),anyColor:e=>_e.test(e)||Y.test(e)||ee.test(e)},kt=[!0,!1,"ondemand"],Ft={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>kt.includes(e)}};function Et(e,t){const{props:o,proxy:n}=z(),u=q(!1),f=q(null),i=q(null);Bt({validate:S,resetValidation:k});let d=0,m;const x=c(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length>0),v=c(()=>o.disable!==!0&&x.value===!0),C=c(()=>o.error===!0||u.value===!0),_=c(()=>typeof o.errorMessage=="string"&&o.errorMessage.length>0?o.errorMessage:f.value);$(()=>o.modelValue,()=>{A()}),$(()=>o.reactiveRules,w=>{w===!0?m===void 0&&(m=$(()=>o.rules,()=>{A(!0)})):m!==void 0&&(m(),m=void 0)},{immediate:!0}),$(e,w=>{w===!0?i.value===null&&(i.value=!1):i.value===!1&&(i.value=!0,v.value===!0&&o.lazyRules!=="ondemand"&&t.value===!1&&E())});function k(){d++,t.value=!1,i.value=null,u.value=!1,f.value=null,E.cancel()}function S(w=o.modelValue){if(v.value!==!0)return!0;const R=++d,D=t.value!==!0?()=>{i.value=!0}:()=>{},B=(g,b)=>{g===!0&&D(),u.value=g,f.value=b||null,t.value=!1},F=[];for(let g=0;g<o.rules.length;g++){const b=o.rules[g];let p;if(typeof b=="function"?p=b(w,de):typeof b=="string"&&de[b]!==void 0&&(p=de[b](w)),p===!1||typeof p=="string")return B(!0,p),!1;p!==!0&&p!==void 0&&F.push(p)}return F.length===0?(B(!1),!0):(t.value=!0,Promise.all(F).then(g=>{if(g===void 0||Array.isArray(g)===!1||g.length===0)return R===d&&B(!1),!0;const b=g.find(p=>p===!1||typeof p=="string");return R===d&&B(b!==void 0,b),b===void 0},g=>(R===d&&(console.error(g),B(!0)),!1)))}function A(w){v.value===!0&&o.lazyRules!=="ondemand"&&(i.value===!0||o.lazyRules!==!0&&w!==!0)&&E()}const E=Ke(S,0);return K(()=>{m!==void 0&&m(),E.cancel()}),Object.assign(n,{resetValidation:k,validate:S}),Fe(n,"hasError",()=>C.value),{isDirtyModel:i,hasRules:x,hasError:C,errorMessage:_,validate:S,resetValidation:k}}const Se=/^on[A-Z]/;function Rt(e,t){const o={listeners:q({}),attributes:q({})};function n(){const u={},f={};for(const i in e)i!=="class"&&i!=="style"&&Se.test(i)===!1&&(u[i]=e[i]);for(const i in t.props)Se.test(i)===!0&&(f[i]=t.props[i]);o.attributes.value=u,o.listeners.value=f}return Ne(n),n(),o}function ce(e){return e===void 0?`f_${ut()}`:e}function $t(e){return e!=null&&(""+e).length>0}const zt={...Je,...Ft,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Lt=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function jt(){const{props:e,attrs:t,proxy:o,vnode:n}=z();return{isDark:Xe(e,o.$q),editable:c(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:q(!1),focused:q(!1),hasPopupOpen:!1,splitAttrs:Rt(t,n),targetUid:q(ce(e.for)),rootRef:q(null),targetRef:q(null),controlRef:q(null)}}function Qt(e){const{props:t,emit:o,slots:n,attrs:u,proxy:f}=z(),{$q:i}=f;let d=null;e.hasValue===void 0&&(e.hasValue=c(()=>$t(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{o("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:N,onFocusout:G}),Object.assign(e,{clearValue:W,onControlFocusin:N,onControlFocusout:G,focus:b}),e.computedCounter===void 0&&(e.computedCounter=c(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,r=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(r!==void 0?" / "+r:"")}}));const{isDirtyModel:m,hasRules:x,hasError:v,errorMessage:C,resetValidation:_}=Et(e.focused,e.innerLoading),k=e.floatingLabel!==void 0?c(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):c(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),S=c(()=>t.bottomSlots===!0||t.hint!==void 0||x.value===!0||t.counter===!0||t.error!==null),A=c(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),E=c(()=>`q-field row no-wrap items-start q-field--${A.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(k.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(v.value===!0?" q-field--error":"")+(v.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&S.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),w=c(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(v.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),R=c(()=>t.labelSlot===!0||t.label!==void 0),D=c(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&v.value!==!0?` text-${t.labelColor}`:"")),B=c(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:k.value,modelValue:t.modelValue,emitValue:e.emitValue})),F=c(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});$(()=>t.for,l=>{e.targetUid.value=ce(l)});function g(){const l=document.activeElement;let r=e.targetRef!==void 0&&e.targetRef.value;r&&(l===null||l.id!==e.targetUid.value)&&(r.hasAttribute("tabindex")===!0||(r=r.querySelector("[tabindex]")),r&&r!==l&&r.focus({preventScroll:!0}))}function b(){$e(g)}function p(){dt(g);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function N(l){d!==null&&(clearTimeout(d),d=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",l))}function G(l,r){d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,o("blur",l)),r!==void 0&&r())})}function W(l){Ge(l),i.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),o("clear",t.modelValue),ke(()=>{_(),i.platform.is.mobile!==!0&&(m.value=!1)})}function M(){const l=[];return n.prepend!==void 0&&l.push(s("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:j},n.prepend())),l.push(s("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ne())),v.value===!0&&t.noErrorIcon===!1&&l.push(I("error",[s(pe,{name:i.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(I("inner-loading-append",n.loading!==void 0?n.loading():[s(Ye,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(I("inner-clearable-append",[s(pe,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||i.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:W})])),n.append!==void 0&&l.push(s("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:j},n.append())),e.getInnerAppend!==void 0&&l.push(I("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function ne(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(s("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):n.rawControl!==void 0?l.push(n.rawControl()):n.control!==void 0&&l.push(s("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(B.value))),R.value===!0&&l.push(s("div",{class:D.value},Q(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(s("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(Q(n.default))}function le(){let l,r;v.value===!0?C.value!==null?(l=[s("div",{role:"alert"},C.value)],r=`q--slot-error-${C.value}`):(l=Q(n.error),r="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[s("div",t.hint)],r=`q--slot-hint-${t.hint}`):(l=Q(n.hint),r="q--slot-hint"));const O=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&O===!1&&l===void 0)return;const L=s("div",{key:r,class:"q-field__messages col"},l);return s("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:j},[t.hideBottomSpace===!0?L:s(fe,{name:"q-transition--field-message"},()=>L),O===!0?s("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function I(l,r){return r===null?null:s("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},r)}let Z=!1;return Be(()=>{Z=!0}),We(()=>{Z===!0&&t.autofocus===!0&&f.focus()}),Ee(()=>{Ze.value===!0&&t.for===void 0&&(e.targetUid.value=ce()),t.autofocus===!0&&f.focus()}),K(()=>{d!==null&&clearTimeout(d)}),Object.assign(f,{focus:b,blur:p}),function(){const r=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...F.value}:F.value;return s("label",{ref:e.rootRef,class:[E.value,u.class],style:u.style,...r},[n.before!==void 0?s("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:j},n.before()):null,s("div",{class:"q-field__inner relative-position col self-stretch"},[s("div",{ref:e.controlRef,class:w.value,tabindex:-1,...e.controlEvents},M()),S.value===!0?le():null]),n.after!==void 0?s("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:j},n.after()):null])}}const Ut={name:String};function Kt(e={}){return(t,o,n)=>{t[o](s("input",{class:"hidden"+(n||""),...e.value}))}}function Nt(e){return c(()=>e.name||e.for)}const At=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Pt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Vt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Tt=/[a-z0-9_ -]$/i;function Gt(e){return function(o){if(o.type==="compositionend"||o.type==="change"){if(o.target.qComposing!==!0)return;o.target.qComposing=!1,e(o)}else o.type==="compositionupdate"&&o.target.qComposing!==!0&&typeof o.data=="string"&&(ve.is.firefox===!0?Tt.test(o.data)===!1:At.test(o.data)===!0||Pt.test(o.data)===!0||Vt.test(o.data)===!0)===!0&&(o.target.qComposing=!0)}}export{Ht as Q,ut as a,rt as b,Ot as c,zt as d,Ut as e,Lt as f,It as g,Nt as h,jt as i,Qt as j,$e as k,$t as l,Gt as m,yt as n,ht as o,_t as p,ye as q,qe as r,wt as s,gt as t,bt as u,oe as v,Kt as w};
