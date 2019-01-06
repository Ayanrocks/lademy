<template>
  <div>
    <div class="btn btn-light text-dark">
      <a href="/student/auth/google" style="text-transform:none" class="row">
        <div class="col-sm">
          <img
            width="40px"
            alt="Google &quot;G&quot; Logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          >
        </div>
        <div class="col-sm text-dark">Login with Google</div>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    onSignIn() {
      console.log("Signing in");
    }
  }
};
</script>
