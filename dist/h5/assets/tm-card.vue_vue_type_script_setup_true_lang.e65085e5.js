var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{d as n,c as i,o as d,a as p,w as u,b as f,M as c,u as b,i as m}from"./index-6b165856.js";import{c as y,f as h,g}from"./tm-app.d6cf2f93.js";import{t as w}from"./tm-sheet.3639b36a.js";import{t as _}from"./tm-text.6c910eb0.js";import{_ as x}from"./tm-divider.vue_vue_type_script_setup_true_lang.cbbfcb4c.js";const j=n({__name:"tm-card",props:(O=((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&s(e,r,t[r]);return e})({},y),S={shadow:{type:[Number],default:2},round:{type:[Number],default:6},border:{type:[Number],default:0},margin:{type:Array,default:()=>[32,0,32,24]},padding:{type:Array,default:()=>[24,0]},transprent:{type:[Boolean],default:!1},color:{type:String,default:"white"},width:{type:[Number],default:0},height:{type:[Number],default:0},title:{type:[String],default:""},status:{type:[String],default:""},statusColor:{type:[String],default:"primary"},content:{type:[String],default:""}},t(O,r(S))),setup(e){const t=e,r=i((()=>h(t))),a=i((()=>g(t)));return(e,l)=>{const o=m;return d(),p(w,{color:t.color,_class:[b(a),"flex-col"],_style:[b(r)],followTheme:t.followTheme,dark:t.dark,round:t.round,shadow:t.shadow,outlined:t.outlined,border:t.border,borderStyle:t.borderStyle,borderDirection:t.borderDirection,text:t.text,transprent:t.transprent,linear:t.linear,linearDeep:t.linearDeep,width:t.width,height:t.height,margin:t.margin,padding:t.padding},{default:u((()=>[f(o,{class:"flex-row flex flex-between pt-24"},{default:u((()=>[c(e.$slots,"title",{},(()=>[f(_,{"font-size":28,_class:"text-weight-b",label:t.title},null,8,["label"])])),c(e.$slots,"status",{},(()=>[f(_,{followTheme:!1,color:t.statusColor,"font-size":26,label:t.status},null,8,["color","label"])]))])),_:3}),f(x),f(o,{class:"pb-24 flex wrap"},{default:u((()=>[c(e.$slots,"content",{},(()=>[f(_,{"font-size":26,_class:"wrap",label:t.content},null,8,["label"])]))])),_:3}),f(o,{class:"flex pb-16"},{default:u((()=>[c(e.$slots,"action")])),_:3})])),_:3},8,["color","_class","_style","followTheme","dark","round","shadow","outlined","border","borderStyle","borderDirection","text","transprent","linear","linearDeep","width","height","margin","padding"])}}});var O,S;export{j as _};