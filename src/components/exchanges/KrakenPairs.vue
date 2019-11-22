<template>
  <div class="hello">
    <img class="logo" alt="Kraken logo" src="../../assets/logo-kraken.png">
    <h1>Kraken Pairs Status</h1>

    <transition name="fade">
        <div v-if="krakenData.length">
          <ul>
            <li v-for="pair in krakenData" :key="pair.pair">
              {{ pair.pair }}
              <br/>
            </li>
          </ul>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
    </transition>

  </div>
</template>

<script>
import { FETCH_KRAKEN_PAIRS } from '@/store/actionTypes'

export default {
  name: 'KrakenPairs',
  data() {
    return {
      
    }
  },

  computed: {
    /**
     * Returns the current state of Kraken Pairs
     */
    krakenData() {
      return this.$store.state.krakenPairs.pairs
    }
  },

  /**
   * Before the app is mounted all the data begins to be fetched from the API's
   */
  beforeMount() { 
    if (!this.$store.state.krakenPairs.pairs.length) {
      this.$store.dispatch(FETCH_KRAKEN_PAIRS)
    }
    
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
