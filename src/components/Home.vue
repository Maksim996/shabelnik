<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="i in ads"
              :key="i.id"
              :src="i.imgSrc"
            >
              <div class="card-link">
                <v-btn color="error" :to="'/ad/'+i.id">{{i.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex 
          xs12
          sm6
          md4
          v-for="i in ads"
          :key="i.id"
        >
          <v-card>
            <v-img
              :src="i.imgSrc"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{i.title}}</h3>
                <div>{{i.description}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/'+i.id" color="primary">Open</v-btn>
              <v-btn rasied color="success">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
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
<style scoped>
  .card-link{
    position: absolute;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    padding: 5px 15px;
    background: rgba(0,0,0,.5);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>