import{r as t,j as e}from"./index-BMyKNlCa.js";import{a as i}from"./ProductItem-V9YUBtpd.js";import{B as m}from"./Button-4SsAZAd0.js";import{b as x}from"./Header-DFx5EHuj.js";function h({title:r,query:a=""}){const[c,l]=t.useState([]),[n,o]=t.useState(!1);return t.useEffect(()=>{o(!0),x(a).then(l).then(s=>console.log(s)).finally(()=>o(!1))},[]),e.jsxs("section",{className:"px-4",children:[e.jsx("h2",{className:"my-4 text-center text-2xl font-extrabold uppercase",children:r}),e.jsx("div",{className:"flex justify-between gap-4 overflow-x-scroll p-3 ",children:!n&&c.map(s=>e.jsx(i,{product:s},s.name))}),e.jsx("div",{className:" mx-auto w-52",children:e.jsx(m,{type:"secondary",to:"/shop",children:"View All"})})]})}export{h as S};
