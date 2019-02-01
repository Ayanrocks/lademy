<template>
  <div>
    <Logo color="dark"/>
    <SideBar src="getData"/>
    <div class="container">
      <div class="row"></div>
    </div>
  </div>
</template>


<script>
import Logo from "../components/Logo";
import SideBar from "../components/SideBar";

import { mapGetters, mapActions } from "vuex";

export default {
  methods: {},
  computed: {
    ...mapGetters(["getData"]),
    ...mapActions(["fetchData"])
  },
  components: {
    SideBar,
    Logo
  },
  created() {
    this.$store.actions.fetchData();
    console.log(this.$store);
  }
};
</script>


<style lang="scss" scoped>
</style>
