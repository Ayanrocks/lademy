<template>
  <div class="container">
    <div class="row">
      <div class="profile">
        <div class="profile__pic">
          <!-- <img :src="currentUser.profilePic" alt="Profile Pic" height="400px" width="400px"> -->
        </div>
        <div class="profile__details">
          <h1 class="h2">{{currentUser.name}}</h1>
          <p class="profile__details__id">StudentID: {{currentUser.studentID}}</p>
          <p class="profile__details__email">Email: {{currentUser.email}}</p>
          <p class="profile__details__age">Age: {{currentUser.age}}</p>
          <p class="profile__details__phone">Phone: {{currentUser.phone}}</p>
          <p
            class="profile__details__stream"
          >Stream: {{currentUser.stream ? currentUser.stream : "No courses available yet"}}</p>
        </div>
        <div>
          <div class="profile__buttons">
            <button class="btn btn-white">Edit Profile</button>
          </div>
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
.container {
  margin-left: 50rem;
}
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
      font-weight: 300;
      font-family: "Poppins";
    }
    &__id {
      margin-top: 2rem;
      font-size: 1.6rem;
      color: #999;
    }
  }

  p {
    font-size: 2.5rem;
    color: #999;
  }
}
</style>
