<script setup>
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";
import SideBarParent from '../components/SideBarParent.vue';
import Header from "../components/Header.vue";

</script>

<template>
    <div class="flex bg-blue-100 w-screen justify-between p-8">
        <SideBarParent />

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

           

        </div>
        </div>

        
    </div>
    
</template>

<script>
    import axios from 'axios';

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
                axios.get('http://localhost:1001/urusPendaftaran/lulus')
                    .then(response => {
                        this.ChildList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchMaleList() {
                axios.get('http://localhost:1001/urusPendaftaran/lelaki')
                    .then(response => {
                        this.MaleList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchFemaleList() {
                axios.get('http://localhost:1001/urusPendaftaran/perempuan')
                    .then(response => {
                        this.FemaleList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchStaffList() {
                axios.get('http://localhost:1001/pengguna/staf')
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

                axios.get('http://localhost:1001/pengguna/' + this.userId)
                    .then(response => {
                        this.currentUser = response.data;
                        console.log(response.data);
                        console.log(this.currentUser);
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },
        }
    }


</script>