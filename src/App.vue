<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import index from 'views/index';
import mockNetwork from "network/mock.js";
export default {
  name: "App",
  components: {
    index,
  },
};
</script>

<style>
@import url("~assets/css/normalize.css");
@import url("~assets/css/base.css");
html,body{
  height: 100%;
  font-size: 16px;
  touch-action: none;
}
#app{
  height: 100%;
}
</style>
