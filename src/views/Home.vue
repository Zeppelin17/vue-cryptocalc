<template>
  <div class="home">
    <Exchange
      exchangeName="Kraken"
      logo="logo-kraken.png"
      storeModuleName="krakenPairs">
    </Exchange>

    <Exchange
      exchangeName="Bitfinex"
      logo="logo-bitfinex.png"
      storeModuleName="bitfinexPairs">
    </Exchange>

    <Exchange
      exchangeName="Binance"
      logo="logo-binance.png"
      storeModuleName="binancePairs">
    </Exchange>

    <Exchange
      exchangeName="Hitbtc"
      logo="logo-hitbtc.png"
      storeModuleName="hitbtcPairs">
    </Exchange>

    <Exchange
      exchangeName="Okex"
      logo="logo-okex.png"
      storeModuleName="okexPairs">
    </Exchange>
  </div>
</template>

<script>
// @ is an alias to /src
import Exchange from '@/components/exchanges/Exchange'


export default {
  name: 'home',
  components: {
    Exchange
  }
}

</script>

