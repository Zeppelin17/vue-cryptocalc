<template>
  <div id="component-wrapper">
    <div id="heroimage">
      <h1 
        data-aos="fade-down"
        data-aos-duration="500"
        data-aos-delay="150"
        data-aos-mirror="true"
        data-aos-once="false"
      >Arbitrage Calculator</h1>
    </div>
    <div class="home container-fluid">
      <div class="row intro">
        <div 
          class="col-sm-12 section"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="150"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>Introduction</h2>
          <p>This is a calculator that let's you <strong>discover some arbitrage opportunities</strong> between different pairs of 
            crypto currencies. You can set some parameters to find only the opportunities you want and discard the one's that 
            are not interesting.</p>
        </div>
      </div>
      <div class="row arb">
        <div 
          class="col-sm-12 col-md-8 section"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="150"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>What is arbitrage?</h2>
          <p>Basically it's buying a security in one market and simultaneously selling it in another
            market at a higher price. Find out more <a href="https://en.wikipedia.org/wiki/Arbitrage" title="Definition of arbitrage">here</a>.</p> 
          <p>In this case, you play with pairs of crypto currencies buying/selling them in different <a href="https://en.wikipedia.org/wiki/Cryptocurrency_exchange" title="Definition of Cryptocurrency Exchange">Exchanges</a>.</p>
          
        </div>
        <div 
          class="d-none d-md-block col-md-4 section picture"
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <font-awesome-icon :icon="['fas', 'exchange-alt']" size="6x"/>
        </div>


        <div 
          class="d-none d-md-block col-md-4 section picture"
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <font-awesome-icon :icon="['fas', 'comments-dollar']" size="6x"/>
        </div>
        <div 
          class="col-sm-12 col-md-8 section"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="150"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>An example</h2>
          <p>Imagine you want to play with pair BTC-USD. This means that if you
            run bid operations (buy), you are buying BTC with USD. On the other hand, if you run ask
            operations (sell), you are selling BTC earning USD.</p>
          <p>In other words, you buy/sell the left side of the pair (BTC) using the currency in the right side (USD).</p>

          <p>Then, you see that buying price in Binance exchange is 6000 while at the same time, 
            selling price in Kraken exchange is 6500.</p>
          <p>If you simultaneously buy 1 BTC in Binance and sell it in Kraken, you get 500 USD of profit. 
            Of course, you don't need to spend 6000 USD, you can play with lower quantities. This is what is 
            called "lots". You can just buy/sell 0,033 BTC (which cost is 200 USD) and sell it for 214,5 USD</p>
          <p>In this case we're using the amount 200 as a lot parameter. <strong>If you repeat this operation some times, you get an interesting profit</strong>.</p>
        </div>


        <div 
          class="col-sm-12 col-md-8 section"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="150"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>Take advantage of the market</h2>
          <p>The thing is that the value of every crypto currency is very volatile, it might change from
            one second to another. This is why automation is a key factor to get real profits: you run 
            multiple buy/sell operations in a short lapse of time taking advantage of <a href="https://cointobuy.io/cryptocurrency-investing-tips-and-guide/why-does-the-price-of-crypto-vary-between-exchanges" title="Why Does the Price of Crypto Vary Between Exchanges?">price differences
            between different exchanges</a>.</p>
        </div>
        <div 
          class="d-none d-md-block col-md-4 section picture"
          data-aos="flip-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <font-awesome-icon :icon="['fas', 'balance-scale-left']" size="6x"/>
        </div>
      </div>
      
      <div class="row whatcanido">
        
        <div 
          class="col-sm-12 section"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="150"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <h2>What can I do?</h2>
          <p>You can run simulations of arbitrage operations. <strong>Do not expect to earn any money with this calculator</strong>,
            it's only a tool to help you make an idea of the kind of operations you could do in real world.</p>
          
          <p>You just have to set some parameters. For each pair that you are interested in, you need
            to indicate the lots that you want to play with, the minimum profit that you want and a fee
            percentage simulating the costs of exchange operations.</p>
          
          <p>After that, you just push the start button and the calculator will find real operations that
            might be profitable in a non simulated environment.</p>
        </div>
      </div>
    </div>
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

export default {
  // AOS (Animate On Scroll) Docs: https://github.com/michalsnik/aos#animations
  name: 'home',
  mounted() {
    // we fetch all the data right now, so when the user goes to another page it already has some initial data to update
    this.$store.dispatch(FETCH_KRAKEN_PAIRS)
    this.$store.dispatch(FETCH_BITFINEX_PAIRS)
    this.$store.dispatch(FETCH_BINANCE_PAIRS)
    this.$store.dispatch(FETCH_HITBTC_PAIRS)
    this.$store.dispatch(FETCH_OKEX_PAIRS)
  }
}

</script>

<style scoped>
  #component-wrapper p{
    text-align: justify;
  }
  a {
    color: #343a40;
    background-color: #ffd447;
    padding: 0 7px;
    border-top: 3px solid #d1ae3b;
  }
  a:hover {
    background-color: #d1ae3b;
    border-color: #ffd447;
    text-decoration: none;
    color: #343a40;
    -webkit-transition: all 200ms linear;
    -moz-transition: all 200ms linear;
    -ms-transition: all 200ms linear;
    -o-transition: all 200ms linear;
    transition: all 200ms linear;
  }
  h1 {
    color: #fff;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    border-top: 4px solid #161616
  }
  #heroimage {
    background: url("../assets/btc-background.jpg") center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
  }
  .row {
    border-left: 15px solid;
    padding: 0 20px
  }
  .row.intro {
    border-color: #5efc8d;
  }
  .row.arb {
    border-color: #4dcf74;
  }
  .row.whatcanido {
    border-color: #3ca15a;
  }
  .section {
    padding: 50px 15px;
    color: #343a40;
  }
  .section.picture {
    border: none;
    display: flex;
    align-items: stretch;
    
    align-self: center;
  }
  
</style>
