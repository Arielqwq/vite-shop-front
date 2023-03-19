import{v as ne,aB as Se,r as d,aF as ye,c as i,bb as xe,w as m,bc as le,ar as Ae,as as De,K as ze,h as f,z as He,aa as ie,g as ge,R as se,bd as p,b8 as Qe,b6 as Le,Q as We,be as je,aA as Fe,aE as Ie,ap as Re,i as Ve,I as re,J as pe,aJ as Ee,bf as Ne,a2 as ce,o as Je,bg as ve,A as Ke,bh as Ue}from"./index.fabf8bca.js";import{Q as de}from"./QResizeObserver.f506fc8d.js";import{b as Xe}from"./logo_name.2ad47f85.js";import{b as P}from"./format.2a3572e1.js";const fe=["vertical","horizontal"],oe={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},he={prevent:!0,mouse:!0,mouseAllDir:!0},be=e=>e>=250?50:Math.ceil(e/5);var at=ne({name:"QScrollArea",props:{...Se,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:$,emit:q}){const C=d(!1),h=d(!1),b=d(!1),s={vertical:d(0),horizontal:d(0)},a={vertical:{ref:d(null),position:d(0),size:d(0)},horizontal:{ref:d(null),position:d(0),size:d(0)}},{proxy:M}=ge(),X=ye(e,M.$q);let r=null,Q;const S=d(null),x=i(()=>"q-scrollarea"+(X.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=i(()=>{const l=a.vertical.size.value-s.vertical.value;if(l<=0)return 0;const o=P(a.vertical.position.value/l,0,1);return Math.round(o*1e4)/1e4}),a.vertical.thumbHidden=i(()=>(e.visible===null?b.value:e.visible)!==!0&&C.value===!1&&h.value===!1||a.vertical.size.value<=s.vertical.value+1),a.vertical.thumbStart=i(()=>a.vertical.percentage.value*(s.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=i(()=>Math.round(P(s.vertical.value*s.vertical.value/a.vertical.size.value,be(s.vertical.value),s.vertical.value))),a.vertical.style=i(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=i(()=>{const l=a.horizontal.size.value-s.horizontal.value;if(l<=0)return 0;const o=P(Math.abs(a.horizontal.position.value)/l,0,1);return Math.round(o*1e4)/1e4}),a.horizontal.thumbHidden=i(()=>(e.visible===null?b.value:e.visible)!==!0&&C.value===!1&&h.value===!1||a.horizontal.size.value<=s.horizontal.value+1),a.horizontal.thumbStart=i(()=>a.horizontal.percentage.value*(s.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=i(()=>Math.round(P(s.horizontal.value*s.horizontal.value/a.horizontal.size.value,be(s.horizontal.value),s.horizontal.value))),a.horizontal.style=i(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[M.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const v=i(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),A=[[p,l=>{N(l,"vertical")},void 0,{vertical:!0,...he}]],y=[[p,l=>{N(l,"horizontal")},void 0,{horizontal:!0,...he}]];function c(){const l={};return fe.forEach(o=>{const u=a[o];l[o+"Position"]=u.position.value,l[o+"Percentage"]=u.percentage.value,l[o+"Size"]=u.size.value,l[o+"ContainerSize"]=s[o].value}),l}const j=xe(()=>{const l=c();l.ref=M,q("scroll",l)},0);function F(l,o,u){if(fe.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?se:le)(S.value,o,u)}function E({height:l,width:o}){let u=!1;s.vertical.value!==l&&(s.vertical.value=l,u=!0),s.horizontal.value!==o&&(s.horizontal.value=o,u=!0),u===!0&&k()}function I({position:l}){let o=!1;a.vertical.position.value!==l.top&&(a.vertical.position.value=l.top,o=!0),a.horizontal.position.value!==l.left&&(a.horizontal.position.value=l.left,o=!0),o===!0&&k()}function D({height:l,width:o}){a.horizontal.size.value!==o&&(a.horizontal.size.value=o,k()),a.vertical.size.value!==l&&(a.vertical.size.value=l,k())}function N(l,o){const u=a[o];if(l.isFirst===!0){if(u.thumbHidden.value===!0)return;Q=u.position.value,h.value=!0}else if(h.value!==!0)return;l.isFinal===!0&&(h.value=!1);const g=oe[o],W=s[o].value,Y=(u.size.value-W)/(W-u.thumbSize.value),G=l.distance[g.dist],K=Q+(l.direction===g.dir?1:-1)*G*Y;R(K,o)}function J(l,o){const u=a[o];if(u.thumbHidden.value!==!0){const g=l[oe[o].offset];if(g<u.thumbStart.value||g>u.thumbStart.value+u.thumbSize.value){const W=g-u.thumbSize.value/2;R(W/s[o].value*u.size.value,o)}u.ref.value!==null&&u.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function L(l){J(l,"vertical")}function _(l){J(l,"horizontal")}function k(){C.value=!0,r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,C.value=!1},e.delay),e.onScroll!==void 0&&j()}function R(l,o){S.value[oe[o].scroll]=l}function T(){b.value=!0}function V(){b.value=!1}let H=null;return m(()=>M.$q.lang.rtl,l=>{S.value!==null&&le(S.value,Math.abs(a.horizontal.position.value)*(l===!0?-1:1))}),Ae(()=>{H={top:a.vertical.position.value,left:a.horizontal.position.value}}),De(()=>{if(H===null)return;const l=S.value;l!==null&&(le(l,H.left),se(l,H.top))}),ze(j.cancel),Object.assign(M,{getScrollTarget:()=>S.value,getScroll:c,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:F,setScrollPercentage(l,o,u){F(l,o*(a[l].size.value-s[l].value)*(l==="horizontal"&&M.$q.lang.rtl===!0?-1:1),u)}}),()=>f("div",{class:x.value,onMouseenter:T,onMouseleave:V},[f("div",{ref:S,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[f("div",{class:"q-scrollarea__content absolute",style:v.value},He($.default,[f(de,{debounce:0,onResize:D})])),f(Xe,{axis:"both",onScroll:I})]),f(de,{debounce:0,onResize:E}),f("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:L}),f("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:_}),ie(f("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),A),ie(f("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),y)])}}),lt=ne({name:"QAvatar",props:{...Qe,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:$}){const q=Le(e),C=i(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),h=i(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const b=e.icon!==void 0?[f(We,{name:e.icon})]:void 0;return f("div",{class:C.value,style:q.value},[f("div",{class:"q-avatar__content row flex-center overflow-hidden",style:h.value},je($.default,b))])}}});const me=150;var rt=ne({name:"QDrawer",inheritAttrs:!1,props:{...Fe,...Se,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ie,"onLayout","miniState"],setup(e,{slots:$,emit:q,attrs:C}){const h=ge(),{proxy:{$q:b}}=h,s=ye(e,b),{preventBodyScroll:a}=Ue(),{registerTimeout:M,removeTimeout:X}=Re(),r=Ve(pe,re);if(r===re)return console.error("QDrawer needs to be child of QLayout"),re;let Q,S=null,x;const v=d(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),A=i(()=>e.mini===!0&&v.value!==!0),y=i(()=>A.value===!0?e.miniWidth:e.width),c=d(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),j=i(()=>e.persistent!==!0&&(v.value===!0||W.value===!0));function F(t,n){if(N(),t!==!1&&r.animate(),w(0),v.value===!0){const z=r.instances[l.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),B(1),r.isContainer.value!==!0&&a(!0)}else B(0),t!==!1&&ee(!1);M(()=>{t!==!1&&ee(!0),n!==!0&&q("show",t)},me)}function E(t,n){J(),t!==!1&&r.animate(),B(0),w(k.value*y.value),te(),n!==!0?M(()=>{q("hide",t)},me):X()}const{show:I,hide:D}=Ee({showing:c,hideOnRouteChange:j,handleShow:F,handleHide:E}),{addToHistory:N,removeFromHistory:J}=Ne(c,D,j),L={belowBreakpoint:v,hide:D},_=i(()=>e.side==="right"),k=i(()=>(b.lang.rtl===!0?-1:1)*(_.value===!0?1:-1)),R=d(0),T=d(!1),V=d(!1),H=d(y.value*k.value),l=i(()=>_.value===!0?"left":"right"),o=i(()=>c.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:y.value:0),u=i(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(_.value?"R":"L")>-1||b.platform.is.ios===!0&&r.isContainer.value===!0),g=i(()=>e.overlay===!1&&c.value===!0&&v.value===!1),W=i(()=>e.overlay===!0&&c.value===!0&&v.value===!1),Y=i(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&T.value===!1?" hidden":"")),G=i(()=>({backgroundColor:`rgba(0,0,0,${R.value*.4})`})),K=i(()=>_.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),we=i(()=>_.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),qe=i(()=>{const t={};return r.header.space===!0&&K.value===!1&&(u.value===!0?t.top=`${r.header.offset}px`:r.header.space===!0&&(t.top=`${r.header.size}px`)),r.footer.space===!0&&we.value===!1&&(u.value===!0?t.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(t.bottom=`${r.footer.size}px`)),t}),_e=i(()=>{const t={width:`${y.value}px`,transform:`translateX(${H.value}px)`};return v.value===!0?t:Object.assign(t,qe.value)}),ke=i(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Ce=i(()=>`q-drawer q-drawer--${e.side}`+(V.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(T.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${A.value===!0?"mini":"standard"}`+(u.value===!0||g.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(K.value===!0?" q-drawer--top-padding":""))),Me=i(()=>{const t=b.lang.rtl===!0?e.side:l.value;return[[p,Pe,void 0,{[t]:!0,mouse:!0}]]}),Te=i(()=>{const t=b.lang.rtl===!0?l.value:e.side;return[[p,ue,void 0,{[t]:!0,mouse:!0}]]}),Be=i(()=>{const t=b.lang.rtl===!0?l.value:e.side;return[[p,ue,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function Z(){$e(v,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}m(v,t=>{t===!0?(Q=c.value,c.value===!0&&D(!1)):e.overlay===!1&&e.behavior!=="mobile"&&Q!==!1&&(c.value===!0?(w(0),B(0),te()):I(!1))}),m(()=>e.side,(t,n)=>{r.instances[n]===L&&(r.instances[n]=void 0,r[n].space=!1,r[n].offset=0),r.instances[t]=L,r[t].size=y.value,r[t].space=g.value,r[t].offset=o.value}),m(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&Z()}),m(()=>e.behavior+e.breakpoint,Z),m(r.isContainer,t=>{c.value===!0&&a(t!==!0),t===!0&&Z()}),m(r.scrollbarWidth,()=>{w(c.value===!0?0:void 0)}),m(o,t=>{O("offset",t)}),m(g,t=>{q("onLayout",t),O("space",t)}),m(_,()=>{w()}),m(y,t=>{w(),ae(e.miniToOverlay,t)}),m(()=>e.miniToOverlay,t=>{ae(t,y.value)}),m(()=>b.lang.rtl,()=>{w()}),m(()=>e.mini,()=>{e.modelValue===!0&&(Oe(),r.animate())}),m(A,t=>{q("miniState",t)});function w(t){t===void 0?ce(()=>{t=c.value===!0?0:y.value,w(k.value*t)}):(r.isContainer.value===!0&&_.value===!0&&(v.value===!0||Math.abs(t)===y.value)&&(t+=k.value*r.scrollbarWidth.value),H.value=t)}function B(t){R.value=t}function ee(t){const n=t===!0?"remove":r.isContainer.value!==!0?"add":"";n!==""&&document.body.classList[n]("q-body--drawer-toggle")}function Oe(){S!==null&&clearTimeout(S),h.proxy&&h.proxy.$el&&h.proxy.$el.classList.add("q-drawer--mini-animate"),V.value=!0,S=setTimeout(()=>{S=null,V.value=!1,h&&h.proxy&&h.proxy.$el&&h.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Pe(t){if(c.value!==!1)return;const n=y.value,z=P(t.distance.x,0,n);if(t.isFinal===!0){z>=Math.min(75,n)===!0?I():(r.animate(),B(0),w(k.value*n)),T.value=!1;return}w((b.lang.rtl===!0?_.value!==!0:_.value)?Math.max(n-z,0):Math.min(0,z-n)),B(P(z/n,0,1)),t.isFirst===!0&&(T.value=!0)}function ue(t){if(c.value!==!0)return;const n=y.value,z=t.direction===e.side,U=(b.lang.rtl===!0?z!==!0:z)?P(t.distance.x,0,n):0;if(t.isFinal===!0){Math.abs(U)<Math.min(75,n)===!0?(r.animate(),B(1),w(0)):D(),T.value=!1;return}w(k.value*U),B(P(1-U/n,0,1)),t.isFirst===!0&&(T.value=!0)}function te(){a(!1),ee(!0)}function O(t,n){r.update(e.side,t,n)}function $e(t,n){t.value!==n&&(t.value=n)}function ae(t,n){O("size",t===!0?e.miniWidth:n)}return r.instances[e.side]=L,ae(e.miniToOverlay,y.value),O("space",g.value),O("offset",o.value),e.showIfAbove===!0&&e.modelValue!==!0&&c.value===!0&&e["onUpdate:modelValue"]!==void 0&&q("update:modelValue",!0),Je(()=>{q("onLayout",g.value),q("miniState",A.value),Q=e.showIfAbove===!0;const t=()=>{(c.value===!0?F:E)(!1,!0)};if(r.totalWidth.value!==0){ce(t);return}x=m(r.totalWidth,()=>{x(),x=void 0,c.value===!1&&e.showIfAbove===!0&&v.value===!1?I(!1):t()})}),ze(()=>{x!==void 0&&x(),S!==null&&(clearTimeout(S),S=null),c.value===!0&&te(),r.instances[e.side]===L&&(r.instances[e.side]=void 0,O("size",0),O("offset",0),O("space",!1))}),()=>{const t=[];v.value===!0&&(e.noSwipeOpen===!1&&t.push(ie(f("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Me.value)),t.push(ve("div",{ref:"backdrop",class:Y.value,style:G.value,"aria-hidden":"true",onClick:D},void 0,"backdrop",e.noSwipeBackdrop!==!0&&c.value===!0,()=>Be.value)));const n=A.value===!0&&$.mini!==void 0,z=[f("div",{...C,key:""+n,class:[ke.value,C.class]},n===!0?$.mini():Ke($.default))];return e.elevated===!0&&c.value===!0&&z.push(f("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ve("aside",{ref:"content",class:Ce.value,style:_e.value},z,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>Te.value)),f("div",{class:"q-drawer-container"},t)}}});export{rt as Q,at as a,lt as b};
