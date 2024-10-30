<template>
  <div>
    <h1>Ejemplo Checkbox</h1>
    <button @click="generarCheckbox()">
        Generar Checkbox
    </button><br/><br/>
    <div id="checkboxes" v-for="numero in numeros" :key="numero">
        <input type="checkbox" :value="numero" v-model="seleccionados">
        {{numero}}
    </div>
    <h2 v-if="suma != 0">
        La suma seleccionada es {{suma}}
    </h2>
  </div>
</template>

<script>
    export default {
        name: "SumaCheckbox",
        methods: {
            generarCheckbox() {
                this.numeros.push(Math.floor(Math.random()* 60) + 1)
            }
        },
        updated() {
            let aux = 0;
            for (let numero of this.seleccionados) {
                aux += numero;
            }
            this.suma = aux;
            
        },
        data() {
            return {
                numeros: [14, 22, 1, 3, 56, 44, 21, 19],
                suma: 0,
                seleccionados: []
            }
        }
    }
</script>

<style scoped>
    h2 {
        color: blue;
    }
    div#checkboxes {
        display: inline;
    }
</style>