<script setup lang="ts">
import { ref } from 'vue';
import Input from "../components/Input.vue"
import Button from "../components/Button.vue"
import Game from "../components/Game.vue"
import { useAxios } from '@vueuse/integrations/useAxios'

export interface Game {

  handle: string
  name: string;
  image_url: string
  image: string
}

const searchedGame = ref<string>('')
const gamesList = ref<Game[]>([])

const getData = async () => {
  if (searchedGame.value === "") {
    alert("Please, enter a game")
    return
  }
  const { data } = await useAxios(`https://api.boardgameatlas.com/api/search?name=${searchedGame.value}&fuzzy_match=true&client_id=JLBr5npPhV`)

  const games = data.value.games.map((game: Game) => ({ name: game.handle, image: game.image_url }))
  gamesList.value = games
}

</script>

<template>
  <h1>Rechercher un jeu</h1>

  <div>
    <Input v-model="searchedGame" :placeholder="'Recherchez un jeu'" />
    <Button @clicked="getData()" :name="'Valider'" />

    <div class="container-flex">
      <div class="container-game" v-for="game in gamesList" :key="game.handle">
        <Game :game="game" />

      </div>
    </div>
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

h1 {
  font-size: 22px;
  padding-left: 20px;
  padding-top: 20px;
  color: #1e4975;
}
</style>