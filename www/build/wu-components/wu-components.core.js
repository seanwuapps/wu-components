/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='wu-components']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,e,t,o,i){"use strict";function c(n,e,t,o,i,c,f){let l=t.n+(o||W),r=t[l];if(r||(r=t[l=t.n+W]),r){let o=e.e;if(e.t)if(1===t.encapsulation)o=i.shadowRoot;else for(;i=e.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[l]){f=r.content.cloneNode(!0);const t=o.querySelectorAll("[data-styles]");e.c(o,f,t.length&&t[t.length-1].nextSibling||o.f),c[l]=!0,n.i.set(o,c)}}}function f(n){return{l:n[0],r:n[1],s:!!n[2],u:!!n[3],a:!!n[4]}}function l(n,e){if(O(e)){if(n===Boolean||3===n)return"false"!==e&&(""===e||!!e);if(n===Number||4===n)return parseFloat(e)}return e}function r(n,e,t,o){const i=n.p.get(e);i&&((o=i.$activeLoading)&&((t=o.indexOf(e))>-1&&o.splice(t,1),!o.length&&i.$initLoad()),n.p.delete(e))}function s(n,e,t){let o,i=!1,c=!1;for(var f=arguments.length;f-- >2;)A.push(arguments[f]);for(;A.length;)if((t=A.pop())&&void 0!==t.pop)for(f=t.length;f--;)A.push(t[f]);else"boolean"==typeof t&&(t=null),(c="function"!=typeof n)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(c=!1)),c&&i?o[o.length-1].d+=t:void 0===o?o=[c?u(t):t]:o.push(c?u(t):t),i=c;const l=new L;if(l.m=n,l.v=o,e&&(l.w=e,l.y=e.b,l.M=e.ref,e.className&&(e.class=e.className),"object"==typeof e.class)){for(f in e.class)e.class[f]&&A.push(f);e.class=A.join(" "),A.length=0}return l}function u(n){const e=new L;return e.d=n,e}function a(n,e){n.g.has(e)||(n.g.set(e,!0),n.k.add(()=>{(function n(e,t,o,i,c){if(e.g.delete(t),!e.C.has(t)){let f;if(i=e.W.get(t),o=!i){if((c=e.p.get(t))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(e,t)});i=function f(n,e,t,o,i,c){try{(function f(n,e,t,o,i,c){for(c in n.N.set(o,t),n.j.has(t)||n.j.set(t,{}),(i=Object.assign({color:{type:String}},e.properties)).mode={type:String},i)d(n,i[c],t,o,c)})(n,o=n.x(e).O,e,t=new o)}catch(o){t={},n.S(o,7,e,!0)}return n.W.set(e,t),t}(e,t);try{i.componentWillLoad&&(f=i.componentWillLoad())}catch(n){e.S(n,3,t)}}f&&f.then?f.then(()=>p(e,t,i,o)):p(e,t,i,o)}})(n,e)},n.T?1:3))}function p(n,e,t,o){(function i(n,e,t,o,c){try{const i=e.O.host;if(o.render||o.hostData||i){n.A=!0;const i=o.render&&o.render();let f;n.A=!1;const l=n.L.get(t)||new L;l.P=t,n.L.set(t,n.render(l,s(null,f,i),c,n.R.get(t),n.q.get(t),e.O.encapsulation))}n.B(n,n.D,e,o.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}catch(e){n.A=!1,n.S(e,8,t,!0)}})(n,n.x(e),e,t,!o);try{o?e.$initLoad():M(n.L.get(e))}catch(t){n.S(t,6,e,!0)}}function d(n,e,t,o,i){if(e.type||e.state){const c=n.j.get(t);if(!e.state){if(e.attr&&(void 0===c[i]||""===c[i])){const o=n.D.H(t,e.attr);null!=o&&(c[i]=l(e.type,o))}t.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=t[i]),delete t[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),e.watchCallbacks&&(c[P+i]=e.watchCallbacks.slice()),w(o,i,function c(e){return(e=n.j.get(n.N.get(this)))&&e[i]},function f(t,o){(o=n.N.get(this))&&(e.state||e.mutable)&&m(n,o,i,t)})}else e.elementRef&&v(o,i,t)}function m(n,e,t,o,i,c,f){(i=n.j.get(e))||n.j.set(e,i={}),o!==i[t]&&(i[t]=o,n.W.get(e)&&(i[P+t],!n.A&&e.$rendered&&a(n,e)))}function v(n,e,t){Object.defineProperty(n,e,{configurable:!0,value:t})}function w(n,e,t,o){Object.defineProperty(n,e,{configurable:!0,get:t,set:o})}function h(n,e,t,o,i){const c=11===t.P.nodeType&&t.P.host?t.P.host:t.P,f=e&&e.w||E,l=t.w||E;for(i in f)l&&null!=l[i]||null==f[i]||y(n,c,i,f[i],void 0,o);for(i in l)i in f&&l[i]===("value"===i||"checked"===i?c[i]:f[i])||y(n,c,i,f[i],l[i],o)}function y(n,e,t,o,i,c,f,l){if("class"!==t||c)if("style"===t){for(f in o=o||E,i=i||E,o)i[f]||(e.style[f]="");for(f in i)i[f]!==o[f]&&(e.style[f]=i[f])}else if("o"!==t[0]||"n"!==t[1]||t in e)if("list"!==t&&"type"!==t&&!c&&(t in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.x(e);o&&o.F&&o.F[t]?b(e,t,i):"ref"!==t&&(b(e,t,null==i?"":i),null!=i&&!1!==i||e.removeAttribute(t))}else null!=i&&(f=t!==(t=t.replace(/^xlink\:?/,"")),1!==R[t]||i&&"false"!==i?"function"!=typeof i&&(f?e.setAttributeNS(q,S(t),i):e.setAttribute(t,i)):f?e.removeAttributeNS(q,S(t)):e.removeAttribute(t));else t=S(t.substring(2)),i?i!==o&&n.D.z(e,t,i):n.D.I(e,t);else if(o!==i){const n=null==o||""===o?N:o.trim().split(/\s+/),t=null==i||""===i?N:i.trim().split(/\s+/);let c=null==e.className||""===e.className?N:e.className.trim().split(/\s+/);for(f=0,l=n.length;f<l;f++)-1===t.indexOf(n[f])&&(c=c.filter(e=>e!==n[f]));for(f=0,l=t.length;f<l;f++)-1===n.indexOf(t[f])&&(c=[...c,t[f]]);e.className=c.join(" ")}}function b(n,e,t){try{n[e]=t}catch(n){}}function M(n,e){n&&(n.M&&n.M(e?null:n.P),n.v&&n.v.forEach(n=>{M(n,e)}))}function $(n,e,t,o,i){const c=n.Q(e);let f,l,r,s;if(i&&1===c){(l=n.H(e,C))&&(r=l.split("."))[0]===o&&((s=new L).m=n.U(s.P=e),t.v||(t.v=[]),t.v[r[1]]=s,t=s,i=""!==r[2]);for(let c=0;c<e.childNodes.length;c++)$(n,e.childNodes[c],t,o,i)}else 3===c&&(f=e.previousSibling)&&8===n.Q(f)&&"s"===(r=n.G(f).split("."))[0]&&r[1]===o&&((s=u(n.G(e))).P=e,t.v||(t.v=[]),t.v[r[2]]=s)}function g(n,e,t,o){return function(){const i=arguments;return function c(n,e,t){return new Promise(o=>{let i=e[t];i||(i=n.J.querySelector(t)),i||(i=e[t]=n.K(t),n.V(n.J,i)),i.componentOnReady(o)})}(n,e,t).then(n=>n[o].apply(n,i))}}const k="data-ssrv",C="data-ssrc",W="$",E={},N=[],j={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},O=n=>void 0!==n&&null!==n,x=n=>void 0===n||null===n,S=n=>n.toLowerCase(),T=()=>{},A=[];class L{}const P="wc-",R={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},q="http://www.w3.org/1999/xlink";let B=!1;(function D(e,t,o,i,u,p){const d={html:{}},y={},b=o[e]=o[e]||{},C=function E(n,e,t){n.X||(n.X=((n,e,t,o)=>n.addEventListener(e,t,o)),n.Y=((n,e,t,o)=>n.removeEventListener(e,t,o)));const o=new WeakMap,i={Z:t.documentElement,e:t.head,J:t.body,_:!1,Q:n=>n.nodeType,K:n=>t.createElement(n),nn:(n,e)=>t.createElementNS(n,e),en:n=>t.createTextNode(n),tn:n=>t.createComment(n),c:(n,e,t)=>n.insertBefore(e,t),on:n=>n.remove(),V:(n,e)=>n.appendChild(e),in:n=>n.childNodes,o:n=>n.parentNode,cn:n=>n.nextSibling,U:n=>S(n.tagName),G:n=>n.textContent,fn:(n,e)=>n.textContent=e,H:(n,e)=>n.getAttribute(e),ln:(n,e,t)=>n.setAttribute(e,t),rn:(n,e,t,o)=>n.setAttributeNS(e,t,o),sn:(n,e)=>n.removeAttribute(e),un:(n,o)=>"child"===o?n.firstElementChild:"parent"===o?i.an(n):"body"===o?i.J:"document"===o?t:"window"===o?e:n,z:(e,t,c,f,l,r,s,u)=>{const a=t;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof r?p=i.un(e,r):"object"==typeof r?p=r:(u=t.split(":")).length>1&&(p=i.un(e,u[0]),t=u[1]),!p)return;let m=c;(u=t.split(".")).length>1&&(t=u[0],m=(n=>{n.keyCode===j[u[1]]&&c(n)})),s=i._?{capture:!!f,passive:!!l}:!!f,n.X(p,t,m,s),d||o.set(e,d={}),d[a]=(()=>{p&&n.Y(p,t,m,s),d[a]=null})},I:(n,e)=>{const t=o.get(n);t&&(e?t[e]&&t[e]():Object.keys(t).forEach(n=>{t[n]&&t[n]()}))},pn:(n,t,o)=>n&&n.dispatchEvent(new e.CustomEvent(t,o)),an:(n,e)=>(e=i.o(n))&&11===i.Q(e)?e.host:e};return i}(b,o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=u,b.h=s,b.Context=t;const N=o.$definedCmps=o.$definedCmps||{},A={dn:function P(n,e){e.mode||(e.mode=C.H(e,"mode")||t.mode),C.H(e,k)||function o(n,e){return n&&1===e.encapsulation}(C.t,n)||function i(n,e,t,o,c,f,l,r,s){for(t.$defaultHolder||e.c(t,t.$defaultHolder=e.tn(""),o[0]),s=0;s<o.length;s++)c=o[s],1===e.Q(c)&&null!=(f=e.H(c,"slot"))?(r=r||{})[f]?r[f].push(c):r[f]=[c]:l?l.push(c):l=[c];n.R.set(t,l),n.q.set(t,r)}(A,C,e,e.childNodes),C.t||1!==n.encapsulation||(e.shadowRoot=e)},D:C,mn:function R(n,e){if(!N[n.n]){N[n.n]=!0,function t(n,e,o,i){o.connectedCallback=function(){(function t(n,e,o){n.C.delete(o),n.vn.has(o)||(n.vn.set(o,!0),function i(n,e,t){for(t=e;t=n.D.an(t);)if(n.wn(t)){n.hn.has(e)||(n.p.set(e,t),(t.$activeLoading=t.$activeLoading||[]).push(e));break}}(n,o),n.k.add(()=>{n.dn(e,o),n.loadBundle(e,o.mode,()=>a(n,o))},3))})(n,e,this)},o.attributeChangedCallback=function(n,t,o){(function i(n,e,t,o,c,f){if(o!==c&&n)for(f in t=S(t),n)if(n[f].yn===t){e[f]=l(n[f].bn,c);break}})(e.F,this,n,t,o)},o.disconnectedCallback=function(){(function e(n,t,o){!n.Mn&&function i(n,e){for(;e;){if(!n.o(e))return 9!==n.Q(e);e=n.o(e)}}(n.D,t)&&(n.C.set(t,!0),r(n,t),M(n.L.get(t),!0),n.D.I(t),n.$n.delete(t))})(n,this)},o.componentOnReady=function(e,t){return e||(t=new Promise(n=>e=n)),function o(n,e,t,i){n.C.has(e)||(n.hn.has(e)?t(e):((i=n.gn.get(e)||[]).push(t),n.gn.set(e,i)))}(n,this,e),t},o.$initLoad=function(){(function e(n,t,o,i,c){if(!n.hn.has(t)&&(i=n.W.get(t))&&!n.C.has(t)&&(!t.$activeLoading||!t.$activeLoading.length)){delete t.$activeLoading,n.hn.set(t,!0);try{M(n.L.get(t)),(c=n.gn.get(t))&&(c.forEach(n=>n(t)),n.gn.delete(t)),i.componentDidLoad&&i.componentDidLoad()}catch(e){n.S(e,4,t)}t.classList.add(o),r(n,t)}})(n,this,i)},o.forceUpdate=function(){a(n,this)},function c(n,e,t){e&&Object.keys(e).forEach(o=>{const i=e[o].kn;1===i||2===i?w(t,o,function e(){return(n.j.get(this)||{})[o]},function e(t){m(n,this,o,t)}):6===i&&v(t,o,T)})}(n,e.F,o)}(A,n,e.prototype,p);{const t=[];for(const e in n.F)n.F[e].yn&&t.push(n.F[e].yn);e.observedAttributes=t}o.customElements.define(n.n,e)}},Cn:t.emit,x:n=>d[C.U(n)],Wn:n=>t[n],isClient:!0,wn:n=>!(!N[C.U(n)]&&!A.x(n)),loadBundle:function q(n,e,t){if(n.O)t();else{const o="string"==typeof n.En?n.En:n.En[e],i=u+o+(function o(n,e){return 2===e.encapsulation||1===e.encapsulation&&!n}(C.t,n)?".sc":"")+".js";import(i).then(e=>{try{n.O=e[(n=>S(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,e,t){const o=t.style;if(o){const i=t.is+(t.styleMode||W);if(!e[i]){const t=n.K("template");e[i]=t,t.innerHTML=`<style>${o}</style>`,n.V(n.e,t)}}}(C,n,n.O)}catch(e){n.O=class{}}t()}).catch(n=>void 0)}},S:(n,e,t)=>void 0,Nn:n=>(function e(n,t,o){return{create:g(n,t,o,"create"),componentOnReady:g(n,t,o,"componentOnReady")}})(C,y,n),k:function D(e,t,o,i){function c(){for(;u.length>0;)u.shift()();o=!1}function f(n){for(n=r(),c();a.length>0&&r()-n<40;)a.shift()();(i=a.length>0)&&e.raf(l)}function l(n){for(c(),n=4+r();a.length>0&&r()<n;)a.shift()();(i=a.length>0)&&e.raf(f)}const r=()=>t.performance.now(),s=Promise.resolve(),u=[],a=[];return e.raf||(e.raf=n.requestAnimationFrame.bind(n)),{add:(n,t)=>{3===t?(u.push(n),o||(o=!0,s.then(c))):(a.push(n),i||(i=!0,e.raf(f)))}}}(b,o),p:new WeakMap,i:new WeakMap,R:new WeakMap,vn:new WeakMap,$n:new WeakMap,hn:new WeakMap,N:new WeakMap,W:new WeakMap,C:new WeakMap,g:new WeakMap,q:new WeakMap,gn:new WeakMap,jn:new WeakMap,L:new WeakMap,j:new WeakMap};A.render=function H(n,e){function t(o,i,f,l,r,s,m,v,w){if("function"==typeof o.m&&(o=o.m(Object.assign({},o.w,{On:o.v}))),!p&&"slot"===o.m){if((u||a)&&(d&&e.ln(i,d+"-slot",""),m=o.w&&o.w.name,v=O(m)?a&&a[m]:u,O(v))){for(n.Mn=!0,l=0;l<v.length;l++)s=v[l],e.on(s),e.V(i,s),8!==s.nodeType&&(w=!0);!w&&o.v&&c(i,[],o.v),n.Mn=!1}return null}if(O(o.d))o.P=e.en(o.d);else{r=o.P=B||"svg"===o.m?e.nn("http://www.w3.org/2000/svg",o.m):e.K(o.m),B="svg"===o.m||"foreignObject"!==o.m&&B,h(n,null,o,B),null!==d&&r.xn!==d&&e.ln(r,r.xn=d,"");const i=o.v;if(i)for(l=0;l<i.length;++l)(s=t(i[l],r))&&e.V(r,s);"svg"===o.m&&(B=!1)}return o.P}function o(n,o,i,c,f,l,r){const s=n.$defaultHolder&&e.o(n.$defaultHolder)||n;for(;c<=f;++c)r=i[c],O(r)&&(l=O(r.d)?e.en(r.d):t(r,n),O(l)&&(r.P=l,e.c(s,l,o)))}function i(n,t,o){for(;t<=o;++t)O(n[t])&&e.on(n[t].P)}function c(n,c,s){let u,a,p,d,m=0,v=0,w=c.length-1,h=c[0],y=c[w],b=s.length-1,M=s[0],$=s[b];for(;m<=w&&v<=b;)null==h?h=c[++m]:null==y?y=c[--w]:null==M?M=s[++v]:null==$?$=s[--b]:f(h,M)?(r(h,M),h=c[++m],M=s[++v]):f(y,$)?(r(y,$),y=c[--w],$=s[--b]):f(h,$)?(r(h,$),e.c(n,h.P,e.cn(y.P)),h=c[++m],$=s[--b]):f(y,M)?(r(y,M),e.c(n,y.P,h.P),y=c[--w],M=s[++v]):(x(u)&&(u=l(c,m,w)),a=u[M.y],x(a)?(d=t(M,n),M=s[++v]):((p=c[a]).m!==M.m?d=t(M,n):(r(p,M),c[a]=void 0,d=p.P),M=s[++v]),d&&e.c(h.P&&h.P.parentNode||n,d,h.P));m>w?o(n,null==s[b+1]?null:s[b+1].P,s,v,b):v>b&&i(c,m,w)}function f(n,e){return n.m===e.m&&n.y===e.y}function l(n,e,t){const o={};let i,c,f;for(i=e;i<=t;++i)null!=(f=n[i])&&void 0!==(c=f.y)&&(o.Sn=i);return o}function r(t,f){const l=f.P=t.P,r=t.v,s=f.v;let u;if(B=f.P&&null!=f.P.parentElement&&void 0!==f.P.Tn,B="svg"===f.m||"foreignObject"!==f.m&&B,x(f.d))"slot"!==f.m&&h(n,t,f,B),O(r)&&O(s)?c(l,r,s):O(s)?(O(t.d)&&e.fn(l,""),o(l,null,s,0,s.length-1)):O(r)&&i(r,0,r.length-1);else if(u=n.R.get(l)){const t=u[0].parentElement;e.fn(t,f.d),n.R.set(l,[t.childNodes[0]])}else t.d!==f.d&&e.fn(l,f.d);B&&"svg"===f.m&&(B=!1)}let s,u,a,p,d;return function n(t,o,i,c,f,l,p){return s=i,u=c,a=f,d="scoped"===l||"shadow"===l&&!e.t?"data-"+e.U(t.P):null,s||d&&e.ln(t.P,d+"-host",""),r(t,o),o}}(A,C);const F=C.Z;F.$rendered=!0,F.$activeLoading=[],F.$initLoad=(()=>{A.hn.set(F,b.loaded=A.T=!0),C.pn(o,"appload",{detail:{namespace:e}})}),function z(n,e,t){const o=t.querySelectorAll(`[${k}]`),i=o.length;let c,f,l,r,s,u;if(i>0)for(n.hn.set(t,!0),r=0;r<i;r++)for(c=o[r],f=e.H(c,k),(l=new L).m=e.U(l.P=c),n.L.set(c,l),s=0,u=c.childNodes.length;s<u;s++)$(e,c.childNodes[s],l,f,!0)}(A,C,F),A.B=c,(b.components||[]).map(n=>(function e(n,t,o,i){const c={n:n[0],F:{color:{yn:"color"}}};c.En=n[1];const l=n[3];if(l)for(o=0;o<l.length;o++)i=l[o],c.F[i[0]]={kn:i[1],yn:"string"==typeof i[2]?i[2]:i[2]?i[0]:0,bn:i[3]};return c.encapsulation=n[4],n[5]&&(c.An=n[5].map(f)),t[c.n]=c})(n,d)).forEach(n=>A.mn(n,class extends HTMLElement{})),b.initialized=!0,C.pn(n,"appinit",{detail:{namespace:e}})})(o,t,n,e,i,hydratedCssClass)})(window,document,Context,appNamespace,publicPath);
})({},"WuComponents","hydrated","/build/wu-components/");