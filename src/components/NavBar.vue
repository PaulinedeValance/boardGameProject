<script setup lang="ts">
</script>

<template>

    <div class="container-nav">
        <img class="logo" src="../assets/meepleland-2.png" alt="logo">
        <ul class="navbar-display">
            <li class="navbar-link"><router-link to="/">Home</router-link></li>
            <li class="navbar-link"><router-link to="/favoris">Favoris</router-link></li>
        </ul>
    </div>

</template>

<style scoped>
.container-nav {
    background-color: rgba(207, 205, 205, 0.289);
    display: flex;
    align-items: center;
}

.logo {
    width: 12%;
}

.navbar-display {
    display: flex;
    gap: 50px;
    font-size: 21px;
    color: #1e4975;
}

.navbar-link {
    list-style: none;
}

a {
    text-decoration: none;
    color: #1e4975;
}

a:hover {
    color: rgb(165, 44, 68);
}
</style>