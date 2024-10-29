<template>
    <div>
        <h1>Padre Deporte</h1>
        <h2 style="background-color: yellow" v-if="favorito">
            Su deporte favorito es {{favorito}}
        </h2>
        <ul v-for="deporte in deportes" :key="deporte">
            <HijoDeporte :nombredeporte="deporte"
            v-on:seleccionarFavoritoParent="seleccionarFavoritoParent"/>
        </ul>
    </div>
</template>

<script>
    import HijoDeporte from './HijoDeporte.vue'

    export default {
        name: "PadreDeporte",
        methods: {
            //CREAMOS UN METODO PARA QUE SEA LLAMADO DESDE EL HIJO
            seleccionarFavoritoParent(deporteFavorito) {
                console.log("Yo soy tu Padre");
                this.favorito = deporteFavorito
            }
        },
        components: {
            HijoDeporte
        },
        data() {
            return {
                deportes: ["Surf", "Curling", "Bolos", "Petanca", "Cartas", "Peonza"],
                favorito: null
            }
        }
    }
</script>

<style scoped>

</style>