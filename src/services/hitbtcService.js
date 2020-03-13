import Vue from 'vue'
import { API_TIMEOUT, HITBTC_TICKER } from '@/config.js'

export default {
    /**
     * This functions returns a Javascript promise from the call to the Hitbtc API to get the asset pair
     * Docs at: https://api.hitbtc.com/api/2/explore/
     * Possible pairs: https://api.hitbtc.com/api/2/public/symbol
     */

    getPairsInfo() {
        let url = HITBTC_TICKER
        
        return Vue.axios.get(url, {timeout: API_TIMEOUT}) 
    }
}

