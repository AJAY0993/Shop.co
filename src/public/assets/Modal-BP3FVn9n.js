import{r as s,j as o,z as i}from"./index-BnkrY95Y.js";import{G as u}from"./Header-DkqKkmjD.js";function d(t){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(t)}const r=s.createContext();function l({children:t}){const[n,e]=s.useState(""),a=()=>e(""),c=e;return o.jsx(r.Provider,{value:{open:c,close:a,openId:n},children:t})}function x({children:t,id:n}){const{open:e}=s.useContext(r);return s.cloneElement(t,{onClick:()=>e(n)})}function p({children:t,id:n}){const{openId:e,close:a}=s.useContext(r);return e!==n?null:o.jsxs(f,{children:[o.jsx("button",{className:" absolute right-4 top-4 aspect-square w-12 rounded-full bg-stone-950 text-lg transition-all active:scale-75",onClick:a,children:o.jsx(d,{className:" absolute left-1/2 top-1/2 -translate-x-1/2  -translate-y-1/2 text-stone-50 ",fontWeight:600,fontSize:"1.75rem"})}),o.jsx("div",{className:"fixed  left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2",children:t})]})}l.Window=p;l.Open=x;function f({children:t}){return i.createPortal(o.jsx("div",{className:"fixed bottom-0 left-0 right-0 top-0 z-[100000] min-w-80 bg-stone-800 bg-opacity-45",children:t}),document.body)}export{l as M};