<template>
  <div id="app">
    <router-view v-if="desktop"/>
    <div v-else>
      <h1 style="text-align: center; margin: 10rem 0; font-size= 3.2rem">Not Available</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desktop: true
    };
  },
  methods: {},
  created() {
    if (window.screen.width <= 1024) {
      this.desktop = false;
    }
  }
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
.router-link-active {
  color: #000;
}

// !Media Queries
@media only screen and (max-width: 1366px) {
  html {
    font-size: 42.5% !important;
  }
}
@media only screen and (max-width: 1024px) {
  html {
    font-size: 32.5% !important;
  }
}
</style>
