import Vue from 'vue'

export default {
    /**
     * This function returns a Javascript promise from the call to the Kraken API to get the asset pairs
     */
    getPairsInfo() {
        let url = 'https://cors-anywhere.herokuapp.com/https://api.kraken.com/0/public/AssetPairs?pair=xbteur,etheur,dasheur,ltceur,ethxbt,dashxbt,ltcxbt'

        return Vue.axios.get(url, {timeout: 5000}) 
    }
}