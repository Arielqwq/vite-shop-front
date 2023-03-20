import{v as L,i as B,O as $,P as M,an as O,c,h as d,A as K,g as R,ar as j,w as P,M as N,o as U,K as V,as as D,at as I,au as _,av as k,r as m,R as G,aw as C,W as x,a as J,z as X}from"./index.22e8eb80.js";import{Q as E}from"./QResizeObserver.e1670e64.js";var ne=L({name:"QPageContainer",setup(e,{slots:p}){const{proxy:{$q:o}}=R(),n=B(M,$);if(n===$)return console.error("QPageContainer needs to be child of QLayout"),$;O(j,!0);const a=c(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>d("div",{class:"q-page-container",style:a.value},K(p.default))}});const{passive:F}=I,Y=["both","horizontal","vertical"];var Z=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Y.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:p}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,a,r;P(()=>e.scrollTarget,()=>{f(),y()});function u(){n!==null&&n();const g=Math.max(0,_(a)),h=k(a),s={top:g-o.position.top,left:h-o.position.left};if(e.axis==="vertical"&&s.top===0||e.axis==="horizontal"&&s.left===0)return;const w=Math.abs(s.top)>=Math.abs(s.left)?s.top<0?"up":"down":s.left<0?"left":"right";o.position={top:g,left:h},o.directionChanged=o.direction!==w,o.delta=s,o.directionChanged===!0&&(o.direction=w,o.inflectionPoint=o.position),p("scroll",{...o})}function y(){a=N(r,e.scrollTarget),a.addEventListener("scroll",l,F),l(!0)}function f(){a!==void 0&&(a.removeEventListener("scroll",l,F),a=void 0)}function l(g){if(g===!0||e.debounce===0||e.debounce==="0")u();else if(n===null){const[h,s]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];n=()=>{s(h),n=null}}}const{proxy:b}=R();return P(()=>b.$q.lang.rtl,u),U(()=>{r=b.$el.parentNode,y()}),V(()=>{n!==null&&n(),f()}),Object.assign(b,{trigger:l,getPosition:()=>o}),D}}),oe=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:p,emit:o}){const{proxy:{$q:n}}=R(),a=m(null),r=m(n.screen.height),u=m(e.container===!0?0:n.screen.width),y=m({position:0,direction:"down",inflectionPoint:0}),f=m(0),l=m(G.value===!0?0:C()),b=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=c(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),h=c(()=>l.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${l.value}px`}:null),s=c(()=>l.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${l.value}px`,width:`calc(100% + ${l.value}px)`}:null);function w(t){if(e.container===!0||document.qScrollPrevented!==!0){const i={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};y.value=i,e.onScroll!==void 0&&o("scroll",i)}}function W(t){const{height:i,width:v}=t;let S=!1;r.value!==i&&(S=!0,r.value=i,e.onScrollHeight!==void 0&&o("scrollHeight",i),q()),u.value!==v&&(S=!0,u.value=v),S===!0&&e.onResize!==void 0&&o("resize",t)}function A({height:t}){f.value!==t&&(f.value=t,q())}function q(){if(e.container===!0){const t=r.value>f.value?C():0;l.value!==t&&(l.value=t)}}let z=null;const Q={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:a,height:r,containerHeight:f,scrollbarWidth:l,totalWidth:c(()=>u.value+l.value),rows:c(()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}}),header:x({size:0,offset:0,space:!1}),right:x({size:300,offset:0,space:!1}),footer:x({size:0,offset:0,space:!1}),left:x({size:300,offset:0,space:!1}),scroll:y,animate(){z!==null?clearTimeout(z):document.body.classList.add("q-body--layout-animate"),z=setTimeout(()=>{z=null,document.body.classList.remove("q-body--layout-animate")},155)},update(t,i,v){Q[t][i]=v}};if(O(M,Q),C()>0){let v=function(){t=null,i.classList.remove("hide-scrollbar")},S=function(){if(t===null){if(i.scrollHeight>n.screen.height)return;i.classList.add("hide-scrollbar")}else clearTimeout(t);t=setTimeout(v,300)},T=function(H){t!==null&&H==="remove"&&(clearTimeout(t),v()),window[`${H}EventListener`]("resize",S)},t=null;const i=document.body;P(()=>e.container!==!0?"add":"remove",T),e.container!==!0&&T("add"),J(()=>{T("remove")})}return()=>{const t=X(p.default,[d(Z,{onScroll:w}),d(E,{onResize:W})]),i=d("div",{class:b.value,style:g.value,ref:e.container===!0?void 0:a,tabindex:-1},t);return e.container===!0?d("div",{class:"q-layout-container overflow-hidden",ref:a},[d(E,{onResize:A}),d("div",{class:"absolute-full",style:h.value},[d("div",{class:"scroll",style:s.value},[i])])]):i}}});export{oe as Q,ne as a,Z as b};