<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      onClick() {
        this.counter = this.counter + 1
        this.$emit('custom')
      }
    },
    computed: {
      message() {
        return `Du har klickat på knappen ${this.counter} gånger.`
      }
    },
    emits: ['custom']
  }
</script>

<style lang="scss">
  $primary-color: green;

  .my-button {
    @import 'bootstrap/scss/bootstrap';

    .btn-primary {
      background-color: $primary-color;
    }
  }
</style>

<template>
  <div class="my-button">
    <button @click="onClick" type="button" class="btn btn-primary">
      klicka
    </button>
  </div>
  {{ message }}
</template>
