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

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')