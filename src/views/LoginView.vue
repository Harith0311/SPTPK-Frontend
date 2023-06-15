<script setup>
import TopLabel from "../components/TopLabel.vue";
import BlueButton from "../components/BlueButton.vue";
import LogoHeader from "../components/LogoHeader.vue";

</script>

<template>
    <div
        class="login p-5 bg-blue-50 w-screen min-h-screen w-100 max-h-full font-bold text-center"
    >
        <LogoHeader></LogoHeader>
        <form
            class="container px-12 m-4 p-8 mx-auto max-w-3xl bg-blue-100 w-auto drop-shadow-2xl rounded-2xl"
            v-on:submit.prevent="login"
        >
            <div class="flex justify-start">
                <RouterLink to="/">
                    <button class="bg-blue-100 p-2 px-5 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
            
            <h1 class="h1 text-2xl">SELAMAT DATANG!</h1>

            <h5 class="h5 font-normal mb-8">
                Masukkan alamat emel dan kata laluan
            </h5>

            <TopLabel textLabel="Emel" />
            <input
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal"
                placeholder="Masukkan alamat emel"
                v-model="emel"
                type="email"
            />
            <TopLabel textLabel="Kata Laluan" />
            <input
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal"
                placeholder="Masukkan kata laluan"
                v-model="kataLaluan"
                type="password"
            />

            <a href="/forgotPassword" class="float-right underline font-medium text-xs mb-10">Lupa kata laluan?</a>
            

            <BlueButton>Log Masuk</BlueButton>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import router from "../router";
// import { createApp } from 'vue'
// import App from './App.vue'

// import toast from 'vue-toast'

// createApp(App).use(toast).mount('#app')

export default {
    data() {
        return {
            UserData: [],
            emel: '',
            kataLaluan: '',
        };
    },

    mounted() {
        // this.fetchUserInfo();
    },

    methods: {
        

        async login() {
            try {
                const response = await axios.post('http://localhost:1001/pengguna/logMasuk', {
                    email: this.emel,
                    password: this.kataLaluan,
                });
                console.log(response.data);
                sessionStorage.setItem("id", JSON.stringify(response.data));

                const responseUser = await axios.get(
                    `http://localhost:1001/pengguna/${response.data}`

                );
                console.log(responseUser);
                console.log(responseUser.data.peranan);
                if (responseUser.data.peranan === "Staf Taska" ) {
                    
                    router.push("/homePage");
                } else if (responseUser.data.peranan === "Ibubapa") {
                    router.push("/");
                } 
            } catch (error) {
                console.error(error);
                alert("Invalid email or password");
                // this.$toast.error(`Hey! I'm here`);
            }
        },
    

    }
}

</script>
