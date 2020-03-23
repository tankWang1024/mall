<template>
  <div class="goodsComment">
    <div class="title">
      <div class="title-text">用户评价</div>
      <div class="text-right" @click="moreComment"><span >更多</span></div>
    </div>
    <div v-if="goodsComment.commentSum!=0" class="comment">
      <div class="comment-name">
        <img :src="goodsComment.uimg" alt="">
        {{goodsComment.uname}}
      </div>
      <div class="content">
        {{goodsComment.content}}
      </div>
    </div>
    <div v-else class="noComment">
      暂无评价
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsComment",
  props: {
    goodsComment: {
      type: Object,
      default() {
        return {};
      }
    },
    id:{
      type:String
    }
  },
  methods: {
    moreComment(){ // 更多评价
      this.$router.push({path:'/moreComment/'+this.id})
    }
  },
};
</script>
<style scoped>
.goodsComment {
  width: 96%;
  margin: 10px auto;
}
.title {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #dedede;
  margin-bottom: 8px;
}
.title-text {
  width: 100px;
}
.text-right {
  width: 80px;
  text-align: center;
  line-height: 30px;
}
.noComment {
  width: 96%;
  /* height: 50px; */
  line-height: 100px;
  text-align: center;
  color: #918f8f;
}
.comment{
  width: 96%;
  margin: 0 auto;
  padding-bottom: 28px;
}
.comment-name{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.comment-name img{
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-right: 15px;
}
.content{
  color: #706f6f;
  font-size: 15px;
  white-space: pre-line;
  padding-top: 5px;
}
</style>
