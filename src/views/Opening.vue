<template>
  <div class="opening-page">
    <Welcome>
      <div class="button" @click="enterApp">
        <p class="subtext">enter app</p>
        <font-awesome-icon class="icon" icon="angle-down" />
      </div>
    </Welcome>
  </div>
</template>

<script>
import Welcome from "../components/Welcome.vue";

export default {
  name: "Opening",
  components: {
    Welcome,
  },
  data() {
    return {};
  },
  methods: {
    enterApp() {
      this.$router.push('Home')
    },
  },
};
</script>

<style scoped>
.button {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  transition: 0.3s;
  opacity: 0.5;
}


.subtext {
  text-align: center;
  font-size: 1vw;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding: 1rem;
  margin: 0;
  font-family: "Audiowide", cursive;
  border-bottom: dotted 2px white;
}
.icon {
  color: white;
  text-align: center;
  font-size: 1.5vw;
  margin: 7px;
  transition: .3s;
}


.button:hover {
  opacity: 1;
}
.button:hover .icon {
  transform: translateY(7px);
  
}
</style>
