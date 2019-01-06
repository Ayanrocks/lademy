<template>
  <div id="app">
    <!-- <div class="transition-bars">
      <div class="transition-bar"></div>
      <div class="transition-bar"></div>
      <div class="transition-bar"></div>
    </div>-->
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
var t1 = new TimelineMax();

export default {
  methods: {}
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600|Roboto:100,300,400,500,700");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", "Poppins", sans-serif;
  text-rendering: optimizeLegibility;
  image-rendering: optimizeSpeed;
}

a,
a:link,
a:visited {
  text-decoration: none;
  color: #fff;
}

html {
  font-size: 62.5% !important;
}

section {
  // position: relative;
  height: 98vh;
}

.main {
  margin-bottom: 70rem;
  z-index: 1;
  background-color: #fff;
}

.content {
  margin-top: 30rem;
  margin-bottom: -1rem;
}

.section_heading {
  margin-top: 5rem;
  color: rgb(117, 117, 117);
  font-size: 3.8rem;
  font-weight: normal;
}

.transition-bars {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 999;
  opacity: 0;
}

.transition-bar {
  background-color: #000;
  width: 100%;
  flex-grow: 3;
  transform: scaleX(1);
  transform-origin: left;
}
</style>
