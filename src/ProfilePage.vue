<template>
  <div>
  
    

    <router-view />

    
    <section class="solid" id="login">
      <div>
        <h1 class="Log_in">Log in</h1>

        <input type="text" id="text1" name="message1" placeholder="Write here..." class="Rectangle_6" /><br>
        <input type="text" id="text2" name="message1" placeholder="Write here..." class="Rectangle_7" /><br>

        <a href="#projects" class="main-btn-in">Log in</a>
      </div>
    </section>

    <Authenticator v-slot="{user, signOut}"> 
      <template> 
        <button @click="signOut">Sign Out</button>
      </template>
    </Authenticator>
    
    

    <Footer></Footer>

  </div>
</template>



<script>

import Footer from "@/components/Footer.vue";
import {Authenticator} from "@aws-amplify/ui-vue"

export default {
  name: "ProfilePage",
  components: {
    
    Footer,
    Authenticator,
  },
};
</script>








<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css");
@import url("./src/assets/base.css");


.Log_in {
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



#text1 {
    fill: transparent;
    stroke: rgba(146,143,150,1);
    stroke-width: 1px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
}
.text1 {
    position: absolute;
    overflow: visible;
    width: 508px;
    height: 57px;
    left: 130px;
    top: 437px;
}
#text2 {
    fill: transparent;
    stroke: rgba(146,143,150,1);
    stroke-width: 1px;
    stroke-linejoin: miter;
    stroke-linecap: butt;
    stroke-miterlimit: 4;
    shape-rendering: auto;
}
.text2 {
    position: absolute;
    overflow: visible;
    width: 508px;
    height: 57px;
    left: 130px;
    top: 540px;
}


    
/* Add your additional styles here */
</style>
