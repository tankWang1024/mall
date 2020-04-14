<template>
  <div class="goods-item" @click="itemClick">
      <img v-lazy="goodsItem.imgUrl" alt="" class="goods-img" @load="imgLoad"/>
    <div class="goods-title">
      {{ goodsItem.title }}
    </div>
    <div class="goods-more">
      <span class="goods-price">{{ goodsItem.price.toFixed(2) }}</span>
      <span class="goods-cfav">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit('imgLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItem.id)
      
    }
  },
};
</script>
<style scoped>
.goods-item {
  width: 46%;
  font-size: 14px;
}
.goods-img {
  width: 100%;
  border-radius: 5px;
}
.goods-title {
  margin: 4px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.goods-more{
  margin: 4px 0;
  text-align: center;
}
.goods-price{
  color: var(--base-color);

}
.goods-cfav::before{
  content: '';
  display: inline-block;
  width: 16px;
  height: 14px;
  background-image: url('~assets/img/home/收藏.svg');
  margin-left: 10px;
}
</style>
