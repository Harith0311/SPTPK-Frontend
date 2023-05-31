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
            <!-- <div class="header flex justify-between"> 
                <div class="flex">
                    <img src="../assets/permata-logo.png" alt="permata" class="h-14 w-auto m-4 ">
                    <div class=" h-14 my-4 w-28 font-semibold text-red-600 text-sm py-2">
                        Taska Permata Keluarga
                    </div>
                </div>
                <div class="flex my-auto mr-4">
                    <img class="w-10 h-10 rounded-full mx-3 border-solid border-2 border-black" src="../assets/hacker.png" alt="">
                    <div class="info-name p-2 font-bold">Muhammad Messi</div>
                </div>
            </div>-->
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
                        <h3 class="text-4xl font-bold mr-2 text-green-600">42</h3>
                        <i class="fa-solid fa-user text-4xl mx-5"></i>
                    </div>
                </div>
                <div class="relative  w-2/5 mr-12">
                    <h2 class="font-extrabold">Jumlah Staf Taska</h2>
                    <div class="chart-box-main flex justify-end h-auto w-full py-6 mt-4 p-4 rounded-2xl bg-white drop-shadow-2xl">
                        <h3 class="text-4xl font-bold mr-2 text-green-600">12</h3>
                        <i class="fa-solid fa-user text-4xl mx-5"></i>
                    </div>
                </div>
                <div class="relative  w-2/5 mr-12">
                    <h2 class="font-extrabold">Jantina Kanak-Kanak</h2>
                    <div class="chart-box-main flex justify-around h-auto w-full py-6 mt-4 p-4 rounded-2xl bg-white drop-shadow-2xl">
                        <div class="flex">
                            <h3 class="text-4xl font-bold  text-blue-500">22</h3>
                            <i class="fa-solid fa-mars text-4xl mx-5"></i> 
                        </div>
                        <div class="flex">
                            <h3 class="text-4xl font-bold  text-pink-500">26</h3>
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
    <!-- Footer -->
    <div class="bg-black text-center text-white p-4">
        <h4>All rights reserved</h4>
    </div>
</template>