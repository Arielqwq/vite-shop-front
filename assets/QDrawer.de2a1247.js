import{v as K,c as i,h as f,A as Se,aw as ze,r as d,aA as ye,b8 as Ae,w as m,b9 as oe,aj as De,ak as He,L as ge,z as Qe,a2 as ne,g as we,ba as se,bb as V,b5 as Le,b3 as We,Q as je,bc as Fe,av as Ie,az as pe,ah as Re,i as Ve,I as re,J as Ee,aE as Ne,bd as Ue,at as ce,o as Xe,be as ve,bf as Je}from"./index.8f362b44.js";import{Q as de}from"./QResizeObserver.4bab98ce.js";import{d as Ke}from"./QLayout.2d4510f5.js";import{b as $}from"./format.2a3572e1.js";var at=K({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:T}){const g=i(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>f("div",{class:g.value},Se(T.default))}});const fe=["vertical","horizontal"],ie={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},he={prevent:!0,mouse:!0,mouseAllDir:!0},be=e=>e>=250?50:Math.ceil(e/5);var lt=K({name:"QScrollArea",props:{...ze,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:T,emit:g}){const C=d(!1),h=d(!1),b=d(!1),s={vertical:d(0),horizontal:d(0)},a={vertical:{ref:d(null),position:d(0),size:d(0)},horizontal:{ref:d(null),position:d(0),size:d(0)}},{proxy:M}=we(),Y=ye(e,M.$q);let o=null,Q;const S=d(null),x=i(()=>"q-scrollarea"+(Y.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=i(()=>{const l=a.vertical.size.value-s.vertical.value;if(l<=0)return 0;const r=$(a.vertical.position.value/l,0,1);return Math.round(r*1e4)/1e4}),a.vertical.thumbHidden=i(()=>(e.visible===null?b.value:e.visible)!==!0&&C.value===!1&&h.value===!1||a.vertical.size.value<=s.vertical.value+1),a.vertical.thumbStart=i(()=>a.vertical.percentage.value*(s.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=i(()=>Math.round($(s.vertical.value*s.vertical.value/a.vertical.size.value,be(s.vertical.value),s.vertical.value))),a.vertical.style=i(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=i(()=>{const l=a.horizontal.size.value-s.horizontal.value;if(l<=0)return 0;const r=$(Math.abs(a.horizontal.position.value)/l,0,1);return Math.round(r*1e4)/1e4}),a.horizontal.thumbHidden=i(()=>(e.visible===null?b.value:e.visible)!==!0&&C.value===!1&&h.value===!1||a.horizontal.size.value<=s.horizontal.value+1),a.horizontal.thumbStart=i(()=>a.horizontal.percentage.value*(s.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=i(()=>Math.round($(s.horizontal.value*s.horizontal.value/a.horizontal.size.value,be(s.horizontal.value),s.horizontal.value))),a.horizontal.style=i(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[M.$q.lang.rtl===!0?"right":"left"]:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=i(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=i(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const v=i(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),A=[[V,l=>{N(l,"vertical")},void 0,{vertical:!0,...he}]],z=[[V,l=>{N(l,"horizontal")},void 0,{horizontal:!0,...he}]];function c(){const l={};return fe.forEach(r=>{const u=a[r];l[r+"Position"]=u.position.value,l[r+"Percentage"]=u.percentage.value,l[r+"Size"]=u.size.value,l[r+"ContainerSize"]=s[r].value}),l}const j=Ae(()=>{const l=c();l.ref=M,g("scroll",l)},0);function F(l,r,u){if(fe.includes(l)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(l==="vertical"?se:oe)(S.value,r,u)}function E({height:l,width:r}){let u=!1;s.vertical.value!==l&&(s.vertical.value=l,u=!0),s.horizontal.value!==r&&(s.horizontal.value=r,u=!0),u===!0&&k()}function I({position:l}){let r=!1;a.vertical.position.value!==l.top&&(a.vertical.position.value=l.top,r=!0),a.horizontal.position.value!==l.left&&(a.horizontal.position.value=l.left,r=!0),r===!0&&k()}function D({height:l,width:r}){a.horizontal.size.value!==r&&(a.horizontal.size.value=r,k()),a.vertical.size.value!==l&&(a.vertical.size.value=l,k())}function N(l,r){const u=a[r];if(l.isFirst===!0){if(u.thumbHidden.value===!0)return;Q=u.position.value,h.value=!0}else if(h.value!==!0)return;l.isFinal===!0&&(h.value=!1);const w=ie[r],W=s[r].value,G=(u.size.value-W)/(W-u.thumbSize.value),Z=l.distance[w.dist],X=Q+(l.direction===w.dir?1:-1)*Z*G;p(X,r)}function U(l,r){const u=a[r];if(u.thumbHidden.value!==!0){const w=l[ie[r].offset];if(w<u.thumbStart.value||w>u.thumbStart.value+u.thumbSize.value){const W=w-u.thumbSize.value/2;p(W/s[r].value*u.size.value,r)}u.ref.value!==null&&u.ref.value.dispatchEvent(new MouseEvent(l.type,l))}}function L(l){U(l,"vertical")}function _(l){U(l,"horizontal")}function k(){C.value=!0,o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,C.value=!1},e.delay),e.onScroll!==void 0&&j()}function p(l,r){S.value[ie[r].scroll]=l}function B(){b.value=!0}function R(){b.value=!1}let H=null;return m(()=>M.$q.lang.rtl,l=>{S.value!==null&&oe(S.value,Math.abs(a.horizontal.position.value)*(l===!0?-1:1))}),De(()=>{H={top:a.vertical.position.value,left:a.horizontal.position.value}}),He(()=>{if(H===null)return;const l=S.value;l!==null&&(oe(l,H.left),se(l,H.top))}),ge(j.cancel),Object.assign(M,{getScrollTarget:()=>S.value,getScroll:c,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:F,setScrollPercentage(l,r,u){F(l,r*(a[l].size.value-s[l].value)*(l==="horizontal"&&M.$q.lang.rtl===!0?-1:1),u)}}),()=>f("div",{class:x.value,onMouseenter:B,onMouseleave:R},[f("div",{ref:S,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[f("div",{class:"q-scrollarea__content absolute",style:v.value},Qe(T.default,[f(de,{debounce:0,onResize:D})])),f(Ke,{axis:"both",onScroll:I})]),f(de,{debounce:0,onResize:E}),f("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:L}),f("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:_}),ne(f("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),A),ne(f("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),z)])}}),ot=K({name:"QAvatar",props:{...Le,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:T}){const g=We(e),C=i(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),h=i(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const b=e.icon!==void 0?[f(je,{name:e.icon})]:void 0;return f("div",{class:C.value,style:g.value},[f("div",{class:"q-avatar__content row flex-center overflow-hidden",style:h.value},Fe(T.default,b))])}}});const me=150;var rt=K({name:"QDrawer",inheritAttrs:!1,props:{...Ie,...ze,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...pe,"onLayout","miniState"],setup(e,{slots:T,emit:g,attrs:C}){const h=we(),{proxy:{$q:b}}=h,s=ye(e,b),{preventBodyScroll:a}=Je(),{registerTimeout:M,removeTimeout:Y}=Re(),o=Ve(Ee,re);if(o===re)return console.error("QDrawer needs to be child of QLayout"),re;let Q,S=null,x;const v=d(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),A=i(()=>e.mini===!0&&v.value!==!0),z=i(()=>A.value===!0?e.miniWidth:e.width),c=d(e.showIfAbove===!0&&v.value===!1?!0:e.modelValue===!0),j=i(()=>e.persistent!==!0&&(v.value===!0||W.value===!0));function F(t,n){if(N(),t!==!1&&o.animate(),q(0),v.value===!0){const y=o.instances[l.value];y!==void 0&&y.belowBreakpoint===!0&&y.hide(!1),O(1),o.isContainer.value!==!0&&a(!0)}else O(0),t!==!1&&te(!1);M(()=>{t!==!1&&te(!0),n!==!0&&g("show",t)},me)}function E(t,n){U(),t!==!1&&o.animate(),O(0),q(k.value*z.value),ae(),n!==!0?M(()=>{g("hide",t)},me):Y()}const{show:I,hide:D}=Ne({showing:c,hideOnRouteChange:j,handleShow:F,handleHide:E}),{addToHistory:N,removeFromHistory:U}=Ue(c,D,j),L={belowBreakpoint:v,hide:D},_=i(()=>e.side==="right"),k=i(()=>(b.lang.rtl===!0?-1:1)*(_.value===!0?1:-1)),p=d(0),B=d(!1),R=d(!1),H=d(z.value*k.value),l=i(()=>_.value===!0?"left":"right"),r=i(()=>c.value===!0&&v.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),u=i(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(_.value?"R":"L")>-1||b.platform.is.ios===!0&&o.isContainer.value===!0),w=i(()=>e.overlay===!1&&c.value===!0&&v.value===!1),W=i(()=>e.overlay===!0&&c.value===!0&&v.value===!1),G=i(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&B.value===!1?" hidden":"")),Z=i(()=>({backgroundColor:`rgba(0,0,0,${p.value*.4})`})),X=i(()=>_.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),qe=i(()=>_.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),_e=i(()=>{const t={};return o.header.space===!0&&X.value===!1&&(u.value===!0?t.top=`${o.header.offset}px`:o.header.space===!0&&(t.top=`${o.header.size}px`)),o.footer.space===!0&&qe.value===!1&&(u.value===!0?t.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(t.bottom=`${o.footer.size}px`)),t}),ke=i(()=>{const t={width:`${z.value}px`,transform:`translateX(${H.value}px)`};return v.value===!0?t:Object.assign(t,_e.value)}),Te=i(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),Ce=i(()=>`q-drawer q-drawer--${e.side}`+(R.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(B.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(v.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${A.value===!0?"mini":"standard"}`+(u.value===!0||w.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(X.value===!0?" q-drawer--top-padding":""))),Me=i(()=>{const t=b.lang.rtl===!0?e.side:l.value;return[[V,$e,void 0,{[t]:!0,mouse:!0}]]}),Be=i(()=>{const t=b.lang.rtl===!0?l.value:e.side;return[[V,ue,void 0,{[t]:!0,mouse:!0}]]}),Oe=i(()=>{const t=b.lang.rtl===!0?l.value:e.side;return[[V,ue,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function ee(){xe(v,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}m(v,t=>{t===!0?(Q=c.value,c.value===!0&&D(!1)):e.overlay===!1&&e.behavior!=="mobile"&&Q!==!1&&(c.value===!0?(q(0),O(0),ae()):I(!1))}),m(()=>e.side,(t,n)=>{o.instances[n]===L&&(o.instances[n]=void 0,o[n].space=!1,o[n].offset=0),o.instances[t]=L,o[t].size=z.value,o[t].space=w.value,o[t].offset=r.value}),m(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&ee()}),m(()=>e.behavior+e.breakpoint,ee),m(o.isContainer,t=>{c.value===!0&&a(t!==!0),t===!0&&ee()}),m(o.scrollbarWidth,()=>{q(c.value===!0?0:void 0)}),m(r,t=>{P("offset",t)}),m(w,t=>{g("onLayout",t),P("space",t)}),m(_,()=>{q()}),m(z,t=>{q(),le(e.miniToOverlay,t)}),m(()=>e.miniToOverlay,t=>{le(t,z.value)}),m(()=>b.lang.rtl,()=>{q()}),m(()=>e.mini,()=>{e.modelValue===!0&&(Pe(),o.animate())}),m(A,t=>{g("miniState",t)});function q(t){t===void 0?ce(()=>{t=c.value===!0?0:z.value,q(k.value*t)}):(o.isContainer.value===!0&&_.value===!0&&(v.value===!0||Math.abs(t)===z.value)&&(t+=k.value*o.scrollbarWidth.value),H.value=t)}function O(t){p.value=t}function te(t){const n=t===!0?"remove":o.isContainer.value!==!0?"add":"";n!==""&&document.body.classList[n]("q-body--drawer-toggle")}function Pe(){S!==null&&clearTimeout(S),h.proxy&&h.proxy.$el&&h.proxy.$el.classList.add("q-drawer--mini-animate"),R.value=!0,S=setTimeout(()=>{S=null,R.value=!1,h&&h.proxy&&h.proxy.$el&&h.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function $e(t){if(c.value!==!1)return;const n=z.value,y=$(t.distance.x,0,n);if(t.isFinal===!0){y>=Math.min(75,n)===!0?I():(o.animate(),O(0),q(k.value*n)),B.value=!1;return}q((b.lang.rtl===!0?_.value!==!0:_.value)?Math.max(n-y,0):Math.min(0,y-n)),O($(y/n,0,1)),t.isFirst===!0&&(B.value=!0)}function ue(t){if(c.value!==!0)return;const n=z.value,y=t.direction===e.side,J=(b.lang.rtl===!0?y!==!0:y)?$(t.distance.x,0,n):0;if(t.isFinal===!0){Math.abs(J)<Math.min(75,n)===!0?(o.animate(),O(1),q(0)):D(),B.value=!1;return}q(k.value*J),O($(1-J/n,0,1)),t.isFirst===!0&&(B.value=!0)}function ae(){a(!1),te(!0)}function P(t,n){o.update(e.side,t,n)}function xe(t,n){t.value!==n&&(t.value=n)}function le(t,n){P("size",t===!0?e.miniWidth:n)}return o.instances[e.side]=L,le(e.miniToOverlay,z.value),P("space",w.value),P("offset",r.value),e.showIfAbove===!0&&e.modelValue!==!0&&c.value===!0&&e["onUpdate:modelValue"]!==void 0&&g("update:modelValue",!0),Xe(()=>{g("onLayout",w.value),g("miniState",A.value),Q=e.showIfAbove===!0;const t=()=>{(c.value===!0?F:E)(!1,!0)};if(o.totalWidth.value!==0){ce(t);return}x=m(o.totalWidth,()=>{x(),x=void 0,c.value===!1&&e.showIfAbove===!0&&v.value===!1?I(!1):t()})}),ge(()=>{x!==void 0&&x(),S!==null&&(clearTimeout(S),S=null),c.value===!0&&ae(),o.instances[e.side]===L&&(o.instances[e.side]=void 0,P("size",0),P("offset",0),P("space",!1))}),()=>{const t=[];v.value===!0&&(e.noSwipeOpen===!1&&t.push(ne(f("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Me.value)),t.push(ve("div",{ref:"backdrop",class:G.value,style:Z.value,"aria-hidden":"true",onClick:D},void 0,"backdrop",e.noSwipeBackdrop!==!0&&c.value===!0,()=>Oe.value)));const n=A.value===!0&&T.mini!==void 0,y=[f("div",{...C,key:""+n,class:[Te.value,C.class]},n===!0?T.mini():Se(T.default))];return e.elevated===!0&&c.value===!0&&y.push(f("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ve("aside",{ref:"content",class:Ce.value,style:ke.value},y,"contentclose",e.noSwipeClose!==!0&&v.value===!0,()=>Be.value)),f("div",{class:"q-drawer-container"},t)}}});export{at as Q,lt as a,ot as b,rt as c};
