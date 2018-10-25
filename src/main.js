import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyB8fNX0nDCbjpUD0c6-NP2EXwty42lgpgI',
      authDomain: 'myprojvue.firebaseapp.com',
      databaseURL: 'https://myprojvue.firebaseio.com',
      projectId: 'myprojvue',
      storageBucket: 'myprojvue.appspot.com',
      messagingSenderId: '705885303359'
    })
  }
})
