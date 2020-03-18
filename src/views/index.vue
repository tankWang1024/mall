<template>
  <div>
    <router-view></router-view>
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

<style scoped></style>
