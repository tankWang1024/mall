<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'Tabbar'
};
</script>

<style scoped>
#tabbar {
  display: flex;
  background-color: #eeecec;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -3px 2px rgba(193, 193, 193, 0.3);
   height: 49px;
}
</style>
