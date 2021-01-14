<template>
  <div class="image-preview-container">
    <div
      class="image-wrap"
      v-for="(image, index) in currentImages"
      :key="image"
    >
      <PreviewImage :index="index" :image="image" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PreviewImage from "./PreviewImage";
export default {
  components: {
    PreviewImage,
  },
  computed: {
    ...mapGetters("imageStore", ["currentImages"]),
  },
 
};
</script>

<style scoped>
.image-preview-container {
  background: #e6e6e6;
  min-height: 20vh;
  margin: 50px 0;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.image-wrap {
  margin: 10px;
}
</style>