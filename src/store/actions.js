import {
  ADD_CART_COUNT,
  ADD_CART,
  ALL_CHECKED_FALES
} from './mutation-types'
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let flag = true
      for (let item of context.state.cartList) {
        if (item.id == payload.id) {
          context.commit(ADD_CART_COUNT, item)
          flag = false
          resolve('添加成功，在购物车等亲~')
        }
      }
      if (flag) {
        context.commit(ADD_CART, payload)
        resolve('添加成功，在购物车等亲~')
      }
    })
  },
  all_checked_false(context, payload) {
    setTimeout(() => {
      context.commit(ALL_CHECKED_FALES)
    }, 200)
  }
}