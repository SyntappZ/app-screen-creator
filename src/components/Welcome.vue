<template>
  <div class="welcome">
    <img class="background-image" :src="image2" alt="mountains-image" />

    <h1 class="title">{{ title }}</h1>
    <div class="screens-wrap">
      <img class="mobile-screens" :src="screens" alt="screens" />
    </div>
  </div>
</template>

<script>
import backgroundImage from "../assets/welcome-image.jpg";
import backgroundImage2 from "../assets/welcome-image-3.jpg";
import screens from "../assets/mobilescreens.png";

export default {
  data() {
    return {
      image: backgroundImage,
      image2: backgroundImage2,
      screens: screens,
      title: "shotties",
    };
  },
};
</script>

<style scoped>
.welcome {
  width: 100%;
  height: 100vh;
  position: relative;

  padding-top: 15vh;
}
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}

.title {
  text-align: center;
  font-size: 5rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 1rem auto;
  padding: 1rem;
  width: 40rem;
  font-family: "Audiowide", cursive;
  border-bottom: dotted 2px white;
}

.screens-wrap {

    position: absolute;
    bottom: 0;
    background: rgb(255, 255, 255);
    width: 100%;
    height: 40vh;
    padding: 1rem 20rem;
}
.mobile-screens {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}
</style>