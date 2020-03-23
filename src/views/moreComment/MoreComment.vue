<template>
  <div>
    <div class="back" @click="backClick">
        <img src="~assets/img/detail/back.svg" alt="">
      </div>
    <h1>写假数据好慢啊，</h1>
    <h1>不写了。</h1>
  </div>
</template>
<script>
export default {
  name: "MoreComment",
  methods: {
    backClick(){
      this.$router.back()
    }
  },
};
</script>
<style scoped>

</style>
