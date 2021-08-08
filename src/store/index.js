import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: [],
    cartListIsAllCheck:Boolean
  },
  mutations: {
    addToCart(state, payload) {
      if (state.cartList.length == 0) {
        payload.count = 1
        state.cartList.push(payload)
      } else {
        let n = 1
        for (let [index, goods] of state.cartList.entries()) {
          if (goods.iid === payload.iid) {
            state.cartList[index].count += 1
            Vue.set(state.cartList,index,state.cartList[index])
            // Vue.set(state.cartList[index],'count','5')
            n = 0 //n=0表示执行了相等的操作
            break
          }
        }
        if (n) {
          payload.count = 1
          state.cartList.push(payload)
        }
      }
    },
    editCheck(state,payload) {
      let bool = !state.cartList[payload].check
      Vue.set(state.cartList[payload],'check',bool)
    },
    nobool(state) {
      let b = !state.cartListIsAllCheck
      state.cartListIsAllCheck=b
      for(let goods of state.cartList){
        if(goods.check !== b){
          goods.check = !goods.check
        }
      }
    },
    editbool(state,payload) {
      state.cartListIsAllCheck = payload
    }
  },
})

export default store
