(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,o){"use strict";o.r(t);o(60),o(25),o(37),o(35),o(46),o(13);var n=o(3),r={data:function(){return{navigationHideTop:!1,isBackground:!1,pagesWithBackground:["about-business-point___uk","services-id___uk","portfolio___uk","privacy-policy___uk","contacts___uk","about-business-point___ru","services-id___ru","portfolio___ru","privacy-policy___ru","contacts___ru"],categories:[],isDropdownActive:!1,showMobileMenu:!1,collapseTimeout:null}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var o,n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=[],t.next=3,e.$store.state.services;case 3:for(r in n=t.sent)o.push({id:r,jobs:n[r].jobs});e.categories=o;case 6:case"end":return t.stop()}}),t)})))()},watch:{$route:function(e,t){this.showMobileMenu=!1,this.isDropdownActive=!1,this.isBackground=this.pagesWithBackground.includes(e.name)},showMobileMenu:function(e){document&&(document.body.style.overflow=e?"hidden":"auto")}},created:function(){this.pagesWithBackground.includes(this.$route.name)&&(this.navigationHideTop=!1,this.isBackground=!0),window.onscroll=this.handleScroll,window.scrollY>0&&(this.navigationHideTop=!0)},methods:{collapseDropdown:function(e){var t=this;window.screen.width<1224||(this.collapseTimeout&&clearTimeout(this.collapseTimeout),e?(clearTimeout(this.collapseTimeout),this.isDropdownActive=e):this.collapseTimeout=setTimeout((function(){t.isDropdownActive=e}),500))},handleScroll:function(e){!this.navigationHideTop&&window.scrollY>0&&(this.navigationHideTop=!0),this.navigationHideTop&&0===window.scrollY&&(this.navigationHideTop=!1)}},computed:{availableLocales:function(){var e=this;return this.$i18n.locales.filter((function(i){return i.code!==e.$i18n.locale}))}}},l=(o(225),o(24)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigation-wrapper",class:{"hide-top":e.navigationHideTop||e.isDropdownActive,background:e.isBackground},attrs:{id:"navigation"}},[n("div",{staticClass:"navigation-top layout"},[n("div",{staticClass:"navigation-top__item phones"},[n("div",{staticClass:"navigation-top__item__bg"}),e._v(" "),n("a",{attrs:{href:"tel:"+e.$store.state.contacts.number_1_call}},[e._v(e._s(e.$store.state.contacts.number_1))]),e._v(" "),n("a",{attrs:{href:"tel:"+e.$store.state.contacts.number_2_call}},[e._v(e._s(e.$store.state.contacts.number_2))])]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"navigation-top__item lang"},[n("div",{staticClass:"navigation-top__item__bg"}),e._v(" "),n("nuxt-link",{attrs:{title:("uk"===e.$i18n.locale?"ru":"uk")+" "+e.$t("site-version"),to:e.switchLocalePath("uk"===e.$i18n.locale?"ru":"uk")}},[e._v(e._s(e.$i18n.locale))])],1)]),e._v(" "),n("nav",{staticClass:"navigation layout"},[e.isDropdownActive&&!e.showMobileMenu?n("div",{staticClass:"dropdown layout",on:{mouseenter:function(t){return e.collapseDropdown(!0)},mouseleave:function(t){return e.collapseDropdown(!1)}}},e._l(e.categories,(function(t,i){return n("div",{key:t.id+i,staticClass:"service-category"},[n("nuxt-link",{staticClass:"service-category__title",attrs:{to:e.localePath("/services/"+t.id)}},[e._v(e._s(e.$t("services."+t.id)))]),e._v(" "),t.jobs?n("div",e._l(t.jobs,(function(o){return n("div",{key:o},[n("nuxt-link",{staticClass:"service-job",attrs:{to:e.localePath("/services/"+t.id+"/"+o)}},[e._v("\n              "+e._s(e.$t("jobs."+o+".name"))+"\n            ")])],1)})),0):e._e()],1)})),0):e._e(),e._v(" "),n("nuxt-link",{staticClass:"navigation__logo",attrs:{to:e.localePath("/")}},[n("img",{attrs:{src:o(181),alt:"Logo"}})]),e._v(" "),n("div",{staticClass:"navigation-content-right",class:{active:e.showMobileMenu}},[n("nuxt-link",{staticClass:"navigation-link",attrs:{to:e.localePath("/")}},[e._v("\n        "+e._s(e.$t("navigation.home"))+"\n      ")]),e._v(" "),n("div",{staticClass:"navigation-link",class:{active:e.isDropdownActive},on:{click:function(t){e.isDropdownActive=!e.isDropdownActive},mouseenter:function(t){return e.collapseDropdown(!0)},mouseleave:function(t){return e.collapseDropdown(!1)}}},[e._v("\n        "+e._s(e.$t("navigation.services"))+"\n        "),n("svg",{staticClass:"ms-2",class:{rotate:e.isDropdownActive},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"10",viewBox:"0 0 451.847 451.847"}},[n("path",{attrs:{fill:"#ffffff",d:"M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"}})])]),e._v(" "),n("div",{staticClass:"mob-services mt-2",class:{active:e.isDropdownActive&&e.showMobileMenu}},e._l(e.categories,(function(t,i){return n("div",{key:t.id+i,staticClass:"service-category"},[n("nuxt-link",{staticClass:"service-category__title",attrs:{to:e.localePath("/services/"+t.id)}},[e._v(e._s(e.$t("services."+t.id)))]),e._v(" "),t.jobs?n("div",e._l(t.jobs,(function(o){return n("div",{key:o},[n("nuxt-link",{staticClass:"service-job",attrs:{to:e.localePath("/services/"+t.id+"/"+o)}},[e._v("\n              "+e._s(e.$t("jobs."+o+".name"))+"\n            ")])],1)})),0):e._e()],1)})),0),e._v(" "),n("nuxt-link",{staticClass:"navigation-link",attrs:{to:e.localePath("/portfolio")}},[e._v("\n        "+e._s(e.$t("navigation.portfolio"))+"\n      ")]),e._v(" "),n("nuxt-link",{staticClass:"navigation-link",attrs:{to:e.localePath("/about-business-point")}},[e._v("\n        "+e._s(e.$t("navigation.about"))+"\n      ")]),e._v(" "),n("nuxt-link",{staticClass:"navigation-link",attrs:{to:e.localePath("/contacts")}},[e._v("\n        "+e._s(e.$t("navigation.contacts"))+"\n      ")]),e._v(" "),n("a",{staticClass:"navigation-link download",attrs:{target:"_blank",href:"/catalog.pdf"}},[e._v("\n        "+e._s(e.$t("navigation.catalog"))+"\n      ")]),e._v(" "),n("div",{staticClass:"navigation__mob-phones"},[n("a",{attrs:{href:"tel:"+e.$store.state.contacts.number_1_call}},[e._v(e._s(e.$store.state.contacts.number_1))]),e._v(" "),n("a",{attrs:{href:"tel:"+e.$store.state.contacts.number_2_call}},[e._v(e._s(e.$store.state.contacts.number_2))])])],1),e._v(" "),n("div",{staticClass:"navigation__phones"},[n("a",{attrs:{href:"tel:"+e.$store.state.contacts.number_1_call}},[e._v(e._s(e.$store.state.contacts.number_1))]),e._v(" "),n("a",{attrs:{href:"tel:"+e.$store.state.contacts.number_2_call}},[e._v(e._s(e.$store.state.contacts.number_2))])]),e._v(" "),n("button",{staticClass:"navigation-mobile-btn",class:{close:e.showMobileMenu},on:{click:function(t){e.showMobileMenu=!e.showMobileMenu}}},[n("span"),e._v(" "),n("span"),e._v(" "),n("span")])],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"navigation-top__item"},[t("div",{staticClass:"navigation-top__item__bg"}),this._v(" "),t("i",{staticClass:"fa fa-envelope-o",attrs:{"aria-hidden":"true"}}),this._v(" "),t("a",{attrs:{href:"mailto:"}},[this._v("energougalyans@ukr.net")])])}],!1,null,"49f1e3b8",null);t.default=component.exports},160:function(e,t,o){var content=o(226);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(43).default)("59112376",content,!0,{sourceMap:!1})},161:function(e,t,o){var content=o(230);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(43).default)("b222937c",content,!0,{sourceMap:!1})},162:function(e,t,o){var content=o(232);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(43).default)("15b4efe0",content,!0,{sourceMap:!1})},179:function(e,t,o){"use strict";var n=o(124),footer=o(86),r={components:{Navigation:n.default,Footer:footer.default}},l=(o(231),o(24)),component=Object(l.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("Navigation"),this._v(" "),t("div",{staticClass:"content"},[t("Nuxt")],1),this._v(" "),t("Footer")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Navigation:o(124).default,Footer:o(86).default})},180:function(e,t,o){e.exports=o.p+"img/mobile-back.5a55ec4.jpg"},181:function(e,t,o){e.exports=o.p+"img/logo-full.3668293.svg"},184:function(e,t,o){o(185),e.exports=o(186)},223:function(e,t,o){var content=o(224);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(43).default)("1998f766",content,!0,{sourceMap:!1})},224:function(e,t,o){var n=o(42),r=o(159),l=o(180);t=n(!1);var c=r(l);t.push([e.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}body,html{font-family:"Montserrat",sans-serif;margin:0;line-height:150%}a,body,html{color:#121212}a{text-decoration:none}img{max-width:100%}h1{font-size:2.5rem}h2{font-size:2rem;font-weight:700}h3{font-size:1.5rem}::-webkit-scrollbar{width:5px;height:5px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#888}::-webkit-scrollbar-thumb:hover{background:#555}.block-title{position:relative;text-align:center;text-transform:uppercase}.block-title:after{content:"";border-top:2px solid #5791be;width:7%;height:0;position:absolute;bottom:-16px;left:50%;transform:translateX(-50%)}.block-title span{color:#5791be}.block-title.left{margin-bottom:40px;text-align:left}.block-title.left:after{left:0;transform:translateX(0)}.btn-default{display:flex;justify-content:center;align-items:center;border:none;font-size:13px;width:160px;height:40px;background:#23649a;color:#fff}.text-blue{color:#23649a}.wrapper{display:flex;flex-direction:column;min-height:100vh;background:#fff}.layout{padding:0 19.5%}.layout section.row{display:flex;justify-content:center}.layout section.row .illustration{text-align:center;position:relative}.layout section.row .illustration img{max-width:320px;position:relative;z-index:5}.layout section.row .illustration:after{content:"";width:280px;padding-top:100%;z-index:0;background:#23649a;position:absolute;top:25%;left:25%;display:block}@media(max-width:1824px){.layout{padding:0 10%}}@media(max-width:1224px){.layout{padding:0 6%}}@media(max-width:768px){.layout{padding:0 4%}}.page-header{position:relative;height:100vh;min-height:500px;padding:180px 10% 150px;display:flex;flex-direction:column;align-items:center;color:#fff;text-align:center;font-family:"Roboto",sans-serif}@media(max-width:768px){.page-header{padding:50px 5px 150px}}.page-header-inner{display:flex;flex-direction:column;z-index:20;flex:1 1}.page-header-inner h1{font-size:4rem}@media(max-width:1224px){.page-header-inner h1{font-size:3.5rem}}.page-header__bg{background:rgba(2,2,2,.53);z-index:15}.page-header .video,.page-header__bg{position:absolute;top:0;left:0;width:100%;height:100%}.page-header .video{-o-object-fit:cover;object-fit:cover;z-index:10}@media(max-width:768px){.page-header .video{display:none}}.page-header__mob-bg{background:url('+c+") 50% no-repeat;background-size:cover;display:none;position:absolute;width:100%;height:100%;top:0;left:0;z-index:10}@media(max-width:768px){.page-header__mob-bg{display:block}}.page-header__subtitle{font-size:1.5rem;line-height:150%}.page-header-btns{display:flex;justify-content:center;margin-top:2rem}.page-header-btns .page-header__btn{border:1px solid #fff;width:150px;height:30px;line-height:30px;margin:0 24px;text-decoration:none;border-radius:3px;background:none;color:#fff;transition:all .3s;text-transform:uppercase}.page-header-btns .page-header__btn:hover{color:#262626;border:1px solid #262626;background:#fff}.page-content{margin:32px 0;flex:1 1}.slick-dots li{margin:0}",""]),e.exports=t},225:function(e,t,o){"use strict";o(160)},226:function(e,t,o){var n=o(42),r=o(159),l=o(227);t=n(!1);var c=r(l);t.push([e.i,'.rotate[data-v-49f1e3b8]{transform:rotate(180deg);transition:all .3s ease}.navigation-top[data-v-49f1e3b8]{display:flex;align-items:flex-start;justify-content:flex-end;padding-top:8px!important;padding-bottom:16px!important;transition:all .5s}.navigation-top__item[data-v-49f1e3b8]{padding:16px;position:relative;margin-left:16px;height:56px}.navigation-top__item__bg[data-v-49f1e3b8]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.6);transform:skew(150deg);z-index:-1}.navigation-top__item a[data-v-49f1e3b8],.navigation-top__item i[data-v-49f1e3b8]{position:relative;text-decoration:none;color:#fff}.navigation-top__item i[data-v-49f1e3b8]{margin-right:3px}.navigation-top__item.lang[data-v-49f1e3b8]{position:relative;text-transform:uppercase}.navigation-top__item.phones[data-v-49f1e3b8]{padding:8px 16px;display:flex;flex-direction:column;justify-content:space-between}.navigation-top__item.phones a[data-v-49f1e3b8]{line-height:100%}@media(max-width:1224px){.navigation-top[data-v-49f1e3b8]{display:none}}.navigation__btn-top[data-v-49f1e3b8]{position:fixed;bottom:50px;right:50px;width:75px;height:75px;border-radius:50%;background-color:#5791be;justify-content:center;cursor:pointer;-webkit-animation:pulse;animation:pulse;-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;opacity:0;transition:all 1.2s}.navigation[data-v-49f1e3b8],.navigation__btn-top[data-v-49f1e3b8]{display:flex;align-items:center;color:#fff}.navigation[data-v-49f1e3b8]{position:relative;height:62px;background-color:rgba(0,0,0,.6)}.navigation__logo[data-v-49f1e3b8]{margin-right:2rem;font-size:20px;font-family:"Days One",sans-serif;color:#23649a;display:flex;align-items:center;height:100%}.navigation__logo img[data-v-49f1e3b8]{height:100%}.navigation-content-right[data-v-49f1e3b8]{height:100%;display:flex}.navigation-mobile-btn[data-v-49f1e3b8],.navigation__mob-phones[data-v-49f1e3b8]{display:none}.navigation__phones[data-v-49f1e3b8]{display:flex;flex-direction:column;margin-left:auto;font-size:.8rem;opacity:0;transition:all .3s ease}.navigation__phones a[data-v-49f1e3b8]{color:#fff;font-weight:700}.navigation__phones a[data-v-49f1e3b8]:hover{color:#23649a}.navigation-link[data-v-49f1e3b8]{display:flex;align-items:center;padding:0 16px;color:#fff;font-size:13px;text-decoration:none;transition:all .5s;margin-bottom:2px;font-weight:700;cursor:pointer}.navigation-link[data-v-49f1e3b8]:hover{box-shadow:0 2px 0 0 #fff}.navigation-link.active[data-v-49f1e3b8],.navigation-link.nuxt-link-exact-active[data-v-49f1e3b8]{box-shadow:0 2px 0 0 #23649a}@media(max-width:1450px){.navigation[data-v-49f1e3b8]{padding:0 2%}}@media(max-width:1224px){.navigation[data-v-49f1e3b8]{background:#262626}.navigation .navigation-link[data-v-49f1e3b8]{padding:16px 0;font-size:1.75rem}.navigation .download[data-v-49f1e3b8]{margin-bottom:32px}.navigation-content-right[data-v-49f1e3b8]{display:none}.navigation-content-right.active[data-v-49f1e3b8]{display:flex;flex-direction:column;position:absolute;top:100%;left:0;height:100vh;max-height:calc(100vh - 62px);overflow:auto;width:100%;background:#262626;margin-left:0;padding:16px 32px}.navigation-content-right.active .service-category[data-v-49f1e3b8]{width:100%}.navigation__phones[data-v-49f1e3b8]{display:none}.navigation__mob-phones[data-v-49f1e3b8]{display:flex;margin-top:auto;padding-bottom:16px;justify-content:space-between}.navigation__mob-phones a[data-v-49f1e3b8]{color:#fff}.navigation-mobile-btn[data-v-49f1e3b8]{display:block;margin-left:auto;background:none;border:none;display:flex;justify-content:space-between;align-items:center;flex-direction:column;height:30px;outline:none}.navigation-mobile-btn span[data-v-49f1e3b8]{display:block;width:50px;border-radius:5px;height:3px;background:#fff}}.navigation-wrapper[data-v-49f1e3b8]{position:fixed;width:100%;top:0;left:0;z-index:100}.navigation-wrapper.hide-top .navigation-top[data-v-49f1e3b8]{opacity:0;margin-top:-80px}.navigation-wrapper.hide-top .navigation[data-v-49f1e3b8]{background:#262626}.navigation-wrapper.hide-top .navigation__btn-top[data-v-49f1e3b8],.navigation-wrapper.hide-top .navigation__phones[data-v-49f1e3b8]{opacity:1}.navigation-wrapper.background[data-v-49f1e3b8]{background:url('+c+") 50%;background-size:cover;position:relative}.navigation-wrapper.background.hide-top[data-v-49f1e3b8]{position:relative}.dropdown[data-v-49f1e3b8]{display:flex;position:absolute;top:100%;left:0;width:100vw;padding-top:2rem;background:#262626;flex-wrap:wrap;padding-bottom:2rem;align-items:flex-start;align-content:flex-start}@media(max-width:1224px){.dropdown[data-v-49f1e3b8]{display:none}}.service-category[data-v-49f1e3b8]{width:33.33333%;margin-bottom:16px;font-weight:400;padding-right:32px}.service-category__title[data-v-49f1e3b8]{color:#fff;font-size:1.2rem;font-weight:700;margin-bottom:.75rem;display:block}.service-category__title[data-v-49f1e3b8]:hover{color:#23649a;text-decoration:none}.service-job[data-v-49f1e3b8]{color:#fff;font-size:1rem;display:block;line-height:120%;opacity:.5;margin-bottom:.75rem}.service-job[data-v-49f1e3b8]:hover{opacity:1;text-decoration:none}.mob-services[data-v-49f1e3b8]{flex-direction:column;display:none}.mob-services .service-category__title[data-v-49f1e3b8]{font-size:1.5rem;padding:1rem 0;display:block}.mob-services .service-job[data-v-49f1e3b8]{font-size:1rem;padding:.5rem 0;display:block}.mob-services.active[data-v-49f1e3b8]{display:flex}",""]),e.exports=t},227:function(e,t,o){e.exports=o.p+"img/back.d439742.png"},228:function(e,t,o){e.exports=o.p+"img/logo-white.081ef36.svg"},229:function(e,t,o){"use strict";o(161)},230:function(e,t,o){(t=o(42)(!1)).push([e.i,"footer.footer[data-v-3843b356]{background-color:#262626;color:#fff;padding-top:16px;padding-bottom:16px;line-height:150%;font-size:1rem}@media(max-width:768px){footer.footer[data-v-3843b356]{text-align:center}}footer.footer .footer-logo[data-v-3843b356]{text-align:center;font-size:10px}footer.footer .footer-logo b[data-v-3843b356]{font-size:18px}footer.footer a[data-v-3843b356]{color:#fff}footer.footer-bottom[data-v-3843b356]{background-color:#303133;color:#6e6e6e;padding-top:8px;padding-bottom:8px;line-height:150%;font-size:10px;text-align:center}footer.footer-bottom a[data-v-3843b356]{color:#fff}",""]),e.exports=t},231:function(e,t,o){"use strict";o(162)},232:function(e,t,o){(t=o(42)(!1)).push([e.i,".content{flex:1 1}",""]),e.exports=t},233:function(e,t){e.exports={state:function(){return{contacts:{number_1:"+38(044) 221-91-89",number_1_call:"0442219189",number_2:"+38(097) 308-18-31",number_2_call:"0973081831",email:"energougalyans@ukr.net"},services:{"elektromontazhnye-raboty":{icon:"services/power",url:"/services/elektromontazhnye-raboty",jobs:["montazh-vnutr-elektrosetei","montag-vneshnikh-setei","prokladka-kabelnih-liniy","elektroschit","bliskavkozakhist"]},"remont-i-obslyzhuvanie":{icon:"services/remont",url:"/services/remont-i-obslyzhuvanie",jobs:["obsluzhivanie","remont-i-obsluzhivanie-silovyh-transformatorov","remont-oborudovaniya-transformatornyh-podstanciy","remont-elektroshhitov"]},other:{icon:"services/worker",url:"/services/other",jobs:["proektnye-raboty","postavka","audit_elektroobladnannya"]},"elektrotehnicheskaya-laboratoriya":{icon:"services/ammeter",url:"/services/elektrotehnicheskaya-laboratoriya",jobs:["etl-04kv","etl-10kv"]},"avariynye-raboty":{icon:"services/montazh",url:"/services/avariynye-raboty",jobs:["remont-kl","avarijnyj-remont"]}},jobs:{"remont-kl":{serviceId:"avariynye-raboty",images:["remont-linij-1.jpg","remont-linij-2.jpg","remont-linij-3.jpg","remont-linij-4.jpg"],recomendations:[{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya",title:"services.elektrotehnicheskaya-laboratoriya"},{image:"remont-setei-1.jpg",url:"/services/avariynye-raboty/avarijnyj-remont",title:"jobs.avarijnyj-remont.name"},{image:"remont-3.jpg",url:"/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy",title:"jobs.remont-oborudovaniya-transformatornyh-podstanciy.name"},{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"}]},"avarijnyj-remont":{serviceId:"avariynye-raboty",images:["remont-setei-1.jpg","remont-setei-1.jpg","remont-setei-2.jpg","remont-setei-3.jpg"],recomendations:[{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya",title:"services.elektrotehnicheskaya-laboratoriya"},{image:"remont-2.jpg",url:"/services/remont-i-obslyzhuvanie/remont-i-obsluzhivanie-silovyh-transformatorov",title:"jobs.remont-i-obsluzhivanie-silovyh-transformatorov.name"},{image:"remont-3.jpg",url:"/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy",title:"jobs.remont-oborudovaniya-transformatornyh-podstanciy.name"},{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"}]},"montazh-vnutr-elektrosetei":{serviceId:"elektromontazhnye-raboty",images:["remont-setei-3.jpg","montazh-1.jpg","montazh-6.png","montazh-7.png","montazh-8.png"],recomendations:[{image:"lab-1.jpg",url:"/services/elektrotehnicheskaya-laboratoriya/etl-04kv",title:"jobs.etl-04kv.name"},{image:"project-1.jpg",url:"/services/other/proektnye-raboty",title:"jobs.proektnye-raboty.name"},{image:"montazh-4.jpg",url:"/services/elektromontazhnye-raboty/elektroschit",title:"jobs.elektroschit.name"},{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"}]},"montag-vneshnikh-setei":{serviceId:"elektromontazhnye-raboty",images:["montazh-2.jpg","job-back.png","montazh-2.jpg","montazh.jpg","montazh-10.jpg"],recomendations:[{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya/etl-10kv",title:"jobs.etl-10kv.name"},{image:"project-1.jpg",url:"/services/other/proektnye-raboty",title:"jobs.proektnye-raboty.name"},{image:"remont-3.jpg",url:"/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy",title:"jobs.remont-oborudovaniya-transformatornyh-podstanciy.name"},{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"}]},"prokladka-kabelnih-liniy":{serviceId:"elektromontazhnye-raboty",images:["montazh-3.jpg","montazh-3.jpg","prokladka-1.jpg","prokladka-2.jpg","prokladka-3.jpg"],recomendations:[{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya",title:"services.elektrotehnicheskaya-laboratoriya"},{image:"montazh-2.jpg",url:"/services/elektromontazhnye-raboty/montag-vneshnikh-setei",title:"jobs.montag-vneshnikh-setei.name"},{image:"remont-linij-1.jpg",url:"/services/avariynye-raboty/remont-kl",title:"jobs.remont-kl.name"},{image:"postavka.jpg",url:"/services/other/postavka",title:"jobs.postavka.name"}]},elektroschit:{serviceId:"elektromontazhnye-raboty",images:["montazh-4.jpg","montazh-4.jpg","vru.jpg","shitova.jpg"],recomendations:[{image:"remont-setei-3.jpg",url:"/services/elektromontazhnye-raboty/montazh-vnutr-elektrosetei",title:"services.montazh-vnutr-elektrosetei.name"},{image:"remont-4.jpg",url:"/services/remont-i-obslyzhuvanie/remont-elektroshhitov",title:"jobs.remont-elektroshhitov.name"},{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"},{image:"audit-1.jpg",url:"/services/other/audit_elektroobladnannya",title:"jobs.audit_elektroobladnannya.name"}]},bliskavkozakhist:{serviceId:"elektromontazhnye-raboty",images:["montazh-5.jpg","montazh-5.jpg","bliskavkozakhist-1.jpg","bliskavkozakhist-2.jpg","bliskavkozakhist-3.jpg"],recomendations:[{image:"lab-1.jpg",url:"/services/elektrotehnicheskaya-laboratoriya/etl-04kv",title:"jobs.etl-04kv.name"},{image:"project-1.jpg",url:"/services/other/proektnye-raboty",title:"jobs.proektnye-raboty.name"},{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"},{image:"postavka.jpg",url:"/services/other/postavka",title:"jobs.postavka.name"}]},"etl-04kv":{serviceId:"elektrotehnicheskaya-laboratoriya",images:["lab-1.jpg","lab-3.jpg","lab-4.jpg","lab-5.jpg","lab-1.jpg"],recomendations:[{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya/etl-10kv",title:"jobs.etl-10kv.name"},{image:"remont-setei-1.jpg",url:"/services/avariynye-raboty/avarijnyj-remont",title:"jobs.avarijnyj-remont.name"},{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"},{image:"audit-1.jpg",url:"/services/other/audit_elektroobladnannya",title:"jobs.audit_elektroobladnannya.name"}]},"etl-10kv":{serviceId:"elektrotehnicheskaya-laboratoriya",images:["lab-2.jpg","lab-6.jpg","lab-7.jpg","lab-8.jpg"],recomendations:[{image:"lab-1.jpg",url:"/services/elektrotehnicheskaya-laboratoriya/etl-04kv",title:"jobs.etl-04kv.name"},{image:"remont-3.jpg",url:"/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy",title:"jobs.remont-oborudovaniya-transformatornyh-podstanciy.name"},{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"},{image:"audit-1.jpg",url:"/services/other/audit_elektroobladnannya",title:"jobs.audit_elektroobladnannya.name"}]},obsluzhivanie:{serviceId:"remont-i-obslyzhuvanie",images:["remont-1.jpg","remont-1.jpg","remont-5.jpg","remont-6.jpg","remont-7.jpg"],recomendations:[{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya",title:"services.elektrotehnicheskaya-laboratoriya"},{image:"remont-3.jpg",url:"/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy",title:"jobs.remont-oborudovaniya-transformatornyh-podstanciy.name"},{image:"remont-2.jpg",url:"/services/remont-i-obslyzhuvanie/remont-i-obsluzhivanie-silovyh-transformatorov",title:"jobs.remont-i-obsluzhivanie-silovyh-transformatorov.name"},{image:"audit-1.jpg",url:"/services/other/audit_elektroobladnannya",title:"jobs.audit_elektroobladnannya.name"}]},"remont-i-obsluzhivanie-silovyh-transformatorov":{serviceId:"remont-i-obslyzhuvanie",images:["remont-2.jpg","remont-transformatora-3.jpg","remont-transformatora-7.jpg","remont-transformatora-1.jpg","remont-transformatora-2.jpg"],recomendations:[{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"},{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya",title:"services.elektrotehnicheskaya-laboratoriya"},{image:"remont-3.jpg",url:"/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy",title:"jobs.remont-oborudovaniya-transformatornyh-podstanciy.name"},{image:"audit-1.jpg",url:"/services/other/audit_elektroobladnannya",title:"jobs.audit_elektroobladnannya.name"}]},"remont-oborudovaniya-transformatornyh-podstanciy":{serviceId:"remont-i-obslyzhuvanie",images:["remont-3.jpg","remont-oborudovaniya-tp.jpg","remont-oborudovaniya-1.jpg","remont-oborudovaniya-2.jpg","remont-oborudovaniya-3.jpg"],recomendations:[{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"},{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya",title:"services.elektrotehnicheskaya-laboratoriya"},{image:"remont-2.jpg",url:"/services/remont-i-obslyzhuvanie/remont-i-obsluzhivanie-silovyh-transformatorov",title:"jobs.remont-i-obsluzhivanie-silovyh-transformatorov.name"},{image:"audit-1.jpg",url:"/services/other/audit_elektroobladnannya",title:"jobs.audit_elektroobladnannya.name"}]},"remont-elektroshhitov":{serviceId:"remont-i-obslyzhuvanie",images:["remont-4.jpg","remont-4.jpg","remont-oborudovaniya-4.jpg","remont-oborudovaniya-5.jpg","remont-oborudovaniya-6.jpg"],recomendations:[{image:"lab-1.jpg",url:"/services/elektrotehnicheskaya-laboratoriya/etl-04kv",title:"jobs.etl-04kv.name"},{image:"project-1.jpg",url:"/services/other/proektnye-raboty",title:"jobs.proektnye-raboty.name"},{image:"montazh-4.jpg",url:"/services/elektromontazhnye-raboty/elektroschit",title:"jobs.elektroschit.name"},{image:"postavka.jpg",url:"/services/other/postavka",title:"jobs.postavka.name"}]},"proektnye-raboty":{serviceId:"other",images:["project-1.jpg","project-2.jpg","project-3.jpg","project-1.jpg"],recomendations:[{image:"lab-1.jpg",url:"/services/elektrotehnicheskaya-laboratoriya/etl-04kv",title:"jobs.etl-04kv.name"},{image:"remont-setei-3.jpg",url:"/services/elektromontazhnye-raboty/montazh-vnutr-elektrosetei",title:"jobs.montazh-vnutr-elektrosetei.name"},{image:"montazh-2.jpg",url:"/services/elektromontazhnye-raboty/montag-vneshnikh-setei",title:"jobs.montag-vneshnikh-setei.name"},{image:"montazh-5.jpg",url:"/services/elektromontazhnye-raboty/bliskavkozakhist",title:"jobs.bliskavkozakhist.name"}]},postavka:{serviceId:"other",images:["postavka.jpg","postavka.jpg","postavka-1.jpg","cable.jpg"],recomendations:[{image:"project-1.jpg",url:"/services/other/proektnye-raboty",title:"jobs.proektnye-raboty.name"},{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya",title:"services.elektrotehnicheskaya-laboratoriya"},{image:"remont-3.jpg",url:"/services/remont-i-obslyzhuvanie",title:"services.remont-i-obslyzhuvanie"},{image:"audit-1.jpg",url:"/services/elektromontazhnye-raboty",title:"services.elektromontazhnye-raboty"}]},audit_elektroobladnannya:{serviceId:"other",images:["audit-1.jpg","audit-1.jpg","lab-2.jpg","plans.jpg"],recomendations:[{image:"remont-1.jpg",url:"/services/remont-i-obslyzhuvanie/obsluzhivanie",title:"jobs.obsluzhivanie.name"},{image:"lab-2.jpg",url:"/services/elektrotehnicheskaya-laboratoriya",title:"services.elektrotehnicheskaya-laboratoriya"},{image:"remont-3.jpg",url:"/services/remont-i-obslyzhuvanie/remont-oborudovaniya-transformatornyh-podstanciy",title:"jobs.remont-oborudovaniya-transformatornyh-podstanciy.name"},{image:"remont-2.jpg",url:"/services/remont-i-obslyzhuvanie/remont-i-obsluzhivanie-silovyh-transformatorov",title:"jobs.remont-i-obsluzhivanie-silovyh-transformatorov.name"}]}},portfolio:[{img:"spytnik.jpg",name:"portfolio.p-1.name",description:"portfolio.p-1.description"},{img:"kubik.jpg",name:"portfolio.p-2.name",description:"portfolio.p-2.description"},{img:"cherry-town.jpg",name:"portfolio.p-3.name",description:"portfolio.p-3.description"},{img:"compass.jpg",name:"portfolio.p-4.name",description:"portfolio.p-4.description"},{img:"zhulyanu.jpg",name:"portfolio.p-5.name",description:"portfolio.p-5.description"},{img:"AKKO.jpg",name:"portfolio.p-6.name",description:"portfolio.p-6.description"},{img:"Radio.jpg",name:"portfolio.p-7.name",description:"portfolio.p-7.description"},{img:"prime.jpg",name:"portfolio.p-8.name",description:"portfolio.p-8.description"},{img:"VDNH.jpg",name:"portfolio.p-9.name",description:"portfolio.p-9.description"},{img:"evrasia.jpg",name:"portfolio.p-10.name",description:"portfolio.p-10.description"},{img:"medvedya.jpg",name:"portfolio.p-11.name",description:"portfolio.p-11.description"},{img:"smart-house.jpg",name:"portfolio.p-12.name",description:"portfolio.p-12.description"},{img:"promenada.jpg",name:"portfolio.p-13.name",description:"portfolio.p-13.description"},{img:"marmelad.jpg",name:"portfolio.p-14.name",description:"portfolio.p-14.description"},{img:"igl.jpg",name:"portfolio.p-15.name",description:"portfolio.p-15.description"}]}}}},245:function(e,t,o){var map={"./ru-RU":[182,0],"./ru-RU.js":[182,0],"./uk-UA":[183,1],"./uk-UA.js":[183,1]};function n(e){if(!o.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],n=t[0];return o.e(t[1]).then((function(){return o(n)}))}n.keys=function(){return Object.keys(map)},n.id=245,e.exports=n},86:function(e,t,o){"use strict";o.r(t);o(229);var n=o(24),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("footer",{staticClass:"footer row justify-content-center"},[n("div",{staticClass:"col-10 col-md-4 order-3 order-md-1"},[e._v("\n            "+e._s(e.$t("footer.work-time"))+"\n            "),n("br"),e._v(" "),n("br"),e._v(" "),n("a",{attrs:{href:"tel:"+e.$store.state.contacts.number_1_call}},[e._v(e._s(e.$store.state.contacts.number_1))]),e._v(" "),n("br"),e._v(" "),n("a",{attrs:{href:"tel:"+e.$store.state.contacts.number_2_call}},[e._v(e._s(e.$store.state.contacts.number_2))]),e._v(" "),n("br"),e._v(" "),n("br"),e._v(" "),n("nuxt-link",{attrs:{to:"/privacy-policy"}},[n("b",[n("em",[e._v(e._s(e.$t("footer.privacy-policy")))])])])],1),e._v(" "),n("div",{staticClass:"col-10 col-md-4 order-2 py-3 py-md-0"},[n("address",[e._v(e._s(e.$t("footer.address")))]),e._v(" "),n("a",{attrs:{href:"mailto:energougalyans@ukr.net"}},[e._v("energougalyans@ukr.net")])]),e._v(" "),n("div",{staticClass:"col-8 col-md-4  order-1 order-md-3"},[n("div",{staticClass:"footer-logo"},[n("img",{staticClass:"mb-2",attrs:{src:o(228),alt:"logo"}}),e._v(" "),n("br"),e._v("\n                "+e._s(e.$t("slogan"))+"\n            ")])])]),e._v(" "),n("footer",{staticClass:"footer-bottom row align-items-center"},[n("div",{staticClass:"col-12 col-md-4"}),e._v(" "),n("div",{staticClass:"col-12 col-md-4"},[e._v("Copyright © All rights reserved.")]),e._v(" "),n("div",{staticClass:"col-12 col-md-4"},[n("b",[e._v(e._s(e.$t("company")))])])])])}),[],!1,null,"3843b356",null);t.default=component.exports;installComponents(component,{Footer:o(86).default})}},[[184,13,5,14]]]);