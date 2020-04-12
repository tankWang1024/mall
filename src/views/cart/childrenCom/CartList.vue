<template>
  <b-scroll class="list">
    <div class="item" v-for="item in cartList" :key="item.id">
      <div class="check-btn"></div>
      <img :src="item.img">
      <div class="info">
        <div class="title">{{item.title}}</div>
        <div class="desc">{{item.desc}}</div>
        <div class="bottom"><span class="price">￥{{item.price}}</span> <span class="">x {{item.count}}</span></div>
      </div>
    </div>
  </b-scroll>
</template>
<script>
import { mapGetters } from "vuex";
import BScroll from "components/common/scroll/BScroll";
export default {
  name: "CartList",
  components: {
    BScroll
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>
<style scoped>
.list {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.item{
  width: 100%;
  height: 120px;
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid rgb(201, 199, 199);
}
.item > img{
  width: 100px;
  height: 120px;
  border-radius: 10px;
}
.check-btn{
  width: 35px;
  height: 100%;
}
.info{
  width: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 18px;
}
.bottom{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 2;
  text-align: end;
}
.title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 2;
}
.desc{
  color: rgb(133, 133, 133);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}
.price{
  color: rgb(250, 99, 34);
}
</style>
