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
            <div class="heading" :style="{  marginLeft: -20 + 'rem'}">
              <h1>We Are Lademy.</h1>
            </div>
            <div
              class="desc"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore velit dolore illum eaque perferendis amet placeat nemo mollitia, nesciunt sapiente minus numquam tempora doloribus ad esse dolores quibusdam dolorem. Animi quam veritatis omnis possimus officiis est delectus similique veniam illum odio. Quidem reprehenderit sequi sint, ex itaque nulla veritatis. Sint corporis dignissimos voluptatem, vitae maxime porro quaerat provident? Libero nobis architecto maiores incidunt amet magnam voluptatem distinctio consectetur corporis. Vitae cupiditate sed iusto! Delectus facilis illum veniam quisquam magni aspernatur eius explicabo, quibusdam laboriosam necessitatibus! Ducimus atque cupiditate vero, eaque numquam ab quis consectetur odit ea aliquid suscipit consequuntur eligendi?
              <br>
              <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum sunt distinctio provident eos dolore tenetur, modi veritatis soluta. Ratione harum necessitatibus explicabo nobis beatae magni ducimus, totam nam porro incidunt consectetur, optio maiores blanditiis, tempore mollitia. Temporibus voluptas sequi tenetur ea accusamus! Repellendus, soluta? Facere explicabo doloremque unde rerum quidem id eveniet quis, quia iusto quisquam labore consequuntur ipsa quos. Provident officiis, corrupti quisquam unde nihil dignissimos enim porro voluptate aspernatur, perferendis consequatur deleniti molestias sed fuga odit iusto eius amet, laborum similique esse impedit dolore.
            </div>
          </div>
        </div>
      </section>
      <section class="our-team">
        <div class="container">
          <div class="row">
            <div class="heading ml-5 col-12">
              <h1 class="text-center">Here is Me</h1>
            </div>
          </div>
          <div class="row">
            <!-- <div class="col team__member">
              <img
                src="https://scontent.fccu5-1.fna.fbcdn.net/v/t1.0-1/p240x240/32231697_1117949901679509_3757321000669151232_n.jpg?_nc_cat=108&_nc_ht=scontent.fccu5-1.fna&oh=1d3f964260d908b885d0ee8d691668f1&oe=5CD8A22D"
                alt="Avatar"
                class="rounded-circle mx-auto my-0"
                :style="{height: 20 + 'rem', width: 20 + 'rem'}"
              >
              <h1 class="text-center my-5">Debojotee Dutta</h1>
              <h2 class="text-center font-weight-normal">Founder,
                <br>CEO
              </h2>
            </div>-->
            <div class="col team__member">
              <img
                src="https://scontent.fccu5-1.fna.fbcdn.net/v/t1.0-1/p240x240/28378276_1596132073817215_2885146996810213359_n.jpg?_nc_cat=105&_nc_ht=scontent.fccu5-1.fna&oh=bebad11aa0b6299f53d3487b00cc9f91&oe=5C9B02D3"
                alt="Avatar"
                class="rounded-circle mx-auto my-0"
                :style="{height: 20 + 'rem', width: 20 + 'rem'}"
              >
              <h1 class="text-center my-5">Ayan Banerjee</h1>
              <h2 class="text-center font-weight-normal">Founder,
                <br>Product Designer
              </h2>
            </div>
            <!-- <div class="col team__member">
              <img
                src="https://scontent.fccu5-1.fna.fbcdn.net/v/t1.0-1/c0.40.240.240a/p240x240/1110_799770710127050_5165144399464897646_n.jpg?_nc_cat=104&_nc_ht=scontent.fccu5-1.fna&oh=d6c9e4ee3dcef0648c6797b9df28400d&oe=5C953B46"
                alt="Avatar"
                class="rounded-circle mx-auto my-0"
                :style="{height: 20 + 'rem', width: 20 + 'rem'}"
              >
              <h1 class="text-center my-5">Saswata Chatterjee</h1>
              <h2
                class="text-center font-weight-normal"
              >Product Relationship Management, Administrator</h2>
            </div>-->
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
.aboutus {
  margin: 10rem auto;
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
  letter-spacing: 4px;
}

.desc {
  color: rgb(168, 168, 168);
  font-size: 2.4rem;
  letter-spacing: 2px;
  margin-top: 10rem;
  // margin-left: -12rem;
  text-align: justify;
}

.team__member {
  margin-top: 8rem;
}

img {
  display: block;
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
