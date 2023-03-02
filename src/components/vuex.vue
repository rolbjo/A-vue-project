<script>
  export default {
    data() {
      return { plus: '' }
    }
  }
</script>

<template>
  <input placeholder="Addera här" v-model="plus" />
  <input
    @click="$store.commit('addition', Number(plus))"
    type="button"
    value="+"
  />
  <input @click="$store.commit('zero')" type="button" value="Nollställ" />
  <div>{{ $store.state.sum }}</div>
</template>
<style>
  #styling {
    font-weight: bolder;
  }
</style>
