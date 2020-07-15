<template>
  <v-app>
    <Toolbar v-if="!normalFunction" />

    <v-content class="ml-2 mr-2">
      <router-view/>
    </v-content>
    
    <Footer v-if="!normalFunction" app/>


  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Toolbar,
    Footer
  },
  data(){
    return {
      footer: true,
    }
  },
  computed: {
    normalFunction() {
      return this.$store.state.glitched
    }
  }
};
</script>
