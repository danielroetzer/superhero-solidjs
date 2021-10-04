const e=Symbol("solid-proxy"),t={equals:(e,t)=>e===t};let n=B;const r={},o={owned:null,cleanups:null,context:null,owner:null},[s,l]=g(!1);var i=null;let u=null,a=null,c=null,f=null,h=0,d=0;function p(e,t){t&&(i=t);const n=u,r=i,o=(e.length,{owned:null,cleanups:null,context:null,owner:r});let s;r&&(o.name=`${r.name}-r${d++}`),i=o,u=null;try{M((()=>s=e((()=>H(o)))),!0)}finally{u=n,i=r}return s}function g(e,n){n=n?Object.assign({},t,n):t;const o={value:e,observers:null,observerSlots:null,pending:r,comparator:n.equals||void 0};return n.internal||(o.name=function(e,t){let n=e;if(i){let r=0;for(i.sourceMap||(i.sourceMap={});i.sourceMap[n];)n=`${e}-${++r}`;i.sourceMap[n]=t}return n}(n.name||function(e){const t=new Set;return`s${K("string"==typeof e?e:JSON.stringify(e,((e,n)=>{if("object"==typeof n&&null!=n){if(t.has(n))return;t.add(n)}return"bigint"==typeof n?`${n.toString()}n`:n}))||"")}`}(e),o)),[L.bind(o),e=>("function"==typeof e&&(e=e(o.pending!==r?o.pending:o.value)),E(o,e))]}function v(e,t,n){T(O(e,t,!0,1,n))}function y(e,t,n){T(O(e,t,!1,1,n))}function m(e,t,r){n=q;const o=O(e,t,!1,1,r);o.user=!0,f&&f.push(o)}function b(e,n,o){const s=O(e,n,!0,0,o=o?Object.assign({},t,o):t);return s.pending=r,s.observers=null,s.observerSlots=null,s.comparator=o.equals||void 0,T(s),L.bind(s)}function w(e,t,n={}){2===arguments.length?"object"==typeof t&&(n=t,t=e,e=!0):1===arguments.length&&(t=e,e=!0);const r=new Set,[o,s]=g(n.initialValue),[l,i]=g(void 0,{equals:!1}),[a,c]=g(!1),[f,h]=g();let d,p=null,y=null,m="function"==typeof e;function b(e,t,n){return p===e&&(h(d=n),p=null,w(t)),t}function w(e){S((()=>{s((()=>e)),c(!1);for(const e of r.keys())e.decrement();r.clear()}))}function $(){const e=undefined,t=o();if(d)throw d;return u&&!u.user&&e&&v((()=>{l(),p&&(e.resolved||r.has(e)||(e.increment(),r.add(e)))})),t}function P(){h(d=void 0);const n=m?e():e;if(null==n||!1===n)return void b(p,A(o));const r=y||A((()=>t(n,o)));y=null,"object"==typeof r&&"then"in r?(p=r,S((()=>{c(!0),i()})),r.then((e=>b(r,e)),(e=>b(r,e,e)))):b(p,r)}return Object.defineProperties($,{loading:{get:()=>a()},error:{get:()=>f()}}),m?v(P):P(),[$,{refetch:P,mutate:s}]}function S(e){if(a)return e();let t;const n=a=[];try{t=e()}finally{a=null}return M((()=>{for(let e=0;e<n.length;e+=1){const t=n[e];if(t.pending!==r){const e=t.pending;t.pending=r,E(t,e)}}}),!1),t}function A(e){let t,n=u;return u=null,t=e(),u=n,t}function $(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return n=>{let l;if(r){l=[];for(let t=0;t<e.length;t++)l.push(e[t]())}else l=e();if(s)return void(s=!1);const i=A((()=>t(l,o,n)));return o=l,i}}function P(e){return null===i?console.warn("cleanups created outside a `createRoot` or `render` will never be run"):null===i.cleanups?i.cleanups=[e]:i.cleanups.push(e),e}function x(e,t){S(e),t&&t()}function N(e){const t=Symbol("context");return{id:t,Provider:_(t),defaultValue:e}}function C(e){return U(i,e.id)||e.defaultValue}function k(e){const t=b(e);return b((()=>V(t())))}function L(){if(this.state&&this.sources){const e=c;c=null,1===this.state?T(this):D(this),c=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function E(e,t,n){if(e.comparator&&e.comparator(e.value,t))return t;if(a)return e.pending===r&&a.push(e),e.pending=t,t;let o=!1;return e.value=t,e.observers&&e.observers.length&&M((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];o,n.pure?c.push(n):f.push(n),n.observers&&!n.state&&R(n),n.state=1}if(c.length>1e6)throw c=[],new Error("Potential Infinite Loop Detected.")}),!1),t}function T(e){if(!e.fn)return;H(e);const t=i,n=u,r=h;u=i=e,function(e,t,n){let r;try{r=e.fn(t)}catch(o){F(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?E(e,r):e.value=r,e.updatedAt=n)}(e,e.value,r),u=n,i=t}function O(e,t,n,r=1,s){const l={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:i,context:null,pure:n};return null===i?console.warn("computations created outside a `createRoot` or `render` will never be disposed"):i!==o&&(i.owned?i.owned.push(l):i.owned=[l],l.name=s&&s.name||`${i.name||"c"}-${(i.owned||i.tOwned).length}`),l}function j(e){if(1!==e.state)return e.state=0;if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<h);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(1===(e=t[n]).state)T(e);else if(2===e.state){const t=c;c=null,D(e),c=t}}function M(e,t){if(c)return e();let r=!1;t||(c=[]),f?r=!0:f=[],h++;try{e()}catch(o){F(o)}finally{!function(e){c&&(B(c),c=null);if(e)return;f.length?S((()=>{n(f),f=null})):(f=null,globalThis._$afterUpdate&&globalThis._$afterUpdate())}(r)}}function B(e){for(let t=0;t<e.length;t++)j(e[t])}function q(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:j(r)}const r=e.length;for(t=0;t<n;t++)j(e[t]);for(t=r;t<e.length;t++)j(e[t])}function D(e){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];n.sources&&(1===n.state?j(n):2===n.state&&D(n))}}function R(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=2,n.pure?c.push(n):f.push(n),n.observers&&R(n))}}function H(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),r=t.observers;if(r&&r.length){const e=r.pop(),o=t.observerSlots.pop();n<r.length&&(e.sourceSlots[o]=n,r[n]=e,t.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)H(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function F(e){throw e}function U(e,t){return e&&(e.context&&e.context[t]||e.owner&&U(e.owner,t))}function V(e){if("function"==typeof e&&!e.length)return V(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=V(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function _(e){return function(t){let n;return v((()=>n=A((()=>(i.context={[e]:t.value},k((()=>t.children))))))),n}}function K(e){for(var t=0,n=9;t<e.length;)n=Math.imul(n^e.charCodeAt(t++),9**9);return""+(n^n>>>9)}const G=Symbol("fallback");function X(e){for(let t=0;t<e.length;t++)e[t]()}function z(e,t){return function(e,t){const n=O((()=>A((()=>e(t)))),void 0,!0);return n.pending=r,n.observers=null,n.observerSlots=null,n.state=0,n.componentName=e.name,T(n),void 0!==n.tValue?n.tValue:n.value}(e,t)}function I(){return!0}const W={get:(t,n,r)=>n===e?r:t.get(n),has:(e,t)=>e.has(t),set:I,deleteProperty:I,getOwnPropertyDescriptor:(e,t)=>({configurable:!0,enumerable:!0,get:()=>e.get(t),set:I,deleteProperty:I}),ownKeys:e=>e.keys()};function J(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const r=e[n][t];if(void 0!==r)return r}},has(t){for(let n=e.length-1;n>=0;n--)if(t in e[n])return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(e[n]));return[...new Set(t)]}},W)}function Y(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),o=t.map((t=>{const n={};for(let o=0;o<t.length;o++){const s=t[o];Object.defineProperty(n,s,r[s]?r[s]:{get:()=>e[s]})}return n}));return o.push(new Proxy({get:t=>n.has(t)?void 0:e[t],has:t=>!n.has(t)&&t in e,keys:()=>Object.keys(e).filter((e=>!n.has(e)))},W)),o}function Q(e){let t;const n=n=>{if(t){const e=t();if(e)return e(n)}else{const[n]=w((()=>e().then((e=>e.default))));t=n}let r;return b((()=>(r=t())&&A((()=>r(n)))))};return n.preload=()=>t||e().then((e=>t=()=>e.default)),n}function Z(e){const t="fallback"in e&&{fallback:()=>e.fallback};return b(function(e,t,n={}){let r=[],o=[],s=[],l=0,i=t.length>1?[]:null;return P((()=>X(s))),()=>{let u,a,c=e()||[];return A((()=>{let e,t,h,d,g,v,y,m,b,w=c.length;if(0===w)0!==l&&(X(s),s=[],r=[],o=[],l=0,i&&(i=[])),n.fallback&&(r=[G],o[0]=p((e=>(s[0]=e,n.fallback()))),l=1);else if(0===l){for(o=new Array(w),a=0;a<w;a++)r[a]=c[a],o[a]=p(f);l=w}else{for(h=new Array(w),d=new Array(w),i&&(g=new Array(w)),v=0,y=Math.min(l,w);v<y&&r[v]===c[v];v++);for(y=l-1,m=w-1;y>=v&&m>=v&&r[y]===c[m];y--,m--)h[m]=o[y],d[m]=s[y],i&&(g[m]=i[y]);for(e=new Map,t=new Array(m+1),a=m;a>=v;a--)b=c[a],u=e.get(b),t[a]=void 0===u?-1:u,e.set(b,a);for(u=v;u<=y;u++)b=r[u],a=e.get(b),void 0!==a&&-1!==a?(h[a]=o[u],d[a]=s[u],i&&(g[a]=i[u]),a=t[a],e.set(b,a)):s[u]();for(a=v;a<w;a++)a in h?(o[a]=h[a],s[a]=d[a],i&&(i[a]=g[a],i[a](a))):o[a]=p(f);o=o.slice(0,l=w),r=c.slice(0)}return o}));function f(e){if(s[a]=e,i){const[e,n]=g(a);return i[a]=n,t(c[a],e)}return t(c[a])}}}((()=>e.each),e.children,t||void 0))}function ee(e){let t=!1;const n=b((()=>e.when),void 0,{equals:(e,n)=>t?e===n:!e==!n});return b((()=>{const r=n();if(r){const n=e.children;return(t="function"==typeof n&&n.length>0)?A((()=>n(r))):n}return e.fallback}))}globalThis&&(globalThis.Solid$$?console.warn("You appear to have multiple instances of Solid. This can lead to unexpected behavior."):globalThis.Solid$$=!0);const te=new Set(["className","indeterminate","value","readOnly","allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","ismap","itemscope","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected","truespeed"]),ne=new Set(["innerHTML","textContent","innerText","children"]),re={className:"class",htmlFor:"for"},oe={class:"className",readonly:"readOnly"},se=new Set(["beforeinput","click","dblclick","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),le={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function ie(e,t,n){let r=n.length,o=t.length,s=r,l=0,i=0,u=t[o-1].nextSibling,a=null;for(;l<o||i<s;)if(t[l]!==n[i]){for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const t=s<r?i?n[i-1].nextSibling:n[s-i]:u;for(;i<s;)e.insertBefore(n[i++],t)}else if(s===i)for(;l<o;)a&&a.has(t[l])||e.removeChild(t[l]),l++;else if(t[l]===n[s-1]&&n[i]===t[o-1]){const r=t[--o].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--s],r),t[o]=n[s]}else{if(!a){a=new Map;let e=i;for(;e<s;)a.set(n[e],e++)}const r=a.get(t[l]);if(null!=r)if(i<r&&r<s){let u,c=l,f=1;for(;++c<o&&c<s&&null!=(u=a.get(t[c]))&&u===r+f;)f++;if(f>r-i){const o=t[l];for(;i<r;)e.insertBefore(n[i++],o)}else e.replaceChild(n[i++],t[l++])}else l++;else e.removeChild(t[l++])}}else l++,i++}function ue(e,t,n){let r;return p((o=>{r=o,ve(t,e(),t.firstChild?null:void 0,n)})),()=>{r(),t.textContent=""}}function ae(e,t,n){const r=document.createElement("template");if(r.innerHTML=e,t&&r.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:\n${r.innerHTML}\n\n${e}. Is your HTML properly formed?`;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function ce(e,t=window.document){const n=t._$DX_DELEGATE||(t._$DX_DELEGATE=new Set);for(let r=0,o=e.length;r<o;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,me))}}function fe(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function he(e,t,n,r){null==r?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function de(e,t,n,r){r?Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n:Array.isArray(n)?e.addEventListener(t,(e=>n[0](n[1],e))):e.addEventListener(t,n)}function pe(e,t,n={}){const r=Object.keys(t),o=Object.keys(n);let s,l;for(s=0,l=o.length;s<l;s++){const r=o[s];r&&"undefined"!==r&&!(r in t)&&(ye(e,r,!1),delete n[r])}for(s=0,l=r.length;s<l;s++){const o=r[s],l=!!t[o];o&&"undefined"!==o&&n[o]!==l&&(ye(e,o,l),n[o]=l)}return n}function ge(e,t,n={}){const r=e.style;if("string"==typeof t)return r.cssText=t;let o,s;for(s in"string"==typeof n&&(n={}),n)null==t[s]&&r.removeProperty(s),delete n[s];for(s in t)o=t[s],o!==n[s]&&(r.setProperty(s,o),n[s]=o);return n}function ve(e,t,n,r){if(void 0===n||r||(r=[]),"function"!=typeof t)return we(e,t,r,n);y((r=>we(e,t(),r,n)),r)}function ye(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,s=r.length;o<s;o++)e.classList.toggle(r[o],n)}function me(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>n});null!==n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(void 0!==o?r(o,e):r(e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function be(e,t,n={},r,o){return!o&&"children"in t&&y((()=>n.children=we(e,t.children,n.children))),y((()=>function(e,t,n,r,o={}){let s,l,i;for(const a in t){if("children"===a){r||we(e,t.children);continue}const c=t[a];if(c!==o[a]){if("style"===a)ge(e,c,o[a]);else if("classList"===a)pe(e,c,o[a]);else if("ref"===a)c(e);else if("on:"===a.slice(0,3))e.addEventListener(a.slice(3),c);else if("oncapture:"===a.slice(0,10))e.addEventListener(a.slice(10),c,!0);else if("on"===a.slice(0,2)){const t=a.slice(2).toLowerCase(),n=se.has(t);de(e,t,c,n),n&&ce([t])}else if((i=ne.has(a))||!n&&(oe[a]||(l=te.has(a)))||(s=e.nodeName.includes("-")))!s||l||i?e[oe[a]||a]=c:e[(u=a,u.toLowerCase().replace(/-([a-z])/g,((e,t)=>t.toUpperCase())))]=c;else{const t=n&&a.indexOf(":")>-1&&le[a.split(":")[0]];t?he(e,t,a,c):fe(e,re[a]||a,c)}o[a]=c}}var u}(e,t,r,!0,n))),n}function we(e,t,n,r,o){for(;"function"==typeof n;)n=n();if(t===n)return n;const s=typeof t,l=void 0!==r;if(e=l&&n[0]&&n[0].parentNode||e,"string"===s||"number"===s)if("number"===s&&(t=t.toString()),l){let o=n[0];o&&3===o.nodeType?o.data=t:o=document.createTextNode(t),n=$e(e,n,r,o)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t;else if(null==t||"boolean"===s)n=$e(e,n,r);else{if("function"===s)return y((()=>{let o=t();for(;"function"==typeof o;)o=o();n=we(e,o,n,r)})),()=>n;if(Array.isArray(t)){const s=[];if(Se(s,t,o))return y((()=>n=we(e,s,n,r,!0))),()=>n;if(0===s.length){if(n=$e(e,n,r),l)return n}else Array.isArray(n)?0===n.length?Ae(e,s,r):ie(e,n,s):null==n||""===n?Ae(e,s):ie(e,l&&n||[e.firstChild],s);n=s}else if(t instanceof Node){if(Array.isArray(n)){if(l)return n=$e(e,n,r,t);$e(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function Se(e,t,n){let r=!1;for(let o=0,s=t.length;o<s;o++){let s,l=t[o];if(l instanceof Node)e.push(l);else if(null==l||!0===l||!1===l);else if(Array.isArray(l))r=Se(e,l)||r;else if("string"==(s=typeof l))e.push(document.createTextNode(l));else if("function"===s)if(n){for(;"function"==typeof l;)l=l();r=Se(e,Array.isArray(l)?l:[l])||r}else e.push(l),r=!0;else e.push(document.createTextNode(l.toString()))}return r}function Ae(e,t,n){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function $e(e,t,n,r){if(void 0===n)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let r=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const t=l.parentNode===e;r||s?t&&e.removeChild(l):t?e.replaceChild(o,l):e.insertBefore(o,n)}else r=!0}}else e.insertBefore(o,n);return[o]}function Pe(e){const{useShadow:t}=e,n=document.createTextNode(""),r=e.mount||document.body;function o(){return()=>e.children}if(r instanceof HTMLHeadElement){const[e,t]=g(!1),n=()=>t(!0);p((t=>ve(r,(()=>e()?t():o()()),null))),P((()=>{n()}))}else{const s=function(e,t=!1){return t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e)}(e.isSVG?"g":"div",e.isSVG),l=t&&s.attachShadow?s.attachShadow({mode:"open"}):s;Object.defineProperty(s,"host",{get:()=>n.parentNode}),ve(l,o()),r.appendChild(s),e.ref&&e.ref(s),P((()=>r.removeChild(s)))}return n}function xe(){return function(e,t,n,r){let o=!1;const s=function([e,t],n,r){return[n?()=>n(e()):e,r?e=>t(r(e)):t]}(g({value:e()},{equals:(e,t)=>e.value===t.value}),void 0,(e=>(!o&&t(e),e)));return n&&P(n(((t=e())=>{o=!0,s[1]({value:t}),o=!1}))),{signal:s,utils:r}}((()=>window.location.pathname+window.location.search),(({value:e,replace:t})=>{t?window.history.replaceState(null,"",e):window.history.pushState(null,"",e),window.scrollTo(0,0)}),(e=>{return t=window,n="popstate",r=()=>e(),t.addEventListener(n,r),()=>t.removeEventListener(n,r);var t,n,r}))}const Ne=/^(?:[a-z0-9]+:)?\/\//i,Ce=/^\/+|\/+$|\s+/;function ke(e){const t=e.replace(Ce,"");return t?"/"+t:""}function Le(e,t,n){if(Ne.test(t))return;const r=ke(e),o=n&&ke(n);let s="";return s=o&&"/"!==t.charAt(0)?0!==o.toLowerCase().indexOf(r.toLowerCase())?r+o:o:r,s+ke(t)||"/"}function Ee(e,t){const[n,r]=e.split("/*",2),o=n.split("/").filter(Boolean),s=o.length;return e=>{const n=e.split("/").filter(Boolean),l=n.length-s;if(l<0||l>0&&void 0===r&&!t)return null;const i={path:s?"":"/",params:{}};for(let t=0;t<s;t++){const e=o[t],r=n[t];if(":"===e[0])i.params[e.slice(1)]=r;else if(0!==e.localeCompare(r,void 0,{sensitivity:"base"}))return null;i.path+=`/${r}`}return r&&(i.params[r]=l?n.slice(-l).join("/"):""),i}}function Te(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce(((e,t)=>e+(t.startsWith(":")?2:3)),r.length-(void 0===n?0:1))}function Oe(e){const t=new Map,n=i;return new Proxy({},{get:(r,o)=>(t.get(o)||function(e,t){const n=i;i=e;try{return t()}finally{i=n}}(n,(()=>{const n=b((()=>e()[o]));return t.set(o,n),n})))()})}const je=N(),Me=N(),Be=()=>function(e,t){if(null==e)throw new Error(t);return e}(C(je),"Make sure your app is wrapped in a <Router />"),qe=()=>C(Me)||Be().base,De=e=>{const t=qe();return b((()=>t.resolvePath(e())))};function Re(e,t="",n){const{path:r,component:o,data:s,children:l}=e,i=!l||Array.isArray(l)&&!l.length,u=(a=r,`${t.replace(/[/*]+$/,"")}/${a.replace(/^\/+/,"")}`);var a;const c=i?u:u.split("/*",1)[0];return{originalPath:r,pattern:c,element:o?()=>z(o,{}):()=>{const{element:t}=e;return void 0===t&&n?z(n,{}):t},preload:e.component?o.preload:e.preload,data:s,matcher:Ee(c,!i)}}function He(e,t=0){return{routes:e,score:1e4*Te(e[e.length-1])-t,matcher(t){const n=[];for(let r=e.length-1;r>=0;r--){const o=e[r],s=o.matcher(t);if(!s)return null;n.unshift({...s,route:o})}return n}}}function Fe(e,t="",n,r=[],o=[]){const s=Array.isArray(e)?e:[e];for(let l=0,i=s.length;l<i;l++){const e=s[l],i=Re(e,t,n);if(r.push(i),e.children)Fe(e.children,i.pattern,n,r,o);else{const e=He([...r],o.length);o.push(e)}r.pop()}return r.length?o:o.sort(((e,t)=>t.score-e.score))}function Ue(e,t="",n,r){const{signal:[o,l],utils:i}=function(e){return e?Array.isArray(e)?{signal:e}:e:{signal:g({value:""})}}(e),u=Le("",t);if(void 0===u)throw new Error(`${u} is not a valid base path`);u&&!o().value&&l({value:u,replace:!0});const[a,c]=[s,x],[f,h]=g(o().value),d=function(e){const t=new URL("http://sar"),n=b((n=>{const r=e();try{return new URL(r,t)}catch(o){return console.error(`Invalid path ${r}`),n}}),t,{equals:(e,t)=>e.href===t.href}),r=b((()=>n().pathname)),o=b((()=>n().search.slice(1))),s=b((()=>n().hash.slice(1))),l=b((()=>null)),i=b((()=>""));return{get pathname(){return r()},get search(){return o()},get hash(){return s()},get state(){return l()},get key(){return i()},query:Oe($(o,(()=>function(e){const t={};return e.searchParams.forEach(((e,n)=>{t[n]=e})),t}(n()))))}}(f),p=[],v={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath:e=>Le(u,e)};function m(e){return e=e||C(Me)||v,(t,n)=>function(e,t,n){A((()=>{if("number"==typeof t)return void console.warn("Relative navigation is not implemented - doing nothing :)");const{replace:r,resolve:o}={replace:!1,resolve:!0,...n},s=o?e.resolvePath(t):Le("",t);if(void 0===s)throw new Error(`Path '${t}' is not a routable path`);if(p.length>=100)throw new Error("Too many redirects");const l=f();s!==l&&(p.push({value:l,replace:r}),c((()=>h(s))))}))}(e,t,n)}return n&&(v.data=n({params:{},location:d,navigate:m(v)})),y((()=>{c((()=>h(o().value)))})),y((()=>{!function(e){const t=p.shift();t&&(e!==t.value&&l({value:e,replace:t.replace}),p.length=0)}(f())})),{base:v,out:void 0,location:d,isRouting:a,renderPath:i&&i.renderPath||(e=>e),navigatorFactory:m}}function Ve(e,t,n,r){const{base:o,location:s,navigatorFactory:l}=e,{pattern:i,element:u,preload:a,data:c}=r().route,f=b((()=>r().path)),h=Oe((()=>r().params));a&&a();const d={parent:t,pattern:i,get child(){return n()},path:f,params:h,outlet:u,resolvePath:e=>Le(o.path(),e,f())};return c&&(d.data=c({params:h,location:s,navigate:l(d)})),d}const _e=ae("<a></a>",2),Ke=e=>{const{source:t,url:n,base:r,data:o,out:s}=e,l=Ue(t||xe(),r,o);return z(je.Provider,{value:l,get children(){return e.children}})},Ge=e=>{const t=Be(),n=qe(),r=De((()=>e.base||"")),o=b((()=>Fe(e.children,r()||"",ze))),s=b((()=>function(e,t){for(let n=0,r=e.length;n<r;n++){const r=e[n].matcher(t);if(r)return r}return[]}(o(),t.location.pathname)));t.out&&t.out.matches.push(s().map((({route:e,path:t,params:n})=>({originalPath:e.originalPath,pattern:e.pattern,path:t,params:n}))));const l=[];let i;const u=b($(s,((e,r,o)=>{let a=r&&e.length===r.length;const c=[];for(let i=0,f=e.length;i<f;i++){const f=r&&r[i],h=e[i];o&&f&&h.route.pattern===f.route.pattern?c[i]=o[i]:(a=!1,l[i]&&l[i](),p((e=>{l[i]=e,c[i]=Ve(t,c[i-1]||n,(()=>u()[i+1]),(()=>s()[i]))})))}return l.splice(e.length).forEach((e=>e())),o&&a?o:(i=c[0],c)})));return z(ee,{get when(){return u()&&i},children:e=>z(Me.Provider,{value:e,get children(){return e.outlet()}})})},Xe=e=>e,ze=()=>{const e=qe();return z(ee,{get when(){return e.child},children:e=>z(Me.Provider,{value:e,get children(){return e.outlet()}})})};function Ie(e){const[,t]=Y(e,["children","to","href","onClick"]),n=Be().navigatorFactory(),r=(e=>{const t=Be();return b((()=>{const n=e();return void 0!==n?t.renderPath(n):n}))})((()=>e.to)),o=t=>{const{onClick:r,to:o,target:s}=e;"function"==typeof r?r(t):r&&r[0](r[1],t),void 0===o||t.defaultPrevented||0!==t.button||s&&"_self"!==s||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),n(o,{resolve:!1,replace:e.replace||!1}))};return(()=>{const n=_e.cloneNode(!0);var s,l,i,u;return n.$$click=o,s=n,i=!1,u=!0,"function"==typeof(l=t)?y((e=>be(s,l(),e,i,u))):be(s,l,void 0,i,u),ve(n,(()=>e.children)),y((()=>fe(n,"href",r()||e.href))),n})()}function We(e){e=J({activeClass:"active"},e);const[,t]=Y(e,["activeClass","end"]),n=Be().location,r=De((()=>e.href)),o=b((()=>{const t=r();if(void 0===t)return!1;const o=t.split(/[?#]/,1)[0].toLowerCase(),s=n.pathname.toLowerCase();return e.end?o===s:s.startsWith(o)}));return z(Ie,J(t,{get to(){return r()},get classList(){return{[e.activeClass]:o()}},get"aria-current"(){return o()?"page":void 0}}))}ce(["click"]);const Je=Array.isArray,Ye=Object.keys;function Qe(e,t,n=!1){let r=0;const o=Array(t.length);for(;r<t.length;)o[r]=n?e(t[r],r):e(t[r]),r++;return o}function Ze(e,t){let n=0;const r=Ye(t),o=r.length,s={};for(;n<o;){const o=r[n];s[o]=e(t[o],o,t),n++}return s}function et(e,t){return 1===arguments.length?t=>et(e,t):void 0===t?[]:Je(t)?Qe(e,t):Ze(e,t)}function tt(e,t,n){let r=-1,{length:o}=e;(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;const s=Array(o);for(;++r<o;)s[r]=e[r+t];return s}function nt(e){return e.reduce(((e,t)=>e+t),0)}function rt(...e){if(0===e.length)throw new Error("pipe requires at least one argument");return(...t)=>{const n=e.slice();if(n.length>0){let e=n.shift()(...t);for(;n.length>0;)e=n.shift()(e);return e}}}function ot(e,t){if(1===arguments.length)return t=>ot(e,t);const n=t.slice();return n.sort(e)}function st(e,t){return 1===arguments.length?t=>st(e,t):e<0?t.slice():"string"==typeof t?t.slice(0,e):tt(t,0,e)}function lt(e,t){if(1===arguments.length)return t=>lt(e,t);const n=t.length;if(e<0)return t.slice();let r=e>n?n:e;return"string"==typeof t?t.slice(n-r):(r=n-r,tt(t,r,n))}function it(e){return"Object"!==function(e){const t=typeof e;if(null===e)return"Null";if(void 0===e)return"Undefined";if("boolean"===t)return"Boolean";if("number"===t)return Number.isNaN(e)?"NaN":"Number";if("string"===t)return"String";if(Je(e))return"Array";if("symbol"===t)return"Symbol";if(e instanceof RegExp)return"RegExp";const n=e&&e.toString?e.toString():"";return["true","false"].includes(n)?"Boolean":Number.isNaN(Number(n))?n.startsWith("async")?"Async":"[object Promise]"===n?"Promise":"function"===t?"Function":e instanceof String?"String":"Object":"Number"}(e)?[]:Object.values(e)}(function e(t,n=[]){return(...r)=>{return(o=[...n,...r]).length>=t.length?t(...o):e(t,o);var o}})((function(e,t,n){if(!Je(n))throw new TypeError("reduce: list must be array or iterable");let r=0;const o=n.length;for(;r<o;)t=e(t,n[r],r,n),r++;return t}))((function e(t,n){return 1===arguments.length?n=>e(t,n):t*n}),1);export{Z as F,We as N,Pe as P,Xe as R,ee as S,Ge as a,y as b,z as c,w as d,m as e,Ke as f,g,b as h,ve as i,st as j,lt as k,Q as l,et as m,nt as n,ce as o,rt as p,fe as q,ue as r,ot as s,ae as t,Y as u,it as v,de as w};
