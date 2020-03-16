<template>
  <div id="home">
    <navbar class="home-navbar">
      <template v-slot:center>
        购物街
      </template>
    </navbar>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";
import homeSwiper from 'views/home/childrenCom/HomeSwiper'
export default {
  components: {
    navbar,
    homeSwiper,
  },
  data() {
    return {

    };
  },
  created() {
   
  },
  name:'Home',
};
</script>

<style scoped>
.home-navbar {
  background-color: #ed5485;
  color: white;
}
</style>
