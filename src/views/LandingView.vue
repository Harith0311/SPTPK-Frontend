<script setup>
import { RouterLink } from "vue-router";
import BlueButton from '../components/BlueButton.vue';
import LightBlueButton from '../components/LightBlueButton.vue';
</script>

<template >
    <div class="relative w-screen max-md:bg-slate-400 max-md:h-screen">
        <img src="../assets/First-pageee.png" alt="" class="absolute w-screen h-screen -z-10 max-md:hidden">
        <div class="landing text-2xl text-center text-black hover:text-red-600 duration-700 ">
            <h1 class="pt-28 max-md:pt-10 font-bold">SISTEM PENGURUSAN TASKA PERMATA KELUARGA</h1>
        </div>
        <div class="p-4 px-16 mx-auto mt-5 max-w-2xl block bg-white h-auto rounded-lg justify-center ">
            <div class="flex justify-center gap-12 ">
                <img src="../assets/permata-logo.png" alt="" class="max-md:hidden h-auto w-16">
                <img src="../assets/ypk-logo.png" alt="" class="max-md:hidden h-auto w-20">
            </div>
                <ul class="m-5 text-center font-semibold">
                    <BlueButton><RouterLink to="/register">Daftar Masuk</RouterLink></BlueButton>
                </ul>
                <ul class="m-5 text-center font-semibold">
                    <BlueButton><RouterLink to="/login">Log Masuk</RouterLink></BlueButton>
                </ul>
                <ul class="m-5 text-center font-semibold">
                    <LightBlueButton><RouterLink to="/registrationForm1">Pendaftaran Baharu</RouterLink></LightBlueButton>
                </ul>       
                      
        </div>
        
    </div>
   
    
</template>