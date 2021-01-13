<template>
<transition name="fade">
  <router-view/>
</transition>
  
</template>

<style>
:root {
  --main: #02203c;
  --primary: #626ee3;
  --secondary: #f44292;
}
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&family=Audiowide&family=Goldman&family=Yeon+Sung&display=swap");
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}




</style>
