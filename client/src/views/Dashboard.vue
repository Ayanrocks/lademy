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

import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      currentUser: {}
    };
  },
  methods: {
    ...mapGetters(["getProfile"]),
    ...mapActions(["fetchData"])
  },
  components: {
    SideBar,
    Logo
  },
  async created() {
    await this.$store.dispatch("fetchData");
    this.currentUser = this.$store.getters.getProfile;
  }
};
</script>


<style lang="scss" scoped>
</style>
