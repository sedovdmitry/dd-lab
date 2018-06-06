<template>
  <div class="grid flexItem2">
      <div v-for="data in eventsToday" :key="data.id" class="submain whiteBackground flexColumn flexItem marginRight">
        <div class="flexItem blockContent">
          <div class="flexContainer">
            <span class="flexItem flexStart"><h3>{{data.event.type}}</h3></span>
            <span class="flexItem flexEnd deleteEvent"></span>
          </div>
          <div class="flex-center">
            <div class="row">
              <div class="flex-item-center">{{data.event.time}}</div>
              <div class="flex-item-center">{{data.event.date.replace( /(\d{4})-(\d{2})-(\d{2}).*/, "$3.$2.$1")}}</div>
            </div>
          </div>
          <footer class="blockFooter ">
                    <div class="flexItem">
                      <img :src="data.person.image" width="50px" height="50px" />
                    </div>
                    <ul class="list flexItem2">
                      <li>{{data.person.name}}</li>
                      <li>{{data.person.job}}</li>
                    </ul>
          </footer>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'TodayEvents',
  data () {
    return {
      countEvents: 16
    }
  },
  props: {
    eventsToday: {
      type: Array,
      required: true,
      default: function () {}
    }
  }
}
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
}
.flex-item {
  display: flex;
}
.flex-item img {
  flex-direction: row;
}
.list {
  list-style: none;
}
.deleteEvent {
  text-align: right;
  &::before {
    content: "\2716";
  }
}
.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
}
.row {
  width: auto;
}
.flex-item-center {
    margin: 5px;
    text-align: center;
}
</style>
