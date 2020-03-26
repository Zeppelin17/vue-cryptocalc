/**
 * This store module fetches and stores all the pairs data from Binance exchange
 *
 * @summary This store module fetches and stores all the pairs data from Binance exchange
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:51:42 
 * Last modified  : 2020-03-26 06:52:01
 */

import binanceService from '@/services/binanceService'
import { FETCH_BINANCE_PAIRS } from '../actionTypes'
import { SET_BINANCE_PAIRS, SET_BINANCE_ERROR } from '../mutationTypes'

export const state = {
    pairs: [],
    error: null
}

export const actions = {
    [FETCH_BINANCE_PAIRS]({ commit }) {
        
        return binanceService.getPairsInfo() 
            .then((response) => {
                //console.log(response)
                commit(SET_BINANCE_PAIRS, response.data)
            })
            .catch((error) => {
                commit(SET_BINANCE_ERROR, error)
                throw new Error(`Error calling Binance API: ${error}`)
            })
    }
}

export const mutations = {
    [SET_BINANCE_PAIRS](currentState, pairsData) {
        
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