import{_ as p,o as n,g as u,a as o,d as _,c as i,w as a,b as t,m as s,i as h,j as x,e as l,t as d,k as y,n as C}from"./index-JDe9akVZ.js";import{e as g,Z as w,b,d as v,o as L,g as k,P as B}from"./AppDivider-7zZP8uaf.js";const $={},D={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},N=o("g",{id:"x"},[o("path",{d:"M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z",fill:"currentColor"})],-1),V=[N];function A(m,r){return n(),u("svg",D,V)}const S=p($,[["render",A]]),Z={class:"px-x4 py-x3"},j={class:"flex items-center justify-between"},z={class:"flex items-center"},I=_({__name:"AppDialog",props:{open:{type:Boolean},title:{},description:{},icon:{}},emits:["update:open","close"],setup(m,{emit:r}){const c=r;function f(e){c("update:open",e),e||c("close")}return(e,P)=>(n(),i(s(B),{open:e.open,"onUpdate:open":f},{default:a(()=>[t(s(k),null,{default:a(()=>[t(s(g),{class:"overlay"}),t(s(w),{as:"article",class:"content rounded-medium border border-primary bg-surface-primary py-x3 text-primary"},{default:a(()=>[o("header",Z,[o("div",j,[o("div",z,[e.icon?(n(),i(h(e.icon),{key:0,class:"mr-2 h-6 w-auto text-surface-brand"})):x("",!0),t(s(b),{class:"font-space-grotesk text-heading-small font-bold capitalize"},{default:a(()=>[l(d(e.title),1)]),_:1})]),t(s(v),{class:"flex items-center",type:"button"},{default:a(()=>[t(S,{class:"h-6 w-auto text-surface-tertiary"})]),_:1})]),t(s(L),{class:"mt-x2 text-paragraph-small text-secondary"},{default:a(()=>[l(d(e.description),1)]),_:1})]),o("section",{class:C(e.$attrs.class)},[y(e.$slots,"default",{},void 0,!0)],2)]),_:3})]),_:3})]),_:3},8,["open"]))}}),M=p(I,[["__scopeId","data-v-77f2e5f4"]]);export{M as A,S as X};