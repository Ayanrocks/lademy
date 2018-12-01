<template>
  <div>
    <transition name="slide">
      <Navbar v-if="showNav"/>
    </transition>
    <section class="home">
      <img class="home-cover" src="../assets/home_cover.png" alt="Cover">
      <div>
        <div class="logo brand-logo">
          <router-link to="/" exact>Lademy</router-link>
        </div>
        <div class="search right">
          <i class="material-icons medium">search</i>
        </div>
      </div>
      <div class="container">
        <div class="heading">
          <h2>Never Stop Learning, Because Life Never Stops Teaching.</h2>
        </div>
        <div class="buttons">
          <div class="student">
            <router-link to="/student">Student</router-link>
          </div>
          <div class="teacher">
            <router-link to="/teacher">Teacher</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="feature1">
      <div class="container">
        <div class="row">
          <div class="col s6"></div>
          <div class="col s6"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
export default {
  name: "Home",
  components: {
    Navbar
  },
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    onScroll() {
      if (window.scrollY > 512) {
        this.showNav = true;
      } else {
        this.showNav = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  height: 98vh;
}

.home-cover {
  width: 100%;
}

.logo {
  color: #fff;
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(-10%, -10%);
  font-size: 3.2rem !important;
  a {
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }
}

.search {
  cursor: pointer;
  font-size: 3.2rem !important;
  position: absolute;
  top: 10%;
  left: 90%;
  transform: translate(-90%, -10%);
  color: #fff;
}

.heading {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;

  h2 {
    font-size: 2.7rem !important;
  }
}

.buttons {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 50rem;
}

.student,
.teacher {
  cursor: pointer;
  font-size: 2.9rem;
  padding: 0.5rem 1.2rem;
  border-radius: 90px;
  width: 25rem;
  text-align: center;
  margin: 2rem;
}

.student {
  background-image: linear-gradient(to right, #6ef3df, #2c68ef);
}

.teacher {
  border: 1px solid #fff;
}

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
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(1);
  }
}

@keyframes slideUp {
  from {
    opacity: 1;
    transform: translateY(1);
  }
  to {
    opacity: 0;
    transform: translateY(0);
  }
}
</style>
