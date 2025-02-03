<template>
  <div class="footer">
    <div class="space">💖 Love You For Three Thousand Years 🥰</div>
    <div class="footer-content">
      <a target="_blank" href="https://beian.miit.gov.cn"
        >蜀ICP备2024086552号-1</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  border: 5px solid var(--photos-wall-border-color);
  .space {
    height: 6vh;
    // background-color:#3e3d3d #e8e8e8;
    color: #333;
    text-align: center;
    line-height: 6vh;
    font-size: 2vw;
  }
  .footer-content {
    height: 10vh;
    // background-color: #3e3d3d;

    text-align: center;
    line-height: 10vh;
    font-size: 0.8vw;
    a {
      color: #000;
      text-decoration: none;
      font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
      &:active {
        color: #a1a1a1;
      }
    }
  }
}
</style>
