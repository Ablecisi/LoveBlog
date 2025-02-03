<template>
  <!-- 泡泡照片墙 -->
  <div class="wall">
    <p class="title">THE WALL OF (* ^ ▽ ^ *) HAPPY PHOTOS</p>
    <div class="photos-wall" v-for="item in photos.length" :key="item">
      <el-card :key="item" v-if="item <= wallCount" class="photos-wall__item">
        <template #header>{{ photos[item - 1].cardName }}</template>
        <el-image :src="photos[item - 1].src" @load="handleImageLoad" />
        <template #footer>
          {{ photos[item - 1].description }}
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
import ColorThief from "colorthief";
import { ElCard, ElImage } from "element-plus";


// https://picsum.photos/200/200
export default {
  name: "PhotosWall",
  components: {
    ElCard,
    ElImage,
  },
  data() {
    return {
      wallCount: 4,
      photosCount: 1,
      photos: [
        {
          cardName: "小房子",
          src: "/assets/content/content-carousel1.jpg",
          description: "这是一个相册",
        },
        {
          cardName: "天空",
          src: "/assets/content/content-carousel3.jpg",
          description: "这是一个相册",
        },
        // { cardName: "logo", src: "/logo.png" },
        {
          cardName: "落叶",
          src: "/assets/content/content-carousel4.jpg",
          description: "这是一个相册",
        },
        // {
        //   cardName: "5",
        //   src: "/assets/content/content-carousel5.jpg",
        //   description: "这是一个相册",
        // },
        // {
        //   cardName: "6",
        //   src: "/assets/content/content-carousel6.jpg",
        //   description: "这是一个相册",
        // },

        {
          cardName: "红房子",
          src: "/assets/content/content-carousel7.jpg",
          description: "这是一个相册",
        },

        {
          cardName: "向日葵",
          src: "/assets/content/content-carousel2.jpg",
          description: "这是一个相册",
        },
      ],
      currentImgIndex: 0,
      cardName: "泡泡照片墙",
    };
  },
  methods: {
    calculateWallCount() {
      const wallWidth = document.querySelector(".wall").offsetWidth;
      const item = document.querySelector(".photos-wall__item");
      console.log("wallWidth: ", wallWidth);
      console.log("wallWidth除去边框和item的margin：", wallWidth - 50);
      console.log("相册item的宽度：", item.clientWidth);
      console.log("相册item的高度：", item.clientHeight);
      const itemWidth = Math.floor(item.clientWidth); // 假设每个item的宽度为5vw
      const count = Math.floor((wallWidth - 50) / itemWidth);
      this.wallCount = count-1 <= 1 ? 1 : count-1;
      console.log("wallCount: ", this.wallCount);
    },
    handleImageLoad(event) {
      const img = event.target;
      const colorThief = new ColorThief();
      const colors = colorThief.getPalette(img, 3);
      const [r, g, b] = colors[0];
      const [r1, g1, b1] = colors[2];
      document.documentElement.style.setProperty(
        "--wall-bg",
        `rgb(${r}, ${g}, ${b})`
      );
      document.documentElement.style.setProperty(
        "--wall-bg1",
        `rgb(${r1}, ${g1}, ${b1})`
      );
    },
  },
  mounted() {
    this.calculateWallCount();
    window.addEventListener("resize", this.calculateWallCount); // 监听窗口大小变化
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.calculateWallCount);
  },
};
</script>

<style lang="scss" scoped>
.wall {
  position: relative;
  margin-top: 110px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  border: 5px solid var(--photos-wall-border-color);
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    45deg,
    var(--wall-bg) 0%,
    var(--wall-bg) 50%,
    var(--wall-bg1) 100%
  );
}
.title {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.6vw;
}
/* 控制整个照片卡片组 */
.photos-wall {
  // padding-top: 180px;
  // height: 100%;
  // height: 370px;
  display: flex;
  flex-wrap: wrap; /* 使得子元素可以换行 */
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
  &:hover {
    .photos-wall__item {
      transform: scale(1.2);
    }
  }
}
/* 控制每个照片卡片 */
.photos-wall__item {
  margin: 20px;
  padding: 0;
  width: 280px;
  max-height: 380px;
  /* height: 100%; */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.photos-wall__item img {
  width: 100%;
  height: 100%;
  transition: all 0.1s;
}
</style>

<style lang="scss">

.photos-wall__item .el-card__header,
.el-card__footer {
  color: #848484;
}

</style>
