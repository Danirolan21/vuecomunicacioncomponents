<template>
    <div>
        <h2>{{comic.titulo}}</h2>
        <button v-if="!favorito" @click="seleccionarFavorito()">
            seleccionar Favorito
        </button><br/><br/>
        <button v-if="!favorito" @click="deleteComic()">
            Eliminar
        </button>
        <p>{{comic.descripcion}}</p>
        <img :src="comic.imagen" alt=""/>
        <h4 :class="{
            rojo: comic.year <= 2000,
            verde: comic.year > 2000
        }">
            Año: {{comic.year}}
        </h4>
    </div>
</template>

<script>
    export default {
        name: "ComicComponent",
        props: [ "comic", "index", "favorito" ],
        methods: {
            seleccionarFavorito() {
                this.$emit("seleccionarFavorito", this.comic)
            },
            deleteComic() {
                this.$emit("deleteComic", this.index)
            }
        }
    }
</script>

<style>

</style>