<script setup lang="ts">
import { ref } from 'vue'
import { defineEmits } from 'vue'

const open = ref<boolean>(false)

defineProps<{
    open?: boolean,
    closeModal?: Function
}>()
defineEmits(['closed'])
</script>

<template>
    <button @click="open = true">Learn more</button>
    <div v-if="open" class="modal">
        <p>Hello</p>
        <button @click="$emit('closed')">Close</button>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>