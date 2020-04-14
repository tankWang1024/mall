<template>
    <!-- 加入判断时，loop才生效 -->
    <swiper :options="swiperOption" ref="mySwiper" v-if="homeSwiper.length > 1" class="swiper">
      <swiper-slide v-for="item in homeSwiper" :key="item.image">
        <img :src="item.image" alt="" class="swiper-img" @load="bannerLoad" />
      </swiper-slide>
      <div
        id="home-pagination"
        slot="pagination"
        class="swiper-pagination"
      ></div>
    </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "HomeSwiper",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    homeSwiper: {
      type: Array,
      default() {
        return [];
      }
    }
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
      isLoad: false
    };
  },
  mounted() {
    // 只有一张图时，autoplay为false
    this.swiperOption.autoplay =
      this.homeSwiper.length != 1
        ? {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false //用户操作swiper之后自动切换不会停止
          }
        : false;
  },
  methods: {
    bannerLoad() {
      if (!this.isLoad) {
        this.$emit("SwipperImgLoad");
        this.isLoad = true;
      }
    }
  }
};
</script>
<style scoped>
.swiper{
  height: 200px;
}
.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
