<template>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title class="mx-auto" width="200px">Sign Up</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    name="email"
                    type="text"
                    v-model="username"
                  />

                  <v-text-field
                    label="Email"
                    name="email"
                    type="text"
                    v-model="email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-text>
                <p class="red--text darken-1">
                  {{ this.error }}
                </p>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" v-on:click="register">Sign Up</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: 'TestUser',
      email: 'testuser@gmail.com',
      password: '12345678',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        /* eslint-disable-next-line */
        const response = await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password
        })
        // this.$store.dispatch('setToken',response.data.token)
        // this.$store.dispatch('setUser',response.data.token)
      } catch (error) {
        this.error = error.response.data.error
        this.$store.dispatch('setMessage',error)
      }
    }
  }
}
</script>
