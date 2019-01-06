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
              <div class="error-message" :class="{'bg-success': !error,}" v-show="msg">{{msg}}</div>
            </transition>
            <form>
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
      username: "",
      password: "",
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
          this.msg = res.data.status;
          setTimeout(() => {
            this.msg = "";
          }, 4000);
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
  padding: 2rem;
  color: rgb(179, 179, 179);
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
