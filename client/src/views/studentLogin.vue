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
            <form v-else enctype="multipart/form-data" @submit.prevent="signup">
              <div class="form-group">
                <label for="file">
                  <span v-if="profilePic">{{profilePic.name}}</span>
                  <span v-else>Upload a Profile Pic. CLick Here</span>
                </label>
                <input
                  type="file"
                  id="file"
                  ref="myFile"
                  @change="previewFile"
                  accept="image/x-png, image/gif, image/jpeg"
                >
              </div>
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
                  placeholder="Enter your Password"
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
                <input type="tel" v-model="phone" placeholder="Enter your Phone No." required>
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

              <button class="btn submit" style="margin-left: 19rem">
                <i class="material-icons md-48">keyboard_arrow_right</i>
              </button>
            </form>
          </div>
          <div class="col-sm form__switcher" @click="formChanger">{{formMsg}}</div>
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
      profilePic: "",
      username: "",
      password: "",
      email: "",
      name: "",
      age: null,
      phone: "",
      gender: "Select Gender",
      login__form: true,
      msg: "",
      error: false,
      success: false,
      emailSent: 0,
      formMsg: "Don't Have an account? Join US."
    };
  },
  components: {
    Logo,
    GoogleButton
  },
  methods: {
    formChanger() {
      this.login__form = !this.login__form;
      if (this.login__form) {
        this.formMsg = "Don't Have an account? Join US.";
      } else {
        this.formMsg = "Already Have an account. Login!";
      }
    },
    removeError() {
      setTimeout(() => {
        this.msg = "";
        this.error = false;
      }, 5000);
    },
    createError(msg) {
      this.error = true;
      this.success = false;
      this.msg = msg;
      this.removeError();
    },
    createSuccess(msg) {
      this.success = true;
      this.error = false;
      this.msg = msg;
    },

    sendEmail() {
      let formData = new FormData();
      formData.append("file", this.profilePic);
      formData.append("username", this.username);
      formData.append("password", this.password);
      formData.append("name", this.name);
      formData.append("email", this.email);
      formData.append("phone", this.phone);
      formData.append("age", this.age);
      formData.append("gender", this.gender);

      axios
        .post("/student/verify", formData)
        .then(res => {
          this.createSuccess("Verification Email Sent");
          return true;
        })
        .catch(e => {
          console.log(e);
          this.createError("Error sending verification mail");
        });
    },

    validator() {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      this.age = parseInt(this.age);
      if (reg.test(this.email)) {
        if (this.password.length >= 6) {
          if (typeof this.age == "number" && this.age > 0 && this.age < 50) {
            if (typeof this.name == "string") {
              if (this.phone.length <= 13) {
                if (
                  this.profilePic.size <= 1600000 &&
                  this.profilePic.size >= 50
                ) {
                  return true;
                } else {
                  this.createError("Profile Pic size must be less than 1.5MB");
                }
              } else {
                this.createError(
                  "Enter Phone no. of 10 Digits with country code"
                );
              }
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
          .then(res => {
            this.$router.push("/student/dashboard");
          })
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
        this.gender &&
        this.phone
      ) {
        if (this.validator()) {
          if (this.emailSent <= 3) {
            this.emailSent += 1;
            this.sendEmail();
          } else {
            this.createError("Too many email sending attempts");
          }
        }
      } else {
        this.createError("Please fill all the fields");
      }
    },
    previewFile() {
      this.profilePic = this.$refs.myFile.files[0];
    }
  }
};
</script> 


<style lang="scss" scoped>
.studentLogin {
  background-image: url("../assets/studentSignup.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  width: 100%;
  height: 100vh;
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
  margin-left: -5rem;
}

.error-message,
.success-message {
  margin-top: 2rem;
  font-size: 2rem;
  background-color: #0f0;
  margin-left: -20rem;
  width: 40rem;
  text-align: center;
  color: #fff;
  border-radius: 10rem;
}

input,
select {
  display: block;
  margin: 2rem -25rem;
  width: 50rem;
  border-radius: 5rem;
  background-color: #fff;
  border: 1px solid rgb(187, 187, 187);
  font-size: 2rem;
  padding: 1rem;
  color: rgb(179, 179, 179);
}

label {
  padding: 5rem;
  width: 50rem;
  border: 4px dashed #eee;
  font-size: 2rem;
  margin: 5rem -25rem -5rem -25rem;
  text-align: center;
}

input[type="file"] {
  visibility: hidden;
}

.form__switcher {
  font-size: 2.5rem;
  margin: 45rem -25rem 45rem 5rem;
  width: 50rem;
  cursor: pointer;
  color: #fff;
}

.submit {
  background-color: #00f;
  margin-left: 29rem;
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
