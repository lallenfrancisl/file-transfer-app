import{t as S,Q as D,o as M,K as B,n as j,x as L,k as A,T as V,_ as w,a as I}from"./BaseLayout.vue_vue_type_script_setup_true_lang-7b4a7126.js";import{_ as m,o as c,f as x,a as e,d as h,c as f,w as n,b as s,u as d,g as C,h as z,e as b,t as _,i as N,j as $,k as E,n as g,l as H}from"./index-62a78f7c.js";import{S as k}from"./SpaceIcon-57d5df8d.js";import"./AppDivider-636528d6.js";const T={},U={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},F=e("g",{id:"x"},[e("path",{d:"M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",fill:"currentColor"})],-1),K=[F];function P(l,a){return c(),x("svg",U,K)}const Q=m(T,[["render",P]]),R={class:"px-x4 py-x3"},W={class:"flex items-center justify-between"},X={class:"flex items-center"},Y=h({__name:"AppDialog",props:{open:{type:Boolean},title:{},description:{},icon:{}},emits:["update:open","close"],setup(l,{emit:a}){const o=a;function i(t){o("update:open",t),t||o("close")}return(t,p)=>(c(),f(d(A),{open:t.open,"onUpdate:open":i},{default:n(()=>[s(d(L),null,{default:n(()=>[s(d(S),{class:"overlay"}),s(d(D),{as:"article",class:"content rounded-medium bg-surface-primary text-primary py-x3 border-primary border"},{default:n(()=>[e("header",R,[e("div",W,[e("div",X,[t.icon?(c(),f(C(t.icon),{key:0,class:"text-surface-brand h-6 w-auto"})):z("",!0),s(d(M),{class:"text-heading-small font-space-grotesk ml-2 font-bold capitalize"},{default:n(()=>[b(_(t.title),1)]),_:1})]),s(d(B),{class:"flex items-center",type:"button"},{default:n(()=>[s(Q,{class:"text-surface-tertiary h-6 w-auto"})]),_:1})]),s(d(j),{class:"mt-x2 text-paragraph-small text-secondary"},{default:n(()=>[b(_(t.description),1)]),_:1})]),e("section",null,[N(t.$slots,"default",{},void 0,!0)])]),_:3})]),_:3})]),_:3},8,["open"]))}});const Z=m(Y,[["__scopeId","data-v-2b16aac0"]]),q={class:"px-x4 py-x3"},G={class:"px-x4 py-x3"},J=h({__name:"CreateSpaceDialog",props:{open:{type:Boolean}},emits:["close","create","update:open"],setup(l,{emit:a}){const o=a;function i(r){o("update:open",r),r||o("close")}const t=$("");function p(){o("close"),o("create",t.value)}return(r,u)=>(c(),f(Z,{open:r.open,title:"create space",icon:k,description:"Create a custom space to start sharing files to any devices connected on the internet","onUpdate:open":i,onClose:u[1]||(u[1]=v=>o("close"))},{default:n(()=>[e("div",q,[s(V,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=v=>t.value=v),label:"Space name",placeholder:"Space name","hide-label":"","full-width":""},null,8,["modelValue"])]),e("div",G,[s(w,{"full-width":"",onClick:p},{default:n(()=>[b(" create space ")]),_:1})])]),_:1},8,["open"]))}}),O={},ee={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},te=e("g",null,[e("path",{d:"M12 19.5H12.01M22.8064 8.70076C19.9595 6.09199 16.1656 4.5 11.9999 4.5C7.83414 4.5 4.04023 6.09199 1.19336 8.70076M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C14.7859 9.5 17.3299 10.5357 19.268 12.243M15.6983 15.7751C14.6792 14.9763 13.3952 14.5 11.9999 14.5C10.5835 14.5 9.28172 14.9908 8.25537 15.8116",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ae=[te];function se(l,a){return c(),x("svg",ee,ae)}const oe=m(O,[["render",se]]),ne={class:"font-space-grotesk flex items-center justify-between"},ce={class:"flex items-center"},re={class:"ml-x2 text-primary font-bold capitalize"},le={class:"text-paragraph-x-small mt-x2 text-secondary"},y=h({__name:"SpaceCard",props:{state:{default:"base"},name:{default:"---"},type:{default:"space"},createdAt:{},count:{default:0}},setup(l){const a=l,o={local:oe,space:k},i=E(()=>a.createdAt?`${a.createdAt.getDate()}/${a.createdAt.getMonth()+1}/${a.createdAt.getFullYear()}`:"---");return(t,p)=>(c(),x("button",{class:g(["rounded-medium p-x4 w-full text-left border",[t.state==="active"?"shadow-brand-focus-ring border-brand":"border-primary"]])},[e("header",ne,[e("section",ce,[(c(),f(C(o[t.type]),{class:g(["w-auto h-6",[t.state==="active"?"text-surface-brand":"text-surface-tertiary"]])},null,8,["class"])),e("h3",re,_(t.name),1)]),e("section",{class:g(["text-paragraph-x-small flex items-center justify-center w-6 h-6 font-bold border rounded-full",[t.state==="active"?"border-brand text-brand-purple bg-opacity-35 bg-surface-brand":"text-placeholder bg-surface-secondary border-primary"]])},_(t.count),3)]),e("p",le," Space created on "+_(i.value),1)],2))}}),ie={},de={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pe=e("g",null,[e("path",{id:"Shape",d:"M12 5V19M5 12H19",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ue=[pe];function _e(l,a){return c(),x("svg",de,ue)}const fe=m(ie,[["render",_e]]),me=e("div",{class:"mb-x3"},[e("h1",{class:"font-space-grotesk text-heading-medium font-bold text-primary"}," Hey, Shadow! 👋 "),e("p",{class:"mt-x2 text-sm text-[#CBD5E1]"}," Share files by joining or creating a room ")],-1),xe={class:"flex flex-grow flex-col justify-between"},he=e("h2",{class:"py-x3 text-overline uppercase text-placeholder"}," your spaces ",-1),ge={class:"mt-x3 flex flex-col gap-x6"},ye={class:"flex justify-center"},be={class:"flex flex-col items-center justify-center"},ve=e("label",{for:"create-space-btn",class:"mt-2 text-xs capitalize text-[#CBD5E1]"}," create space ",-1),Se=h({__name:"ListSpacesPage",setup(l){const a=$("listing");function o(){a.value="create"}function i(){a.value="listing"}const t=H();function p(r){console.log("space: ",r),t.push({name:"space",params:{name:r}})}return(r,u)=>(c(),f(I,null,{header:n(()=>[me]),body:n(()=>[e("div",xe,[e("div",null,[he,e("div",ge,[s(y,{type:"local","created-at":new Date,name:"local network space"},null,8,["created-at"]),s(y,{state:"active",name:"Milky way galaxy","created-at":new Date,count:14},null,8,["created-at"]),s(y,{state:"active",name:"andromeda","created-at":new Date,count:69},null,8,["created-at"])])]),e("div",ye,[e("div",be,[s(w,{id:"create-space-btn",variant:"rounded",onClick:o},{default:n(()=>[s(fe,{class:"h-auto w-8 text-white"})]),_:1}),ve])])]),s(J,{open:a.value==="create",onClose:i,onCreate:p},null,8,["open"])]),_:1}))}});export{Se as default};
