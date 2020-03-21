<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from 'views/index';
export default {
  name: "App",
  components: {
    index,
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
