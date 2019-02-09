<template>
  <div>
    <Logo style="position: fixed" color="dark"/>
    <SideBar :src="currentUser.profilePic"/>
    <router-view></router-view>
    <Logout/>
  </div>
</template>


<script>
import Logo from "../components/Logo";
import SideBar from "../components/SideBar";
import Logout from "../components/Logout";

import { mapGetters, mapActions } from "vuex";

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
    Logo,
    Logout
  },
  async created() {
    await this.$store.dispatch("fetchData");
    this.currentUser = this.$store.getters.getProfile;
  }
};
</script>


<style lang="scss" scoped>
</style>
