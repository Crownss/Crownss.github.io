(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{420:function(t,e,r){"use strict";r(5),r(6),r(13),r(14);var n=r(2),o=(r(27),r(7),r(32),r(51),r(391),r(17),r(34),r(392),r(393),r(394),r(395),r(396),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(39),r(48),r(9),r(63),r(251),r(0)),c=r(81),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(l.t)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(O),offset:Object.keys(h),order:Object.keys(m)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var y=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=y.get(l);return d||function(){var t,e;for(e in d=[],_)_[e].forEach((function(t){var n=r[t],o=j(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),y.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},513:function(t,e,r){"use strict";r.r(e);var n=r(16),o=(r(60),{data:function(){return{getLocation:[],getCurrent:[],getCurrentCondition:[]}},created:function(){this.getProduct()},methods:{getProduct:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("https://api.weatherapi.com/v1/current.json?key=fb18d3f273cd470590563720221203&q=Jakarta&aqi=yes").then((function(e){t.getLocation=e.data.location,t.getCurrent=e.data.current,t.getCurrentCondition=e.data.current.condition})).catch((function(e){if(404===e.response.status)return t.$nuxt.error({statusCode:404,message:e.message})}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=r(72),l=r(114),f=r.n(l),d=r(374),v=r(420),O=r(505),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("br"),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12",md:"10","no-gutters":""}},[r("h2",[t._v("Cuaca hari ini")]),t._v(" "),r("h4",[t._v("\n        Lokasi: "+t._s(t.getLocation.country)+", "+t._s(t.getLocation.region)+",\n        "+t._s(t.getLocation.name)+"("+t._s(t.getLocation.lat)+","+t._s(t.getLocation.lon)+")\n      ")]),t._v(" "),r("h4",[t._v("Waktu Lokasi: "+t._s(t.getLocation.localtime))]),t._v(" "),r("br"),t._v(" "),r("h4",[t._v("Suhu(dalam calcius): "+t._s(t.getCurrent.temp_c))]),t._v(" "),r("h4",[t._v("\n        Kondisi: "+t._s(t.getCurrentCondition.text)+"\n        ")]),t._v(" "),r("h4",[t._v("\n        Terakhir update: "+t._s(t.$moment(t.getCurrent.last_updated).fromNow())+"\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VApp:d.a,VCol:v.a,VRow:O.a})}}]);