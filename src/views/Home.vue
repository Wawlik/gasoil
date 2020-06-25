<template>
  <div class="home">
    <main-list msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainList from '@/components/mainList.vue'

export default {
  name: 'Home',
  components: {
    mainList
  }
}
</script>
