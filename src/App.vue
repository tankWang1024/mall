<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/Tabbar";
import tabbarItem from 'components/common/tabbar/TabbarItem'
import index from 'views/index';
export default {
  name: "App",
  components: {
    index,
    tabbar,
    tabbarItem
  }
};
</script>

<style>
@import url("~assets/css/normalize.css");
@import url("~assets/css/base.css");
html,body{
  height: 100%;
}
#app{
  height: 100%;
}
</style>
