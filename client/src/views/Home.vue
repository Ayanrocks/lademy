<template>
  <div>
    <transition name="slide">
      <Navbar v-if="showNav"/>
    </transition>
    <div class="main">
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
            <div class="content">
              <div class="col s6">
                <h1 class="section_heading center-align">Any Time, Any Where</h1>
                <p
                  class="section_para center-align"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque itaque fugit, facilis culpa velit doloribus porro ex alias sed, atque pariatur perspiciatis. Eaque voluptatem quae suscipit aperiam, fuga molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div class="col s6 center-align">
                <img src="../assets/eduvector.jpg" alt="Education logo">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="feature2">
        <div class="container">
          <div class="row">
            <div class="content">
              <div class="col s6 center-align">
                <img src="../assets/statue.png" alt="Statue">
              </div>
              <div class="col s6">
                <h1 class="section_heading center-align">Tests Makes Us Better Learners</h1>
                <p
                  class="section_para center-align"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel blanditiis explicabo architecto, quis iste expedita dicta reprehenderit aliquid id enim est quaerat necessitatibus, magni, mollitia cum aliquam obcaecati nobis natus dignissimos reiciendis quidem?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="streams">
        <div class="container">
          <div class="row">
            <h2 class="section_heading center-align">We Cover Everything</h2>
            <div class="content">
              <div class="col s4">
                <div class="card">
                  <h1 class="card-title">Honours</h1>
                  <div class="card-background honours"></div>
                </div>
              </div>
              <div class="col s4">
                <div class="card">
                  <h1 class="card-title">Engineering</h1>
                  <div class="card-background engineering"></div>
                </div>
              </div>
              <div class="col s4">
                <div class="card">
                  <h1 class="card-title">Management</h1>
                  <div class="card-background management"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Navbar,
    Footer
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
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  height: 98vh;
  position: relative;
}

.home-cover {
  width: 100%;
}

.main {
  position: relative;
  // width: 100%;
  // margin-bottom: 75rem;
  // z-index: 1000;
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

.content {
  margin-top: 30rem;
  margin-bottom: -1rem;
}

.section_heading {
  margin-top: 5rem;
  color: rgb(117, 117, 117);
}

p.section_para {
  margin: 5rem;
  font-size: 2rem;
  color: rgb(156, 156, 156);
}

.feature2 {
  margin-top: -40rem;
  margin-bottom: -20rem;
}

.card {
  margin-top: -10rem;
  position: relative;
}

.card-title {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: 600;
  font-size: 2.6rem;
}

.card-background {
  background-blend-mode: hard-light;
  background-size: cover;
  height: 20rem;
  background-repeat: no-repeat;
  background-position: top;
}

.honours {
  background-image: linear-gradient(to right, #6ef3df, #2c68ef),
    url("../assets/honours.jpg");
}

.engineering {
  background-image: linear-gradient(to right, #6ef3df, #2c68ef),
    url("../assets/engineering.jpg");
}

.management {
  background-image: linear-gradient(to right, #6ef3df, #2c68ef),
    url("../assets/management.jpg");
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
