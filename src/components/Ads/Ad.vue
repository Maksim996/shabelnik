<template>
  <v-container>
  <v-layout row>
    <v-flex xs12>
      <v-card v-if="!loading">
        <v-img
          :src="ad.imgSrc"
          height="300"
        ></v-img>
        <v-card-text>
          <h1 class="text--secondary">{{ad.title}}</h1>
          <p>{{ad.description}}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <addEditAdModal :ad="ad" v-if="isOwner"></addEditAdModal> 
          <add-modal-by-ad :ad="ad"></add-modal-by-ad>
        </v-card-actions> 
      </v-card>
      <div v-else>
        <v-container>
          <v-layout row>
            <v-flex xs12 class="text-xs-center pt-5">
              <v-progress-circular
              :size="150"
              :width="10"
              color="primary"
              indeterminate
            ></v-progress-circular>
            </v-flex>
          </v-layout>
        </v-container>
      </div> 
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  import editAdModal from './EditAdModal.vue'

  export default {
    props: ['id'],
    computed: {
      ad () {
        const id = this.id
        return this.$store.getters.adById(id)
      },
      loading () {
        return this.$store.getters.loading
      },
      isOwner () {
        return this.ad.ownerId === this.$store.getters.user.id
      }
    },
    components: {
      addEditAdModal: editAdModal
    }
  }
</script>
