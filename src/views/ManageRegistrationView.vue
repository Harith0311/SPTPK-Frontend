<script setup>
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";
import SideBar2 from '../components/SideBar2.vue';
import Header from "../components/Header.vue";
</script>

<template>
    <div class="flex bg-blue-100 w-full justify-between p-8">
        <SideBar2 />

        <!-- Content -->
        <!-- Header -->
        <div class="Content w-4/5 m-auto">
            <Header />
            <div class="border-solid border-b-2 border-black">
                    <!-- Horizontal Line -->
            </div>
            <!-- Breadcrumbs -->
            <div class="m-2">
                <h3>Halaman Utama > <span class="text-orange-400 font-semibold">Pengurusan Pendaftaran</span> </h3>
            </div>

            <!-- Div Content -->

    
        <div class="bg-white h-[448px] w-full my-6 mx-2 p-4 rounded-2xl drop-shadow-2xl">
            <h1 class="text-xl font-bold p-2">Senarai Permohonan Pendaftaran</h1>
            <div class="border-solid border-b-2 border-black">
                    <!-- Horizontal Line -->
            </div>
            <div class=" relative overflow-y-auto h-[380px] ">
                <div v-if="RegistrationList.length > 0">
                    <div class="top-0 z-10" v-for="daftarKanak in RegistrationList" v-bind:key="daftarKanak.id">
                        <div class="flex justify-between">
                            <h2 class="text-base font-medium p-2">{{ daftarKanak.kanak.namaKanak }}</h2>
                            <RouterLink :to="'/manageRegisterDetail/' + daftarKanak.id"><button class="bg-blue-300 hover:bg-blue-200 rounded-2xl drop-shadow-xl p-1 px-4 m-2 text-sm">Urus Pendaftaran</button></RouterLink>
                        </div>
                        <div class="border-solid border-b-2 border-zinc-300">
                                <!-- Horizontal Line -->
                        </div>
                    </div>
                </div>
                <div v-else>
                    <div class="flex justify-between">
                        <h2 class="text-base text-center font-medium p-2">Tiada Permohonan Pendaftaran</h2>
                    </div>
                    <div class="border-solid border-b-2 border-zinc-300">
                        <!-- Horizontal Line -->
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </div>
    <!-- Footer -->
    <div class="bg-black text-center text-white p-1">
        <h4>All rights reserved</h4>
    </div>
    <ToastMessage ref="toast" />
</template>

<script>
    import axios from 'axios';
    import { BaseURL, rejectRegister } from '../stores';
    import ToastMessage from "../components/ToastMessage.vue";

    export default {
        data() {
            return {
                RegistrationList: [],
                KanakList: []
            }
        },

        mounted() {
            this.fetchRegistrationList();

            if (rejectRegister.value === "rejected"){
                const message = `Rekod Pendaftaran Telah Dipadam!`;
                const status = "Info";
                this.$refs.toast.toast(message, status, "info");

                rejectRegister.value = "";
            } 
        },

        methods: {

            fetchRegistrationList(){
                axios.get(BaseURL + 'urusPendaftaran')
                    .then(response => {
                        this.RegistrationList = response.data;
                        
                        console.log(this.RegistrationList);
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

                // axios.get(BaseURL + 'kanak')
                //     .then(response => {
                //         this.KanakList = response.data;
                        
                //         console.log(this.KanakList);
                //     })
                //     .catch(error => {
                //         console.error('Error fetching registration data:', error);
                //     });

                
            }
        }

    }

</script>
