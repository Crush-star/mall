(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},c={app:0},o=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0ea0f0":"75579a57","chunk-46d851f8":"aad24ddf","chunk-934aff2c":"9ea572da","chunk-05c0139d":"61d08873","chunk-5abad69c":"6433d9bd","chunk-6503a7aa":"9bfc3555"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-46d851f8":1,"chunk-934aff2c":1,"chunk-05c0139d":1,"chunk-5abad69c":1,"chunk-6503a7aa":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0ea0f0":"31d6cfe0","chunk-46d851f8":"1b996598","chunk-934aff2c":"33d45a5c","chunk-05c0139d":"71274136","chunk-5abad69c":"94509e0b","chunk-6503a7aa":"c5614662"}[t]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[t],d.parentNode.removeChild(d),n(o)},d.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"09b4":function(t,e,n){},1413:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-tab-bar")],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",{attrs:{exclude:"detail"}},[n("router-view")],1),n("tab-bar",[n("tab-bar-item",{attrs:{path:"/home"}},[n("i",{staticClass:"iconfont icon-shangpu",attrs:{slot:"item-icon"},slot:"item-icon"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("主页")])]),n("tab-bar-item",{attrs:{path:"/sort"}},[n("i",{staticClass:"iconfont icon-fenlei",attrs:{slot:"item-icon"},slot:"item-icon"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),n("tab-bar-item",{attrs:{path:"/shopcart"}},[n("i",{staticClass:"iconfont icon-gouwuche",attrs:{slot:"item-icon"},slot:"item-icon"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),n("tab-bar-item",{attrs:{path:"/porfile"}},[n("i",{staticClass:"iconfont icon-wode",attrs:{slot:"item-icon"},slot:"item-icon"}),n("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},s=[],l={name:"labbar"},f=l,d=(n("c5cf"),n("2877")),h=Object(d["a"])(f,u,s,!1,null,"9022749a",null),p=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{active:t.IsActive},attrs:{id:"tab-bar-item"},on:{click:t.click}},[n("div",[t._t("item-icon")],2),n("div",{style:t.activeColor},[t._t("item-text")],2)])},b=[],v=(n("ac1f"),n("5319"),{name:"tabbar",data:function(){return{}},props:{path:String,activecolor:{type:String}},computed:{IsActive:function(){return this.$route.path==this.path},activeColor:function(){return this.IsActive?{}:{color:this.activecolor}}},methods:{click:function(){this.$router.replace(this.path).catch((function(){}))}}}),k=v,g=Object(d["a"])(k,m,b,!1,null,null,null),y=g.exports,_={name:"MainTabBar",components:{TabBar:p,TabBarItem:y}},w=_,x=(n("e418"),Object(d["a"])(w,o,i,!1,null,null,null)),C=x.exports,L={name:"App",components:{MainTabBar:C}},O=L,j=(n("034f"),Object(d["a"])(O,a,c,!1,null,null,null)),A=j.exports,E=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),P=function(){return Promise.all([n.e("chunk-934aff2c"),n.e("chunk-05c0139d")]).then(n.bind(null,"77b8"))},T=function(){return Promise.all([n.e("chunk-934aff2c"),n.e("chunk-5abad69c")]).then(n.bind(null,"679c"))},S=function(){return n.e("chunk-46d851f8").then(n.bind(null,"07bd"))},I=function(){return n.e("chunk-2d0ea0f0").then(n.bind(null,"8fd0"))},B=function(){return Promise.all([n.e("chunk-934aff2c"),n.e("chunk-6503a7aa")]).then(n.bind(null,"da1e"))};r["default"].use(E["a"]);var $=[{path:"/",redirect:"/home"},{path:"/home",component:P},{path:"/sort",component:T},{path:"/shopcart",component:S},{path:"/porfile",component:I},{path:"/home/:iid",component:B}],M=new E["a"]({routes:$,mode:"history",linkActiveClass:"active"}),N=M,q=n("3835"),D=n("b85c"),J=n("2f62");r["default"].use(J["a"]);var F=new J["a"].Store({state:{cartList:[],cartListIsAllCheck:Boolean},mutations:{addToCart:function(t,e){if(0==t.cartList.length)e.count=1,t.cartList.push(e);else{var n,a=1,c=Object(D["a"])(t.cartList.entries());try{for(c.s();!(n=c.n()).done;){var o=Object(q["a"])(n.value,2),i=o[0],u=o[1];if(u.iid===e.iid){t.cartList[i].count+=1,r["default"].set(t.cartList,i,t.cartList[i]),a=0;break}}}catch(s){c.e(s)}finally{c.f()}a&&(e.count=1,t.cartList.push(e))}},editCheck:function(t,e){var n=!t.cartList[e].check;r["default"].set(t.cartList[e],"check",n)},nobool:function(t){var e=!t.cartListIsAllCheck;t.cartListIsAllCheck=e;var n,r=Object(D["a"])(t.cartList);try{for(r.s();!(n=r.n()).done;){var a=n.value;a.check!==e&&(a.check=!a.check)}}catch(c){r.e(c)}finally{r.f()}},editbool:function(t,e){t.cartListIsAllCheck=e}}}),H=F,K=n("5c96"),U=n.n(K);n("0fae");r["default"].use(U.a),r["default"].config.productionTip=!1,r["default"].prototype.$bus=new r["default"],new r["default"]({render:function(t){return t(A)},router:N,store:H}).$mount("#app")},"85ec":function(t,e,n){},c5cf:function(t,e,n){"use strict";n("1413")},e418:function(t,e,n){"use strict";n("09b4")}});
//# sourceMappingURL=app.9b136475.js.map