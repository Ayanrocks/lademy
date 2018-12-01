<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600|Roboto:100,300,400,500,700');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', 'Poppins', sans-serif;
  text-rendering: optimizeLegibility;
  image-rendering: optimizeSpeed;

}

a, a:link, a:visited {
  text-decoration: none;
  color: #fff;
}

html {
  font-size: 62.5%;
}

section {
  height: 98vh;
}
</style>
