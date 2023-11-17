import{t as $,Q as C,o as k,K as S,n as D,x as M,k as B,T as j,_ as y,a as L}from"./BaseLayout.vue_vue_type_script_setup_true_lang-671cff68.js";import{_,o as c,f,a as e,d as m,c as u,w as o,b as s,u as d,g as b,h as A,e as g,t as p,i as I,j as V,n as x,k as z}from"./index-dafbeb56.js";import{S as w}from"./SpaceIcon-58b78252.js";import"./AppDivider-02ea5721.js";const N={},E={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H=e("g",{id:"x"},[e("path",{d:"M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",fill:"currentColor"})],-1),T=[H];function F(l,a){return c(),f("svg",E,T)}const K=_(N,[["render",F]]),P={class:"px-x4 py-x3"},Q={class:"flex items-center justify-between"},U={class:"flex items-center"},W=m({__name:"AppDialog",props:{open:{type:Boolean},title:{},description:{},icon:{}},emits:["update:open","close"],setup(l,{emit:a}){const n=a;function r(t){n("update:open",t),t||n("close")}return(t,i)=>(c(),u(d(B),{open:t.open,"onUpdate:open":r},{default:o(()=>[s(d(M),null,{default:o(()=>[s(d($),{class:"overlay"}),s(d(C),{as:"article",class:"content rounded-medium bg-surface-primary text-primary py-x3 border-primary border"},{default:o(()=>[e("header",P,[e("div",Q,[e("div",U,[t.icon?(c(),u(b(t.icon),{key:0,class:"text-surface-brand h-6 w-auto"})):A("",!0),s(d(k),{class:"text-heading-small font-space-grotesk ml-2 font-bold capitalize"},{default:o(()=>[g(p(t.title),1)]),_:1})]),s(d(S),{class:"flex items-center",type:"button"},{default:o(()=>[s(K,{class:"text-surface-tertiary h-6 w-auto"})]),_:1})]),s(d(D),{class:"mt-x2 text-paragraph-small text-secondary"},{default:o(()=>[g(p(t.description),1)]),_:1})]),e("section",null,[I(t.$slots,"default",{},void 0,!0)])]),_:3})]),_:3})]),_:3},8,["open"]))}});const X=_(W,[["__scopeId","data-v-2b16aac0"]]),Y={class:"py-x3 px-x4"},Z={class:"px-x4 py-x3"},q=m({__name:"CreateSpaceDialog",props:{open:{type:Boolean}},emits:["close","update:open"],setup(l,{emit:a}){const n=a;function r(t){n("update:open",t),t||n("close")}return(t,i)=>(c(),u(X,{open:t.open,title:"create space",icon:w,description:"Create a custom space to start sharing files to any devices connected on the internet","onUpdate:open":r,onClose:i[1]||(i[1]=v=>n("close"))},{default:o(()=>[e("div",Y,[s(j,{label:"Space name",placeholder:"Space name","hide-label":"","full-width":""})]),e("div",Z,[s(y,{"full-width":"",onClick:i[0]||(i[0]=v=>r(!1))},{default:o(()=>[g(" create space ")]),_:1})])]),_:1},8,["open"]))}}),G={},J={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},O=e("g",null,[e("path",{d:"M12 19.5H12.01M22.8064 8.70076C19.9595 6.09199 16.1656 4.5 11.9999 4.5C7.83414 4.5 4.04023 6.09199 1.19336 8.70076M4.73193 12.243C6.67006 10.5357 9.21407 9.5 12 9.5C14.7859 9.5 17.3299 10.5357 19.268 12.243M15.6983 15.7751C14.6792 14.9763 13.3952 14.5 11.9999 14.5C10.5835 14.5 9.28172 14.9908 8.25537 15.8116",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),R=[O];function ee(l,a){return c(),f("svg",J,R)}const te=_(G,[["render",ee]]),ae={class:"font-space-grotesk flex items-center justify-between"},se={class:"flex items-center"},oe={class:"ml-x2 text-primary font-bold capitalize"},ne={class:"text-paragraph-x-small mt-x2 text-secondary"},h=m({__name:"SpaceCard",props:{state:{default:"base"},name:{default:"---"},type:{default:"space"},createdAt:{},count:{default:0}},setup(l){const a=l,n={local:te,space:w},r=V(()=>a.createdAt?`${a.createdAt.getDate()}/${a.createdAt.getMonth()+1}/${a.createdAt.getFullYear()}`:"---");return(t,i)=>(c(),f("button",{class:x(["rounded-medium p-x4 w-full text-left border",[t.state==="active"?"shadow-brand-focus-ring border-brand":"border-primary"]])},[e("header",ae,[e("section",se,[(c(),u(b(n[t.type]),{class:x(["w-auto h-6",[t.state==="active"?"text-surface-brand":"text-surface-tertiary"]])},null,8,["class"])),e("h3",oe,p(t.name),1)]),e("section",{class:x(["text-paragraph-x-small flex items-center justify-center w-6 h-6 font-bold border rounded-full",[t.state==="active"?"border-brand text-brand-purple bg-opacity-35 bg-surface-brand":"text-placeholder bg-surface-secondary border-primary"]])},p(t.count),3)]),e("p",ne," Space created on "+p(r.value),1)],2))}}),ce={},re={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},le=e("g",null,[e("path",{id:"Shape",d:"M12 5V19M5 12H19",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),ie=[le];function de(l,a){return c(),f("svg",re,ie)}const pe=_(ce,[["render",de]]),ue=e("div",{class:"mb-x3"},[e("h1",{class:"text-heading-medium font-space-grotesk text-primary font-bold"}," Hey, Shadow! 👋 "),e("p",{class:"mt-x2 text-sm text-[#CBD5E1]"}," Share files by joining or creating a room ")],-1),_e={class:"flex flex-col justify-between flex-grow"},fe=e("h2",{class:"text-overline text-placeholder py-x3 uppercase"}," your spaces ",-1),me={class:"gap-x6 mt-x3 flex flex-col"},xe={class:"flex justify-center"},he={class:"flex flex-col items-center justify-center"},ge=e("label",{for:"create-space-btn",class:"mt-2 text-xs capitalize text-[#CBD5E1]"}," create space ",-1),$e=m({__name:"ListSpacesPage",setup(l){const a=z("listing");function n(){a.value="create"}function r(){a.value="listing"}return(t,i)=>(c(),u(L,null,{header:o(()=>[ue]),body:o(()=>[e("div",_e,[e("div",null,[fe,e("div",me,[s(h,{type:"local","created-at":new Date,name:"local network space"},null,8,["created-at"]),s(h,{state:"active",name:"Milky way galaxy","created-at":new Date,count:14},null,8,["created-at"]),s(h,{state:"active",name:"andromeda","created-at":new Date,count:69},null,8,["created-at"])])]),e("div",xe,[e("div",he,[s(y,{id:"create-space-btn",variant:"rounded",onClick:n},{default:o(()=>[s(pe,{class:"w-8 h-auto text-white"})]),_:1}),ge])])]),s(q,{open:a.value==="create",onClose:r},null,8,["open"])]),_:1}))}});export{$e as default};
