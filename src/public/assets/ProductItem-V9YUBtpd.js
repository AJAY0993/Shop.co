import{r as x,j as e,u as h}from"./index-BMyKNlCa.js";import{g as j,h as u,i as g,j as f,k as p}from"./Header-DFx5EHuj.js";import{M as l}from"./Modal-Bjn7KhqI.js";function b({images:s}){const n=s.length,[t,a]=x.useState(0),r=i=>{i==="inc"&&(t===n-1?a(0):a(c=>c+1)),i==="dec"&&a(t===0?n-1:c=>c-1)};return e.jsx("div",{className:"relative mx-auto max-w-[35rem] ",children:e.jsxs("div",{className:" mx-auto flex w-72 items-center justify-center bg-stone-50 sm:w-[35rem]",children:[e.jsx("button",{className:"absolute left-12 top-1/2 -translate-y-1/2 ",onClick:()=>r("dec"),children:e.jsx(j,{})}),e.jsx(N,{src:s[t]}),e.jsx("button",{className:"absolute right-12 top-1/2 -translate-y-1/2",onClick:()=>r("inc"),children:e.jsx(u,{})})]})})}function N({src:s}){return e.jsx("img",{className:"mx-auto  aspect-square object-contain object-center",src:s})}const o=()=>Math.random().toString(36).substr(2,6),d=s=>`$${s.toFixed(2)}`;function w({rating:s,maxRating:n,color:t="#FFC633",size:a="1rem"}){const r=Math.floor(s),i=Math.ceil(s-r),c=n-(r+i);return e.jsx("div",{children:e.jsxs("ul",{className:"flex gap-2",children:[Array.from({length:r}).map(m=>e.jsx("li",{children:e.jsx(g,{color:t,size:a})},o())),Array.from({length:i}).map(m=>e.jsx("li",{children:e.jsx(f,{color:t,size:a})},o())),Array.from({length:c}).map(m=>e.jsx("li",{children:e.jsx(p,{color:t,size:a})},o()))]})})}function v({price:s}){const n=s.current.value,t=s.current.discount,a=n-n/100*t;return e.jsxs("p",{className:"my-4 flex items-center gap-2 text-sm font-semibold capitalize md:gap-4 md:text-2xl",children:[d(a),e.jsx("span",{className:"text-stone-400 line-through",children:d(n)}),e.jsxs("span",{className:"rounded-full bg-red-100 px-2 py-1 text-[1rem] text-red-400 md:px-6",children:[t,"%"]})]})}function P({product:s,size:n}){const t=h(),a=n==="sm"?"w-[10.7rem]":"w-44",r=i=>{i.stopPropagtion,i.target.tagName!=="IMG"&&t(`/shop/${s._id}`)};return e.jsxs(l,{children:[e.jsxs("div",{className:"shrink-1 w-40 cursor-pointer md:w-72",onClick:r,children:[e.jsx(l.Open,{id:s._id,children:e.jsx("img",{className:`aspect-square ${a} overflow-hidden rounded-xl bg-stone-200 object-cover object-top md:w-72`,src:s.imageUrl,alt:"product"})}),e.jsx("h4",{className:"font-bold",children:s.name}),e.jsx(w,{rating:s.rating.rate,maxRating:5}),e.jsx(v,{price:s.price})]}),e.jsx(l.Window,{id:s._id,children:e.jsx(b,{images:[s.imageUrl,...s.additionalImageUrls]})})]})}export{v as P,w as S,P as a};
