<script>
/**
 * View showing the calculator
 *
 * @summary View showing the calculator
 * @author Zeppelin17 <elzeppelin17@gmail.com>
 *
 * Created at     : 2020-03-26 06:40:05 
 * Last modified  : 2020-03-26 06:41:32
 */
</script>
<template>
  <div class="calculator">
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

<style scoped>
  .calculator {
    margin-top: 20px;
  }

</style>