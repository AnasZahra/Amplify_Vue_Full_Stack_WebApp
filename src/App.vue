<!-- eslint-disable vue/no-reserved-component-names -->
<template>
  <div>
    <Header></Header>

    <router-view />

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    // eslint-disable-next-line vue/no-reserved-component-names, comma-dangle
    Footer,
  // eslint-disable-next-line comma-dangle
  },
}
</script>

<style src="./assets/base.css">

</style>
