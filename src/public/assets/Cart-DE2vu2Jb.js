import{a as i,g as T,b as y,j as e,e as A,f as b,h as $,i as S,k as G,N as M,u as O,l as q,m as D,n as R,r as J,o as W}from"./index-BiHZEt9I.js";import{L as z}from"./List-DFUHHkxR.js";import{R as d,c as Q,H as X,N as _,F as U}from"./Header-DHZ1TQJb.js";import{B as u,T as B}from"./Button-MOtH8c94.js";import{C as V}from"./CartController-BT9IEeEi.js";import{S as w}from"./Subtitle-Cf0Sp6AK.js";import{C as H}from"./Container-dRt1HKCq.js";import{M as h}from"./Modal-BQi_7LfH.js";function Y({cartItem:s}){const r=(i(T(s._id))*s.price.current.value).toFixed(2),a=y(),n=()=>a(A(s._id));return e.jsx("div",{children:e.jsxs(d,{classes:"py-2 gap-[.75rem] md:gap-4 items-center relative",children:[e.jsx("img",{className:"aspect-square h-20 rounded-xl object-cover object-top md:h-32",src:s.imageUrl}),e.jsxs("div",{children:[e.jsx("h5",{className:" max-w-[80%] text-base font-semibold md:text-xl",children:s.name}),e.jsxs("p",{className:"text-[.8rem] md:text-base",children:["size ",e.jsx("span",{children:"7"})]}),e.jsxs("p",{className:"text-[.8rem] md:text-base",children:["color ",e.jsx("span",{children:"red"})]}),e.jsxs("span",{className:"font-semibold md:text-lg",children:["$",r]})]}),e.jsx("div",{className:"absolute right-2 top-2",children:e.jsx(u,{type:"raw",children:e.jsx(Q,{className:"text-stone-600 hover:text-red-600",onClick:n})})}),e.jsx("div",{className:"absolute bottom-2 right-2 flex flex-col justify-self-end",children:e.jsx(V,{product:s})})]})})}function K(){return e.jsxs("div",{className:"mx-auto flex  max-w-80 flex-col gap-8 text-center",children:[e.jsx("img",{src:"/emptyCart.svg"}),e.jsx(w,{children:"I am empty"}),e.jsx("div",{children:e.jsx(u,{type:"primary",to:"/shop",children:"Go and Add"})})]})}function Z(){const s=i(b);return e.jsx(z,{className:" flex-grow-5 divide-y-[1px] rounded-3xl border-2 border-stone-400 p-2 md:p-6 ",items:s,render:t=>e.jsx(Y,{cartItem:t},Math.random().toString(36).slice(2,6)),emptyListItem:e.jsx(K,{})})}function ee(){return e.jsx(B,{align:"left",children:"Your cart"})}function x({name:s,value:t,color:r="neutral-950"}){return e.jsx("li",{children:e.jsxs("div",{className:"flex justify-between capitalize",children:[e.jsx("span",{className:"text-stone-500",children:s}),e.jsx("span",{className:`font-semibold text-${r}`,children:t})]})})}var C="https://js.stripe.com/v3",te=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,v="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",re=function(){for(var t=document.querySelectorAll('script[src^="'.concat(C,'"]')),r=0;r<t.length;r++){var a=t[r];if(te.test(a.src))return a}return null},g=function(t){var r=t&&!t.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(C).concat(r);var n=document.head||document.body;if(!n)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return n.appendChild(a),a},se=function(t,r){!t||!t._registerWrapper||t._registerWrapper({name:"stripe-js",version:"3.3.0",startTime:r})},l=null,p=null,f=null,ne=function(t){return function(){t(new Error("Failed to load Stripe.js"))}},ae=function(t,r){return function(){window.Stripe?t(window.Stripe):r(new Error("Stripe.js not available"))}},oe=function(t){return l!==null?l:(l=new Promise(function(r,a){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&t&&console.warn(v),window.Stripe){r(window.Stripe);return}try{var n=re();if(n&&t)console.warn(v);else if(!n)n=g(t);else if(n&&f!==null&&p!==null){var o;n.removeEventListener("load",f),n.removeEventListener("error",p),(o=n.parentNode)===null||o===void 0||o.removeChild(n),n=g(t)}f=ae(r,a),p=ne(a),n.addEventListener("load",f),n.addEventListener("error",p)}catch(m){a(m);return}}),l.catch(function(r){return l=null,Promise.reject(r)}))},ie=function(t,r,a){if(t===null)return null;var n=t.apply(void 0,r);return se(n,a),n},c,N=!1,E=function(){return c||(c=oe(null).catch(function(t){return c=null,Promise.reject(t)}),c)};Promise.resolve().then(function(){return E()}).catch(function(s){N||console.warn(s)});var le=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];N=!0;var n=Date.now();return E().then(function(o){return ie(o,r,n)})};const ce=async s=>(await $("checkout",{method:"POST",data:{items:s}})).data.data.session;function de({onSubmit:s,isCheckingOut:t}){const r=i(S);i(G);const a=o=>{o.preventDefault(),s()},n="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-stone-500 focus:ring-stone-500  ";return e.jsxs("div",{className:"rounded-lg bg-neutral-50 p-4",children:[!r&&e.jsx(M,{to:"/login",replace:!0}),e.jsxs("form",{className:"space-y-4",onSubmit:a,children:[e.jsxs(d,{className:"flex-col items-center",children:[e.jsx("label",{htmlFor:"address",className:"text-gray-90 mb-2 block text-sm font-medium",children:"Shipping Address"}),e.jsx("textarea",{id:"address",rows:"4",className:n,placeholder:"Shipping Address",required:!0})]}),e.jsxs(d,{children:[e.jsx("label",{htmlFor:"Mob no",className:"text-gray-90 mb-2 block text-sm font-medium",children:"Mod no"}),e.jsx("input",{type:"tel",className:n,required:!0})]}),e.jsx(u,{type:"primary",size:"sm",loading:t,disabled:t,children:"Confirm"})]})]})}function ue(){const s=O(),t=y(),r=i(S),a=i(b),n=i(q),o=i(D),m=i(R),[L,j]=J.useState(!1),F=(n+m-o).toFixed(2),k=async()=>{if(!r)return s("/login");const I=await le("pk_test_51P4fQhSGowosMs9tJozifuX1d39JCzydl9JJbbF5CCX5GpCYJII4eXFbfO26KM7kGpVt7yP1oMDakQNlpL1lDGky00lJWmS5gq");j(!0);const P=await ce(a);j(!1),t(W()),I.redirectToCheckout({sessionId:P.id})};return a.length<1?null:e.jsxs("div",{className:"flex-grow  self-start rounded-3xl border-2 border-stone-400 px-4 py-2 md:flex-grow-0",children:[e.jsx(w,{children:"Order summary"}),e.jsxs("ul",{className:"flex flex-col gap-3 py-4",children:[e.jsx(x,{name:"subtotal",value:`$${n}`}),e.jsx(x,{name:"discount",value:`$${o}`,color:"red-600"}),e.jsx(x,{name:"delievery fee",value:`$${m}`}),e.jsx(x,{name:"total price",value:`$${F}`})]}),e.jsxs(d,{classes:"flex-nowrap gap-2 my-2",children:[e.jsx("input",{className:"flex flex-grow rounded-full bg-stone-200 px-4 py-2",placeholder:"Apply promo code"}),e.jsx(u,{type:"primary",children:"apply"})]}),e.jsx("div",{className:"mx-auto my-2 w-[16rem] md:w-96",children:e.jsxs(h,{children:[e.jsx(h.Open,{children:e.jsxs(u,{type:"primary",enlarge:!1,children:["Go to checkout",e.jsx("span",{className:"mx-2 transition-all hover:translate-x-8",children:"→"})]})}),e.jsx(h.Window,{children:e.jsx(de,{onSubmit:k,isCheckingOut:L})})]})})]})}function ye(){return e.jsxs(e.Fragment,{children:[e.jsx(X,{}),e.jsxs(H,{className:"px-2",children:[e.jsx(ee,{}),e.jsxs(d,{classes:"flex-wrap gap-2",children:[e.jsx(Z,{}),e.jsx(ue,{})]})]}),e.jsx(_,{}),e.jsx(U,{})]})}export{ye as default};
