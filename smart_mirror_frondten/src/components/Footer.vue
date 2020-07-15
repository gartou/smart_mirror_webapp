<template>
  <v-footer
    dark
    padless
    app
    :inset="true"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <Notif />

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Smart Mirror</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import Notif from './Notification'
export default {
    components: {
        Notif
    }
    
}
</script>