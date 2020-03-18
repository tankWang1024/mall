<template>
  <div id="home">
    <navbar class="home-navbar">
      <template v-slot:center>
        购物街
      </template>
    </navbar>
    <b-scroll
      class="scroll-wrapper"
      ref="scroll"
      @contentScroll="contentSCroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <template v-slot:default>
        <home-swiper :home-swiper="banner"></home-swiper>
        <home-recommend
          :home-recommend="recommend"
          class="home-recommend"
        ></home-recommend>
        <Home-feature></Home-feature>
        <tab-control
          :titles="['流行', '新款', '精选']"
          class="tab-control"
          @tabClick="tabClick"
        ></tab-control>
        <goods-list :goodsList="showgoods"></goods-list>
      </template>
    </b-scroll>
    <back-top @click.native="backTop" v-show="backUpShow" />
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";
import TabControl from "components/content/tabControl/TabControl";
import BScroll from "components/common/scroll/BScroll";

import homeSwiper from "views/home/childrenCom/HomeSwiper";
import HomeRecommend from "./childrenCom/HomeRecommend";
import HomeFeature from "./childrenCom/FeatureView";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

import mockNetwork from "network/mock.js";
export default {
  name: "Home",
  components: {
    navbar,
    TabControl,
    BScroll,
    homeSwiper,
    HomeRecommend,
    HomeFeature,
    GoodsList,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: {
          page: 1,
          list: []
        },
        new: {
          page: 1,
          list: []
        },
        sell: {
          page: 1,
          list: []
        }
      },
      currentType: "pop",
      backUpShow: false
    };
  },
  mounted() {
    //请求数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showgoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    //------事件监听----------
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backTop() {
      this.$refs.scroll.toPosition(0, 0);
    },
    contentSCroll(position) {
      // console.log(position);
      this.backUpShow = -position.y > 340;
    },
    loadMore() {
      // =================todo: 确定图片加载后再执行后面
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
      this.$refs.scroll.scroll.refresh();
    },

    //------网络请求-----------
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        if (res.data.success) {
          this.banner = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list;
        }
      });
    },
    getHomeGoods(type) {
      getHomeGoods(type, this.goods[type].page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-navbar {
  background-color: var(--banner-color);
  color: white;
}
.home-recommend {
  padding-bottom: 10px;
  border-bottom: 8px solid #dedede;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.scroll-wrapper {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
