<template>
  <div id="home">
    <navbar class="home-navbar">
      <template v-slot:center>
        购物街
      </template>
    </navbar>
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
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";
import TabControl from "components/content/tabControl/TabControl";

import homeSwiper from "views/home/childrenCom/HomeSwiper";
import HomeRecommend from "./childrenCom/HomeRecommend";
import HomeFeature from "./childrenCom/FeatureView";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

import mockNetwork from "network/mock.js";
export default {
  name: "Home",
  components: {
    navbar,
    TabControl,
    homeSwiper,
    HomeRecommend,
    HomeFeature,
    GoodsList
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
      currentType:'pop'
    };
  },
  mounted() {
    //请求数据
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');

  },
  computed: {
    showgoods(){
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //------事件监听----------
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0: this.currentType = 'pop'
          break;
        case 1: this.currentType = 'new'
          break;
        case 2: this.currentType = 'sell'
          break;
      }
      
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
      // this.goods[type].page += 1;
      getHomeGoods(type, this.goods[type].page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.data.list);
      });
    }
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
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
</style>
