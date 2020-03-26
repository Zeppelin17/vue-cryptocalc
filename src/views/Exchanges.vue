<script>
/**
 * View showing exchanges pairs info
 *
 * @summary View showing exchanges pairs info
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:40:05 
 * Last modified  : 2020-03-26 06:46:07
 */
</script>
<template>
  <div class="exchanges-resume">
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
  name: 'exchanges',
  components: {
    Exchange
  }
}

</script>

