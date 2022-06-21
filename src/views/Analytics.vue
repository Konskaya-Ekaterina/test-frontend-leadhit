<template>
  <div class="analytics">
  <h1 class="analytics__title">Аналитика</h1>
    <analytic-chart/>
  </div>
</template>

<script>
import AnalyticChart from "@/components/AnalyticChart";

export default {
  name: 'Analytics',
  components: {
    AnalyticChart
  },
}
</script>

<style lang="scss" scoped>

.analytics__title {
  margin-bottom: 50px;
  text-align: center;
}

</style>
