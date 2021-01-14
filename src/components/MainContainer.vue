<template>
  <div class="main-container">
    <h1>{{ currentScreenType }}</h1>
    <DropImages />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DropImages from './DropImages.vue'
export default {
  
  components: {
   
    DropImages
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(['currentScreenType'])
    //   chosenColor() {
    //     const color = () => {
    //       switch (this.currentScreen) {
    //         case "mobile":
    //           return "green";
    //         case "tablet":
    //           return "red";
    //         case "desktop":
    //           return "blue";
    //         case "multiple":
    //           return "teal";
    //         default:
    //           "green";
    //       }
    //     };
    //     return color()
    //   },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}
.main-container {
  min-height: 100vh;
  text-align: center;
  padding: 50px;
  background-color: var(--primary-light);
}
</style>