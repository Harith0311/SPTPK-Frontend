<script setup>
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";
import LogoHeader from "../components/LogoHeader.vue";
import BlueButton from "../components/BlueButton.vue";

</script>

<template>
    <div class="login p-5 bg-blue-50 min-h-screen w-100 max-h-full font-bold text-center">
        <LogoHeader></LogoHeader>
        <form
            class="container px-12 m-4 p-8 mx-auto max-w-3xl bg-blue-100 w-auto drop-shadow-2xl rounded-2xl"
            
        >
            <div class="flex justify-start">
                <RouterLink to="/forgotPassword">
                    <button class="bg-blue-100 p-2 px-5 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
            <div class="flex justify-center">
                <i class="fa-solid fa-lock text-lg p-2 mr-2 text-orange-300"></i>
                <h1 class="h1 text-2xl p-1 ">Masukkan PIN</h1>

            </div>

            <h5 class="h5 font-normal text-zinc-600 px-20 mb-8">
               Sila masukkan pin OTP yang telah dihantar kepada emel anda untuk menetapkan semula kata laluan
            </h5>

            
            <div class="flex justify-center px-20">
                <input
                    class="inputTop w-1/5 outline-blue-100 p-3 px-6 mx-3 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                    placeholder="0"
                    v-model="emel"
                    type="text"
                    maxlength="1"
                />

                <input
                    class="inputTop w-1/5 outline-blue-100 p-3 px-6 mx-3 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                    placeholder="0"
                    v-model="emel"
                    type="text"
                    maxlength="1"
                />

                <input
                    class="inputTop w-1/5 outline-blue-100 p-3 px-6 mx-3 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                    placeholder="0"
                    v-model="emel"
                    type="text"
                    maxlength="1"
                />

                <input
                    class="inputTop w-1/5 outline-blue-100 p-3 px-6 mx-3 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                    placeholder="0"
                    v-model="emel"
                    type="text"
                    maxlength="1"
                />

                <input
                    class="inputTop w-1/5 outline-blue-100 p-3 px-6 mx-3 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                    placeholder="0"
                    v-model="emel"
                    type="text"
                    maxlength="1"
                />

                <input
                    class="inputTop w-1/5 outline-blue-100 p-3 px-6 mx-3 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                    placeholder="0"
                    v-model="emel"
                    type="text"
                    maxlength="1"
                />

            </div>

            
            <router-link to="/resetPassword">
                <BlueButton>Sahkan PIN</BlueButton>

            </router-link>
        </form>
    </div>
</template>