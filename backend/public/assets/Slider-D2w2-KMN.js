import{r as s,j as e,B as i}from"./index-CrXW60Oy.js";import{a as x}from"./ProductItem-Dg0yqg83.js";import{a as m}from"./Header-CTXG1lcY.js";function u({title:r,query:o=""}){const[c,l]=s.useState([]),[n,t]=s.useState(!1);return s.useEffect(()=>{t(!0),m(o).then(l).finally(()=>t(!1))},[]),e.jsxs("section",{className:"px-4",children:[e.jsx("h2",{className:"my-4 text-center text-2xl font-extrabold uppercase",children:r}),e.jsx("div",{className:"flex justify-between gap-4 overflow-x-scroll p-3 ",children:!n&&c.map(a=>e.jsx(x,{product:a},a.name))}),e.jsx("div",{className:" mx-auto w-52",children:e.jsx(i,{type:"secondary",to:"/shop",children:"View All"})})]})}export{u as S};
