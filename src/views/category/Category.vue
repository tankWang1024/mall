<template>
<div>
  <cat-nav />
  <cat-aside @asideClick='asideClick'/>
  <cat-goods @tabClick="tabClick" :goodsList="goodsList" ref="catGoods" />
  <main-tabbar></main-tabbar>
</div>
  
  
</template>

<script>
import MainTabbar from 'components/content/mainTabbar/MainTabbar'

import CatNav from './chiledrenCom/CatNav'
import CatAside from './chiledrenCom/CatAside'
import CatGoods from './chiledrenCom/CatGoods'

import { getGoods } from "network/category";

export default {
  name: "Category",
  components: {
    MainTabbar,
    CatNav,
    CatAside,
    CatGoods
  },
  data() {
    return {
      data:[[]],
      goodsList:[],
      asideIndex:0,
      tabIndex:0
    };
  },
  mounted() {
    getGoods(this.asideIndex).then(res=>{
      console.log(res)
      this.data = res.data.data
      this.goodsList = this.data[0]
    })
  },
  methods: {
    asideClick(index){
      this.asideIndex = index
      this.tabIndex = 0
      console.log(this.$refs.catGoods)
      this.$refs.catGoods.$refs.tabControl.setIndex(0)
      getGoods(index).then(res=>{
        console.log(res)
        this.data=res.data.data
        this.goodsList = this.data[0]
      })
    },
    tabClick(index){
      this.goodsList = this.data[index]
    }
  },
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
