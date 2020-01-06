/**
 * This store module fetches and stores all the pairs data from Binance exchange
 */
import binanceService from '@/services/binanceService'
import { FETCH_BINANCE_PAIRS } from '../actionTypes'
import { SET_BINANCE_PAIRS } from '../mutationTypes'

export const state = {
    pairs: []
}

export const actions = {
    [FETCH_BINANCE_PAIRS]({ commit }) {
        
        return binanceService.getPairsInfo() 
            .then((response) => {
                //console.log(response)
                commit(SET_BINANCE_PAIRS, response.data)
            })
            .catch((error) => {
                throw new Error(`Error calling Binance API: ${error}`)
            })
    }
}

export const mutations = {
    [SET_BINANCE_PAIRS](currentState, pairsData) {
        
        currentState.pairs = pairsData
    }
}

export default {
    state,
    actions,
    mutations
}