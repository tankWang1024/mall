import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
const state = {
  cartList: [
    {
      id:'pop2222',
      price:69,
      img:'https://s11.mogucdn.com/mlcdn/c45406/200105_60al0a0cl4d4glia5g9fbc08lild1_800x799.jpg_750x999.jpg',
      title:'心机波点连衣裙超仙高腰收腰显瘦中长裙法式气质过膝桔梗egg裙',
      desc:"心机波点连衣裙超仙高腰收腰显瘦中长裙法式气质过膝桔梗egg裙",
      count:1,
      checked:false
    },
    {
      id:'pop22',
      price:69.99,
      img:'https://s11.mogucdn.com/mlcdn/c45406/200105_60al0a0cl4d4glia5g9fbc08lild1_800x799.jpg_750x999.jpg',
      title:'心机波点连衣裙超仙高腰收腰显瘦中长裙法式气质过膝桔梗egg裙',
      desc:"心机波点连衣裙超仙高腰收腰显瘦中长裙法式气质过膝桔梗egg裙",
      count:1,
      checked:false
    },{
      id:'pop222',
      price:69.99,
      img:'https://s11.mogucdn.com/mlcdn/c45406/200105_60al0a0cl4d4glia5g9fbc08lild1_800x799.jpg_750x999.jpg',
      title:'心机波点连衣裙超仙高腰收腰显瘦中长裙法式气质过膝桔梗egg裙',
      desc:"心机波点连衣裙超仙高腰收腰显瘦中长裙法式气质过膝桔梗egg裙",
      count:2,
      checked:false
    }
  ],
  cartAllChecked:false
}
const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {}
})
export default store