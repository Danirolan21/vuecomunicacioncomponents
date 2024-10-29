<template>
    <div>
        <h1>Padre Numero</h1>
        <h2 v-if="suma != 0">La suma es: {{suma}}</h2>
        <button @click="nuevoNumero()">Nuevo Número</button>
        <button @click="resetSuma()">Reestablecer</button>

        <div v-for="numero in numeros" :key="numero">
            <HijoNumero 
                :numero="numero"
                v-on:sumarNumero="sumarNumero"
            />
        </div>
    </div>
</template>

<script>
    import HijoNumero from './HijoNumero.vue'

    export default {
        name: "PadreNumero",
        methods: {
            nuevoNumero() {
                this.numeros.push(Math.floor(Math.random()* 100) + 1)
            },
            resetSuma() {
                this.suma = 0;
            },
            sumarNumero(numero) {
                console.log("Padre");
                this.suma = this.suma + numero;
            }
        },
        components: {
            HijoNumero
        },
        data() {
            return {
                numeros: [14, 22],
                suma: 0
            }
        }
    }
</script>

<style scoped>
    button {
        padding: 5px;
        border-radius: 8px;
    }
    button:first-of-type {
        margin-right: 10px;
    }
</style>