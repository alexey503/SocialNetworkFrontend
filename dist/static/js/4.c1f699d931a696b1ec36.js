webpackJsonp([4],{AQS5:function(e,t){},Ju2O:function(e,t){e.exports=function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s="fb15")}({"1eb2":function(e,t,i){"use strict";var a;"undefined"!=typeof window&&((a=window.document.currentScript)&&(a=a.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(i.p=a[1]))},2877:function(e,t,i){"use strict";function a(e,t,i,a,n,r,s,o){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=i,l._compiled=!0),a&&(l.functional=!0),r&&(l._scopeId="data-v-"+r),s?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=c):n&&(c=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(e,t){return c.call(t),d(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:e,options:l}}i.d(t,"a",function(){return a})},"407a":function(e,t,i){"use strict";i.r(t);var a=i("b445"),n=i("fa1f");for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);var s=i("2877"),o=Object(s.a)(n.default,a.a,a.b,!1,null,null,null);o.options.__file="hcaptcha.vue",t.default=o.exports},"56d7":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.install=r,t.default=void 0;var a,n=(a=i("407a"))&&a.__esModule?a:{default:a};function r(e){r.installed||(r.installed=!0,e.component("vuehcaptcha",n.default),e.component("VueHcaptcha",n.default))}var s={install:r},o=null;"undefined"!=typeof window?o=window.Vue:void 0!==e&&(o=e.Vue),o&&o.use(s);var c=n.default;t.default=c}).call(this,i("c8ba"))},"7c22":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("dfcd"),n={name:"VueHcaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String,default:void 0},size:{type:String,default:void 0},tabindex:{type:String,default:void 0},language:{type:String,default:void 0},reCaptchaCompat:{type:Boolean,default:!0},challengeContainer:{type:String,default:void 0},rqdata:{type:String,default:void 0},sentry:{type:Boolean,default:!0},apiEndpoint:{type:String,default:"https://hcaptcha.com/1/api.js"},endpoint:{type:String,default:void 0},reportapi:{type:String,default:void 0},assethost:{type:String,default:void 0},imghost:{type:String,default:void 0}},data:function(){return{widgetId:null,hcaptcha:null}},mounted:function(){return(0,a.loadApiEndpointIfNotAlready)(this.$props).then(this.onApiLoaded).catch(this.onError)},unmounted:function(){var e=this;this.widgetId&&this.hcaptcha.then(function(){e.hcaptcha.reset(e.widgetId),e.hcaptcha.remove(e.widgetId)})},methods:{onApiLoaded:function(){this.hcaptcha=window.hcaptcha;var e={sitekey:this.sitekey,theme:this.theme,size:this.size,tabindex:this.tabindex,callback:this.onVerify,"expired-callback":this.onExpired,"chalexpired-callback":this.onChallengeExpired,"error-callback":this.onError,"open-callback":this.onOpen,"close-callback":this.onClose};this.challengeContainer&&(e["challenge-container"]=this.challengeContainer),this.widgetId=this.hcaptcha.render(this.$el,e),this.rqdata&&this.hcaptcha.setData(this.widgetId,{rqdata:this.rqdata}),this.onRendered()},execute:function(){this.widgetId?(this.hcaptcha.execute(this.widgetId),this.onExecuted()):this.$on("rendered",this.execute)},reset:function(){this.widgetId?(this.hcaptcha.reset(this.widgetId),this.onReset()):this.$emit("error","Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset.")},onRendered:function(){this.$emit("rendered")},onExecuted:function(){this.$emit("executed")},onReset:function(){this.$emit("reset")},onError:function(e){this.$emit("error",e),this.reset()},onVerify:function(){var e=this.hcaptcha.getResponse(this.widgetId),t=this.hcaptcha.getRespKey(this.widgetId);this.$emit("verify",e,t)},onExpired:function(){this.$emit("expired")},onChallengeExpired:function(){this.$emit("challengeExpired")},onOpen:function(){this.$emit("opened")},onClose:function(){this.$emit("closed")}}};t.default=n},b445:function(e,t,i){"use strict";var a=function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"hcap-script"}})},n=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return n})},c8ba:function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},dfcd:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadApiEndpointIfNotAlready=function(e){if(window.hcaptcha)return n(),o;if(document.getElementById(a))return o;window[s]=n;var t=c(e),i=document.createElement("script");return i.id=a,i.src=t,i.async=!0,i.defer=!0,i.onerror=function(e){console.error("Failed to load api: "+t,e),r("Failed to load api.js")},document.head.appendChild(i),o},t.getScriptSrc=c,t.addQueryParamIfDefined=l,t.SCRIPT_ID=void 0;var a="hcaptcha-api-script-id";t.SCRIPT_ID=a;var n,r,s="_hcaptchaOnLoad",o=new Promise(function(e,t){n=e,r=t});function c(e){var t=e.apiEndpoint;return t=l(t=l(t=l(t=l(t=l(t=l(t=l(t=l(t=l(t,"render","explicit"),"onload",s),"recaptchacompat",!1===e.reCaptchaCompat?"off":null),"hl",e.language),"sentry",e.sentry),"endpoint",e.endpoint),"assethost",e.assethost),"imghost",e.imghost),"reportapi",e.reportapi)}function l(e,t,i){return void 0!==i&&null!==i?e+(e.includes("?")?"&":"?")+t+"="+encodeURIComponent(i):e}},fa1f:function(e,t,i){"use strict";i.r(t);var a=i("7c22"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t.default=n.a},fb15:function(e,t,i){"use strict";i.r(t);i("1eb2");var a=i("56d7"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t.default=n.a}})},c2W5:function(e,t){},cxj3:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Dd8w"),n=i.n(a),r=i("NYxO"),s=i("+cKO"),o=i("TYx6"),c=i("i53X"),l=i("/QaM"),d={name:"EmailField",props:{value:{type:String,default:""},v:{type:Object,required:!0},label:{type:String,default:"Имя"},id:{type:String,required:!0}},computed:{name:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},i18n:{messages:{en:{errorRequired:"Required field",errorMin:"Minimum number of characters"},ru:{errorRequired:"Обязательно поле",errorMin:"Минимальное количество символов"}}}},u={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form__group",class:{fill:e.name.length>0}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form__input",class:{invalid:e.v.$dirty&&!e.v.required||e.v.$dirty&&!e.v.minLength},attrs:{id:e.id,name:"name"},domProps:{value:e.name},on:{change:function(t){return e.v.$touch()},input:function(t){t.target.composing||(e.name=t.target.value)}}}),i("label",{staticClass:"form__label",attrs:{for:e.id}},[e._v(e._s(e.label)),i("span",{staticClass:"required-field"},[e._v("*")])]),e.v.$dirty&&!e.v.required?i("span",{staticClass:"form__error"},[e._v(e._s(e.$t("errorRequired")))]):e.v.$dirty&&!e.v.minLength?i("span",{staticClass:"form__error"},[e._v(e._s(e.$t("errorMin"))+" "+e._s(e.v.$params.minLength.min))]):e._e()])},staticRenderFns:[]},f=i("VU/8")(d,u,!1,null,null,null).exports,p={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"customModal"}},[e._m(0),e._v(" "),i("div",{staticClass:"body"},[e._m(1),e._v(" "),i("h3",{staticClass:"subtitle"},[e._v("1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ")]),e._v(" "),i("p",{staticClass:"para"},[e._v("1.1 В настоящей Политике конфиденциальности используются следующие термины:")]),e._v(" "),i("ul",{staticClass:"list"},e._l(e.terms,function(t,a){return i("li",{key:a,staticClass:"item",domProps:{innerHTML:e._s(t)}})}),0),e._v(" "),i("h3",{staticClass:"subtitle"},[e._v(" 2. ОБЩИЕ ПОЛОЖЕНИЯ")]),e._v(" "),i("ul",{staticClass:"list"},e._l(e.common,function(t,a){return i("li",{key:a,staticClass:"item",domProps:{innerHTML:e._s(t)}})}),0),e._v(" "),i("h3",{staticClass:"subtitle"},[e._v("3. ПРИНЦИПЫ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ")]),e._v(" "),i("p",{staticClass:"para"},[e._v("Обработка персональных данных у Оператора осуществляется на основе следующих принципов:")]),e._v(" "),i("ul",{staticClass:"list"},e._l(e.personalDataHanle,function(t,a){return i("li",{key:a,staticClass:"item",domProps:{innerHTML:e._s(t)}})}),0),e._v(" "),i("h3",{staticClass:"subtitle"},[e._v("4. УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ")]),e._v(" "),i("p",{staticClass:"para"},[e._v("1. Оператор производит обработку персональных данных при наличии хотя бы одного из следующих условий:")]),e._v(" "),i("ul",{staticClass:"list"},e._l(e.personalDataCondition,function(t,a){return i("li",{key:a,staticClass:"item",domProps:{innerHTML:e._s(t)}})}),0)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("h2",{staticClass:"title"},[this._v("ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"para"},[this._v("Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности)\n      действует в отношении всей информации, которую сайт "),t("a",{attrs:{href:"http://localhost:8080/"}},[this._v("НАЗВАНИЕ САЙТА")]),this._v(",\n      на котором размещен\n      текст этой Политики конфиденциальности, может получить о Пользователе, а также любых программ и продуктов,\n      размещенных на указанном сайте. Настоящая политика конфиденциальности составлена в соответствии с требованиями\n      Федерального закона от 27.07.2006 года №152-ФЗ «О персональных данных» и определяет порядок получения и обработки\n      персональных данных, а также меры по обеспечению безопасности персональных данных Пользователей\n      "),t("a",{attrs:{href:"http://localhost:8080/"}},[this._v("НАЗВАНИЕ САЙТА")]),this._v(".\n    ")])}]};var h={name:"ConfirmField",components:{PrivacyPolicy:i("VU/8")({data:function(){return{terms:['1.1.1. «Администрация сайта» – уполномоченные сотрудники на управления сайтом <a style="text-decoration: underline; color:rgb(73, 73, 243)" href="http://localhost:8080/">НАЗВАНИЕ САЙТА</a>, действующие от его имени, которые организуют и (или) осуществляют обработку персональных данных, а также определяют цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.',"1.1.2. «Персональные данные» - любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).","1.1.3. «Обработка персональных данных» - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.","1.1.4. «Конфиденциальность персональных данных» - обязательное для соблюдения Администрацией сайта требование не допускать их умышленного распространения без согласия субъекта персональных данных или наличия иного законного основания.",'1.1.5. «Пользователь сайта (далее Пользователь)» – лицо, имеющее доступ к сайту <a style="text-decoration: underline; color:rgb(73, 73, 243)" href="http://localhost:8080/">НАЗВАНИЕ САЙТА</a>, посредством сети Интернет и использующее данный сайт для своих целей.',"1.1.6. «Cookies» — небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя, который веб-клиент или веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе при попытке открыть страницу соответствующего сайта.","1.1.7. «IP-адрес» — уникальный сетевой адрес узла в компьютерной сети, построенной по протоколу IP."],common:['2.1. Использование Пользователем сайта <a style="text-decoration: underline; color:rgb(73, 73, 243)" href="http://localhost:8080/">НАЗВАНИЕ САЙТА</a> означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя. Пользователь даёт своё согласие на обработку его персональных данных, действуя свободно, своей волей и в своём интересе. Согласие Пользователя на обработку его персональных данных является конкретным, информированным и сознательным.',"2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование сайта.","2.3. Настоящая Политика конфиденциальности применяется только к данному сайту. Администрация сайта не контролирует и не несет ответственность за сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на данном сайте.","2.4. Администрация сайта не проверяет достоверность персональных данных, предоставляемых Пользователем сайта.",'2.5. Владельцем сайта <a style="text-decoration: underline; color:rgb(73, 73, 243)" href="http://localhost:8080/">НАЗВАНИЕ САЙТА</a> является Общество с ограниченной ответственностью «КМ медиа» (ОГРН 1157746400008, ИНН 7726338307, юридический адрес: 111250, г. Москва, ул. Лефортовский вал, дом 24, подвал, пом. IV, ком. 1, оф. 91).'],personalDataHanle:["3.1. законности и справедливой основы;","3.2. ограничения обработки персональных данных достижением конкретных, заранее определенных и законных целей;","3.3. недопущения обработки персональных данных, несовместимой с целями сбора персональных данных;","3.4. недопущения объединения баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой;","3.5. обработки только тех персональных данных, которые отвечают целям их обработки;","3.6. соответствия содержания и объема обрабатываемых персональных данных заявленным целям обработки;","3.7. недопущения обработки персональных данных, избыточных по отношению к заявленным целям их обработки;","3.8. обеспечения точности, достаточности и актуальности персональных данных по тношению к целям обработки персональных данных;","3.9. уничтожения либо обезличивания персональных данных по достижении целей их обработки или в случае утраты необходимости в достижении этих целей, при невозможности устранения Оператором допущенных нарушений персональных данных, если иное не предусмотрено федеральным законом"],personalDataCondition:["1.1. обработка персональных данных осуществляется с согласия субъекта персональных данных на обработку его персональных данных;","1.2. обработка персональных данных необходима для достижения целей, предусмотренных международным договором Российской Федерации или законом, для осуществления и выполнения возложенных законодательством Российской Федерации на оператора функций, полномочий и обязанностей;","1.3. обработка персональных данных необходима для осуществления правосудия, исполнения судебного акта, акта другого органа или должностного лица, подлежащих исполнению в соответствии с законодательством Российской Федерации об исполнительном производстве;","1.4. обработка персональных данных необходима для исполнения договора, стороной которого либо выгодоприобретателем или поручителем по которому является субъект персональных данных, а также для заключения договора по инициативе субъекта персональных данных или договора, по которому субъект персональных данных будет являться выгодоприобретателем или поручителем;","1.5. обработка персональных данных необходима для осуществления прав и законных интересов оператора или третьих лиц либо для достижения общественно значимых целей при условии, что при этом не нарушаются права и свободы субъекта персональных данных;","1.6. осуществляется обработка персональных данных, доступ неограниченного круга лиц к которым предоставлен субъектом персональных данных либо по его просьбе (далее - общедоступные персональные данные);","1.7. осуществляется обработка персональных данных, подлежащих опубликованию или обязательному раскрытию в соответствии с федеральным законом."]}},method:{closeModal:function(){this.$modal.hide("example")}}},p,!1,function(e){i("AQS5")},"data-v-109c442d",null).exports},props:{value:{type:Boolean,default:""},v:{type:Object,required:!0},id:{type:String,required:!0}},methods:n()({},Object(r.b)("auth/api",["modalOn"]),{modalShow:function(){this.$modal.show("privacy")},hideModal:function(){this.$modal.show("privacy")}}),computed:{confirm:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},i18n:{messages:{en:{policy:"I agree with",policy2:"the privacy policy",policy3:"and the transfer",policy4:"of personal data",header:"Privacy Policy",header2:"Personal Information"},ru:{policy:"Я согласен с",policy2:"политикой конфиденциальности",policy3:"и передачей",policy4:"персональных данных",header:"Политика конфиденциальности",header2:"Персональные данные"}}}},m={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"form__group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm,expression:"confirm"}],staticClass:"form__checkbox",class:{invalid:e.v.$dirty&&!e.v.sameAs},attrs:{type:"checkbox",name:"confirm",id:e.id},domProps:{checked:Array.isArray(e.confirm)?e._i(e.confirm,null)>-1:e.confirm},on:{change:function(t){var i=e.confirm,a=t.target,n=!!a.checked;if(Array.isArray(i)){var r=e._i(i,null);a.checked?r<0&&(e.confirm=i.concat([null])):r>-1&&(e.confirm=i.slice(0,r).concat(i.slice(r+1)))}else e.confirm=n}}}),i("label",{staticClass:"form__checkbox-label",attrs:{for:e.id}},[e._v(e._s(e.$t("policy"))+"  "),i("a",{on:{click:function(t){e.modalShow({header:e.$t("header"),link:"http://31.40.251.201:8086/policy.html"})}}},[e._v(e._s(e.$t("policy2"))+"  ")]),e._v(e._s(e.$t("policy3"))+"  "),i("a",{on:{click:function(t){e.modalShow({header:e.$t("header2"),link:"http://31.40.251.201:8086/personal-data.html"})}}},[e._v(e._s(e.$t("policy4"))+".")])]),i("modal",{staticClass:"custom-modal",attrs:{slot:"top-right",name:"privacy",scrollable:"scrollable",height:"auto",width:"90%",styles:{top:"20px",padding:"20px"}},on:{click:e.hideModal},slot:"top-right"},[i("button",{staticClass:"custom-modal-close",on:{click:function(t){return e.$modal.hide("privacy")}}},[e._v("✖")]),i("PrivacyPolicy")],1)],1)},staticRenderFns:[]};var v=i("VU/8")(h,m,!1,function(e){i("c2W5")},"data-v-710c5fa8",null).exports,_=i("Ju2O"),g=i.n(_),y=s.helpers.regex("passwordRule",/^(?=.*[A-Z])(?=.*[0-9]){8,}/),b={name:"Registration",components:{PasswordField:o.a,EmailField:l.a,NameField:f,PasswordRepeatField:c.a,ConfirmField:v,VueHcaptcha:g.a},data:function(){return{email:"",passwd1:"",passwd2:"",firstName:"",lastName:"",verified:!1,token:null,eKey:null,confirm:!1}},computed:{getLang:function(){return localStorage.getItem("lang")}},methods:n()({onVerify:function(e){this.verified=!0,this.token=e}},Object(r.b)("auth/api",["register"]),{submitHandler:function(){if(this.$v.$invalid)this.$v.$touch();else if(this.verified){var e=this.email,t=this.passwd1,i=this.passwd2,a=this.firstName,n=this.lastName,r=this.token;this.register({email:e,passwd1:t,passwd2:i,firstName:a,lastName:n,token:r})}else document.querySelector(".captcha").classList.add("error")}}),validations:{confirm:{sameAs:Object(s.sameAs)(function(){return!0})},email:{required:s.required,email:s.email},passwd1:{required:s.required,minLength:Object(s.minLength)(8),passwordRule:y},passwd2:{required:s.required,minLength:Object(s.minLength)(8),sameAsPassword:Object(s.sameAs)("passwd1"),passwordRule:y},firstName:{required:s.required,minLength:Object(s.minLength)(3)},lastName:{required:s.required,minLength:Object(s.minLength)(3)}},i18n:{messages:{en:{account:"Account",personal:"Personal data",registration:"Registration",name:"Name",lastname:"Last name"},ru:{account:"Аккаунт",personal:"Личные данные",registration:"Зарегистрироваться",name:"Имя",lastname:"Фамилия"}}}},w={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"registration"},[i("form",{staticClass:"registration__form",on:{submit:function(t){return t.preventDefault(),e.submitHandler(t)}}},[i("div",{staticClass:"form__block"},[i("h4",{staticClass:"form__subtitle"},[e._v(e._s(e.$t("account")))]),i("email-field",{class:{checked:e.$v.email.required&&e.$v.email.email},attrs:{id:"register-email",v:e.$v.email},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),i("password-field",{class:{checked:e.$v.passwd1.required&&e.$v.passwd2.sameAsPassword&&e.$v.passwd1.minLength},attrs:{id:"register-password",v:e.$v.passwd1,info:"info",registration:"registration",autocomplete:"new-password"},model:{value:e.passwd1,callback:function(t){e.passwd1=t},expression:"passwd1"}}),i("password-repeat-field",{class:{checked:e.$v.passwd1.required&&e.$v.passwd2.sameAsPassword&&e.$v.passwd2.minLength},attrs:{id:"register-repeat-password",v:e.$v.passwd2,autocomplete:"new-password"},model:{value:e.passwd2,callback:function(t){e.passwd2=t},expression:"passwd2"}})],1),i("div",{staticClass:"form__block"},[i("h4",{staticClass:"form__subtitle"},[e._v(e._s(e.$t("personal")))]),i("name-field",{attrs:{id:"register-firstName",v:e.$v.firstName,label:e.$t("name")},model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),i("name-field",{attrs:{id:"register-lastName",v:e.$v.lastName,label:e.$t("lastname")},model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}})],1),i("div",{staticClass:"form__block captcha"},[i("vue-hcaptcha",{attrs:{sitekey:"6cb436a2-4748-4d38-8404-113bf4e2069f",language:e.getLang},on:{verify:e.onVerify}})],1),i("div",{staticClass:"form__block"},[i("confirm-field",{attrs:{id:"register-confirm",v:e.$v.confirm},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}})],1),i("div",{staticClass:"registration__action"},[i("button-hover",{attrs:{tag:"button",type:"submit",variant:"white"}},[e._v(e._s(e.$t("registration")))])],1)])])},staticRenderFns:[]};var $=i("VU/8")(b,w,!1,function(e){i("rrPN")},null,null);t.default=$.exports},rrPN:function(e,t){}});
//# sourceMappingURL=4.c1f699d931a696b1ec36.js.map