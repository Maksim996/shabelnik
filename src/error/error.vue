<template >
    <v-snackbar
      @input="closeError"
      :bottom="true"
      color="error"
      :left="true"
      :multi-line="true" 
      :timeout="5000"
      :value="!!error"
    >
      {{error}}
      <v-btn
        dark
        flat
        @click.native="closeError"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>

<script>
  export default {
    computed: {
      error () {
        return this.$store.getters.error
      }
    },
    methods: {
      closeError () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>