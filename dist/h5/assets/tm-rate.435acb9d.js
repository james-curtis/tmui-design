var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(l,a,o)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[a]=o;import{d as s,c as n,r as c,Q as f,o as i,a as d,w as p,e as m,f as y,u as b,F as v,M as g,j as k,U as w,g as j,i as O,N as V,b as _,_ as h}from"./index-6b165856.js";import{t as N}from"./tm-icon.65b53dc0.js";import{c as S,u as x,d as B}from"./tm-app.d6cf2f93.js";import{t as P}from"./tm-text.6c910eb0.js";const z=s({__name:"tm-rate",props:(A=((e,l)=>{for(var a in l||(l={}))t.call(l,a)&&u(e,a,l[a]);if(o)for(var a of o(l))r.call(l,a)&&u(e,a,l[a]);return e})({},S),T={count:{type:Number,default:5},modelValue:{type:Number,default:0},defaultValue:{type:Number,default:0},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:"tmicon-collection-fill"},size:{type:Number,default:42},color:{type:[Array,String],default:"orange"},gutter:{type:Number,default:16},followTheme:{type:[Boolean,String],default:!0},dark:{type:[Boolean,String],default:!1},followDark:{type:[Boolean,String],default:!0},label:{type:String,default:""},showLabel:{type:Boolean,default:!1}},l(A,a(T))),emits:["click","change","update:modelValue"],setup(e,{emit:l}){var a;const o=e,t=x();null==(a=j())||a.proxy;let r=NaN;const u=n((()=>o.count)),s=c(o.defaultValue),h=n((()=>t.tmStore)),S=n((()=>B(o,h.value))),z=n((()=>o.followTheme&&h.value.color?h.value.color:"string"==typeof o.color?o.color:Array.isArray(o.color)?o.color[s.value-1]?o.color[s.value-1]:o.color[o.color.length-1]:"grey-2")),A=c(!1),T=n((()=>""!=o.label?o.label:s.value+".0"));return f((()=>o.modelValue),(()=>{let e=o.modelValue>=u.value?u.value:o.modelValue;s.value=e<=0?0:e})),(a,t)=>{const n=O;return i(),d(n,{class:"flex flex-row flex-row-center-start",onClick:t[0]||(t[0]=w((()=>{}),["stop"]))},{default:p((()=>[(i(!0),m(v,null,y(b(u),((a,t)=>(i(),d(n,{key:a,class:V([`pr-${e.gutter}`,o.disabled?"opacity-6":""])},{default:p((()=>[_(n,{class:V([A.value&&t==s.value-1?"rateOn":""])},{default:p((()=>[_(N,{ref_for:!0,ref:"nvueElAni","follow-dark":!1,color:a<=s.value?b(z):"grey-2",onClick:e=>function(e){o.disabled||(o.readonly?l("click",e-1):(s.value=e,l("change",s.value),l("update:modelValue",s.value),l("click",e-1),A.value=!1,clearTimeout(r),r=setTimeout((()=>{A.value=!0}),50)))}(a),"font-size":o.size,name:o.icon},null,8,["color","onClick","font-size","name"])])),_:2},1032,["class"])])),_:2},1032,["class"])))),128)),g(a.$slots,"default",{},(()=>[e.showLabel?(i(),d(P,{key:0,dark:b(S),color:b(z),label:b(T)},null,8,["dark","color","label"])):k("v-if",!0)]),!0)])),_:3})}}});var A,T;const C=h(z,[["__scopeId","data-v-feff537f"]]);export{C as t};
