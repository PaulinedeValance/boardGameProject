<script setup lang="ts">
defineProps<{
    placeholder: string,
    modelValue: string

}>()

// defineEmits<{
//     update: string
// }>()
</script>

<template>
    <input class="input-home" type="text" :placeholder="placeholder" :value="modelValue"
        @input="$emit('update:modelValue')" />
</template>

<style scoped>
.input-home {
    padding: 5px;
    margin-top: 10px;
    margin-left: 10px;
}
</style>