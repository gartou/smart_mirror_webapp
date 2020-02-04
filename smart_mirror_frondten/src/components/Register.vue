<template>
  <div>
    <h1>Register</h1>

    <input type="text" name="email" v-model="email"/>
    <br/>
    <input type="password" name="password" v-model="password"/>
    <br/>
    <div :class="[ infoType ]" v-html="info"/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      infoText: null,
      infoType: 'ok'
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.infoType = 'ok'
        this.infoText = 'Registration was successful.'
      } catch (error) {
        this.infoType = 'error'
        this.infoText = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
.ok {
  color: green;
}
</style>
