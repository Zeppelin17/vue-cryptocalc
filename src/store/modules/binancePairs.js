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
        let pairsData = []

        binanceService.getPairInfoBTCUSD() 
        .then((response) => {
            //console.log(response)
            pairsData.push(response.data)

            binanceService.getPairInfoETHUSD() 
            .then((response) => {
                //console.log(response)
                pairsData.push(response.data)


                binanceService.getPairInfoDSHUSD() 
                .then((response) => {
                    //console.log(response)
                    pairsData.push(response.data)

                    binanceService.getPairInfoLTCUSD() 
                        .then((response) => {
                            //console.log(response)
                            pairsData.push(response.data)


                            binanceService.getPairInfoETHBTC() 
                            .then((response) => {
                                //console.log(response)
                                pairsData.push(response.data)


                                binanceService.getPairInfoDSHBTC() 
                                .then((response) => {
                                    //console.log(response)
                                    pairsData.push(response.data)


                                    binanceService.getPairInfoLTCBTC() 
                                    .then((response) => {
                                        //console.log(response)
                                        pairsData.push(response.data)

                                        /**
                                         * Commit to Store
                                         */
                                        return commit(SET_BINANCE_PAIRS, pairsData)
                                        
                                    })
                                    .catch((error) => {
                                        throw new Error(`Error calling Binance API: ${error}`)
                                    })
                                    
                                })
                                .catch((error) => {
                                    throw new Error(`Error calling Binance API: ${error}`)
                                })
                                
                            })
                            .catch((error) => {
                                throw new Error(`Error calling Binance API: ${error}`)
                            })
                            
                        })
                        .catch((error) => {
                            throw new Error(`Error calling Binance API: ${error}`)
                        })
                    
                })
                .catch((error) => {
                    throw new Error(`Error calling Binance API: ${error}`)
                })
                
            })
            .catch((error) => {
                throw new Error(`Error calling Binance API: ${error}`)
            })

            
        })
        .catch((error) => {
            throw new Error(`Error calling Binance API: ${error}`)
        })

        
    }
}

export const mutations = {
    [SET_BINANCE_PAIRS](currentState, pairsData) {
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