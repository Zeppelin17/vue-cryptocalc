import Vue from 'vue'

export default {
    /**
     * This functions returns a Javascript promise from the call to the Binance API to get the asset pair
     * Docs at: https://binance-docs.github.io/apidocs/spot/en/#24hr-ticker-price-change-statistics
     * Possible pairs: https://api.binance.com/api/v3/exchangeInfo
     */

    getPairInfoBTCUSD() {
        let url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoETHUSD() {
        let url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoDSHUSD() {
        let url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=DASHUSDT'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoLTCUSD() {
        let url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=LTCUSDT'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoETHBTC() {
        let url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=ETHBTC'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoDSHBTC() {
        let url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=DASHBTC'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
    getPairInfoLTCBTC() {
        let url = 'https://api.binance.com/api/v3/ticker/24hr?symbol=LTCBTC'
        
        return Vue.axios.get(url, {timeout: 5000}) 
    },
}

