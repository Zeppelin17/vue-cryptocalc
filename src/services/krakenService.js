/**
 * API call to get Kraken data
 *
 * @summary API call to get Kraken data
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:54:39 
 * Last modified  : 2020-03-26 06:54:39 
 */

import Vue from 'vue'
import { API_TIMEOUT, KRAKEN_TICKER } from '@/config.js'

export default {
    /**
     * This function returns a Javascript promise from the call to the Kraken API to get the asset pairs
     * Docs at: https://www.kraken.com/features/api#get-ticker-info
     */
    getPairsInfo() {
        let url = KRAKEN_TICKER

        return Vue.axios.get(url, {timeout: API_TIMEOUT}) 
    }
}