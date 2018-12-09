<template>
  <div>
    <transition name="slide">
      <Navbar v-if="showNav"/>
    </transition>
    <div class="logo">
      <router-link to="/" exact>Lademy.</router-link>
    </div>
    <div class="main">
      <section class="aboutus">
        <div class="container">
          <div class="row">
            <div class="heading">
              <h1>We Are Lademy.</h1>
            </div>
            <div
              class="desc"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore velit dolore illum eaque perferendis amet placeat nemo mollitia, nesciunt sapiente minus numquam tempora doloribus ad esse dolores quibusdam dolorem. Animi quam veritatis omnis possimus officiis est delectus similique veniam illum odio. Quidem reprehenderit sequi sint, ex itaque nulla veritatis. Sint corporis dignissimos voluptatem, vitae maxime porro quaerat provident? Libero nobis architecto maiores incidunt amet magnam voluptatem distinctio consectetur corporis. Vitae cupiditate sed iusto! Delectus facilis illum veniam quisquam magni aspernatur eius explicabo, quibusdam laboriosam necessitatibus! Ducimus atque cupiditate vero, eaque numquam ab quis consectetur odit ea aliquid suscipit consequuntur eligendi?
              <br>
              <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum sunt distinctio provident eos dolore tenetur, modi veritatis soluta. Ratione harum necessitatibus explicabo nobis beatae magni ducimus, totam nam porro incidunt consectetur, optio maiores blanditiis, tempore mollitia. Temporibus voluptas sequi tenetur ea accusamus! Repellendus, soluta? Facere explicabo doloremque unde rerum quidem id eveniet quis, quia iusto quisquam labore consequuntur ipsa quos. Provident officiis, corrupti quisquam unde nihil dignissimos enim porro voluptate aspernatur, perferendis consequatur deleniti molestias sed fuga odit iusto eius amet, laborum similique esse impedit dolore. At adipisci quae velit id. Nobis, pariatur porro quos voluptate ut enim beatae, necessitatibus cum quia eius facilis quae sapiente. Labore ad aliquid praesentium aut beatae expedita aperiam repudiandae saepe. Repellendus esse quasi reiciendis hic! Id quasi, perferendis ipsam temporibus dolorem tenetur similique optio possimus enim illo eveniet iusto explicabo inventore hic quaerat, repellat molestias consequuntur alias magnam ut excepturi odit cupiditate atque. Quos quae totam vero impedit consectetur doloremque velit itaque a tempore ipsum illo accusantium nisi ducimus corporis commodi, nobis ex qui hic porro quia repellendus, ipsa in quo. Odio cumque officiis perferendis error sapiente tenetur vitae unde quae atque quia eos nostrum aperiam molestias voluptatibus ex eligendi amet, tempora fuga!
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
  data() {
    return {
      showNav: false
    };
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
    onscroll() {
      if (window.scrollY > 10) {
        this.showNav = true;
      } else {
        this.showNav = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.onscroll);
  }
};
</script>


<style lang="scss" scoped>
.main {
  padding-top: 20rem;
  height: 100vh;
  margin-bottom: 80rem;
}

.logo a {
  font-family: "Poppins";
  font-size: 2.4rem;
  margin: 2rem 10rem;
  display: block;
  color: #000;
  font-weight: 600;
}

.heading h1 {
  color: #000;
  font-weight: 300;
  font-size: 10.4rem;
  margin-left: -20rem;
  letter-spacing: 4px;
}

.desc {
  color: rgb(168, 168, 168);
  font-size: 2.4rem;
  letter-spacing: 2px;
  margin-top: 10rem;
  margin-left: -12rem;
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
