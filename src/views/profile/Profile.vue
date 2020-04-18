<template>
  <div>
    <navbar class="navbar">
      <template v-slot:center>
        我的档案
      </template>
    </navbar>
    <info />
    <wallet />
    <list />
    <main-tabbar />
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar'

import MainTabbar from 'components/content/mainTabbar/MainTabbar'

import Info from './childrenCom/Info'
import Wallet from './childrenCom/Wallet'
import List from './childrenCom/List'

export default {
  name:"Profile",
  components:{
    Navbar,
    MainTabbar,
    Info,
    Wallet,
    List
  }
}
</script>

<style scoped>
.navbar{
  background-color: var(--banner-color);
  color: white;
}
</style>