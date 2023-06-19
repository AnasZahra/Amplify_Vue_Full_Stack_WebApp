<template>
  <footer class="footer" id="contact">
    <p class="footer-title">Copyright © 2023. All rights reserved
      <span>GYMTIMER</span>
    </p>
    <div class="social-icons">
      <a href="#"><i class="fa-brands fa-facebook"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
      <a href="#"><i class="fa-brands fa-youtube"></i></a>
      <a href="#"><i class="fa-brands fa-google"></i></a>
    </div>
  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Footer'
}
</script>

<style>
@import "@/assets/base.css";
/* Add styles for your footer component */

.icon{
    color: #AB82FF;
    font-size: 5em ;
    text-align: center;
}
.info{
    text-align: center;
}
.info h3{
    color: #AB82FF;
    font: size 1.2em;
    font-weight: 700;
    margin: 10px;
}
.footer{
    background-color: #AB82FF;
    color: white;
    padding: 1em;
    display: flex;
    justify-content: space-between;

}
.footer-title{
    font-size: 1.2em;
    font-weight: 600;
    margin-top: 10px;

}

</style>
