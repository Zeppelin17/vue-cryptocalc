/**
 * This store module fetches and stores all the pairs data from Okex exchange
 *
 * @summary This store module fetches and stores all the pairs data from Okex exchange
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:49:42 
 * Last modified  : 2020-03-26 06:50:00
 */

 
import okexService from '@/services/okexService'
import { FETCH_OKEX_PAIRS } from '../actionTypes'
import { SET_OKEX_PAIRS, SET_OKEX_ERROR } from '../mutationTypes'

export const state = {
    pairs: [],
    error: null
}

export const actions = {
    [FETCH_OKEX_PAIRS]({ commit }) {

        return okexService.getPairsInfo() 
            .then((response) => {
                //console.log(response)
                commit(SET_OKEX_PAIRS, response.data)
            })
            .catch((error) => {
                commit(SET_OKEX_ERROR, error)
                throw new Error(`Error calling Okex API: ${error}`)
            })
        
    }
}

export const mutations = {
    [SET_OKEX_PAIRS](currentState, pairsData) {
        
        currentState.pairs = pairsData
        currentState.error = null
    },

    [SET_OKEX_ERROR](currentState, error) {

        currentState.error = error

    }
}

export default {
    state,
    actions,
    mutations
}