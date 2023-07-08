import{d as e,H as t,J as a,c as o,r as l,L as n,m as s,o as r,a as u,w as i,M as d,b as f,u as p,j as c,n as h,g as m,i as w,_ as x}from"./index-6b165856.js";import{t as y}from"./tm-app.d6cf2f93.js";import{t as v}from"./tm-sheet.3639b36a.js";import{t as _}from"./tm-text.6c910eb0.js";import{t as b}from"./tm-button.80fc9b3b.js";import{T as g,E as M,u as j}from"./tween.min.db001a5a.js";import"./tm-icon.65b53dc0.js";const N=x(e({__name:"tm-fly-view",props:{duration:{type:Number,default:600},width:{type:Number,default:100},height:{type:Number,default:100},x:{type:Number,default:0},y:{type:Number,default:0},zIndex:{type:Number,default:100}},setup(e,{expose:x}){var y,v;const _=e,b=null!=(v=null==(y=m())?void 0:y.proxy)?v:null;t();const N=a({x:0,y:0});let $=0;const V=o((()=>_.x)),I=o((()=>_.y));let z=0,H=0,k=0,q=0,A=0,B=0,C=l(!1),E=null;function F(e){b?uni.$tm.u.queryDom(b,"#flyViewBody").then((t=>{console.log(e),q=t.top,A=t.left,k=t.width,B=t.height,z=e.touches[0].clientX,H=e.touches[0].clientY,function(){var e;let t=Math.abs(I.value-q-B);Math.abs(V.value-A-k),E&&(E.stop(),N.x=0,N.y=0);C.value=!0,E=new g({progress:0}).easing(M.Linear.None).to({progress:1},null!=(e=null==_?void 0:_.duration)?e:0).onUpdate((e=>{let a=t*e.progress,o=z,l=H,n=z,s=H,r=0,u=0,i=V.value-A,d=t;z<V.value?(o=z,l=0,n=V.value,s=0,r=k/2):(o=-k/2,l=0,n=-z+k,s=0,r=-k/2);const f=function(e,t,a,o,l,n,s,r,u){let i=0,d=1;for(;d-i>1e-6;){const e=(i+d)/2;Math.pow(1-e,3)*t+3*Math.pow(1-e,2)*e*o+3*(1-e)*Math.pow(e,2)*n+Math.pow(e,3)*r<u?i=e:d=e}return Math.pow(1-d,3)*e+3*Math.pow(1-d,2)*d*a+3*(1-d)*Math.pow(d,2)*l+Math.pow(d,3)*s}(r,u,o,l,n,s,i,d,a);N.x=f,N.y=a})).onStart((e=>{})).onComplete((e=>{C.value=!1})).delay(0).start()}()})).catch((e=>{console.error(e)})):console.error("错误：没有获取到元素实例。")}return n((()=>{uni.$tm.u.cancelAnimationFrame($)})),s((()=>{!function(){function e(){$=uni.$tm.u.requestAnimationFrame(e),j()}e()}()})),x({}),(e,t)=>{const a=w;return r(),u(a,{onClick:F,id:"flyViewBody",class:""},{default:i((()=>[d(e.$slots,"default",{},void 0,!0),f(a,{id:"flyView",ref:"flyView",class:"flex flex-row flex-row-center-center",eventPenetrationEnabled:!0,style:h({width:_.width+"rpx",height:_.height+"rpx",transform:`translate(${N.x}px,${N.y}px)`,zIndex:_.zIndex,position:"fixed"})},{default:i((()=>[p(C)?(r(),u(a,{key:0},{default:i((()=>[d(e.$slots,"content",{},void 0,!0)])),_:3})):c("v-if",!0)])),_:3},8,["style"])])),_:3})}}}),[["__scopeId","data-v-fdc7a081"]]),$=e({__name:"flyView",setup(e){const a=t(),o=l(60),n=l(a.windowHeight-60),s=l(a.windowWidth-85),d=l(a.windowHeight-60);return(e,t)=>{const a=w;return r(),u(y,null,{default:i((()=>[f(v,null,{default:i((()=>[f(_,{"font-size":26,label:"一个抛物线组件，从触发位置，把目标元素以抛物线的效果抛至目标点位，主要场景交互有：购物车添加商品，收藏夹等 一些交互效果的元素"})])),_:1}),f(a,{class:"flex flex-row flex-row-center-between px-24"},{default:i((()=>[f(a),f(a,{class:"pr-50"},{default:i((()=>[f(N,{width:150,height:150,x:o.value,y:n.value},{content:i((()=>[f(b,{round:24,color:"red",width:50,height:50})])),default:i((()=>[f(b,{label:"向左下抛"})])),_:1},8,["x","y"])])),_:1})])),_:1}),f(a,{class:"flex flex-row flex-row-center-between pl-50"},{default:i((()=>[f(N,{width:150,x:s.value,y:d.value},{content:i((()=>[f(b,{round:24,width:50,height:50})])),default:i((()=>[f(b,{label:"向右下抛"})])),_:1},8,["x","y"]),f(a)])),_:1})])),_:1})}}});export{$ as default};
