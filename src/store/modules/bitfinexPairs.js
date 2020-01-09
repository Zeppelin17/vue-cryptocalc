/**
 * This store module fetches and stores all the pairs data from Bitfinex exchange
 */
import bitfinexService from '@/services/bitfinexService'
import { FETCH_BITFINEX_PAIRS } from '../actionTypes'
import { SET_BITFINEX_PAIRS, SET_BINANCE_ERROR } from '../mutationTypes'

export const state = {
    pairs: [],
    error: null
}

export const actions = {
    [FETCH_BITFINEX_PAIRS]({ commit }) {
        return bitfinexService.getPairsInfo() 
            .then((response) => {
                //console.log(response)
                commit(SET_BITFINEX_PAIRS, response.data)
            })
            .catch((error) => {
                commit(SET_BINANCE_ERROR, error)
                throw new Error(`Error calling Bitfinex API: ${error}`)
            })
    }
}

export const mutations = {
    [SET_BITFINEX_PAIRS](currentState, pairsData) {
        
        currentState.pairs = pairsData
        currentState.error = null
    },

    [SET_BINANCE_ERROR](currentState, error) {

        currentState.error = error

    }
}

export default {
    state,
    actions,
    mutations
}