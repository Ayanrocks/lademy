<template>
  <div class="logo">
    <router-link :class="color" to="/" exact>Lademy</router-link>
  </div>
</template>

<script>
export default {
  props: ["color"]
};
</script>


<style lang="scss" scoped>
.logo {
  position: absolute;
  top: 5%;
  left: 10%;
  transform: translate(-10%, -10%);
  font-size: 3.2rem !important;
  z-index: 99999;
  a {
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
}

.dark {
  color: #000 !important;
}

.white {
  color: #fff !important;
}
</style>
