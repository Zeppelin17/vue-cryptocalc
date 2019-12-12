<template>
  <div class="hello">
    <img class="logo" alt="HitBTC logo" src="../../assets/logo-okex.png">
    <h2>Okex Pairs Status</h2>

    <transition name="fade">
        <div v-if="okexData.length">
          <ul>
            <li v-for="pair in okexData" :key="pair.pair"> 
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
import { FETCH_OKEX_PAIRS } from '@/store/actionTypes'

export default {
  name: 'OkexPairs',
  data() {
    return {
      
    }
  },

  computed: {
    /**
     * Returns the current state of Binance Pairs
     */
    okexData() {
      return this.$store.state.okexPairs.pairs
    }
  },

  /**
   * Before the app is mounted all the data begins to be fetched from the API's
   */
  beforeMount() { 
    if (!this.$store.state.okexPairs.pairs.length) {
      this.$store.dispatch(FETCH_OKEX_PAIRS)
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
