<template>
  <v-container>
  <v-layout row>
    <v-flex 
    xs12
    sm6
    offset-sm3
    v-for="order in orders"
    :key="order.id"
    >
    <h1 class="text--secondary mb-3">Order</h1>
       <v-list
          subheader
          two-line
        >
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-checkbox color="success" @change="markDone(order)"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn :to="'/ad/ + order.adId'" color="primary">Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        orders: [
          {
            id: 'aa1',
            name: 'Vlad',
            phone: '8-203-22-22',
            adId: '1',
            done: false
          }
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>
