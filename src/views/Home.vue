<template>
  <div class="home">
    <section class="main">
      <div class="header-container"> 
        <div class="logo">
          <img src="../assets/fundall_logo.png" alt="logo_svg">
          <span class="company_name">Fundall</span>
        </div>
        <div class="settings">
          <router-link to="/login"><button class="outline">Log in</button> </router-link>
          <router-link to="/register"><button class="btn">Sign Up</button> </router-link>
        </div>
      </div>

      <div class="center_image">
        <img src="../assets/newgirl.svg" alt="girl_svg" height="280" width="280">
      </div>

      <div class="info_board">
        <div class="heading">
          <span>Fundall Expense Tracker</span>
        </div>
        <div class="sub_heading">
          <span>Mini Project Frontend</span>
        </div>
        <div class="author">
          <span>by Chinedu Ohagwu</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
}
</script>
