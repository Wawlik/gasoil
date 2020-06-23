<template>
  <div id="app">
    <main-list/>
  </div>
</template>

<script>
import mainList from './components/mainList.vue'

export default {
  name: 'App',
  components: {
    mainList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
