var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;import{d as u,c as s,r as o,Q as d,m as c,L as p,o as f,a as v,w as m,n as y,N as h,u as g,M as b,j as x,g as w,k as O,i as S,_ as j}from"./index-6b165856.js";import{c as N,f as P,g as _}from"./tm-app.d6cf2f93.js";const k=u({__name:"tm-translate",props:(B=((e,t)=>{for(var a in t||(t={}))r.call(t,a)&&n(e,a,t[a]);if(i)for(var a of i(t))l.call(t,a)&&n(e,a,t[a]);return e})({},N),T={duration:{type:Number,default:300},delay:{type:Number,default:0},name:{type:String,default:"fade"},autoPlay:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},height:{type:[Number,String],default:0},width:{type:[Number,String],default:0},reverse:{type:[Boolean,String],default:!1},initByWechat:{type:Boolean,default:!1}},t(B,a(T))),emits:["start","end","click"],setup(e,{expose:t,emit:a}){var i;const r=e;function l(e){a("click",e)}null==(i=w())||i.proxy;const n=s((()=>P(r))),u=s((()=>_(r))),j=s((()=>r.height&&Number(r.height)?String(r.height).indexOf("px")>-1||String(r.height).indexOf("rpx")>-1?String(r.height):String(r.height)+"rpx":0)),N=s((()=>r.width?String(r.width).indexOf("px")>-1||String(r.width).indexOf("rpx")>-1?r.width:r.width+"rpx":0)),k=s((()=>r.name||"fade")),B=o(r.duration),T=s((()=>r.reverse)),I=s((()=>T.value?"-reverse":"")),$=o(k.value+I.value),D=o(0),E=o(Number(uni.$tm.u.getUid(3))),W=o(!1);function z(){O((()=>{W.value=!0,1!=r.autoPlay||r.disabled||O((()=>A()))}))}function A(){1!=r.disabled&&(D.value=0,clearTimeout(E.value),E.value=setTimeout((()=>{T.value?$.value=k.value:$.value=k.value+"-reverse",E.value=setTimeout((()=>{a("end")}),r.duration)}),20))}function C(){1!=r.disabled&&(clearTimeout(E.value),D.value=0)}function F(){C(),D.value=0}return o(null),d([()=>r.initByWechat,()=>r.name],(()=>{F()})),d([()=>r.name],(()=>{$.value=k.value+I.value})),t({init:z,play:A,stop:C,reset:F}),c((()=>z())),p((()=>{clearTimeout(E.value),D.value=0})),(e,t)=>{const a=S;return f(),v(a,{ref:"bodywk",onClick:l,class:h([g(u),"overflow"]),style:y([g(j)?{height:g(j)}:"",g(N)?{width:g(N)}:"",g(n)])},{default:m((()=>[W.value?(f(),v(a,{key:0,ref:"nvueElAni",style:y({transitionDuration:`${B.value}ms`,transitionTimingFunction:"cubic-bezier(.04,.78,.42,1)"}),class:h(["flex-col flex ",$.value,g(u)])},{default:m((()=>[b(e.$slots,"default",{},void 0,!0)])),_:3},8,["style","class"])):x("v-if",!0)])),_:3},8,["class","style"])}}});var B,T;const I=j(k,[["__scopeId","data-v-0acc29da"]]);export{I as t};
