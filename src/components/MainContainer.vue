<template>
  <div class="main-container">
    <h1>{{ currentScreenType }}</h1>
    <ImagePreviewContainer />
    <DropImages />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DropImages from './DropImages.vue'
import ImagePreviewContainer from './ImagePreviewContainer'
export default {
  
  components: {
   ImagePreviewContainer,
    DropImages
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(['currentScreenType'])
  
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
  background-color: white;
}
</style>