/**
 * This store module stores arbitrage opportunities
 *
 * @summary This store module stores arbitrage opportunities
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:52:14 
 * Last modified  : 2020-03-26 06:52:14 
 */

import { ACT_STORE_ARB_OPPORTUNITIES } from '../actionTypes'
import { STORE_ARB_OPPORTUNITIES } from '../mutationTypes'

export const state = {
    opportunities: []
}

export const actions = {
    [ACT_STORE_ARB_OPPORTUNITIES]({ commit }, opportunities) {
        commit(STORE_ARB_OPPORTUNITIES, opportunities)    
    }
}

export const mutations = {
    [STORE_ARB_OPPORTUNITIES](currentState, opportunities) {
        currentState.opportunities = [] //clear current state
        currentState.opportunities = opportunities
    }
}

export default {
    state,
    actions,
    mutations
}