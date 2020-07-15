<template>
  <nav>
      <v-app-bar
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        dark
        app
        dense
      >
        <v-app-bar-nav-icon @click="setDrawerStatus" v-if="$store.state.isUserLoggedIn"></v-app-bar-nav-icon>
        <router-link to="/"><v-toolbar-title class="white--text mr-10">Smart Mirror</v-toolbar-title></router-link>



        <v-btn text v-on:click="navigateTo('/about')">About Us</v-btn>
        <v-btn text v-on:click="navigateTo('/product')">The Mirror Itself</v-btn>
        <v-btn text v-on:click="navigateTo('/i-aint-see-nothing-here')">Stuff</v-btn>

        <v-spacer></v-spacer>
        
        <a href="http://amk.uni-obuda.hu/" target="_blank">
          <v-btn icon>
              <v-icon>mdi-school</v-icon>
          </v-btn>
        </a>
        <v-btn icon>
            <v-icon>mdi-xml</v-icon>
        </v-btn>

        <v-btn text class="grey darken-1" v-on:click="logout" v-if="$store.state.isUserLoggedIn">
            <span>Sign Out</span>
            <v-icon>mdi-exit-run</v-icon>
        </v-btn>

        <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
        close-delay="200"
        >
          <v-btn :elevation="hover ? 16 : 1" text :class="hover? 'green darken-1' : 'grey darken-2'" class="mr-5" v-on:click="navigateTo('/register')" v-if="!$store.state.isUserLoggedIn">
              <span>Sign Up</span>
              <v-icon class="ml-1">mdi-account-plus-outline</v-icon>
          </v-btn>
        </v-hover>

        <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
        close-delay="200"
        >
          <v-btn :elevation="hover ? 16 : 1" text :class="hover? 'green darken-1' : 'grey darken-2'"  v-on:click="navigateTo('/login')" v-if="!$store.state.isUserLoggedIn">
              <span>Sign In</span>
              <v-icon class="ml-1">mdi-login-variant</v-icon>
          </v-btn>
        </v-hover>

      </v-app-bar>

      <v-navigation-drawer 
        v-model="drawerStatus" 
        app
        src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        v-if="$store.state.isUserLoggedIn"
      >
        <v-list-item dark>
          <v-list-item-content>
            
            <v-list-item-title class="title">
              {{ userFirstName }} {{ userLastName }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ userEmail }}
            </v-list-item-subtitle>

            <v-divider></v-divider>

            <router-link to="/profile">
              <v-list-item
                link
              >
              <v-list-item-icon>
                <v-icon>mdi-view-dashboard</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/settings">
            <v-list-item
                link
              >
              <v-list-item-icon>
                <v-icon>mdi-account-cog</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>User Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          <router-link to="/mirror-settings">
            <v-list-item
                link
              >
              <v-list-item-icon>
                <v-icon>mdi-cogs</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>Mirror Settings</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>

          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
      return {
        drawer: this.drawerStatus,
        Ishovering: false
      }
  },
  methods: {
    navigateTo (route) {
      // eslint-disable-next-line
      this.$router.push(route).catch(err => {})
    },
    logout() {
      this.$store.dispatch('SetLogoutEverything')
      this.$router.push({
        name: '/'
      })
    },
    setDrawerStatus() {
      let drawer = this.$store.state.drawerStatus
      this.$store.dispatch('setDrawerStatus',!drawer)
    }
  },
  computed: {
    username() {
      return this.$store.state.username
    },
    userEmail() {
      return this.$store.state.userEmail
    },
    userFirstName() {
      return this.$store.state.userFirstName
    },
    userLastName() {
      return this.$store.state.userLastName
    },
    drawerStatus() {
      return this.$store.state.drawerStatus
    }
  }
    
}
</script>

<style scoped>
a{
    text-decoration: none;
}
</style>