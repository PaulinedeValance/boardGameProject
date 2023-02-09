<script setup lang="ts">
import { ref } from 'vue';
import Input from "../components/Input.vue"
import Button from "../components/Button.vue"
import { useAxios } from '@vueuse/integrations/useAxios'

interface Game {
  id: string;
  handle: string
  name: string;
  image_url: string
  image: string
}

const gamesList = ref<Game[]>([])
const getData = async () => {
  const { data } = await useAxios('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=JLBr5npPhV')
  console.log(data.value.games)
  const games = data.value.games.map((game: Game) => ({ id: game.id, name: game.handle, image: game.image_url }))
  gamesList.value = games
}
getData()

const newGame = ref<string>('')
const eraseText = ref<string>('')
const newText = ref<string>('')
const deleteSpace = ref<string>('')

const logger = () => {
  console.log(newGame.value);
}

const clearInput = () => {
  return eraseText.value = '';
}

const transformToUpperCase = () => {
  newText.value = newText.value.toUpperCase()
}

const deleteSpaceInput = () => {
  deleteSpace.value = deleteSpace.value.replace(/\s/g, '')
}

</script>

<template>
  <h1>Rechercher un jeu</h1>
  <!-- <div v-for="game in games"> name : {{ game.name.toUpperCase() }} date de sortie : {{ game.releaseDate }}</div> -->
  <div v-for="game in gamesList" :key="game.handle">{{ game.name }} - <img class="img-api" :src="game.image" />
  </div>

  <div>
    <Input v-model="newGame" :placeholder="'Recherchez un jeu'" />
    <Button @clicked="logger()" :name="'Valider'" />
  </div>

  <div>
    <Input v-model="eraseText" :placeholder="'effacer input'" />
    <Button @clicked="clearInput()" :name="'Supprimer'" />
  </div>
  <div>
    <Input v-model="newText" :placeholder="'en majuscule'" />
    <Button @clicked="transformToUpperCase()" :name="'to upperCase'" />
  </div>
  <div>
    <Input v-model="deleteSpace" :placeholder="'supprimer espaces'" />
    <Button @clicked="deleteSpaceInput()" :name="'delete spaces'" />
  </div>


</template>

<style scoped>
.img-api {
  width: 20%;
}

h1 {
  font-size: 22px;
  padding-left: 20px;
  padding-top: 20px;
  color: #1e4975;
}
</style>