import{a2 as _,j as i,k as o,d,Y as l,l as s,ae as u,b2 as m,ac as n,X as v,aW as y,aY as g,F as f,aZ as p,a_ as h}from"./index.11f0d780.js";const C={class:"eventCard"},x={class:"row"},S={class:"col-6",style:{margin:"auto"}},w={class:"col-6 flex items-center"},b={class:"eventCardtitle q-my-md q-mb-xs"},k={class:"q-my-md q-mb-xs"},q={class:"eventCardP"},B={class:"eventCardP"},E={__name:"EventCard",props:{_id:{type:String,default:""},title:{type:String,default:""},price:{type:Number,default:0},daysfrom:{type:String,default:""},daysto:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(e){return(c,r)=>{const a=_("router-link");return i(),o("div",C,[d(a,{class:"notextUnderline",to:"/event/"+e._id},{default:l(()=>[s("div",x,[s("div",S,[d(u,{class:"eventCardImg rounded-borders",src:e.image},null,8,["src"])]),s("div",w,[d(m,{class:"eventCardContent"},{default:l(()=>[s("div",b,n(e.title),1),s("div",k,[s("div",q,"# "+n(e.category)+" || \u8CBB\u7528 $"+n(e.price),1),s("div",B,"\u6D3B\u52D5\u671F\u9593\uFF1A"+n(e.daysfrom)+" - "+n(e.daysto),1)])]),_:1})])])]),_:1},8,["to"])])}}},V={id:"front-events",align:"center"},$={class:"row"},P={__name:"EventsView",setup(e){const c=v([]);return(async()=>{var r,a;try{const{data:t}=await y.get("/events");c.push(...t.result)}catch(t){g.fire({icon:"error",title:"\u5931\u6557",text:((a=(r=t==null?void 0:t.response)==null?void 0:r.data)==null?void 0:a.message)||"\u767C\u751F\u932F\u8AA4"})}})(),(r,a)=>(i(),o("div",V,[s("div",$,[(i(!0),o(f,null,p(c,t=>(i(),o("div",{class:"cardinEventView q-pa-lg col-6",style:{"margin-bottom":"30px"},key:t._id},[d(E,h({class:"eventCard"},t),null,16)]))),128))])]))}};export{P as default};