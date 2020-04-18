<template>
  <div class="wallet">
    <div v-for="(item,index) in wallet" :key="index" class="item">
      <span><span class="num">{{item.num}}</span>{{item.unit}}</span>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name:'Wallet',
  data() {
    return {
      wallet:[{num:0,title:'我的余额',unit:'元'},{num:0,title:'我的优惠',unit:'个'},{num:0,title:'我的积分',unit:'分'}]
    }
  },
}
</script>
<style scoped>
.wallet{
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.item{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item > span{
  padding: 4px;
}
.num{
  color: var(--base-color);
  font-size: 18px;
  margin-right: 5px;
}
</style>