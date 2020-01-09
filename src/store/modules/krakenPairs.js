/**
 * This store module fetches and stores all the pairs data from Kraken exchange
 */
import krakenService from '@/services/krakenService'
import { FETCH_KRAKEN_PAIRS } from '../actionTypes'
import { SET_KRAKEN_PAIRS, SET_KRAKEN_ERROR } from '../mutationTypes'

export const state = {
    pairs: [],
    error: null
}

export const actions = {
    [FETCH_KRAKEN_PAIRS]({ commit }) {
        return krakenService.getPairsInfo() 
            .then((response) => {
                commit(SET_KRAKEN_PAIRS, response.data)
            })
            .catch((error) => {
                commit(SET_KRAKEN_ERROR, error)
                throw new Error(`Error calling Kraken API: ${error}`)
            })
    }
}

export const mutations = {
    [SET_KRAKEN_PAIRS](currentState, pairsData) {
        //console.log(pairsData)
        
        currentState.pairs = pairsData
        currentState.error = null
    },

    [SET_KRAKEN_ERROR](currentState, error) {

        currentState.error = error

    }
}

export default {
    state,
    actions,
    mutations
}