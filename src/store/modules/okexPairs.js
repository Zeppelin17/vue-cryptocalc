/**
 * This store module fetches and stores all the pairs data from Okex exchange
 */
import okexService from '@/services/okexService'
import { FETCH_OKEX_PAIRS } from '../actionTypes'
import { SET_OKEX_PAIRS } from '../mutationTypes'

export const state = {
    pairs: []
}

export const actions = {
    [FETCH_OKEX_PAIRS]({ commit }) {

        return okexService.getPairsInfo() 
            .then((response) => {
                //console.log(response)
                commit(SET_OKEX_PAIRS, response.data)
            })
            .catch((error) => {
                throw new Error(`Error calling Okex API: ${error}`)
            })
        
    }
}

export const mutations = {
    [SET_OKEX_PAIRS](currentState, pairsData) {
        
        currentState.pairs = pairsData
    }
}

export default {
    state,
    actions,
    mutations
}