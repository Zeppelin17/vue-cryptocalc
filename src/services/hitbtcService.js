import Vue from 'vue'

export default {
    /**
     * This functions returns a Javascript promise from the call to the Hitbtc API to get the asset pair
     * Docs at: https://api.hitbtc.com/api/2/explore/
     * Possible pairs: https://api.hitbtc.com/api/2/public/symbol
     */

    getPairInfoBTCUSD() {
        let url = 'https://api.hitbtc.com/api/2/public/ticker/BTCUSD'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoETHUSD() {
        let url = 'https://api.hitbtc.com/api/2/public/ticker/ETHUSD'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoDSHUSD() {
        let url = 'https://api.hitbtc.com/api/2/public/ticker/DASHUSD'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoLTCUSD() {
        let url = 'https://api.hitbtc.com/api/2/public/ticker/LTCUSD'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoETHBTC() {
        let url = 'https://api.hitbtc.com/api/2/public/ticker/ETHBTC'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoDSHBTC() {
        let url = 'https://api.hitbtc.com/api/2/public/ticker/DASHBTC'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoLTCBTC() {
        let url = 'https://api.hitbtc.com/api/2/public/ticker/LTCBTC'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
}

