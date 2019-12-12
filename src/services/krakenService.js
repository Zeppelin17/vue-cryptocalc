import Vue from 'vue'

export default {
    /**
     * This function returns a Javascript promise from the call to the Kraken API to get the asset pairs
     * Docs at: https://www.kraken.com/features/api#get-ticker-info
     */
    getPairsInfo() {
        let url = 'https://api.kraken.com/0/public/Ticker?pair=xbteur,etheur,dasheur,ltceur,ethxbt,dashxbt,ltcxbt'

        return Vue.axios.get(url, {timeout: 5000}) 
    }
}