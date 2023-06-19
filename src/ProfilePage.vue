<template>
  <!-- <section class="solid" id="login">

    </section> -->

  <div>

<section>
    <Authenticator :sign-up-attributes="['email']" :login-mechanisms="['email']" variation="modal" v-slot="{user, signOut}">
      <template>

        <h3> {{ user.attributes.email}}</h3>
        <button @click="signOut">Sign Out</button>
      </template>
    </Authenticator>

  </section>
  </div>
</template>

<script>

import { Authenticator } from '@aws-amplify/ui-vue'

export default {
  name: 'ProfilePage',
  components: {

    Authenticator
  }
}
</script>

<style>

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

.amplify-tabs-item[data-state=active][data-variation = primary]{
  color:#5f0fff;
  border-color: #5f0fff;
}
.amplify-tabs-item:hover{
  color:#5f0fff;
}

.amplify-button[data-variation= primary]{
  background-color: #5f0fff;
}
.amplify-button:hover[data-variation= primary]{
  background-color: #a084d9;
}

</style>
