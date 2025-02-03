<template>
  <el-affix :offset="10" class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-nav"
      mode="horizontal"
      text-color="#848484"
      active-text-color="#ffd04b"
      :ellipsis="false"
      :unique-opened="true"
      :close-on-click-outside="true"
      @select="handleSelect"
      menu-trigger="click"
    >
      <el-image
        class="logo hide-on-small-screen"
        src="/logo.png"
        fit="cover"
        loading="lazy"
      ></el-image>
      <el-menu-item index="1">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>照片空间</template>
        <el-sub-menu index="2-1">
          <template #title>相册</template>
          <el-menu-item
            class="albumNav"
            v-for="item in albums"
            :key="item"
            :index="`2-1-${item.name}`"
          >
            <router-link :to="`/album`">相册： {{ item.name }}</router-link>
          </el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <!-- 当屏幕宽度小于430时就不显示留言和关于 -->
      <el-menu-item index="3" class="hide-on-small-screen">
        <router-link to="/comment">留言</router-link>
      </el-menu-item>
      <el-menu-item index="4" class="hide-on-small-screen">
        <router-link to="/about">关于</router-link>
      </el-menu-item>
      <el-sub-menu index="5" class="avatar">
        <template #title>
          <el-avatar
            :size="40"
            :src="avatarSrc"
            @error="errorHandler"
          ></el-avatar>
        </template>
        <el-menu-item index="5-1" @click="h">
          <el-icon><UserFilled /></el-icon>
          个人中心
        </el-menu-item>
        <el-menu-item @click="logout" index="5-2">
          <el-icon><CircleCloseFilled /></el-icon>
          <el-button
            style="padding: 0; background: transparent"
            type="danger"
            text
            >退出登录</el-button
          >
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-affix>
</template>

<script>
import {
  ElAvatar,
  ElAffix,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElNotification as notify,
} from "element-plus";
import { UserFilled, CircleCloseFilled } from "@element-plus/icons-vue";

export default {
  data() {
    return {
      activeIndex: "1",
      avatarSrc: "https://avatars.githubusercontent.com/u/499550?s=60&v=4",
      albums: [
        {
          name: "回忆",
          cover: "https://picsum.photos/200/200",
          description: "这是一个相册",
        },
        {
          name: "生活",
          cover: "https://picsum.photos/200/200",
          description: "这是一个相册",
        },
        {
          name: "旅行",
          cover: "https://picsum.photos/200/200",
          description: "这是一个相册",
        },
      ],
    };
  },
  methods: {
    handleSelect(key) {
      this.activeIndex = key;
    },
    errorHandler() {
      return true;
    },
    handleNavWid() {
      window.addEventListener("resize", () => {
        const nav = document.querySelector(".nav");
        nav.style.width = "90vw";
      });
    },
    logout() {
      this.$router.push("/login");
      
    },
    h() {
      window.location.href = "/personal";
    }
  },
  mounted() {
    notify({
      title: "🎉欢迎来到小辰和小鱼的秘密照片空间！",
      message: "这里是一个神秘的照片天地，欢迎来到这里！",
      type: "success",
      duration: 2000,
    });
    this.handleNavWid();
  },
  components: {
    ElAvatar,
    ElAffix,
    ElMenu,
    ElMenuItem,
    ElSubMenu,
    UserFilled,
    CircleCloseFilled,
  },
};
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 90vw;
  z-index: 2;

  .el-menu-nav {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 1px 1px 10px #9a9a9a;

    .logo {
      width: 40px;
      height: 40px;
      margin: 10px 15px 10px 10px;
    }
  }
}
.el-menu--horizontal > .el-menu-item:nth-child(5) {
  margin-right: auto;
}
</style>
<style lang="scss">
@media (max-width: 431px) {
  .el-menu--horizontal > .el-menu-item.hide-on-small-screen {
    display: none;
  }
  .el-menu-nav {
    .hide-on-small-screen {
      display: none;
    }
    .avatar {
      margin-left: 50px;
    }
  }
}
</style>
