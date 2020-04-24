/**
 * 手机端 商城
 * 技术栈：Vue,vue-route,vuex,axios,防抖动函数
 * 引用插件：vue-awesome-swpier,vue-lazyload,fastclick,better-scroll,postcss-px-to-viewport
 * 封装插件：toast
 * 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'

import Toast from './components/common/toast/index'

// 解决移动端点击300ms延迟
FastClick.attach(document.body)

Vue.use(Toast)
//  图片懒加载
Vue.use(VueLazyload, {
  loading: require('@/assets/img/common/place-holder.png')
})

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue()



import { errorLog } from './network/errorLog'
// Promise内全局异常捕获
window.addEventListener('unhandledrejection', e => {
  e.preventDefault()
  let str = ` ${e.reason.stack}`
  console.log(str)
  errorLog(str)
  return true
})

// window error捕获的错误
window.onerror = (msg, url, line, col, error) => {
  let str = ` ${msg} 发生在: ${url} 第${line}行`
  console.log(str)
  errorLog(str)
  return true // error不会以error形式打印到控制台
}
// vue捕获的错误不会上报到window.error
Vue.config.errorHandler = function (error, vm, msg) {
  let str = ` ${error} 发生在组件：${vm.$options.name} 的 ${msg} 中`
  console.log(str)
  errorLog(str)
}

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

