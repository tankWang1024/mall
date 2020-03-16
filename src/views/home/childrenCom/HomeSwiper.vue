<template>
  <div>
    <!-- 加入判断时，loop才生效 -->
    <swiper :options="swiperOption" ref="mySwiper" v-if="banner.length > 1">
      <swiper-slide v-for="item in banner" :key="item.image"
        ><a :href="item.link"
          ><img :src="item.image" alt="" class="swiper-img"/></a
      ></swiper-slide>
      <div
        id="home-pagination"
        slot="pagination"
        class="swiper-pagination"
      ></div>
    </swiper>
    <home-recommend :home-recommend='recommend'></home-recommend>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import HomeRecommend from './HomeRecommend'
import { getHomeMultidata } from "network/home.js";
export default {
  name: "HomeSwiper",
  components: {
    swiper,
    swiperSlide,
    HomeRecommend
  },
  data() {
    return {
      swiperOption: {
        // 参数同swiper官方api参数
        slidesPerView: 1, // 同时显示的滑块数量
        speed: 500, // 图片切换速度
        pagination: {
          el: "#home-pagination"
        },
        loop: true,
        // spaceBetween:10,
        notNextTick: true,
        preloadImages: false,
        on: {
          touchEnd: function(event) {
            //你的事件
          }
        }
      },
      banner: [],
      recommend: []
    };
  },
  computed: {},
  mounted() {
    getHomeMultidata().then(res => {
      console.log(res);
      if (res.data.success) {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
        console.log(this.recommend);
        // 只有一张图时，autoplay为false
        this.swiperOption.autoplay =
          this.banner.length != 1
            ? {
                delay: 4000,
                stopOnLastSlide: false,
                disableOnInteraction: false
              }
            : false;
      }
    });
  }
};
</script>
<style scoped>
.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
