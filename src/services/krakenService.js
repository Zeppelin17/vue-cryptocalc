import Vue from 'vue'
import { API_TIMEOUT } from '@/config.js'

export default {
    /**
     * This function returns a Javascript promise from the call to the Kraken API to get the asset pairs
     * Docs at: https://www.kraken.com/features/api#get-ticker-info
     */
    getPairsInfo() {
        let url = 'https://zeppelin17.pythonanywhere.com/kraken/ticker/'

        return Vue.axios.get(url, {timeout: API_TIMEOUT}) 
    }
}