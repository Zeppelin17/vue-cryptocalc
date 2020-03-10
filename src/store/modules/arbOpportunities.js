/**
 * This store module stores arbitrage opportunities
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