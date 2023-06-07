<template>
  <!-- <section class="solid" id="login">

    </section> -->

  <div>
    
    <Authenticator variation="modal" v-slot="{user, signOut}"> 
      <template> 
        <h3> {{ user.attributes.email}}</h3>
        <button @click="signOut">Sign Out</button>
      </template>
    </Authenticator>
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








<style src="./assets/base.css">



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
    

</style>
