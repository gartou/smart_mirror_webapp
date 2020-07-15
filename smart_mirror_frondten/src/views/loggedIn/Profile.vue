<template>
  <div class="home">
    <h1>Welcome {{ this.$store.state.username }}</h1>
    <p class="red white--text">Your email address is: {{ this.$store.state.userEmail }}</p>
    <p class="pink lighten-4 red--text text--darken-4">Your firstname is: {{ this.$store.state.userFirstName }}</p>
    <h1 class="display-4">Your lastname is: {{ this.$store.state.userLastName }}</h1>
    <h4 class="display-1">User Settings is <router-link to="/settings">here</router-link></h4>
    <p class="headline">Mirror settings is <router-link to="/mirror-settings">here</router-link></p>
    <p class="subheading font-weight-light">subhead</p>
    <p class="caption">You can set warning, that appear below in an orange color.</p>
    <v-text-field v-model="msg" label="Press ENTER after text." v-on:keyup.enter="setMessage"></v-text-field>
    <v-btn v-on:click="setNotifState(true)">Show notifications</v-btn>
    <br>
    <v-btn class="mt-10" v-on:click="setNotifState(false)">Hide notifications</v-btn>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  data(){
      return {
        msg: null
      }
  },
  methods: {
    setMessage () {
      this.$store.dispatch('setMessage', this.msg)
    },
    setNotifState (value) {
      this.$store.dispatch('setMessageActive', value)
    }
    
  }
}
</script>
