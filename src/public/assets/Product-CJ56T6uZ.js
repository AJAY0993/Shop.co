import{r as m,j as e,u as w,a as v,g as C,b as y,c as b,d as S}from"./index-BiHZEt9I.js";import{P as x,R as c,a as P,f as k,H as q,N as I,F as E}from"./Header-DHZ1TQJb.js";import{S as p,P as F}from"./ProductItem-DbDdC8gW.js";import{B as l,T as R,S as L}from"./Button-MOtH8c94.js";import{C as u}from"./Container-dRt1HKCq.js";import{C as A}from"./CartController-BT9IEeEi.js";import{S as h}from"./Subtitle-Cf0Sp6AK.js";import{S as T}from"./Slider-CGOdy3xw.js";import{u as U}from"./useQuery-An1CxWzo.js";import"./Modal-BQi_7LfH.js";function H({images:s}){const[r,a]=m.useState(s[0]),t=i=>{i.stopPropagation(),a(i.target.currentSrc)};return e.jsxs("div",{className:"flex flex-wrap justify-center gap-2 p-4 md:flex-row-reverse",children:[e.jsx("div",{children:e.jsx("img",{className:"w-full rounded-2xl border-[1px] border-stone-300 object-cover  md:h-[33.125rem] md:w-[27.75rem]",src:r})}),e.jsx("div",{className:"flex justify-between gap-2 sm:p-4 md:flex-col",children:s.slice(0,3).map((i,o)=>e.jsx(O,{src:s[o],onClick:t},o))})]})}function O({src:s,onClick:r}){return e.jsx("img",{className:" aspect-square w-[5.3rem] flex-shrink cursor-pointer rounded-2xl border-[1px] border-stone-300 object-cover object-top sm:w-[30%] md:aspect-[152/167] md:w-[9.5rem]",src:s,alt:"product image",onClick:r})}function Q({size:s,setSize:r}){return e.jsxs("div",{className:"px-4 ",children:[e.jsx("h4",{className:"mb-4 font-medium text-stone-400",children:"Choose size"}),e.jsxs("ul",{className:"flex flex-wrap gap-4",children:[e.jsx("li",{children:e.jsx(l,{type:"selector",selected:s==="s",onClick:()=>r("s"),children:"small"})}),e.jsx("li",{children:e.jsx(l,{type:"selector",selected:s==="m",onClick:()=>r("m"),children:"medium"})}),e.jsx("li",{children:e.jsx(l,{type:"selector",selected:s==="l",onClick:()=>r("l"),children:"large"})}),e.jsx("li",{children:e.jsx(l,{type:"selector",selected:s==="xl",onClick:()=>r("xl"),children:"x-large"})})]})]})}function _({product:s}){const[r,a]=m.useState(""),[t,i]=m.useState(""),o=w(),j=v(C(s._id)),g=y(),f=j?"Go to cart":"Add Item",N=()=>{j===0?g(b({name:s.name,_id:s._id,imageUrl:s.imageUrl,quantity:1,price:s.price,color:r,size:t})):o("/cart")};return e.jsxs(u,{className:"flex flex-col gap-8 overflow-hidden",children:[e.jsxs("div",{className:" px-4",children:[e.jsx(R,{align:"left",className:"max-w-96",children:s.name}),e.jsx(p,{rating:s.rating.rate}),e.jsx(F,{price:s.price}),e.jsx(x,{children:s.description})]}),e.jsxs("div",{className:"px-4",children:[e.jsx("h4",{className:"mb-4 font-medium text-stone-400",children:"Choose color"}),e.jsxs(c,{classes:"gap-4",children:[e.jsx(d,{color:"bg-red-400",onChange:a}),e.jsx(d,{color:"bg-blue-400",onChange:a}),e.jsx(d,{color:"bg-green-400",onChange:a})]})]}),e.jsx(Q,{size:t,setSize:i}),e.jsxs(c,{classes:" gap-4 items-center px-4",children:[e.jsx(A,{product:s}),e.jsx("div",{className:"flex-grow",children:e.jsx(l,{type:"primary",onClick:N,children:f})})]})]})}function d({color:s,onChange:r}){const a=t=>{t.preventDefault(),r(i=>t.target.id)};return e.jsx("div",{className:`aspect-square w-12 rounded-full ${s}`,onClick:a})}function n({className:s}){return e.jsxs("div",{className:`relative  border-2 border-stone-300 px-3 py-4 ${s} rounded-2xl`,children:[e.jsx(P,{className:"absolute right-3 top-4 text-stone-500"}),e.jsx(p,{rating:4.5}),e.jsx(h,{className:"my-1",children:"Lorem ipsum"}),e.jsx(x,{className:"my-0 font-normal",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe porro perspiciatis corrupti eaque tenetur quas in vitae enim, blanditiis reprehenderit dicta asperiores quasi consectetur neque fuga tempore sed reiciendis numquam."}),e.jsx(x,{children:"Posted on August 2023"})]})}function $(){return e.jsx(u,{children:e.jsxs("div",{className:"px-4",children:[e.jsx(h,{className:"my-3",children:"All reviews"}),e.jsxs(c,{classes:"flex-wrap gap-4",children:[e.jsx(n,{className:"flex-grow"}),e.jsx(n,{className:"flex-grow"}),e.jsx(n,{className:"flex-grow"}),e.jsx(n,{className:"flex-grow"})]}),e.jsx(l,{type:"secondary",className:"mx-auto my-4 max-w-52 ",children:"Load more"})]})})}function B(){const{id:s}=S(),{data:r,isLoading:a,isError:t,error:i}=U({queryFn:()=>k(s),queryKey:[`product:${s}`],throwOnError:o=>alert(o.message)});return{product:r,isLoading:a,isError:t,error:i}}function z(){const{product:s,isError:r,isLoading:a,error:t}=B();if(a)return e.jsx(L,{});if(r)return t.message;const i=[s.imageUrl,...s.additionalImageUrls];return e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(u,{children:e.jsxs(c,{classes:"no-wrap",children:[e.jsx(H,{images:i}),e.jsx(_,{product:s})]})}),e.jsx($,{}),e.jsx(T,{className:"",title:"you might also like"}),e.jsx(I,{}),e.jsx(E,{})]})}export{z as default};
