import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
  path: '/',
  component: () => import('views/index'),
  redirect: '/home',
  children: [{
    path: '',
    redirect: "/home"
  }, {
    path: '/home',
    component: () => import('views/home/Home')
  }, {
    path: '/category',
    component: () => import('views/category/Category')
  }, {
    path: '/cart',
    component: () => import('views/cart/Cart')
  }, {
    path: '/profile',
    component: () => import('views/profile/Profile')
  }, {
    path: '/detail/:id',
    component: () => import('views/detail/Detail'),
  }, , {
    path: '/moreComment/:id',
    component: () => import('views/moreComment/MoreComment'),
  }, ]
}]
const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  
 
  next()
})
export default router