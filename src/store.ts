import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Games } from './types'

export const useFavoriteStore = defineStore('favorite', () => {
    const favorites = ref<Games[]>([])

    function addFavorite(game: Games) {
        favorites.value.push(game)
        //console.log(game);
    }

    // function removeFavorite() {

    // }

    return {
        favorites, addFavorite
    }
})