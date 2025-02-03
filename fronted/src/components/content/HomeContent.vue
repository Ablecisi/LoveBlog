<template>
  <el-carousel trigger="click" loop autoplay height="90vh" indicator-position="outside">
    <el-carousel-item class="home-carousel" v-for="item in items" :key="item">
      <el-image class="carousel-image" :src="item" fit="cover" />
    </el-carousel-item>
  </el-carousel>
  <div class="divider">
    <el-divider
      ><el-icon><StarFilled /></el-icon
    ></el-divider>
  </div>
  <photos-wall />
  <photos-info />
</template>

<script setup>
import { ElCarousel, ElCarouselItem } from "element-plus";
import PhotosWall from "./PhotosWall.vue";
import PhotosInfo from "./PhotosInfo.vue";
import { ElDivider } from "element-plus";
import { StarFilled } from "@element-plus/icons-vue";
{
  ElCarousel;
  ElCarouselItem;
  PhotosWall;
  ElDivider;
  StarFilled;
}

const items = [
  "/assets/content/content-carousel1.jpg",
  "/assets/content/content-carousel2.jpg",
  "/assets/content/content-carousel3.jpg",
  "/assets/content/content-carousel4.jpg",
  "/assets/content/content-carousel5.jpg",
  "/assets/content/content-carousel6.jpg",
  "/assets/content/content-carousel7.jpg",
  "/assets/content/content-carousel8.jpg",
];
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: 100%;
}
.divider {
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px auto;
}
.home-carousel {
  border-radius: 0px 0px 0px 0px;
  border-width: 0 0 10px 0;
  border-color: #ebe8ad;
  border-style: solid;
  overflow: hidden;
}

</style>

<style>
/* .el-carousel__container {
  border-radius: 0px 0px 0px 0px;
  border-width: 0 0 10px 0;
  border-color: #ebe8ad;
  border-style: solid;
  overflow: hidden;
} */
</style>
