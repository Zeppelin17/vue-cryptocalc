import Vue from 'vue'

export default {
    /**
     * This functions returns a Javascript promise from the call to the Okex API to get the asset pair
     * Docs at: https://www.okex.com/docs/en/
     * Possible pairs: https://www.okex.com/api/spot/v3/instruments
     */

    getPairInfoBTCUSD() {
        let url = 'https://www.okex.com/api/spot/v3/instruments/BTC-USDT/ticker'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoETHUSD() {
        let url = 'https://www.okex.com/api/spot/v3/instruments/ETH-USDT/ticker'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoDSHUSD() {
        let url = 'https://www.okex.com/api/spot/v3/instruments/DASH-USDT/ticker'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoLTCUSD() {
        let url = 'https://www.okex.com/api/spot/v3/instruments/LTC-USDT/ticker'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoETHBTC() {
        let url = 'https://www.okex.com/api/spot/v3/instruments/ETH-BTC/ticker'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoDSHBTC() {
        let url = 'https://www.okex.com/api/spot/v3/instruments/DASH-BTC/ticker'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoLTCBTC() {
        let url = 'https://www.okex.com/api/spot/v3/instruments/LTC-BTC/ticker'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
}

