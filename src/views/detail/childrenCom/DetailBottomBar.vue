<template>
  <div class="bottom-bar">
    <div class="item">
      <img src="~assets/img/detail/店铺.svg" alt="" />
      <div>店铺</div>
    </div>
    <div class="item">
      <img src="~assets/img/detail/客服.svg" alt="" />
      <div>客服</div>
    </div>
    <div class="item">
      <img src="~assets/img/detail/收藏.svg" alt="" />
      <div>收藏</div>
    </div>
    <div class="btn-box">
      <div class="btn cart-btn" @click="addCart">加入购物车</div>
      <div class="btn buy-btn">购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addCart(){
      this.$emit('addCart')
    }
  },
};
</script>
<style scoped>
.bottom-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -4px 2px rgba(193, 193, 193, 0.3);
}
.bottom-bar > .item {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bottom-bar > .btn-box {
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
img {
  width: 24px;
  height: 24px;
}
.btn {
  height: 100%;
  flex: 1;
  line-height: 49px;
  text-align: center;
}
.cart-btn {
  background-color: rgb(247, 221, 52);
}
.buy-btn {
  background-color: rgb(255, 111, 147);
}
</style>
