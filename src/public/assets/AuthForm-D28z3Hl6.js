import{r as a,j as e,T as d,o as m,B as x,V as u}from"./index-Dxkm9OBN.js";const f=a.createContext();function n({children:r}){return e.jsx(f.Provider,{value:{},children:r})}function j({children:r}){return e.jsx("div",{className:"flex min-h-screen w-full flex-col items-center justify-center px-2",children:r})}const p=function({title:t,subtitle:s,onSubmit:o,btnText:l,children:c,submitting:i}){return e.jsxs("form",{className:"w-[36rem] max-w-full rounded-2xl border-2 border-stone-400 p-6 sm:p-12 ",onSubmit:o,children:[e.jsx(d,{children:t}),e.jsx(m,{className:"text-center",children:s}),c,e.jsx(x,{type:"primary",size:"sm",className:"my-6 rounded-lg",loading:i,disabled:i,children:l})]})},h=a.forwardRef(function({label:r,placeholder:t,name:s,type:o="text"},l){return e.jsxs("div",{className:"my-6 flex flex-col justify-start",children:[e.jsx("label",{className:"my-1 font-medium",htmlFor:s,children:r}),e.jsx("input",{className:"flex-grow rounded-lg border-[1px] border-stone-300 px-4 ring-4 ring-transparent transition-all focus:outline-0 focus:ring-stone-500 md:py-2",placeholder:t,name:s,id:s,ref:l,type:o})]})});function N({text:r,linkText:t,to:s}){return e.jsxs("footer",{children:[e.jsx("span",{className:"divider"}),e.jsxs("h4",{children:[r,e.jsx(u,{className:" ml-2 font-semibold uppercase",to:s,children:t})]})]})}n.Container=j;n.Form=p;n.Row=h;n.Footer=N;export{n as A};
