<template>
  <div class="home">
    <KrakenPairs/>
    <BitfinexPairs/>
    <BinancePairs/>
  </div>
</template>

<script>
// @ is an alias to /src
import KrakenPairs from '@/components/exchanges/KrakenPairs'
import BitfinexPairs from '@/components/exchanges/BitfinexPairs'
import BinancePairs from '@/components/exchanges/BinancePairs'

export default {
  name: 'home',
  components: {
    KrakenPairs,
    BitfinexPairs,
    BinancePairs,
  }
}
</script>
