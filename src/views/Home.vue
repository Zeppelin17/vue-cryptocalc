<template>
  <div class="home">
    <KrakenPairs/>
  </div>
</template>

<script>
// @ is an alias to /src
import KrakenPairs from '@/components/exchanges/KrakenPairs'

export default {
  name: 'home',
  components: {
    KrakenPairs
  }
}
</script>
