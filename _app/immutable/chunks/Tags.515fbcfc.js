import{S as E,i as j,s as k,k as u,l as g,m as d,h as f,n as h,b as y,D as p,P as w,q as T,a as q,r as C,c as L,C as _,u as P}from"./index.e1792fce.js";function b(r,s,a){const e=r.slice();return e[1]=s[a],e}function x(r){let s,a,e,t=r[1]+"",n,l,c;return{c(){s=u("li"),a=u("a"),e=u("p"),n=T(t),c=q(),this.h()},l(i){s=g(i,"LI",{class:!0});var o=d(s);a=g(o,"A",{class:!0,href:!0});var m=d(a);e=g(m,"P",{class:!0});var v=d(e);n=C(v,t),v.forEach(f),m.forEach(f),c=L(o),o.forEach(f),this.h()},h(){h(e,"class","inline svelte-1mjrw8e"),h(a,"class","inline rounded-lg bg-flushed-violet p-1 hover:border-4 hover:bg-transparent border-flushed-violet transition-all ease-in-out delay-25 text-sm"),h(a,"href",l="/tags/"+r[1]),h(s,"class","inline svelte-1mjrw8e")},m(i,o){y(i,s,o),_(s,a),_(a,e),_(e,n),_(s,c)},p(i,o){o&1&&t!==(t=i[1]+"")&&P(n,t),o&1&&l!==(l="/tags/"+i[1])&&h(a,"href",l)},d(i){i&&f(s)}}}function S(r){let s,a=r[0],e=[];for(let t=0;t<a.length;t+=1)e[t]=x(b(r,a,t));return{c(){s=u("ul");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){s=g(t,"UL",{class:!0});var n=d(s);for(let l=0;l<e.length;l+=1)e[l].l(n);n.forEach(f),this.h()},h(){h(s,"class","tags inline svelte-1mjrw8e")},m(t,n){y(t,s,n);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(s,null)},p(t,[n]){if(n&1){a=t[0];let l;for(l=0;l<a.length;l+=1){const c=b(t,a,l);e[l]?e[l].p(c,n):(e[l]=x(c),e[l].c(),e[l].m(s,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=a.length}},i:p,o:p,d(t){t&&f(s),w(e,t)}}}function A(r,s,a){let{tags:e}=s;return r.$$set=t=>{"tags"in t&&a(0,e=t.tags)},[e]}class I extends E{constructor(s){super(),j(this,s,A,S,k,{tags:0})}}export{I as T};
