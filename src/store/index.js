import Vue from 'vue'
import Vuex from 'vuex'

import krakenPairs from './modules/krakenPairs'
import bitfinexPairs from './modules/bitfinexPairs'
import binancePairs from './modules/binancePairs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    krakenPairs,
    bitfinexPairs,
    binancePairs,
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
