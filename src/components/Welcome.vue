<template>
  <div class="welcome">
    <div class="background">
      <img class="background-image" :src="image" alt="mountains-image" />
      <h1 class="title">{{ title }}</h1>
      <p class="subtext">Create your own app store screenshots</p>
     <slot />
    </div>
  </div>
</template>

<script>
import backgroundImage from "../assets/welcome-image.jpg";

export default {
  components: {},
  data() {
    return {
      image: backgroundImage,
      title: "shotties",
    };
  },
};
</script>

<style scoped>
.welcome {
  width: 100%;
  height: 100vh;
}

.background {
  padding-top: 15vh;
  width: 100%;
  height: 100vh;
  position: relative;
  background: #042c33;
}
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  opacity: 0.5;
}

.title {
  text-align: center;
  font-size: 4vw;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 1rem auto;
  padding: 1rem;
  width: 30vw;
  font-family: "Audiowide", cursive;
  border-bottom: dotted 2px white;
  position: relative;
  z-index: 1;
}
.subtext {
  text-align: center;
  font-size: 1vw;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 1rem auto;
  padding: 1rem;
  font-family: "Audiowide", cursive;
}
</style>