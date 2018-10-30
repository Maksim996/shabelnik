<template>
    <v-app>
    <v-navigation-drawer 
      app 
      temporary
      v-model="drawer"
    >
      <v-list>

        <v-list-tile
          v-for="item,i in links"
          :key="i"
          :to="item.url" 
        >
          <v-list-tile-action>
            <v-icon left>{{item.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
        <v-list-tile
        v-if="isUserLogginIn"
        @click="onLogOut"
        >
          <v-list-tile-action>
            <v-icon left>exit_to_app</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="'Log out'"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>

      </v-list> 
    
    

    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon
        @click="drawer=!drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title >
        <router-link to="/" tag="span" class="pointer">
          Ad application
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        
        <v-btn 
        v-for="item,i in links"
        :key="i"
        :to="item.url"
        flat
        >
          <v-icon left>
            {{item.icon}}
          </v-icon>
          {{item.title}}
        </v-btn>

        <v-btn 
        flat
        @click="onLogOut"
        v-if="isUserLogginIn"
        >
          <v-icon left>
            exit_to_app
          </v-icon>
          Log out
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <app-error></app-error>
  </v-app>
  
</template>

<script>

import error from './error/error.vue'

export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    isUserLogginIn () {
      return this.$store.getters.isUserLogginIn
    },
    links () {
      if (this.isUserLogginIn) {
        return [
          {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
          {title: 'New ad', icon: 'note_add', url: '/new'},
          {title: 'My ads', icon: 'list', url: '/list'}
        ]
      }
      return [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'}
      ]
    }
  },
  methods: {
    onLogOut () {
      this.$store.dispatch('logOut')
      this.$router.push('/')
    }
  },
  components: {
    appError: error
  }
}
</script>
<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>