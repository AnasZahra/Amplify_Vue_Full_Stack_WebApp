<template>
  <!-- <section class="solid" id="login">

    </section> -->

  <div>
    
    <Authenticator :sign-up-attributes="['email']" :login-mechanisms="['email']" variation="modal" v-slot="{user, signOut}"> 
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








<style>



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
    
.amplify-button--primary {
background-color: #5f0fff;
}
.amplify-button--primary:hover {
background-color: #a084d9;
}
.amplify-tabs-item[data-state=active]{
  color:#5f0fff;
  border-color: #5f0fff;
}
.amplify-tabs-item:hover{
  color:#5f0fff;
}
</style>
