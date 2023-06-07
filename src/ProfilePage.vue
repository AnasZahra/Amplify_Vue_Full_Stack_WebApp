<template>
  <!-- <section class="solid" id="login">

    </section> -->

  <div>
    
    <section class="login" id="login">

    	<h2 class="titel">Create your account</h2>

    <Authenticator :login-mechanisms="['email']" variation="modal" v-slot="{user, signOut}"> 
      <template> 
        <h3> {{ user.attributes.email}}</h3>
        <button @click="signOut">Sign Out</button>
      </template>
    </Authenticator>

  </section>
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


.solid{
    width: 100%;
    min-height: 100vh ;
    opacity: 100%;
    display: flex;
    align-items: center;
    background-size:cover ;
    background-color: #23202A;
}

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
