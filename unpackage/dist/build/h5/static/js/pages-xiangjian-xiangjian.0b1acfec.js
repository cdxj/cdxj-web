(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xiangjian-xiangjian"],{"0b2d":function(t,i,e){"use strict";e.r(i);var a=e("1c93"),o=e("97ca");for(var n in o)"default"!==n&&function(t){e.d(i,t,(function(){return o[t]}))}(n);e("19ad");var c,s=e("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"4cd2111e",null,!1,a["a"],c);i["default"]=d.exports},"19ad":function(t,i,e){"use strict";var a=e("d435"),o=e.n(a);o.a},"1c93":function(t,i,e){"use strict";e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return n})),e.d(i,"a",(function(){return a}));var a={uniDataSelect:e("7b9c").default,uSticky:e("577c").default,uTabs:e("792a").default,uniIcons:e("65e4").default,zwyPopup:e("a7bd").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"status",style:{position:t.headerPosition}}),e("v-uni-view",{staticClass:"header",staticStyle:{"margin-top":"22px"}},[e("v-uni-view",{staticClass:"scan"},[e("v-uni-view",{staticStyle:{"margin-left":"20px"}},[e("uni-data-select",{staticClass:"select",attrs:{localdata:t.range,placeholder:"地址"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.change.apply(void 0,arguments)}},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}})],1)],1),e("v-uni-view",{staticClass:"input",staticStyle:{"margin-left":"35px"}},[e("v-uni-view",{staticClass:"icon search"}),e("v-uni-input",{attrs:{placeholder:"热点新闻"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toSearch()}}})],1)],1),e("v-uni-view",{staticClass:"place"}),e("v-uni-view",{staticClass:"swiper-view"},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",autoplay:"true",circular:"true","indicator-active-color":"#ffffff"}},t._l(t.swiperList,(function(i){return e("v-uni-swiper-item",{key:i.sid,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSwiper(i)}}},[e("v-uni-image",{attrs:{mode:"aspectFill",src:i.img}})],1)})),1),e("v-uni-view",{staticClass:"keep-out"})],1),e("v-uni-view",{staticClass:"category"},[e("v-uni-view",{staticClass:"box"},[e("v-uni-swiper",{staticClass:"swiper",style:{height:t.categoryHeight},attrs:{duration:"300"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.categoryChange.apply(void 0,arguments)}}},t._l(t.categoryList,(function(i,a){return e("v-uni-swiper-item",{key:a},[e("v-uni-view",{staticClass:"category-list"},t._l(i,(function(i){return e("v-uni-view",{key:i.cat_id,staticClass:"icon",staticStyle:{height:"80px"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toCategory(i)}}},[e("v-uni-image",{attrs:{mode:"widthFix",src:i.img},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.categoryImgLoad.apply(void 0,arguments)}}}),e("v-uni-view",[t._v(t._s(i.title))])],1)})),1)],1)})),1)],1)],1),e("v-uni-view",{staticClass:"pick"},[e("v-uni-view",{staticClass:"box"},[e("v-uni-view",{staticClass:"title"},[e("v-uni-view",{staticClass:"big"},[t._v("文章推荐")])],1)],1)],1),e("v-uni-view",{staticClass:"goods-list"},[e("u-sticky",{staticStyle:{padding:"0 10px"},attrs:{bgColor:"#fff"}},[e("u-tabs",{attrs:{current:t.tabs,list:t.list1},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeTab.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"product-list"},t._l(t.paperList,(function(i){return e("v-uni-view",{key:i.docid,staticClass:"product",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toGoods(i)}}},[e("v-uni-navigator",{staticClass:"item",attrs:{"hover-class":"none",url:"/pages/details/details?id="+i.docid}},[e("v-uni-image",{attrs:{mode:"widthFix",src:i.pic_url}}),e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.doctitle))]),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"price"},[e("uni-icons",{attrs:{type:"heart-filled",color:"red",size:"18"}})],1),e("v-uni-view",{staticClass:"slogan"},[t._v(t._s(i.doc_creator_name))])],1)],1)],1)})),1),e("v-uni-view",{staticClass:"loading-text"},[t._v(t._s(t.loadingText))])],1),e("v-uni-view",[e("zwy-popup",{attrs:{ishide:t.ishide}},[t._v("waiting....")])],1)],1)},n=[]},2153:function(t,i,e){"use strict";var a=e("4ea4");e("4160"),e("ac1f"),e("1276"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e("5530")),n=e("26cb"),c={computed:(0,o.default)({},(0,n.mapState)(["userInfo"])),data:function(){return{tabs:0,list1:[{name:"推荐"},{name:"生态产品"},{name:"XXXX"},{name:"民宿"},{name:"租房租地"},{name:"农村美食"},{name:"农村投资"},{name:"农村投资"},{name:"定点帮扶"},{name:"特产"}],value:0,ishide:!1,range:[],swiperList:[{sid:0,src:"自定义src0",img:"/static/HM-shophome/swiper-img/3.jpg"},{sid:1,src:"自定义src1",img:"/static/HM-shophome/swiper-img/1.jpg"},{sid:2,src:"自定义src2",img:"/static/HM-shophome/swiper-img/2.jpg"},{sid:3,src:"自定义src3",img:"/static/HM-shophome/swiper-img/3.jpg"}],categoryList:[[{cat_id:0,img:"/static/HM-shophome/category-img/0.png",title:"生态产品"},{cat_id:1,img:"/static/HM-shophome/category-img/1.png",title:"XXXX"},{cat_id:2,img:"/static/HM-shophome/category-img/2.png",title:"民宿"},{cat_id:3,img:"/static/HM-shophome/category-img/3.png",title:"租房租地"},{cat_id:4,img:"/static/HM-shophome/category-img/4.png",title:"农村美食"},{cat_id:5,img:"/static/HM-shophome/category-img/5.png",title:"农村投资"},{cat_id:6,img:"/static/HM-shophome/category-img/6.png",title:"定点帮扶"},{cat_id:7,img:"/static/HM-shophome/category-img/7.png",title:"特产"}]],paperList:[],categoryHeight:"160px",currentPageindex:0,headerPosition:"fixed",loadingText:"正在加载..."}},onLoad:function(){this.getPages()},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReady:function(){},methods:{changeTab:function(t){console.log(t)},getPages:function(){var t=this,i={nums:6};uni.request({url:"/api/part/listpart",method:"GET",success:function(i){var e=i.data.data.parts;e.forEach((function(t){t["text"]=t["text"].split("-").pop()})),t.range=e}}),uni.request({url:"/api/doc/get_recommend_doc",method:"POST",data:i,success:function(i){t.paperList=i.data.data.docs,console.log(i)}})},change:function(t){console.log(t)},toSearch:function(){uni.showToast({title:"建议跳转到新页面做搜索功能"})},toSwiper:function(t){uni.showToast({title:t.src})},toCategory:function(t){this.tabs=t.cat_id+1,uni.showToast({title:t.title+"Loading..."})},toGoods:function(t){uni.showToast({title:"文章"+t.doctitle})},categoryChange:function(t){this.currentPageindex=t.detail.current},categoryImgLoad:function(t){this.categoryImg=this.categoryImg?this.categoryImg+1:1,10==this.categoryImg&&this.getCategoryHeight()},getCategoryHeight:function(){var t=this,i=uni.createSelectorQuery().select(".category-list");i.fields({size:!0},(function(i){t.categoryHeight=i.height+"px"})).exec()}}};i.default=c},"97ca":function(t,i,e){"use strict";e.r(i);var a=e("2153"),o=e.n(a);for(var n in a)"default"!==n&&function(t){e.d(i,t,(function(){return a[t]}))}(n);i["default"]=o.a},d435:function(t,i,e){var a=e("e8e8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("1821ec0b",a,!0,{sourceMap:!1,shadowMode:!1})},e8e8:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.select[data-v-4cd2111e]{padding:0;width:50px}.uni-select__input-text[data-v-4cd2111e]{font-size:4px!important}.uni-select__selector-item[data-v-4cd2111e]{width:20px!important}[data-v-4cd2111e] .uni-select__input-text{width:100%}@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAP8AAsAAAAACFwAAAOwAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEEINSATYCJAMQCwoABCAFhG0HTxtLBxHVmzvJfhS4scOeC1v4zNNRK/hO5b0IHqg/8838ye5XsIDanmAkhZ1NSZygm4SsbYYkp17ICsOUxIP/ZZm9xejtQAD8zzX10geY387mEtXapUd7A5xF6oAi2pJoE8YNY1dexGkIwCSZQoiq1es2RUdhTBKA6N2jWwf0lAlVky3QEYSUrFSIOTjQ5VR5GZjt/168obDQQeLQMGY27FqtMxWf5z5fpgWCgdYugng8B8DWgQYUAhSI7qWujmhhqBAaptJfURzQ0ZEwVkfB58uCQSTZi0o3//JAItBAhGBk2gAURUrtxMQ2BQnPC1IQ8HyZmpvE1XgdMIDtwHVEJt4qkThsZwFPVHiEFTHKtWBBYGGUe/HmsZu6TluCStw+fXGMY9GyUb4b133Xrze9etV77VqzxcuXbYq8bF6/7rtxo5lY6A1cLcuCQJS3oXHswOYKUSaI71xkXr3ayZy2SIix0YumRS6AwEnLmr58WS9z2pKlYcJCCGzcXOU81Xuhp1osIWbBiUQWehda7lTvaNeCJX0WbYgksMA0hdlLo6zDp1PEomIdVu7YE4wN7nH7uGPdHXz2R3uHnX68tcP6SPE5ZSdObNpN/9dybtfmr6tHoy6+rN+DqdvnW9lUbkHTdcUWfKp1yzVr5Ag5HCqGU0Hca3jpAt2GiWFRwxYvdpYFo2b3tN/HvLeFd+BAr5Bu7CXnzKFlJb8dtP3ucx1djc+589Pep+W7X706stfvml+7i8fsWunxp7/f/uzsrgzj9Sv3p+6T7yqwvrfdy3nk/J6eZ84fnHp2lSvf/m/7H7569dDvuY/fTX+Mwdog+QVAGyB/IHmGyK8/exQrX13Maucu+y23rrbi5tQ1T3yTor3oj4kV8a8VtyxSqtQwKyXLbJF2kaI5DgAkYGICPzQG4dwfQxPVOhMEOlExSEJJAg2dTFSRhcCBRVEIQacCmBSkxnqLCAaiIZQBFGAiAIGH3SBxcRo0PFxBFXkPHETzDkLwCA1MfCJiR4tswStWxeEccIPlAbXSxS1rYEH2G0U8ZpeU+sw/Oq+80JR1NjrghW6MOT6JNgQO3NEJPTgPj4PAONK4hlKGYLqq4mVvKlc6M0YVh3PADZYH1EoXd8sHlvv+G0U8ZldDq/D+0XnVPTRl3QIdVFcr2rX090m0IXA8jjs6oYcOPMwQgSkfpnENpewRMF2FSvG2qnJ+zfmE6wATY6YSUmhCCQehg9V8advwun0+nHuJ0VP0kYrcz/Qox5hl") format("woff2")}.icon[data-v-4cd2111e]{font-family:HMfont-home!important;font-size:%?60?%;font-style:normal;color:#fff}.icon.scan[data-v-4cd2111e]:before{content:"\\e69a"}.icon.menu[data-v-4cd2111e]:before{content:"\\e62b"}.icon.search[data-v-4cd2111e]:before{content:"\\e628"}uni-page-body[data-v-4cd2111e]{background-color:#fff}.status[data-v-4cd2111e]{width:100%;height:0;background-color:#ff570a;position:fixed;top:0;z-index:999}.header[data-v-4cd2111e]{width:100%;height:%?100?%;background-color:#ff570a;display:flex;position:fixed;top:0;z-index:996}.header .scan[data-v-4cd2111e]{width:%?100?%;height:%?100?%;flex-shrink:1;display:flex;justify-content:center;align-items:center}.header .input[data-v-4cd2111e]{width:calc(100% - %?200?%);display:flex;justify-content:center;align-items:center;position:relative}.header .input uni-input[data-v-4cd2111e]{width:calc(100% - %?60?%);height:%?60?%;background-color:#fff;border-radius:%?60?%;padding-left:%?60?%;font-size:%?30?%}.header .input .icon[data-v-4cd2111e]{width:%?60?%;height:%?60?%;position:absolute;color:#a18090;z-index:996;top:%?20?%;left:0;font-size:%?40?%;display:flex;justify-content:center;align-items:center}.header .menu[data-v-4cd2111e]{width:%?100?%;height:%?100?%;flex-shrink:1;display:flex;justify-content:center;align-items:center}.header .menu uni-image[data-v-4cd2111e]{width:%?60?%;height:%?60?%;border-radius:%?60?%}.place[data-v-4cd2111e]{background-color:#ff570a;height:%?100?%}.swiper-view .swiper[data-v-4cd2111e]{width:100%;height:%?280?%}.swiper-view .swiper uni-image[data-v-4cd2111e]{width:100%;height:%?280?%}.swiper-view .keep-out[data-v-4cd2111e]{width:100%;height:%?30?%;border-radius:100% 100% 0 0;background-color:#ff570a;margin-top:%?-15?%;position:absolute}.category[data-v-4cd2111e]{width:95%;padding:2.5vw 2.5vw;background-color:#ff570a}.category .box[data-v-4cd2111e]{width:100%;border-radius:%?20?%;background-color:#fff}.category .box .dots[data-v-4cd2111e]{display:flex;justify-content:center;height:%?15?%;width:100%}.category .box .dots uni-view[data-v-4cd2111e]{width:%?30?%;height:%?5?%;background-color:rgba(0,0,0,.2)}.category .box .dots uni-view.active[data-v-4cd2111e]{background-color:#ff570a}.category .box .swiper[data-v-4cd2111e]{width:100%;padding:%?10?% 0}.category .box .swiper .uni-swiper-dot[data-v-4cd2111e]{width:%?20?%}.category .box .swiper .category-list[data-v-4cd2111e]{width:100%;height:auto;display:flex;justify-content:flex-start;padding:%?10?% 0;flex-flow:wrap}.category .box .swiper .category-list .icon[data-v-4cd2111e]{width:20%;display:flex;flex-flow:wrap;justify-content:center;font-size:%?22?%;color:#666}.category .box .swiper .category-list .icon uni-image[data-v-4cd2111e]{width:70%;height:13.3vw}.category .box .swiper .category-list .icon uni-view[data-v-4cd2111e]{width:100%;display:flex;justify-content:center}.pick[data-v-4cd2111e]{width:95%;padding:0 2.5vw 2.5vw 2.5vw;background:linear-gradient(180deg,#ff570a 0,#fff 105%)}.pick .box[data-v-4cd2111e]{width:100%;border-radius:%?20?%;background-color:#fff}.pick .box .title[data-v-4cd2111e]{display:flex;justify-content:flex-start;align-items:flex-end;height:%?60?%;border-bottom:solid %?1?% #eee;padding-bottom:%?10?%}.pick .box .title .big[data-v-4cd2111e]{font-size:%?34?%;padding-left:%?20?%;color:#46434f}.pick .box .title .small[data-v-4cd2111e]{font-size:%?24?%;padding-left:%?20?%;color:#827f8b}.pick .box .product-list[data-v-4cd2111e]{padding:%?15?% %?20?% %?15?% %?20?%;-webkit-column-count:2;column-count:2;-webkit-column-width:50%;column-width:50%;-webkit-column-gap:%?10?%;column-gap:%?10?%}.pick .box .product-list > uni-view[data-v-4cd2111e]{display:flex;background-color:#f8f8f8;position:relative}.pick .box .product-list > uni-view:nth-child(1) .price[data-v-4cd2111e]{color:#e65339;font-size:%?30?%;position:absolute;bottom:%?8?%;left:%?8?%}.pick .box .product-list > uni-view:nth-child(1) .slogan[data-v-4cd2111e]{color:#807c87;font-size:%?30?%;position:absolute;bottom:%?8?%;right:%?8?%}.pick .box .product-list > uni-view:nth-child(1) uni-image[data-v-4cd2111e]{width:100%;height:0}.pick .box .product-list > uni-view:nth-child(2) uni-image[data-v-4cd2111e], .pick .box .product-list > uni-view:nth-child(3) uni-image[data-v-4cd2111e]{width:calc(50% - %?5?%);height:0}.pick .box .product-list > uni-view:nth-child(2) .price[data-v-4cd2111e], .pick .box .product-list > uni-view:nth-child(3) .price[data-v-4cd2111e]{position:absolute;top:25%;left:55%;color:#e65339;font-size:%?30?%}.pick .box .product-list > uni-view:nth-child(2) .slogan[data-v-4cd2111e], .pick .box .product-list > uni-view:nth-child(3) .slogan[data-v-4cd2111e]{position:absolute;top:60%;left:55%;color:#807c87;font-size:%?20?%}.pick .box .product-list > uni-view[data-v-4cd2111e]:nth-child(2){margin-bottom:%?10?%}.banner uni-image[data-v-4cd2111e]{width:100%}.goods-list[data-v-4cd2111e]{background-color:#f4f4f4}.goods-list .title[data-v-4cd2111e]{width:100%;display:flex;justify-content:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}.goods-list .loading-text[data-v-4cd2111e]{width:100%;display:flex;justify-content:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}.goods-list .product-list[data-v-4cd2111e]{width:95%;padding:0 2.5% 2.5vw 2.5%;display:flex;justify-content:space-between;flex-wrap:wrap}.goods-list .product-list .product[data-v-4cd2111e]{width:48.75%;border-radius:%?20?%;background-color:#fff;margin:0 0 %?15?% 0}.goods-list .product-list .product uni-image[data-v-4cd2111e]{width:100%;border-radius:%?20?% %?20?% 0 0}.goods-list .product-list .product .name[data-v-4cd2111e]{width:92%;padding:%?10?% 4%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-align:justify;overflow:hidden;font-size:%?30?%}.goods-list .product-list .product .info[data-v-4cd2111e]{display:flex;justify-content:space-between;align-items:flex-end;width:92%;padding:%?10?% 4% %?10?% 4%}.goods-list .product-list .product .info .price[data-v-4cd2111e]{color:#e65339;font-size:%?30?%;font-weight:600}.goods-list .product-list .product .info .slogan[data-v-4cd2111e]{color:#807c87;font-size:%?24?%}body.?%PAGE?%[data-v-4cd2111e]{background-color:#fff}',""]),t.exports=i}}]);