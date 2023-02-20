<script setup lang="ts">
//import { Game } from "../views/HomePage.vue"
defineProps<{
    game?: any

}>()
</script>

<template>
    <div class="card-games">
        <img class="img-api" :src="game.image" />
        <p class="game-title">{{ game.name }}</p>
    </div>
</template>

<style scoped>
.card-games {
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    border: 1px #1e4975 solid;
    box-shadow: 0 3px 5px rgba(30, 51, 119, 0.5);
    padding: 10px;
}

.container-game img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.game-title {
    text-align: center;
    padding: 25px;
    color: #1e4975;
    font-family: 'Didact Gothic', sans-serif;
    font-weight: 700;

}

/* .img-api {
    width: 100%;
    max-width: 200px;
} */
</style>