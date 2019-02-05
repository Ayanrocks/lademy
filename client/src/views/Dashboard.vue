<template>
  <div>
    <Logo color="dark"/>
    <SideBar :src="getData"/>
    <div class="container">
      <div class="row">{{currentUser}}</div>
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
    ...mapState(["profile"]),
    ...mapGetters(["getData"]),
    ...mapActions(["fetchData"])
  },
  components: {
    SideBar,
    Logo
  },
  mounted() {
    this.fetchData();
    this.currentUser = this.getData();
  }
};
</script>


<style lang="scss" scoped>
</style>
