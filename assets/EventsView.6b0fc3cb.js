import{X as m,j as i,k as d,d as l,P as c,a$ as u,l as a,a8 as _,a6 as n,O as v,aT as g,aV as f,F as y,aW as p,b1 as h,b2 as C}from"./index.118308e9.js";const S={class:"eventCard",align:"left"},x={class:"col-12 col-lg-5"},b={class:"col-12 col-lg-6"},w={class:"eventCardtitle q-my-md q-mb-xs"},k={class:"q-my-md q-mb-xs"},q={class:"eventCardP"},P={class:"eventCardP"},V={__name:"EventCard",props:{_id:{type:String,default:""},title:{type:String,default:""},price:{type:Number,default:0},daysfrom:{type:String,default:""},daysto:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(e){return(o,r)=>{const s=m("router-link");return i(),d("div",S,[l(s,{class:"notextUnderline",to:"/event/"+e._id},{default:c(()=>[l(u,{class:"row"},{default:c(()=>[a("div",x,[l(_,{class:"eventCardImg rounded-borders",src:e.image},null,8,["src"])]),a("div",b,[l(u,{class:"eventCardContent"},{default:c(()=>[a("div",w,n(e.title),1),a("div",k,[a("div",q,"# "+n(e.category)+" || \u8CBB\u7528 $"+n(e.price),1),a("div",P,"\u6D3B\u52D5\u671F\u9593\uFF1A"+n(e.daysfrom)+" - "+n(e.daysto),1)])]),_:1})])]),_:1})]),_:1},8,["to"])])}}},B={id:"front-events",align:"center"},$={__name:"EventsView",setup(e){const o=v([]);return(async()=>{var r,s;try{const{data:t}=await g.get("/events");o.push(...t.result)}catch(t){f.fire({icon:"error",title:"\u5931\u6557",text:((s=(r=t==null?void 0:t.response)==null?void 0:r.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(r,s)=>(i(),d("div",B,[a("div",null,[(i(!0),d(y,null,p(o,t=>(i(),d("div",{class:"cardinEventView q-pa-lg col-12",style:{width:"85%","margin-bottom":"30px"},key:t._id},[l(V,h(C(t)),null,16)]))),128))])]))}};export{$ as default};
