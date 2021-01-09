<template>
  <div class="octagon" :style="{ backgroundColor: color }">
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.color);
  },
  props: ["color"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.octagon {
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  width: 16vw;
  height: 16vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5vw;
  position: absolute;
  top: 84vh;
  
}
</style>