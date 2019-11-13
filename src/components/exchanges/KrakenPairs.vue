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
    let url = 'https://cors-anywhere.herokuapp.com/https://api.kraken.com/0/public/AssetPairs?pair=xbteur,etheur,dasheur,ltceur,ethxbt,dashxbt,ltcxbt'

    Vue.axios.get(url)
      .then((response) => {
        console.log(":::KRAKEN API DATA:::")
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
