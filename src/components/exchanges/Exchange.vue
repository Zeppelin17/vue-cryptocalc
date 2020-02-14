<template>
  <div class="hello">
    <img class="logo" :alt="exchangeName" :src="logoURL">
    
    <h2>{{exchangeName}} Pairs Status</h2>

    <transition name="fade">
      <div class="container-fluid">
        <div class="row">
          <div v-if="stopFetching === false" class="col-sm">
            <button @click="stopFetching = true" class="btn btn-light">Stop</button>
            <p>API Calls: <span class="badge badge-success">ON</span></p>
          </div>
          <div v-if="stopFetching === true" class="col-sm">
            <button @click="stopFetching = false" class="btn btn-dark">Start</button>
            <p>API Calls: <span class="badge badge-secondary">OFF</span></p>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <div v-if="exchangeData.length && exchangeError === null">
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
                  <tr v-for="pair in exchangeData" :key="pair.pair"> 
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
            <div v-else-if="exchangeError !== null">
              <p>{{ exchangeError }}</p>
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
import { 
    FETCH_KRAKEN_PAIRS, 
    FETCH_BITFINEX_PAIRS,
    FETCH_BINANCE_PAIRS,
    FETCH_HITBTC_PAIRS,
    FETCH_OKEX_PAIRS
    } from '@/store/actionTypes'
import { EXH_INTERVAL_TIMEOUT } from '@/config.js'
export default {
  name: 'Exchange',
  data() {
    return {
      //time interval handle for calling new data to API
      interval: null,
      //for switching data fetching on and off
      stopFetching: false,
    }
  },
  props: {
      exchangeName: String,
      logo: String,
      storeModuleName: String
  },

  computed: {
    logoURL() {
        return require("../../assets/"+this.logo)
    },
    /**
     * Returns the current state of Exchange Pairs
     */
    exchangeData() {
      return this.$store.state[this.storeModuleName].pairs
    },
    /**
     * Returns the current state of Exchange Error
     */
    exchangeError() {
      return this.$store.state[this.storeModuleName].error
    }
  },

  methods: {
    /**
     * Repeat data fetching
     */
    fetchData() {
      if (!this.stopFetching) {
        clearInterval(this.interval) //clear previous interval, if any, to avoid too much requests
        this.interval = null
        switch (this.storeModuleName) {
            case "krakenPairs":
                this.interval = setInterval(() => {this.$store.dispatch(FETCH_KRAKEN_PAIRS)}, EXH_INTERVAL_TIMEOUT)
                break;
            case "bitfinexPairs":
                this.interval = setInterval(() => {this.$store.dispatch(FETCH_BITFINEX_PAIRS)}, EXH_INTERVAL_TIMEOUT)
                break;
            case "binancePairs":
                this.interval = setInterval(() => {this.$store.dispatch(FETCH_BINANCE_PAIRS)}, EXH_INTERVAL_TIMEOUT)
                break;
            case "hitbtcPairs":
                this.interval = setInterval(() => {this.$store.dispatch(FETCH_HITBTC_PAIRS)}, EXH_INTERVAL_TIMEOUT)
                break;
            case "okexPairs":
                this.interval = setInterval(() => {this.$store.dispatch(FETCH_OKEX_PAIRS)}, EXH_INTERVAL_TIMEOUT)
                break;
        }

      }
    },
  },
  
  watch: {
   /**
   * Keep track of changes in stopFetching variable to turn on/off data fetching
   */
    stopFetching: function(stop) {
      if (!stop) {
        this.fetchData()
      }else{
        clearInterval(this.interval)
        this.interval = null
      }
    }
  },
 
  mounted() {
    /**
     * calling the method to set a time interval to repeat data fetching.
     */
    switch (this.storeModuleName) {
        case "krakenPairs":
            this.$store.dispatch(FETCH_KRAKEN_PAIRS)
            break;
        case "bitfinexPairs":
            this.$store.dispatch(FETCH_BITFINEX_PAIRS)
            break;
        case "binancePairs":
            this.$store.dispatch(FETCH_BINANCE_PAIRS)
            break;
        case "hitbtcPairs":
            this.$store.dispatch(FETCH_HITBTC_PAIRS)
            break;
        case "okexPairs":
            this.$store.dispatch(FETCH_OKEX_PAIRS)
            break;
    
    }
    
    this.fetchData();
  },
  beforeDestroy() {
    //stop data fetching in page change
    clearInterval(this.interval)
    this.interval = null
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
