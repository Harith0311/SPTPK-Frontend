<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="flex justify-between mx-6">
        <RouterLink to="/report" class="flex bg-green-200 hover:bg-green-300 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-solid fa-child text-5xl text-black py-2"></i>
                <h1 class="text-center text-black p-5 font-bold ml-1">Kanak-Kanak</h1>
            </RouterLink>
            
            <!-- Button Report Kehadiran -->         
            <RouterLink to="/report/attendance" class="flex bg-orange-200 hover:bg-orange-300 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-regular fa-calendar-check text-5xl py-2"></i>
                <h1 class="text-center text-black p-5 font-bold ml-1">Kehadiran</h1>
            </RouterLink>
            
            <!-- Button Report Aktiviti -->
            <RouterLink to="/report/activity" class="flex bg-[#93c5fd] hover:bg-blue-400 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-solid fa-rocket text-5xl text-black py-2"></i>
                <h1 class="text-center text-black p-5 font-bold ml-1">Aktiviti</h1>
            </RouterLink>
        </div>
        <div class="Kotak px-10">
            <div class="bg-blue-300 w-full mx-auto mt-5 mb-10 rounded-2xl pb-10">
                <h2 class="text-xl font-bold px-14 p-5">Laporan Aktiviti Kanak-Kanak</h2>
                <div class="flex justify-between mr-12">
                    <div class="ml-20">
                        <input class="p-2 rounded-lg drop-shadow-md" type="date" v-model="selectedDate" @change="fetchAll" >
                    </div>
                    <div class="flex">
                        <div class="bg-green-200 rounded-md mx-2 p-2 px-4">
                            Mudah
                        </div>
                        <div class="bg-orange-200 rounded-md mx-2 p-2 px-4">
                            Biasa
                        </div>
                        <div class="bg-red-200 rounded-md mx-2 p-2 px-4">
                            Sukar
                        </div> 
                    </div>
                </div>
                <!-- Kelas Melur -->
                <div class="group flex justify-between">
                    <!-- Logo Kelas -->
                    <div class="group flex">
                        <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 z-0 rounded-md">
                            <img src="../assets/melur.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                        </div>
                        <!-- Tooltip test -->
                        <div class=" group-hover:visible  invisible w-20 bg-blue-700 bg-opacity-70 text-sm text-white text-center rounded-md mt-24 ml-20 p-1  absolute z-50">
                                Melur
                        </div>
                    </div>
                    <!-- Senarai Aktiviti -->
                    <div class="flex flex-col justify-evenly py-3 bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <template v-if="AktivitiMelur1.length > 0 || AktivitiMelur2.length > 0 || AktivitiMelur3.length > 0 ">
                            <div class="flex justify-center py-1">
                                <div  v-for="activity in AktivitiMelur1" v-bind:key="activity.id" class="bg-green-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiMelur2" v-bind:key="activity.id" class="bg-orange-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiMelur3" v-bind:key="activity.id" class="bg-red-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex justify-center py-1">
                                <div class="bg-gray-50 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                    Tiada Aktiviti Pada Hari Ini
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <!-- Kelas Orkid -->
                <div class="group flex justify-between">
                    <!-- Logo Kelas -->
                    <div class="group flex">
                        <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                            <img src="../assets/orkid.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                        </div>
                        <!-- Tooltip test -->
                        <div class=" group-hover:visible  invisible w-20 bg-blue-700 bg-opacity-70 text-sm text-white text-center rounded-md mt-24 ml-20 p-1  absolute z-50">
                                Orkid
                        </div>
                    </div>
                    <!-- Senarai Aktiviti -->
                    <div class="bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <template v-if="AktivitiOrkid1.length > 0 || AktivitiOrkid2.length > 0 || AktivitiOrkid3.length > 0 ">
                            <div class="flex justify-center py-1">
                                <div  v-for="activity in AktivitiOrkid1" v-bind:key="activity.id" class="bg-green-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiOrkid2" v-bind:key="activity.id" class="bg-orange-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiOrkid3" v-bind:key="activity.id" class="bg-red-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex justify-center py-1">
                                <div class="bg-gray-50 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                    Tiada Aktiviti Pada Hari Ini
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <!-- Kelas -->
                <div class="group flex justify-between">
                    <!-- Logo Kelas -->
                    <div class="group flex">
                        <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                            <img src="../assets/rose.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                        </div>
                        <!-- Tooltip test -->
                        <div class=" group-hover:visible  invisible w-20 bg-blue-700 bg-opacity-70 text-sm text-white text-center rounded-md mt-24 ml-20 p-1  absolute z-50">
                            Rose
                        </div>
                    </div>
                    <!-- Senarai Aktiviti -->
                    <div class="bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <template v-if="AktivitiRose1.length > 0 || AktivitiRose2.length > 0 || AktivitiRose3.length > 0 ">
                            <div class="flex justify-center py-1">
                                <div  v-for="activity in AktivitiRose1" v-bind:key="activity.id" class="bg-green-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiRose2" v-bind:key="activity.id" class="bg-orange-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiRose3" v-bind:key="activity.id" class="bg-red-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex justify-center py-1">
                                <div class="bg-gray-50 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                    Tiada Aktiviti Pada Hari Ini
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <!-- Kelas Raya -->
                <div class="group flex justify-between">
                    <!-- Logo Kelas -->
                    <div class="group flex">
                        <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                            <img src="../assets/raya.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                        </div>
                        <!-- Tooltip test -->
                        <div class=" group-hover:visible  invisible w-20 bg-blue-700 bg-opacity-70 text-sm text-white text-center rounded-md mt-24 ml-20 p-1  absolute z-50">
                            Raya
                        </div>
                    </div>
                    <!-- Senarai Aktiviti -->
                    <div class="bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <template v-if="AktivitiRaya1.length > 0 || AktivitiRaya2.length > 0 || AktivitiRaya3.length > 0 ">
                            <div class="flex justify-center py-1">
                                <div  v-for="activity in AktivitiRaya1" v-bind:key="activity.id" class="bg-green-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiRaya2" v-bind:key="activity.id" class="bg-orange-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiRaya3" v-bind:key="activity.id" class="bg-red-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex justify-center py-1">
                                <div class="bg-gray-50 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                    Tiada Aktiviti Pada Hari Ini
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <!-- Kelas Daisy -->
                <div class="group flex justify-between">
                    <!-- Logo Kelas -->
                    <div class="group flex">
                        <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                            <img src="../assets/daisy.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                        </div>
                        <!-- Tooltip test -->
                        <div class=" group-hover:visible  invisible w-20 bg-blue-700 bg-opacity-70 text-sm text-white text-center rounded-md mt-24 ml-20 p-1  absolute z-50">
                                Daisy
                        </div>
                    </div>
                    <!-- Senarai Aktiviti -->
                    <div class="bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <template v-if="AktivitiDaisy1.length > 0 || AktivitiDaisy2.length > 0 || AktivitiDaisy3.length > 0 ">
                            <div class="flex justify-center py-1">
                                <div  v-for="activity in AktivitiDaisy1" v-bind:key="activity.id" class="bg-green-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiDaisy2" v-bind:key="activity.id" class="bg-orange-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiDaisy3" v-bind:key="activity.id" class="bg-red-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex justify-center py-1">
                                <div class="bg-gray-50 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                    Tiada Aktiviti Pada Hari Ini
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <!-- Kelas Matahari -->
                <div class="group flex justify-between">
                    <!-- Logo Kelas -->
                    <div class="group flex">
                        <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                            <img src="../assets/matahari.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                        </div>
                        <!-- Tooltip test -->
                        <div class=" group-hover:visible  invisible w-20 bg-blue-700 bg-opacity-70 text-sm text-white text-center rounded-md mt-24 ml-20 p-1  absolute z-50">
                            Matahari
                        </div>
                    </div>
                    <!-- Senarai Aktiviti -->
                    <div class="bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <template v-if="AktivitiMatahari1.length > 0 || AktivitiMatahari2.length > 0 || AktivitiMatahari3.length > 0 ">
                            <div class="flex justify-center py-1">
                                <div  v-for="activity in AktivitiMatahari1" v-bind:key="activity.id" class="bg-green-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiMatahari2" v-bind:key="activity.id" class="bg-orange-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiMatahari3" v-bind:key="activity.id" class="bg-red-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex justify-center py-1">
                                <div class="bg-gray-50 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                    Tiada Aktiviti Pada Hari Ini
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Kelas Dahlia-->
                <div class="group flex justify-between">
                    <!-- Logo Kelas -->
                    <div class="group flex">
                        <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                            <img src="../assets/dahlia.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                        </div>
                        <!-- Tooltip test -->
                        <div class=" group-hover:visible  invisible w-20 bg-blue-700 bg-opacity-70 text-sm text-white text-center rounded-md mt-24 ml-20 p-1  absolute z-50">
                            Dahlia
                        </div>
                    </div>
                    <!-- Senarai Aktiviti -->
                    <div class="bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <template v-if="AktivitiDahlia1.length > 0 || AktivitiDahlia2.length > 0 || AktivitiDahlia3.length > 0 ">
                            <div class="flex justify-center py-1">
                                <div  v-for="activity in AktivitiDahlia1" v-bind:key="activity.id" class="bg-green-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiDahlia2" v-bind:key="activity.id" class="bg-orange-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiDahlia3" v-bind:key="activity.id" class="bg-red-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex justify-center py-1">
                                <div class="bg-gray-50 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                    Tiada Aktiviti Pada Hari Ini
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Kelas Lily -->
                <div class="group flex justify-between">
                    <!-- Logo Kelas -->
                    <div class="group flex">
                        <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                            <img src="../assets/lily.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                        </div>
                        <!-- Tooltip test -->
                        <div class=" group-hover:visible  invisible w-20 bg-blue-700 bg-opacity-70 text-sm text-white text-center rounded-md mt-24 ml-20 p-1  absolute z-50">
                                Lily
                        </div>
                    </div>
                    <!-- Senarai Aktiviti -->
                    <div class="bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <template v-if="AktivitiLily1.length > 0 || AktivitiLily2.length > 0 || AktivitiLily3.length > 0 ">
                            <div class="flex justify-center py-1">
                                <div  v-for="activity in AktivitiLily1" v-bind:key="activity.id" class="bg-green-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiLily2" v-bind:key="activity.id" class="bg-orange-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiLily3" v-bind:key="activity.id" class="bg-red-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex justify-center py-1">
                                <div class="bg-gray-50 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                    Tiada Aktiviti Pada Hari Ini
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Kelas Tulip-->
                <div class="group flex justify-between">
                    <!-- Logo Kelas -->
                    <div class="group flex">
                        <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                            <img src="../assets/tulip.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                        </div>
                        <!-- Tooltip test -->
                        <div class=" group-hover:visible  invisible w-20 bg-blue-700 bg-opacity-70 text-sm text-white text-center rounded-md mt-24 ml-20 p-1  absolute z-50">
                                Tulip
                        </div>
                    </div>
                    <!-- Senarai Aktiviti -->
                    <div class="bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <template v-if="AktivitiTulip1.length > 0 || AktivitiTulip2.length > 0 || AktivitiTulip3.length > 0 ">
                            <div class="flex justify-center py-1">
                                <div  v-for="activity in AktivitiTulip1" v-bind:key="activity.id" class="bg-green-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiTulip2" v-bind:key="activity.id" class="bg-orange-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                                <div  v-for="activity in AktivitiTulip3" v-bind:key="activity.id" class="bg-red-200 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                {{activity.aktiviti.namaAktiviti}}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <div class="flex justify-center py-1">
                                <div class="bg-gray-50 flex items-center rounded-md h-16 m-1 mx-4 py-0.5 px-14 z-50 ">
                                    Tiada Aktiviti Pada Hari Ini
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

            </div>
            <div @click="printReport" class="bg-blue-400 hover:bg-blue-500 cursor-pointer p-4 h-[60px] w-full mx-auto mb-10 drop-shadow-lg rounded-2xl text-center font-bold text-lg">
                Cetak Laporan Aktiviti
            </div>

        </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            AktivitiHariIniList: [],
            AktivitiMelur1: [],
            AktivitiMelur2: [],
            AktivitiMelur3: [],
            AktivitiOrkid1: [],
            AktivitiOrkid2: [],
            AktivitiOrkid3: [],
            AktivitiRose1: [],
            AktivitiRose2: [],
            AktivitiRose3: [],
            AktivitiRaya1: [],
            AktivitiRaya2: [],
            AktivitiRaya3: [],
            AktivitiDaisy1: [],
            AktivitiDaisy2: [],
            AktivitiDaisy3: [],
            AktivitiMatahari1: [],
            AktivitiMatahari2: [],
            AktivitiMatahari3: [],
            AktivitiDahlia1: [],
            AktivitiDahlia2: [],
            AktivitiDahlia3: [],
            AktivitiLily1: [],
            AktivitiLily2: [],
            AktivitiLily3: [],
            AktivitiTulip1: [],
            AktivitiTulip2: [],
            AktivitiTulip3: [],
            selectedDate: this.getTodayDate()

        }
    },

    mounted() {
        this.fetchAktivitiHariIni();
        this.fetchAktivitiMelur();
        this.fetchAktivitiOrkid();
        this.fetchAktivitiRose();
        this.fetchAktivitiRaya();
        this.fetchAktivitiDaisy();
        this.fetchAktivitiMatahari();
        this.fetchAktivitiDahlia();
        this.fetchAktivitiLily();
        this.fetchAktivitiTulip();
    },

    methods: {
        fetchAktivitiHariIni() {
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiHariIniList = response.data;
                
                })
                .catch(error => {
                console.error('Error fetching aktiviti data:', error);
                });
        },

        fetchAll() {
            this.fetchAktivitiMelur();
            this.fetchAktivitiOrkid();
            this.fetchAktivitiRose();
            this.fetchAktivitiRaya();
            this.fetchAktivitiDaisy();
            this.fetchAktivitiMatahari();
            this.fetchAktivitiDahlia();
            this.fetchAktivitiLily();
            this.fetchAktivitiTulip();
        },

        fetchAktivitiMelur(){
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiMelur1 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Melur" && item.aktiviti.kesukaran === "Mudah" && itemDate === this.selectedDate;
                });
                this.AktivitiMelur2 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Melur" && item.aktiviti.kesukaran === "Biasa" && itemDate === this.selectedDate;
                });
                this.AktivitiMelur3 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Melur" && item.aktiviti.kesukaran === "Sukar" && itemDate === this.selectedDate;
                });

                })
                .catch(error => {
                console.error('Error fetching data Melur:', error);
                });
        },

        fetchAktivitiOrkid(){
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiOrkid1 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Orkid" && item.aktiviti.kesukaran === "Mudah" && itemDate === this.selectedDate;
                });
                this.AktivitiOrkid2 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Orkid" && item.aktiviti.kesukaran === "Biasa" && itemDate === this.selectedDate;
                });
                this.AktivitiOrkid3 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Orkid" && item.aktiviti.kesukaran === "Sukar" && itemDate === this.selectedDate;
                });

                })
                .catch(error => {
                console.error('Error fetching data Orkid:', error);
                });
        },

        fetchAktivitiRose(){
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiRose1 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Rose" && item.aktiviti.kesukaran === "Mudah" && itemDate === this.selectedDate;
                });
                this.AktivitiRose2 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Rose" && item.aktiviti.kesukaran === "Biasa" && itemDate === this.selectedDate;
                });
                this.AktivitiRose3 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Rose" && item.aktiviti.kesukaran === "Sukar" && itemDate === this.selectedDate;
                });

                })
                .catch(error => {
                console.error('Error fetching data Rose:', error);
                });
        },

        fetchAktivitiRaya(){
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiRaya1 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Raya" && item.aktiviti.kesukaran === "Mudah" && itemDate === this.selectedDate;
                });
                this.AktivitiRaya2 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Raya" && item.aktiviti.kesukaran === "Biasa" && itemDate === this.selectedDate;
                });
                this.AktivitiRaya3 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Raya" && item.aktiviti.kesukaran === "Sukar" && itemDate === this.selectedDate;
                });

                })
                .catch(error => {
                console.error('Error fetching data Raya:', error);
                });
        },

        fetchAktivitiDaisy(){
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiDaisy1 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Daisy" && item.aktiviti.kesukaran === "Mudah" && itemDate === this.selectedDate;
                });
                this.AktivitiDaisy2 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Daisy" && item.aktiviti.kesukaran === "Biasa" && itemDate === this.selectedDate;
                });
                this.AktivitiDaisy3 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Daisy" && item.aktiviti.kesukaran === "Sukar" && itemDate === this.selectedDate;
                });

                })
                .catch(error => {
                console.error('Error fetching data Daisy:', error);
                });
        },

        fetchAktivitiMatahari(){
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiMatahari1 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Matahari" && item.aktiviti.kesukaran === "Mudah" && itemDate === this.selectedDate;
                });
                this.AktivitiMatahari2 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Matahari" && item.aktiviti.kesukaran === "Biasa" && itemDate === this.selectedDate;
                });
                this.AktivitiMatahari3 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Matahari" && item.aktiviti.kesukaran === "Sukar" && itemDate === this.selectedDate;
                });

                })
                .catch(error => {
                console.error('Error fetching data Matahari:', error);
                });
        },


        fetchAktivitiDahlia(){
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiDahlia1 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Dahlia" && item.aktiviti.kesukaran === "Mudah" && itemDate === this.selectedDate;
                });
                this.AktivitiDahlia2 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Dahlia" && item.aktiviti.kesukaran === "Biasa" && itemDate === this.selectedDate;
                });
                this.AktivitiDahlia3 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Dahlia" && item.aktiviti.kesukaran === "Sukar" && itemDate === this.selectedDate;
                });

                })
                .catch(error => {
                console.error('Error fetching data Dahlia:', error);
                });
        },

        fetchAktivitiLily(){
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiLily1 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Lily" && item.aktiviti.kesukaran === "Mudah" && itemDate === this.selectedDate;
                });
                this.AktivitiLily2 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Lily" && item.aktiviti.kesukaran === "Biasa" && itemDate === this.selectedDate;
                });
                this.AktivitiLily3 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Lily" && item.aktiviti.kesukaran === "Sukar" && itemDate === this.selectedDate;
                });
                })
                .catch(error => {
                console.error('Error fetching data Lily:', error);
                });
        },

        fetchAktivitiTulip(){
            axios.get('http://localhost:1001/aktivitiHariIni')
                .then(response => {
                this.AktivitiTulip1 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Tulip" && item.aktiviti.kesukaran === "Mudah" && itemDate === this.selectedDate;
                });
                this.AktivitiTulip2 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Tulip" && item.aktiviti.kesukaran === "Biasa" && itemDate === this.selectedDate;
                });
                this.AktivitiTulip3 = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Tulip" && item.aktiviti.kesukaran === "Sukar" && itemDate === this.selectedDate;
                });
                })
                .catch(error => {
                console.error('Error fetching data Tulip:', error);
                });
        },

        printReport(){
            // Create a new window for printing
            const printWindow = window.open('', '_blank','width=800,height=600,top=100,left=100,location=no');
                
            // Open a new document in the print window
            printWindow.document.open();

            let AllActivity = this.AktivitiHariIniList;
            const date = this.selectedDate;

            AllActivity = AllActivity.filter(item => {
                const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                return itemDate === date;
            });


            const tableRows = AllActivity.map((activity, index) => {

                return `
                    <tr>
                        <td style="text-align: center;">${activity.kelas}</td>
                        <td >${activity.aktiviti.namaAktiviti}</td>
                        <td style="text-align: center;">${activity.aktiviti.kesukaran}</td>              
                    </tr>
                `;
                
            }).join('');

            const htmlTemplate =`
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    <style>
                        * {
                            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                        }

                        table{
                            margin-left: auto;
                            margin-right: auto;
                            width: 80vw;
                            
                            border-collapse: collapse;
                        }

                        table, td, th{
                            border: 2px solid black;
                            padding: 5px;
                        }

                        h2{
                            text-align: center;
                            margin-top: 40px;
                            margin-bottom: -5px;
                        }

                        p{
                            font-size: 15px;
                            font-weight: 600;
                            text-align: center;
                            margin-bottom: 30px;
                        }
                    </style>
                </head>
                <body>
                    <h2>Laporan Aktiviti Kanak Kanak</h2>
                    <p>TASKA PERMATA KELUARGA TAMAN DESA PERMAI</p>
                        <table>
                            <thead>
                                <tr>
                                    
                                    <th style="width: 10px;">Kelas</th>
                                    <th style="width: 400px;">Aktiviti</th>
                                    <th style="width: 100px;">Kesukaran</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                ${tableRows}
                            </tbody>
                        </table>
                        <p>Tarikh Aktiviti dilakukan: ${this.selectedDate}</p>
                </body>
            `;

            // Write the HTML template to the print window document
            printWindow.document.write(htmlTemplate);

            // Close the print document
            printWindow.document.close();

            // Print the document
            printWindow.print();

        },

        getTodayDate() {
            const today = new Date();
            const year = today.getFullYear();
            let month = today.getMonth() + 1; // Adding 1 to adjust for zero-based index
            let day = today.getDate();

            // Pad month and day with leading zero if needed
            if (month < 10) {
                month = `0${month}`;
            }
            if (day < 10) {
                day = `0${day}`;
            }

            return `${year}-${month}-${day}`;
        }
    }
}
</script>