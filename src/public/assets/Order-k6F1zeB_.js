import{j as r,d as o,a as i,k as m,N as d}from"./index-yjcIFYCJ.js";import{C as c}from"./Container-BoIsmwHk.js";import{H as u,N as l,F as x}from"./Header-CpMF560h.js";import{a as p,O as f}from"./OrderHeader-BYy0P7X3.js";import{L as j}from"./List-CNyMGk0O.js";import{F as g}from"./index-DMZyfS24.js";import{S as N}from"./Button-BA2p-PeP.js";import{u as h}from"./useQuery-D-1kN_G8.js";import{N as y}from"./NoMatchFound-Qkapi-_k.js";import"./Subtitle-HI-oxLdF.js";function O({item:e}){return r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx("img",{className:"aspect-square w-10 sm:w-12",src:e.product.imageUrl,alt:e.product.name}),r.jsx("p",{className:"font-medium",children:e.product.name}),r.jsxs("span",{className:"flex items-center gap-2 text-lg font-medium",children:[r.jsx(g,{})," ",e.quantity]})]})}function F({items:e}){return r.jsx(j,{className:"flex flex-col gap-2 sm:gap-4",items:e,render:s=>r.jsx(O,{item:s})})}function v(){return r.jsxs("div",{className:"my-2 rounded-sm bg-stone-300 p-4",children:[" ","Estimated delivery: 31 March"]})}function A({totalAmount:e}){return r.jsx("div",{className:"my-2 bg-stone-300",children:r.jsx("div",{className:"p-4",children:r.jsxs("span",{className:"text-lg font-medium",children:["Total Amount: $",`${e}`]})})})}function S(){const{id:e}=o(),{data:s,isLoading:t,isError:a,error:n}=h({queryFn:()=>p(e),queryKey:[`order:${e}`]});return{order:s,isLoading:t,isError:a,error:n}}function q(){const e=i(m),{order:s,isLoading:t,isError:a}=S();return t?r.jsx(N,{}):a?r.jsx(y,{}):r.jsxs("main",{children:[!e&&r.jsx(d,{to:"/login",replace:!0}),r.jsx(f,{status:s.status,id:s._id}),r.jsx(v,{date:s.createdAt}),r.jsx(F,{items:s.items}),r.jsx(A,{totalAmount:s.totalAmount})]})}function D(){return console.log("order"),r.jsxs(r.Fragment,{children:[r.jsx(u,{}),r.jsx(c,{className:"px-2",children:r.jsx(q,{})}),r.jsx(l,{}),r.jsx(x,{})]})}export{D as default};
