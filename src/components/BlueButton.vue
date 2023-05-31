<script setup>
    // const props = defineProps({
    //     placeholder: String,
    //     link: String
    // })
</script>

<template>
    <button class=" bg-blue-400 w-full rounded-md p-2 px-20 hover:bg-blue-300 duration-400 drop-shadow-lg">
        <slot></slot>
    </button>
</template>