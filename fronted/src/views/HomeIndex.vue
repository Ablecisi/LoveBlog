<template>
  <div class="home">
    <HomeNav />
    <span class="home_title">{{ homeTitle }}</span>
    <HomeContent />
    <HomeFooter />
  </div>
</template>

<script>
import HomeNav from "../components/nav/HomeNav.vue";
import HomeContent from "../components/content/HomeContent.vue";
import HomeFooter from "../components/footer/HomeFooter.vue";

export default {
  name: "HomeIndex",
  data() {
    return {
      homeTitle: "Welcome to the secret photo space of Xiaochen and Xiaoyu!",
    };
  },
  components: { HomeNav, HomeContent, HomeFooter },
};
</script>
<style lang="scss" scoped>
.home_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f8f8cd;
  font-size: 5vw;
  mix-blend-mode: normal; // 混合模式
  z-index: 1;
}
</style>

<!-- 组件样式重设 -->
<style lang="scss">
.el-divider__text {
  background-color: #ededed !important;
  color: #9e9e9e !important;
}
.el-divider--horizontal {
  margin: 0 !important;
  background-color: #c1c1c1;
}
</style>
