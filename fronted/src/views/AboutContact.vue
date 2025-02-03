<template>
  <div class="about">
    <header style="position: fixed; width: 100%">
      <AboutNav :links="'/'" />
    </header>
    <main style="display: flex; justify-content: center; align-items: center">
      <section class="aboutContent">
        <div class="personalVirtualImage">
          <PersonalIamgeIcon />
        </div>
        <div class="aboutTitle">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
        </div>
        <div class="aboutMe">
          <AboutMeButton text="Learn More" @click="handleClick" />
        </div>
        <div class="playCar">
          <span class="car">
            <el-icon><Van /></el-icon>
          </span>
          <PlayCar />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import AboutMeButton from "@/components/about/AboutMeButton.vue";
import AboutNav from "@/components/about/AboutNav.vue";
import PlayCar from "@/components/about/PlayCar.vue";
import PersonalIamgeIcon from "@/components/about/PersonalIamgeIcon.vue";
import { Van } from "@element-plus/icons-vue";
import { ElIcon, ElMessage } from "element-plus";
export default {
  name: "AboutContact",
  data() {
    return {
      title: "Hi! 👋",
      description: "Welcome to my personal website.",
    };
  },
  methods: {
    handleClick() {
      ElMessage({
        message: "Hello, I am Ablecisi.",
        grouping: true,
        type: "info",
      });
    },
  },
  components: {
    AboutNav,
    AboutMeButton,
    PlayCar,
    Van,
    ElIcon,
    PersonalIamgeIcon,
  },
};
</script>

<style lang="scss">
:root {
  --about-nav-padding: 20vw;
}
.about {
  background-color: #fff;
  .aboutTitle {
    text-align: center;
    margin-top: 10px;
    color: #000;
    h1 {
      margin: 0;
      margin-top: 10px;
      width: 100%;
      font-size: 3.75rem;
      font-family: "Microsoft YaHei";
    }
    p {
      margin: 0;
      margin-top: 20px;
      width: 100%;
      font-size: 1.5rem;
      font-weight: bold;
      font-family: "Microsoft YaHei";
    }
  }
  .aboutContent {
    box-sizing: border-box;
    width: 60%;
    height: 100vh;
    .personalVirtualImage {
      margin: 50px 0 0 0;
      height: 300px;
      width: 50%;
    }
    .aboutMe {
      margin: 150px 0 auto;
      display: flex;
      justify-content: center;
      width: 100%;
      display: flex;
      cursor: pointer;
    }
    .playCar {
      position: absolute;
      margin: 10px;
      bottom: 0;
      right: 0;
      .car {
        width: 30px;
        height: 30px;
      }
    }
  }
}
.el-message__content {
  font-family: "Mukta";
}
</style>
