<template>
  <div class="about">
    <h1>Arbitrage calculator</h1>
    <OpportunitiesList/>
  </div>
</template>

<script>
import OpportunitiesList from '@/components/calculator/OpportunitiesList'
export default {
  name: 'calculator',
  components: {
    OpportunitiesList
  }
}
</script>