<template>
  <b-scroll class="main">
    <div
      class="item"
      v-for="(item, index) in category"
      :key="index"
      :class="{ asideActive: index == asideIndex }"
      @click="asideClick(index)"
    >
      {{ item }}
    </div>
  </b-scroll>
</template>
<script>
import BScroll from "components/common/scroll/BScroll";

import { getGoods } from "network/category";

export default {
  name: "CatAside",
  components: {
    BScroll,
  },
  data() {
    return {
      category: [
        '正在流行',
        "上衣",
        "裤子",
        "裙子",
        "套装",
        "内衣",
        "女鞋",
        "男友",
        "包包",
        "运动",
        "配饰",
        "美妆",
        "个护",
        "家居",
        "母婴",
        "车品",
        "进口"
      ],
      asideIndex: 0,
    };
  },
  mounted() {
  },
  methods: {
    asideClick(index){
      this.asideIndex = index
      this.$emit('asideClick',index)
    }
  },
};
</script>
<style scoped>
.main {
  width: 120px;
  position: fixed;
  left: 0;
  top: 44px;
  bottom: 49px;
  background-color: #eeeeee;
}
.item {
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.asideActive {
  border-left: 4px solid var(--banner-color);
  background-color: white;
  color: var(--base-color);
}
</style>
