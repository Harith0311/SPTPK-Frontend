<script setup>
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";
import SideBar2 from '../components/SideBar2.vue';
import Header from "../components/Header.vue";

</script>

<template>
    <div class="flex bg-blue-100 w-screen justify-between p-8">
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
                <div class="transction w-5/12  ">
                    <h2 class="font-extrabold">Statistik Kehadiran</h2>
                    <div class="box-trans-sub mt-3 rounded-2xl drop-shadow-2xl bg-white p-4">
                        <img class="h-56 w-auto" src="../assets/kehadiran.png" alt="">
                    </div>
                </div>
                <div class="stocks w-5/12   ">
                    <h2 class="font-extrabold">Statistik Umur Kanak-Kanak</h2>
                    <div class="stocks-main mt-3 rounded-2xl drop-shadow-2xl bg-white p-4 ">
                        <img class="h-56 w-auto" src="../assets/umur.png" alt="">
                    </div>
                </div>
            </div>
            <!-- End of Second Row -->

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
                StaffList: []
            }
        },

        mounted() {
            this.fetchChildList();
            this.fetchMaleList();
            this.fetchFemaleList();
            this.fetchStaffList();
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

            }
        }
    }


</script>