<template>
  <div class="home">
    <KrakenPairs/>
    <BitfinexPairs/>
  </div>
</template>

<script>
// @ is an alias to /src
import KrakenPairs from '@/components/exchanges/KrakenPairs'
import BitfinexPairs from '@/components/exchanges/BitfinexPairs'

export default {
  name: 'home',
  components: {
    KrakenPairs,
    BitfinexPairs,
  }
}
</script>
