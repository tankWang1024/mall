<template>
  <div v-if="imgList" class="goodsShow">
    <img
      v-for="(item, index) in imgList"
      :key="index + 'goodsShow'"
      v-lazy="item"
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
      this.$emit("goodsShowLoad");
    }
  }
};
</script>
<style scoped>
.goodsShow {
  width: 96%;
  margin: 0 auto;
}
img {
  width: 100%;
}
</style>
