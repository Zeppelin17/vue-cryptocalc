import Vue from 'vue'
import { API_TIMEOUT, BITFINEX_TICKER } from '@/config.js'

export default {
    /**
     * This function returns a Javascript promise from the call to the Bitfinex API to get the asset pairs
     * Docs at: https://docs.bitfinex.com/reference#rest-public-tickers
     * Possible pairs: https://api-pub.bitfinex.com/v2/conf/pub:list:pair:exchange
     */
    getPairsInfo() {
        let url = BITFINEX_TICKER
        
        return Vue.axios.get(url, {timeout: API_TIMEOUT}) 
    }
}

