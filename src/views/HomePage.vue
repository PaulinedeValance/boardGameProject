
<script setup lang="ts">
import { ref } from 'vue';
import Input from "../components/Input.vue"
import Button from "../components/Button.vue"

const newGame = ref<string>('')
</script>

<template>
  <h1>Rechercher un jeu</h1>

  <Input v-model="newGame" :placeholder="'Recherchez un jeu'" />

  <Button />
  <p>{{ newGame }}</p>

</template>

<style scoped>
h1 {
  font-size: 19px;
  padding-left: 20px;
  padding-top: 20px;
  color: #1e4975;
}
</style>