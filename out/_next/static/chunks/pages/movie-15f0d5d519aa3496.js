(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[583],{6010:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movie",function(){return a(2837)}])},8877:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(1527),s=a(5941),r=a.n(s),i=a(3283);function o(e){return(0,i.useRouter)(),(0,n.jsxs)(n.Fragment,{children:[e.data?e.data.map(e=>(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mt-10"}),(0,n.jsx)("div",{className:"container mx-auto flex flex-wrap justify-around",children:(0,n.jsxs)("div",{className:"card w-96 bg-base-100 shadow-xl image-full",children:[(0,n.jsx)("figure",{className:"blur-sm",children:(0,n.jsx)(r(),{src:e.images.webp.large_image_url,alt:e.title,fill:!0})}),(0,n.jsxs)("div",{className:"card-body",children:[(0,n.jsx)("h2",{className:"card-title font-bold text-center",children:e.title}),(0,n.jsx)("p",{className:"text-ellipsis overflow-hidden text-left indent-5",children:e.synopsis})]})]})})]},e.mal_id)):"",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]})}},3065:function(e,t,a){"use strict";a.d(t,{Z:function(){return x}});var n=a(1527),s=a(3283),r=a(9660),i=a.n(r),o=a(98),l=a.n(o),c=a(3462),d=a(2147),m=a(959),u=a(3669);function b(){let e;let t=(0,m.useRef)(null),[a,r]=(0,m.useState)(""),[i,o]=(0,m.useState)(!1),[b,x]=(0,m.useState)([]),h='"https://api.jikan.moe/v4/anime?q="',p=(0,m.useCallback)(async t=>{r(t.target.value),""!==t.target.value?(await (clearTimeout(e),new Promise(function(t){e=setTimeout(function(){t(null)},500)})),u.Z.get(h+t.target.value).then(e=>x(e.data.data)).catch(e=>console.log(e.message))):x([])},[h]),j=(0,m.useCallback)(e=>{t.current&&!t.current.contains(e.target)&&(o(!1),window.removeEventListener("click",j))},[]),f=(0,m.useCallback)(()=>{o(!0),window.removeEventListener("click",j)},[j]),v=(0,s.useRouter)(),[g,w]=(0,m.useState)(!1);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"navbar bg-indigo-900 items-start",children:[(0,n.jsxs)("div",{className:"flex-1",children:[(0,n.jsx)("div",{className:"mt-10"}),(0,n.jsx)(l(),{href:"/",className:"normal-case text-2xl font-bold text-indigo-100",children:"dbanime"})]}),(0,n.jsxs)("div",{className:"flex-none gap-2",children:[(0,n.jsxs)("div",{className:"form-control",children:[(0,n.jsx)("input",{type:"text",placeholder:"Search....",className:"input input-md input-bordered w-full max-w-xs",onChange:p,onFocus:f,value:a}),(0,n.jsx)("div",{className:"",children:i&&b&&a?a.length>0&&(0,n.jsx)("ul",{className:"absolute z-50 border border-cyan-400 bg-base-100 rounded rounded-xl",children:b.map(e=>{let{mal_id:t,title:a,url:s}=e;return(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:s,children:(0,n.jsx)("p",{className:"font-semibold transition duration-500 ease-in-out hover:text-blue-500",children:a})})},t)})}):null})]}),(0,n.jsxs)("div",{className:"dropdown dropdown-end",onClick:()=>g?w(!1):w(!0),children:[(0,n.jsx)("label",{tabIndex:0,className:"btn btn-rounded btn-outline",children:(0,n.jsx)("div",{className:"",children:(0,n.jsx)(c.G,{icon:d.xiG})})}),g?(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("ul",{tabIndex:0,className:"mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52",children:[(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/",className:"/"===v.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/movie",className:"/movie"===v.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"Movie"})}),(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:"/about",className:"/about"===v.pathname?"justify-between border-solid border-2 border-sky-700":"justify-between hover:border-solid hover:border-2 hover:border-sky-500",children:"About"})})]})}):null]})]})]})})}function x(e){let t=(0,s.useRouter)(),a="/alice.png";return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i(),{children:[(0,n.jsx)("link",{rel:"icon",type:"image/png",href:a}),(0,n.jsx)("link",{rel:"shorcut icon",href:a}),(0,n.jsx)("link",{rel:"canonical",href:t.pathname}),(0,n.jsx)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"title",content:e.name}),(0,n.jsx)("meta",{name:"description",content:"DBAnime atau kepanjangan nya adalah Database Anime, website ini hanya bertujuan untuk menyimpan beberapa anime untuk keperluan pribadi"}),(0,n.jsx)("meta",{name:"keywords",content:"dbanime, DBA, databaseanime, anime database, database anime. animedatabase, dba"}),(0,n.jsx)("meta",{name:"robots",content:"index, follow"}),(0,n.jsx)("meta",{httpEquiv:"Content-Type",content:"text/html; charset=utf-8"}),(0,n.jsx)("meta",{name:"language",content:"id"}),(0,n.jsx)("meta",{name:"revisit-after",content:"1 days"}),(0,n.jsx)("meta",{name:"author",content:e.name}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),(0,n.jsx)("meta",{name:"theme-color",content:"#000000"}),(0,n.jsx)("meta",{name:"og:locale",property:"og:locale",content:"id"}),(0,n.jsx)("meta",{name:"og:title",property:"og:title",content:e.name}),(0,n.jsx)("meta",{name:"og:description",property:"og:description",content:"DBAnime atau kepanjangan nya adalah Database Anime, website ini hanya bertujuan untuk menyimpan beberapa anime untuk keperluan pribadi"}),(0,n.jsx)("meta",{name:"og:site_name",property:"og:site_name",content:e.name}),(0,n.jsx)("meta",{name:"og:type",property:"og:type",content:"website"}),(0,n.jsx)("meta",{name:"apple-mobile-web-app-title",property:"apple-mobile-web-app-title",content:e.name}),(0,n.jsx)("meta",{name:"mobile-web-app-capable",property:"mobile-web-app-capable",content:"yes"}),(0,n.jsx)("meta",{httpEquiv:"content-language",content:"id"}),(0,n.jsx)("title",{children:e.name+" | "+e.title})]}),(0,n.jsxs)("div",{className:"",children:[e.children,(0,n.jsx)(b,{}),(0,n.jsx)("div",{className:"mt-10"})]})]})}},2837:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var n=a(1527),s=a(3065),r=a(8877),i=a(959);function o(){let[e,t]=(0,i.useState)([]);(0,i.useEffect)(()=>{a()},[]);let a=async()=>{let e=await fetch('"https://api.jikan.moe/v4/anime?type=movie&order_by=end_date&status=upcoming"',{method:"GET"});t(await e.json())};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{title:"Movie",name:"dbanime"}),(0,n.jsx)(r.Z,{data:e.data})]})}}},function(e){e.O(0,[286,320,941,774,888,179],function(){return e(e.s=6010)}),_N_E=e.O()}]);