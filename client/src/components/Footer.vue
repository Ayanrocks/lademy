<template>
  <footer class="page-footer">
    <div class="container">
      <div class="content row">
        <div class="col s4">
          <h1 class="logo-footer">
            Lademy
            <sup>TM</sup>
          </h1>
          <p>2018-2019</p>
          <p>All Rights Reserved.</p>
        </div>
        <div class="col s4">
          <div class="social-link">
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
        <div class="col s4 right">
          <ul class="links">
            <router-link to="/aboutus" tag="li">About Us</router-link>
            <router-link to="/privacy-policy" tag="li">Privacy Policy</router-link>
            <router-link to="/legal" tag="li">Terms & Conditions</router-link>
            <router-link to="/faq" tag="li">FAQ</router-link>
            <router-link to="/contactus" tag="li">Contact Us</router-link>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.page-footer {
  height: 75rem;
  //   position: fixed;
  //   bottom: 0;
  //   left: 0;
  //   right: 0;
  margin-top: -20rem;
  background-color: #000;
}

.logo-footer {
  color: #fff;
  margin-top: -0.1rem;
  font-size: 3.2rem !important;
  display: inline-block;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  sup {
    font-size: 2rem;
  }
}
p {
  //   text-align: center;
  display: inline-block;
  font-size: 2rem;
  display: block;
}

.links {
  font-size: 2rem;
  display: inline-block;
  cursor: pointer;
}
</style>
