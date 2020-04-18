<template>
  <div class="main">
    <img src="~assets/img/profile/user.svg" alt="" class="phone">
    <div class="login-box">
      <div class="login-reg">登陆/注册</div>
      <div>暂无绑定手机号</div>
    </div>
    <img src="~assets/img/profile/right.svg" alt="" class="right-arrow">
  </div>
</template>
<script>
export default {
  name:'Info'
}
</script>
<style scoped>
.main{
  width:100%;
  height: 100px;
  background-color: var(--banner-color);
  color: rgb(240, 240, 240);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.phone{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ececec;
  padding: 10px;
  margin: 0 14px;
}
.right-arrow{
  padding:10px;
}
.login-box{
  flex: 1;
}
.login-reg{
  font-size: 18px;
  padding: 6px 0;
}
</style>