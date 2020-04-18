<template>
  <div>
    <div v-for="(item,index) in listArr" :key="index" class="item">
      <img :src="item.imgUrl" alt="" >
     <span>{{item.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:"ListCom",
  props:{
    listArr:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
.item{
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.item > img{
  width: 24px;
  height: 24px;
  margin: 0 10px 0 18px;
}
.item > span{
  flex: 1;
  border-bottom: 1px solid #eeeeee;
}
</style>