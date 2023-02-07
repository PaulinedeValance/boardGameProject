<script lang="ts">
</script>

<template>
    <nav>
        <ul class="navbar-display">
            <li class="navbar-link"><router-link to="/">Home</router-link></li>
            <li class="navbar-link"><router-link to="/favoris">Favoris</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar-display {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.navbar-link {
    list-style: none;
    padding: 20px;

}

a {
    text-decoration: none;
}
</style>