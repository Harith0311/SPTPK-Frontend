<script setup>
    const props = defineProps({
    inputText: String,
     })
</script>

<template>
    <input class="inputTop w-full outline-blue-200 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal" v-bind:placeholder="inputText" type="text">
</template>