import{a as u,f as d,b as x,K as g,_ as p,j as t,O as j,M as o}from"./index-Dxkm9OBN.js";import{H as f}from"./Header-DiS-RBAy.js";import{C as h}from"./Container-D8XsSa1w.js";import{a as N}from"./index-DPwev8wJ.js";import{l as b}from"./authApi-4w_02Nnt.js";function v(){const e=u(),s=d(),{mutate:r,isPending:i,isError:l,error:c}=x({mutationFn:b,onSuccess:()=>{e(g()),s("/shop")},onError:m=>{p.error(m.message)}});return{logout:r,isPending:i,isError:l,error:c}}const a="rounded-md bg-stone-200 p-2 text-sm font-medium capitalize text-neutral-800",n="rounded-md bg-neutral-800 p-2 text-sm font-medium capitalize text-neutral-100",y="rounded-md bg-red-500 p-2 text-sm font-medium capitalize text-neutral-100";function E(){return t.jsxs(t.Fragment,{children:[t.jsx(f,{}),t.jsxs(h,{className:"px-2",children:[t.jsx("h3",{className:"m-1 my-1 text-lg font-medium",children:"Account & Settings"}),t.jsx(O,{}),t.jsx(j,{})]})]})}function O(){const{logout:e}=v();return t.jsx("nav",{children:t.jsxs("ul",{className:"my-2 flex list-none items-center gap-4",children:[t.jsx("li",{children:t.jsx(o,{className:({isActive:s})=>s?n:a,to:"basicDetails",children:"My details"})}),t.jsx("li",{children:t.jsx(o,{className:({isActive:s})=>s?n:a,to:"myOrders",children:"My Orders"})}),t.jsx("li",{className:"ml-auto",children:t.jsxs("button",{className:y,onClick:e,children:["Logout ",t.jsx(N,{className:"inline-block"})]})})]})})}export{E as default};
