<template>
  <div class="index">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name:'Index',
  mounted() {
    throw 'log'
  },
};
</script>

<style scoped>
.index{
  height: 100%;
}
</style>
