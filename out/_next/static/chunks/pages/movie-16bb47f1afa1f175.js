(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{7104:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movie",function(){return a(9063)}])},8709:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(1527),s=a(7758),i=a.n(s),r=a(959);function o(e){let[t,a]=(0,r.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[e.data?e.data.map(e=>(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mt-10"}),(0,n.jsx)("div",{className:"container mx-auto flex flex-wrap justify-around",children:(0,n.jsxs)("div",{className:"card w-96 bg-base-100 shadow-xl image-full rounded-xl",children:[(0,n.jsx)("figure",{className:"",children:(0,n.jsx)(i(),{src:e.images.webp.large_image_url,alt:e.title,fill:!0,className:"rounded-2xl"})}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("button",{className:"card-title font-bold text-center tooltip","data-tip":"more information...",onClick:()=>t?a(!1):a(!0),children:e.title}),(0,n.jsx)("p",{className:"text-ellipsis overflow-hidden text-left indent-5",children:e.synopsis})]})]})})]},e.mal_id)):null,t?(0,n.jsx)("dialog",{className:"modal modal-bottom sm:modal-middle",children:(0,n.jsxs)("form",{method:"dialog",className:"modal-box",children:[(0,n.jsx)("h3",{className:"font-bold text-lg",children:"Hello!"}),(0,n.jsx)("p",{className:"py-4",children:"Press ESC key or click the button below to close"}),(0,n.jsx)("div",{className:"modal-action",children:(0,n.jsx)("button",{className:"btn",children:"Close"})})]})}):()=>a(!1),(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},2407:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(1527),s=a(2884),i=a(9200),r=a.n(i),o=a(5027),l=a.n(o),c=a(7758),d=a.n(c),m=a(3462),u=a(2147),h=a(959),x=a(3669),b=a(8806);function j(){let e;let t=(0,h.useRef)(null),[a,i]=(0,h.useState)(""),[r,o]=(0,h.useState)(!1),[c,j]=(0,h.useState)([]),p=b.Z.Search,g=(0,h.useCallback)(async t=>{i(t.target.value),""!==t.target.value?(await (clearTimeout(e),new Promise(function(t){e=setTimeout(function(){t(null)},700)})),x.Z.get(p+t.target.value).then(e=>j(e.data.data)).catch(e=>console.log(e.message))):j([])},[p]),f=(0,h.useCallback)(e=>{t.current&&!t.current.contains(e.target)&&(o(!1),window.removeEventListener("click",f))},[]),v=(0,h.useCallback)(()=>{o(!0),window.removeEventListener("click",f)},[f]),w=(0,s.useRouter)(),[y,N]=(0,h.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"navbar bg-gray-700 items-start",children:[(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("div",{className:"mt-10"}),(0,n.jsx)(l(),{href:"/",className:"normal-case text-2xl font-bold text-indigo-100",children:(0,n.jsx)(d(),{alt:"logo",src:"/alice.png",width:50,height:10})})]}),(0,n.jsxs)("div",{className:"flex-none gap-2",children:[(0,n.jsxs)("div",{className:"form-control",children:[(0,n.jsx)("input",{type:"text",placeholder:"Search ....",className:"input input-ghost w-full max-w-xs rounded-xl",onChange:g,onFocus:v,value:a}),(0,n.jsx)("div",{className:"",children:r&&c&&a?a.length>0&&(0,n.jsx)("ul",{className:"absolute z-50 border border-cyan-400 bg-base-100 rounded-xl",children:c.map(e=>{let{mal_id:t,title:a,url:s}=e;return(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:s,children:(0,n.jsx)("p",{className:"font-semibold transition duration-500 ease-in-out hover:text-blue-500",children:a})})},t)})}):null})]}),(0,n.jsxs)("div",{className:"dropdown dropdown-end rounded-lg",onClick:()=>y?N(!1):N(!0),children:[(0,n.jsx)("label",{tabIndex:0,className:"btn btn-rounded btn-outline rounded-lg",children:(0,n.jsx)("div",{className:"",children:(0,n.jsx)(m.G,{icon:u.xiG})})}),y?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("ul",{tabIndex:0,className:"mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-lg w-52",children:[(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/",className:"/"===w.pathname?"justify-between border-solid border-2 hover:rounded-xl border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/movie",className:"/movie"===w.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Movie"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/about",className:"/about"===w.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"About"})})]})}):()=>N(!1)]})]})]})})}function p(e){let t=(0,s.useRouter)(),a="/alice.png";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r(),{children:[(0,n.jsx)("link",{rel:"icon",type:"image/png",href:a}),(0,n.jsx)("link",{rel:"shorcut icon",href:a}),(0,n.jsx)("link",{rel:"canonical",href:t.pathname}),(0,n.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"title",content:e.name}),(0,n.jsx)("meta",{name:"description",content:"DBAnime atau kepanjangan nya adalah Database Anime, website ini hanya bertujuan untuk menyimpan beberapa anime untuk keperluan pribadi"}),(0,n.jsx)("meta",{name:"keywords",content:"dbanime, DBA, databaseanime, anime database, database anime. animedatabase, dba"}),(0,n.jsx)("meta",{name:"robots",content:"index, follow"}),(0,n.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,n.jsx)("meta",{name:"language",content:"id"}),(0,n.jsx)("meta",{name:"revisit-after",content:"1 days"}),(0,n.jsx)("meta",{name:"author",content:e.name}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,n.jsx)("meta",{name:"og:locale",property:"og:locale",content:"id"}),(0,n.jsx)("meta",{name:"og:title",property:"og:title",content:e.name}),(0,n.jsx)("meta",{name:"og:description",property:"og:description",content:"DBAnime atau kepanjangan nya adalah Database Anime, website ini hanya bertujuan untuk menyimpan beberapa anime untuk keperluan pribadi"}),(0,n.jsx)("meta",{name:"og:site_name",property:"og:site_name",content:e.name}),(0,n.jsx)("meta",{name:"og:type",property:"og:type",content:"website"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:e.name}),(0,n.jsx)("meta",{name:"mobile-web-app-capable",property:"mobile-web-app-capable",content:"yes"}),(0,n.jsx)("meta",{httpEquiv:"content-language",content:"id"}),(0,n.jsx)("title",{children:e.name+" | "+e.title})]}),(0,n.jsxs)("div",{className:"",children:[e.children,(0,n.jsx)(j,{}),(0,n.jsx)("div",{className:"mt-10"})]})]})}},8806:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});let n="https://api.jikan.moe/v4";class s{}s.Home=n+"/seasons/upcoming",s.Movie=n+"/anime?type=movie&status=upcoming",s.Search=n+"/anime?q="},9063:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(1527),s=a(2407),i=a(8709),r=a(959),o=a(8806);function l(){let[e,t]=(0,r.useState)([]),[a,l]=(0,r.useState)(1),[c,d]=(0,r.useState)(!1);(0,r.useEffect)(()=>{m(10,1)},[]);let m=async(e,a)=>{let n=await fetch(o.Z.Movie+"&limit=".concat(e,"&page=").concat(a),{method:"GET"}),s=await n.json();l(s.pagination.current_page),d(s.pagination.has_next_page),t(s)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{title:"Movie",name:"dbanime"}),(0,n.jsxs)("div",{className:"join grid grid-cols-2 xl:float-right",children:[(0,n.jsx)("button",{className:"join-item btn btn-ghost",disabled:1===a?"disable":"",onClick:()=>{m(25,a-1)},children:"Previous"}),(0,n.jsx)("button",{className:"join-item btn btn-ghost",disabled:c?"":"disable",onClick:()=>{m(25,a+1)},children:"Next"})]}),(0,n.jsx)(i.Z,{data:e.data})]})}}},function(e){e.O(0,[286,723,774,888,179],function(){return e(e.s=7104)}),_N_E=e.O()}]);