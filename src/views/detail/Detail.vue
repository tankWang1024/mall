<template>
  <div id="detail" v-if="update">
    <detail-navbar class="navbar" @tabClick="tabClick" ref="detailNav" />
    <b-scroll
      class="scroll-wrapper"
      ref="scroll"
      @contentScroll="contentSCroll"
      :probe-type="3"
      :pull-up-load="false"
    >
      <detail-swiper :detailBanner="banner" class="swiper" @imgLoad="imgLoad" />
      <detail-info :info="info" />
      <goods-show :imgList="imgList" @goodsShowLoad="goodsShowLoad" />
      <goods-desc ref="desc" :goodsDesc="goodsDesc" />
      <goods-comment ref="comment" :goodsComment="goodsComment" :id="id" />
      <div class="title" ref="recommend">商品推荐</div>
      <goods-list :goodsList="recommend" class="goodslist" />
    </b-scroll>
    <back-top @click.native="backTop" v-show="backUpShow" />
    <detail-bottom-bar class="detail-bottom-bar" @addCart="addCart" />
  </div>
</template>
<script>
import BScroll from "components/common/scroll/BScroll";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import DetailNavbar from "./childrenCom/DetailNavbar";
import DetailSwiper from "./childrenCom/DetailSwiper";
import DetailInfo from "./childrenCom/DetailInfo";
import GoodsShow from "./childrenCom/GoodsShow";
import GoodsDesc from "./childrenCom/GoodsDesc";
import GoodsComment from "./childrenCom/GoodsComment";
import DetailBottomBar from "./childrenCom/DetailBottomBar";

import { getDetail, getRecommend } from "network/detail";

import { imgLoadListenerMixin, backTop } from "common/mixin";

export default {
  name: "Detail",
  components: {
    BScroll,
    DetailNavbar,
    DetailSwiper,
    DetailInfo,
    GoodsShow,
    GoodsDesc,
    GoodsComment,
    DetailBottomBar,
    GoodsList,
    BackTop
  },
  data() {
    return {
      id: null,
      banner: [],
      info: {},
      update: true,
      imgList: [],
      goodsDesc: {},
      goodsComment: {},
      recommend: [],
      componentY: [],
      currentIndex: 0
    };
  },
  mixins: [imgLoadListenerMixin, backTop],
  created() {
    // this.id = this.$route.params.id
    //--------没数据，固定展示一个商品
    this.id = "pop1";
    getDetail(this.id).then(res => {
      console.log(res);
      if (res.status == 200) {
        this.banner = res.data.banner;
        this.info = res.data.info;
        this.imgList = res.data.imgList;
        this.goodsDesc = res.data.goodsDesc;
        this.goodsComment = res.data.comments;
      }
    });
    getRecommend().then(res => {
      this.recommend = res.data.list;
    });
  },
  mounted() {},
  methods: {
    goodsShowLoad() {
      this.$refs.scroll.refresh();
      this.componentY = [];
      this.componentY.push(0);
      this.componentY.push(this.$refs.desc.$el.offsetTop);
      this.componentY.push(this.$refs.comment.$el.offsetTop);
      this.componentY.push(this.$refs.recommend.offsetTop);
      console.log(this.componentY);
    },
    contentSCroll(position) {
      this.backUpShow = -position.y > 340;
      let index = this.getIndex(-position.y);
      if (index != this.currentIndex) {
        this.currentIndex = index;
        this.$refs.detailNav.$refs.tabControl.currentIndex = this.getIndex(
          -position.y
        );
      }
    },
    tabClick(index) {
      this.$refs.scroll.toPosition(0, -this.componentY[index], 100);
    },
    imgLoad() {
      this.$refs.scroll.refresh();
      console.log(-this.$refs.scroll.scroll.y);
      
      this.currentIndex = this.getIndex(-this.$refs.scroll.scroll.y)
    },
    addCart() {
      // 加购商品所需字段
      let production = {};
      production.id = this.$route.params.id;
      production.title = this.info.title;
      production.img = this.imgList[0];
      production.price = this.info.price;
      production.desc = this.info.desc;
      production.count = 1;
      production.checked = false;
      this.$store.dispatch("addCart", production).then(res => {
        this.$toast.show(res);
      });
    },
    getIndex(y) {
      //-----------------------------------------------滚动高度获取有问题
      if (y < this.componentY[1]) {
        return 0;
      } else if (y >= this.componentY[1] && y < this.componentY[2]) {
        return 1;
      } else if (y >= this.componentY[2] && y < this.componentY[3]) {
        return 2;
      } else {
        return 3;
      }
    }
  }
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
.title {
  font-size: 18px;
  width: 96%;
  margin: 8px auto;
  padding: 10px 0;
  border-bottom: 1px solid #dedede;
}
.goodslist {
  padding-bottom: 20px;
}
.detail-bottom-bar {
  width: 100%;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}
</style>
