<template>
  <div class="photos-info">
    <div class="bg"></div>
    <div class="content">
      <div class="left">
        <!-- 轮播图 -->
        <div class="carousel">
          <el-carousel
            autoplay
            height="50vh"
            arrow="hover"
            trigger="click"
            indicator-position="outside"
            @change="(index) => handleimgChange(index)"
          >
            <el-carousel-item
              class="img-item"
              v-for="item in imgSrcs"
              :key="item"
            >
              <el-image
                class="img"
                fit="cover"
                :src="item.src"
                loading="lazy"
                @load="handleimgChange(0)"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="right">
        <!-- 描述信息 -->
        <div class="info">
          <h2 ref="title">{{ currentTitle }}</h2>
          <p ref="description">{{ currentDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 需要左边一张大照片轮播图，右边是描述信息，
// 每次轮换照片，右边的描述信息也会随之变化
// 通过点击左右箭头，可以切换照片
// 照片里面要有水印
// 鼠标移动时会有爱心粒子效果
import { ElCarousel, ElCarouselItem } from "element-plus";
export default {
  data() {
    return {
      imgSrcs: [
        {
          name: "泡泡照片墙1",
          description: "这是一个泡泡照片墙",
          src: "/assets/content/content-carousel1.jpg",
        },
        {
          name: "泡泡照片墙2",
          description: "这是一个泡泡照片墙",
          src: "/assets/content/content-carousel2.jpg",
        },
        {
          name: "泡泡照片墙3",
          description: "这是一个泡泡照片墙",
          src: "/logo.png",
        },
      ],
      currentTitle: "泡泡照片墙1",
      currentDescription: "这是一个泡泡照片墙",
    };
  },
  components: {
    ElCarousel,
    ElCarouselItem,
  },
  methods: {
    handleimgChange(index) {
      const bg = document.querySelector(".bg");
      bg.style.background = `url(${this.imgSrcs[index].src}) no-repeat center center/cover`;
      this.handleTestChange(index);
    },
    handleTestChange(index) {
      const title = this.$refs.title;
      const description = this.$refs.description;

      // 添加动画类
      title.classList.add("slide-out");
      description.classList.add("slide-out");

      // 等待动画结束后更新内容并添加进入动画
      setTimeout(() => {
        this.currentTitle =
          this.imgSrcs[index].name === "" ||
          this.imgSrcs[index].name === undefined ||
          this.imgSrcs.name === null
            ? "照片未命名"
            : this.imgSrcs[index].name;
        this.currentDescription =
          this.imgSrcs[index].description === "" ||
          this.imgSrcs[index].description === undefined ||
          this.imgSrcs.description === null
            ? "快来给照片添加描述吧！"
            : this.imgSrcs[index].description;

        title.classList.remove("slide-out");
        description.classList.remove("slide-out");

        title.classList.add("slide-in");
        description.classList.add("slide-in");
      }, 1000); // 动画持续时间
    },
  },
  mounted() {
    // 初始化内容
    this.currentTitle = this.imgSrcs[0].name;
    this.currentDescription = this.imgSrcs[0].description;
  },
};
</script>

<style lang="scss" scoped>
.photos-info {
  position: relative;
  // margin-top: 5px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  border: 5px solid var(--photos-wall-border-color);
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("../../../public/assets/content/content-carousel2.jpg")
      no-repeat center center/cover;
    // 高斯模糊 不要内发光
    filter: blur(20px);
  }
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      margin-top: 5%;
      width: 50%;
      height: 80%;
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      .carousel {
        margin: 10px;
        width: 100%;
      }
    }

    .right {
      margin-top: 5%;
      width: 50%;
      height: 80%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      .info {
        color: #fff;
        h2,
        p {
          margin: 0;
          opacity: 0;
          transform: translateX(200%);
          transition: transform 0.5s ease; // 动画时间
        }
        .slide-in {
          opacity: 1;
          transform: translateX(0);
        }
        h2.slide-out {
          opacity: 0;
          transform: translateX(200%);
          transition: opacity 0s; // 立即完成动画
        }
        p.slide-out {
          opacity: 0;
          transform: translateX(200%);
        }
        h2.slide-in {
          transition: transform 0.8s ease, opacity 0.4s ease; /* h2 动画更快 */
        }
        p.slide-in {
          transition: transform 1.2s ease, opacity 0.4s ease; /* p 动画更慢 */
        }
      }
    }
  }
}
</style>

<style lang="scss">
.photos-info {
  .left {
    .el-carousel__container {
      border-radius: 20px;
      overflow: hidden;
      .img {
        height: 100%;
        img {
          border-radius: 20px;
        }
      }
    }
  }
}

.photos-info {
  .content {
    .right {
      .info h2,
      p {
        font-family: "Microsoft YaHei";
      }
    }
  }
}
</style>
