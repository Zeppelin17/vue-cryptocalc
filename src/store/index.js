/**
 * Vuex store main file
 *
 * @summary Vuex store main file
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:46:33 
 * Last modified  : 2020-03-26 06:46:50
 */

import Vue from 'vue'
import Vuex from 'vuex'

import krakenPairs from './modules/krakenPairs'
import bitfinexPairs from './modules/bitfinexPairs'
import binancePairs from './modules/binancePairs'
import hitbtcPairs from './modules/hitbtcPairs'
import okexPairs from './modules/okexPairs'
import arbOpportunities from './modules/arbOpportunities'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    krakenPairs,
    bitfinexPairs,
    binancePairs,
    hitbtcPairs,
    okexPairs,
    arbOpportunities,
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
