import { debounce } from "common/utils";

export const imgLoadListenerMixin = {
  data() {
    return {
      imgLoadListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50); // 一直执行debounce返回的函数
    this.imgLoadListener = () => {
      refresh();
    }
    this.$bus.$on("imgLoad", this.imgLoadListener);
    console.log('我是mixin中的mounted')
  },
  deactivated() {
    this.$bus.$off("imgLoad", this.imgLoadListener);
  },
  destroyed() {
    this.$bus.$off("imgLoad", this.imgLoadListener);
  },
}

export const backTop = {
  data(){
    return {
      backUpShow: false,
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.toPosition(0, 0);
    },
  },
}