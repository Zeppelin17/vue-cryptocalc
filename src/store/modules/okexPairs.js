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
        let pairsData = []
        okexService.getPairInfoBTCUSD() 
        .then((response) => {
            //console.log(response)
            pairsData.push(response.data)

            okexService.getPairInfoETHUSD() 
            .then((response) => {
                //console.log(response)
                pairsData.push(response.data)


                okexService.getPairInfoDSHUSD() 
                .then((response) => {
                    //console.log(response)
                    pairsData.push(response.data)

                    okexService.getPairInfoLTCUSD() 
                        .then((response) => {
                            //console.log(response)
                            pairsData.push(response.data)


                            okexService.getPairInfoETHBTC() 
                            .then((response) => {
                                //console.log(response)
                                pairsData.push(response.data)


                                okexService.getPairInfoDSHBTC() 
                                .then((response) => {
                                    //console.log(response)
                                    pairsData.push(response.data)


                                    okexService.getPairInfoLTCBTC() 
                                    .then((response) => {
                                        //console.log(response)
                                        pairsData.push(response.data)

                                        /**
                                         * Commit to Store
                                         */
                                        return commit(SET_OKEX_PAIRS, pairsData)
                                        
                                    })
                                    .catch((error) => {
                                        throw new Error(`Error calling Okex API: ${error}`)
                                    })
                                    
                                })
                                .catch((error) => {
                                    throw new Error(`Error calling Okex API: ${error}`)
                                })
                                
                            })
                            .catch((error) => {
                                throw new Error(`Error calling Okex API: ${error}`)
                            })
                            
                        })
                        .catch((error) => {
                            throw new Error(`Error calling Okex API: ${error}`)
                        })
                    
                })
                .catch((error) => {
                    throw new Error(`Error calling Okex API: ${error}`)
                })
                
            })
            .catch((error) => {
                throw new Error(`Error calling Okex API: ${error}`)
            })

            
        })
        .catch((error) => {
            throw new Error(`Error calling Okex API: ${error}`)
        })

        
    }
}

export const mutations = {
    [SET_OKEX_PAIRS](currentState, pairsData) {
        //console.log(pairsData)
        let pairsArray = []
        Object.keys(pairsData).forEach(key => {
            //console.log(key) 
            let tmpObj = {
                pair: '',
                pairData: ''
            }
            //console.log(pairsData[key].symbol)
            tmpObj.pair = pairsData[key].symbol
            tmpObj.pairData = pairsData[key]

            pairsArray.push(tmpObj)
        })
        
        //console.log(pairsArray)
        currentState.pairs = pairsArray
    }
}

export default {
    state,
    actions,
    mutations
}