(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"0238":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uIcon:n("fb97").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-search",style:[{margin:t.margin},t.$u.addStyle(t.customStyle)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-search__content",style:{backgroundColor:t.bgColor,borderRadius:"round"==t.shape?"100px":"4px",borderColor:t.borderColor}},[t.$slots.label||null!==t.label?[t._t("label",[n("v-uni-text",{staticClass:"u-search__content__label"},[t._v(t._s(t.label))])])]:t._e(),n("v-uni-view",{staticClass:"u-search__content__icon"},[n("u-icon",{attrs:{size:t.searchIconSize,name:t.searchIcon,color:t.searchIconColor?t.searchIconColor:t.color},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickIcon.apply(void 0,arguments)}}})],1),n("v-uni-input",{staticClass:"u-search__content__input",style:[{textAlign:t.inputAlign,color:t.color,backgroundColor:t.bgColor,height:t.$u.addUnit(t.height)},t.inputStyle],attrs:{"confirm-type":"search",value:t.value,disabled:t.disabled,focus:t.focus,maxlength:t.maxlength,"placeholder-class":"u-search__content__input--placeholder",placeholder:t.placeholder,"placeholder-style":"color: "+t.placeholderColor,type:"text"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.blur.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.inputChange.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.getFocus.apply(void 0,arguments)}}}),t.keyword&&t.clearabled&&t.focused?n("v-uni-view",{staticClass:"u-search__content__icon u-search__content__close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"close",size:"11",color:"#ffffff",customStyle:"line-height: 12px"}})],1):t._e()],2),n("v-uni-text",{staticClass:"u-search__action",class:[(t.showActionBtn||t.show)&&"u-search__action--active"],style:[t.actionStyle],on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.custom.apply(void 0,arguments)}}},[t._v(t._s(t.actionText))])],1)},i=[]},"0985":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uIcon:n("fb97").default,uLine:n("4cb3").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"f-navbar"},[n("v-uni-view",{class:[1==t.navbarType?"f-relative":"f-fixed"],style:[1==t.navbarType?{height:t.systemInfo.navBarH+"px"}:{paddingTop:t.systemInfo.statusBarHeight+"px"}]},[n("v-uni-view",{staticClass:"bgColor",style:{height:t.systemInfo.navBarH+"px",background:t.bgColor,backgroundImage:t.gradient,opacity:5==t.navbarType?t.transparentValue:""}}),n("v-uni-view",{staticClass:"u-flex content",style:{height:t.systemInfo.titleBarHeight+"px",top:t.systemInfo.statusBarHeight+"px"}},[4!=t.navbarType&&t.isShowLeft?[3==t.navbarType?n("v-uni-view",{staticClass:"u-flex left",attrs:{"hover-class":"left--hover","hover-start-time":"150"}},[n("v-uni-view",{staticClass:"u-flex u-home-arrow-left",style:{borderColor:t.isWhite?"rgba(255,255,255,.5)":"#dadbde"}},[n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onBack.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"arrow-left",size:"19",color:t.leftColor}})],1),n("u-line",{attrs:{direction:"column",hairline:!1,length:"16",margin:"0 8px",color:t.isWhite?"rgba(255,255,255,.3)":"#dadbde"}}),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onHome.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"home",size:"20",color:t.leftColor}})],1)],1)],1):n("v-uni-view",{staticClass:"u-flex left",attrs:{"hover-class":"left--hover","hover-start-time":"150"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[n("u-icon",{attrs:{name:t.iconLeft,size:"29",color:t.leftColor}}),t.leftText?n("v-uni-text",{staticClass:"left__text",style:{color:t.leftColor}},[t._v(t._s(t.leftText))]):t._e()])],2)]:t._e(),n("v-uni-view",{staticClass:"center",style:{width:t.titleWidth+"rpx"}},[t._t("default",[n("v-uni-view",{staticClass:"title u-line-1",style:[t.isShowTransparentTitle?{}:{opacity:5==t.navbarType?t.transparentValue:""},{color:t.fontColor,width:t.titleWidth+"rpx",fontSize:t.fontSize+"rpx"}]},[t._v(t._s(t.title))])])],2),n("v-uni-view",{staticClass:"u-flex right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right")],2)],2)],1),t.isFillHeight&&5!=t.navbarType&&1!=t.navbarType?n("v-uni-view",{style:{height:t.systemInfo.navBarH+"px"}}):t._e()],1)},i=[]},"118e":function(t,e,n){var a=n("94aa");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("54b37fc9",a,!0,{sourceMap:!1,shadowMode:!1})},"2a56":function(t,e,n){"use strict";n("a9e3"),n("ac1f"),n("841c"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{shape:{type:String,default:uni.$u.props.search.shape},bgColor:{type:String,default:uni.$u.props.search.bgColor},placeholder:{type:String,default:uni.$u.props.search.placeholder},clearabled:{type:Boolean,default:uni.$u.props.search.clearabled},focus:{type:Boolean,default:uni.$u.props.search.focus},showAction:{type:Boolean,default:uni.$u.props.search.showAction},actionStyle:{type:Object,default:uni.$u.props.search.actionStyle},actionText:{type:String,default:uni.$u.props.search.actionText},inputAlign:{type:String,default:uni.$u.props.search.inputAlign},inputStyle:{type:Object,default:uni.$u.props.search.inputStyle},disabled:{type:Boolean,default:uni.$u.props.search.disabled},borderColor:{type:String,default:uni.$u.props.search.borderColor},searchIconColor:{type:String,default:uni.$u.props.search.searchIconColor},color:{type:String,default:uni.$u.props.search.color},placeholderColor:{type:String,default:uni.$u.props.search.placeholderColor},searchIcon:{type:String,default:uni.$u.props.search.searchIcon},searchIconSize:{type:[Number,String],default:uni.$u.props.search.searchIconSize},margin:{type:String,default:uni.$u.props.search.margin},animation:{type:Boolean,default:uni.$u.props.search.animation},value:{type:String,default:uni.$u.props.search.value},maxlength:{type:[String,Number],default:uni.$u.props.search.maxlength},height:{type:[String,Number],default:uni.$u.props.search.height},label:{type:[String,Number,null],default:uni.$u.props.search.label}}};e.default=a},"2dbd":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-flex[data-v-41f92858]{display:flex;flex-direction:row;align-items:center}.f-navbar[data-v-41f92858]{width:%?750?%}.f-navbar .f-fixed[data-v-41f92858]{position:fixed;top:0;left:0;right:0;z-index:1000}.f-navbar .f-relative[data-v-41f92858]{position:relative}.f-navbar .bgColor[data-v-41f92858]{position:absolute;top:0;left:0;right:0}.f-navbar .content[data-v-41f92858]{position:absolute;top:0;left:0;right:0}.f-navbar .title[data-v-41f92858]{text-align:center;color:#303133}.f-navbar .center[data-v-41f92858]{margin:0 auto}.f-navbar .left[data-v-41f92858], .f-navbar .right[data-v-41f92858]{padding:0 %?24?%;position:absolute;top:0;bottom:0}.f-navbar .left[data-v-41f92858]{left:0}.f-navbar .left--hover[data-v-41f92858]{opacity:.7}.f-navbar .left__text[data-v-41f92858]{font-size:%?30?%;margin-left:3px}.f-navbar .right[data-v-41f92858]{right:0}.f-navbar .u-home-arrow-left[data-v-41f92858]{justify-content:space-between;border-radius:100px;padding:3px 7px;opacity:.8;border:.5px solid #dadbde}',""]),t.exports=e},3370:function(t,e,n){"use strict";n.r(e);var a=n("43ea"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"3fc9":function(t,e,n){"use strict";n.r(e);var a=n("0238"),r=n("3370");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("7a0b");var o,l=n("f0c5"),s=Object(l["a"])(r["default"],a["b"],a["c"],!1,null,"72bdd996",null,!1,a["a"],o);e["default"]=s.exports},"40e7":function(t,e,n){var a=n("7684");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("630afdfe",a,!0,{sourceMap:!1,shadowMode:!1})},4227:function(t,e,n){"use strict";n.r(e);var a=n("0985"),r=n("9356");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("6f51");var o,l=n("f0c5"),s=Object(l["a"])(r["default"],a["b"],a["c"],!1,null,"41f92858",null,!1,a["a"],o);e["default"]=s.exports},"43ea":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("2a56")),i={name:"u-search",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword:function(t){this.$emit("input",t),this.$emit("change",t)},value:{immediate:!0,handler:function(t){this.keyword=t}}},computed:{showActionBtn:function(){return!this.animation&&this.showAction}},methods:{inputChange:function(t){this.keyword=t.detail.value},clear:function(){var t=this;this.keyword="",this.$nextTick((function(){t.$emit("clear")}))},search:function(t){this.$emit("search",t.detail.value);try{uni.hideKeyboard()}catch(t){}},custom:function(){this.$emit("custom",this.keyword);try{uni.hideKeyboard()}catch(t){}},getFocus:function(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur:function(){var t=this;setTimeout((function(){t.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler:function(){this.disabled&&this.$emit("click")},clickIcon:function(){this.$emit("clickIcon")}}};e.default=i},"6f51":function(t,e,n){"use strict";var a=n("935e"),r=n.n(a);r.a},7684:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-5744f68e]{margin:0 %?20?%;display:grid;grid-gap:%?10?% %?10?%;justify-content:left;grid-template-columns:repeat(auto-fill,100px)}.title[data-v-5744f68e]{font-size:%?32?%;font-weight:700}',""]),t.exports=e},"7a0b":function(t,e,n){"use strict";var a=n("118e"),r=n.n(a);r.a},8401:function(t,e,n){"use strict";n("caad"),n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=["pages/index/index","pages/goods/goods","pages/my/myInfo"],r="/pages/index/index",i=["#FFF","#fff","#FFFFFF","#ffffff","white","rgb(255,255,255)","rgba(255,255,255,1)"],o={name:"f-navbar",props:{title:{type:String},isShowTransparentTitle:{type:Boolean,default:function(){return!0}},leftText:{type:String},bgColor:{type:String,default:"#fff"},navbarType:{type:[String,Number],default:0},isShowLeft:{type:Boolean,default:function(){return!0}},leftIcon:{type:String,default:"arrow-left"},leftIconColor:{type:String,default:"#303133"},scrollTop:{type:Number,default:0},fontColor:{type:String,default:"#303133"},titleWidth:{type:[String,Number],default:400},fontSize:{type:[String,Number],default:35},gradient:{type:String},isFillHeight:{type:Boolean,default:function(){return!0}}},data:function(){return{systemInfo:{statusBarHeight:uni.getSystemInfoSync().statusBarHeight,navBarH:uni.getSystemInfoSync().statusBarHeight+44,titleBarHeight:44},firstPage:!1,transparentValue:0,iconLeft:"arrow-left",lastFrontColor:"",navFontColor:"#303133",isWhite:!1}},watch:{leftIcon:{immediate:!0,handler:function(t){this.iconLeft=t}},fontColor:{immediate:!0,handler:function(t){this.navFontColor=t,this.settingColor()}},navbarType:{immediate:!0,handler:function(t){console.log(t,"navbarType"),5==t&&(this.scrollTop>180?this.transparentValue=1:this.transparentValue=this.scrollTop/180)}},scrollTop:function(t){this.pageScroll({scrollTop:t})}},computed:{leftColor:function(){var t="#303133";return"#303133"==this.leftIconColor?i.includes(this.bgColor)&&!this.gradient||(t="#fff"):t=this.leftIconColor,t}},created:function(){this.pageScroll({scrollTop:this.scrollTop});var t=getCurrentPages(),e=t.length;1!=e||a.includes(t[0].route)||(this.firstPage=!0,this.iconLeft="home",console.log(this.firstPage,"this.firstPage"))},methods:{onBack:function(){this.firstPage?uni.reLaunch({url:r}):uni.navigateBack()},onHome:function(){uni.switchTab({url:r})},leftClick:function(){2==this.navbarType?this.$emit("leftClick"):this.onBack()},rightClick:function(){this.$emit("rightClick")},pageScroll:function(t){5==this.navbarType&&(t.scrollTop&&t.scrollTop>0?t.scrollTop>180?this.transparentValue=1:this.transparentValue=t.scrollTop/180:this.transparentValue=0)},settingColor:function(){var t=this,e=this.navFontColor;console.log(e,"settingColor");var n="#000000";i.includes(e)&&(n="#ffffff",this.isWhite=!0),this.lastFrontColor!=n&&setTimeout((function(){t.lastFrontColor=n,uni.setNavigationBarColor({frontColor:n,backgroundColor:"#FFFFFF"})}),150)}}};e.default=o},9356:function(t,e,n){"use strict";n.r(e);var a=n("8401"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"935e":function(t,e,n){var a=n("2dbd");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("7f713fa6",a,!0,{sourceMap:!1,shadowMode:!1})},"94aa":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-72bdd996], uni-scroll-view[data-v-72bdd996], uni-swiper-item[data-v-72bdd996]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}[type="search"][data-v-72bdd996]::-webkit-search-decoration{display:none}.u-search[data-v-72bdd996]{display:flex;flex-direction:row;align-items:center;flex:1}.u-search__content[data-v-72bdd996]{display:flex;flex-direction:row;align-items:center;padding:0 10px;flex:1;justify-content:space-between;border-width:1px;border-color:transparent;border-style:solid;overflow:hidden}.u-search__content__icon[data-v-72bdd996]{display:flex;flex-direction:row;align-items:center}.u-search__content__label[data-v-72bdd996]{color:#303133;font-size:14px;margin:0 4px}.u-search__content__close[data-v-72bdd996]{width:20px;height:20px;border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;background-color:#c6c7cb;display:flex;flex-direction:row;align-items:center;justify-content:center;-webkit-transform:scale(.82);transform:scale(.82)}.u-search__content__input[data-v-72bdd996]{flex:1;font-size:14px;line-height:1;margin:0 5px;color:#303133}.u-search__content__input--placeholder[data-v-72bdd996]{color:#909193}.u-search__action[data-v-72bdd996]{font-size:14px;color:#303133;width:0;overflow:hidden;transition-property:width;transition-duration:.3s;white-space:nowrap;text-align:center}.u-search__action--active[data-v-72bdd996]{width:40px;margin-left:5px}',""]),t.exports=e},a7a2:function(t,e,n){"use strict";n.r(e);var a=n("f0ea"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},bcb9:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={fNavbar:n("4227").default,uSearch:n("3fc9").default,uIcon:n("fb97").default,uTag:n("3188").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("f-navbar",{attrs:{title:t.title,fontColor:"#fff",gradient:"linear-gradient(-90deg, #e4d002, #ff570a)"}}),n("v-uni-view",{staticStyle:{margin:"14px"}},[n("u-search",{staticStyle:{"margin-bottom":"14px"},attrs:{placeholder:t.placeholder,searchIconSize:"30px",actionStyle:t.actionStyle},on:{search:function(e){arguments[0]=e=t.$handleEvent(e),t.search()},custom:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[t._v("历史记录"),n("u-icon",{staticStyle:{display:"inline-block","margin-left":"10px"},attrs:{name:"trash",size:"32"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}})],1)],1)],1),n("v-uni-view",{staticStyle:{margin:"0 20rpx"}},t._l(t.seachTabs,(function(e,a){return n("v-uni-view",{key:a,staticStyle:{display:"inline-block","margin-top":"10px","margin-left":"10px"}},[n("u-tag",{staticStyle:{display:"inline-block"},attrs:{shape:"circle ",mode:"light",text:e,type:"info"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.searchFromTag(e)}}})],1)})),1)],1)},i=[]},f008:function(t,e,n){"use strict";var a=n("40e7"),r=n.n(a);r.a},f0ea:function(t,e,n){"use strict";var a=n("4ea4");n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("5530")),i=(a(n("4227")),n("26cb")),o={computed:(0,r.default)({},(0,i.mapState)(["seachTabs"])),data:function(){return{placeholder:"请输入关键词搜索",background:{"background-image":"linear-gradient(45deg, #ff570a, #e4d002)"},keyword:"",backTextColor:{color:"#ffffff"},actionStyle:{color:"#39CCCC"},title:"",type:""}},onLoad:function(t){t&&(this.placeholder=t.title?"请搜索与"+t.title+"相关内容":"请输入关键词",this.title=t.title?t.title:"搜索",this.type=t.type)},methods:{clear:function(){this.$store.commit("clearST"),console.log("清楚")},search:function(){""!=this.keyword.trim()&&this.$store.commit("setSearchTabs",this.keyword),this.s(this.keyword),this.keyword=""},searchFromTag:function(t){this.s(t)},s:function(t){uni.navigateTo({url:"/pages/bbx-type-info/bbx-type-info?type="+this.type+"&title="+this.title+"&keyword="+t})}}};e.default=o},f3ba:function(t,e,n){"use strict";n.r(e);var a=n("bcb9"),r=n("a7a2");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("f008");var o,l=n("f0c5"),s=Object(l["a"])(r["default"],a["b"],a["c"],!1,null,"5744f68e",null,!1,a["a"],o);e["default"]=s.exports}}]);