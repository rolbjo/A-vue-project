<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Password from './components/PasswordCheck.vue'
  import vuex from './components/vuex.vue'
  import maintitle from './components/headLine.vue'

  export default {
    components: {
      HelloWorld,
      Password,
      vuex,
      maintitle
    },
    methods: {
      logga() {
        console.log('Värdet har ökat!')
      }
    }
  }
</script>

<template>
  <maintitle page-name="Fast news" />

  <nav>
    <ul id="navbar">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li>
        <RouterLink to="/world">World news</RouterLink>
      </li>
      <li><RouterLink to="/science">Science news </RouterLink></li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
  <div id="fun">
    <p id="boxtitle">Fun box!</p>
    <HelloWorld @custom="logga" />
    <Password />
    <vuex />
  </div>
</template>

<style lang="scss">
  $font: 'Poppins', sans-serif;
  body {
    font-family: $font;
    padding-left: 40px;
    padding-right: 40px;
  }
  #fun {
    display: inline-block;
    box-shadow: 0 0 11px 11px black;
    box-sizing: border-box;
    padding: 20px;
    margin-bottom: 35px;
  }
  #boxtitle {
    color: rgb(51, 0, 255);
    font-weight: 600;
    text-align: center;
  }
  nav {
    display: flex;
    justify-content: center;
  }
  input {
    height: 22px;
    align-items: center;
    order: 4;
    margin-top: 18px;
  }

  ul {
    display: flex;
    list-style: none;
    padding-left: 0;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: black;
    font-weight: 900;
    font-size: large;
    padding-right: 5px;
    text-decoration: underline;
  }
  #navbar {
    display: flex;
    justify-content: center;
  }
</style>
