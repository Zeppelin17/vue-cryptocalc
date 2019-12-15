import Vue from 'vue'

export default {
    /**
     * This function returns a Javascript promise from the call to the Bitfinex API to get the asset pairs
     * Docs at: https://docs.bitfinex.com/reference#rest-public-tickers
     * Possible pairs: https://api-pub.bitfinex.com/v2/conf/pub:list:pair:exchange
     */
    getPairsInfo() {
        let url = 'https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCEUR,tETHEUR,tDSHUSD,tLTCUSD,tETHBTC,tDSHBTC,tLTCBTC'
        
        return Vue.axios.get(url, {timeout: 5000}, {mode: 'no-cors'}) 
    }
}

