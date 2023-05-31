<script setup>
    const props = defineProps({
    textLabel: String,
     })
</script>

<template>
    <h3 class="nama text-left ">
        {{textLabel}}
    </h3>
</template>