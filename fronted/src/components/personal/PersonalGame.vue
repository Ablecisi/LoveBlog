<template>
  <div>
    <div v-show="isPlay" class="playGame_playCat">
      <PlayCat />
    </div>
    <div v-if="!isPlay" class="playGame_playEmoji">
      <PlayEmoji />
    </div>
    <div class="changePlay">
      <button @click="changePlay">Play {{ playType }}</button>
    </div>
  </div>
</template>

<script>
import PlayCat from "@/components/personal/game/PlayCat.vue";
import PlayEmoji from "@/components/personal/game/PlayEmoji.vue";
export default {
  name: "PersonalGame",
  data() {
    return {
      isPlay: true,
      playType: "Cat",
    };
  },
  methods: {
    changePlay() {
      this.isPlay = !this.isPlay;
      this.playType = this.isPlay ? "Emoji" : "Cat";
    },
  },
  components: {
    PlayCat,
    PlayEmoji,
  },
};
</script>

<style lang="scss" scoped>
.changePlay {
  position: absolute;
  top: 0;
  right: 10px;
  
  button {
    border: none;
  }
}
.playGame_playCat {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6ecccc;
}

.playGame_playEmoji {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to top left, #a5045a, #ea6465);
}
</style>
