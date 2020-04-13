<template>
  <div>
    <navbar class="navbar">
      <template v-slot:center>
        购物车({{ $store.state.cartList.length }})
      </template>
    </navbar>
    <cart-list />
    <cart-caculate />
    <main-tabbar />
  </div>
</template>

<script>
import Navbar from "components/common/navbar/Navbar";

import MainTabbar from "components/content/mainTabbar/MainTabbar";

import CartList from "./childrenCom/CartList";
import CartCaculate from "./childrenCom/CartCaculate";
export default {
  name: "Cart",
  components: {
    Navbar,
    MainTabbar,
    CartList,
    CartCaculate
  }
};
</script>

<style scoped>
.navbar {
  background-color: var(--banner-color);
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
</style>
