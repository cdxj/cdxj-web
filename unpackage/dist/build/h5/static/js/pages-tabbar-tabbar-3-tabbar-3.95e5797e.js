(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabbar-tabbar-3-tabbar-3"],{"003c":function(t,a,n){var i=n("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-672a6602]{display:flex;align-items:center;justify-content:center;width:100%;height:calc(100vh - var(--window-bottom) - var(--window-top));transition:opacity .3s;background:#999;opacity:0}.content.active[data-v-672a6602]{opacity:1}.content .logo[data-v-672a6602]{position:relative;margin-top:%?-400?%;width:%?200?%;height:%?200?%;opacity:0;transition:opacity .3s}.content .logo.active[data-v-672a6602]{opacity:1}.tabbar-box-wrap[data-v-672a6602]{position:absolute;width:100%;padding:%?50?%;box-sizing:border-box;bottom:0;left:0}.tabbar-box-wrap .tabbar-box[data-v-672a6602]{position:relative;display:flex;width:100%;background:#fff;border-radius:%?20?%;padding:%?15?% %?20?%;box-sizing:border-box;z-index:2;box-shadow:0 2px 5px 2px rgba(0,0,0,.1)}.tabbar-box-wrap .tabbar-box[data-v-672a6602]:after{content:"";position:absolute;bottom:%?-16?%;left:0;right:0;margin:auto;width:%?50?%;height:%?50?%;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:#fff;z-index:1;box-shadow:2px 2px 5px 1px rgba(0,0,0,.1);border-radius:2px}.tabbar-box-wrap .tabbar-box[data-v-672a6602]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;border-radius:%?20?%;z-index:2}.tabbar-box-wrap .tabbar-box .tabbar-box-item[data-v-672a6602]{width:100%;z-index:3;margin:%?10?%;color:#555;text-align:center;font-size:%?28?%}.tabbar-box-wrap .tabbar-box .tabbar-box-item .box-image[data-v-672a6602]{width:100%;height:%?80?%}',""]),t.exports=a},"1b44":function(t,a,n){"use strict";var i;n.d(a,"b",(function(){return o})),n.d(a,"c",(function(){return r})),n.d(a,"a",(function(){return i}));var o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"content",class:{active:t.active}},[i("v-uni-image",{staticClass:"logo",class:{active:t.active},attrs:{src:n("70b2"),mode:"aspectFit"}}),i("v-uni-view",{staticClass:"tabbar-box-wrap"},[i("v-uni-view",{staticClass:"tabbar-box"},[i("v-uni-view",{staticClass:"tabbar-box-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goToPage("/pages/tabbar-3-detial/tabbar-3-video/tabbar-3-video")}}},[i("v-uni-image",{staticClass:"box-image",attrs:{src:n("d5d6c"),mode:"aspectFit"}}),i("v-uni-text",{staticClass:"explain"},[t._v("发图文")])],1),i("v-uni-view",{staticClass:"tabbar-box-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goToPage("/pages/tabbar-3-detial/tabbar-3-qa/tabbar-3-qa")}}},[i("v-uni-image",{staticClass:"box-image",attrs:{src:n("28d0"),mode:"aspectFit"}}),i("v-uni-text",{staticClass:"explain"},[t._v("提问")])],1)],1)],1)],1)},r=[]},"28d0":function(t,a,n){t.exports=n.p+"static/img/qa.3ba01b46.png"},5009:function(t,a,n){var i=n("003c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("7f752f24",i,!0,{sourceMap:!1,shadowMode:!1})},"70b2":function(t,a,n){t.exports=n.p+"static/img/logo.bc25473a.png"},8648:function(t,a,n){"use strict";var i=n("5009"),o=n.n(i);o.a},"95aa":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{active:!1}},onLoad:function(){},onShow:function(){this.active=!0},onHide:function(){this.active=!1},methods:{goToPage:function(t){t&&uni.navigateTo({url:t})}}};a.default=i},adfc:function(t,a,n){"use strict";n.r(a);var i=n("95aa"),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(a,t,(function(){return i[t]}))}(r);a["default"]=o.a},d5d6c:function(t,a,n){t.exports=n.p+"static/img/video.49dd60f6.png"},f926:function(t,a,n){"use strict";n.r(a);var i=n("1b44"),o=n("adfc");for(var r in o)"default"!==r&&function(t){n.d(a,t,(function(){return o[t]}))}(r);n("8648");var e,s=n("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"672a6602",null,!1,i["a"],e);a["default"]=c.exports}}]);