<template>
  <div class="index">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/MainTabbar'
export default {
  name:'Index',
  components: {
    MainTabbar
  }
};
</script>

<style scoped>
.index{
  height: 100%;
}
</style>
