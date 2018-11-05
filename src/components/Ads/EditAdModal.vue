<template>
  <v-dialog
  v-model="modal"
  width="400px"
  >
    <v-btn class="warning mr-3" flat slot="activator">Edit</v-btn>
    <v-card>
      <v-container>
         <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1>Edit ad</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field 
              name="title" 
              label="Title" 
              type="text"
              v-model="editedTitle"
              ></v-text-field>
              <v-textarea 
              name="discription" 
              label="Discription" 
              type="text"
              v-model="editedDiscription"
              ></v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-divider></v-divider>
            <v-card-actions class="pt-4">
              <v-spacer></v-spacer>
              <v-btn class="error" flat @click="onCancel">Cancel</v-btn>
              <v-btn class="success" flat @click="onSave" >Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    props: ['ad'],
    data () {
      return {
        modal: false,
        editedTitle: this.ad.title,
        editedDiscription: this.ad.description
      }
    },
    methods: {
      onCancel () {
        this.editedTitle = this.ad.title
        this.editedDiscription = this.ad.description
        this.modal = false
      },
      onSave () {
        if(this.editedTitle !== '' && this.description !== ''){
          this.$store.dispatch('updateAd', {
            title: this.title,
            discription: this.discription,
            id: this.ad.id
          }) 
          this.modal = false
        }
      }
    }
  }
</script>