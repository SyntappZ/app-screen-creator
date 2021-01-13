<template>
  <h1 class="title">{{ titleText }}</h1>
   <p class="subtext">Create your own app store screenshots</p>
</template>

<script>
export default {
    props: ['titleText']
};
</script>

<style scoped>
.title {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding: 1rem;
  font-family: "Audiowide", cursive;
  position: relative;
  z-index: 1;
  font-size: 4vw;
  color: #ffffff;
  width: 30vw;
  margin: 1rem auto;
  border-bottom: dotted 2px white;
}

.subtext {
  text-align: center;
  font-size: 1vw;
  color: #ffffffb0;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin: 1rem auto;
  padding: 1rem;
  font-family: "Audiowide", cursive;
}

@media(max-width: 1024px) {
   .subtext  {
    font-size: 14px;
  }
  .title {
    font-size: 38px;
    width: 70%;
  }
}
@media (max-width:600px)  {
  .title { 
    font-size: 34px;
    width: 80%;
  }
}

</style>