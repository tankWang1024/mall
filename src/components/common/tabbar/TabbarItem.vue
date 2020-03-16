<template>
  <div class="tabbar-item" @click="itemClick" :path="path" :activeColor="activeColor">
    <img :src="itemImgsrcActive" alt="" v-if="isActive" />
    <img :src="itemImgsrc" alt="" v-else />
    <div :style="activeStyle">{{ itemText }}</div>
  </div>
</template>
<script>
export default {
  name:'TabbarItem',
  props: {
    path: {
      type: String
    },
    itemImgsrc: {
      type: String
    },
    itemText: {
      type: String
    },
    itemImgsrcActive: {
      type: String
    },
    activeColor:{
      type:String,
      default:'rgb(212, 35, 122)'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin: 3px 0 2px 0;
  vertical-align: middle;
}
</style>
