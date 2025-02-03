<template>
  <div class="bottomBackBtn" style="position: absolute; top: 0px;">
      <el-button type="success" @click="$router.back()">Back</el-button>
  </div>
  <br>
  <div class="commentTitle">
    <h1>{{ msg }}</h1>
  </div>
  <div class="wechat">
    <img @click="handleClickWeChat" src="/wechat.png" alt="wechat" />
  </div>
</template>

<script>
import { ElMessage } from 'element-plus';

export default {
  name: "CommentSpace",
  data() {
    return {
      msg: "Why don't you just send me a WeChat message after reading this sentence on the message page when you have time ?",
    };
  },
  methods: {
    handleClickWeChat() {
      ElMessage({
        message: "还妄想点击网页图标就能发微信?\n还不拿手机发?",
        type: "warning",
      });
    },
  },
};
</script>

<style lang="scss">
.commentTitle {
  h1 {
    font-family: 'Comic Sans MS', cursive, sans-serif;
  }
}
.wechat {
  img {
    width: 50px;
    height: 50px;
  }
}
</style>
