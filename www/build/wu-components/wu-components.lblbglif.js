/*! Built with http://stenciljs.com */
(function(Context,namespace,hydratedCssClass,resourcesUrl,s){"use strict";
s=document.querySelector("script[data-namespace='wu-components']");if(s){resourcesUrl=s.getAttribute('data-resources-url');}
(function(t,e,n,o){"use strict";function i(t,e){return"sc-"+t.t+(e&&e!==N?"-"+e:"")}function c(t,e){return t+(e?"-h":"-s")}function r(t){return{e:t[0],n:t[1],o:!!t[2],i:!!t[3],c:!!t[4]}}function f(t,e){if(T(e)&&"object"!=typeof e&&"function"!=typeof e){if(t===Boolean||3===t)return"false"!==e&&(""===e||!!e);if(t===Number||4===t)return parseFloat(e);if(t===String||2===t)return e.toString()}return e}function s(t,e,n,o){const i=t.r.get(e);i&&((o=i["s-ld"]||i.$activeLoading)&&((n=o.indexOf(e))>-1&&o.splice(n,1),o.length||(i["s-init"]&&i["s-init"](),i.$initLoad&&i.$initLoad())),t.r.delete(e))}function l(t,e){let n,o,i=null,c=!1,r=!1;for(var f=arguments.length;f-- >2;)q.push(arguments[f]);for(;q.length>0;){let e=q.pop();if(e&&void 0!==e.pop)for(f=e.length;f--;)q.push(e[f]);else"boolean"==typeof e&&(e=null),(r="function"!=typeof t)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(r=!1)),r&&c?i[i.length-1].vtext+=e:null===i?i=[r?{vtext:e}:e]:i.push(r?{vtext:e}:e),c=r}if(null!=e){if(e.className&&(e.class=e.className),"object"==typeof e.class){for(f in e.class)e.class[f]&&q.push(f);e.class=q.join(" "),q.length=0}null!=e.key&&(n=e.key),null!=e.name&&(o=e.name)}return"function"==typeof t?t(e,i||[],B):{vtag:t,vchildren:i,vtext:void 0,vattrs:e,vkey:n,vname:o,f:void 0,s:!1}}function u(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}}function a(t,e){t.l.has(e)||(t.l.set(e,!0),t.u?t.queue.write(()=>p(t,e)):t.queue.tick(()=>p(t,e)))}function p(t,e,n,o,i,c){if(t.l.delete(e),!t.a.has(e)){if(o=t.p.get(e),n=!o){if((i=t.r.get(e))&&i.$rendered&&(i["s-rn"]=!0),i&&!i["s-rn"])return(i["s-rc"]=i["s-rc"]||[]).push(()=>{p(t,e)}),void(i.$onRender=i["s-rc"]);o=function r(t,e,n,o,i,c,f){try{o=new(i=t.v(e).d),function s(t,e,n,o,i,c,r){for(r in t.b.set(o,n),t.m.has(n)||t.m.set(n,{}),(c=Object.assign({color:{type:String}},e.properties)).mode={type:String},c)v(t,c[r],n,o,r,i)}(t,i,e,o,n),function l(t,e,n){if(e){const o=t.b.get(n);e.forEach(e=>{n[e.method]={emit:n=>{t.y(o,e.name,{bubbles:e.bubbles,composed:e.composed,cancelable:e.cancelable,detail:n})}}})}}(t,i.events,o)}catch(n){o={},t.g(n,7,e,!0)}return t.p.set(e,o),o}(t,e,t.w.get(e));try{o.componentWillLoad&&(c=o.componentWillLoad())}catch(n){t.g(n,3,e)}}else try{o.componentWillUpdate&&(c=o.componentWillUpdate())}catch(n){t.g(n,5,e)}c&&c.then?c.then(()=>d(t,e,o,n)):d(t,e,o,n)}}function d(t,e,n,o){(function i(t,e,n,o){try{const i=e.d.host,r=e.d.encapsulation,f="shadow"===r&&t.k.M;let s,u;if(s=function i(t,e,n){return t&&Object.keys(t).forEach(o=>{t[o].reflectToAttr&&((n=n||{})[o]=e[o])}),n}(e.d.properties,o),f||(u=n),!n["s-rn"]){t.C(t,t.k,e,n);const i=n["s-sc"];i&&(t.k.j(n,c(i,!0)),o.render||t.k.j(n,c(i)))}if(o.render||o.hostData||i||s){t.x=!0;const e=o.render&&o.render();let i;s&&(i=i?Object.assign(i,s):s),t.x=!1;const c=t.W.get(n)||{};c.f=u;const a=l(null,i,e);a.s=!0,t.W.set(n,t.render(n,c,a,f,r))}n["s-rn"]=!0,n.$onRender&&(n["s-rc"]=n.$onRender),n["s-rc"]&&(n["s-rc"].forEach(t=>t()),n["s-rc"]=null)}catch(e){t.x=!1,t.g(e,8,n,!0)}})(t,t.v(e),e,n);try{o?e["s-init"]():C(t.W.get(e))}catch(n){t.g(n,6,e,!0)}}function v(t,e,n,o,i,c,r,s){if(e.type||e.state){const l=t.m.get(n);e.state||(!e.attr||void 0!==l[i]&&""!==l[i]||(r=c&&c.O)&&T(s=r[e.attr])&&(l[i]=f(e.type,s)),n.hasOwnProperty(i)&&(void 0===l[i]&&(l[i]=f(e.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===l[i]&&(l[i]=o[i]),e.watchCallbacks&&(l[D+i]=e.watchCallbacks.slice()),h(o,i,function l(e){return(e=t.m.get(t.b.get(this)))&&e[i]},function u(n,o){(o=t.b.get(this))&&(e.state||e.mutable)&&b(t,o,i,n)})}else e.elementRef?m(o,i,n):e.method&&m(n,i,o[i].bind(o))}function b(t,e,n,o,i,c,r){(i=t.m.get(e))||t.m.set(e,i={}),o!==i[n]&&(i[n]=o,t.p.get(e)&&(i[D+n],!t.x&&e["s-rn"]&&a(t,e)))}function m(t,e,n){Object.defineProperty(t,e,{configurable:!0,value:n})}function h(t,e,n,o){Object.defineProperty(t,e,{configurable:!0,get:n,set:o})}function y(t,e,n,o="boolean"==typeof n){const i=e!==(e=e.replace(/^xlink\:?/,""));null==n||o&&(!n||"false"===n)?i?t.removeAttributeNS(P,R(e)):t.removeAttribute(e):"function"!=typeof n&&(n=o?"":n.toString(),i?t.setAttributeNS(P,R(e),n):t.setAttribute(e,n))}function g(t,e,n,o,i,c,r){if("class"!==n||c)if("style"===n){for(const t in o)i&&null!=i[t]||(/-/.test(t)?e.style.N(t):e.style[t]="");for(const t in i)o&&i[t]===o[t]||(/-/.test(t)?e.style.setProperty(t,i[t]):e.style[t]=i[t])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in e)if("list"!==n&&"type"!==n&&!c&&(n in e||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=t.v(e);o&&o.S&&o.S[n]?(M(e,n,i),r&&o.S[n].A&&y(e,o.S[n].T,i,3===o.S[n].R)):"ref"!==n&&(M(e,n,null==i?"":i),null!=i&&!1!==i||t.k.L(e,n))}else null!=i&&"key"!==n?y(e,n,i):(c||t.k.q(e,n)&&(null==i||!1===i))&&t.k.L(e,n);else n=R(n)in e?R(n.substring(2)):R(n[2])+n.substring(3),i?i!==o&&t.k.B(e,n,i):t.k.D(e,n);else if(o!==i){const t=w(o),n=w(i),c=t.filter(t=>!n.includes(t)),r=w(e.className).filter(t=>!c.includes(t)),f=n.filter(e=>!t.includes(e)&&!r.includes(e));r.push(...f),e.className=r.join(" ")}}function w(t){return null==t||""===t?[]:t.trim().split(/\s+/)}function M(t,e,n){try{t[e]=n}catch(t){}}function $(t,e,n,o,i){const c=11===n.f.nodeType&&n.f.host?n.f.host:n.f,r=e&&e.vattrs||S,f=n.vattrs||S;for(i in r)f&&null!=f[i]||null==r[i]||g(t,c,i,r[i],void 0,o,n.s);for(i in f)i in r&&f[i]===("value"===i||"checked"===i?c[i]:r[i])||g(t,c,i,r[i],f[i],o,n.s)}function k(t,e){function n(i,c,r,f,s,l,p,m,h){if(m=c.vchildren[r],u||(d=!0,"slot"===m.vtag&&(a&&e.j(f,a+"-s"),m.vchildren?m.P=!0:m.F=!0)),T(m.vtext))m.f=e.H(m.vtext);else if(m.F)m.f=e.H("");else{if(l=m.f=F||"svg"===m.vtag?e.I("http://www.w3.org/2000/svg",m.vtag):e.U(m.P?"slot-fb":m.vtag),F="svg"===m.vtag||"foreignObject"!==m.vtag&&F,$(t,null,m,F),T(a)&&l["s-si"]!==a&&e.j(l,l["s-si"]=a),m.vchildren)for(s=0;s<m.vchildren.length;++s)(p=n(i,m,s,l))&&e.Q(l,p);"svg"===m.vtag&&(F=!1)}return m.f["s-hn"]=v,(m.P||m.F)&&(m.f["s-sr"]=!0,m.f["s-cr"]=b,m.f["s-sn"]=m.vname||"",(h=i&&i.vchildren&&i.vchildren[r])&&h.vtag===m.vtag&&i.f&&o(i.f)),m.f}function o(n,i,c,r){t.Z=!0;const l=e.z(n);for(c=l.length-1;c>=0;c--)(r=l[c])["s-hn"]!==v&&r["s-ol"]&&(e.G(r),e.J(s(r),r,f(r)),e.G(r["s-ol"]),r["s-ol"]=null,d=!0),i&&o(r,i);t.Z=!1}function i(t,o,i,c,r,s,l,u){const a=t["s-cr"]||t.$defaultHolder;for((l=a&&e.K(a)||t).shadowRoot&&e.V(l)===v&&(l=l.shadowRoot);r<=s;++r)c[r]&&(u=T(c[r].vtext)?e.H(c[r].vtext):n(null,i,r,t))&&(c[r].f=u,e.J(l,u,f(o)))}function c(t,n,i,c){for(;n<=i;++n)T(t[n])&&(c=t[n].f,p=!0,c["s-ol"]?e.G(c["s-ol"]):o(c,!0),e.G(c))}function r(t,e){return t.vtag===e.vtag&&t.vkey===e.vkey&&("slot"!==t.vtag||t.vname===e.vname)}function f(t){return t&&t["s-ol"]?t["s-ol"]:t}function s(t){return e.K(t["s-ol"]?t["s-ol"]:t)}const l=[];let u,a,p,d,v,b;return function m(h,y,g,w,M,k,C,j,x,W,O,E){if(v=e.V(h),b=h["s-cr"],u=w,a=h["s-sc"],d=p=!1,function l(u,a,p){const d=a.f=u.f,v=u.vchildren,b=a.vchildren;F=a.f&&T(e.X(a.f))&&void 0!==a.f.ownerSVGElement,F="svg"===a.vtag||"foreignObject"!==a.vtag&&F,T(a.vtext)?(p=d["s-cr"]||d.$defaultHolder)?e.Y(e.K(p),a.vtext):u.vtext!==a.vtext&&e.Y(d,a.vtext):("slot"!==a.vtag&&$(t,u,a,F),T(v)&&T(b)?function m(t,u,a,p,d,v,b,h){let y=0,g=0,w=u.length-1,M=u[0],$=u[w],k=p.length-1,C=p[0],j=p[k];for(;y<=w&&g<=k;)if(null==M)M=u[++y];else if(null==$)$=u[--w];else if(null==C)C=p[++g];else if(null==j)j=p[--k];else if(r(M,C))l(M,C),M=u[++y],C=p[++g];else if(r($,j))l($,j),$=u[--w],j=p[--k];else if(r(M,j))"slot"!==M.vtag&&"slot"!==j.vtag||o(e.K(M.f)),l(M,j),e.J(t,M.f,e._($.f)),M=u[++y],j=p[--k];else if(r($,C))"slot"!==M.vtag&&"slot"!==j.vtag||o(e.K($.f)),l($,C),e.J(t,$.f,M.f),$=u[--w],C=p[++g];else{for(d=null,v=y;v<=w;++v)if(u[v]&&T(u[v].vkey)&&u[v].vkey===C.vkey){d=v;break}T(d)?((h=u[d]).vtag!==C.vtag?b=n(u&&u[g],a,d,t):(l(h,C),u[d]=void 0,b=h.f),C=p[++g]):(b=n(u&&u[g],a,g,t),C=p[++g]),b&&e.J(s(M.f),b,f(M.f))}y>w?i(t,null==p[k+1]?null:p[k+1].f,a,p,g,k):g>k&&c(u,y,w)}(d,v,a,b):T(b)?(T(u.vtext)&&e.Y(d,""),i(d,null,a,b,0,b.length-1)):T(v)&&c(v,0,v.length-1)),F&&"svg"===a.vtag&&(F=!1)}(y,g),d){for(function t(n,o,i,c,r,f,s,u,a,d){for(r=0,f=(o=e.z(n)).length;r<f;r++){if((i=o[r])["s-sr"]&&(c=i["s-cr"]))for(u=e.z(e.K(c)),a=i["s-sn"],s=u.length-1;s>=0;s--)(c=u[s])["s-cn"]||c["s-nr"]||c["s-hn"]===i["s-hn"]||((3===(d=e.tt(c))||8===d)&&""===a||1===d&&null===e.et(c,"slot")&&""===a||1===d&&e.et(c,"slot")===a)&&(l.some(t=>t.nt===c)||(p=!0,c["s-sn"]=a,l.push({ot:i,nt:c})));1===e.tt(i)&&t(i)}}(g.f),C=0;C<l.length;C++)(j=l[C]).nt["s-ol"]||((x=e.H(""))["s-nr"]=j.nt,e.J(e.K(j.nt),j.nt["s-ol"]=x,j.nt));for(t.Z=!0,C=0;C<l.length;C++){for(j=l[C],O=e.K(j.ot),E=e._(j.ot),x=j.nt["s-ol"];x=e.it(x);)if((W=x["s-nr"])&&W&&W["s-sn"]===j.nt["s-sn"]&&O===e.K(W)&&(W=e._(W))&&W&&!W["s-nr"]){E=W;break}(!E&&O!==e.K(j.nt)||e._(j.nt)!==E)&&j.nt!==E&&(e.G(j.nt),e.J(O,j.nt,E))}t.Z=!1}return p&&function t(n,o,i,c,r,f,s,l){for(c=0,r=(i=e.z(n)).length;c<r;c++)if(o=i[c],1===e.tt(o)){if(o["s-sr"])for(s=o["s-sn"],o.hidden=!1,f=0;f<r;f++)if(i[f]["s-hn"]!==o["s-hn"])if(l=e.tt(i[f]),""!==s){if(1===l&&s===e.et(i[f],"slot")){o.hidden=!0;break}}else if(1===l||3===l&&""!==e.ct(i[f]).trim()){o.hidden=!0;break}t(o)}}(g.f),l.length=0,g}}function C(t,e){t&&(t.vattrs&&t.vattrs.ref&&t.vattrs.ref(e?null:t.f),t.vchildren&&t.vchildren.forEach(t=>{C(t,e)}))}function j(t,e,n,o,i){const c=t.tt(e);let r,f,s,l;if(i&&1===c){(f=t.et(e,E))&&(s=f.split("."))[0]===o&&((l={}).vtag=t.V(l.f=e),n.vchildren||(n.vchildren=[]),n.vchildren[s[1]]=l,n=l,i=""!==s[2]);for(let c=0;c<e.childNodes.length;c++)j(t,e.childNodes[c],n,o,i)}else 3===c&&(r=e.previousSibling)&&8===t.tt(r)&&"s"===(s=t.ct(r).split("."))[0]&&s[1]===o&&((l={vtext:t.ct(e)}).f=e,n.vchildren||(n.vchildren=[]),n.vchildren[s[2]]=l)}function x(t,e,n,o){n.connectedCallback=function(){(function n(t,e,o){t.a.delete(o),t.rt.has(o)||(t.rt.set(o,!0),o["s-id"]||(o["s-id"]=t.ft()),function i(t,e,n){for(n=e;n=t.k.X(n);)if(t.st(n)){t.lt.has(e)||(t.r.set(e,n),n.$activeLoading&&(n["s-ld"]=n.$activeLoading),(n["s-ld"]=n["s-ld"]||[]).push(e));break}}(t,o),t.queue.tick(()=>{t.w.set(o,function n(t,e,o,i,c){return o.mode||(o.mode=t.ut(o)),o["s-cr"]||t.et(o,O)||t.M&&1===e.at||(o["s-cr"]=t.H(""),o["s-cr"]["s-cn"]=!0,t.J(o,o["s-cr"],t.z(o)[0])),t.M||1!==e.at||(o.shadowRoot=o),i={pt:o["s-id"],O:{}},e.S&&Object.keys(e.S).forEach(n=>{(c=e.S[n].T)&&(i.O[c]=t.et(o,c))}),i}(t.k,e,o)),t.dt(e,o)}))})(t,e,this)},n.attributeChangedCallback=function(t,n,o){(function i(t,e,n,o,c,r,s){if(t&&o!==c)for(r in t)if((s=t[r]).T&&R(s.T)===R(n)){e[r]=f(s.R,c);break}})(e.S,this,t,n,o)},n.disconnectedCallback=function(){(function e(t,n){!t.Z&&function o(t,e){for(;e;){if(!t.K(e))return 9!==t.tt(e);e=t.K(e)}}(t.k,n)&&(t.a.set(n,!0),s(t,n),C(t.W.get(n),!0),t.k.D(n),t.vt.delete(n),[t.r,t.bt,t.w].forEach(t=>t.delete(n)))})(t,this)},n["s-init"]=function(){(function e(t,n,o,i,c){if(!t.lt.has(n)&&(i=t.p.get(n))&&!t.a.has(n)&&(!n["s-ld"]||!n["s-ld"].length)){delete n["s-ld"],t.lt.set(n,!0);try{C(t.W.get(n)),(c=t.bt.get(n))&&(c.forEach(t=>t(n)),t.bt.delete(n)),i.componentDidLoad&&i.componentDidLoad()}catch(e){t.g(e,4,n)}t.k.j(n,o),s(t,n)}})(t,this,o)},n.forceUpdate=function(){a(t,this)},function i(t,e,n){e&&Object.keys(e).forEach(o=>{const i=e[o],c=i.mt;1===c||2===c?h(n,o,function e(){return(t.m.get(this)||{})[o]},function e(n){b(t,this,o,f(i.R,n))}):6===c&&m(n,o,L)})}(t,e.S,n)}function W(t,e,n,o){return function(){const i=arguments;return function c(t,e,n){let o=e[n];const i=t.ht.body;return i?(o||(o=i.querySelector(n)),o||(o=e[n]=t.U(n),t.Q(i,o)),o.componentOnReady()):Promise.resolve()}(t,e,n).then(t=>t[o].apply(t,i))}}const O="ssrv",E="ssrc",N="$",S={},A={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},T=t=>null!=t,R=t=>t.toLowerCase(),L=()=>{},q=[],B={forEach:(t,e)=>{t.forEach((t,n,o)=>e(u(t),n,o))},map:(t,e)=>{return t.map((t,n,o)=>(function i(t){return{vtag:t.vtag,vchildren:t.vchildren,vtext:t.vtext,vattrs:t.vattrs,vkey:t.vkey,vname:t.vname}})(e(u(t),n,o)))}},D="wc-",P="http://www.w3.org/1999/xlink";let F=!1;(function H(t,e,n,o,c,f){function s(t,e){if(!n.customElements.get(t.t)){x(y,u[t.t]=t,e.prototype,f);{const n=e.observedAttributes=[];for(const e in t.S)t.S[e].T&&n.push(t.S[e].T)}n.customElements.define(t.t,e)}}const u={html:{}},p={},d=n[t]=n[t]||{},v=function b(t,e,n){t.ael||(t.ael=((t,e,n,o)=>t.addEventListener(e,n,o)),t.rel=((t,e,n,o)=>t.removeEventListener(e,n,o)));const o=new WeakMap,i={ht:n,yt:!1,tt:t=>t.nodeType,U:t=>n.createElement(t),I:(t,e)=>n.createElementNS(t,e),H:t=>n.createTextNode(t),gt:t=>n.createComment(t),J:(t,e,n)=>t.insertBefore(e,n),G:t=>t.remove(),Q:(t,e)=>t.appendChild(e),j:(t,e)=>t.classList.add(e),z:t=>t.childNodes,K:t=>t.parentNode,_:t=>t.nextSibling,it:t=>t.previousSibling,V:t=>R(t.nodeName),ct:t=>t.textContent,Y:(t,e)=>t.textContent=e,et:(t,e)=>t.getAttribute(e),wt:(t,e,n)=>t.setAttribute(e,n),Mt:(t,e,n,o)=>t.setAttributeNS(e,n,o),L:(t,e)=>t.removeAttribute(e),q:(t,e)=>t.hasAttribute(e),ut:e=>e.getAttribute("mode")||(t.Context||{}).mode,$t:(t,o)=>{return"child"===o?t.firstElementChild:"parent"===o?i.X(t):"body"===o?n.body:"document"===o?n:"window"===o?e:t},B:(e,n,c,r,f,s,l,u)=>{const a=n;let p=e,d=o.get(e);if(d&&d[a]&&d[a](),"string"==typeof s?p=i.$t(e,s):"object"==typeof s?p=s:(u=n.split(":")).length>1&&(p=i.$t(e,u[0]),n=u[1]),!p)return;let v=c;(u=n.split(".")).length>1&&(n=u[0],v=(t=>{t.keyCode===A[u[1]]&&c(t)})),l=i.yt?{capture:!!r,passive:!!f}:!!r,t.ael(p,n,v,l),d||o.set(e,d={}),d[a]=(()=>{p&&t.rel(p,n,v,l),d[a]=null})},D:(t,e)=>{const n=o.get(t);n&&(e?n[e]&&n[e]():Object.keys(n).forEach(t=>{n[t]&&n[t]()}))},kt:(t,n,o)=>t&&t.dispatchEvent(new e.CustomEvent(n,o))};try{e.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.yt=!0}))}catch(t){}return i.X=((t,e)=>(e=i.K(t))&&11===i.tt(e)?e.host:e),i}(d,n,o);e.isServer=e.isPrerender=!(e.isClient=!0),e.window=n,e.location=n.location,e.document=o,e.resourcesUrl=e.publicPath=c,e.emit=((t,n,o)=>v.kt(t,e.eventNameFn?e.eventNameFn(n):n,o)),d.h=l,d.Context=e;const m=n["s-defined"]=n.$definedCmps=n["s-defined"]||n.$definedCmps||{};let h=0;const y={k:v,Ct:s,y:e.emit,v:t=>u[v.V(t)],jt:t=>e[t],isClient:!0,st:t=>!(!m[v.V(t)]&&!y.v(t)),ft:()=>t+h++,g:(t,e,n)=>void 0,xt:t=>(function e(t,n,o){return{create:W(t,n,o,"create"),componentOnReady:W(t,n,o,"componentOnReady")}})(v,p,t),queue:e.queue=function g(t,e){function n(t){for(let e=0;e<t.length;e++)try{t[e](c())}catch(t){}t.length=0}function o(t,e){let n,o=0;for(;o<t.length&&(n=c())<e;)try{t[o++](n)}catch(t){}o===t.length?t.length=0:0!==o&&t.splice(0,o)}function i(){a++,n(s);const e=c()+7*Math.ceil(a*(1/22));o(l,e),o(u,e),l.length>0&&(u.push(...l),l.length=0),(p=s.length+l.length+u.length>0)?t.raf(i):a=0}const c=()=>e.performance.now(),r=Promise.resolve(),f=[],s=[],l=[],u=[];let a=0,p=!1;return t.raf||(t.raf=e.requestAnimationFrame.bind(e)),{tick(t){f.push(t),1===f.length&&r.then(()=>n(f))},read(e){s.push(e),p||(p=!0,t.raf(i))},write(e){l.push(e),p||(p=!0,t.raf(i))}}}(d,n),dt:function w(t,e,n){if(t.d)a(y,e);else{const n="string"==typeof t.Wt?t.Wt:t.Wt[e.mode],o=2===t.at||1===t.at&&!v.M;import(c+n+(o?".sc":"")+".js").then(n=>{try{t.d=n[(t=>R(t).split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(""))(t.t)],function o(t,e,n,i,c){if(i){const n=e.t+(c||N);if(!e[n]){const o=t.U("template");e[n]=o,o.innerHTML=`<style>${i}</style>`,t.Q(t.ht.head,o)}}}(v,t,t.at,t.d.style,t.d.styleMode)}catch(e){t.d=class{}}a(y,e)}).catch(t=>void 0)}},r:new WeakMap,Ot:new WeakMap,rt:new WeakMap,vt:new WeakMap,lt:new WeakMap,b:new WeakMap,w:new WeakMap,p:new WeakMap,a:new WeakMap,l:new WeakMap,bt:new WeakMap,Et:new WeakMap,W:new WeakMap,m:new WeakMap};y.render=k(y,v);const M=v.ht.documentElement;M["s-ld"]=[],M["s-rn"]=!0,M["s-init"]=(()=>{y.lt.set(M,d.loaded=y.u=!0),v.kt(n,"appload",{detail:{namespace:t}})}),function $(t,e,n){const o=n.querySelectorAll(`[${O}]`),i=o.length;let c,r,f,s,l,u;if(i>0)for(t.lt.set(n,!0),s=0;s<i;s++)for(c=o[s],r=e.et(c,O),(f={}).vtag=e.V(f.f=c),t.W.set(c,f),l=0,u=c.childNodes.length;l<u;l++)j(e,c.childNodes[l],f,r,!0)}(y,v,M),y.C=((t,e,n,o)=>{(function c(t,e,n,o){const c=2===n.at||1===n.at&&!t.k.M;let r=n.t+o.mode,f=n[r];if(c&&(o["s-sc"]=i(n,o.mode)),f||(f=n[r=n.t+N],c&&(o["s-sc"]=i(n))),f){let i=e.ht.head;if(e.M)if(1===n.at)i=o.shadowRoot;else{let t=o;for(;t=e.K(t);)if(t.host&&t.host.shadowRoot){i=t.host.shadowRoot;break}}let c=t.Ot.get(i);if(c||t.Ot.set(i,c={}),!c[r]){let t;{t=f.content.cloneNode(!0),c[r]=!0;const n=i.querySelectorAll("[data-styles]");e.J(i,t,n.length&&n[n.length-1].nextSibling||i.firstChild)}}}})(t,e,n,o)}),(d.components||[]).map(t=>{const e=function n(t,e,o){const i={t:t[0],S:{color:{T:"color"}}};i.Wt=t[1];const c=t[3];if(c)for(e=0;e<c.length;e++)o=c[e],i.S[o[0]]={mt:o[1],A:!!o[2],T:"string"==typeof o[3]?o[3]:o[3]?o[0]:0,R:o[4]};return i.at=t[4],t[5]&&(i.Nt=t[5].map(r)),i}(t);return u[e.t]=e}).forEach(t=>s(t,class extends HTMLElement{})),function C(t,e,n,o,i,c){if(e.componentOnReady=((e,n)=>{if(!e.nodeName.includes("-"))return n(null),!1;const o=t.v(e);if(o)if(t.lt.has(e))n(e);else{const o=t.bt.get(e)||[];o.push(n),t.bt.set(e,o)}return!!o}),i){for(c=i.length-1;c>=0;c--)e.componentOnReady(i[c][0],i[c][1])&&i.splice(c,1);for(c=0;c<o.length;c++)if(!n[o[c]].componentOnReady)return;for(c=0;c<i.length;c++)i[c][1](null);i.length=0}}(y,d,n,n["s-apps"],n["s-cr"]),d.initialized=!0})(o,n,t,e,resourcesUrl,hydratedCssClass)})(window,document,Context,namespace);
})({},"WuComponents","hydrated");