<template>
    <div>
        <h1>Seleccion Multiple</h1>
        <select multiple size="6" v-model="selected" style="width: 70px">
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
            <option value="4">option 4</option>
            <option value="5">option 5</option>
            <option value="6">option 6</option>
        </select>
        <br/>
        <button @click="mostrarSeleccionados()">
            Mostrar Seleccionados
        </button>
        <p>
            {{Seleccionados}}
        </p>
    </div>
</template>

<script>
    // import Multiselect from 'vue-multiselect'

    export default {
        name: "SeleccionMultiple",
        components: {
            // Multiselect
        },
        methods: {
            mostrarSeleccionados() {
                let aux = "";
                for (let option of this.selected) {
                    aux += option + ", ";
                }
                this.Seleccionados = aux;
            }
        },
        data() {
            return {
                selected: [],
                Seleccionados: "",
                options: [
                    {name: 'Vue.js', language: 'JavaScript'},
                    {name: 'Rails', language: 'Ruby'},
                    {name: 'Sinatra', language: 'Ruby'},
                    {name: 'Laravel', language: 'PHP', $isDisabled: true},
                    {name: 'Phoenix', language: 'Elixir'}
                ]
            }
        }
    }
</script>

<style>

</style>