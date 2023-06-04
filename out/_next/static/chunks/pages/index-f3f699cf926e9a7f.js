(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6549:function(e,t,n){"use strict";var a,r;e.exports=(null==(a=n.g.process)?void 0:a.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(4817)},7315:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7938)}])},8877:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(1527),r=n(5941),s=n.n(r),i=n(3283);function o(e){return(0,i.useRouter)(),(0,a.jsxs)(a.Fragment,{children:[e.data?e.data.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"mt-10"}),(0,a.jsx)("div",{className:"container mx-auto flex flex-wrap justify-around",children:(0,a.jsxs)("div",{className:"card w-96 bg-base-100 shadow-xl image-full",children:[(0,a.jsx)("figure",{className:"blur-sm",children:(0,a.jsx)(s(),{src:e.images.webp.large_image_url,alt:e.title,fill:!0})}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h2",{className:"card-title font-bold text-center",children:e.title}),(0,a.jsx)("p",{className:"text-ellipsis overflow-hidden text-left indent-5",children:e.synopsis})]})]})})]},e.mal_id)):"",(0,a.jsx)("br",{}),(0,a.jsx)("br",{})]})}},3065:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(1527),r=n(3283),s=n(9660),i=n.n(s),o=n(98),l=n.n(o),c=n(3462),u=n(2147),d=n(959),m=n(3669);function h(){let e;let t=(0,d.useRef)(null),[n,s]=(0,d.useState)(""),[i,o]=(0,d.useState)(!1),[h,p]=(0,d.useState)([]),b='"https://api.jikan.moe/v4/anime?q="',f=(0,d.useCallback)(async t=>{s(t.target.value),""!==t.target.value?(await (clearTimeout(e),new Promise(function(t){e=setTimeout(function(){t(null)},500)})),m.Z.get(b+t.target.value).then(e=>p(e.data.data)).catch(e=>console.log(e.message))):p([])},[b]),x=(0,d.useCallback)(e=>{t.current&&!t.current.contains(e.target)&&(o(!1),window.removeEventListener("click",x))},[]),j=(0,d.useCallback)(()=>{o(!0),window.removeEventListener("click",x)},[x]),v=(0,r.useRouter)(),[g,y]=(0,d.useState)(!1);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"navbar bg-indigo-900 items-start",children:[(0,a.jsxs)("div",{className:"flex-1",children:[(0,a.jsx)("div",{className:"mt-10"}),(0,a.jsx)(l(),{href:"/",className:"normal-case text-2xl font-bold text-indigo-100",children:"dbanime"})]}),(0,a.jsxs)("div",{className:"flex-none gap-2",children:[(0,a.jsxs)("div",{className:"form-control",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search....",className:"input input-md input-bordered w-full max-w-xs",onChange:f,onFocus:j,value:n}),(0,a.jsx)("div",{className:"",children:i&&h&&n?n.length>0&&(0,a.jsx)("ul",{className:"absolute z-50 border border-cyan-400 bg-base-100 rounded rounded-xl",children:h.map(e=>{let{mal_id:t,title:n,url:r}=e;return(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:r,children:(0,a.jsx)("p",{className:"font-semibold transition duration-500 ease-in-out hover:text-blue-500",children:n})})},t)})}):null})]}),(0,a.jsxs)("div",{className:"dropdown dropdown-end",onClick:()=>g?y(!1):y(!0),children:[(0,a.jsx)("label",{tabIndex:0,className:"btn btn-rounded btn-outline",children:(0,a.jsx)("div",{className:"",children:(0,a.jsx)(c.G,{icon:u.xiG})})}),g?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("ul",{tabIndex:0,className:"mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/",className:"/"===v.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/movie",className:"/movie"===v.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Movie"})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/about",className:"/about"===v.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"About"})})]})}):null]})]})]})})}function p(e){let t=(0,r.useRouter)(),n="/alice.png";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("link",{rel:"icon",type:"image/png",href:n}),(0,a.jsx)("link",{rel:"shorcut icon",href:n}),(0,a.jsx)("link",{rel:"canonical",href:t.pathname}),(0,a.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"title",content:e.name}),(0,a.jsx)("meta",{name:"description",content:"DBAnime atau kepanjangan nya adalah Database Anime, website ini hanya bertujuan untuk menyimpan beberapa anime untuk keperluan pribadi"}),(0,a.jsx)("meta",{name:"keywords",content:"dbanime, DBA, databaseanime, anime database, database anime. animedatabase, dba"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow"}),(0,a.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,a.jsx)("meta",{name:"language",content:"id"}),(0,a.jsx)("meta",{name:"revisit-after",content:"1 days"}),(0,a.jsx)("meta",{name:"author",content:e.name}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),(0,a.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,a.jsx)("meta",{name:"og:locale",property:"og:locale",content:"id"}),(0,a.jsx)("meta",{name:"og:title",property:"og:title",content:e.name}),(0,a.jsx)("meta",{name:"og:description",property:"og:description",content:"DBAnime atau kepanjangan nya adalah Database Anime, website ini hanya bertujuan untuk menyimpan beberapa anime untuk keperluan pribadi"}),(0,a.jsx)("meta",{name:"og:site_name",property:"og:site_name",content:e.name}),(0,a.jsx)("meta",{name:"og:type",property:"og:type",content:"website"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:e.name}),(0,a.jsx)("meta",{name:"mobile-web-app-capable",property:"mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{httpEquiv:"content-language",content:"id"}),(0,a.jsx)("title",{children:e.name+" | "+e.title})]}),(0,a.jsxs)("div",{className:"",children:[e.children,(0,a.jsx)(h,{}),(0,a.jsx)("div",{className:"mt-10"})]})]})}},7938:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(1527),r=n(8877),s=n(3065),i=n(959),o=n(6549);function l(){let[e,t]=(0,i.useState)([]);(0,i.useEffect)(()=>{n()},[]);let n=async()=>{let e=await fetch(o.env.API_HOME,{method:"GET"});t(await e.json())};return(0,a.jsxs)("div",{children:[(0,a.jsx)(s.Z,{title:"Home",name:"dbanime"}),(0,a.jsx)(r.Z,{data:e.data})]})}},4817:function(e){!function(){var t={229:function(e){var t,n,a,r=e.exports={};function s(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var l=[],c=!1,u=-1;function d(){c&&a&&(c=!1,a.length?l=a.concat(l):u=-1,l.length&&m())}function m(){if(!c){var e=o(d);c=!0;for(var t=l.length;t;){for(a=l,l=[];++u<t;)a&&a[u].run();u=-1,t=l.length}a=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||c||o(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}},i=!0;try{t[e](s,s.exports,a),i=!1}finally{i&&delete n[e]}return s.exports}a.ab="//";var r=a(229);e.exports=r}()}},function(e){e.O(0,[286,320,941,774,888,179],function(){return e(e.s=7315)}),_N_E=e.O()}]);