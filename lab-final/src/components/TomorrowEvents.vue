<template>
  <div class="flexItem">
    <div class="sub-aside flexColumn flexItem">
        <div class="whiteBackground marginBottom-15">
            <div class="blockContent">
                <h3>Hello World</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <footer class="blockFooter ">
                    <span class="flexItem flexStart">Jhon Doe</span>
                    <span class="blockFooter__comments flexItem flexEnd">42 comments</span>
                </footer>
            </div>
        </div>

        <div class="whiteBackground marginBottom-15 blockContent">
            <h3>Hello World</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <footer class="blockFooter ">
                <span class="flexItem flexStart">Jhon Doe</span>
                <span class="blockFooter__comments flexItem flexEnd">42 comments</span>
            </footer>
        </div>

        <div class="whiteBackground marginBottom-15 blockContent">
            <h3>Hello World</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <footer class="blockFooter ">
              <div class="flexItem ">
                <div class="flex-container">
                  <div class="flex-item">
                    <img src="https://robohash.org/quaspariaturquam.png?size=50x50&set=set1">
                    <ul class="list">
                      <li>Text fields will go here</li>
                      <li>Text fields will go here</li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TomorrowEvents',
  data () {
    return {
      countEvents: 16
    }
  }
}
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-direction: row;
  align-items: left;
  flex-wrap: wrap;
}
.flex-item {
  display: flex;
}
.flex-item img{
  flex-direction: row;
}
.list {
  list-style: none;
}
</style>
