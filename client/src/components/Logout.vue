<template>
  <div>
    <button class="logout" @click.prevent="logout">Logout</button>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Logout",
  methods: {
    logout() {
      axios.get("/student/logout").then(res => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.logout {
  width: 15rem;
  font-size: 2rem;
  padding: 1rem 0.8rem;
  position: absolute;
  top: 5%;
  right: 5%;
  border: none;
  border-radius: 40rem;
  background-color: #2c68ef;
  cursor: pointer;
  color: #fff;
  z-index: 9999;
}

.logout:active {
  background-color: #3b71ee;
}
</style>
