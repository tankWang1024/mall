<template>
  <div class="goods-list">
    <goods-item v-for="item in goodsList" :key="item.id" :goods-item='item'></goods-item>
  </div>
</template>
<script>
import GoodsItem from './GoodsItem'
export default {
  name:'GoodsList',
  components:{
    GoodsItem
  },
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
}
</style>