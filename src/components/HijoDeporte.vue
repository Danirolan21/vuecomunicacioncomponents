<template>
    <div>
        <li style="color: blue">
            {{nombredeporte}}
            <button @click="seleccionarFavorito()">
                Seleccionar favorito
            </button>
        </li>
    </div>
</template>

<script>
    export default {
        name: "HijoDeporte",
        props: [ "nombredeporte" ],
        methods: {
            seleccionarFavorito() {
                console.log("Soy el Hijo");
                //DEBEMOS REALIZAR LA LLAMADA AL PARENT
                //DICHA LLAMADA SE HACE MEDIANTE string "nombreMetodoParent"
                //PARA ENVIAR INFORMACION, SE REALIZA CON COMAS POR CADA PARAMETRO
                //QUE TENGAMOS EN LA RECEPCION
                this.$emit("seleccionarFavoritoParent", this.nombredeporte);
            }
        },
        mounted() {
            console.log(this.nombredeporte);
            
        }
    }
</script>

<style scoped>

</style>