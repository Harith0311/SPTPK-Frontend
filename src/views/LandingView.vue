<script setup>
import { RouterLink } from "vue-router";
import BlueButton from '../components/BlueButton.vue';
import LightBlueButton from '../components/LightBlueButton.vue';
</script>

<template >
    <div class="relative bg-gradient-to-r from-cyan-300 to-blue-700 w-screen h-screen max-md:bg-blue-200 max-md:h-screen">
        <!-- <div class="invisible max-md:visible max-md:flex max-md:justify-center" >
            <img src="../assets/permata-logo.png" alt="" class="m-5 h-auto w-12">
            <img src="../assets/ypk-logo.png" alt="" class="m-5 h-auto w-16">
        </div> -->
        <div class="landing text-2xl text-center text-black hover:text-red-600 duration-700 ">
            <h1 class="pt-28 max-md:pt-10 font-bold">SISTEM PENGURUSAN TASKA PERMATA KELUARGA</h1>
        </div>
        <div class="p-4 px-16 mx-auto mt-5 max-w-2xl block bg-blue-300 bg-opacity-70 h-auto rounded-lg justify-center ">
            <div class="flex justify-center gap-12 opacity-100">
                <img src="../assets/permata-logo.png" alt="" class="max-md:hidden h-auto w-16">
                <img src="../assets/ypk-logo.png" alt="" class="max-md:hidden h-auto w-20">
            </div>
                <ul class="bg-blue-400 opacity-100 rounded-md p-2 px-20 drop-shadow-lg hover:scale-[1.02] transform transition duration-300 ease-in-out m-5 text-center font-semibold ">
                    <button><RouterLink to="/register">Daftar Masuk</RouterLink></button>
                </ul>
                <ul class="bg-blue-400 opacity-100 rounded-md p-2 px-20 drop-shadow-lg hover:scale-[1.02] transform transition duration-300 ease-in-out m-5 text-center font-semibold">
                    <button><RouterLink to="/login">Log Masuk</RouterLink></button>
                </ul>
                <ul class="bg-blue-300 opacity-100 rounded-md p-2 px-20 drop-shadow-lg hover:scale-[1.02] transform transition duration-300 ease-in-out m-5 text-center font-semibold">
                    <button><RouterLink to="/registrationForm1">Pendaftaran Baharu</RouterLink></button>
                </ul>       
                      
        </div>
        
    </div>
   
    
</template>