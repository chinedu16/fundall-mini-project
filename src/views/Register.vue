<template>
  <div class="home">
    <section class="main">
      <div class="header-container"> 
        <div class="logo">
          <img src="../assets/fundall_logo.png" alt="logo_svg">
          <span class="company_name">Fundall</span>
        </div>
      </div>

      <div class="content">
        <div class="welcome">
          <img src="../assets/newgirl.svg" alt="girl_svg" height="246" width="243">
          <div class="message">
            <p> <span>Welcome!</span> Let's get to know you</p>
          </div>
          <div class="sub_message">
            <span>Your first step toward a better financial lifestyle starts here</span>
          </div>
        </div>
        <div class="form-container">
          <div class="item-1">
            <div class="double">
            <div class="form-control">
              <label for="">First Name</label>
              <input type="text" name="" id="" placeholder="Enter First Name">
            </div>
            <div class="form-control last">
              <label for="">Last Name</label>
              <input type="text" name="" id="" placeholder="Enter Last Name">
            </div>
          </div>

            <div class="single">
              <div class="form-control">
                <label for="">Email Address</label>
                <input type="text" name="" id="" placeholder="Enter Email">
              </div>
            </div>
            <div class="single">
              <div class="form-control">
                <label for="">Password</label>
                <input type="text" name="" id="" placeholder="Enter Password">
              </div>
            </div>
            <div class="single">
              <div class="form-control">
                <label for="">Confirm Password</label>
                <input type="text" name="" id="" placeholder="Confirm Password">
              </div>
            </div>
            <div class="single">
              <div class="form-control">
                <button @click="toDashboard"> Sign up </button>
              </div>
            </div>

            <p>Already have an account? <span @click="goToLogin">Login Here</span> </p>
          </div>

          <div class="item-2">
            <p> By clicking on Login, you agree to our <span>Terms & 
              Conditions and Privacy Policy</span> </p>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'register',
  methods: {
    goToLogin: function () {
      this.$router.push('/login')
    },
    toDashboard: function () {
      this.$router.push('/dashboard')
    }
  }
}
</script>
