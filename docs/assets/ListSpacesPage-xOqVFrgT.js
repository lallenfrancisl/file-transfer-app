import{_ as b}from"./AppDivider-7zZP8uaf.js";import{A as w}from"./AppDialog-Myra10kH.js";import{T as C,_ as $}from"./BaseLayout.vue_vue_type_script_setup_true_lang-R_cnJ5lu.js";import{S as y}from"./SpaceIcon-TFmpiISG.js";import{d as _,f as g,o as i,c as x,w as l,a as e,b as s,e as S,_ as k,g as v,h as D,n as u,i as M,t as m,u as j}from"./index-JDe9akVZ.js";import{P as A}from"./PlusIcon-T9qehF5S.js";const B={class:"px-x4 py-x3"},V={class:"px-x4 py-x3"},I=_({__name:"CreateSpaceDialog",props:{open:{type:Boolean}},emits:["close","create","update:open"],setup(d,{emit:a}){const o=a;function c(n){o("update:open",n),n||o("close")}const t=g("");function p(){o("close"),o("create",t.value)}return(n,r)=>(i(),x(w,{open:n.open,title:"create space",icon:y,description:"Create a custom space to start sharing files to any devices connected on the internet","onUpdate:open":c,onClose:r[1]||(r[1]=h=>o("close"))},{default:l(()=>[e("div",B,[s(C,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=h=>t.value=h),label:"Space name",placeholder:"Space name","hide-label":"","full-width":""},null,8,["modelValue"])]),e("div",V,[s(b,{"full-width":"",onClick:p},{default:l(()=>[S(" create space ")]),_:1})])]),_:1},8,["open"]))}}),N={},P={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},T=e("g",null,[e("path",{d:"M12 19.5H12.01M22.8064 8.70076C19.9595 6.09199 16.1656 4.5 11.9999 4.5C7.83414 4.5 4.04023 6.09199 1.19336 8.70076M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C14.7859 9.5 17.3299 10.5357 19.268 12.243M15.6983 15.7751C14.6792 14.9763 13.3952 14.5 11.9999 14.5C10.5835 14.5 9.28172 14.9908 8.25537 15.8116",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),z=[T];function E(d,a){return i(),v("svg",P,z)}const F=k(N,[["render",E]]),H={class:"flex items-center justify-between font-space-grotesk"},U={class:"flex items-center"},L={class:"ml-x2 font-bold capitalize text-primary"},R={class:"mt-x2 text-paragraph-x-small text-secondary"},f=_({__name:"SpaceCard",props:{state:{default:"base"},name:{default:"---"},type:{default:"space"},createdAt:{},count:{default:0}},setup(d){const a=d,o={local:F,space:y},c=D(()=>a.createdAt?`${a.createdAt.getDate()}/${a.createdAt.getMonth()+1}/${a.createdAt.getFullYear()}`:"---");return(t,p)=>(i(),v("button",{class:u(["w-full rounded-medium border p-x4 text-left",[t.state==="active"?"border-brand shadow-brand-focus-ring":"border-primary"]])},[e("header",H,[e("section",U,[(i(),x(M(o[t.type]),{class:u(["h-6 w-auto",[t.state==="active"?"text-surface-brand":"text-surface-tertiary"]])},null,8,["class"])),e("h3",L,m(t.name),1)]),e("section",{class:u(["flex h-6 w-6 items-center justify-center rounded-full border text-paragraph-x-small font-bold",[t.state==="active"?"border-brand bg-surface-brand bg-opacity-35 text-brand-purple":"border-primary bg-surface-secondary text-placeholder"]])},m(t.count),3)]),e("p",R," Space created on "+m(c.value),1)],2))}}),W=e("div",{class:"mb-x3"},[e("h1",{class:"font-space-grotesk text-heading-medium font-bold text-primary"}," Hey, Shadow! 👋 "),e("p",{class:"mt-x2 text-sm text-[#CBD5E1]"}," Share files by joining or creating a room ")],-1),Y={class:"flex flex-grow flex-col justify-between"},q=e("h2",{class:"py-x3 text-overline uppercase text-placeholder"}," your spaces ",-1),G={class:"mt-x3 flex flex-col gap-x6"},J={class:"flex justify-center"},K={class:"flex flex-col items-center justify-center"},ae=_({__name:"ListSpacesPage",setup(d){const a=g("listing");function o(){a.value="create"}function c(){a.value="listing"}const t=j();function p(n){t.push({name:"space",params:{name:n}})}return(n,r)=>(i(),x($,null,{header:l(()=>[W]),body:l(()=>[e("div",Y,[e("div",null,[q,e("div",G,[s(f,{type:"local","created-at":new Date,name:"local network space"},null,8,["created-at"]),s(f,{state:"active",name:"Milky way galaxy","created-at":new Date,count:14},null,8,["created-at"]),s(f,{state:"active",name:"andromeda","created-at":new Date,count:69},null,8,["created-at"])])]),e("div",J,[e("div",K,[s(b,{id:"create-space-btn",variant:"rounded",label:"create space",onClick:o},{default:l(()=>[s(A,{class:"h-auto w-8 text-white"})]),_:1})])])]),s(I,{open:a.value==="create",onClose:c,onCreate:p},null,8,["open"])]),_:1}))}});export{ae as default};
