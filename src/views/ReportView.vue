<script setup>
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
                <h3>Halaman Utama > <span class="text-orange-400 font-semibold">Laporan Kanak-Kanak</span> </h3>
            </div>

            <!-- Div Content -->

            
        <!-- <h1 class="text-center font-bold text-2xl mt-5">Report Under Construction!!</h1>
        <img class="mx-auto w-auto h-5/6" src="../assets/construction.png" alt=""> -->
        <div>
            <RouterView/>
        </div>
        <!-- <div class="flex justify-between mx-6">
            <div class="flex bg-green-200 hover:bg-green-300 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-solid fa-child text-5xl py-2"></i>
                <h1 class="text-center p-5 font-bold ml-1">Kanak-Kanak</h1>
            </div>
            <div class="flex bg-orange-200 hover:bg-orange-300 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-regular fa-calendar-check text-5xl py-2"></i>
                <h1 class="text-center p-5 font-bold ml-1">Kehadiran</h1>
            </div>
            <div class="flex  bg-blue-300 hover:bg-blue-400 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-solid fa-rocket text-5xl py-2"></i>
                <h1 class="text-center p-5 font-bold ml-1">Aktiviti</h1>
            </div>
        </div>
        <div class="Kotak px-10">
            <div class="bg-green-200 w-full mx-auto mt-5 mb-10 rounded-2xl pb-10">
                <h2 class="text-xl font-bold px-14 p-5">Maklumat Kanak-Kanak</h2>
                <table class="m-8 w-5/6 mx-auto">
                    <tr class="border-solid border-b-2 border-black">
                        <th class="w-auto">Bil.</th>
                        <th>Nama</th>
                        <th>Umur</th>
                        <th>Sijil Lahir</th>
                        <th>Jantina</th>
                        <th>Bangsa</th>
                    </tr>
                    <tr v-for="(child, index) in ChildList" v-bind:key="child.id" class="border-solid border-b-2 border-gray-300 ">
                        <td class="text-center p-2">{{ index + 1 }}</td>
                        <td class="p-2">{{child.namaKanak}}</td>
                        <td class="text-center p-2">{{child.umur}}</td>
                        <td class="text-center p-2">{{child.sijilLahir}}</td>
                        <td class="text-center p-2">{{child.jantina}}</td>
                        <td class="text-center p-2">{{child.bangsa}}</td>
                    </tr>
                </table>
                <div class="flex justify-center">
                    <div class="bg-black rounded-full h-auto w-6 m-4">
                        <h1 class="text-white text-center">1</h1>
                    </div>
                    <div class=" rounded-full h-auto w-6 m-4">
                        <h1>2</h1>
                    </div>
                    <div class=" rounded-full h-auto w-6 m-4">
                        <h1>3</h1>
                    </div>
                </div>
            </div>

        </div> -->


    </div>

        </div>
    
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            ChildList: [],
        }
    },

    mounted() {
        this.fetchChildData();
    },
    methods: {
        fetchChildData(){
            axios.get('http://localhost:1001/kanak')
                .then(response => {
                this.ChildList = response.data;
                console.log(this.ChildList);
                })
                .catch(error => {
                console.error('Error fetching child data:', error);
            });
        }
    }
}


</script>