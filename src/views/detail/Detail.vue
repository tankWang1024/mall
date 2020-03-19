<template>
  <div>
    <detail-navbar />
  </div>
</template>
<script>
import DetailNavbar from './childrenCom/DetailNavbar'
export default {
  name:'Detail',
  components:{
    DetailNavbar
  },
  data() {
    return {
      id:null
    }
  },
  created() {
    console.log(this.$route.params.id)
    this.id = this.$route.params.id
  },
}
</script>
<style scoped>

</style>