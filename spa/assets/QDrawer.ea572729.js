import{v as Z,c as s,h as p,A as ke,aw as Xe,am as I,aV as be,ae as Ve,aW as ye,aX as Ie,aD as J,aY as ie,as as Se,E as ne,aC as fe,aF as ue,a5 as Ye,aE as Re,at as Te,r as g,au as Be,aq as Ne,w as q,a9 as Ke,aa as Ue,I as Oe,z as Ge,X as he,g as Pe,aT as Je,aS as Ze,Q as et,aZ as tt,G as se,o as at,ag as ze,a_ as ge,i as lt,J as rt}from"./index.6fdc5749.js";import{Q as pe}from"./QResizeObserver.6857ef3c.js";import{d as ot}from"./QLayout.afb0f854.js";import{b as D}from"./format.2a3572e1.js";import{s as we,j as ce,d as it,e as nt,u as ut,f as st,h as ct,i as vt}from"./use-prevent-scroll.b5993834.js";var zt=Z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:c}){const v=s(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>p("div",{class:v.value},ke(c.default))}});function ve(e,c,v){const z=fe(e);let t,r=z.left-c.event.x,n=z.top-c.event.y,a=Math.abs(r),m=Math.abs(n);const f=c.direction;f.horizontal===!0&&f.vertical!==!0?t=r<0?"left":"right":f.horizontal!==!0&&f.vertical===!0?t=n<0?"up":"down":f.up===!0&&n<0?(t="up",a>m&&(f.left===!0&&r<0?t="left":f.right===!0&&r>0&&(t="right"))):f.down===!0&&n>0?(t="down",a>m&&(f.left===!0&&r<0?t="left":f.right===!0&&r>0&&(t="right"))):f.left===!0&&r<0?(t="left",a<m&&(f.up===!0&&n<0?t="up":f.down===!0&&n>0&&(t="down"))):f.right===!0&&r>0&&(t="right",a<m&&(f.up===!0&&n<0?t="up":f.down===!0&&n>0&&(t="down")));let i=!1;if(t===void 0&&v===!1){if(c.event.isFirst===!0||c.event.lastDir===void 0)return{};t=c.event.lastDir,i=!0,t==="left"||t==="right"?(z.left-=r,a=0,r=0):(z.top-=n,m=0,n=0)}return{synthetic:i,payload:{evt:e,touch:c.event.mouse!==!0,mouse:c.event.mouse===!0,position:z,direction:t,isFirst:c.event.isFirst,isFinal:v===!0,duration:Date.now()-c.event.time,distance:{x:a,y:m},offset:{x:r,y:n},delta:{x:z.left-c.event.lastX,y:z.top-c.event.lastY}}}}let dt=0;var Y=Xe({name:"touch-pan",beforeMount(e,{value:c,modifiers:v}){if(v.mouse!==!0&&I.has.touch!==!0)return;function z(r,n){v.mouse===!0&&n===!0?Ye(r):(v.stop===!0&&ne(r),v.prevent===!0&&Se(r))}const t={uid:"qvtp_"+dt++,handler:c,modifiers:v,direction:be(v),noop:Ve,mouseStart(r){ye(r,t)&&Ie(r)&&(J(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(r,!0))},touchStart(r){if(ye(r,t)){const n=r.target;J(t,"temp",[[n,"touchmove","move","notPassiveCapture"],[n,"touchcancel","end","passiveCapture"],[n,"touchend","end","passiveCapture"]]),t.start(r)}},start(r,n){if(I.is.firefox===!0&&ie(e,!0),t.lastEvt=r,n===!0||v.stop===!0){if(t.direction.all!==!0&&(n!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const f=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&Se(f),r.cancelBubble===!0&&ne(f),Object.assign(f,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[t.uid]:r.qClonedBy.concat(t.uid)}),t.initialEvent={target:r.target,event:f}}ne(r)}const{left:a,top:m}=fe(r);t.event={x:a,y:m,time:Date.now(),mouse:n===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:m}},move(r){if(t.event===void 0)return;const n=fe(r),a=n.left-t.event.x,m=n.top-t.event.y;if(a===0&&m===0)return;t.lastEvt=r;const f=t.event.mouse===!0,i=()=>{z(r,f);let w;v.preserveCursor!==!0&&v.preservecursor!==!0&&(w=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),f===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Re(),t.styleCleanup=b=>{if(t.styleCleanup=void 0,w!==void 0&&(document.documentElement.style.cursor=w),document.body.classList.remove("non-selectable"),f===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};b!==void 0?setTimeout(()=>{P(),b()},50):P()}else b!==void 0&&b()}};if(t.event.detected===!0){t.event.isFirst!==!0&&z(r,t.event.mouse);const{payload:w,synthetic:b}=ve(r,t,!1);w!==void 0&&(t.handler(w)===!1?t.end(r):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=w.position.left,t.event.lastY=w.position.top,t.event.lastDir=b===!0?void 0:w.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||f===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(r);return}const C=Math.abs(a),S=Math.abs(m);C!==S&&(t.direction.horizontal===!0&&C>S||t.direction.vertical===!0&&C<S||t.direction.up===!0&&C<S&&m<0||t.direction.down===!0&&C<S&&m>0||t.direction.left===!0&&C>S&&a<0||t.direction.right===!0&&C>S&&a>0?(t.event.detected=!0,t.move(r)):t.end(r,!0))},end(r,n){if(t.event!==void 0){if(ue(t,"temp"),I.is.firefox===!0&&ie(e,!1),n===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(ve(r===void 0?t.lastEvt:r,t).payload);const{payload:a}=ve(r===void 0?t.lastEvt:r,t,!0),m=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(m):m()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,v.mouse===!0){const r=v.mouseCapture===!0||v.mousecapture===!0?"Capture":"";J(t,"main",[[e,"mousedown","mouseStart",`passive${r}`]])}I.has.touch===!0&&J(t,"main",[[e,"touchstart","touchStart",`passive${v.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,c){const v=e.__qtouchpan;v!==void 0&&(c.oldValue!==c.value&&(typeof value!="function"&&v.end(),v.handler=c.value),v.direction=be(c.modifiers))},beforeUnmount(e){const c=e.__qtouchpan;c!==void 0&&(c.event!==void 0&&c.end(),ue(c,"main"),ue(c,"temp"),I.is.firefox===!0&&ie(e,!1),c.styleCleanup!==void 0&&c.styleCleanup(),delete e.__qtouchpan)}});const qe=["vertical","horizontal"],de={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Ce={prevent:!0,mouse:!0,mouseAllDir:!0},_e=e=>e>=250?50:Math.ceil(e/5);var gt=Z({name:"QScrollArea",props:{...Te,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:c,emit:v}){const z=g(!1),t=g(!1),r=g(!1),n={vertical:g(0),horizontal:g(0)},a={vertical:{ref:g(null),position:g(0),size:g(0)},horizontal:{ref:g(null),position:g(0),size:g(0)}},{proxy:m}=Pe(),f=Be(e,m.$q);let i=null,C;const S=g(null),w=s(()=>"q-scrollarea"+(f.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=s(()=>{const o=a.vertical.size.value-n.vertical.value;if(o<=0)return 0;const u=D(a.vertical.position.value/o,0,1);return Math.round(u*1e4)/1e4}),a.vertical.thumbHidden=s(()=>(e.visible===null?r.value:e.visible)!==!0&&z.value===!1&&t.value===!1||a.vertical.size.value<=n.vertical.value+1),a.vertical.thumbStart=s(()=>a.vertical.percentage.value*(n.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=s(()=>Math.round(D(n.vertical.value*n.vertical.value/a.vertical.size.value,_e(n.vertical.value),n.vertical.value))),a.vertical.style=s(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=s(()=>{const o=a.horizontal.size.value-n.horizontal.value;if(o<=0)return 0;const u=D(Math.abs(a.horizontal.position.value)/o,0,1);return Math.round(u*1e4)/1e4}),a.horizontal.thumbHidden=s(()=>(e.visible===null?r.value:e.visible)!==!0&&z.value===!1&&t.value===!1||a.horizontal.size.value<=n.horizontal.value+1),a.horizontal.thumbStart=s(()=>a.horizontal.percentage.value*(n.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=s(()=>Math.round(D(n.horizontal.value*n.horizontal.value/a.horizontal.size.value,_e(n.horizontal.value),n.horizontal.value))),a.horizontal.style=s(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[m.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=s(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=s(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const b=s(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),P=[[Y,o=>{N(o,"vertical")},void 0,{vertical:!0,...Ce}]],_=[[Y,o=>{N(o,"horizontal")},void 0,{horizontal:!0,...Ce}]];function y(){const o={};return qe.forEach(u=>{const h=a[u];o[u+"Position"]=h.position.value,o[u+"Percentage"]=h.percentage.value,o[u+"Size"]=h.size.value,o[u+"ContainerSize"]=n[u].value}),o}const F=Ne(()=>{const o=y();o.ref=m,v("scroll",o)},0);function W(o,u,h){if(qe.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?we:ce)(S.value,u,h)}function R({height:o,width:u}){let h=!1;n.vertical.value!==o&&(n.vertical.value=o,h=!0),n.horizontal.value!==u&&(n.horizontal.value=u,h=!0),h===!0&&O()}function j({position:o}){let u=!1;a.vertical.position.value!==o.top&&(a.vertical.position.value=o.top,u=!0),a.horizontal.position.value!==o.left&&(a.horizontal.position.value=o.left,u=!0),u===!0&&O()}function E({height:o,width:u}){a.horizontal.size.value!==u&&(a.horizontal.size.value=u,O()),a.vertical.size.value!==o&&(a.vertical.size.value=o,O())}function N(o,u){const h=a[u];if(o.isFirst===!0){if(h.thumbHidden.value===!0)return;C=h.position.value,t.value=!0}else if(t.value!==!0)return;o.isFinal===!0&&(t.value=!1);const k=de[u],Q=n[u].value,ee=(h.size.value-Q)/(Q-h.thumbSize.value),te=o.distance[k.dist],U=C+(o.direction===k.dir?1:-1)*te*ee;X(U,u)}function K(o,u){const h=a[u];if(h.thumbHidden.value!==!0){const k=o[de[u].offset];if(k<h.thumbStart.value||k>h.thumbStart.value+h.thumbSize.value){const Q=k-h.thumbSize.value/2;X(Q/n[u].value*h.size.value,u)}h.ref.value!==null&&h.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function L(o){K(o,"vertical")}function B(o){K(o,"horizontal")}function O(){z.value=!0,i!==null&&clearTimeout(i),i=setTimeout(()=>{i=null,z.value=!1},e.delay),e.onScroll!==void 0&&F()}function X(o,u){S.value[de[u].scroll]=o}function A(){r.value=!0}function V(){r.value=!1}let H=null;return q(()=>m.$q.lang.rtl,o=>{S.value!==null&&ce(S.value,Math.abs(a.horizontal.position.value)*(o===!0?-1:1))}),Ke(()=>{H={top:a.vertical.position.value,left:a.horizontal.position.value}}),Ue(()=>{if(H===null)return;const o=S.value;o!==null&&(ce(o,H.left),we(o,H.top))}),Oe(F.cancel),Object.assign(m,{getScrollTarget:()=>S.value,getScroll:y,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:W,setScrollPercentage(o,u,h){W(o,u*(a[o].size.value-n[o].value)*(o==="horizontal"&&m.$q.lang.rtl===!0?-1:1),h)}}),()=>p("div",{class:w.value,onMouseenter:A,onMouseleave:V},[p("div",{ref:S,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[p("div",{class:"q-scrollarea__content absolute",style:b.value},Ge(c.default,[p(pe,{debounce:0,onResize:E})])),p(ot,{axis:"both",onScroll:j})]),p(pe,{debounce:0,onResize:R}),p("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:L}),p("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:B}),he(p("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),P),he(p("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),_)])}}),pt=Z({name:"QAvatar",props:{...Je,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:c}){const v=Ze(e),z=s(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),t=s(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const r=e.icon!==void 0?[p(et,{name:e.icon})]:void 0;return p("div",{class:z.value,style:v.value},[p("div",{class:"q-avatar__content row flex-center overflow-hidden",style:t.value},tt(c.default,r))])}}});const Me=150;var wt=Z({name:"QDrawer",inheritAttrs:!1,props:{...it,...Te,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...nt,"onLayout","miniState"],setup(e,{slots:c,emit:v,attrs:z}){const t=Pe(),{proxy:{$q:r}}=t,n=Be(e,r),{preventBodyScroll:a}=vt(),{registerTimeout:m,removeTimeout:f}=ut(),i=lt(rt,se);if(i===se)return console.error("QDrawer needs to be child of QLayout"),se;let C,S=null,w;const b=g(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),P=s(()=>e.mini===!0&&b.value!==!0),_=s(()=>P.value===!0?e.miniWidth:e.width),y=g(e.showIfAbove===!0&&b.value===!1?!0:e.modelValue===!0),F=s(()=>e.persistent!==!0&&(b.value===!0||Q.value===!0));function W(l,d){if(N(),l!==!1&&i.animate(),T(0),b.value===!0){const M=i.instances[o.value];M!==void 0&&M.belowBreakpoint===!0&&M.hide(!1),$(1),i.isContainer.value!==!0&&a(!0)}else $(0),l!==!1&&le(!1);m(()=>{l!==!1&&le(!0),d!==!0&&v("show",l)},Me)}function R(l,d){K(),l!==!1&&i.animate(),$(0),T(O.value*_.value),re(),d!==!0?m(()=>{v("hide",l)},Me):f()}const{show:j,hide:E}=st({showing:y,hideOnRouteChange:F,handleShow:W,handleHide:R}),{addToHistory:N,removeFromHistory:K}=ct(y,E,F),L={belowBreakpoint:b,hide:E},B=s(()=>e.side==="right"),O=s(()=>(r.lang.rtl===!0?-1:1)*(B.value===!0?1:-1)),X=g(0),A=g(!1),V=g(!1),H=g(_.value*O.value),o=s(()=>B.value===!0?"left":"right"),u=s(()=>y.value===!0&&b.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:_.value:0),h=s(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(B.value?"R":"L")>-1||r.platform.is.ios===!0&&i.isContainer.value===!0),k=s(()=>e.overlay===!1&&y.value===!0&&b.value===!1),Q=s(()=>e.overlay===!0&&y.value===!0&&b.value===!1),ee=s(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&A.value===!1?" hidden":"")),te=s(()=>({backgroundColor:`rgba(0,0,0,${X.value*.4})`})),U=s(()=>B.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Ae=s(()=>B.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),$e=s(()=>{const l={};return i.header.space===!0&&U.value===!1&&(h.value===!0?l.top=`${i.header.offset}px`:i.header.space===!0&&(l.top=`${i.header.size}px`)),i.footer.space===!0&&Ae.value===!1&&(h.value===!0?l.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(l.bottom=`${i.footer.size}px`)),l}),xe=s(()=>{const l={width:`${_.value}px`,transform:`translateX(${H.value}px)`};return b.value===!0?l:Object.assign(l,$e.value)}),De=s(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Ee=s(()=>`q-drawer q-drawer--${e.side}`+(V.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(n.value===!0?" q-drawer--dark q-dark":"")+(A.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(b.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(h.value===!0||k.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(U.value===!0?" q-drawer--top-padding":""))),He=s(()=>{const l=r.lang.rtl===!0?e.side:o.value;return[[Y,We,void 0,{[l]:!0,mouse:!0}]]}),Le=s(()=>{const l=r.lang.rtl===!0?o.value:e.side;return[[Y,me,void 0,{[l]:!0,mouse:!0}]]}),Qe=s(()=>{const l=r.lang.rtl===!0?o.value:e.side;return[[Y,me,void 0,{[l]:!0,mouse:!0,mouseAllDir:!0}]]});function ae(){je(b,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}q(b,l=>{l===!0?(C=y.value,y.value===!0&&E(!1)):e.overlay===!1&&e.behavior!=="mobile"&&C!==!1&&(y.value===!0?(T(0),$(0),re()):j(!1))}),q(()=>e.side,(l,d)=>{i.instances[d]===L&&(i.instances[d]=void 0,i[d].space=!1,i[d].offset=0),i.instances[l]=L,i[l].size=_.value,i[l].space=k.value,i[l].offset=u.value}),q(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&ae()}),q(()=>e.behavior+e.breakpoint,ae),q(i.isContainer,l=>{y.value===!0&&a(l!==!0),l===!0&&ae()}),q(i.scrollbarWidth,()=>{T(y.value===!0?0:void 0)}),q(u,l=>{x("offset",l)}),q(k,l=>{v("onLayout",l),x("space",l)}),q(B,()=>{T()}),q(_,l=>{T(),oe(e.miniToOverlay,l)}),q(()=>e.miniToOverlay,l=>{oe(l,_.value)}),q(()=>r.lang.rtl,()=>{T()}),q(()=>e.mini,()=>{e.modelValue===!0&&(Fe(),i.animate())}),q(P,l=>{v("miniState",l)});function T(l){l===void 0?ze(()=>{l=y.value===!0?0:_.value,T(O.value*l)}):(i.isContainer.value===!0&&B.value===!0&&(b.value===!0||Math.abs(l)===_.value)&&(l+=O.value*i.scrollbarWidth.value),H.value=l)}function $(l){X.value=l}function le(l){const d=l===!0?"remove":i.isContainer.value!==!0?"add":"";d!==""&&document.body.classList[d]("q-body--drawer-toggle")}function Fe(){S!==null&&clearTimeout(S),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),V.value=!0,S=setTimeout(()=>{S=null,V.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function We(l){if(y.value!==!1)return;const d=_.value,M=D(l.distance.x,0,d);if(l.isFinal===!0){M>=Math.min(75,d)===!0?j():(i.animate(),$(0),T(O.value*d)),A.value=!1;return}T((r.lang.rtl===!0?B.value!==!0:B.value)?Math.max(d-M,0):Math.min(0,M-d)),$(D(M/d,0,1)),l.isFirst===!0&&(A.value=!0)}function me(l){if(y.value!==!0)return;const d=_.value,M=l.direction===e.side,G=(r.lang.rtl===!0?M!==!0:M)?D(l.distance.x,0,d):0;if(l.isFinal===!0){Math.abs(G)<Math.min(75,d)===!0?(i.animate(),$(1),T(0)):E(),A.value=!1;return}T(O.value*G),$(D(1-G/d,0,1)),l.isFirst===!0&&(A.value=!0)}function re(){a(!1),le(!0)}function x(l,d){i.update(e.side,l,d)}function je(l,d){l.value!==d&&(l.value=d)}function oe(l,d){x("size",l===!0?e.miniWidth:d)}return i.instances[e.side]=L,oe(e.miniToOverlay,_.value),x("space",k.value),x("offset",u.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&v("update:modelValue",!0),at(()=>{v("onLayout",k.value),v("miniState",P.value),C=e.showIfAbove===!0;const l=()=>{(y.value===!0?W:R)(!1,!0)};if(i.totalWidth.value!==0){ze(l);return}w=q(i.totalWidth,()=>{w(),w=void 0,y.value===!1&&e.showIfAbove===!0&&b.value===!1?j(!1):l()})}),Oe(()=>{w!==void 0&&w(),S!==null&&(clearTimeout(S),S=null),y.value===!0&&re(),i.instances[e.side]===L&&(i.instances[e.side]=void 0,x("size",0),x("offset",0),x("space",!1))}),()=>{const l=[];b.value===!0&&(e.noSwipeOpen===!1&&l.push(he(p("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),He.value)),l.push(ge("div",{ref:"backdrop",class:ee.value,style:te.value,"aria-hidden":"true",onClick:E},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>Qe.value)));const d=P.value===!0&&c.mini!==void 0,M=[p("div",{...z,key:""+d,class:[De.value,z.class]},d===!0?c.mini():ke(c.default))];return e.elevated===!0&&y.value===!0&&M.push(p("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(ge("aside",{ref:"content",class:Ee.value,style:xe.value},M,"contentclose",e.noSwipeClose!==!0&&b.value===!0,()=>Le.value)),p("div",{class:"q-drawer-container"},l)}}});export{zt as Q,gt as a,pt as b,wt as c};