(function(t){function e(e){for(var a,u,o=e[0],c=e[1],s=e[2],l=0,d=[];l<o.length;l++)u=o[l],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&d.push(i[u][0]),i[u]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},i={app:0},r=[];function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/tasumaniadiabori.wse.test/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var f=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"0670":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n("9ab4"),i=a.__importDefault(n("2b0e")),r=a.__importStar(n("bb71"));n("bf40"),i.default.use(r.default,{components:{VApp:r.VApp,VAppBar:r.VAppBar,VToolbarTitle:r.VToolbarTitle,VSpacer:r.VSpacer,VBtn:r.VBtn,VIcon:r.VIcon,VMenu:r.VMenu,VList:r.VList,VListItem:r.VListItem,VListItemTitle:r.VListItemTitle,VFlex:r.VFlex,VLayout:r.VLayout,VSnackbar:r.VSnackbar,VMain:r.VMain,VDivider:r.VDivider}}),e.default=new r.default({icons:{iconfont:"mdi"}})},"0d10":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n("9ab4"),i=a.__importDefault(n("2b0e")),r=a.__importDefault(n("2fe1"));let u=class extends i.default{constructor(){super(...arguments),this.activePage=1}currentPages(t){return this.activePage<=2&&t<=4||this.activePage>=8&&t>=6||this.activePage-t>-3&&this.activePage-t<2}};u=a.__decorate([r.default],u),e.default=u},"142d":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-background"},[n("div",{staticClass:"pagination-container"},[t._l(10,(function(e,a){return t.currentPages(e)?n("button",{staticClass:"number",class:t.activePage===e?"active":"inactive",on:{click:function(n){t.activePage=e}}},[t._v(t._s(e))]):t._e()})),t.activePage<8?n("span",{staticClass:"number hidden"},[t._v("...")]):t._e(),n("button",{staticClass:"number",class:11===t.activePage?"active":"inactive",on:{click:function(e){t.activePage=11}}},[t._v("11")])],2)])},i=[]},1799:function(t,e,n){"use strict";n.r(e);var a=n("142d"),i=n("5b9e");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("6ccd");var u=n("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"203b":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Footer"),n("Pagination")],1)},i=[]},"38f5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n("9ab4"),i=a.__importDefault(n("2b0e")),r=a.__importDefault(n("2fe1"));let u=class extends i.default{};u=a.__decorate([r.default],u),e.default=u},"3dfd":function(t,e,n){"use strict";n.r(e);var a=n("203b"),i=n("6f68");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("034f");var u=n("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},"5b65":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n("9ab4"),i=a.__importDefault(n("2b0e")),r=a.__importDefault(n("fd2d")),u=a.__importDefault(n("1799")),o=a.__importDefault(n("2fe1"));let c=class extends i.default{};c=a.__decorate([o.default({components:{Footer:r.default,Pagination:u.default}})],c),e.default=c},"5b9e":function(t,e,n){"use strict";n.r(e);var a=n("0d10"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"6ccd":function(t,e,n){"use strict";n("a3ac")},"6f68":function(t,e,n){"use strict";n.r(e);var a=n("5b65"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"760c":function(t,e,n){"use strict";n("c3f5")},"85ec":function(t,e,n){},"8b20":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-background"},[n("div",{staticClass:"footer-container"},[n("div",{staticClass:"top"},[n("img",{attrs:{src:"Logo.svg"}}),n("div",{staticClass:"logo-text"},[n("p",{staticClass:"first-part"},[t._v("Webcam studio"),n("span",{staticClass:"second-part"},[t._v(" expert")])])]),n("div",{staticClass:"button"},[n("div",{staticClass:"one"},[t._v("Каталог и сертификация вебкам-студий")])]),n("div",{staticClass:"button"},[n("div",{staticClass:"two"},[t._v("Каталог студий")])])]),n("div",{staticClass:"bottom"},[n("div",{staticClass:"button"},[t._v("Индивидуальный подбор студии")]),n("div",{staticClass:"button"},[t._v("Полезные ссылки")]),n("div",{staticClass:"button"},[t._v("Добавить студию")]),n("div",{staticClass:"button"},[t._v("Сертификация")]),n("div",{staticClass:"button"},[t._v("Оставить жалобу")]),n("div",{staticClass:"button"},[t._v("Обратная связь")]),n("div",{staticClass:"trademark"},[t._v("© 2021 webcam-studio.expert")]),n("div",{staticClass:"button"},[t._v("Пользовательское соглашение")]),n("div",{staticClass:"button"},[t._v("Политика конфиденциальности")])])])])}]},a3ac:function(t,e,n){},c3f5:function(t,e,n){},cd49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const a=n("9ab4"),i=a.__importDefault(n("2b0e")),r=a.__importDefault(n("3dfd")),u=a.__importDefault(n("0670"));i.default.config.productionTip=!0,new i.default({vuetify:u.default,render:t=>t(r.default)}).$mount("#app")},d8ef:function(t,e,n){"use strict";n.r(e);var a=n("38f5"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},fd2d:function(t,e,n){"use strict";n.r(e);var a=n("8b20"),i=n("d8ef");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("760c");var u=n("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports}});
//# sourceMappingURL=app.e9d7c691.js.map