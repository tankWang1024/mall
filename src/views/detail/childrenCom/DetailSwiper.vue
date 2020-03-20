<template>
  <swiper :options="swiperOption" v-if="detailBanner.length > 1" class="detail-swiper">
    <swiper-slide v-for="(item, index) in detailBanner" :key="index + 'detail'">
      <img :src="item.img" alt="" />
    </swiper-slide>
    <div
      id="detail-pagination"
      slot="pagination"
      class="swiper-pagination"
    ></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "DetailSwiper",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    detailBanner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1, // 同时显示的滑块数量
        speed: 500, // 图片切换速度
        pagination: {
          el: "#detail-pagination"
        },
        loop: true,
        notNextTick: true,
        preloadImages: false,
        on: {
          touchEnd: function(event) {
            //你的事件
          }
        }
      }
    };
  },
  mounted() {
    this.swiperOption.autoplay =
      this.detailBanner.length != 1
        ? {
            delay: 4000,
            stopOnLastSlide: false,
            disableOnInteraction: false //用户操作swiper之后自动切换不会停止
          }
        : false;
  }
};
</script>
<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>
