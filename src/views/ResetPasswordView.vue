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
            class="container px-12 m-4 p-8 max-md:p-4 mx-auto max-w-3xl bg-blue-100 w-auto drop-shadow-2xl rounded-2xl"
            v-on:submit.prevent="updatePassword"
        >
            <div class="flex justify-start">
                <RouterLink to="/forgotPassword">
                    <button class="bg-blue-100 p-2 px-5 max-md:px-1 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
            <div class="flex justify-center max-md:mt-4">
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
                v-model="pass"
                type="password"
            />

            <TopLabel textLabel="Sahkan kata laluan" />
            <input
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                placeholder="Sahkan kata laluan baharu"
                v-model="confirmPass"
                type="password"
            />

            
                <BlueButton>Set Kata Laluan</BlueButton>
            
        </form>
    </div>
</template>

<script>
import router from "../router";
import axios from 'axios';
import { BaseURL } from '../stores';

export default {
    data() {
        return {
            pass:'',
            confirmPass: '',
            userId:'',

        };
    },

    mounted() {

    },

    methods: {

        updatePassword() {

            this.userId = localStorage.getItem('userId');
            console.log(this.userId);
            console.log(this.pass);
            console.log(this.confirmPass);
            console.log(this.pass === this.confirmPass);

            if (this.pass === this.confirmPass)
            {
                console.log(this.pass);
                console.log(this.confirmPass);
                const update = {
                    password: this.confirmPass
                }
                console.log(update);
                console.log('sebelum');
                axios.put(BaseURL + 'pengguna/luar/' + this.userId, update)
                .then(response => {
                    console.log('hai');
                    localStorage.clear();
                    alert('password updated')
                    router.push('/login');
                })
                .catch(error => {
                    alert('Kata laluan tidak berjaya dikemaskini')
                    console.error('Error update password:', error);
                });
            }
            else {
                alert("Pengesahan kata laluan tidak sepadan")
            }

            console.log('setel');
        }
        
    }
}
</script>