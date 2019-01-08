<template>
  <div>
    <Logo color="dark"/>
    <section class="studentLogin">
      <div class="container">
        <div class="row">
          <h1 class="page__heading">Login</h1>
          <div class="login col-sm">
            <transition name="slide">
              <div class="error-message" :class="{'bg-danger': error,}" v-if="error">{{msg}}</div>
            </transition>
            <form v-if="login">
              <div class="form-group">
                <input type="username" v-model="username" placeholder="Enter your Username">
                <input type="password" v-model="password" placeholder="Enter your password">
                <router-link
                  to="/student/forgot"
                  style="margin-left: -24rem; font-size: 1.9rem; color: #000"
                >Forget Password?</router-link>
                <button class="btn submit" @click.prevent="login">
                  <i class="material-icons md-48">keyboard_arrow_right</i>
                </button>
              </div>
            </form>
            <form v-else>
              <div class="form-group">
                <input
                  type="username"
                  v-model="username"
                  placeholder="Enter your Username"
                  required
                >
                <input
                  type="password"
                  v-model="password"
                  placeholder="Enter your password"
                  required
                >
                <input type="text" v-model="name" placeholder="Enter your Name" required>
                <input type="number" v-model="age" placeholder="Enter your age" required>
                <select name="gender" id="gender" class="form-group" required>
                  <option selected disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                
                <button class="btn submit" @click.prevent="signup">
                  <i class="material-icons md-48">keyboard_arrow_right</i>
                </button>
              </div>
            </form>
          </div>
          <div class="col-sm form__switcher" @click="login = !login">Don't Have an account? Join US.</div>
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
      username: "",
      password: "",
      name: "",
      age: "",
      login: true,
      msg: "",
      error: false
    };
  },
  components: {
    Logo,
    GoogleButton
  },
  methods: {
    login() {
      console.log(this.username, this.password);
      axios
        .post("/student/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          this.error = true;
          this.msg = "Unauthorized";
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
  margin-left: 12rem;
}

.error-message {
  margin-top: 2rem;
  font-size: 4rem;
  background-color: #0f0;
  margin-left: -20rem;
  width: 50rem;
  text-align: center;
  color: #fff;
  border-radius: 10rem;
}

input {
  display: block;
  margin: 4rem -25rem;
  width: 60rem;
  height: 5rem;
  border-radius: 5rem;
  background-color: #fff;
  border: 1px solid rgb(187, 187, 187);
  font-size: 2.8rem;
  padding: 1rem;
  color: rgb(179, 179, 179);
}

.form__switcher {
  font-size: 3rem;
  margin-top: 10rem;
  width: 50rem;
}

.submit {
  background-color: #00f;
  margin-left: 37.5rem;
  padding: 1rem;
  border-radius: 100rem;
  width: 6rem;
  color: #fff;
  i {
    font-size: 3rem;
  }
}

//transitions

.slide-enter {
  opacity: 0;
  transform-origin: top;
}

.slide-enter-active {
  animation: slideDn 0.5s forwards;
  transform-origin: top;
}

.slide-leave {
  opacity: 0;
}
.slide-leave-active {
  animation: slideUp 0.5s forwards;
}

@keyframes slideDn {
  from {
    opacity: 0;
    height: 0;
  }
  to {
    opacity: 1;
    height: 6rem;
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    height: 6rem;
  }
  to {
    opacity: 0;
    height: 0;
  }
}
</style>
