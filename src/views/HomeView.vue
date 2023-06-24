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
            <Header/>
            <div class="border-solid border-b-2 border-black">
                    <!-- Horizontal Line -->
            </div>
            <!-- Breadcrumbs -->
            <div class="m-2">
                <h3><span class="text-orange-400 font-semibold">Halaman Utama</span> </h3>
            </div>

            <!-- Div Content -->
        <!-- First Row -->
        <div class="m-5 pb-14">     
            <div class="box-element-flex flex mt-16">
                <div class="relative  w-2/5 mr-12">
                    <h2 class="font-extrabold">Jumlah Kanak-Kanak</h2>
                    <div class="chart-box-main flex justify-end h-auto w-full py-6 mt-4 p-4 rounded-2xl bg-white drop-shadow-2xl">
                        <h3 class="text-4xl font-bold mr-2 text-green-600">{{ ChildList.length }}</h3>
                        <i class="fa-solid fa-user text-4xl mx-5"></i>
                    </div>
                </div>
                <div class="relative  w-2/5 mr-12">
                    <h2 class="font-extrabold">Jumlah Staf Taska</h2>
                    <div class="chart-box-main flex justify-end h-auto w-full py-6 mt-4 p-4 rounded-2xl bg-white drop-shadow-2xl">
                        <h3 class="text-4xl font-bold mr-2 text-green-600">{{ StaffList.length }}</h3>
                        <i class="fa-solid fa-user text-4xl mx-5"></i>
                    </div>
                </div>
                <!-- hehehe -->
                <div class="relative  w-2/5 mr-12">
                    <h2 class="font-extrabold">Jantina Kanak-Kanak</h2>
                    <div class="chart-box-main flex justify-around h-auto w-full py-6 mt-4 p-4 rounded-2xl bg-white drop-shadow-2xl">
                        <div class="flex">
                            <h3 class="text-4xl font-bold  text-blue-500">{{ MaleList.length }}</h3>
                            <i class="fa-solid fa-mars text-4xl mx-5"></i> 
                        </div>
                        <div class="flex">
                            <h3 class="text-4xl font-bold  text-pink-500">{{FemaleList.length}}</h3>
                            <i class="fa-solid fa-venus text-4xl mx-5"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Second Row -->
            <div class="flex mt-12 justify-between pr-12">
                <!-- Content -->
                <div class="bg-white w-full p-4 rounded-2xl drop-shadow-2xl">
                    <h2 class="font-bold mb-5">Profil Saya</h2>
                    <div class="flex justify-between">
                        <div class="py-2 ml-5">
                            <div class="bg-blue-200 w-[120px] h-auto p-4 rounded-md drop-shadow-xl ">
                                <img class="h-auto w-24" src="/staff.png" alt="">   
                            </div>
                            <!-- <div class="absolute bg-white w-4 h-4 z-10 rounded-full drop-shadow-xl top-[62px] left-[115px]">
                                <div class="absolute bg-green-400 w-4 h-4 z-40 rounded-full drop-shadow-xl top-[62px] left-[115px]"></div>
                            </div> -->
                        </div>
                        <div class="bg-blue-50 w-5/6 rounded-lg drop-shadow-xl p-4">
                            <h3 class="font-bold text-xl">{{ currentUser.nama }}</h3>
                            <div class="flex">
                                <h3 class="text-sm text-gray-500 p-2 "><i class="fa-solid fa-circle-user"></i> {{currentUser.peranan}}</h3>
                                <h3 class="text-sm text-gray-500 p-2 px-4"><i class="fa-solid fa-envelope"></i> {{currentUser.emel}}</h3>
                                <h3 class="text-sm text-gray-500 p-2 px-4"><i class="fa-solid fa-id-card"></i> {{currentUser.noKP}}</h3>
                            </div>
                            <button @click="togglePassword" class="bg-blue-200 hover:bg-blue-300 p-1 px-4 my-2 rounded-md drop-shadow-lg">Tukar Kata Laluan</button>
                            
                            
                        </div>
                    </div>       
                </div>
            </div>

            <!-- User prompt to confirm reject registration -->
            <div 
            id="overlay" 
            class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50" 
            v-bind:class="{'hidden': !isPassword}">
                <dialog
                    class="z-10 w-2/6 bg-blue-50 absolute h-fit top-48 overflow-auto px-3 pt-4 rounded-xl"
                    v-bind:open="isPassword"
                >
                    <!-- Header Title -->
                    <div class="bg-orange-300 rounded-lg m-4 p-2">
                        <h2 class="font-bold text-xl text-center  ">Tukar Kata Laluan</h2>
                    </div>

                    <!-- Content -->
                    <form v-on:submit.prevent="changePassword">
                        <h2 class="text-sm font-medium pl-10">Kata Laluan Lama</h2>
                        <input 
                            class="my-2 mx-10 outline-blue-100 p-2 pl-4 w-5/6 rounded-lg drop-shadow-xl font-normal text-sm" 
                            type="password"
                            placeholder="Masukkan kata laluan lama"
                            v-model="oldPass"
                        >
                        <label class="text-red-600 font-medium text-xs" for="errorName" id="errorName">{{errorOldPass}}</label><br>
                        <label class="text-red-600 font-medium text-xs" for="errorName" id="errorName">{{oldPassBlank}}</label><br>

                        <h2 class="text-sm font-medium pl-10">Kata Laluan Baru</h2> 
                        <input 
                            class="my-2 mx-10 outline-blue-100 p-2 pl-4 w-5/6 rounded-lg drop-shadow-xl font-normal text-sm"  
                            type="password"
                            placeholder="Masukkan kata laluan baru"
                            v-model="newPass"
                        >
                        <label class="text-red-600 font-medium text-xs" for="errorName" id="errorName">{{newPassBlank}}</label><br>

                        <h2 class="text-sm font-medium pl-10">Sahkan Kata Laluan Baru</h2>
                        <input 
                            class="my-2 mx-10 outline-blue-100 p-2 pl-4 w-5/6 rounded-lg drop-shadow-xl font-normal text-sm"  
                            type="password"
                            placeholder="Sahkan kata laluan baru"
                            v-model="confirmNewPass"
                        >
                        <label class="text-red-600 font-medium text-xs" for="errorName" id="errorName">{{errorNewPass}}</label><br>
                        <label class="text-red-600 font-medium text-xs" for="errorName" id="errorName">{{confirmPassBlank}}</label><br>

                        <!-- Button -->
                        <div class="flex justify-center mt-4">
                            <button class="bg-blue-200 w-2/6 p-1 mx-8 rounded-lg" @click="togglePassword">Batal</button>
                            <button class="bg-blue-200 w-2/6 p-1 mx-8 rounded-lg" >Sahkan</button>
                        </div>
                    </form>
                </dialog>
            </div>  
            <!-- End of prompt -->

            <!-- Third Row -->
            <!-- <div class="flex mt-12 justify-between pr-12">
                <div class="transction w-5/12  ">
                    <h2 class="font-extrabold">Statistik Kehadiran</h2>
                    <div class="mt-3 rounded-2xl drop-shadow-2xl bg-white p-4">
                        <img class="h-56 w-auto" src="/kehadiran.png" alt="">
                    </div>
                </div>
                <div class="stocks w-5/12   ">
                    <h2 class="font-extrabold">Statistik Umur Kanak-Kanak</h2>
                    <div class="stocks-main mt-3 rounded-2xl drop-shadow-2xl bg-white p-4 ">
                        <img class="h-56 w-auto" src="/umur.png" alt="">
                    </div>
                </div>
            </div> -->
            <!-- End of Second Row -->

        </div>
        </div>

        
    </div>
    <ToastMessage ref="toast" />
    
