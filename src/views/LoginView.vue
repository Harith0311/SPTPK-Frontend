<script setup>
import TopLabel from "../components/TopLabel.vue";
import BlueButton from "../components/BlueButton.vue";
import LogoHeader from "../components/LogoHeader.vue";

</script>

<template>
    <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
        <div class="loader-wrapper">
            <div class="loader"></div>
       </div>
    </div>
    <div
        class="login p-5 bg-blue-50 max-md:bg-blue-100 w-screen min-h-screen w-100 max-h-full font-bold text-center"
    >
        <LogoHeader></LogoHeader>
        <form
            class="container px-12 max-md:px-4 m-4 p-8 mx-auto max-w-3xl bg-blue-200 w-auto drop-shadow-2xl max-md:mt-[60px] rounded-2xl"
            v-on:submit.prevent="login"
        >
            <div class="flex justify-start">
                <RouterLink to="/">
                    <button class="bg-blue-200 p-2 px-5 max-md:px-0 max-md:text-sm max-md:pb-8 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
            
            <h1 class="h1 text-2xl max-md:text-base">SELAMAT DATANG!</h1>

            <h5 class="h5 font-normal mb-8 max-md:text-xs">
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
import { BaseURL } from '../stores';
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
            peranan:'',
            loading: false,
        };
    },

    mounted() {
        // this.fetchUserInfo();
    },

    methods: {
        

        async login() {
            try {
                this.loading = true;
                const response = await axios.post(BaseURL + 'pengguna/logMasuk', {
                    email: this.emel,
                    password: this.kataLaluan,
                });
                this.loading = false
                console.log(response.data);
                sessionStorage.setItem("id", JSON.stringify(response.data));

                this.loading = true;
                const responseUser = await axios.get(
                    BaseURL + `pengguna/${response.data}`

                );
                console.log(responseUser);
                console.log(responseUser.data.peranan);
                if (responseUser.data.peranan === "Staf Taska" ) {
                    this.loading = false
                    router.push("/homePage");
                } else if (responseUser.data.peranan === "Ibubapa") {
                    this.loading = false
                    router.push("/homePageParent");
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

<style>
.loader {
          position: relative;
          width: 48px;
          height: 48px;
        }
        .loader:before,
        .loader:after {
          content:"";
          display: block;
          border: 32px solid transparent;
          border-top-color: #fff;
          position: absolute;
          left: 0;
          top: 0;
          animation: weld-rotate 2s infinite ease-in;
        }
        .loader:before {
          border-color: transparent  transparent transparent #FF3D00;
          animation-delay: 0.5s;
        }
        @keyframes weld-rotate {
          0% , 25% {transform: rotate(0deg)}
          50% , 75% {transform: rotate(180deg)}
          100% {transform: rotate(360deg)}
        }
      
</style>
