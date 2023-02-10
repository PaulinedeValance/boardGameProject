<script setup lang="ts">
import { ref } from 'vue';
import Input from "../components/Input.vue"
import Button from "../components/Button.vue"
import { useAxios } from '@vueuse/integrations/useAxios'

interface Game {
  handle: string
  name: string;
  image_url: string
  image: string
}

const searchedGame = ref<string>('')
const gamesList = ref<Game[]>([])

const getData = async () => {

  const { data } = await useAxios(`https://api.boardgameatlas.com/api/search?name=${searchedGame.value}&fuzzy_match=true&client_id=JLBr5npPhV`)

  const games = data.value.games.map((game: Game) => ({ name: game.handle, image: game.image_url }))
  gamesList.value = games
}
//getData()

</script>

<template>
  <h1>Rechercher un jeu</h1>


  <div>
    <Input v-model="searchedGame" :placeholder="'Recherchez un jeu'" />
    <Button @clicked="getData()" :name="'Valider'" />

    <div v-for="game in gamesList" :key="game.handle">{{ game.name }} <img class="img-api" :src="game.image" />
    </div>
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