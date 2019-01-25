<template>
  <div>
    <Logo color="dark"/>
    <section class="studentLogin">
      <div class="container">
        <div class="row">
          <h1 class="page__heading col-md-12 col">Forget Password</h1>
          <div class="row">
            <transition name="slide">
              <div class="error-message" :class="{'bg-danger': error,}" v-if="error">{{msg}}</div>
            </transition>
            <transition name="slide">
              <div class="success-message" :class="{'bg-success': success,}" v-if="success">{{msg}}</div>
            </transition>
          </div>
          <div class="row">
            <form class="reset col" v-if="!success">
              <div class="form-group">
                <input type="email" v-model="email" placeholder="Enter your Email to Reset">
              </div>
              <button class="btn submit" @click.prevent="onSubmit">
                <i class="material-icons md-48">keyboard_arrow_right</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Logo from "../components/Logo";

import axios from "axios";

export default {
  data() {
    return {
      email: "",
      success: false,
      msg: "",
      error: false
    };
  },
  components: {
    Logo
  },
  methods: {
    onSubmit() {
      axios
        .post("/student/forget", {
          email: this.email
        })
        .then(res => {
          if (res.status == 200) {
            this.msg = "Reset Link Sent.";
            setTimeout(() => {
              this.$router.push({ name: "student Login" });
            }, 10000);
          }
        })
        .catch(e => {
          this.error = true;
          this.success = false;
          this.msg = "No Email Found or Network Issue";
        });
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
  color: #000;
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

.reset {
  margin-top: 25rem;
  margin-left: 12rem;
}
input {
  display: block;
  // margin: 3rem -50rem;
  width: 60rem;
  border-radius: 5rem;
  background-color: #fff;
  border: 1px solid rgb(187, 187, 187);
  font-size: 2rem;
  padding: 1rem;
  color: rgb(179, 179, 179);
}

.submit {
  background-color: #00f;
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
