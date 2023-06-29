<script setup>
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";
import SideBar2 from '../components/SideBar2.vue';
import Header from "../components/Header.vue";

</script>

<template>
    <div class="flex bg-blue-100 w-screen h-screen max-md:h-full justify-between p-8 max-md:p-[1px]">
        <SideBar2 />

        <!-- Content -->
        <!-- Header -->
        <div class="Content w-4/5  m-auto">
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
            <div class="box-element-flex flex max-md:justify-center max-md:block mt-16 max-md:mt-6">
                <div class="relative w-2/5 max-md:w-5/6  mr-12">
                    <h2 class="font-extrabold">Jumlah Kanak-Kanak</h2>
                    <div class="chart-box-main flex justify-end max-md:justify-center h-auto w-full py-6 mt-4 p-4  rounded-2xl bg-white drop-shadow-2xl">
                        <h3 class="text-4xl font-bold mr-2 text-green-600">{{ ChildList.length }}</h3>
                        <i class="fa-solid fa-user text-4xl mx-5"></i>
                    </div>
                </div>
                <div class="relative  w-2/5 max-md:w-5/6 mr-12">
                    <h2 class="font-extrabold max-md:mt-4">Jumlah Staf Taska</h2>
                    <div class="chart-box-main flex justify-end max-md:justify-center h-auto w-full py-6 mt-4 p-4 rounded-2xl bg-white drop-shadow-2xl">
                        <h3 class="text-4xl font-bold mr-2 text-green-600">{{ StaffList.length }}</h3>
                        <i class="fa-solid fa-user text-4xl mx-5"></i>
                    </div>
                </div>
                <!-- hehehe -->
                <div class="relative  w-2/5 max-md:w-5/6 mr-12">
                    <h2 class="font-extrabold max-md:mt-4">Jantina Kanak-Kanak</h2>
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
                    <div class="flex max-md:block justify-between">
                        <div class="py-2 ml-5 max-md:grid max-md:ml-0 max-md:place-items-center">
                            <div class="bg-blue-200 w-[120px] h-auto p-4 rounded-md drop-shadow-xl ">
                                <img class="h-auto w-24" src="/staff.png" alt="">   
                            </div>
                            <!-- <div class="absolute bg-white w-4 h-4 z-10 rounded-full drop-shadow-xl top-[62px] left-[115px]">
                                <div class="absolute bg-green-400 w-4 h-4 z-40 rounded-full drop-shadow-xl top-[62px] left-[115px]"></div>
                            </div> -->
                        </div>
                        <div class="bg-blue-50 w-5/6 max-md:w-full rounded-lg drop-shadow-xl p-4">
                            <h3 class="font-bold text-xl max-md:text-base">{{ currentUser.nama }}</h3>
                            <div class="flex max-md:block">
                                <h3 class="text-sm text-gray-500 p-2 "><i class="fa-solid fa-circle-user"></i> {{currentUser.peranan}}</h3>
                                <h3 class="text-sm text-gray-500 p-2 px-4 max-md:px-2"><i class="fa-solid fa-envelope max-md:mr-1"></i> {{currentUser.emel}}</h3>
                                <h3 class="text-sm text-gray-500 p-2 px-4 max-md:px-2"><i class="fa-solid fa-id-card max-md:mr-1"></i> {{currentUser.noKP}}</h3>
                            </div>
                            <button @click="togglePassword" class="bg-blue-200 hover:bg-blue-300 p-1 px-4 my-2 rounded-md drop-shadow-lg max-md:text-sm max-md:py-3 max-md:mt-4 max-md:px-7 ">Tukar Kata Laluan</button>
                            
                            
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
                    class="z-10 w-2/6 max-md:w-5/6 bg-blue-50 absolute h-fit top-48 overflow-hidden px-3 pt-4 rounded-xl"
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
                            class="mt-2 mx-10 outline-blue-100 p-2 pl-4 w-5/6 rounded-lg drop-shadow-xl font-normal text-sm" 
                            type="password"
                            placeholder="Masukkan kata laluan lama"
                            v-model="oldPass"
                        >
                        <label class="text-red-600 font-medium text-xs ml-11 " for="errorName" id="errorName">{{errorOldPass}}</label><br>
                        <label class="text-red-600 font-medium text-xs ml-11" for="errorName" id="errorName">{{oldPassBlank}}</label><br>

                        <h2 class="text-sm font-medium pl-10">Kata Laluan Baru</h2> 
                        <input 
                            class="mt-2 mx-10 outline-blue-100 p-2 pl-4 w-5/6 rounded-lg drop-shadow-xl font-normal text-sm"  
                            type="password"
                            placeholder="Masukkan kata laluan baru"
                            v-model="newPass"
                        >
                        <label class="text-red-600 font-medium text-xs ml-11" for="errorName" id="errorName">{{newPassBlank}}</label><br>

                        <h2 class="text-sm font-medium mt-1 pl-10">Sahkan Kata Laluan Baru</h2>
                        <input 
                            class="mt-2 mx-10 outline-blue-100 p-2 pl-4 w-5/6 rounded-lg drop-shadow-xl font-normal text-sm"  
                            type="password"
                            placeholder="Sahkan kata laluan baru"
                            v-model="confirmNewPass"
                        >
                        <label class="text-red-600 font-medium text-xs ml-11" for="errorName" id="errorName">{{errorNewPass}}</label><br>
                        <label class="text-red-600 font-medium text-xs ml-11" for="errorName" id="errorName">{{confirmPassBlank}}</label><br>

                        <!-- Button -->
                        <div class="flex justify-center mt-4">
                            <button class="bg-blue-200 w-2/6 p-1 mx-8 rounded-lg" @click="togglePassword">Batal</button>
                            <button class="bg-blue-200 w-2/6 p-1 mx-8 rounded-lg" >Sahkan</button>
                        </div>
                    </form>
                </dialog>
            </div>  

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
                errorDB: '',
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
                if ( this.oldPass && this.newPass && this.confirmNewPass)
                {
                    if (this.newPass === this.confirmNewPass) {
                        const update = {
                        oldPass: this.oldPass,
                        newPass: this.newPass
                        };

                        axios.put(BaseURL + 'pengguna/kataLaluan/'+this.userId, update)
                        .then(response => {
                            this.errorOldPass = '';
                            this.errorNewPass = '';
                            this.newPassBlank = '';

                            const message = `Kata laluan berjaya dikemaskini!`;
                            const status = "Berjaya";
                            this.$refs.toast.toast(message, status, "success");
                            
                        })
                        .catch(error => {
                            if (error.response && error.response.data && error.response.data.error) {
                                const errorMessage = error.response.data.error;
                                console.error('Error update password:', errorMessage);

                                // Update the error message in your Vue data property for display
                                
                                this.errorOldPass = errorMessage;
                                this.errorNewPass = '';
                                this.newPassBlank = '';
                                console.log(this.errorDB);
                            } else {
                                console.error('Error update password:', error);
                            }
                        })
                    }
                
                    else {
                        this.errorNewPass = "*Kata laluan tidak sepadan";
                    }
                }
                else{
                    if (this.oldPass === ''){
                        this.errorOldPass = "*Sila masukkan kata laluan lama"
                    }
                    else{
                        this.errorOldPass = '';
                    }


                    if(this.newPass === '') {
                        this.newPassBlank = "*Sila masukkan kata laluan baru"
                    }
                    else{
                        this.newPassBlank = '';
                    }
                    
                    if(this.confirmNewPass === ''){
                        this.errorNewPass = "*Sila sahkan kata laluan"
                    }
                    else{
                        this.errorNewPass = '';
                    }
                }
                
            },
        }
    }


</script>