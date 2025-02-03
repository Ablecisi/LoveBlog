<template>
  <div class="albumSpaceNav">
    <el-button class="button" round @click="goBackHome">
      <el-icon><Back /></el-icon>
    </el-button>
  </div>
  <div class="album-space">
    <div class="album-space-header">
      <div class="headerspace">
        <el-image
          style="height: 30vh; width: 80vw"
          :src="albums[0].cover"
          fit="none"
          loading="lazy"
        ></el-image>
      </div>
      <h1>{{ albums[0].name }}</h1>
      <el-text class="w-150px description" line-clamp="1" truncated>
        {{ albums[0].description }}
      </el-text>
    </div>
    <div class="album-space-content">
      <div
        v-for="item in albums"
        :key="item"
        class="album-space-content-albums"
      >
        <div class="updateTime">
          <p>
            <el-icon color="pink"><CameraFilled /></el-icon>
            {{ item.updateTime }}
          </p>
        </div>
        <div
          class="album-space-content-albums-album"
          v-for="(photo, index) in photos.slice(0, maxDisImg)"
          :key="photo"
          @mouseover="(event) => handleMouseover(event)"
        >
          <el-tooltip
            v-if="index < maxDisImg - 1"
            effect="dark"
            placement="top"
            :content="`${photo.description}`"
          >
            <el-image
              style="width: 200px; height: 200px; font-family: Microsoft YaHei"
              :src="photo.src"
              fit="cover"
              loading="lazy"
            ></el-image>
          </el-tooltip>
          <el-tooltip
            effect="dark"
            placement="right"
            v-if="index === maxDisImg - 1"
            content="阅览所有"
          >
            <el-image
              style="width: 200px; height: 200px; font-family: Microsoft YaHei"
              :src="photos[maxDisImg - 1].src"
              fit="cover"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              hide-on-click-modal
              close-on-press-escape
              :preview-src-list="photos.map((photo) => photo.src)"
              :initial-index="maxDisImg - 1"
              loading="lazy"
            >
            </el-image>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
  <div class="uploadImg">
    <el-button @click="handleUploadImg" type="primary" round
      >上传图片</el-button
    >
  </div>
  <el-dialog
    class="uploadDialog"
    title="上传图片"
    draggable
    v-model="dialogVisible"
  >
    <el-form :model="form" label-width="auto" style="width: 800px">
      <el-form-item>
        <div class="input">
          <el-input
            maxlength="30"
            v-model="form.imgName"
            placeholder="照片名字"
            clearable
            show-word-limit
          ></el-input>
          <el-input
            maxlength="100"
            :autosize="{ minRows: 2, maxRows: 5 }"
            type="textarea"
            v-model="form.imgDescription"
            placeholder="照片描述"
            show-word-limit
          ></el-input>
        </div>
      </el-form-item>

      <el-form-item>
        <el-upload
          ref="upload"
          :auto-upload="false"
          class="upload-img"
          :action="uploadAction"
          method="post"
          :on-success="handleSuccess"
          :on-error="handleError"
          :on-remove="handleRemove"
          :limit="limitImgCount"
          :on-exceed="handleExceed"
          :on-change="handleChange"
          multiple
          drag
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">拖拽文件到这里<em>或者点击这里</em></div>
          <template #tip>
            <div class="el-upload__tip">一次少于 {{ limitImgCount }} 张图片</div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <div class="submitDiv" style="width: 100%;">
          <el-button type="success" @click="onsubmit"> 提交 </el-button>
          <el-button @click="handleCancel">取消</el-button>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-dialog title="预览" v-model="preViewDialogVisible" width="50%">
    <el-image
      loading="lazy"
      :src="dialogImageUrl"
      alt="Preview Image"
    ></el-image>
  </el-dialog>
</template>

