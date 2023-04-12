<script setup lang="ts">
import Button from "./Button.vue";
import { ref } from "vue";
import { useFavoriteStore } from "@/store";

const { addFavorite } = useFavoriteStore()

const props = defineProps<{
  game?: any;
  isLiked?: boolean;
}>();

const emptyHeartIcon = "heart.png";
const filledHeartIcon = "filled-heart.png";
const isLiked = ref<boolean>(props.isLiked ?? false);

// if isLiked is true, return the empty heart, else return the filled heart image
const iconImage = () => {
  if (isLiked.value) {
    return filledHeartIcon;
  } else {
    return emptyHeartIcon;
  }
};

// This function toggle "isLiked" when the button is clicked
const buttonToggleHeart = () => {
  isLiked.value = !isLiked.value;
  console.log("cliqué");
  addFavorite(props.game)
  
};
</script>

<template>
  <div class="card-games">
    <img class="img-api" :src="game.image" />
    <p class="game-title">{{ game.name }}</p>
    <Button
      class="favoris-button"
      :icon="iconImage()"
      @clicked="buttonToggleHeart()"
      :heart-icon="emptyHeartIcon"
    />
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
  font-family: "Didact Gothic", sans-serif;
  font-weight: 700;
}

.favoris-button {
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 140px;
  height: 40px;
  /* width: 50%; */
}

/* .img-api {
    width: 100%;
    max-width: 200px;
} */
</style>
