<template>
  <div class="home">
    <h1>HomePage</h1>
    <p class="red white--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae, accusantium reprehenderit molestias atque beatae quam laboriosam voluptatibus? Delectus earum quo, quas commodi ipsa sed quibusdam sit velit deleniti tenetur.</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, possimus, nobis culpa molestiae aliquam nesciunt error tenetur corrupti voluptates optio natus consectetur? Modi illum ullam iste quam dolores. Unde, exercitationem.</p>
    <h1 class="display-4">Massive Display</h1>
    <h4 class="display-1">Smaller Display</h4>
    <p class="headline">Headline</p>
    <p class="subheading font-weight-light">subhead</p>
    <p class="caption">caption</p>
    <v-btn></v-btn>
    <v-text-field v-model="msg" label="Notification Title" v-on:keyup.enter="setMessage"></v-text-field>
    <v-text-field label="Notification Text"></v-text-field>
    <v-text-field label="Notification Type"></v-text-field>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'FrontPage',
  data(){
      return {
        msg: null
      }
  },
  methods: {
    setMessage () {
      /* eslint-disable */
      this.$store.dispatch('setMessage',this.msg)
    }
  }
}
</script>
