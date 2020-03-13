import Vue from 'vue'
import { API_TIMEOUT, OKEX_TICKER } from '@/config.js'

export default {
    /**
     * This functions returns a Javascript promise from the call to the Okex API to get the asset pair
     * Docs at: https://www.okex.com/docs/en/
     * Possible pairs: https://www.okex.com/api/spot/v3/instruments
     */

    getPairsInfo() {
        let url = OKEX_TICKER
        
        return Vue.axios.get(url, {timeout: API_TIMEOUT}) 
    }
}

