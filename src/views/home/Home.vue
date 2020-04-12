<template>
  <div id="home">
    <navbar class="home-navbar">
      <template v-slot:center>
        购物街
      </template>
    </navbar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control1"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="tabControlShow"
    />
    <b-scroll
      class="scroll-wrapper"
      ref="scroll"
      @contentScroll="contentSCroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <template v-slot:default>
        <home-swiper
          :home-swiper="banner"
          @SwipperImgLoad="SwipperImgLoad"
        ></home-swiper>
        <home-recommend
          :home-recommend="recommend"
          class="home-recommend"
        ></home-recommend>
        <Home-feature></Home-feature>
        <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="tabControl2"
        />
        <goods-list :goodsList="showgoods"></goods-list>
      </template>
    </b-scroll>
    <back-top @click.native="backTop" v-show="backUpShow" />
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";
import TabControl from "components/content/tabControl/TabControl";
import BScroll from "components/common/scroll/BScroll";
import MainTabbar from 'components/content/mainTabbar/MainTabbar'

import homeSwiper from "views/home/childrenCom/HomeSwiper";
import HomeRecommend from "./childrenCom/HomeRecommend";
import HomeFeature from "./childrenCom/FeatureView";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

import {imgLoadListenerMixin,backTop} from 'common/mixin'

export default {
  name: "Home",
  components: {
    Navbar,
    TabControl,
    BScroll,
    MainTabbar,
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
      currentIndex: 0,
      tabControlTop: 0,
      tabControlShow: false,
    };
  },
  computed: {
    showgoods() {
      return this.goods[this.currentType].list;
    }
  },
  mixins:[imgLoadListenerMixin,backTop],
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    //请求数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.$refs.scroll.toPosition(0,0,0)
  },
  methods: {
    //------事件监听----------
    tabClick(index) {
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
      if(this.tabControlShow){
        this.$refs.scroll.toPosition(0,-this.tabControlTop,0)
      }
    },
    SwipperImgLoad() {
      this.tabControlTop = this.$refs.tabControl2.$el.offsetTop;
    },
    contentSCroll(position) {
      console.log('滚动中');
      console.log(-position.y)
      this.backUpShow = -position.y > 340;
      //-----------多次刷新，会触发betterscroll的scroll方法。。
      this.tabControlShow = -position.y > this.tabControlTop && -position.y > 50;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
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
      getHomeGoods(type, this.goods[type].page)
        .then(res => {
          // console.log(res);
          if (res.status == 200) {
            this.goods[type].list.push(...res.data.data.list);
            this.goods[type].page += 1;
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
#home {
  box-sizing: border-box;
  height: 100%;
  position: relative;
}
.home-navbar {
  background-color: var(--banner-color);
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  color: white;
}
.home-recommend {
  padding-bottom: 10px;
  border-bottom: 8px solid #dedede;
}
.tab-control1 {
  width: 100%;
  position: relative;
  z-index: 9;
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
