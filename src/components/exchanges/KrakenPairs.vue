<template>
  <div class="hello">
    <img class="logo" alt="Kraken logo" src="../../assets/logo-kraken.png">
    <h1>Kraken Pairs Status</h1>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'KrakenPairs',
  data() {
    return {

    }
  },
  mounted() {
    /**Mirar esto:
     * https://github.com/ccxt/ccxt
     * y esto:
     * https://github.com/ccxt/ccxt/issues/1098
     */
    let url = 'https://api.kraken.com/0/public/AssetPairs'

    let config = {
      method: 'get',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      params: {
        pair: 'xbteur'
      },
      // `timeout` specifies the number of milliseconds before the request times out.
      // If the request takes longer than `timeout`, the request will be aborted.
      timeout: 5000, // default is `0` (no timeout)

      // `withCredentials` indicates whether or not cross-site Access-Control requests
      // should be made using credentials
      withCredentials: true, // default
      auth: {
        username: 'janedoe',
        password: 's00pers3cret'
      },

      responseType: 'json', // default
      responseEncoding: 'utf8', // default

      // `maxContentLength` defines the max size of the http response content in bytes allowed
      maxContentLength: 2000,

    }

    Vue.axios.get(url, config)
      .then((response) => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(":::ERROR KRAKEN API GET PAIR:::")
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img.logo {
  max-width: 100px;
}
</style>
