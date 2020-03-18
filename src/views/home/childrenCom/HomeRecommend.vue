<template>
  <div id="home-commend">
    <div v-for="item in homeRecommend" :key="item.image" class="commond-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name:'HomeRecommend',
  props:{
    homeRecommend:{
      type:Array,
      default(){
        return []
      }
    }
  },
}
</script>
<style scoped>
#home-commend{
  width: 100%;
  display: flex;
  margin: 10px 0 20px 0;
  text-align: center;
}
.commond-item{
  flex: 1;
}
.commond-item img{
  width: 65px;
  height: 65px;
}
</style>