/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token: null,
    user: null,
    glitched: false,

    userData: null,
    username: '',
    userEmail: '',
    userFirstName: '',
    userLastName: '',

    isUserLoggedIn: false,
    message: null,
    messageActive: false,
    messageColor: 'orange',
    drawerStatus: true
  },
  mutations: {
    setGlitch (state, glitch) {
      state.glitched = glitch
    },
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setUserData (state, userData) {
      state.userData = userData
      if (userData != null) {
        const userDataParsed = JSON.parse(userData)

        userDataParsed.forEach(element => {
        switch(element.parameter_name) {
          case "email":
            console.log(element.parameter_value)
            state.userEmail = element.parameter_value
            break;
          case "username":
            state.username = element.parameter_value
            break;
          case "firstname":
            state.userFirstName = element.parameter_value
            break;
          case "lastname":
            state.userLastName = element.parameter_value
            break;
        }
        });
      }
    },
    setMessage (state, message) {
      state.message = message
      if (message != null) {
        state.messageActive = true
      } else {
        state.messageActive = false
      }
    },
    setMessageActive (state, active) {
      state.messageActive = active
    },
    setMessageColor (state, color) {
      state.messageColor = color
    },
    setDrawerStatus (state, status) {
      state.drawerStatus = status
    },

    setUsername (state, username) {
      state.username = username
    },
    setUserEmail (state, userEmail) {
      state.userEmail = userEmail
    },
    setUserFirstName (state, userFirstName) {
      state.userFirstName = userFirstName
    },
    setUserLastName (state, userLastName) {
      state.userLastName = userLastName
    },

    SetLogoutEverything (state) {
      state.token = null,
      state.user = null,
      state.glitched = false,

      state.userData = null,
      state.username = null,
      state.userEmail = null,
      state.userFirstName = null,
      state.userLastName = null,

      state.isUserLoggedIn = false,
      state.message  = null,
      state.messageActive = false
      state.messageColor = 'orange'
    }
  },

  actions: {
    setGlitch ({commit}, glitch) {
      commit('setGlitch', glitch)
    },
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setUserData ({commit}, userData) {
      commit('setUserData', userData)
    },
    setMessage ({commit}, message) {
      commit('setMessage', message)
    },
    setMessageActive ({commit}, active) {
      commit('setMessageActive', active)
    },
    setMessageColor ({commit}, color) {
      commit('setMessageColor', color)
    },
    setDrawerStatus ({commit}, status) {
      commit('setDrawerStatus', status)
    },

    setUsername ({commit}, username) {
      commit('setUsername', username)
    },
    setUserEmail ({commit}, userEmail) {
      commit('setUserEmail', userEmail)
    },
    setUserFirstName ({commit}, userFirstName) {
      commit('setUserFirstName', userFirstName)
    },
    setUserLastName ({commit}, userLastName) {
      commit('setUserLastName', userLastName)
    },
    SetLogoutEverything ({commit}) {
      commit('SetLogoutEverything')
    }
  }
})