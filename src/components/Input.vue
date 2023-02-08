<script setup lang="ts">
defineProps<{
    placeholder: string,
    modelValue: string

}>()

</script>

<template>
    <input class="input-home" type="text" :placeholder="placeholder" :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<style scoped>
.input-home {
    padding: 5px;
    margin-top: 10px;
    margin-left: 19px;
}
</style>