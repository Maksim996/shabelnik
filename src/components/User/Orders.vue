<template>
  <v-container>
  <v-layout row>
    <v-flex  v-if="loading" xs12 class="text-xs-center pt-5">
      <v-progress-circular
        :size="150"
        :width="10"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-flex>
    <v-flex 
      v-else-if="!loading && orders.length !== 0"
      xs12
      sm6
      offset-sm3
    >
      <h1 class="text--secondary mb-3">Order</h1>
       <v-list
          subheader
          two-line
          
        >
          <v-list-tile 
          v-for="order in orders"
          :key="order.id" 
          >
            <v-list-tile-action>
              <v-checkbox
              :input-value="order.done"
              color="success" 
              @change="markDone(order)"
              ></v-checkbox>
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
    <v-flex v-else xs12>
      <h1>You don't have orders</h1>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      orders () {
        return this.$store.getters.orders
      }
    },
    methods: {
      markDone (order) {
        this.$store.dispatch('markOrderDone', order.id)
          .then(() => {
            order.done = true
          })
          .catch(() => {})
      }
    },
    created () {
      this.$store.dispatch('fetchOrder')
    }
  }
</script>
