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
          <img src="../assets/newgirl_1.svg" alt="girl_svg" height="246" width="243">
          <div class="message" style="margin: 0px;">
            <p  style="margin:0px;"> <span>Welcome back!</span></p>
            <p style="margin:0px;">We miss you</p>
          </div>
        </div>
        <div class="form-container">
          <div class="item-1">
            <div class="greeting">
              <div class="holla">Holla</div>
              <div class="sub_holla">Sign in to the vibe!</div>
            </div>
            <div class="single">
              <div class="form-control">
                <label for="">Email or Username</label>
                <input type="text" name="" id="" placeholder="Enter Email or Username">
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
                <button @click="toDashboard"> Login </button>
              </div>
            </div>

            <p>Don't have an account? <span @click="goToRegister">Register Here</span> </p>

            <p style="margin-top:23px;"> By clicking on Login, you agree to our <span>Terms & 
              Conditions and Privacy Policy</span> </p>
          </div>

          <div class="item-2">
            
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
  name: 'login',
  methods: {
    goToRegister: function () {
      this.$router.push('/register')
    },
    toDashboard: function () {
      this.$router.push('/dashboard')
    }
  }
}
</script>
