<template>
  <div>
    <Logo color="dark"/>
    <SideBar/>
    <div class="container">
      <div class="row"></div>
    </div>
  </div>
</template>


<script>
import Logo from "../components/Logo";
import SideBar from "../components/SideBar";
export default {
  components: {
    SideBar,
    Logo
  }
};
</script>


<style lang="scss" scoped>
</style>
