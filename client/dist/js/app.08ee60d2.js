(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},i={app:0},s=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-04d39400":"85eabe77","chunk-0715409c":"e75efb59","chunk-0de60c6a":"41997694","chunk-2a5cc493":"a2624ab1","chunk-6766314c":"babaf5c3","chunk-9270ef28":"daa90560","chunk-bc221fd6":"42422200","chunk-d6a55c00":"18d5c27c"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-04d39400":1,"chunk-0715409c":1,"chunk-0de60c6a":1,"chunk-2a5cc493":1,"chunk-6766314c":1,"chunk-9270ef28":1,"chunk-bc221fd6":1,"chunk-d6a55c00":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-04d39400":"3d050aaa","chunk-0715409c":"aa1198cb","chunk-0de60c6a":"11e07029","chunk-2a5cc493":"da755dd5","chunk-6766314c":"d2f2c0a1","chunk-9270ef28":"fc59ca61","chunk-bc221fd6":"0e433876","chunk-d6a55c00":"0e433876"}[t]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===a||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){r[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=s);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t),u=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0113":function(t,e,n){"use strict";var a=n("dc0e"),r=n.n(a);r.a},"039f":function(t,e,n){t.exports=n.p+"img/home_cover.af5b3f1f.png"},"05b8":function(t,e,n){"use strict";var a=n("9d95"),r=n.n(a);r.a},"1c1a":function(t,e,n){"use strict";var a=n("e555"),r=n.n(a);r.a},2241:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("router-link",{class:t.color,attrs:{to:"/",exact:""}},[t._v("Lademy")])],1)},r=[],i={props:["color"]},s=i,o=(n("e13c"),n("2877")),c=Object(o["a"])(s,a,r,!1,null,"2e5f2534",null);c.options.__file="Logo.vue";e["a"]=c.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.desktop?n("router-view"):n("div",[n("h1",{staticStyle:{"text-align":"center",margin:"10rem 0"}},[t._v("Not Available")])])],1)},i=[],s={data:function(){return{desktop:!0}},methods:{},created:function(){window.screen.width<=1024&&(this.desktop=!1)}},o=s,c=(n("5c0b"),n("2877")),u=Object(c["a"])(o,r,i,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"slide"}},[t.showNav?a("Navbar"):t._e()],1),a("div",{staticClass:"main"},[a("section",{staticClass:"home"},[a("img",{staticClass:"home-cover",attrs:{src:n("039f"),alt:"Cover"}}),a("div",[a("Logo",{attrs:{color:"white"}})],1),a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"buttons"},[a("div",{staticClass:"student"},[a("router-link",{attrs:{to:"/student"}},[t._v("Student")])],1),a("div",{staticClass:"teacher"},[a("router-link",{attrs:{to:"/teacher"}},[t._v("Teacher")])],1)])])]),t._m(1),t._m(2),t._m(3)]),a("Footer")],1)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading"},[n("h2",[t._v("Never Stop Learning, Because Life Never Stops Teaching.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"feature1"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row content"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"section_heading text-center"},[t._v("Any Time, Any Where")]),a("p",{staticClass:"section_para text-center"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque itaque fugit, facilis culpa velit doloribus porro ex alias sed, atque pariatur perspiciatis. Eaque voluptatem quae suscipit aperiam, fuga molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.")])]),a("div",{staticClass:"col text-center"},[a("img",{staticClass:"vector-image1",attrs:{src:n("5c0f"),alt:"Education logo"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"feature2"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row content"},[a("div",{staticClass:"col-md-6 text-center"},[a("img",{staticClass:"vector-image2",attrs:{src:n("c869"),alt:"Statue"}})]),a("div",{staticClass:"col-md-6"},[a("h1",{staticClass:"section_heading text-center"},[t._v("Tests Makes Us Better Learners")]),a("p",{staticClass:"section_para text-center"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis explicabo architecto, quis iste expedita dicta reprehenderit aliquid id enim est quaerat necessitatibus, magni, mollitia cum aliquam obcaecati nobis natus dignissimos reiciendis quidem?")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"streams"},[n("div",{staticClass:"container"},[n("h2",{staticClass:"section_heading text-center"},[t._v("We Cover Everything")]),n("div",{staticClass:"row content"},[n("div",{staticClass:"col"},[n("div",{staticClass:"card"},[n("h1",{staticClass:"card-title"},[t._v("Honours")]),n("div",{staticClass:"card-background honours"})])]),n("div",{staticClass:"col"},[n("div",{staticClass:"card"},[n("h1",{staticClass:"card-title"},[t._v("Engineering")]),n("div",{staticClass:"card-background engineering"})])]),n("div",{staticClass:"col"},[n("div",{staticClass:"card"},[n("h1",{staticClass:"card-title"},[t._v("Management")]),n("div",{staticClass:"card-background management"})])])])])])}],h=n("2241"),p=n("d178"),m=n("fd2d"),g={name:"Home",components:{Logo:h["a"],Navbar:p["a"],Footer:m["a"]},data:function(){return{showNav:!1}},methods:{onScroll:function(){window.scrollY>512?this.showNav=!0:this.showNav=!1}},created:function(){window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)}},b=g,_=(n("05b8"),Object(c["a"])(b,f,v,!1,null,"0d415cbf",null));_.options.__file="Home.vue";var C=_.exports;a["a"].use(d["a"]);var k=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:C},{path:"/aboutus",name:"about",component:function(){return n.e("chunk-9270ef28").then(n.bind(null,"f820"))}},{path:"/student",name:"student Login",component:function(){return n.e("chunk-0715409c").then(n.bind(null,"8ce7"))}},{path:"/student/forgot",name:"forgot",component:function(){return n.e("chunk-6766314c").then(n.bind(null,"5373"))}},{path:"/student/dashboard",name:"student",component:function(){return n.e("chunk-2a5cc493").then(n.bind(null,"448f"))},children:[{path:"/dashboard",component:function(){return n.e("chunk-0de60c6a").then(n.bind(null,"36f0"))}},{path:"/student/courses",component:function(){return n.e("chunk-d6a55c00").then(n.bind(null,"4d69"))}},{path:"/student/explore",component:function(){return n.e("chunk-bc221fd6").then(n.bind(null,"bef7"))}},{path:"/student/profile",component:function(){return n.e("chunk-04d39400").then(n.bind(null,"15ef"))}}]}],scrollBehavior:function(){return{x:0,y:0}}}),w=n("2f62"),y=n("bc3a"),x=n.n(y);a["a"].use(w["a"]);var E=new w["a"].Store({state:{profile:{}},getters:{getProfile:function(t){return t.profile}},mutations:{FETCH_DATA:function(t,e){t.profile=e}},actions:{fetchData:function(t){x.a.get("/student/info").then(function(e){t.commit("FETCH_DATA",e.data)})}}}),T=n("9483");Object(T["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({router:k,store:E,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),r=n.n(a);r.a},"5c0f":function(t,e,n){t.exports=n.p+"img/eduvector.4e8a7bc4.jpg"},"5e27":function(t,e,n){},"9d95":function(t,e,n){},c0e8:function(t,e,n){},c869:function(t,e,n){t.exports=n.p+"img/statue.564dc168.png"},d178:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar align-middle"},[n("div",{staticClass:"container"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/",tag:"a"}},[t._v("Lademy")])],1),n("div",{staticClass:"buttons pull-right mr-5"},[n("button",{staticClass:"student"},[n("router-link",{attrs:{to:"/student"}},[t._v("Student")])],1),n("button",{staticClass:"teacher"},[n("router-link",{attrs:{to:"/teacher"}},[t._v("Teacher")])],1)])])])},r=[],i={},s=i,o=(n("1c1a"),n("2877")),c=Object(o["a"])(s,a,r,!1,null,"67be737d",null);c.options.__file="Navbar.vue";e["a"]=c.exports},dc0e:function(t,e,n){},e13c:function(t,e,n){"use strict";var a=n("c0e8"),r=n.n(a);r.a},e555:function(t,e,n){},fd2d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content row"},[t._m(0),t._m(1),n("div",{staticClass:"col"},[n("ul",{staticClass:"links"},[n("router-link",{attrs:{to:"/aboutus",tag:"li"}},[t._v("About Us")]),n("router-link",{attrs:{to:"/privacy-policy",tag:"li"}},[t._v("Privacy Policy")]),n("router-link",{attrs:{to:"/legal",tag:"li"}},[t._v("Terms & Conditions")]),n("router-link",{attrs:{to:"/faq",tag:"li"}},[t._v("FAQ")]),n("router-link",{attrs:{to:"/contactus",tag:"li"}},[t._v("Contact Us")])],1)])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("h1",{staticClass:"logo-footer"},[t._v("\n          Lademy\n          "),n("sup",[t._v("TM")])]),n("p",[t._v("2018-2019")]),n("p",[t._v("All Rights Reserved.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("div",{staticClass:"social-link"})])}],i=(n("0113"),n("2877")),s={},o=Object(i["a"])(s,a,r,!1,null,"116ca366",null);o.options.__file="Footer.vue";e["a"]=o.exports}});
//# sourceMappingURL=app.08ee60d2.js.map