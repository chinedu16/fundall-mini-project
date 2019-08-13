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
                <input type="text" v-model="payload.email" placeholder="Enter Email or Username">
              </div>
            </div>
            <div class="single">
              <div class="form-control">
                <label for="">Password</label>
                <input type="text" v-model="payload.password" placeholder="Enter Password">
              </div>
            </div>
            
            <div class="single">
              <div class="form-control">
                <button @click="login"> Login </button>
              </div>
            </div>
            <div class="single" v-if="loading">
              <div class="error">
                <clip-loader class="custom-class" :color="color" :loading="loading" ></clip-loader>
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
import api from '../api/index.js'
import local from '../api/local.js'
import swal from 'sweetalert'
import { ClipLoader } from '@saeris/vue-spinners'

export default {
  name: 'login',
  components: {
    ClipLoader
  },
  data () {
    return {
      color: '#4DE897',
      loading: false,
      payload: {
        email: 'test@gmail.com',
        password: '123456',
      }
    }
  },
  methods: {
    goToRegister: function () {
      this.$router.push('/register')
    },
    toDashboard: function () {
      this.$router.push('/dashboard')
    },
    login: async function () {
      try {
        this.loading = true
        const response = await api.logIn(this.payload)
        const userDetails = response.data.success.user
        local.saveData(userDetails)
        if (response) {
          this.loading = false
          this.$router.push('/dashboard')
        }
      } catch (error) {
        this.loading = true
        swal('Error', "Something went wrong", 'error', {
          button: 'Try again'
        })
        this.loading = false
      }
    }
  }
}
</script>
