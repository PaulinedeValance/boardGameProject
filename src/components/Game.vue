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
.container-flex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.container-game {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

.card-games {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    text-align: center;
    border-right: 1px #1e4975 solid;
    padding: 5px;
}

.game-title {
    text-align: center;
    padding: 25px;
    color: #1e4975;
    font-family: 'Oxygen', sans-serif;
    font-weight: 700;

}

.img-api {
    width: 100%;
    max-width: 200px;
}
</style>