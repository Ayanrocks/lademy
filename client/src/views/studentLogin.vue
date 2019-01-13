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
            <transition name="slide">
              <div class="success-message" :class="{'bg-success': success,}" v-if="success">{{msg}}</div>
            </transition>
            <form v-if="login__form">
              <div class="form-group">
                <input type="username" v-model="login_username" placeholder="Enter your Username">
              </div>
              <div class="form-group">
                <input type="password" v-model="login_password" placeholder="Enter your password">
              </div>
              <router-link
                to="/student/forgot"
                style="margin-left: -24rem; font-size: 1.9rem; color: #000"
              >Forget Password?</router-link>
              <button class="btn submit" @click.prevent="login">
                <i class="material-icons md-48">keyboard_arrow_right</i>
              </button>
            </form>
            <form v-else>
              <div class="form-group">
                <input
                  type="username"
                  v-model="username"
                  placeholder="Enter your Username"
                  required
                >
              </div>
              <div class="form-group">
                <input
                  type="password"
                  v-model="password"
                  placeholder="Enter your password"
                  required
                >
              </div>
              <div class="form-group">
                <input type="email" v-model="email" placeholder="Enter you Email">
              </div>
              <div class="form-group">
                <input type="text" v-model="name" placeholder="Enter your Name" required>
              </div>
              <div class="form-group">
                <input type="number" v-model="age" placeholder="Enter your age" required>
              </div>
              <div class="form-group">
                <select name="gender" v-model="gender" class="form-group" required>
                  <option selected disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <button class="btn submit" style="margin-left: 29rem" @click.prevent="signup">
                <i class="material-icons md-48">keyboard_arrow_right</i>
              </button>
            </form>
          </div>
          <div
            class="col-sm form__switcher"
            @click="login__form = !login__form"
          >Don't Have an account? Join US.</div>
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
      login_username: "",
      login_password: "",
      username: "",
      password: "",
      email: "",
      name: "",
      age: null,
      gender: "Select Gender",
      login__form: true,
      msg: "",
      error: false,
      success: false,
      emailSent: 0
    };
  },
  components: {
    Logo,
    GoogleButton
  },
  methods: {
    removeError() {
      setTimeout(() => {
        this.msg = "";
        this.error = false;
      }, 5000);
    },
    createError(msg) {
      this.error = true;
      this.msg = msg;
      this.removeError();
    },
    createSuccess(msg) {
      (this.success = true), (this.msg = msg);
    },
    emailVerify() {
      setInterval(() => {
        axios.get("/student/verify").then(res => {
          if (res.body.verify) {
            this.createSuccess("Email Verified");
          }
        });
      }, 5000);
    },
    validator() {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      this.age = parseInt(this.age);
      if (reg.test(this.email)) {
        if (this.password.length >= 6) {
          if (typeof this.age == "number" && this.age > 0 && this.age < 50) {
            if (typeof this.name == "string") {
              return true;
            } else {
              this.createError("Please enter a valid name with no numbers");
            }
          } else {
            this.createError("Please enter a valid age.");
          }
        } else {
          this.createError(
            "Please enter a strong password with more than six characters"
          );
        }
      } else {
        this.createError("Please enter a valid email");
      }
    },
    login() {
      if (this.username && this.password) {
        axios
          .post("/student/login", {
            username: this.username,
            password: this.password
          })
          .then(res => {})
          .catch(err => {
            console.log(err);
            this.createError("Unauthorized");
          });
      } else {
        this.createError("Please enter Username/Password");
      }
    },
    signup() {
      if (
        this.username &&
        this.password &&
        this.name &&
        this.age &&
        this.gender
      ) {
        if (this.validator()) {
          if (this.emailSent <= 3) {
            axios
              .post("/student/verify", {
                email: this.email,
                name: this.name
              })
              .then(res => {
                this.createSuccess("Verification Email Sent");
                this.emailVerify();
              })
              .catch(e => {
                this.createError("Unable to send mail. Server Error");
                console.log(e);
              });
          } else {
            this.createError("Too many email sending attempts");
          }
        }
      } else {
        this.createError("Please fill all the fields");
      }
    }
  }
};
</script> 


<style lang="scss" scoped>
* {
  height: 100%;
}
.page__heading {
  margin-top: 15rem;
  letter-spacing: 2px;
  font-size: 4rem;
  font-weight: 300;
  color: #00f;
}

.login {
  margin-top: 20rem;
  margin-left: 12rem;
}

.error-message,
.success-message {
  margin-top: 2rem;
  font-size: 2rem;
  background-color: #0f0;
  margin-left: -20rem;
  width: 50rem;
  text-align: center;
  color: #fff;
  border-radius: 10rem;
}

input,
select {
  display: block;
  margin: 3rem -25rem;
  width: 60rem;
  border-radius: 5rem;
  background-color: #fff;
  border: 1px solid rgb(187, 187, 187);
  font-size: 2rem;
  padding: 1rem;
  color: rgb(179, 179, 179);
}

.form__switcher {
  font-size: 2.8rem;
  margin: 45rem 0 45rem 5rem;
  width: 50rem;
  cursor: pointer;
}

.submit {
  background-color: #00f;
  margin-left: 39rem;
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
    height: 3rem;
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    height: 3rem;
  }
  to {
    opacity: 0;
    height: 0;
  }
}
</style>
