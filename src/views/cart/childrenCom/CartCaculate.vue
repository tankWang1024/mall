<template>
  <div class="calc">
    <div class="check-all" @click="checkAll">
      <img
        :class="{ allChecked: cartAllChecked }"
        src="~assets/img/cart/对号(1).svg"
        alt=""
      />
      <span>全选</span>
    </div>
    <div class="center text-overflow-hidden">合计：￥{{ account }}</div>
    <div class="commit-btn text-overflow-hidden" @click="calcAccount">
      去结算{{ count }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "CartCaculate",
  computed: {
    ...mapGetters(["cartList", "cartAllChecked"]),
    count() {
      let count = this.cartList.filter(currentValue => {
        return currentValue.checked;
      }).length;
      return count ? `(${count})` : "";
    },
    account() {
      let checkedArr = this.cartList.filter(currentValue => {
        return currentValue.checked;
      });
      if (checkedArr.length) {
        let totalPrice = checkedArr.reduce((pre, cur) => {
          return pre + cur.price * 100 * cur.count; // 乘100防止无限小数造成精度丢失
        }, 0);
        return (totalPrice / 100).toFixed(2);
      } else {
        return 0;
      }
    }
  },
  methods: {
    checkAll() {
      this.$store.commit("check_all", this.cartAllChecked);
      if (this.cartList.length == 0) {
        this.$store.dispatch("all_checked_false");
      }
    },
    calcAccount(){
      let count = this.cartList.filter(currentValue => {
        return currentValue.checked;
      }).length
      if(!count){
        this.$toast.show('请选择商品~')
      }
    }
  }
};
</script>
<style scoped>
.calc {
  width: 100%;
  height: 44px;
  background-color: #eeeeee;
  position: fixed;
  bottom: 49px;
  display: flex;
  align-items: center;
}
.check-all {
  width: 90px;
  display: flex;
  align-items: center;
}
.check-all > img {
  width: 20px;
  height: 20px;
  margin: 0 6px;
  border: 1px solid rgb(201, 199, 199);
  border-radius: 50%;
}
.center {
  flex: 1;
}
.commit-btn {
  width: 120px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: var(--banner-color);
  color: white;
}
.allChecked {
  background-color: rgb(245, 116, 154);
  border-color: rgb(245, 116, 154);
}
</style>
