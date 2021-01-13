<template>
  <div class="home">
    <div class="banner">
      <Title titleText="shotties" />
      <div class="button-wrap">
        <Button
          v-for="button in buttonList"
          :key="button.title"
          :title="button.title"
          :icon="button.icon"
          @click="chooseScreenType(button.title)"
          :screenType="screenType"
        />
      </div>
    </div>
    <MainContainer :currentScreen="screenType" />
  </div>
</template>

<script>
import Title from "../components/Title";
import MainContainer from "../components/MainContainer";
import Button from "../components/Button";
export default {
  name: "Home",
  components: {
    Title,
    MainContainer,
    Button,
  },
  data() {
    return {
      buttonList: [
        { title: "mobile", icon: "mobile-alt" },
        { title: "tablet", icon: "tablet-alt" },
        { title: "desktop", icon: "desktop" },
        { title: "multiple", icon: "border-all" },
      ],
      screenType: 'mobile'
    };
  },
  methods: {
    chooseScreenType(type) {
      this.screenType = type
    },
  },
 
};
</script>

<style scoped>
.home {
  background: white;
}
.banner {
  background: var(--main);
  padding: 15vh 20px 0 20px;
  text-align: center;
}
.button-wrap {
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 950px;
  flex-wrap: wrap;
  margin: auto;
}

/* .pink {
  color: rgba(255, 255, 255, 0.596);
  letter-spacing: 1px;
  font-size: 1rem;
  text-transform: uppercase;
} */
</style>
