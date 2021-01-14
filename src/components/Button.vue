<template>
  <div
    class="button"
    @click="changeView"
    :style="{ backgroundColor: buttonBackground }"
  >
    <font-awesome-icon v-if="icon" class="icon" :icon="icon" />
    <p class="title">{{ title }}</p>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentView: this.$router.currentRoute,
    };
  },
  props: ["title", "icon"],
  methods: {
    changeView() {
      const link = `/home/${this.title}`;
      this.$router.push({ path: link });
    },
  },
  computed: {
    buttonBackground() {
      const currentView = this.currentView.name;
      return currentView === this.title ? "#f44292" : "#626ee3";
    },
  },
};
</script>

<style scoped>
.button {
  cursor: pointer;
  border-radius: 4px;
  padding: 0 40px;
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
  height: 50px;
  margin: 5px;
  transition: 0.5s ease;
  text-decoration: none;
}
.title {
  color: white;
  text-transform: capitalize;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
}
.icon {
  color: white;

  font-size: 26px;
  margin: 7px;
  transition: 0.3s;
}
</style>