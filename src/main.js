import Vue from 'vue'
import App from './App'
import router from './router'
import BuyModalAd from '@/components/Shared/BuyModalAd'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
// import errorMy from 'error/error.vue'

// Vue.component('app-error', errorMy)

Vue.use(Vuetify)
Vue.component('add-modal-by-ad', BuyModalAd)
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
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
