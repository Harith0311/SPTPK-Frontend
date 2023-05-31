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
                <h3>Halaman Utama > <span class="text-orange-400 font-semibold">Rekod Kehadiran</span> </h3>
            </div>

            <!-- Div Content -->
            <div class="max-sm:hidden ">
                <div class="bg-white m-2  w-full rounded-3xl " >
                
                <!-- <h1 class="text-center font-bold text-2xl mt-5">Harap maaf, fungsi ini hanya tersedia bagi pengguna telefon bimbit sahaja</h1>
                <i class="fa-solid fa-mobile-screen text-9xl p-5 text-center"></i> -->
                <div class=" bg-white w-5/6 mx-auto h-4/5  rounded-3xl">
                    <div class=" mt-10 py-24">
                        <h1 class="text-center font-bold text-2xl  mt-5">Harap maaf, fungsi ini hanya tersedia bagi pengguna telefon bimbit sahaja</h1>
                        <div class="flex justify-center">
                            <i class="fa-solid fa-mobile-screen text-9xl mx-auto pt-14 p-5 text-center"></i>
                        </div>
                    </div>
                </div>
            
                </div>
            </div>

            <!-- Mobile version -->
            <div class="qr bg-blue-200 h-full rounded-lg py-4 sm:hidden " >
                <!-- <div class="flex justify-between h-auto bg-black w-screen py-2">
                    <div class="flex">
                        <img class="p-1 ml-3 h-auto w-10" src="../assets/permata-logo.png" alt="">
                        <h3 class="text-red-600 text-sm font-semibold pt-2 pl-2">Taska Permata <br> Keluarga</h3>
                    </div>
                    <div class="flex">
                        <h2 class="text-white p-4 pt-5 font-semibold">Kod QR</h2>
                        <i class="fa-solid fa-bars text-white text-2xl p-4 pr-8"></i>
                    </div>
                </div> -->
                <h2 class="text-lg font-bold p-4 pl-8">Imbas Kod QR</h2>
                <div class="bg-white flex justify-center py-20 align-middle h-72 drop-shadow-2xl outline m-8">
                    <i class="fa-solid fa-qrcode text-9xl "></i>
                </div>
                <div class="border-solid border-b-2 border-black mx-4">
                    <!-- Horizontal Line -->
                </div>
                <div class="flex bg-white m-8 mb-8 rounded-lg justify-between">
                    <div class="pl-8 p-4">
                        <h2 class="text-base font-semibold">Nama</h2>
                        <h2 class="text-base font-semibold">Umur</h2>
                        <h2 class="text-base font-semibold">Jantina</h2>
                        <h2 class="text-base font-semibold">ID</h2>
                    </div>
                    <div class="pr-40 p-4 w-full">
                        <h2 class="text-base font-semibold w-44">: Harith bin Ismail</h2>
                        <h2 class="text-base font-semibold">: 2 Tahun</h2>
                        <h2 class="text-base font-semibold">: Lelaki</h2>
                        <h2 class="text-base font-semibold">: 0001</h2>
                    </div>
                </div>
                <h2 class="text-lg font-bold pl-8">Status suhu</h2>
                <div class="flex justify-between">
                    <div class="bg-green-400 w-2/5 p-4 rounded-xl text-center font-semibold m-4 ml-8 drop-shadow-xl cursor-pointer">
                        <button>Normal</button>
                    </div>
                    <div class="bg-red-400 w-2/5 p-4 rounded-xl text-center font-semibold m-4 ml-8 drop-shadow-xl cursor-pointer">
                        <button>Tinggi</button>
                    </div>
                </div>
                <div class="bg-blue-400 w-5/6 pb-5 mx-auto p-4 rounded-xl text-center font-semibold m-4 ml-8 drop-shadow-xl cursor-pointer">
                    <button>Semak</button>
                </div>
            </div>

        </div>

    </div>
    <!-- Footer -->
    <div class="bg-black text-center text-white p-4">
        <h4>All rights reserved</h4>
    </div>
</template>