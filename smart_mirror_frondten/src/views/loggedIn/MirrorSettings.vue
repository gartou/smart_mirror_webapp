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
        <v-expansion-panel-header>Mirror Settings</v-expansion-panel-header>
        <v-expansion-panel-content>
          Test
        </v-expansion-panel-content>
      </v-expansion-panel>

       <v-expansion-panel class="mb-1">
        <v-expansion-panel-header>Picture Settings</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container>
            <v-row>
              <v-col md="4">
                <v-file-input show-size counter :loading="picStatus" v-model="img_obj" :disabled="picStatus" accept="image/*" label="Upload photos"></v-file-input>
              </v-col>
              <v-col md="4">
                <v-btn color="blue" v-on:click="uploadNewPhoto">Upload</v-btn>
              </v-col>

            </v-row>
          </v-container>
          <v-container class="pa-4 text-center">
              <v-row class="fill-height" align="center" justify="center">
                <template v-for="(item, i) in items">
                  <v-col
                    :key="i"
                    cols="12"
                    md="4"
                  >
                      <div class="align-self-center">
                        <v-btn
                          v-on:click="deletePic(picID)"
                          class="mt-auto"
                          icon
                          >
                          <v-icon color="black">mdi-delete</v-icon>
                        </v-btn>
                        <v-btn
                          v-on:click="updatePic(picID)"
                          class="mt-auto"
                          icon
                          >
                          <v-icon color="black">mdi-update</v-icon>
                        </v-btn>
                      </div>
                    <v-hover v-slot:default="{ hover }">
                      <v-card
                        :elevation="hover ? 12 : 2"
                        :class="{ 'on-hover': hover }"
                      >
                        <v-img
                          :src="items[i].originalBase64"
                          height="225px"
                        >
                        </v-img>
                      </v-card>
                    </v-hover>
                  </v-col>
                </template>
              </v-row>
            </v-container>
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
        items: [
          // {
          //   img: 'http://lorempixel.com/output/nightlife-q-c-640-480-5.jpg'
          // },
        ],
        picStatus: false,
        img_obj: null,
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
      async uploadNewPhoto() {
        this.picStatus = true
        
        if (!this.img_obj.type.includes('image/')) {
        this.$store.dispatch('setMessage','Please select an image file')
        this.$store.dispatch('setMessageActive',true)
        this.$store.dispatch('setMessageColor','orange')
        return
        }

        try {
          const formData = new FormData()
          formData.append('file', this.img_obj)
          formData.append('username', this.$store.state.username)
          /* eslint-disable-next-line*/
          const response = await UserDataService.SendUserPics(formData)

          this.$store.dispatch('setMessage','The upload was successfull!')
          this.$store.dispatch('setMessageActive',true)
          this.picStatus = false
          this.$store.dispatch('setMessageColor','green')
          await this.reloadPics();
        } catch (error) {
            this.$store.dispatch('setMessage', error.response.data.error)
            this.$store.dispatch("setMessageActive",true)
            this.$store.dispatch('setMessageColor','orange')
        }
      }


    },
    mounted: async function reloadPics() {
      // const sizeOf = require('image-size');
      // const imageThumbnail = require('image-thumbnail');
      /* eslint-disable */
      try {
        const response = await UserDataService.GetUserPics({
          username: this.$store.state.username
        })

        var dbpics = response.data.pictures
        
        dbpics.forEach(async item => {
          let imgData = item.picture.data
          let base64 = 'data:image/jpeg;base64,' + btoa(new Uint8Array(imgData).reduce((data, byte) => data + String.fromCharCode(byte), ''))
          
          await this.items.push({ originalImg: imgData, originalBase64: base64/*, width: dimensions.width, height: dimensions.height, thumbnail: thumbnail*/})
        })

      } catch (error) {
        this.$store.dispatch('setMessage', error.response.data.error)
        this.$store.dispatch("setMessageActive",true)
        this.$store.dispatch('setMessageColor','orange')
      }
    },
  }
</script>



<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}