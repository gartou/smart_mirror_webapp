<template>
  <v-app>
    <v-content class="black">
      <glitch text="Glitched 404 I don'z Know whaty goin' o?~" class="mb-5 mt-9"></glitch>

      <glitch class="mb-5"
        text="S`Ea`R ?R?? appeared to be stuck" color="DeepPink"
        >
      </glitch>

      <glitch class="mb-5" text="Text that looks spooky with custom background" color="Orange" 
        background="steelblue"
        >
      </glitch>

      <glitch class="mb-5" text="Can yu see?~ mé?_" background="white"></glitch>

    <v-container class="black lighten-5">
    <v-row no-gutters>
      <v-col cols="1" class="black">
        <v-card
          class="pa-2"
          tile
        >
          <glitch class="mb-5" text="Can hel???p? ~mé?_" background="white"></glitch>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card
          class="pa-2 black mt-10"
          tile
        >
          <glitch text="whó is-,? here?" background="red" color="purple"></glitch>
      </v-card>

      </v-col>
      <v-col cols="6">
        <v-card
          class="pa-2 red mt-12"
          tile
          v-on:click="trunfo"
        >
          <glitch class="mb-5" text="Pleas`e` go b????ack" color="Orange" 
        background="blue"
        >
      </glitch>
      </v-card>
      </v-col>
    </v-row>
    </v-container>


    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      bg_color: "red",
    }
  },
  methods: {
    trunfo() {
      this.$router.push('/')
      this.$store.dispatch('setGlitch', false)
    }
  }
}
</script>

<style scoped>
.glitch {
  margin-bottom: 20px;
  padding: 20px;
}

.glitch-wrapper {
  font-size: 40px;
  font-family: sans-serif;
}
</style>
