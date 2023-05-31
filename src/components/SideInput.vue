<script setup>
import { ref } from "vue"

    const props = defineProps({
        placeholder: String,
        label: String,
        inputValue: String

    })

    const modelValue = ref(props.inputValue);
</script>

<template>
    <div class="flex justify-between px-8">
        <h3 class="p-2 my-2">{{ label }}</h3>
        <input 
            class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
            type="text"   
            v-bind:placeholder="placeholder"
            v-model="modelValue"
        />
    </div>
</template>

