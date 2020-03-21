<template>
  <div id="detail" v-if="update">
    <detail-navbar class="navbar" />
    <b-scroll class="scroll-wrapper" ref="scroll">
      <detail-swiper :detailBanner="banner" class="swiper" />
      <detail-info :info="info" />
      <goods-show :imgList="imgList" @goodsShowLoad="goodsShowLoad"/>
      <goods-desc :goodsDesc="goodsDesc"/>
      <goods-comment :goodsComment="goodsComment" :id="id"/>
    </b-scroll>
  </div>
</template>
<script>
import BScroll from "components/common/scroll/BScroll";

import DetailNavbar from "./childrenCom/DetailNavbar";
import DetailSwiper from "./childrenCom/DetailSwiper";
import DetailInfo from "./childrenCom/DetailInfo";
import GoodsShow from './childrenCom/GoodsShow';
import GoodsDesc from './childrenCom/GoodsDesc';
import GoodsComment from './childrenCom/GoodsComment'

import { getDetail } from "network/detail";

export default {
  name: "Detail",
  components: {
    BScroll,
    DetailNavbar,
    DetailSwiper,
    DetailInfo,
    GoodsShow,
    GoodsDesc,
    GoodsComment
  },
  data() {
    return {
      id: null,
      banner: [],
      info: {},
      update: true,
      imgList:[],
      goodsDesc:{},
      goodsComment:{},
    };
  },
  mounted() {
    // console.log(this.$route.params.id)
    // this.id = this.$route.params.id
    //--------没数据，固定展示一个商品
    this.id = "pop1";
    getDetail(this.id).then(res => {
      console.log(res);
      if (res.status == 200) {
        this.banner = res.data.banner;
        this.info = res.data.info;
        this.imgList = res.data.imgList
        this.goodsDesc = res.data.goodsDesc
        this.goodsComment = res.data.comments
      }
    });
  },
  methods: {
    goodsShowLoad(){
      this.$refs.scroll.refresh()
    }
  },
};
</script>
<style scoped>
#detail {
  height: 100%;
  position: relative;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
}
.scroll-wrapper {
  position: absolute;
  top: var(--top_nav_height);
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>
