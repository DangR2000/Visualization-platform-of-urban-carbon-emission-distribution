import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/reset.css'
import './assets/css/style.css'

import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import VueCookies from 'vue-cookies'

var Cesium = require('cesium/Cesium');
var widgets = require('cesium/Widgets/widgets.css');


Vue.use(VueI18n)
Vue.use(ElementUI, {
	zhLocale
});
Vue.use(VueCookies)
Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets

Vue.config.productionTip = false

// InitLanguage  这里引入了vue-cookie,是为了将用户选择的语言存储到Cookie里，在以后访问站点不需要重新选择语言
function InitLanguage() {
	return Vue.$cookies.get('DefaultLanguage') == null ? 'zh-CN' : Vue.$cookie.get('DefaultLanguage');
}


const i18n = new VueI18n({
	locale: InitLanguage(), // 语言标识,默认汉语,先去cookie查找，如果存在并有效，cookie值即为默认语言类型；否则默认为中文简体
	messages: {
		'en-US': Object.assign(require("../static/lang/en"), enLocale),
		'zh-CN': Object.assign(require("../static/lang/zh-CN"), zhLocale),
	}
});
locale.i18n((key, value) => i18n.t(key, value)); //为了之后将element-ui组件本地化

new Vue({
	router,
	store,
	i18n,
	render: function(h) {
		return h(App)
	}
}).$mount('#app')
