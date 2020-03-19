<template>
  <navbar>
    <template v-slot:left>
      <div class="back" @click="backClick">
        <img src="~assets/img/detail/back.svg" alt="">
      </div>
    </template>
    <template v-slot:center>
      <tab-control :titles="titles" />
    </template>
  </navbar>
</template>
<script>
import Navbar from "components/common/navbar/Navbar";
import TabControl from "components/content/tabControl/TabControl";
export default {
  name: "DetailNavbar",
  components: {
    Navbar,
    TabControl
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"]
    };
  },
  methods: {
    backClick(){
      this.$router.back()
    }
  },
};
</script>
<style scoped>
.back{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back img{
  width: 20px;
  height: 20px;
}
</style>
