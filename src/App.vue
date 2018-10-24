<template>
  <v-app>
  <v-navigation-drawer 
    app 
    temporary
    v-model="drawer"
  >
    <v-list>

      <v-list-tile
        v-for="item,i in items"
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

    </v-list> 
  
  

  </v-navigation-drawer>
  <v-toolbar app dark color="primary">
    <v-toolbar-side-icon
      @click="drawer=!drawer"
      class="hidden-md-and-up"
    ></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      
      <v-btn 
      v-for="item,i in items"
      :key="i"
      :to="item.url"
      flat
      >
        <v-icon left>
          {{item.icon}}
        </v-icon>
        {{item.title}}
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        {title: 'Login', icon: 'lock', url: '/login'},
        {title: 'Registration', icon: 'face', url: '/registration'},
        {title: 'Orders', icon: 'bookmark_border', url: '/orders'},
        {title: 'New ad', icon: 'note_add', url: '/new'},
        {title: 'My ads', icon: 'list', url: '/list'}
      ]
    }
  }
}
</script>
