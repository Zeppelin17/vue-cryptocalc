import Vue from 'vue'

export default {
    /**
     * This functions returns a Javascript promise from the call to the Hitbtc API to get the asset pair
     * Docs at: https://api.hitbtc.com/api/2/explore/
     * Possible pairs: https://api.hitbtc.com/api/2/public/symbol
     */

    getPairsInfo() {
        let url = 'https://zeppelin17.pythonanywhere.com/hitbtc/ticker/'
        
        return Vue.axios.get(url, {timeout: 10000}) 
    }
}

