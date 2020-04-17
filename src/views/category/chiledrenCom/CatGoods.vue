<template>
  <div class="content">
    <tab-control :titles="titles" @tabClick="tabClick" class="tabcontrol" ref="tabControl"/>
    <b-scroll ref="scroll" class="goods" @pullingUp="loadMore">
      <goods-list :goodsList='goodsList'/>
    </b-scroll>
  </div>
</template>
<script>
import BScroll from "components/common/scroll/BScroll";
import TabControl from "components/content/tabControl/TabControl";

import GoodsList from "components/content/goods/GoodsList";


export default {
  name: "CatGoods",
  components: {
    BScroll,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      titles: ["综合", "新品", "销量"],
    };
  },
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    tabClick(index) {
      this.$emit('tabClick',index)
      this.$refs.scroll.toPosition(0,0,0)
    },
    loadMore() {},
  },
};
</script>
<style scoped>
.content {
  position: fixed;
  left: 120px;
  right: 0;
  top: 44px;
  bottom: 49px;
}
.goods {
  position: fixed;
  left: 120px;
  top: 88px;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.tabcontrol {
  margin-bottom: 6px;
}
</style>
