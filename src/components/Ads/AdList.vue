<template>
  <v-container>
  <v-layout row>
    <v-flex xs6 sm-6 offset-sm3>
      <h1 class="text--secondary mb-3">My ads</h1>
      <v-card
      class="elevation-10 mb-3"
      v-for="ad in ads"
      :key="ad.id"
      >
        <v-layout row>
          <v-flex xs4>
            <v-img
              height="160"
              :src="ad.imgSrc"
            >
            </v-img>
          </v-flex>
          <v-flex xs8>
            <v-card-text>
              <h2 class="text--primary">{{ad.title}}</h2>
              <p>{{ad.description}}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :to="'/ad/'+ad.id"color="primary">Open</v-btn>
            </v-card-actions>
          </v-flex>  
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        ads: [
          {
            title: 'first',
            description: 'this thing is ...',
            promo: false,
            imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            id: '1'
          },
          {
            title: 'second',
            description: 'this thing is ...',
            promo: true,
            imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: '2'
          },
          {
            title: 'third',
            description: 'this thing is ...',
            promo: true,
            imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: '3'
          }
        ]
      }
    }
  }
</script>
