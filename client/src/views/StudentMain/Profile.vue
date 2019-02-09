<template>
  <div class="container">
    <div class="row">
      <div class="profile">
        <div class="profile__pic">
          <img :src="currentUser.profilePic" alt="Profile Pic" height="400px" width="400px">
        </div>
        <div class="profile__details">
          <h1 class="h2">{{currentUser.name}}</h1>
          <p class="profile__details__id">{{currentUser.studentID}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentUser: {}
    };
  },
  async created() {
    await this.$store.dispatch("fetchData");
    this.currentUser = this.$store.getters.getProfile;
  }
};
</script>


<style lang="scss" scoped>
.profile {
  &__pic {
    position: absolute;
    top: 10%;
    left: 50%;
    img {
      border-radius: 40rem;
    }
  }

  &__details {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    h1 {
      margin-top: 5rem;
      font-size: 6rem;
      font-style: italic;
    }
    &__id {
      margin-top: 2rem;
      font-size: 1.6rem;
      color: #999;
    }
  }
}
</style>
