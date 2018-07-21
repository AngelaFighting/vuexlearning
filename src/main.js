// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from "@/store/store.js";
import "@/style/init.css";
import router from '@/router.js'
import VueI18n from 'vue-i18n'
import LangEn from '../static/lang/en'
import LangZhCHS from '../static/lang/zhCHS'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueResource)

// i18n多语言只能在Vue实例使用
const i18n = new VueI18n({
  locale: 'zhCHS', // 语言标识
  messages: {
    'en': LangEn,
    'zhCHS': LangZhCHS
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,//注入i18n组件
  router,//注入router组件
  store,//注入store组件
  components: {App},
  template: '<App/>'
})