<script>
import { Back, CameraFilled, UploadFilled } from "@element-plus/icons-vue";
import {
  ElImage,
  ElText,
  ElTooltip,
  ElButton,
  ElMessage,
  ElForm,
  ElFormItem,
} from "element-plus";
import ColoThief from "colorthief";
export default {
  name: "AlbumSpace",
  components: {
    CameraFilled,
    ElImage,
    ElText,
    ElTooltip,
    ElButton,
    Back,
    UploadFilled,
    ElForm,
    ElFormItem,
  },
  data() {
    return {
      form: {
        imgName: "",
        imgDescription: "",
        fileList: [],
      },
      limitImgCount: 4,
      upload: null,
      dialogVisible: false,
      preViewDialogVisible: false,
      maxDisImg: 8,
      uploadAction: "https://jsonplaceholder.typicode.com/posts/",
      albums: [
        {
          name: "回忆",
          cover: "/assets/content/content-carousel1.jpg",
          description: "这是一个相册",
          updateTime: "2021-10-01",
        },
        {
          name: "生活",
          cover: "/assets/content/content-carousel2.jpg",
          description: "这是一个相册",
          updateTime: "2022-10-02",
        },
      ],
      photos: [
        {
          name: "回忆",
          src: "/assets/content/content-carousel3.jpg",
          description: "这是一个照片",
          updateTime: "2021-10-01",
        },
        {
          name: "生活",
          src: "/assets/content/content-carousel4.jpg",
          description: "这是一个照片",
        },
        {
          name: "旅行",
          src: "/assets/content/content-carousel5.jpg",
          description: "这是一个照片",
        },
        {
          name: "回忆",
          src: "/assets/content/content-carousel6.jpg",
          description: "这是一个照片",
        },
        {
          name: "旅行",
          src: "/assets/content/content-carousel8.jpg",
          description: "这是一个照片",
        },
        {
          name: "回忆",
          src: "/assets/content/content-carousel1.jpg",
          description: "这是一个照片",
        },
        {
          name: "旅行",
          src: "/assets/content/content-carousel2.jpg",
          description: "这是一个照片",
        },
        {
          name: "回忆",
          src: "/assets/content/content-carousel3.jpg",
          description: "这是一个照片",
          updateTime: "2021-10-01",
        },
        {
          name: "生活",
          src: "/assets/content/content-carousel4.jpg",
          description: "这是一个照片",
        },
        {
          name: "旅行",
          src: "/assets/content/content-carousel5.jpg",
          description: "这是一个照片",
        },
        {
          name: "回忆",
          src: "/assets/content/content-carousel6.jpg",
          description: "这是一个照片",
        },
        {
          name: "旅行",
          src: "/assets/content/content-carousel7.jpg",
          description: "这是一个照片",
        },
        {
          name: "回忆",
          src: "/assets/content/content-carousel8.jpg",
          description: "这是一个照片",
        },
        {
          name: "旅行",
          src: "/assets/content/content-carousel1.jpg",
          description: "这是一个照片",
        },
      ],
    };
  },
  created() {},
  methods: {
    handleMouseover(event) {
      let item = event.target;
      const albumSpace = document.querySelector(".album-space");
      const colorThief = new ColoThief();
      let colors = [
        [255, 255, 255],
        [255, 255, 255],
        [255, 255, 255],
      ];
      if (item.tagName === "IMG") {
        if (item.complete) {
          colors = colorThief.getPalette(item, 3);
        } else {
          item.onload = () => {
            colors = colorThief.getPalette(item, 3);
          };
        }
      } else return;
      // albumSpace.style.background = `linear-gradient(60deg, rgb(${colors[0]}), rgb(${colors[0]}), rgb(${colors[2]})`;
      albumSpace.style.background = `url(${item.src}) no-repeat center center/cover`;
      console.log(
        "colors:",
        `[color1:[${colors[0]}], color2:[${colors[1]}], color3:[${colors[2]}]]`
      );
    },
    goBackHome() {
      this.$router.push("/");
    },
    handleUploadImg() {
      this.dialogVisible = true;
    },
    handleSuccess() {
      ElMessage({
        message: "上传成功",
        grouping: true,
        type: "success",
      });
    },
    handleError() {
      ElMessage({
        message: "上传失败",
        grouping: true,
        type: "error",
      });
    },
    handleRemove() {
      ElMessage({
        message: "删除成功",
        grouping: true,
        type: "success",
      });
    },
    handleExceed() {
      ElMessage({
        message: `一次最多只能上传 ${this.limitImgCount} 张图片`,
        grouping: true,
        type: "warning",
      });
    },
    onsubmit() {
      // 上传的过程启动加载动画
      console.log(this.form);
      this.$refs.upload.submit();
      this.dialogVisible = false;
    },
    handleCancel() {
      this.form = {
        imgName: "",
        imgDescription: "",
        fileList: [],
      };
      this.$refs.upload.clearFiles();
      this.dialogVisible = false;
    },
    handleChange(file, fileList) {
      // 给form添加fileList
      this.form.fileList = fileList;

    },
  },
};
</script>

<style lang="scss" scoped>
.albumSpaceNav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .button {
    position: absolute;
    width: 5vw;
    top: 1vw;
    left: 1vw;
    z-index: 1000;
  }
}
.album-space {
  font-weight: 200;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  background: linear-gradient(60deg, #fffb93, #c0ff8c);
  * {
    font-family: "Microsoft YaHei", sans-serif;
  }
  .album-space-header {
    position: relative;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 5px solid pink;

    h1 {
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem; // 2rem = 32px
      color: #fff;
      mix-blend-mode: difference;
    }
  }
  .album-space-content {
    width: 60%;
    // display: flex;
    // justify-content: center;
    .album-space-content-albums {
      position: relative;
      margin-top: 50px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .updateTime {
        position: absolute;
        font-size: 1.4rem;
        font-weight: 400;
        left: -100px;

        @media (max-width: 430px) {
          font-size: 15px;
          left: -20vw;
        }
      }
      .album-space-content-albums-album {
        width: 200px;
        height: 200px;
        margin: 1rem;
        border: 5px solid #fff;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        h2 {
          font-size: 1.5rem;
          margin: 1rem 0;
        }
        p {
          font-size: 1rem;
          color: #666;
        }
      }
    }
  }
}
.uploadImg {
  position: fixed;
  bottom: 1vw;
  right: 2vw;
  margin: 1vw;
  @media (max-width: 430px) {
    bottom: 20vw;
    right: 1vw;
  }
}
</style>

<style lang="scss">
.album-space {
  .album-space-header {
    .description {
      position: absolute;
      width: 15vw;
      margin: 0;
      padding: 0.5vw;
      top: 70%;
      left: 80%;
      transform: translate(-50%, 50%);
      overflow: hidden;
      color: #fff;
      mix-blend-mode: difference;
      font-weight: bold;
      font-size: 0.7vw;
    }
  }
}
.el-popper span {
  font-weight: 500;
  font-family: "Microsoft YaHei", sans-serif;
}

.uploadDialog {
  .el-dialog__body {
    display: flex;
    .input {
      width: 100%;
      margin: 1rem;
    }
    .upload-img {
      width: 100%;
      margin: 1rem;
    }
  }
}
</style>
