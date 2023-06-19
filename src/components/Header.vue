<template>

  <header>
    <a href="#" class="logo">GymTimer</a>
      <nav class="navigation">
        <router-link to="/" class="nav-link">HOME</router-link>
        <router-link to="/profile" class="nav-link">PROFILE</router-link>
        <router-link to="/workout" class="nav-link">WORKOUT</router-link>
      </nav>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Header'
}
</script>

<style>
@import "@/assets/base.css";

/* Add styles for your header component */

* {
  font-family: 'Visby CF', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

header{
    background-color: transparent;
    position: fixed;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content:space-between ;
    align-items: center;
    padding: 26px 100px ;

}

.logo{
    text-decoration:none ;
    color:#8665c7 ;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif ;
    font: weight 100; ;
    font-size: 3em;

}

.navigation a{
    color: #5f0fff;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 400;
    padding-left: 40px ;

}
.navigation a:hover{
    color: #2e2938;
}

</style>
