import{a4 as u,j as i,k as d,d as r,Y as l,l as a,ag as _,b2 as m,ae as n,X as v,o as g,aX as y,a2 as f,a3 as p,aY as h,F as C,aZ as x,a_ as S}from"./index.83f5cac3.js";const w={class:"eventCard"},k={class:"row"},b={class:"col-6",style:{margin:"auto"}},q={class:"col-6 flex items-center"},B={class:"eventCardtitle q-my-md q-mb-xs"},E={class:"q-my-md q-mb-xs"},V={class:"eventCardP"},$={class:"eventCardP"},N={__name:"EventCard",props:{_id:{type:String,default:""},title:{type:String,default:""},price:{type:Number,default:0},daysfrom:{type:String,default:""},daysto:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:""},sell:{type:Boolean,default:!1},category:{type:String,default:""}},setup(t){return(c,o)=>{const s=u("router-link");return i(),d("div",w,[r(s,{class:"notextUnderline",to:"/event/"+t._id},{default:l(()=>[a("div",k,[a("div",b,[r(_,{class:"eventCardImg rounded-borders",src:t.image},null,8,["src"])]),a("div",q,[r(m,{class:"eventCardContent"},{default:l(()=>[a("div",B,n(t.title),1),a("div",E,[a("div",V,"# "+n(t.category)+" || \u8CBB\u7528 $"+n(t.price),1),a("div",$,"\u6D3B\u52D5\u671F\u9593\uFF1A"+n(t.daysfrom)+" - "+n(t.daysto),1)])]),_:1})])])]),_:1},8,["to"])])}}},P={id:"front-events",align:"center"},F={class:"row"},Q={__name:"EventsView",setup(t){const c=v([]);return g(()=>{(async()=>{var o,s;try{const{data:e}=await y.get("/events");c.push(...e.result),await f(),p.init()}catch(e){h.fire({icon:"error",title:"\u5931\u6557",text:((s=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:s.message)||"\u767C\u751F\u932F\u8AA4"})}})()}),(o,s)=>(i(),d("div",P,[a("div",F,[(i(!0),d(C,null,x(c,e=>(i(),d("div",{class:"cardinEventView q-pa-lg col-6",style:{"margin-bottom":"30px"},key:e._id},[r(N,S({class:"eventCard"},e,{"data-aos":"fade-up","data-aos-duration":"1500"}),null,16)]))),128))])]))}};export{Q as default};
