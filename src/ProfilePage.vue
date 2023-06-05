<template>
  <div>
  
    <Header></Header>

    <router-view />


    <section class="solid" id="login">
      <div>
        <h1 class="Log_in_">Log in</h1>

        <input type="text" id="Rectangle_6" name="message1" placeholder="Write here..." class="Rectangle_6" /><br>
        <input type="text" id="Rectangle_7" name="message1" placeholder="Write here..." class="Rectangle_7" /><br>

        <a href="#projects" class="main-btn-in">Log in</a>
      </div>
    </section>

    <Footer></Footer>

  </div>
</template>



<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "ProfilePage",
  components: {
    Header,
    Footer,
  },
};
</script>








<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
@import url("./src/assets/base.css");

.Log_in_ {
    left: 130px;
    top: 276px;
    position: absolute;
    overflow: visible;
    width: 277px;
    white-space: nowrap;
    text-align: left;
    font-family: Visby CF;
    font-style: normal;
    font-weight: bold;
    font-size: 86px;
    color: rgba(253,252,255,1);
}



#Rectangle_6 {
    fill: transparent;
    stroke: rgba(146,143,150,1);
    stroke-width: 1px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
}
.Rectangle_6 {
    position: absolute;
    overflow: visible;
    width: 508px;
    height: 57px;
    left: 130px;
    top: 437px;
}
#Rectangle_7 {
    fill: transparent;
    stroke: rgba(146,143,150,1);
    stroke-width: 1px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
}
.Rectangle_7 {
    position: absolute;
    overflow: visible;
    width: 508px;
    height: 57px;
    left: 130px;
    top: 540px;
}


    
/* Add your additional styles here */
</style>
