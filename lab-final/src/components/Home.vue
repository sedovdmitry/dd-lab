<template>
  <div class="container">
    <Header />
    <div class="wrapper">
      <Aside />
      <div class="main wrap">
        <div class="flexContainer flexAutoHeight mobileContainer ">
          <TodayEvents v-bind={eventsToday}  />
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
      .then(() => {
        this.api.getEvents()
          .then(({ data }) => {
            const rightNow = new Date()
            const today = rightNow.toISOString().slice(0, 10)
            const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10)

            const newData = data.map(item => {
              const eventName = this.eventsTypes.find(etype => etype.id === item.event.type)
              item.event.name = eventName.name
              return item
            })

            this.eventsToday = newData.filter(item =>
              today === item.event.date.slice(0, 10))

            this.eventsTomorrow = newData.filter(item =>
              tomorrow === item.event.date.slice(0, 10)
            )
          })
      })
  }
}
</script>
<style lang="scss" scoped>

</style>
