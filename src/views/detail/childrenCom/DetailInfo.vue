<template>
  <div class="info">
    <div class="title">{{ info.title }}</div>
    <div v-if="info.price" class="price-box">
      <span class="price">￥{{ info ? info.price.toFixed(2) : "--" }}</span>
      <div v-show="info.onSale" class="pre-price-box">
        <span class="pre-price"
          >￥{{ info ? info.prePrice.toFixed(2) : "" }}</span
        >
        <div class="sale">活动价</div>
      </div>
    </div>
    <div class="goodsSell text-align">
      <div>销量{{info.sellNum}}</div>
      <div>收藏{{info.favNum}}</div>
      <div>{{info.promise}}</div>
    </div>
    <div class="sellPromis text-align">
      <div v-for="(item,index) in info.promises" :key="index+'sellPromis'">{{item}}</div>
    </div>
    <div class="sellerInfo">
      <div class="sellerName">
        <img :src="info.sellerLogo" alt="">
        <div ><span>{{info.sellerName}}</span></div>
      </div>
      <div class="sellerDetail">
        <div class="seller-left">
          <div class="flexItem">
            <div class="number">{{info.sellAccount}}</div>
            <div>总销量</div>
          </div>
          <div class="flexItem goods-account">
            <div class="number">{{info.goodsAccount}}</div>
            <div>全部宝贝</div>
          </div>
        </div>
        <div class="seller-right" v-if="info.describe">
          <div>描述相符：<span class="green" :class="{red:info.describe[0].isHigh}">{{info.describe[0].point.toFixed(2)}} {{info.describe[0].isHigh?'高':'低'}}</span></div>
          <div>价格合理：<span class="green" :class="{red:info.describe[1].isHigh}">{{info.describe[1].point.toFixed(2)}} {{info.describe[1].isHigh?'高':'低'}}</span></div>
          <div>质量满意：<span class="green" :class="{red:info.describe[2].isHigh}">{{info.describe[2].point.toFixed(2)}} {{info.describe[2].isHigh?'高':'低'}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailInfo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    
  },
  mounted() {
    // console.log(this.info.price)
  }
};
</script>
<style scoped>
.info {
  width: 96%;
  margin: 0 auto;
}
.title {
  margin: 10px 0;
  font-size: 18px;
  font-weight: 500;
}
.price {
  font-size: 24px;
  color: var(--text-color);
}
.price-box {
  margin: 10px 0;
}
.pre-price {
  font-size: 14px;
  color: var(--lightgray-text-color);
  text-decoration: line-through;
}
.pre-price-box {
  display: inline-block;
  margin: 0 10px;
}
.sale {
  display: inline-block;
  background-color: var(--banner-color);
  color: white;
  padding: 3px 7px;
  border-radius: 10px;
  font-size: 14px;
  margin-left: 4px;
  transform: translate(0, -50%);
}
.goodsSell{
  display: flex;
  border-bottom: 1px solid #dedede;
  color: var(--lightgray-text-color);
  font-size: 14px;
  padding:5px 0;
}
.text-align{
  display: flex;
}
.text-align div{
  flex: 1;
}
.text-align div:nth-of-type(2){
  text-align: center;
}
.text-align div:nth-of-type(3){
  text-align: right;
}
.sellPromis{
  padding: 18px 0;
  line-height: 20px;
  font-size: 16px;
  box-shadow: 0 2px 2px #dedede;
}
.sellPromis div::before{
  content: '';
  display: inline-block;
  width: 14px;
  height: 14px;
  background-image: url('~assets/img/detail/check.svg');
  background-size: contain;
}
.sellerName{
  padding: 15px 5px;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.sellerName img{
  width: 38px;
  height: 38px;
  margin-left: 10px;
  border-radius: 50%;
  border: 1px solid  var(--lightgray-text-color);
}
.sellerName div{
  height: 38px;
  font-size: 20px;
  line-height: 38px;
  margin-left: 10px;
  color: var(--lightgray-text-color);
}
.sellerDetail{
  display: flex;
  text-align: center;
}
.seller-left{
  flex: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
.seller-right{
  font-size: 14px;
  flex: 1;
}
.seller-right div{
  height: 22px;
}
.flexItem{
  flex: 1;
}
.goods-account{
  border-right: 1px solid var(--lightgray-text-color);
}
.number{
  font-size: 20px;
  margin-bottom: 4px;
}
.green{
  color: green;
}
.red{
  color: red;
}
</style>
