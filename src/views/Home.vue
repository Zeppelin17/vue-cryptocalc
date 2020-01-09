<template>
  <div class="home">
    <KrakenPairs/>
    <BitfinexPairs/>
    <BinancePairs/>
    <HitbtcPairs/>
    <OkexPairs/>
  </div>
</template>

<script>
// @ is an alias to /src
import KrakenPairs from '@/components/exchanges/KrakenPairs'
import BitfinexPairs from '@/components/exchanges/BitfinexPairs'
import BinancePairs from '@/components/exchanges/BinancePairs'
import HitbtcPairs from '@/components/exchanges/HitbtcPairs'
import OkexPairs from '@/components/exchanges/OkexPairs'

export default {
  name: 'home',
  components: {
    KrakenPairs,
    BitfinexPairs,
    BinancePairs,
    HitbtcPairs,
    OkexPairs,
  }
}

</script>

