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
              <input type="text" v-model="payload.firstname" placeholder="Enter First Name">
            </div>
            <div class="form-control last">
              <label for="">Last Name</label>
              <input type="text" v-model="payload.lastname" placeholder="Enter Last Name">
            </div>
          </div>

            <div class="single">
              <div class="form-control">
                <label for="">Email Address</label>
                <input type="text" v-model="payload.email" placeholder="Enter Email">
              </div>
            </div>
            <div class="single">
              <div class="form-control">
                <label for="">Password</label>
                <input type="password" v-model="payload.password" placeholder="Enter Password">
              </div>
            </div>
            <div class="single">
              <div class="form-control">
                <label for="">Confirm Password</label>
                <input type="password" v-model="payload.password_confirmation" placeholder="Confirm Password">
              </div>
            </div>
            <div class="single">
              <div class="form-control">
                <button @click="register"> Sign up </button>
              </div>
            </div>
            <div class="single" v-if="loading">
              <div class="error">
                <clip-loader class="custom-class" :color="color" :loading="loading" ></clip-loader>
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
import api from '../api/index.js'
import swal from 'sweetalert'
import { ClipLoader } from '@saeris/vue-spinners'
export default {
  name: 'register',
  components: {
    ClipLoader
  },
  data () {
    return {
      color: '#4DE897',
      loading: false,
      payload: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }
  },
  methods: {
    goToLogin: function () {
      this.$router.push('/login')
    },
    toDashboard: function () {
      this.$router.push('/dashboard')
    },
    register: async function () {
      try {
        this.loading = true
        const response = await api.register(this.payload)
        console.log(response)
        if (response) {
          this.loading = false
          swal('Registered', 'User registeration went well', 'success', {
            button: 'Great'
          })
          this.$router.push('/login')
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
