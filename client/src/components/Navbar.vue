<template>
  <nav class="navbar align-middle">
    <div class="container">
      <div class="logo">
        <router-link to="/" tag="a">Lademy</router-link>
      </div>
      <div class="buttons pull-right mr-5">
        <button class="student">
          <router-link to="/student">Student</router-link>
        </button>
        <button class="teacher">
          <router-link to="/teacher">Teacher</router-link>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #000;
  color: #fff !important;
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  font-family: "Poppins", sans-serif !important;
}

nav .buttons {
  display: flex;
  width: 20rem;
  font-size: 1.8rem;
  justify-content: space-between;
  font-family: inherit;
}

nav .logo {
  position: static !important;

  a {
    font-weight: 500;
    font-size: 2.8rem;
    font-family: "Poppins", sans-serif !important;
    color: #fff !important;
  }
}

nav .student,
nav .teacher {
  cursor: pointer;
  padding: 0.5rem 3rem;
  border-radius: 50px;
  text-align: center;
  margin: 1.5rem 2rem;
  border: none;
  background-color: transparent;

  a {
    padding: 0;
    margin: 0;
  }
}

.student {
  background-image: linear-gradient(to right, #6ef3df, #2c68ef) !important;
}

.teacher {
  border: 1px solid #fff !important;
}
</style>
