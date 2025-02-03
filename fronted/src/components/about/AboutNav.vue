<template>
  <div class="aboutNav">
    <nav class="nav">
      <router-link :to="links" class="navItem">Home</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AboutNav",
  props: {
    links: {
      type: String,
      default: "/about",
    },
  },
};
</script>

<style lang="scss">
.aboutNav {
  .nav {
    padding-left: var(--about-nav-padding);
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
  }
}
</style>
