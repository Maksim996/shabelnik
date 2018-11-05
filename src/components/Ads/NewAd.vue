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
            <v-btn 
            color="success"
            @click="triggerUpload"
            > Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <input 
            ref="fileInput" 
            type="file" 
            style="display:none" 
            accept="image/*"
            @change="onFileChange"
            >
          </v-flex>
        </v-layout>
        <v-layout row class="mt-3">
          <v-flex xs12>
            <img height="200" :src="imageSrc" v-if="imageSrc">
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
            :loading="loading"
            @click="creareAd"
            :disabled="!valid || !image || loading"
            >
              Create ad
            </v-btn>
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
        image: null,
        imageSrc: '',
        titleRules: [
          v => !!v || 'title is required'
        ],
        descriptionRules: [
          v => !!v || 'description is required'
        ]
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      creareAd () {
        if (this.$refs.form.validate() && this.image) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            image: this.image
          }
          this.$store.dispatch('createAd', ad)
            .then(() => {
              this.$router.push('/list')
            })
            .catch(() => {})
        }
      },
      triggerUpload () {
        this.$refs.fileInput.click()
      },
      onFileChange (event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = e => {
          this.imageSrc = reader.result
        }
        reader.readAsDataURL(file)
        this.image = file
      }
    }
  }
</script>
