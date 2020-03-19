<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "BScroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    let scroll = new BScroll(this.$refs.wrapper, {
      // 注意挂载的元素中，子节点只能有一个才生效
      probeType: this.probeType, // 实时监听滚动
      pullUpLoad: this.pullUpLoad, // 下拉加载事件,注意：开启后会实时派发scroll事件，相当于probeType=3
      click: true //默认为false，会阻止浏览器的点击事件
    });
    this.scroll = scroll;
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        this.$emit("contentScroll", position);
      });
    }
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        // 每次pullingup后都要执行，下次才能也触发上拉加载
        // console.log("滚到底部了");
        this.scroll.finishPullUp()
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    toPosition(x, y, time = 400) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll.refresh();
    }
  }
};
</script>
<style scoped></style>
