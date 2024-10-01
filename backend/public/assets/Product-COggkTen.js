import{r as d,j as e,B as i,f as C,d as N,h as R,a as S,T as P,i as k,k as m,m as p,n as g,u as F,b as E,_ as f,o as x,p as $,S as q}from"./index-00F4N1Wb.js";import{P as h,R as l,N as I,F as _}from"./NewsletterSubscriptionForm-BeEsRt-B.js";import{S as w,f as L,F as Q,H as T}from"./Header-CF4FsExV.js";import{C as j}from"./Container-BsgEogkW.js";import{P as A}from"./ProductItem-Cd38yBRX.js";import{C as D}from"./CartController-CCXtlCct.js";import{S as O}from"./Slider-DKmTZLlE.js";import"./index-BzYH-nAS.js";function U({images:s}){const[r,t]=d.useState(s[0]),a=n=>{n.stopPropagation(),t(n.target.currentSrc)};return e.jsxs("div",{className:"flex flex-wrap justify-center gap-2 p-4 md:flex-row-reverse",children:[e.jsx("div",{children:e.jsx("img",{className:"w-full rounded-2xl border-[1px] border-stone-300 object-cover  md:h-[33.125rem] md:w-[27.75rem]",src:r})}),e.jsx("div",{className:"flex justify-between gap-4 sm:justify-start sm:gap-2 sm:p-2 md:flex-col",children:s.slice(0,3).map((n,o)=>e.jsx(B,{src:s[o],onClick:a},o))})]})}function B({src:s,onClick:r}){return e.jsx("img",{className:" aspect-square w-[5.3rem] flex-shrink cursor-pointer rounded-2xl border-[1px] border-stone-300 object-cover object-top sm:w-[30%] md:aspect-[152/167] md:w-[9.5rem]",src:s,alt:"product image",onClick:r})}function H({size:s,setSize:r}){return e.jsxs("div",{className:"px-4 ",children:[e.jsx("h4",{className:"mb-4 font-medium text-stone-400",children:"Choose size"}),e.jsxs("ul",{className:"flex flex-wrap gap-4",children:[e.jsx("li",{children:e.jsx(i,{type:"selector",selected:s==="s",onClick:()=>r("s"),children:"small"})}),e.jsx("li",{children:e.jsx(i,{type:"selector",selected:s==="m",onClick:()=>r("m"),children:"medium"})}),e.jsx("li",{children:e.jsx(i,{type:"selector",selected:s==="l",onClick:()=>r("l"),children:"large"})}),e.jsx("li",{children:e.jsx(i,{type:"selector",selected:s==="xl",onClick:()=>r("xl"),children:"x-large"})})]})]})}function K({product:s}){const[r,t]=d.useState(""),[a,n]=d.useState(""),o=C(),c=N(R(s._id)),v=S(),y=c?"Go to cart":"Add Item",b=()=>{c===0?v(k({name:s.name,_id:s._id,imageUrl:s.imageUrl,quantity:1,price:s.price,color:r,size:a})):o("/cart")};return e.jsxs(j,{className:"flex flex-col gap-8 overflow-hidden",children:[e.jsxs("div",{className:" px-4",children:[e.jsx(P,{align:"left",className:"max-w-96",children:s.name}),e.jsx(w,{rating:s.rating.rate}),e.jsx(A,{price:s.price}),e.jsx(h,{children:s.description})]}),e.jsxs("div",{className:"px-4",children:[e.jsx("h4",{className:"mb-4 font-medium text-stone-400",children:"Choose color"}),e.jsxs(l,{classes:"gap-4",children:[e.jsx(u,{color:"bg-red-400",onChange:t}),e.jsx(u,{color:"bg-blue-400",onChange:t}),e.jsx(u,{color:"bg-green-400",onChange:t})]})]}),e.jsx(H,{size:a,setSize:n}),e.jsxs(l,{classes:" gap-4 items-center px-4",children:[e.jsx(D,{product:s}),e.jsx("div",{className:"flex-grow",children:e.jsx(i,{type:"primary",onClick:b,children:y})})]})]})}function u({color:s,onChange:r}){const t=a=>{a.preventDefault(),r(()=>a.target.id)};return e.jsx("div",{className:`aspect-square w-10 rounded-full border-2 ${s}`,onClick:t})}function G(){const{id:s}=m(),{data:r,isLoading:t,isError:a,error:n}=p({queryFn:()=>L(s),queryKey:[`product:${s}`],throwOnError:o=>alert(o.message)});return{product:r,isLoading:t,isError:a,error:n}}const W=async s=>{try{return(await g(`products/${s}/reviews`)).data.data.reviews}catch(r){throw new Error(r.response.data.message)}},M=async({id:s,review:r})=>{try{return(await g(`products/${s}/reviews`,{method:"POST",data:{review:r}})).data.data.review}catch(t){throw new Error(t.response.data.message)}};function J(){const{id:s}=m(),r=F(),{mutate:t,isPending:a}=E({mutationFn:M,onSuccess:()=>{f.success("Review created successfully"),r.invalidateQueries({queryKey:[`reviews:${s}`]})},onError:n=>{f.error(n.message)}});return{createReview:t,isCreating:a}}function V({close:s}){const r=d.useRef(),{id:t}=m(),{createReview:a,isCreating:n}=J(),o=c=>{c.preventDefault(),r.current.value!==""&&a({id:t,review:r.current.value},{onSuccess:s})};return e.jsx("form",{className:"my-2 mb-16 block sm:my-3",onSubmit:o,children:e.jsxs(l,{children:[e.jsx("input",{className:"border-bottom-2  flex-grow border-0 border-transparent outline-0 transition-all focus:border-0 focus:border-b-2 focus:border-stone-900",placeholder:"Write a review",ref:r}),e.jsx(i,{type:"primary",className:"min-w-20 max-w-fit",loading:n,disabled:n,children:"Add"})]})})}function X({className:s,review:r}){return e.jsxs("div",{className:`relative  border-2 border-stone-300 px-3 py-4 ${s} rounded-2xl`,children:[e.jsx(Q,{className:"absolute right-3 top-4 text-stone-500"}),e.jsx(w,{rating:4.5}),e.jsx(x,{className:"my-1",children:r.user.username}),e.jsx(h,{className:"my-0 font-normal",children:r.review}),e.jsxs(h,{children:["Posted on ",`${$(r.createdAt)}`]})]})}function Y(){const{id:s}=m(),{data:r,isLoading:t}=p({queryFn:()=>W(s),queryKey:[`reviews:${s}`]});return{reviews:r,isLoading:t}}function Z(){const[s,r]=d.useState(!1),{reviews:t,isLoading:a}=Y(),n=()=>r(!0),o=()=>r(!1);return e.jsx(j,{children:e.jsxs("div",{className:"my-2 px-4 sm:my-4",children:[e.jsxs(l,{classes:"flex justify-between items-center my-2",children:[e.jsx(x,{className:"my-3 font-bold",children:"Reviews and Rating"}),!s&&e.jsx(i,{type:"primary",className:"max-w-fit",enlarge:!1,onClick:n,children:"Write a Review"})]}),s&&e.jsx(V,{close:o}),(!t||t.length==0)&&e.jsx(x,{className:"text-center",children:"No reviews about this product yet! Be the first to write a review"}),e.jsx(l,{classes:"flex-wrap gap-4",children:t==null?void 0:t.map(c=>e.jsx(X,{review:c,className:"flex-grow"},c._id))}),(t==null?void 0:t.length)>0&&e.jsx(i,{type:"secondary",className:"mx-auto my-4 max-w-52 ",disabled:a,children:"Load more"})]})})}function ie(){const{product:s,isError:r,isLoading:t,error:a}=G();if(t)return e.jsx(q,{});if(r)return a.message;const n=[s.imageUrl,...s.additionalImageUrls];return e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx(j,{children:e.jsxs(l,{classes:"no-wrap",children:[e.jsx(U,{images:n}),e.jsx(K,{product:s})]})}),e.jsx(Z,{}),e.jsx(O,{className:"",title:"you might also like"}),e.jsx(I,{}),e.jsx(_,{})]})}export{ie as default};
