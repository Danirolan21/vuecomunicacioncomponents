<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">
                        Home
                </router-link>
            </li>
            <li>
                <router-link to="/checkboxes">
                        Checkboxes
                </router-link>
            </li>
            <li>
                <router-link to="/comics">
                        Comics
                </router-link>
            </li>
            <li>
                <router-link to="/numeroDoble">
                        NumeroDoble
                </router-link>
            </li>
            <li>
                <router-link to="/numeroDoble/77">
                        NumeroDoble
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuRutas"
    }
</script>

<style>
    ul#menu {
        background-color: blanchedalmond;
        margin: 0;
        padding: 10px 0 10px 0;
    }

    ul#menu li {
        display: inline;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 20px;
        font-weight: bold;
    }
    
    ul#menu li:hover a{
        color: cadetblue;
        font-size: 28px;
    }
    
    ul#menu li a {
        text-decoration: none;
        color: cornflowerblue;
        transition: all 0.5s;
    }

    ul#menu li:not(:last-child) {
        margin-right: 15px;
    }
</style>