</template>

<script>
    import axios from 'axios';
    import ToastMessage from "../components/ToastMessage.vue";
import { BaseURL } from '../stores';

    export default {
        data() {
            return {
                ChildList: [],
                MaleList: [],
                FemaleList: [],
                StaffList: [],
                isPassword: '',
                currentUser: '',
                userId: '',
                oldPass: '',
                newPass: '',
                confirmNewPass: '',

                errorOldPass: '',
                errorNewPass: '',
                oldPassBlank: '',
                newPassBlank: '',
                confirmPassBlank: '',
            }
        },

        mounted() {
            this.fetchChildList();
            this.fetchMaleList();
            this.fetchFemaleList();
            this.fetchStaffList();
            this.fetchCurrentUser();
        },

        methods: {

            fetchChildList() {
                axios.get(BaseURL + 'urusPendaftaran/lulus')
                    .then(response => {
                        this.ChildList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchMaleList() {
                axios.get(BaseURL + 'urusPendaftaran/lelaki')
                    .then(response => {
                        this.MaleList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchFemaleList() {
                axios.get(BaseURL + 'urusPendaftaran/perempuan')
                    .then(response => {
                        this.FemaleList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchStaffList() {
                axios.get(BaseURL + 'pengguna/staf')
                    .then(response => {
                        this.StaffList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchCurrentUser() {
                this.userId = JSON.parse(sessionStorage.getItem('id'));
                console.log(this.userId);

                axios.get(BaseURL + 'pengguna/' + this.userId)
                    .then(response => {
                        this.currentUser = response.data;
                        console.log(response.data);
                        console.log(this.currentUser);
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            togglePassword() {
                this.isPassword = !this.isPassword;
            },

            changePassword() {
                console.log(this.currentUser.kataLaluan);

                if (this.oldPass === this.currentUser.kataLaluan){
                    this.errorOldPass = ""
                    if (this.newPass === this.confirmNewPass){
                        // Update password
                        this.errorOldPass = ""
                        const update = {
                            kataLaluan: this.confirmNewPass
                        }

                        axios.put(BaseURL + 'pengguna/'+this.userId, update)
                        .then(response => {
                            const message = `Kata laluan berjaya dikemaskini!`;
                            const status = "Berjaya";
                            this.$refs.toast.toast(message, status, "success");
                        })
                        .catch(error => {
                            console.error('Error update password:', error);
                        });


                    }
                    else{
                        // Pengesahan kata laluan baru tidak berjaya
                        this.errorNewPass = "*Pengesahan kata laluan baru tidak berjaya"
                    }
                }
                else if(this.oldPass !== this.currentUser.kataLaluan){
                    if (this.oldPass === ''){
                        this.oldPassBlank = "*Sila masukkan kata laluan lama"
                        
                    }
                    else if(this.newPass === '') {
                        this.newPassBlank = "*Sila masukkan kata laluan baru"
                    }
                    else if(this.confirmNewPass === ''){
                        this.confirmPassBlank = "*Sila sahkan kata laluan"
                    }
                    else{
                        // kata laluan lama salah
                        this.errorOldPass = "*Kata laluan lama salah"
                    }
                } 
                // else{
                //     if (this.oldPass === ''){
                //         this.oldPassBlank = "*Sila masukkan kata laluan lama"
                //     }
                //     else if(this.newPass === '') {
                //         this.newPassBlank = "*Sila masukkan kata laluan baru"
                //     }
                //     else if(this.confirmNewPass === ''){
                //         this.confirmPassBlank = "*Sila sahkan kata laluan"
                //     }
                // }
            },
        }
    }


</script>