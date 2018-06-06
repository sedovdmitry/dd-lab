<template>
  <div class="container">
    <Header />
    <div class="wrapper">
      <Aside />
      <div class="main wrap">
        <div class="flexContainer flexAutoHeight mobileContainer ">
          <TodayEvents />
          <TomorrowEvents />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'

export default {
  name: 'All',
  components: {
    Header,
    Aside
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
