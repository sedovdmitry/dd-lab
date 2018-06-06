<template>
  <h1 class="headerMobile marginBottom">Сегодня мероприятий {{countEvents}}</h1>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      countEvents: 16
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
