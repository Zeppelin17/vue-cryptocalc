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
        let pairsData = []

        hitbtcService.getPairInfoBTCUSD() 
        .then((response) => {
            //console.log(response)
            pairsData.push(response.data)

            hitbtcService.getPairInfoETHUSD() 
            .then((response) => {
                //console.log(response)
                pairsData.push(response.data)


                hitbtcService.getPairInfoDSHUSD() 
                .then((response) => {
                    //console.log(response)
                    pairsData.push(response.data)

                    hitbtcService.getPairInfoLTCUSD() 
                        .then((response) => {
                            //console.log(response)
                            pairsData.push(response.data)


                            hitbtcService.getPairInfoETHBTC() 
                            .then((response) => {
                                //console.log(response)
                                pairsData.push(response.data)


                                hitbtcService.getPairInfoDSHBTC() 
                                .then((response) => {
                                    //console.log(response)
                                    pairsData.push(response.data)


                                    hitbtcService.getPairInfoLTCBTC() 
                                    .then((response) => {
                                        //console.log(response)
                                        pairsData.push(response.data)

                                        /**
                                         * Commit to Store
                                         */
                                        return commit(SET_HITBTC_PAIRS, pairsData)
                                        
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
    [SET_HITBTC_PAIRS](currentState, pairsData) {
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