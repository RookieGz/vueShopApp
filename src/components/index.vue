<template>
  <div class="hello">
    <mt-tabbar v-model="selected" fixed >
      <mt-tab-item id="shop">
        <img slot="icon" src="../assets/shop.png">
        商城
      </mt-tab-item>
      <mt-tab-item id="news">
        <img slot="icon" src="../assets/news.png">
        咨询
      </mt-tab-item>
      <mt-tab-item id="car">
        <img slot="icon" src="../assets/car.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="people">
        <img slot="icon" src="../assets/people.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <!-- 每页内容 -->
    <mt-tab-container class="page-tabbar-container box" v-model="selected">
        <mt-tab-container-item id="shop">
          <shop></shop>
        </mt-tab-container-item>
        <mt-tab-container-item id="news">
          <news></news>
        </mt-tab-container-item>
        <mt-tab-container-item id="car">
          <car v-on:chuan="ch"></car>
        </mt-tab-container-item>
        <mt-tab-container-item id="people">
            <people></people>
        </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import shop from './second/shop'
import news from './second/news'
import car from './second/car'
import people from './second/people'
export default {
  name: 'HelloWorld',
  data () {
    return {
      selected:"shop"
    }
  },
  components:{
    shop:shop,
    news:news,
    car:car,
    people:people
  },
  methods:{
    ch:function(g){
      this.selected = g
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  padding-bottom: 50px;
}
</style>
