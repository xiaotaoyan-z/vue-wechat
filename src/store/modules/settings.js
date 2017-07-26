import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  mobileMute: true  //手机静音状态
}

// getters
const getters = {
  //checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  /*checkout ({ commit, state }, products) {
    const savedCartItems = [...state.added]
    commit(types.CHECKOUT_REQUEST)
    shop.buyProducts(
      products,
      () => commit(types.CHECKOUT_SUCCESS),
      () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    )
  }*/
}

// mutations
const mutations = {
  /*[types.ADD_TO_CART] (state, { id }) {
    state.lastCheckout = null
    const record = state.added.find(p => p.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1
      })
    } else {
      record.quantity++
    }
  }*/
  [types.SET_MOBILE_MUTE] (state, mutestatus){
    state.mobileMute = mutestatus;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
