<template>
  <v-container>
  <v-layout row>
    <v-flex xs12 md6 offset-sm3>
      <h1 class="text--secondary mb-3">Create new add</h1>
      <v-form ref="form" v-model="valid" validation>
        <v-text-field 
        name="title" 
        label="Ad title" 
        type="text"
        v-model="title"
        required
        :rules="titleRules"
        ></v-text-field>
        <v-textarea 
        name="description" 
        label="Description" 
        type="text"
        v-model="description"
        :rules="descriptionRules"
        ></v-textarea>
      </v-form>
      <v-layout row class="mt-3">
        <v-flex xs12 >
          <v-btn color="success"> Upload
            <v-icon right dark>cloud_upload</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-layout row class="mt-3">
        <v-flex xs12>
          <img height="200" src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" alt="foto">
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-switch
            color="primary"
            label="add to promo"
            v-model="promo"
          ></v-switch>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12>
          <v-spacer></v-spacer>
          <v-btn 
          class="primary"
          @click="creareAd"
          :disabled="!valid"
          >Create ad</v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
  
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        valid: false,
        promo: false,
        titleRules: [
          v => !!v || 'title is required'
        ],
        descriptionRules: [
          v => !!v || 'description is required'
        ]
      }
    },
    methods: {
      creareAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
          console.log(ad)
        }
      }
    }
  }
</script>
