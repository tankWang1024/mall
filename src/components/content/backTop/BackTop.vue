<template>
  <div class="back-top">
    <img src="~assets/img/common/top.svg" alt="">
  </div>
</template>
<script>
export default {
  name:'BackTop'
}
</script>
<style scoped>
.back-top{
  position: fixed;
  right: 8px;
  bottom: 56px;
  background-color: #fff;
  opacity: .5;
}
.back-top img{
  width: 32px;
  height: 32px;
}
</style>