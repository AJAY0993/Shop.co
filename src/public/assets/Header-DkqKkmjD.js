import{R as u,e as j,j as e,r as h,u as L,U as m}from"./index-BnkrY95Y.js";import{T as z,B as C}from"./Button-CemciDzJ.js";var N={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},b=u.createContext&&u.createContext(N),M=["attr","size","title"];function P(t,r){if(t==null)return{};var a=S(t,r),s,i;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)s=l[i],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(a[s]=t[s])}return a}function S(t,r){if(t==null)return{};var a={},s=Object.keys(t),i,l;for(l=0;l<s.length;l++)i=s[l],!(r.indexOf(i)>=0)&&(a[i]=t[i]);return a}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t},p.apply(this,arguments)}function y(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);r&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),a.push.apply(a,s)}return a}function f(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?y(Object(a),!0).forEach(function(s){F(t,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))})}return t}function F(t,r,a){return r=H(r),r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function H(t){var r=B(t,"string");return typeof r=="symbol"?r:String(r)}function B(t,r){if(typeof t!="object"||t===null)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var s=a.call(t,r||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function O(t){return t&&t.map((r,a)=>u.createElement(r.tag,f({key:a},r.attr),O(r.child)))}function c(t){return r=>u.createElement(E,p({attr:f({},t.attr)},r),O(t.child))}function E(t){var r=a=>{var{attr:s,size:i,title:l}=t,g=P(t,M),o=i||a.size||"1em",d;return a.className&&(d=a.className),t.className&&(d=(d?d+" ":"")+t.className),u.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,s,g,{className:d,style:f(f({color:t.color||a.color},a.style),t.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),l&&u.createElement("title",null,l),t.children)};return b!==void 0?u.createElement(b.Consumer,null,a=>r(a)):r(N)}function V(t){return c({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function T(t){return c({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function R(t){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(t)}function _(t){return c({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM403.029 192H360v-60c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v60h-43.029c-10.691 0-16.045 12.926-8.485 20.485l67.029 67.029c4.686 4.686 12.284 4.686 16.971 0l67.029-67.029c7.559-7.559 2.205-20.485-8.486-20.485z"},child:[]}]})(t)}function Q(t){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"},child:[]}]})(t)}function J(t){return c({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0 0 18.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"},child:[]}]})(t)}function X(t){return c({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M365.46 357.74L147.04 255.89l218.47-101.88c16.02-7.47 22.95-26.51 15.48-42.53l-13.52-29C360 66.46 340.96 59.53 324.94 67L18.48 209.91a32.014 32.014 0 0 0-18.48 29v34.24c0 12.44 7.21 23.75 18.48 29l306.31 142.83c16.06 7.49 35.15.54 42.64-15.52l13.56-29.08c7.49-16.06.54-35.15-15.53-42.64z"},child:[]}]})(t)}function Y(t){return c({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function Z(t){return c({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function k(t){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function t2(t){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"},child:[]}]})(t)}function e2(t){return c({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z"},child:[]}]})(t)}function r2(t){return c({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function a2(t){return c({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(t)}function D(t){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"},child:[]}]})(t)}function s2(t){return c({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"},child:[]}]})(t)}function I(t){return c({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(t)}const c2=async t=>(await j(`products${t}`)).data.data.products,n2=async t=>{try{return(await j(`products/${t}`)).data.data.product}catch{throw new Error("Product Not found")}},A=async t=>(await j(`products/s/${t}`)).data.data.products;function i2(){return e.jsx("div",{className:"my-4 px-4",children:e.jsxs("div",{className:"m-auto  flex max-w-[45rem] flex-wrap justify-center gap-4 rounded-xl bg-neutral-950 p-4",children:[e.jsx("div",{className:"max-w-80 text-neutral-50",children:e.jsx(z,{children:"stay upto date about our latest offers"})}),e.jsxs("div",{className:"flex flex-col justify-center gap-4",children:[e.jsx("input",{className:"rounded-full border-0  bg-neutral-50 px-4 py-2 outline-0 placeholder:capitalize placeholder:text-neutral-700",placeholder:"enter your email address"}),e.jsx(C,{type:"secondary",children:e.jsx("span",{className:"text-neutral-50",children:"Subscribe to Newsletter"})})]})]})})}function v({children:t,classes:r}){return e.jsx("span",{className:"aspect-square cursor-pointer overflow-hidden rounded-full bg-stone-300 p-2",children:t})}function $({children:t,className:r}){return e.jsx("p",{className:`my-4 max-w-[60ch] text-base font-medium text-stone-500 ${r}`,children:t})}function w({children:t,classes:r=""}){return e.jsx("div",{className:`flex flex-wrap ${r}`,role:"row",children:t})}function l2(){return e.jsx("footer",{className:" bg-stone-200 p-4",children:e.jsxs(w,{classes:"justify-between max-w-[66rem] m-auto gap-4 border-b-2 border-stone-400",children:[e.jsxs("div",{className:"max-w-64",children:[e.jsx(z,{children:e.jsx("span",{className:"text-left uppercase",children:"shop.co"})}),e.jsx($,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium maiores nulla dolorum suscipit aliquid, voluptates molestias? Doloremque alias porro sunt magnam m?"}),e.jsxs(w,{classes:"gap-2 pb-4",children:[e.jsx(v,{children:e.jsx(V,{className:""})}),e.jsx(v,{children:e.jsx(T,{})}),e.jsx(v,{children:e.jsx(R,{})})]})]}),e.jsxs(x,{heading:"company",children:[e.jsx(n,{children:"about"}),e.jsx(n,{children:"features"}),e.jsx(n,{children:"works"}),e.jsx(n,{children:"career"})]}),e.jsxs(x,{heading:"help",children:[e.jsx(n,{children:"customer support"}),e.jsx(n,{children:"delivery details"}),e.jsx(n,{children:"terms & conditions"}),e.jsx(n,{children:"privacy"})]}),e.jsxs(x,{heading:"FAQ",children:[e.jsx(n,{children:"customer support"}),e.jsx(n,{children:"delivery details"}),e.jsx(n,{children:"terms & conditions"}),e.jsx(n,{children:"privacy"})]}),e.jsxs(x,{heading:"RESOURCES",children:[e.jsx(n,{children:"customer support"}),e.jsx(n,{children:"delivery details"}),e.jsx(n,{children:"terms & conditions"}),e.jsx(n,{children:"privacy"})]})]})})}function n({children:t}){return e.jsx("li",{className:"text-sm font-normal capitalize  text-stone-600",children:t})}function x({children:t,heading:r}){return e.jsxs("ul",{className:"my-4 list-none ",children:[e.jsx("li",{className:"mb-4",children:e.jsx("h3",{className:"font-semibold uppercase tracking-wider",children:r})}),t]})}function q(){const[t,r]=h.useState(!1),[a,s]=h.useState(""),[i,l]=h.useState([]),g=o=>{s(o.target.value)};return h.useEffect(()=>{const o=setTimeout(async()=>{if(a){const d=await A(a);l(d),console.log(a)}},500);return()=>clearTimeout(o)},[a]),e.jsxs("div",{className:"relative",onBlur:()=>{s(""),r(!1)},children:[e.jsxs("div",{className:" ml-auto md:ml-0",children:[e.jsx("label",{htmlFor:"search",className:"absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer",children:e.jsx(k,{})}),e.jsx("input",{id:"search",className:"w-0 rounded-full px-2 py-1 transition-all md:px-4 md:py-2 md:focus:w-80",placeholder:"Type here to search",onChange:g,onFocus:()=>r(!0)})]}),t&&e.jsx("div",{className:"bottom-[-calc(100%  + 1rem)] absolute  z-50 bg-neutral-50",children:e.jsx("ul",{className:"space-y-4",children:i.map(o=>e.jsx(U,{item:o},o._id))})})]})}function U({item:t}){const r=L();return e.jsxs("li",{className:"flex cursor-pointer justify-between gap-2 ",onClick:a=>{a.preventDefault(),r(`/${t._id}`),alert("booga booga boo")},children:[e.jsx("img",{src:t.imageUrl,alt:t.name,className:`aspect-square w-[3rem]\r
`}),e.jsx("p",{children:t.name.slice(0,30)+"..."})]})}function o2(){return e.jsxs("header",{className:"mx-auto flex max-w-[77.5rem] items-center justify-between border-b-[1px] border-stone-400 px-2 py-3 md:px-4 md:py-4",children:[e.jsx(m,{to:"/home",children:e.jsx(G,{})}),e.jsx(q,{}),e.jsxs("nav",{className:"flex gap-4",children:[e.jsx(m,{to:"/wishlist",children:e.jsx(I,{})}),e.jsx(m,{to:"/cart",children:e.jsx(_,{})}),e.jsx(m,{to:"/me",children:e.jsx(D,{})})]})]})}function G(){return e.jsx("div",{className:"logo text-xl font-extrabold uppercase",children:"shop.co"})}export{l2 as F,c as G,o2 as H,i2 as N,$ as P,w as R,Q as a,c2 as b,a2 as c,Y as d,Z as e,n2 as f,X as g,J as h,r2 as i,e2 as j,s2 as k,t2 as l,I as m};
