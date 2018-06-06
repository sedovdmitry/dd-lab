<template>
  <div class="container">
    <Header />
    <div class="wrapper">
      <Aside />
      <div class="main wrap">
        <div class="flexContainer flexAutoHeight mobileContainer ">
          <TodayEvents v-bind={eventsToday} />
          <TomorrowEvents v-bind={eventsTomorrow} />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Aside from '@/components/Aside'
import TodayEvents from '@/components/TodayEvents'
import TomorrowEvents from '@/components/TomorrowEvents'

export default {
  name: 'Home',
  components: {
    Header,
    Aside,
    TodayEvents,
    TomorrowEvents
  },
  data () {
    return {
      eventsTypes: [],
      eventsTomorrow: [],
      eventsToday: []
    }
  },
  created () {
    // Пример вызова api метода из компонента
    this.api.getEventsTypes()
      .then(({ data }) => {
        console.log('Fetched data from API:')
        this.eventsTypes = data
      })
    this.api.getEvents()
      .then(({ data }) => {
        const startDay = new Date().setHours(0, 0, 0, 0)
        const endDay = new Date().setHours(23, 59, 59, 999)
        this.eventsTomorrow = data.filter(item =>
          Date.parse(item.event.date) > endDay)
        this.eventsToday = data.filter(item =>
          Date.parse(item.event.date) >= startDay &&
          Date.parse(item.event.date) <= endDay)
      })
  }
}
</script>
<style lang="scss" scoped>

</style>
