/**
 * This store module fetches and stores all the pairs data from Hitbtc exchange
 *
 * @summary This store module fetches and stores all the pairs data from Hitbtc exchange
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:50:56 
 * Last modified  : 2020-03-26 06:50:56 
 */

import hitbtcService from '@/services/hitbtcService'
import { FETCH_HITBTC_PAIRS } from '../actionTypes'
import { SET_HITBTC_PAIRS, SET_HITBTC_ERROR } from '../mutationTypes'

export const state = {
    pairs: [],
    error: null
}

export const actions = {
    [FETCH_HITBTC_PAIRS]({ commit }) {
        
        return hitbtcService.getPairsInfo() 
            .then((response) => {
                //console.log(response)
                commit(SET_HITBTC_PAIRS, response.data)
            })
            .catch((error) => {
                commit(SET_HITBTC_ERROR, error)
                throw new Error(`Error calling Hitbtc API: ${error}`)
            })
        
    }
}

export const mutations = {
    [SET_HITBTC_PAIRS](currentState, pairsData) {
        
        currentState.pairs = pairsData
        currentState.error = null
    },

    [SET_HITBTC_ERROR](currentState, error) {

        currentState.error = error

    }
}

export default {
    state,
    actions,
    mutations
}