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
            v-on:submit.prevent="validateInfo"
        >
            <div class="flex justify-start">
                <RouterLink to="/login">
                    <button class="bg-blue-100 p-2 px-5 max-md:px-1 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
            <div class="flex justify-center max-md:mt-4">
                <i class="fa-solid fa-lock text-lg p-2 mr-2 text-orange-300"></i>
                <h1 class="h1 text-2xl p-1 ">Lupa kata laluan?</h1>

            </div>

            <h5 class="h5 font-normal text-zinc-600 px-32 max-md:px-2 mb-8">
                Masukkan e-mel dan nombor kad pengenalan yang digunakan ketika mendaftar akaun
                
            </h5>

            <TopLabel textLabel="Emel*" />
            <input
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                placeholder="Masukkan alamat emel"
                v-model="email"
                type="email"
            />

            <TopLabel textLabel="Nombor Kad Pengenalan*" />
            <input
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 mb-10 drop-shadow-lg rounded-lg placeholder:font-normal"
                placeholder="Masukkan nombor kad pengenalan"
                v-model="IC"
                type="text"
            />

            
                <BlueButton>Sahkan</BlueButton>
        
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
            email: '',
            IC: '',
            user:'',
            userId:'',

            errorEmel: '',
            errorKP: '',
        };
    },

    mounted() {

    },

    methods: {

        validateInfo() {
            if (this.email && this.IC)
            {
                axios.get(BaseURL + 'pengguna')
                    .then(response => {
                        this.user = response.data.filter(item => item.emel === this.email && item.noKP === this.IC);
                        this.userId = this.user[0].id;
                        console.log(this.userId);
                        localStorage.setItem('userId', this.userId);
                        router.push('/resetPassword')
                        console.log(this.user);
                        })
                        .catch(error => {
                            alert('Akaun tidak wujud')
                        console.error('Account does not exist', error);
                    });             
            }
            else
            {
                alert('Sila masukkan emel dan nombor kad pengenalan')
            }
            
        },

    }
}

</script>