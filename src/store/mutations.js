import {
  ADD_CART_COUNT,
  ADD_CART
} from './mutation-types'
export default {
  // mutations最好是职责单一，只修改state中数据
  [ADD_CART_COUNT](state, payload) {
    payload.count++
    console.log(state.cartList)
  },
  [ADD_CART](state, payload) {
    state.cartList.push(payload)
    console.log(state.cartList)
  }
}