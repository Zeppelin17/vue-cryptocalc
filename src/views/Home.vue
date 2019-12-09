<template>
  <div class="home">
    <KrakenPairs/>
    <BitfinexPairs/>
    <BinancePairs/>
    <HitbtcPairs/>
  </div>
</template>

<script>
// @ is an alias to /src
import KrakenPairs from '@/components/exchanges/KrakenPairs'
import BitfinexPairs from '@/components/exchanges/BitfinexPairs'
import BinancePairs from '@/components/exchanges/BinancePairs'
import HitbtcPairs from '@/components/exchanges/HitbtcPairs'

export default {
  name: 'home',
  components: {
    KrakenPairs,
    BitfinexPairs,
    BinancePairs,
    HitbtcPairs,
  }
}
</script>
