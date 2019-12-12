import Vue from 'vue'
import Vuex from 'vuex'

import krakenPairs from './modules/krakenPairs'
import bitfinexPairs from './modules/bitfinexPairs'
import binancePairs from './modules/binancePairs'
import hitbtcPairs from './modules/hitbtcPairs'
import okexPairs from './modules/okexPairs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    krakenPairs,
    bitfinexPairs,
    binancePairs,
    hitbtcPairs,
    okexPairs,
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
