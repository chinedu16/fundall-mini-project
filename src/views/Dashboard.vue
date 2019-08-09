<template>
  <div class="home">
    <section class="main">
      <div class="header-container"> 
        <div class="logo">
          <img src="../assets/fundall_logo.png" alt="logo_svg">
          <span class="company_name">Fundall</span>
        </div>
      </div>

      <div class="dashboard_content">
        <div class="welcome">
          
          <div class="message">
            <div class="logo">
              <img src="../assets/User.svg" alt="">
            </div>
            <div class="user">
              <b>Babatunde Fashola</b>
              <p> baba2@gmail.com </p>
            </div>
          </div>
          <div class="sub_message">
            <div class="info">
              Target Monthly Expenses
            </div>
            <div class="amount">₦596,000</div>

            <div class="progress">

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
                <tr>
                  <td><i class="fas fa-circle"></i></td> 
                  <td>30 Nov, 2018</td> 
                  <td>₦30,000</td> 
                </tr>
                <tr>
                  <td><i class="fas fa-circle"></i></td> 
                  <td>30 Nov, 2018</td> 
                  <td>₦30,000</td> 
                </tr>
                <tr>
                  <td><i class="fas fa-circle"></i></td> 
                  <td>30 Nov, 2018</td> 
                  <td>₦30,000</td> 
                </tr>
                
              </table>
              <div class="pagination"> 
                <input type="text"> of 5 <i class="fas fa-chevron-circle-left"></i> <i class="fas fa-chevron-circle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="form-container">
          <div class="item-1">

            <div class="welcomeboard">
              <div class="message">
                <b> <div style="color: #4DE897; display: inline-block;" >Welcome back,</div>  Babatunde</b>
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
                  <input type="text" name="" id="" placeholder="Enter Monthly Expenses">
                </div>
              </div>
              <div class="single">
                <div class="form-control">
                  <label for="">Date</label>
                  <input type="text" name="" id="" placeholder="08/08/2019">
                </div>
              </div>


              <div class="break">
                Today’s Expenses
              </div>
              <div class="double">
                <div class="form-control first">
                  <input type="text" name="" id="" placeholder="Pizza">
                </div>
                <div class="form-control last">
                  <input type="text" name="" id="" placeholder="10,000">
                </div>
              </div>
              <div class="double">
                <div class="form-control first">
                  <input type="text" name="" id="" placeholder="Textbook">
                </div>
                <div class="form-control last">
                  <input type="text" name="" id="" placeholder="10,000">
                </div>
              </div>
              <div class="double">
                <div class="form-control first">
                  <input type="text" name="" id="" placeholder="Tuition Fee">
                </div>
                <div class="form-control last">
                  <input type="text" name="" id="" placeholder="20,000">
                </div>
              </div>

              <div class="next-break">
                <p>Total Actual Expenses: </p>
                ₦<input type="text" name="" id="" placeholder="40,000">
              </div>

              <div class="btn">
                <button>SAVE TODAY’S EXPENSES</button>
              </div>
              
            </div>

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
  name: 'dashboard',
  methods: {
    goToLogin: function () {
      this.$router.push('/login')
    }
  }
}
</script>

