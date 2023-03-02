<template>
  <div>
    <span id="error">{{ varning }}</span>
    <input placeholder="Fake password" v-model="password" type="password" />
    <button :disabled="!isPasswordStrong">Submit</button>
  </div>
</template>

<style>
  #error {
    color: red;
    font-weight: bold;
    font-size: small;
    display: block;
  }
  input {
    margin-top: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        password: '',
        varning: ''
      }
    },
    computed: {
      isPasswordStrong() {
        return this.password.length >= 8
      }
    },
    watch: {
      password(newValue) {
        if (newValue.length < 8) {
          this.varning = 'Lösenordet måste ha åtta tecken'
        } else {
          this.varning = ''
        }
      }
    }
  }
</script>
