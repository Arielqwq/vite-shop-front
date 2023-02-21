import{v as C,c,h as f,A as M,G as q,r as w,w as z,I as W,ac as A,i as _,J as B,g as Q,ab as N,ad as I,o as U,ae as j,af as K,H as D,M as L,a as G,z as J}from"./index.b07f1375.js";import{Q as O}from"./QResizeObserver.8eb855e9.js";import{g as k,a as X,b as Y,c as V}from"./use-prevent-scroll.a4d0c4ea.js";var le=C({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:m}){const a=c(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>f("div",{class:a.value,role:"toolbar"},M(m.default))}}),ae=C({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:m,emit:a}){const{proxy:{$q:n}}=Q(),o=_(B,q);if(o===q)return console.error("QHeader needs to be child of QLayout"),q;const r=w(parseInt(e.heightHint,10)),u=w(!0),b=c(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||n.platform.is.ios&&o.isContainer.value===!0),h=c(()=>{if(e.modelValue!==!0)return 0;if(b.value===!0)return u.value===!0?r.value:0;const t=r.value-o.scroll.value.position;return t>0?t:0}),s=c(()=>e.modelValue!==!0||b.value===!0&&u.value!==!0),S=c(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),y=c(()=>"q-header q-layout__section--marginal "+(b.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),p=c(()=>{const t=o.rows.value.top,v={};return t[0]==="l"&&o.left.space===!0&&(v[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),t[2]==="r"&&o.right.space===!0&&(v[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),v});function i(t,v){o.update("header",t,v)}function g(t,v){t.value!==v&&(t.value=v)}function H({height:t}){g(r,t),i("size",t)}function P(t){S.value===!0&&g(u,!0),a("focusin",t)}z(()=>e.modelValue,t=>{i("space",t),g(u,!0),o.animate()}),z(h,t=>{i("offset",t)}),z(()=>e.reveal,t=>{t===!1&&g(u,e.modelValue)}),z(u,t=>{o.animate(),a("reveal",t)}),z(o.scroll,t=>{e.reveal===!0&&g(u,t.direction==="up"||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)});const $={};return o.instances.header=$,e.modelValue===!0&&i("size",r.value),i("space",e.modelValue),i("offset",h.value),W(()=>{o.instances.header===$&&(o.instances.header=void 0,i("size",0),i("offset",0),i("space",!1))}),()=>{const t=A(m.default,[]);return e.elevated===!0&&t.push(f("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(f(O,{debounce:0,onResize:H})),f("header",{class:y.value,style:p.value,onFocusin:P},t)}}}),ie=C({name:"QPageContainer",setup(e,{slots:m}){const{proxy:{$q:a}}=Q(),n=_(B,q);if(n===q)return console.error("QPageContainer needs to be child of QLayout"),q;N(I,!0);const o=c(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${a.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${a.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>f("div",{class:"q-page-container",style:o.value},M(m.default))}});const{passive:E}=K,Z=["both","horizontal","vertical"];var ee=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Z.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:m}){const a={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,o,r;z(()=>e.scrollTarget,()=>{h(),b()});function u(){n!==null&&n();const y=Math.max(0,X(o)),p=Y(o),i={top:y-a.position.top,left:p-a.position.left};if(e.axis==="vertical"&&i.top===0||e.axis==="horizontal"&&i.left===0)return;const g=Math.abs(i.top)>=Math.abs(i.left)?i.top<0?"up":"down":i.left<0?"left":"right";a.position={top:y,left:p},a.directionChanged=a.direction!==g,a.delta=i,a.directionChanged===!0&&(a.direction=g,a.inflectionPoint=a.position),m("scroll",{...a})}function b(){o=k(r,e.scrollTarget),o.addEventListener("scroll",s,E),s(!0)}function h(){o!==void 0&&(o.removeEventListener("scroll",s,E),o=void 0)}function s(y){if(y===!0||e.debounce===0||e.debounce==="0")u();else if(n===null){const[p,i]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];n=()=>{i(p),n=null}}}const{proxy:S}=Q();return z(()=>S.$q.lang.rtl,u),U(()=>{r=S.$el.parentNode,b()}),W(()=>{n!==null&&n(),h()}),Object.assign(S,{trigger:s,getPosition:()=>a}),j}}),re=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:m,emit:a}){const{proxy:{$q:n}}=Q(),o=w(null),r=w(n.screen.height),u=w(e.container===!0?0:n.screen.width),b=w({position:0,direction:"down",inflectionPoint:0}),h=w(0),s=w(D.value===!0?0:V()),S=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=c(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),p=c(()=>s.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),i=c(()=>s.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function g(l){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};b.value=d,e.onScroll!==void 0&&a("scroll",d)}}function H(l){const{height:d,width:x}=l;let T=!1;r.value!==d&&(T=!0,r.value=d,e.onScrollHeight!==void 0&&a("scrollHeight",d),$()),u.value!==x&&(T=!0,u.value=x),T===!0&&e.onResize!==void 0&&a("resize",l)}function P({height:l}){h.value!==l&&(h.value=l,$())}function $(){if(e.container===!0){const l=r.value>h.value?V():0;s.value!==l&&(s.value=l)}}let t=null;const v={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:o,height:r,containerHeight:h,scrollbarWidth:s,totalWidth:c(()=>u.value+s.value),rows:c(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:L({size:0,offset:0,space:!1}),right:L({size:300,offset:0,space:!1}),footer:L({size:0,offset:0,space:!1}),left:L({size:300,offset:0,space:!1}),scroll:b,animate(){t!==null?clearTimeout(t):document.body.classList.add("q-body--layout-animate"),t=setTimeout(()=>{t=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,d,x){v[l][d]=x}};if(N(B,v),V()>0){let x=function(){l=null,d.classList.remove("hide-scrollbar")},T=function(){if(l===null){if(d.scrollHeight>n.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(x,300)},R=function(F){l!==null&&F==="remove"&&(clearTimeout(l),x()),window[`${F}EventListener`]("resize",T)},l=null;const d=document.body;z(()=>e.container!==!0?"add":"remove",R),e.container!==!0&&R("add"),G(()=>{R("remove")})}return()=>{const l=J(m.default,[f(ee,{onScroll:g}),f(O,{onResize:H})]),d=f("div",{class:S.value,style:y.value,ref:e.container===!0?void 0:o,tabindex:-1},l);return e.container===!0?f("div",{class:"q-layout-container overflow-hidden",ref:o},[f(O,{onResize:P}),f("div",{class:"absolute-full",style:p.value},[f("div",{class:"scroll",style:i.value},[d])])]):d}}});export{re as Q,ae as a,le as b,ie as c,ee as d};
