import{m as a,j as s,S as n,L as m,F as u}from"./index-Dxkm9OBN.js";import{H as p}from"./Header-DiS-RBAy.js";import{N as d,F as x}from"./Footer-B8n9YJ6A.js";import{C as c}from"./Container-D8XsSa1w.js";import{b as h,a as f}from"./ProductItem-DqHoiunD.js";import"./Modal-CetgO2M2.js";import"./index-DPwev8wJ.js";

function j(){const{data:r,isLoading:t,isError:e,error:i}=a({queryFn:h,queryKey:["wishlist"]});return{wishListProducts:r,isLoading:t,isError:e,error:i}}function E(){const{wishListProducts:r,isLoading:t,isError:e,error:i}=j();return t?s.jsx(n,{}):e?s.jsx("h3",{children:i.message}):s.jsxs(s.Fragment,{children:[s.jsx(p,{}),s.jsx(c,{className:"px-2",children:s.jsx(m,{className:"flex flex-wrap gap-2 py-2 sm:py-4",items:r,render:o=>s.jsx(f,{product:o},o._id),emptyListItem:s.jsx(u,{message:"You have't added any product into wishlist yet",btnText:"Explore ->"})})}),s.jsx(d,{}),s.jsx(x,{})]})}export{E as default};
