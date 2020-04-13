import {
  ADD_CART_COUNT,
  ADD_CART,
  ALL_CHECKED_FALES
} from './mutation-types'
export default {
  // mutations最好是职责单一，只修改state中数据
  [ADD_CART_COUNT](state, payload) {
    payload.count++
    // console.log(state.cartList)
  },
  [ADD_CART](state, payload) {
    state.cartList.unshift(payload)
    // console.log(state.cartList)
  },
  [ALL_CHECKED_FALES](state){
    state.cartAllChecked = false
  },
  checked_click(state, payload) { // 购物车商品勾选
    state.cartList[payload].checked = !state.cartList[payload].checked
  },
  is_all_checked(state, payload) {
    state.cartAllChecked = payload
  },
  check_all(state, payload) {
    state.cartList.forEach(item => {
      item.checked = !payload
    });
    state.cartAllChecked = !payload
  },
}