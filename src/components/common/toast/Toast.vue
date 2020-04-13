<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>
<script>
export default {
  name:"Toast",
  data() {
    return {
      message:'添加到购物车',
      isShow:false
    }
  },
  methods: {
    show(msg,duration=2000){
      this.message = msg
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  },
}
</script>
<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  color: white;
  background-color: rgba(0, 0, 0, .6);
  padding: 8px 10px;
  border-radius: 5px;
}
</style>