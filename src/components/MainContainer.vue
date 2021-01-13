<template>
  <div class="main-container" :style="{ backgroundColor: chosenColor }">
      <h1>{{ currentScreen }}</h1>
  </div>
</template>

<script>
export default {
  props: ["currentScreen"],
  computed: {
    chosenColor() {
      const color = () => {
        switch (this.currentScreen) {
          case "mobile":
            return "green";
          case "tablet":
            return "red";
          case "desktop":
            return "blue";
          case "multiple":
            return "teal";
          default:
            "green";
        }
      };
      return color()
    },
  },
};
</script>

<style scoped>
 * {
     margin: 0;
 }
.main-container {
  height: 100vh;
  text-align: center;
  color: white;
}
</style>