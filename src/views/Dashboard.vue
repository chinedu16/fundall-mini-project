<template>
  <div class="home">
    <section class="main">
      <div class="header-container"> 
        <div class="logo">
          <img src="../assets/fundall_logo.png" alt="logo_svg">
          <span class="company_name">Fundall</span>
        </div>
        <div class="settings">
          <button class="btn" @click="logout">Logout</button>
        </div>
      </div>

      <div class="dashboard_content">
        <div class="welcome">
          
          <div class="message">
            <div class="logo">
              <img :src="userInfo.avatar" alt="">
              <input type="file" @change="onFileChanged" >
            </div>
            <div class="user">
              <b>{{userInfo.firstname}} {{userInfo.lastname}}</b>
              <p> {{userInfo.email}} </p>
            </div>
          </div>
          <div class="sub_message">
            <div class="info">
              Target Monthly Expenses
            </div>
            <div class="amount">₦ {{userInfo.monthly_target | toCurrency}}</div>

            <div class="progress">
              <progress-bar style="background: #4DE897;" size="medium" bar-color="#4DE897" max='2000000' :val='userInfo.monthly_target' ></progress-bar>
            </div>
          </div>

          <div class="history">
            <div class="heading">Daily Expenses Summary</div>

            <div class="table-container">
              <table>
                <tr>
                  <th></th> 
                  <th>Date</th> 
                  <th>Amount</th> 
                </tr> 
                <tr v-for="data in userExpense.data" :key="data.id">
                  <td><i class="fas fa-circle"></i></td> 
                  <td>{{data.date}}</td> 
                  <td>₦{{data.price}}</td> 
                </tr>
              </table>
              <div class="pagination" v-if="empty"> 
                <img src="../assets/empty.png" alt="" height="200">
              </div>
              <div class="pagination" v-show="userExpense.total > 0"> 
                <input type="text" v-model="userExpense.current_page"> of {{userExpense.last_page}} <i @click="next(userExpense.current_page - 1)" class="fas fa-chevron-circle-left" style="cursor:pointer;"></i> <i @click="next(userExpense.current_page + 1)"  style="cursor:pointer;" class="fas fa-chevron-circle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="item-1">

            <div class="welcomeboard">
              <div class="message">
                <b> <div style="color: #4DE897; display: inline-block;" >Welcome back,</div>  {{userInfo.firstname}}</b>
                <p>Now, let’s get your expenses for this month</p>
              </div>
              <div class="rollerboard">
                <img src="../assets/skateboard.svg" alt="">
              </div>
            </div>
            
            <div class="forms">
              <div class="single">
                <div class="form-control">
                  <label for="">Target Monthly Expenses</label>
                  <div style="display: flex;">
                    <input type="number" v-model="payload.monthly_target" placeholder="Enter Monthly Expenses">
                    <!-- <button v-show="focused" style=" margin-left: 30px; width: 20%;height: 45px;">Update</button> -->
                  </div>
                  
                </div>
              </div>
              <div class="single">
                <div class="form-control">
                  <label for="">Date</label>
                  <input type="text" v-model="date" placeholder="08/08/2019">
                </div>
              </div>


              <div class="break">
                Today’s Expenses
              </div>
              <div class="double">
                <div class="form-control first">
                  <input type="text" placeholder="Pizza">
                </div>
                <div class="form-control last">
                  <input type="number" v-model="initialData1.amount" placeholder="10,000">
                </div>
              </div>
              <div class="double">
                <div class="form-control first">
                  <input type="text" name="" id="" placeholder="Textbook">
                </div>
                <div class="form-control last">
                  <input type="number" v-model="initialData2.amount" placeholder="10,000">
                </div>
              </div>
              <div class="double">
                <div class="form-control first">
                  <input type="text" name="" id="" placeholder="Tuition Fee">
                </div>
                <div class="form-control last">
                  <input type="number" v-model="initialData3.amount" placeholder="20,000">
                </div>
              </div>

              <div class="next-break">
                <p>Total Actual Expenses: </p>
                ₦<input type="number" v-model="actualTotal" placeholder="40,000">
              </div>

              <div class="btn">
                <button @click="addExpenses">SAVE TODAY’S EXPENSES</button> <clip-loader class="custom-class" :color="color" :loading="loading" ></clip-loader>
              </div>
              
            </div>

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
import ProgressBar from 'vue-simple-progress'

export default {
  name: 'dashboard',
  components: {
    ClipLoader,
    ProgressBar
  },
  data () {
    return {
      color: '#4DE897',
      loading: false,
      userInfo: '',
      temp: '',
      token: localStorage.getItem('USER_TOKEN'),
      userExpense: '',
      date: '',
      initialData1: { date: '', amount: ''},
      initialData2: { date: '', amount: ''},
      initialData3: { date: '', amount: ''},
      payload1: [],
      actualTotal: '',
      payload: {
        'monthly_target': ''
      },
      payload2: {},
      empty: true
    }
  },
  methods: {
    goToLogin: function () {
      this.$router.push('/login')
    },
    logout: function () {
      localStorage.clear()
      this.$router.push('/login')
    },
    getExpenses: async function () {
      const response = await api.getExpenses(this.token)
      if (response) {
        if (response.data.success.data.length == 0) {
          this.empty = true
        } else {
          this.userExpense = response.data.success
          this.empty = false
        }
      }
    },
    addExpenses: async function () {
      this.loading = true
      if (this.payload.monthly_target == '') { this.payload.monthly_target = this.temp }
      const res = await api.updateTarget(this.payload, this.token)
      if (res) { this.getProfile() }
      if (this.date == '' ) { swal('Missing', 'Some forms are empty', 'info', {button: 'Continue'}), this.loading = false}
      this.payload1.push(this.initialData1, this.initialData2, this.initialData3)
      for(let i = 0; i < this.payload1.length; i++) {
        const response = await api.addExpenses(this.payload1[i], this.token)
        this.getExpenses()
        swal('Done', 'creation went well', 'success', {
          button: 'Great'
        })
        this.loading = false
        console.table(response) 
      }
    },
    getProfile: async function () {
      const response = await api.profile(this.token)
      this.userInfo = response.data.success.data
      this.temp = response.data.success.data.monthly_target
    },
    onFileChanged: async function (event) {
      let file = event.target.files[0]
      let payload = { 'avatar': file }
      try {
        await api.updateAvatar(payload, this.token)
      } catch (error) {
        swal('Error', 'error', 'error', {
          button: 'Try again'
        })
      }
    },
    prev: async function (url) {
      console.log(url)
    },
    next: async function (pageNo ) {
      const response = await api.nextPage(pageNo, this.token )
      this.userExpense = response.data.success
    }
  },
  created() {
    this.getExpenses()
    this.getProfile()
  },
  watch: {
    date: function () {
      this.initialData3.date = this.date
      this.initialData2.date = this.date
      this.initialData1.date = this.date
    },
    initialData3: {
      handler (newVal) {
        this.actualTotal = newVal.initialData1.amount + newVal.initialData2.amount + newVal.initialData3.amount
      },
      deep: true
    }
  }
}
</script>

