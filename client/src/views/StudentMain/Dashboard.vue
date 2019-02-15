<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="main">
          <div class="msg" v-if="msg">
            <p></p>
          </div>
          <div class="firstTime" v-if="firstTime">
            <h4>Aww! Looks like You haven't enrolled in anything. Browse our large list of courses</h4>
            <router-link to="/student/explore" tag="button">Browse Courses</router-link>
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
      msg: "",
      firstTime: true
    };
  },
  components: {},
  created() {
    
  },
};
</script>

<style lang="scss" scoped>
.firstTime {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #999;
  text-align: center;
  transform: translate(-20%, -50%);
  h4 {
    font-size: 2.5rem;
  }

  button {
    width: 20rem;
    font-size: 2rem;
    padding: 1rem 0.8rem;
    margin-top: 3rem;
    border: none;
    border-radius: 40rem;
    background-color: #29d8c9;
    cursor: pointer;
    color: #fff;
    z-index: 9999;
  }
}
</style>
