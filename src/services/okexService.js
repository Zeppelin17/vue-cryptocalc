import Vue from 'vue'
import { API_TIMEOUT } from '@/config.js'

export default {
    /**
     * This functions returns a Javascript promise from the call to the Okex API to get the asset pair
     * Docs at: https://www.okex.com/docs/en/
     * Possible pairs: https://www.okex.com/api/spot/v3/instruments
     */

    getPairsInfo() {
        let url = 'https://zeppelin17.pythonanywhere.com/okex/ticker/'
        
        return Vue.axios.get(url, {timeout: API_TIMEOUT}) 
    }
}

