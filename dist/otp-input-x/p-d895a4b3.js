const t="otp-input-x";let e,n,l=!1;const o="undefined"!=typeof window?window:{},s=o.CSS,c=o.document||{head:{}},i={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},r=(()=>(c.head.attachShadow+"").indexOf("[native")>-1)(),a=t=>Promise.resolve(t),u=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),f=new WeakMap,p=t=>"sc-"+t.o,d={},$=t=>"object"==(t=typeof t)||"function"===t,y="undefined"!=typeof Deno,b=!(y||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),h=(y&&Deno,b?process:y&&Deno,b?process:y&&Deno,(t,e,...n)=>{let l=null,o=!1,s=!1,c=[];const i=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof t&&!$(l))&&(l+=""),o&&s?c[c.length-1].s+=l:c.push(o?m(null,l):l),s=o)};if(i(n),e){const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}const r=m(t,null);return r.i=e,c.length>0&&(r.u=c),r}),m=(t,e)=>({t:0,p:t,s:e,$:null,u:null,i:null}),w={},g=(t,e,n,l,o,s)=>{if(n!==l){let i=J(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,o=j(n),s=j(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else{const r=$(l);if((i||r&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?i=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(c){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!i||4&s||o)&&!r&&t.setAttribute(e,l=!0===l?"":l)}}},_=/\s/,j=t=>t?t.split(_):[],v=(t,e,n,l)=>{const o=11===e.$.nodeType&&e.$.host?e.$.host:e.$,s=t&&t.i||d,c=e.i||d;for(l in s)l in c||g(o,l,s[l],void 0,n,e.t);for(l in c)g(o,l,s[l],c[l],n,e.t)},S=(t,n,l)=>{let o,s,i=n.u[l],r=0;if(null!==i.s)o=i.$=c.createTextNode(i.s);else if(o=i.$=c.createElement(i.p),v(null,i,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),i.u)for(r=0;r<i.u.length;++r)s=S(t,i,r),s&&o.appendChild(s);return o},M=(t,e,l,o,s,c)=>{let i,r=t;for(r.shadowRoot&&r.tagName===n&&(r=r.shadowRoot);s<=c;++s)o[s]&&(i=S(null,l,s),i&&(o[s].$=i,r.insertBefore(i,e)))},k=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.$.remove()},x=(t,e)=>t.p===e.p,C=(t,e)=>{const n=e.$=t.$,l=t.u,o=e.u,s=e.s;null===s?(v(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,c=0,i=e.length-1,r=e[0],a=e[i],u=l.length-1,f=l[0],p=l[u];for(;s<=i&&c<=u;)null==r?r=e[++s]:null==a?a=e[--i]:null==f?f=l[++c]:null==p?p=l[--u]:x(r,f)?(C(r,f),r=e[++s],f=l[++c]):x(a,p)?(C(a,p),a=e[--i],p=l[--u]):x(r,p)?(C(r,p),t.insertBefore(r.$,a.$.nextSibling),r=e[++s],p=l[--u]):x(a,f)?(C(a,f),t.insertBefore(a.$,r.$),a=e[--i],f=l[++c]):(o=S(e&&e[c],n,c),f=l[++c],o&&r.$.parentNode.insertBefore(o,r.$));s>i?M(t,null==l[u+1]?null:l[u+1].$,n,l,c,u):c>u&&k(e,s,i)})(n,l,e,o):null!==o?(null!==t.s&&(n.textContent=""),M(n,null,e,o,0,o.length-1)):null!==l&&k(l,0,l.length-1)):t.s!==s&&(n.data=s)},O=t=>B(t).h,D=(t,e,n)=>{const l=O(t);return{emit:t=>P(l,e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t})}},P=(t,e,n)=>{const l=i.ce(e,n);return t.dispatchEvent(l),l},E=(t,e)=>{e&&!t.m&&e["s-p"]&&e["s-p"].push(new Promise(e=>t.m=e))},L=(t,e)=>{if(t.t|=16,!(4&t.t))return E(t,t.g),st(()=>R(t,e));t.t|=512},R=(t,e)=>{const n=t._;return H(void 0,()=>T(t,n,e))},T=(t,l,o)=>{const s=t.h,i=s["s-rc"];o&&(t=>{const e=t.j,n=t.h,l=e.t,o=((t,e)=>{let n=p(e),l=Y.get(n);if(t=11===t.nodeType?t:c,l)if("string"==typeof l){let e,o=f.get(t=t.head||t);o||f.set(t,o=new Set),o.has(n)||(e=c.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(r&&n.shadowRoot?n.shadowRoot:n.getRootNode(),e);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(t);((t,l)=>{const o=t.h,s=t.v||m(null,null),c=(t=>t&&t.p===w)(l)?l:h(null,null,l);n=o.tagName,c.p=null,c.t|=4,t.v=c,c.$=s.$=o.shadowRoot||o,e=o["s-sc"],C(s,c)})(t,U(t,l)),i&&(i.map(t=>t()),s["s-rc"]=void 0);{const e=s["s-p"],n=()=>q(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},U=(t,e)=>{try{e=e.render(),t.t&=-17,t.t|=2}catch(n){K(n)}return e},q=t=>{const e=t.h,n=t._,l=t.g;64&t.t||(t.t|=64,N(e),F(n,"componentDidLoad"),t.S(e),l||A()),t.m&&(t.m(),t.m=void 0),512&t.t&&ot(()=>L(t,!1)),t.t&=-517},A=()=>{N(c.documentElement),ot(()=>P(o,"appload",{detail:{namespace:"otp-input-x"}}))},F=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){K(l)}},H=(t,e)=>t&&t.then?t.then(e):e(),N=t=>t.classList.add("hydrated"),W=(t,e,n)=>{if(e.M){t.watchers&&(e.k=t.watchers);const l=Object.entries(e.M),o=t.prototype;if(l.map(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>B(this).C.get(e))(0,t)},set(n){((t,e,n,l)=>{const o=B(t),s=o.C.get(e),c=o.t,i=o._;if(n=((t,e)=>null==t||$(t)?t:2&e?parseFloat(t):1&e?t+"":t)(n,l.M[e][0]),!(8&c&&void 0!==s||n===s)&&(o.C.set(e,n),i)){if(l.k&&128&c){const t=l.k[e];t&&t.map(t=>{try{i[t](n,s,e)}catch(l){K(l)}})}2==(18&c)&&L(o,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){i.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},V=(t,e={})=>{const n=[],l=e.exclude||[],s=o.customElements,a=c.head,f=a.querySelector("meta[charset]"),d=c.createElement("style"),$=[];let y,b=!0;Object.assign(i,e),i.l=new URL(e.resourcesUrl||"./",c.baseURI).href,t.map(t=>t[1].map(e=>{const o={t:e[0],o:e[1],M:e[2],O:e[3]};o.M=e[2],o.k={},!r&&1&o.t&&(o.t|=8);const c=o.o,a=class extends HTMLElement{constructor(t){super(t),I(t=this,o),1&o.t&&(r?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){y&&(clearTimeout(y),y=null),b?$.push(this):i.jmp(()=>(t=>{if(0==(1&i.t)){const e=B(t),n=e.j,l=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){E(e,e.g=n);break}}n.M&&Object.entries(n.M).map(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),ot(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){{if(e.t|=32,(o=X(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(n.k=o.watchers,W(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(i){K(i)}e.t&=-9,e.t|=128,t()}if(o.style){let t=o.style;const e=p(n);if(!Y.has(e)){const l=()=>{};8&n.t&&(t=await __sc_import_otp_input_x("./p-ebb4d602.js").then(n=>n.scopeCss(t,e,!1))),((t,e,n)=>{let l=Y.get(t);u&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,Y.set(t,l)})(e,t,!!(1&n.t)),l()}}}const s=e.g,c=()=>L(e,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,e,n))}l()}})(this))}disconnectedCallback(){i.jmp(()=>(()=>{0==(1&i.t)&&F(B(this)._,"disconnectedCallback")})())}forceUpdate(){(()=>{{const t=B(this);t.h.isConnected&&2==(18&t.t)&&L(t,!1)}})()}componentOnReady(){return B(this).D}};o.P=t[0],l.includes(c)||s.get(c)||(n.push(c),s.define(c,W(a,o,1)))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),a.insertBefore(d,f?f.nextSibling:a.firstChild),b=!1,$.length?$.map(t=>t.connectedCallback()):i.jmp(()=>y=setTimeout(A,30))},z=new WeakMap,B=t=>z.get(t),G=(t,e)=>z.set(e._=t,e),I=(t,e)=>{const n={t:0,h:t,j:e,C:new Map};return n.D=new Promise(t=>n.S=t),t["s-p"]=[],t["s-rc"]=[],z.set(t,n)},J=(t,e)=>e in t,K=t=>console.error(t),Q=new Map,X=t=>{const e=t.o.replace(/-/g,"_"),n=t.P,l=Q.get(n);return l?l[e]:__sc_import_otp_input_x(`./${n}.entry.js`).then(t=>(Q.set(n,t),t[e]),K)},Y=new Map,Z=[],tt=[],et=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&i.t?ot(lt):i.raf(lt))},nt=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){K(e)}t.length=0},lt=()=>{nt(Z),nt(tt),(l=Z.length>0)&&i.raf(lt)},ot=t=>a().then(t),st=et(tt,!0);export{s as C,w as H,t as N,a,V as b,D as c,c as d,O as g,h,i as p,G as r,o as w}