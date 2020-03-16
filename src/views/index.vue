<template>
  <div>
    <router-view></router-view>
    <h1>-index-</h1>
    <tabbar>
      <tabbar-item
        v-for="item in tabbar"
        :key="item.tabbarText"
        :itemText="item.tabbarText"
        :itemImgsrc="item.tabbarImg"
        :itemImgsrcActive="item.tabbarImgActive"
        :path="item.path"
      ></tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "components/common/tabbar/Tabbar";
import tabbarItem from "components/common/tabbar/TabbarItem";
export default {
  data() {
    return {
      tabbar: [
        {
          tabbarImg: require("assets/img/tabbar/首页.svg"),
          tabbarImgActive: require("assets/img/tabbar/首页(1).svg"),
          tabbarText: "首页",
          path: "/home"
        },
        {
          tabbarImg: require("assets/img/tabbar/分类.svg"),
          tabbarImgActive: require("assets/img/tabbar/分类(1).svg"),
          tabbarText: "分类",
          path: "/category"
        },
        {
          tabbarImg: require("assets/img/tabbar/购物车.svg"),
          tabbarImgActive: require("assets/img/tabbar/购物车(1).svg"),
          tabbarText: "购物车",
          path: "/cart"
        },
        {
          tabbarImg: require("assets/img/tabbar/我的.svg"),
          tabbarImgActive: require("assets/img/tabbar/我的(1).svg"),
          tabbarText: "我的",
          path: "/profile"
        }
      ]
    };
  },
  components: {
    tabbar,
    tabbarItem
  }
};
</script>

<style scoped></style>
