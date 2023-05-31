<script setup>
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";
import LogoHeader from "../components/LogoHeader.vue";
import BlueButton from "../components/BlueButton.vue";
import TopLabel from "../components/TopLabel.vue";
</script>

<template>
    <div class="login p-5 bg-blue-50 min-h-screen w-100 max-h-full font-bold text-center">
        <LogoHeader></LogoHeader>
        <form
            class="container px-12 m-4 p-8 mx-auto max-w-3xl bg-blue-100 w-auto drop-shadow-2xl rounded-2xl"
            v-on:submit.prevent="login"
        >
            <div class="flex justify-start">
                <RouterLink to="/OTPInput">
                    <button class="bg-blue-100 p-2 px-5 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
            <div class="flex justify-center">
                <i class="fa-solid fa-lock text-lg p-2 mr-2 text-orange-300"></i>
                <h1 class="h1 text-2xl p-1 ">Set semula kata laluan</h1>

            </div>

            <h5 class="h5 font-normal text-zinc-600 px-10 mb-8">
                Masukkan kata laluan baharu
            </h5>

            <TopLabel textLabel="Kata laluan baharu" />
            <input
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                placeholder="Masukkan kata laluan baharu"
                v-model="emel"
                type="email"
            />

            <TopLabel textLabel="Sahkan kata laluan" />
            <input
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                placeholder="Sahkan kata laluan baharu"
                v-model="emel"
                type="email"
            />

            <RouterLink to="/login">
                <BlueButton>Hantar PIN</BlueButton>
            </RouterLink>
        </form>
    </div>
</template>