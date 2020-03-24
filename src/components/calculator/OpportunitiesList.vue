<template>
    <div class="all-possibnle-operations">
        <CalculatorParameters />

        <h2>All possible operations</h2>
        <div v-if="opportunities.length > 0">
            <transition name="fade">
                <div class="container">
                    <div class="row">
                        <div v-for="(opp, index) in opportunities" :key="`${index}`" class="col-sm-12"> 
                            <table class="table table-striped all-opp-table">
                                <caption>{{ opp.exchanges }}</caption>
                                <thead>
                                    <th>Pair</th>
                                    <th>BUY</th>
                                    <th>BUY Price</th>
                                    <th>SELL</th>
                                    <th>SELL Price</th>
                                    <th>Difference</th>
                                    <th>Benefit Symbol</th>
                                </thead>

                                <tbody>
                                    <tr v-for="(opportunity, index) in opp.data" :key="`${index}`">
                                        <td>{{ opportunity.pair }}</td>
                                        <td>{{ opportunity.buyIn }}</td>
                                        <td>{{ opportunity.bidPrice }}</td>
                                        <td>{{ opportunity.sellIn }}</td>
                                        <td>{{ opportunity.askPrice }}</td>
                                        <td>{{ opportunity.difference }}</td>
                                        <td>{{ opportunity.benefitSymbol }}</td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { 
    FETCH_KRAKEN_PAIRS, 
    FETCH_BITFINEX_PAIRS,
    FETCH_BINANCE_PAIRS,
    FETCH_HITBTC_PAIRS,
    FETCH_OKEX_PAIRS,
    ACT_STORE_ARB_OPPORTUNITIES
    } from '@/store/actionTypes'
import { EXH_INTERVAL_TIMEOUT, CALC_INTERVAL_CHECK } from '@/config.js'
import CalculatorParameters from './CalculatorParameters'

export default {
    name: 'OpportunitiesList',
    components: {
        CalculatorParameters
    },
    data() {
        return {
            opportunities: [],
            //time interval handle for calling new data to API
            apiInternal: null,
            //time interval to look again for opportunities
            arbInterval: null,
        }
    },
    computed: {
        krakenPairs() {
            return {"exchangeName": "Kraken", "data": this.$store.state.krakenPairs.pairs}
        },
        bitfinexPairs() {
            return {"exchangeName": "Bitfinex", "data": this.$store.state.bitfinexPairs.pairs}
        },
        binancePairs() {
            return {"exchangeName": "Binance", "data": this.$store.state.binancePairs.pairs}
        },
        hitbtcPairs() {
            return {"exchangeName": "Hitbtc", "data": this.$store.state.hitbtcPairs.pairs}
        },
        okexPairs() {
            return {"exchangeName": "Okex", "data": this.$store.state.okexPairs.pairs}
        }

    },
    methods: {
        /**
         * Returns array of possible arbitrage operations between two exchanges
         */
        searchArbitrageOpportunities(exchangeA, exchangeB) {
            let possibleOperations = {}
            let tmpData = {}

            possibleOperations["exchanges"] = `${exchangeA.exchangeName} - ${exchangeB.exchangeName}`
            possibleOperations["data"] = new Array()
                
            for (let APair of exchangeA.data) {
                for (let BPair of exchangeB.data) {
                    if (APair.pair === BPair.pair) {  
                        if (APair.bid.price > BPair.ask.price) { 

                            tmpData = {
                                "pair": APair.pair,
                                "buyIn": exchangeA.exchangeName,
                                "sellIn": exchangeB.exchangeName,
                                "bidPrice": APair.bid.price,
                                "askPrice": BPair.ask.price,
                                "difference": (APair.bid.price - BPair.ask.price),
                                "benefitSymbol": APair.pair.split("-")[1]
                            }
                            possibleOperations["data"].push(tmpData)
                            
                        }else if (BPair.bid.price > APair.ask.price) {
                            tmpData = {
                                "pair": BPair.pair,
                                "buyIn": exchangeB.exchangeName,
                                "sellIn": exchangeA.exchangeName,
                                "bidPrice": BPair.bid.price,
                                "askPrice": APair.ask.price,
                                "difference": (BPair.bid.price - APair.ask.price),
                                "benefitSymbol": BPair.pair.split("-")[1]
                            }
                            possibleOperations["data"].push(tmpData)
                        }
                    }
                }
            }
            return possibleOperations
        },
        /**
         * this method calculates values to full arbitrage opportunities array
         */
        calculateOpportunities() {
            this.opportunities = [] //reset opportunities array if there is any
            this.opportunities.push(this.searchArbitrageOpportunities(this.krakenPairs, this.bitfinexPairs))
            this.opportunities.push(this.searchArbitrageOpportunities(this.krakenPairs, this.binancePairs))
            this.opportunities.push(this.searchArbitrageOpportunities(this.krakenPairs, this.hitbtcPairs))
            this.opportunities.push(this.searchArbitrageOpportunities(this.krakenPairs, this.okexPairs))
            this.opportunities.push(this.searchArbitrageOpportunities(this.bitfinexPairs, this.binancePairs))
            this.opportunities.push(this.searchArbitrageOpportunities(this.bitfinexPairs, this.hitbtcPairs))
            this.opportunities.push(this.searchArbitrageOpportunities(this.bitfinexPairs, this.okexPairs))
            this.opportunities.push(this.searchArbitrageOpportunities(this.binancePairs, this.hitbtcPairs))
            this.opportunities.push(this.searchArbitrageOpportunities(this.binancePairs, this.okexPairs))
            this.opportunities.push(this.searchArbitrageOpportunities(this.hitbtcPairs, this.okexPairs))

            this.storeOpportunities()
        },
        /**
         * Method to fetch API's data
         */
        fetchData() {
            this.$store.dispatch(FETCH_KRAKEN_PAIRS)
            this.$store.dispatch(FETCH_BITFINEX_PAIRS)
            this.$store.dispatch(FETCH_BINANCE_PAIRS)
            this.$store.dispatch(FETCH_HITBTC_PAIRS)
            this.$store.dispatch(FETCH_OKEX_PAIRS)
        },
        /**
         * Method to store opportunities data in vuex
         */
        storeOpportunities() {
            this.$store.dispatch(ACT_STORE_ARB_OPPORTUNITIES, this.opportunities)
        }
    },
    mounted() {
        /**
         * Start fetching API's data
         */
        this.fetchData()
        this.apiInterval = setInterval(() => {this.fetchData()}, EXH_INTERVAL_TIMEOUT)

        /**
         * gather all possible operations
         */
        this.calculateOpportunities()
        this.arbInterval = setInterval(() => {this.calculateOpportunities()}, CALC_INTERVAL_CHECK)
        

    },
    beforeDestroy() {
        //stop data fetching in page change
        clearInterval(this.apiInterval)
        this.apiInterval = null
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-possibnle-operations h2{
    margin-top: 50px
}
.all-opp-table {
    margin-top: 20px;
    margin-bottom: 50px;
}
table caption{
    caption-side: top
}
</style>
