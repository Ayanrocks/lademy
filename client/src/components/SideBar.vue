<template>
  <div>
    <div class="sidebar">
      <div class>
        <div class="sidebar__profilePic">
          <img :src="profilePic" alt="Profile Pic">
        </div>
        <div class="sidebar__menu">
          <ul class="menu__list">
            <li class="menu__list--item">
              <router-link tag="a" to="/student/dashboard">Dashboard</router-link>
            </li>
            <li class="menu__list--item">
              <router-link tag="a" to="/student/courses">My Courses</router-link>
            </li>
            <li class="menu__list--item">
              <router-link tag="a" to="/student/explore">Explore</router-link>
            </li>
            <li class="menu__list--item">
              <router-link tag="a" to="/student/community">Community</router-link>
            </li>
            <li class="menu__list--item">
              <router-link tag="a" to="/student/profile">Profile</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mapGetters from "vuex";

export default {
  data() {
    return {
      profilePic: ""
    };
  },
  methods: {
    ...mapGetters["getProfilePic"]
  },
  created() {
    this.profilePic = this.$store.getters.getProfilePic;
  }
};
</script>


<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  background-color: rgb(249, 249, 249);
  width: 50rem;
  padding: 5rem;
  position: fixed;

  &__profilePic {
    text-align: center;
    margin: 15rem 0 -25rem 0;
    img {
      border-radius: 40rem;
      height: 20rem;
      width: 20rem;
    }
  }

  &__menu {
    margin: 30rem 0;
    .menu__list {
      list-style: none;
      font-size: 2.5rem;
      text-align: center;
      &--item {
        a {
          margin: 2rem 0;
          display: inline-block;
          color: rgb(116, 116, 116);
          text-decoration: none;
          transition: all 0.2s ease-in-out;
        }

        a:hover {
          color: #000;
        }
      }
    }
  }
}
</style>
