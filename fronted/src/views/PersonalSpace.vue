<template>
  <div>
    <!-- <PersonalInfo/> -->
    <PersonalGame/>
  </div>
</template>

<script>
import PersonalGame from "@/components/personal/PersonalGame.vue";
// import PersonalInfo from "@/components/personal/game/PersonalInfo.vue";
export default {
  name: "PersonalSpace",
  components: {
    PersonalGame,
    // PersonalInfo,
  },
}
</script>

<style >

</style>