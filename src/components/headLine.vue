<template>
  <h1 id="bigname">{{ pageName }}</h1>
</template>
<script>
  export default {
    props: {
      pageName: { type: String, required: true }
    }
  }
</script>
<style>
  #bigname {
    text-align: center;
  }
</style>
