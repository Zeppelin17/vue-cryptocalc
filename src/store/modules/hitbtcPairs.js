/**
 * This store module fetches and stores all the pairs data from Hitbtc exchange
 */
import hitbtcService from '@/services/hitbtcService'
import { FETCH_HITBTC_PAIRS } from '../actionTypes'
import { SET_HITBTC_PAIRS } from '../mutationTypes'

export const state = {
    pairs: []
}

export const actions = {
    [FETCH_HITBTC_PAIRS]({ commit }) {
        
        return hitbtcService.getPairsInfo() 
            .then((response) => {
                //console.log(response)
                commit(SET_HITBTC_PAIRS, response.data)
            })
            .catch((error) => {
                throw new Error(`Error calling Hitbtc API: ${error}`)
            })
        
    }
}

export const mutations = {
    [SET_HITBTC_PAIRS](currentState, pairsData) {
        
        currentState.pairs = pairsData
    }
}

export default {
    state,
    actions,
    mutations
}