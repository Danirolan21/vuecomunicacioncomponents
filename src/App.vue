<template>
  <SeleccionMultiple/>
</template>

<script>
import SeleccionMultiple from './components/SeleccionMultiple.vue'

export default {
  name: 'App',
  components: {
    SeleccionMultiple
  }
}
</script>

<style>
body {
  margin: 0;
  height: 100vh;
  background: repeating-linear-gradient(45deg, #92c9b1, #92c9b1 20px, #b3e0d2 20px, #b3e0d2 40px);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px;
  width: 100%;
  height: 100%;
}
h1 {
  color: indigo;
}
</style>
