import {
  ADD_CART_COUNT,
  ADD_CART
} from './mutation-types'
export default {
  addCart(context, payload) {
    for (let item of context.state.cartList) {
      if (item.id == payload.id) {
        context.commit(ADD_CART_COUNT, item)
        return
      }
    }
    context.commit(ADD_CART, payload)
  }
}