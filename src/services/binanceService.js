import Vue from 'vue'
import { API_TIMEOUT, BINANCE_TICKER } from '@/config.js'

export default {
    /**
     * This function returns a Javascript promise from the call to the Binance API to get the asset pair
     * Docs at: https://binance-docs.github.io/apidocs/spot/en/#24hr-ticker-price-change-statistics
     * Possible pairs: https://api.binance.com/api/v3/exchangeInfo
     */

    getPairsInfo() {
        let url = BINANCE_TICKER
        
        return Vue.axios.get(url, {timeout: API_TIMEOUT}) 
    }
}

