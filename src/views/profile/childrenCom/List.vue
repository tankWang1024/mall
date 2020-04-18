<template>
  <b-scroll class="list">
    <list-com :listArr="list1" class="list1"></list-com>
    <list-com :listArr="list2" class="list2"></list-com>
  </b-scroll>
</template>
<script>
import BScroll from "components/common/scroll/BScroll";

import ListCom from "components/content/profileList/ListCom";
export default {
  name: "List",
  components: {
    BScroll,
    ListCom,
  },
  data() {
    return {
      list1: [
        { imgUrl: require("assets/img/profile/email.svg"), title: "我的消息" },
        { imgUrl: require("assets/img/profile/积分.svg"), title: "积分商城" },
        { imgUrl: require("assets/img/profile/king.svg"), title: "会员卡" },
      ],
      list2: [
        {
          imgUrl: require("assets/img/profile/购物车.svg"),
          title: "我的购物车",
        },
        {
          imgUrl: require("assets/img/profile/app.svg"),
          title: "下载购物APP",
        },
      ],
    };
  },
};
</script>
<style scoped>
.list {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  top: 248px;
  overflow: hidden;
}
.list1 {
  border-top: 18px solid #eeeeee;
  border-bottom: 18px solid #eeeeee;
}
</style>
