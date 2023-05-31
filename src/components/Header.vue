<script setup>
    import { ref } from "@vue/reactivity";
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="header flex justify-between">
         <div class="flex">
             <img src="../assets/permata-logo.png" alt="permata" class="h-14 w-auto m-4 ">
             <div class=" h-14 my-4 w-28 font-semibold text-red-600 text-sm py-2">
                 Taska Permata Keluarga
             </div>
         </div>
         <div class="flex my-auto mr-4">
             <img class="w-10 h-10 rounded-full mx-3 border-solid border-2 border-black" src="../assets/hacker.png" alt="">
             <div class="info-name p-2 font-bold">Muhammad Messi</div>
         </div>
    </div>
</template>