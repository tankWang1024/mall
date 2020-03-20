<template>
  <div v-if="imgList">
    <img
      v-for="(item, index) in imgList"
      :key="index + 'goodsShow'"
      :src="item"
      @load="imgLoad"
    />
  </div>
</template>
<script>
export default {
  name: "GoodsShow",
  props: {
    imgList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    imgLoad() {
      if (++this.currentIndex == this.imgList.length) {
        this.$emit("goodsShowLoad");
      }
    }
  }
};
</script>
<style scoped>
img {
  width: 96%;
}
</style>
