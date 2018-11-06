import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads.js'
import user from './user.js'
import shared from './shared.js'
import order from './createOrder.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ads, user, shared, order
  }
})
