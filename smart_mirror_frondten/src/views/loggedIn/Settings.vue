<template>
  <div class="ml-10 mt-5 mr-5">

    <div>
        <h1>User Settings</h1>
    </div>  

    <div class="text-center d-flex pb-4">
      <v-btn @click="all" class="mr-10">all</v-btn>
      <!-- <div>{{ panel }}</div> -->
      <v-btn @click="none">none</v-btn>
    </div>

    <v-expansion-panels
      v-model="panel"
      multiple
    >
      <v-expansion-panel class="mb-1">
        <v-expansion-panel-header>User Settings - Your Profile</v-expansion-panel-header>
        <v-expansion-panel-content>
        <v-container>
            <v-row
              >
              <v-col md="4">
                <v-text-field outlined v-model="username" label="Username"></v-text-field>
              </v-col>
              <v-col
                md="4"
                offset-md="4"
              >
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="4">
                <v-text-field outlined v-model="firstname" label="Firstname"></v-text-field>
              </v-col>
              <v-col cols="6" md="4" >
                <v-text-field outlined v-model="lastname" label="Lastname"></v-text-field>
              </v-col>
              <v-col cols="6" md="4" >
                <v-btn icon color="green">
                  <v-icon></v-icon>
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="6" md="4">
                <v-text-field outlined v-model="email" label="Email"></v-text-field>
              </v-col>
              <v-col cols="6" md="4" >
                <v-spacer></v-spacer>
              </v-col>
              <v-col cols="6" md="4" >
                <v-btn class="mx-2" fab dark large :color="status" v-on:click="updateDatas">
                  <v-icon dark>mdi-cached</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>

       <v-expansion-panel class="mb-1">
        <v-expansion-panel-header>Website Settings</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>

       <v-expansion-panel class="mb-1">
        <v-expansion-panel-header>Privacy Settings</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import UserDataService from '@/services/UserDataService'
  export default {
    data () {
      return {
        panel: [],
        username: this.$store.state.username || '',
        firstname: this.$store.state.userFirstName || '',
        lastname: this.$store.state.userLastName || '',
        email: this.$store.state.userEmail || '', 
        status: "blue darken-1"
      }
    },
    methods: {
      // Create an array the length of our items
      // with all values as true
      all () {
        this.panel = [...Array(5).keys()].map((k, i) => i)
      },
      // Reset the panel
      none () {
        this.panel = []
      },
      async updateDatas() {
        this.status="orange"
        if(this.username != this.$store.state.username) {
          this.$store.dispatch('setUsername', this.username)
          const response = await UserDataService.SetUsername({
            username: this.$store.state.username,
            newusername: this.username 
          })
          if (response.data.msg == "ok") {
            this.$store.dispatch('setMessage', response.data.msg)
            this.$store.dispatch("setMessageActive",true)
            this.status="green"
          } else {
            this.$store.dispatch('setMessage', response.data.msg)
            this.$store.dispatch("setMessageActive",true)
            this.status="red"
          }
        }

        if(this.email != this.$store.state.userEmail) {
          this.$store.dispatch('setUserEmail', this.email)
          const response = await UserDataService.SetUserEmail({
            username: this.$store.state.username,
            newusername: this.email 
          })
          if (response.data.msg == "ok") {
            this.$store.dispatch('setMessage', response.data.msg)
            this.$store.dispatch("setMessageActive",true)
            this.status="green"
          } else {
            this.$store.dispatch('setMessage', response.data.msg)
            this.$store.dispatch("setMessageActive",true)
            this.status="red"
          }
        }

        if(this.firstname != this.$store.state.userFirstName) {
          this.$store.dispatch('setUserFirstName', this.firstname)
          const response = await UserDataService.SetUserFirstName({
            username: this.$store.state.username,
            newfirstname: this.firstname 
          })
          if (response.data.msg == "ok") {
            this.$store.dispatch('setMessage', response.data.msg)
            this.$store.dispatch("setMessageActive",true)
            this.status="green"
          } else {
            this.$store.dispatch('setMessage', response.data.msg)
            this.$store.dispatch("setMessageActive",true)
            this.status="red"
          }
        }
        
        if(this.lastname != this.$store.state.userLastName) {
          this.$store.dispatch('setUserLastName', this.lastname)
          const response = await UserDataService.SetUserLastName({
            username: this.$store.state.username,
            newlastname: this.lastname 
          })

          if (response.data.msg == "ok") {
            this.$store.dispatch('setMessage', response.data.msg)
            this.$store.dispatch("setMessageActive",true)
            this.status="green"
          } else {
            this.$store.dispatch('setMessage', response.data.msg)
            this.$store.dispatch("setMessageActive",true)
            this.status="red"
          }
        }
      }

    },
  }
</script>