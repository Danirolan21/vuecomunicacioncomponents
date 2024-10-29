<template>
  <PadreNumero/>
</template>

<script>
import PadreNumero from './components/PadreNumero.vue'

export default {
  name: 'App',
  components: {
    PadreNumero
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px;
  width: 100%;
  height: 100vh;
  background: repeating-linear-gradient(45deg, #92c9b1, #92c9b1 20px, #b3e0d2 20px, #b3e0d2 40px);
}
h1 {
  color: indigo;
}
</style>
