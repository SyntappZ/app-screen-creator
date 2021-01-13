<template>
  <div class="welcome">
    <div class="background">
      <img class="background-image" :src="image" alt="mountains-image" />
      <Title titleText="shotties" />
     
      <slot />
    </div>
  </div>
</template>

<script>
import backgroundImage from "../assets/welcome-image.jpg";
import Title from './Title.vue';

export default {
  components: {Title},
  data() {
    return {
      image: backgroundImage,
     

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
  background: var(--main);
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


@media(max-width: 1024px) {
  .subtext, .icon  {
    font-size: 14px;
  }

}
@media (max-width:600px)  {
 
}
</style>