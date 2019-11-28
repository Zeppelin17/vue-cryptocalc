import Vue from 'vue'
import Vuex from 'vuex'

import krakenPairs from './modules/krakenPairs'
import bitfinexPairs from './modules/bitfinexPairs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    krakenPairs,
    bitfinexPairs,
  },
  state: {
    
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {
    
  }
})
