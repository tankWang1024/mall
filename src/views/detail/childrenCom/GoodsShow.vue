<template>
  <div v-if="imgList">
    <img v-for="(item,index) in imgList" :key="index+'goodsShow'" :src="item" alt="">
  </div>
</template>
<script>
export default {
  name:'GoodsShow',
  props:{
    imgList:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>
<style scoped>
img{
  width: 96%;
}
</style>