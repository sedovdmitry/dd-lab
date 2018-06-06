<template>
  <div class="aside-1">
    <div class="flexItem asideBlock marginBottom">
      <div class="blockContent">
        <router-link to="/" class="link">Актуальные</router-link>
      </div>
    </div>
    <div class="flexItem asideBlock">
      <div class="blockContent">
        <router-link to="/all" class="link">Все мероприятия</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Aside',
  data () {
    return {
      countEvents: 16
    }
  }
}
</script>
<style lang="scss" scoped>
  .link {
    margin: 10px;
    padding: 10px;
    margin-bottom: 15px;
  }
</style>
