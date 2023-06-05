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
  name: 'Header',
};
</script>

<style>


/* Add styles for your header component */
</style>