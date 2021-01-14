<template>
<div :style="{maxWidth: imageWidth}">
  <img
    @load="checkDimensions(`ref-${index}`)"
    :ref="`ref-${index}`"
    class="img"
    :src="image"
  />
</div>

</template>

<script>
export default {
  props: ["image", "index"],
  data() {
    return {
      isDesktop: false,
    };
  },
  methods: {
    checkDimensions(id) {
      const width = this.$refs[id].width;
      const height = this.$refs[id].height;
      const isDesktop = width >= height
      this.isDesktop = isDesktop
    },
  },
  computed: {
      imageWidth() {
          return this.isDesktop ? '350px' : '150px'
      }
  }
};
</script>

<style scoped>
.img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 5px;
}
</style>