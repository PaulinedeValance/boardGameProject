<script setup lang="ts">
import Game from "../components/Game.vue";
import { useFavoriteStore } from "@/store";

const { favorites } = useFavoriteStore();
</script>

<template>
  <h1>Mes jeux favoris</h1>
  <div>

    <div v-for="favorite in favorites"><Game :game="favorite" /></div>
  </div>
</template>

<style></style>
