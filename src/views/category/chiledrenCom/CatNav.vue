<template>
  <navbar class="navbar">
    <template v-slot:center>
      商品分类
    </template>
  </navbar>
</template>
<script>
import Navbar from 'components/common/navbar/Navbar'

export default {
  name:"CatNav",
  components:{
    Navbar
  }
}
</script>
<style scoped>
.navbar{
  background-color: var(--banner-color);
  color: white;
}
</style>