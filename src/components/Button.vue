<script setup lang="ts">
defineProps<{
    name?: string
    icon?: string
}>()
</script>

<template>
    <button @click="$emit('clicked')">
        <img class="icon-favoris-empty" v-if="icon" :src="icon" alt="Button Icon" />
        <div v-else>
            {{ name }}
        </div>
    </button>
</template>


<style scoped>
.btn-validate {
    margin-left: 15px;
    font-family: 'Oxygen', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #fff;
    background-color: #1e4975;
    padding: 7px 20px;
    border: solid #1e4975 2px;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transition: 1000ms;
    transform: translateY(0);
    cursor: pointer;
}

.btn-validate:hover {
    transition: 1000ms;
    padding: 7px 30px;
    transform: translateY(-0px);
    background-color: #fff;
    color: #1e4975;
    border: solid 2px #1e4975;
}

.icon-favoris-empty {
    max-width: 20%;
    filter: invert(16%) sepia(99%) saturate(7404%) hue-rotate(16deg) brightness(95%) contrast(118%);
    /* filter: opacity(0.7) drop-shadow(0 0 0 crimson); */
}
</style>