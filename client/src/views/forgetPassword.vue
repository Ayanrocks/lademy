<template>
  <div>
    <Logo color="dark"/>
    <section class="studentLogin">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="page__heading">Forget Password</h1>
          </div>
          <transition name="slide">
            <div class="errors col-md-12" v-if="error">
              <div class="error-message" :class="{'bg-danger': error,}" v-if="error">{{msg}}</div>
            </div>
          </transition>

          <transition name="slide">
            <div class="col-md-12 errors">
              <div class="success-message" :class="{'bg-success': success,}" v-if="success">{{msg}}</div>
            </div>
          </transition>
          <div class="reset col-md-12">
            <form v-if="!success">
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
            this.success = true;
            this.msg = "Reset Link Sent.";
            setTimeout(() => {
              this.$router.push({ name: "student Login" });
            }, 10000);
          }
        })
        .catch(e => {
          this.error = true;
          this.success = false;
          this.msg = "Either No Email Found or Network Issue";
          console.log(e);
        });
    }
  }
};
</script>


<style lang="scss" scoped>
.page__heading {
  margin-top: 15rem;
  letter-spacing: 2px;
  font-size: 4rem;
  font-weight: 300;
  color: #000;
}

.error-message,
.success-message {
  font-size: 2rem;
  background-color: #0f0;
  width: 50rem;
  text-align: center;
  color: #fff;
  border-radius: 10rem;
}

.errors {
  margin: 5rem auto 0 4rem;
}

.reset {
  margin-top: 1rem;
}
input {
  display: block;
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
