<template>
  <div class="hello">
    <img class="logo" alt="HitBTC logo" src="../../assets/logo-hitbtc.png">
    <h2>HitBTC Pairs Status</h2>

    <transition name="fade">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm">
            <div v-if="hitbtcData.length">
              <table class="table table-dark table-striped">
                <thead>
                  <th>Pair</th>
                  <th>Ask</th>
                  <th>Bid</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Volume</th>
                </thead>

                <tbody>
                  <tr v-for="pair in hitbtcData" :key="pair.pair"> 
                    <td>{{ pair.pair }}</td>
                    <td>{{ pair.ask.price }}</td>
                    <td>{{ pair.bid.price }}</td>
                    <td>{{ pair.high.last24 }}</td>
                    <td>{{ pair.low.last24 }}</td>
                    <td>{{ pair.volume.last24 }}</td>
                  </tr>
                </tbody>
                
              </table>
            </div>
            <div v-else>
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
        
    </transition>

  </div>
</template>

<script>
import { FETCH_HITBTC_PAIRS } from '@/store/actionTypes'

export default {
  name: 'HitbtcPairs',
  data() {
    return {
      
    }
  },

  computed: {
    /**
     * Returns the current state of Binance Pairs
     */
    hitbtcData() {
      return this.$store.state.hitbtcPairs.pairs
    }
  },

  /**
   * Before the app is mounted all the data begins to be fetched from the API's
   */
  beforeMount() { 
    if (!this.$store.state.hitbtcPairs.pairs.length) {
      this.$store.dispatch(FETCH_HITBTC_PAIRS)
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
