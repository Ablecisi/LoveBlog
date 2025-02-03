<template>
  <div class="carbutton">
    <button class="order" @click="handleClick">
      <span class="default">Let's play truck!</span>
      <span class="success">
        Perfect!
        <svg viewbox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <div class="box"></div>
      <div class="truck">
        <div class="back"></div>
        <div class="front">
          <div class="window"></div>
        </div>
        <div class="light top"></div>
        <div class="light bottom"></div>
      </div>
      <div class="lines"></div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAnimating: false,
    };
  },
  methods: {
    handleClick(event) {
      const button = event.currentTarget;

      if (!this.isAnimating) {
        this.isAnimating = true;
        button.classList.add("animate");
        setTimeout(() => {
          button.classList.remove("animate");
          this.isAnimating = false;
        }, 10000);
      }
    },
  },
};
</script>

<style lang="css" scoped>
@import "../../style/dist/aboutPlay.css";

.default, .success {
  font-family: "Mukta";
}
</style>
