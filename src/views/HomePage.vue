<script setup lang="ts">
import { ref } from 'vue';
import Input from "../components/Input.vue"
import Button from "../components/Button.vue"
import Game from "../components/Game.vue"
import { useAxios } from '@vueuse/integrations/useAxios'
import { computed } from 'vue'

export interface Game {

  handle: string
  name: string;
  image_url: string
  image: string
  id: string
}

// store the value of the search input
const searchedGame = ref<string>('')
// store the list of games
const gamesList = ref<Game[]>([])
const errorMessage = ref<string>('')
const notFoundGame = ref<string>('')

const emptyHeartIcon = 'heart.png'
const filledHeartIcon = 'filled-heart.png'
const isLiked = ref<boolean>(false)

// fetch the api with an async function
const getData = async () => {
  errorMessage.value = ""
  if (searchedGame.value === "") {
    errorMessage.value = "Please enter a game"
    return
  }
  const { data } = await useAxios(`https://api.boardgameatlas.com/api/search?name=${searchedGame.value}&fuzzy_match=true&client_id=JLBr5npPhV`)

  // map over the datas and keep the games name and images url
  const games = data.value.games.map((game: Game) => ({ name: game.handle, image: game.image_url, id: game.id }))
  // update the gamesList with the list of games 
  gamesList.value = games;
  // clear the input value after the button is clicked
  searchedGame.value = ''

  notFoundGame.value = ""
  if (gamesList.value.length === 0) {
    notFoundGame.value = "Désolé, ce jeu n'existe pas"
  }
}
// This function toggle isLiked when the button is clicked
const buttonToggleHeart = () => {
  isLiked.value = !isLiked.value
  //console.log("cliqué");
}

// if isLiked is true, return the empty heart, else return the filled heart image
const iconImage = computed(() => {
  if (isLiked.value) {
    return emptyHeartIcon;
  } else {
    return filledHeartIcon;
  }
});

</script>

<template>
  <h1>Rechercher un jeu</h1>

  <div>
    <Input v-model="searchedGame" :placeholder="'Recherchez un jeu'" @keyup.enter="getData()" />
    <Button class="btn-validate" @clicked="getData()" :name="'Valider'" />
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    <p class="notfound-message" v-if="notFoundGame">{{ notFoundGame }}</p>

    <div class="container-flex">
      <div class="container-game" v-for="game in gamesList" :key="game.id">
        <Game :game="game" />
      </div>
      <Button class="favoris-button" :icon="iconImage" @clicked="buttonToggleHeart()" :heart-icon="emptyHeartIcon" />
    </div>
  </div>
</template>

<style scoped>
.container-flex {
  display: flex;
  max-width: 1200px;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 50px;
  margin: 0 auto;
}

.container-game {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
}

h1 {
  font-size: 22px;
  padding-left: 20px;
  padding-top: 20px;
  color: #1e4975;
}

.error-message {
  font-size: 18px;
  font-family: 'Didact Gothic', sans-serif;
  color: crimson;
  padding-left: 32px;
  padding-top: 4px;
  margin: 0;
}

.notfound-message {
  font-size: 22px;
  font-family: 'Didact Gothic', sans-serif;
  color: #1e4975;
  padding-top: 20px;
  padding-left: 30px;
}

.favoris-button {
  background: transparent;
  border: none;
  cursor: pointer;
  width: 10%;
}
</style>