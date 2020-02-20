<template>
  <div id="app">
    <SlideShow
    />
  </div>
</template>

<script>
import SlideShow from './components/SlideShow.vue'

export default {
  name: 'App',
  components: {
    SlideShow
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
