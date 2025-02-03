<template>
  <div class="playCat">
    <div id="world" />

    <div id="credits">
      <p>
        <a href="/" target="_self">Love_Blog</a> |
        <a href="/" target="_self">My Contact</a>
        | <a href="/" target="_self">Happy Every Day</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayCat",
  methods: {
    // 刚进页面刷新页面
    handleResize() {
      window.location.reload();
    },
  },
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:800);
.playCat {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #6ecccc;

  #world {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #6ecccc;
    overflow: hidden;
  }

  #credits {
    position: absolute;
    width: 100%;
    margin: auto;
    bottom: 0;
    margin-bottom: 20px;
    font-family: "Open Sans", sans-serif;
    color: #328685;
    font-size: 0.7em;
    text-transform: uppercase;
    text-align: center;
  }
  #credits a {
    color: #328685;
  }

  #credits a:hover {
    color: #630d15;
  }
}
</style>
