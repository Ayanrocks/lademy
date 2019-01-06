<template>
  <div>
    <Logo color="dark"/>
    <section class="studentLogin">
      <div class="container">
        <div class="row">
          <h1 class="page__heading">Login</h1>
          <div class="login col-sm">
            <div class="error-message" v-if="error">{{error}}</div>
            <form>
              <div class="form-group">
                <input type="email" v-model="email" placeholder="Enter your Email">
                <input type="password" v-model="password" placeholder="Enter your password">
                <router-link
                  to="/student/forgot"
                  style="margin-left: -14rem; font-size: 1.9rem; color: #000"
                >Forget Password?</router-link>
                <button class="btn submit" @click.prevent="login">
                  <i class="material-icons md-48">keyboard_arrow_right</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Logo from "../components/Logo";
import GoogleButton from "../components/GoogleButton";

import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  components: {
    Logo,
    GoogleButton
  },
  methods: {
    login() {
      console.log(this.email, this.password);
      axios
        .post("/student/login", {
          username: this.email,
          password: this.password
        })
        .then(res => {
          console.log(res);
          this.error = res.body.status;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script> 


<style lang="scss" scoped>
.page__heading {
  margin-top: 25rem;
  letter-spacing: 2px;
  font-size: 4rem;
  font-weight: 300;
  color: #00f;
}

.login {
  margin-top: 30rem;
}

.error-message {
  margin-top: 7rem;
}

input {
  display: block;
  margin: 4rem -15rem;
  width: 60rem;
  height: 5rem;
  border-radius: 5rem;
  background-color: #fff;
  border: 1px solid rgb(187, 187, 187);
  font-size: 2.8rem;
  padding: 2rem;
  color: rgb(179, 179, 179);
}

.submit {
  background-color: #00f;
  margin-left: 38rem;
  padding: 1rem;
  border-radius: 100rem;
  width: 6rem;
  color: #fff;
  i {
    font-size: 3rem;
  }
}
</style>
