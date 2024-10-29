<template>
    <div>
        <h1>Numero Hijo: {{numero}}</h1>
        <button @click="sumarNumero()">Sumar  {{numero}}</button>
    </div>
</template>

<script>
    export default {
        name: "HijoNumero",
        props: [ "numero" ],
        methods: {
            sumarNumero() {
                console.log("Hijo");                
                this.$emit("sumarNumero", this.numero);
            }
        }
    }
</script>

<style scoped>

</style>