<template>
  <div>
    <button @click="redirectToHome()">
        Home
    </button>
    <h1>Numero Doble</h1>
    <h3>
        {{mensaje}}
    </h3>
    <h2 v-if="doble != 0">
        {{doble}}
    </h2>
  </div>
</template>

<script>
    export default {
        name: "NumeroDoble",
        methods: {
            redirectToHome() {
                this.$router.push("/")
            }
        },
        watch: {
            '$route.params.numero' (nextVal, oldVal) {
                //SOLAMENTE DEBEMOS REALIZAR LAS ACCIONES
                //CUANDO NUESTRO PARAMETRO CAMBIE
                if (nextVal != oldVal) {
                    this.mensaje = "Esto ha cambiado!!! " + 
                    this.$route.params.numero;
                    if (this.$route.params.numero != "") {
                        let valor = parseInt(this.$route.params.numero);
                        this.doble = valor * 2;
                    } else {
                        this.doble = 0;
                    }
                }
            }
        },
        data() {
            return {
                mensaje: "",
                doble: 0
            }
        },
        mounted() {
            console.log("Param: " + this.$route.params.numero);
            //LOS PARAMETROS SON STRING, NO IMPORTA SI SON NUMERICOS
            let paramNumero = this.$route.params.numero;
            if (paramNumero == "") {
                this.mensaje = "Sin parametros";
            } else {
                this.mensaje = "Con parametros";
                let valor = parseInt(this.$route.params.numero);
                this.doble = valor * 2;
            }
        }
    }
</script>

<style>

</style>