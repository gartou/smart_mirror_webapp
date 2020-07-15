<template>
    <div>
        <v-system-bar window :class="getMessageColor" v-if="getMessageActive">
            <v-icon>mdi-alert-box-outline</v-icon>
            <span>{{ getMessage }}</span>
            <v-spacer></v-spacer>
            
            <v-icon @click="!menu">mdi-menu-up</v-icon>
            <v-icon @click="closeNotif">mdi-close-circle-outline</v-icon>
        </v-system-bar>
    </div>
</template>

<script>
export default {
  data(){
      return {
          notif: true,
          menu: true,
      }
  },
  methods: {
      closeNotif(){
          this.$store.dispatch("setMessageActive",false)
      }
  },
  computed: {
    getMessage() {
        return this.$store.state.message
    },
    getMessageActive() {
        return this.$store.state.messageActive
    },
    getMessageColor() {
        return this.$store.state.messageColor
    }
  },
  mounted () {
      if (this.$store.state.message == null) {
          this.notif = false
      } else {
          this.notif = true
      }
  }
}
</script>