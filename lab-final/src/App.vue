<template>
  <div id="app" class="container flexContainer flexColumn">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      eventsTypes: null,
      events: null
    }
  },
  created () {

  }
}

</script>

<style lang="scss">
@import '@/scss/app.scss';

</style>
