(function(t){function e(e){for(var s,o,r=e[0],c=e[1],u=e[2],d=0,v=[];d<r.length;d++)o=r[d],a[o]&&v.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(v.length)v.shift()();return n.push.apply(n,u||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},a={app:0},n=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"039f":function(t,e,i){t.exports=i.p+"img/home_cover.af5b3f1f.png"},"0b74":function(t,e,i){},1968:function(t,e,i){"use strict";var s=i("e234"),a=i.n(s);a.a},"225e":function(t,e,i){"use strict";var s=i("5b66"),a=i.n(s);a.a},4336:function(t,e,i){"use strict";var s=i("5bab"),a=i.n(s);a.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("transition",{attrs:{"before-enter":t.beforeEnter,enter:t.enter}},[i("router-view")],1)],1)},n=[],o=new TimelineMax,r={methods:{beforeEnter:function(t){t.style.opacity=0,t.style.visibility="hidden"},enter:function(t){t.style.opacity=1,t.style.visibility="visible",o.to(".transition-bar:nth-of-type(1)",2.6,{width:0,ease:Power2.easeInOut},.8).to(".transition-bar:nth-of-type(2)",2.4,{width:0,ease:Power4.easeInOut},1.1).to(".transition-bar:nth-of-type(3)",2.6,{width:0,ease:Power3.easeInOut},.95)}}},c=r,u=(i("5c0b"),i("2877")),l=Object(u["a"])(c,a,n,!1,null,null,null);l.options.__file="App.vue";var d=l.exports,v=i("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{name:"slide"}},[t.showNav?s("Navbar"):t._e()],1),s("div",{staticClass:"main"},[s("section",{staticClass:"home"},[s("img",{staticClass:"home-cover",attrs:{src:i("039f"),alt:"Cover"}}),s("div",[s("div",{staticClass:"logo brand-logo"},[s("router-link",{attrs:{to:"/",exact:""}},[t._v("Lademy")])],1),t._m(0)]),s("div",{staticClass:"container"},[t._m(1),s("div",{staticClass:"buttons"},[s("div",{staticClass:"student"},[s("router-link",{attrs:{to:"/student"}},[t._v("Student")])],1),s("div",{staticClass:"teacher"},[s("router-link",{attrs:{to:"/teacher"}},[t._v("Teacher")])],1)])])]),t._m(2),t._m(3),t._m(4)]),s("Footer")],1)},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search right"},[i("i",{staticClass:"material-icons medium"},[t._v("search")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"heading"},[i("h2",[t._v("Never Stop Learning, Because Life Never Stops Teaching.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"feature1"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"content"},[s("div",{staticClass:"col s6"},[s("h1",{staticClass:"section_heading center-align"},[t._v("Any Time, Any Where")]),s("p",{staticClass:"section_para center-align"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque itaque fugit, facilis culpa velit doloribus porro ex alias sed, atque pariatur perspiciatis. Eaque voluptatem quae suscipit aperiam, fuga molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.")])]),s("div",{staticClass:"col s6 center-align"},[s("img",{attrs:{src:i("5c0f"),alt:"Education logo"}})])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"feature2"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"content"},[s("div",{staticClass:"col s6 center-align"},[s("img",{attrs:{src:i("c869"),alt:"Statue"}})]),s("div",{staticClass:"col s6"},[s("h1",{staticClass:"section_heading center-align"},[t._v("Tests Makes Us Better Learners")]),s("p",{staticClass:"section_para center-align"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis explicabo architecto, quis iste expedita dicta reprehenderit aliquid id enim est quaerat necessitatibus, magni, mollitia cum aliquam obcaecati nobis natus dignissimos reiciendis quidem?")])])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"streams"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("h2",{staticClass:"section_heading center-align"},[t._v("We Cover Everything")]),i("div",{staticClass:"content"},[i("div",{staticClass:"col s4"},[i("div",{staticClass:"card"},[i("h1",{staticClass:"card-title"},[t._v("Honours")]),i("div",{staticClass:"card-background honours"})])]),i("div",{staticClass:"col s4"},[i("div",{staticClass:"card"},[i("h1",{staticClass:"card-title"},[t._v("Engineering")]),i("div",{staticClass:"card-background engineering"})])]),i("div",{staticClass:"col s4"},[i("div",{staticClass:"card"},[i("h1",{staticClass:"card-title"},[t._v("Management")]),i("div",{staticClass:"card-background management"})])])])])])])}],f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{staticClass:"navbar"},[i("div",{staticClass:"container"},[i("div",{staticClass:"logo brand-logo"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Lademy")])],1),i("div",{staticClass:"buttons right"},[i("button",{staticClass:"student"},[i("router-link",{attrs:{to:"/student"}},[t._v("Student")])],1),i("button",{staticClass:"teacher"},[i("router-link",{attrs:{to:"/teacher"}},[t._v("Teacher")])],1)])])])},b=[],h={},g=h,_=(i("4336"),Object(u["a"])(g,f,b,!1,null,"86ccbdac",null));_.options.__file="Navbar.vue";var C=_.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"page-footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"content row"},[t._m(0),t._m(1),i("div",{staticClass:"col s4 right"},[i("ul",{staticClass:"links"},[i("router-link",{attrs:{to:"/aboutus",tag:"li"}},[t._v("About Us")]),i("router-link",{attrs:{to:"/privacy-policy",tag:"li"}},[t._v("Privacy Policy")]),i("router-link",{attrs:{to:"/legal",tag:"li"}},[t._v("Terms & Conditions")]),i("router-link",{attrs:{to:"/faq",tag:"li"}},[t._v("FAQ")]),i("router-link",{attrs:{to:"/contactus",tag:"li"}},[t._v("Contact Us")])],1)])])])])},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col s4"},[i("h1",{staticClass:"logo-footer"},[t._v("\n          Lademy\n          "),i("sup",[t._v("TM")])]),i("p",[t._v("2018-2019")]),i("p",[t._v("All Rights Reserved.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col s4"},[i("div",{staticClass:"social-link"},[i("ul",[i("li")])])])}],y=(i("225e"),{}),x=Object(u["a"])(y,q,w,!1,null,"2e636209",null);x.options.__file="Footer.vue";var k=x.exports,E={name:"Home",components:{Navbar:C,Footer:k},data:function(){return{showNav:!1}},methods:{onScroll:function(){window.scrollY>512?this.showNav=!0:this.showNav=!1}},created:function(){window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)}},N=E,O=(i("1968"),Object(u["a"])(N,m,p,!1,null,"a1b22ed0",null));O.options.__file="Home.vue";var L=O.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"slide"}},[t.showNav?i("Navbar"):t._e()],1),i("div",{staticClass:"logo"},[i("router-link",{attrs:{to:"/",exact:""}},[t._v("Lademy.")])],1),t._m(0),i("Footer")],1)},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("section",{staticClass:"aboutus"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"heading"},[i("h1",[t._v("We Are Lademy.")])]),i("div",{staticClass:"desc"},[t._v("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore velit dolore illum eaque perferendis amet placeat nemo mollitia, nesciunt sapiente minus numquam tempora doloribus ad esse dolores quibusdam dolorem. Animi quam veritatis omnis possimus officiis est delectus similique veniam illum odio. Quidem reprehenderit sequi sint, ex itaque nulla veritatis. Sint corporis dignissimos voluptatem, vitae maxime porro quaerat provident? Libero nobis architecto maiores incidunt amet magnam voluptatem distinctio consectetur corporis. Vitae cupiditate sed iusto! Delectus facilis illum veniam quisquam magni aspernatur eius explicabo, quibusdam laboriosam necessitatibus! Ducimus atque cupiditate vero, eaque numquam ab quis consectetur odit ea aliquid suscipit consequuntur eligendi?\n            "),i("br"),i("br"),t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum sunt distinctio provident eos dolore tenetur, modi veritatis soluta. Ratione harum necessitatibus explicabo nobis beatae magni ducimus, totam nam porro incidunt consectetur, optio maiores blanditiis, tempore mollitia. Temporibus voluptas sequi tenetur ea accusamus! Repellendus, soluta? Facere explicabo doloremque unde rerum quidem id eveniet quis, quia iusto quisquam labore consequuntur ipsa quos. Provident officiis, corrupti quisquam unde nihil dignissimos enim porro voluptate aspernatur, perferendis consequatur deleniti molestias sed fuga odit iusto eius amet, laborum similique esse impedit dolore. At adipisci quae velit id. Nobis, pariatur porro quos voluptate ut enim beatae, necessitatibus cum quia eius facilis quae sapiente. Labore ad aliquid praesentium aut beatae expedita aperiam repudiandae saepe. Repellendus esse quasi reiciendis hic! Id quasi, perferendis ipsam temporibus dolorem tenetur similique optio possimus enim illo eveniet iusto explicabo inventore hic quaerat, repellat molestias consequuntur alias magnam ut excepturi odit cupiditate atque. Quos quae totam vero impedit consectetur doloremque velit itaque a tempore ipsum illo accusantium nisi ducimus corporis commodi, nobis ex qui hic porro quia repellendus, ipsa in quo. Odio cumque officiis perferendis error sapiente tenetur vitae unde quae atque quia eos nostrum aperiam molestias voluptatibus ex eligendi amet, tempora fuga!\n          ")])])])])])}],$={data:function(){return{showNav:!1}},components:{Navbar:C,Footer:k},methods:{onscroll:function(){window.scrollY>10?this.showNav=!0:this.showNav=!1}},created:function(){window.addEventListener("scroll",this.onscroll)}},A=$,P=(i("ac36"),Object(u["a"])(A,j,S,!1,null,"caab4888",null));P.options.__file="About.vue";var T=P.exports;s["a"].use(v["a"]);var F=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:L},{path:"/aboutus",name:"about",component:T}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),M=i("2f62");s["a"].use(M["a"]);var I=new M["a"].Store({state:{},mutations:{},actions:{}}),R=i("9483");Object(R["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),s["a"].config.productionTip=!1,new s["a"]({router:F,store:I,render:function(t){return t(d)}}).$mount("#app")},"5b66":function(t,e,i){},"5bab":function(t,e,i){},"5c0b":function(t,e,i){"use strict";var s=i("5e27"),a=i.n(s);a.a},"5c0f":function(t,e,i){t.exports=i.p+"img/eduvector.4e8a7bc4.jpg"},"5e27":function(t,e,i){},ac36:function(t,e,i){"use strict";var s=i("0b74"),a=i.n(s);a.a},c869:function(t,e,i){t.exports=i.p+"img/statue.564dc168.png"},e234:function(t,e,i){}});
//# sourceMappingURL=app.2eacc38d.js.map