<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="flex justify-between mx-6">
            <div class="flex bg-green-200 hover:bg-green-300 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-solid fa-child text-5xl py-2"></i>
                <h1 class="text-center p-5 font-bold ml-1">Kanak-Kanak</h1>
            </div>

            <!-- Button Report Kehadiran -->         
            <RouterLink to="/report/attendance" class="flex bg-orange-200 hover:bg-orange-300 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-regular fa-calendar-check text-5xl py-2"></i>
                <h1 class="text-center p-5 font-bold ml-1">Kehadiran</h1>
            </RouterLink>
            
            <!-- Button Report Aktiviti -->
            <RouterLink to="/report/activity" class="flex  bg-blue-300 hover:bg-blue-400 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-solid fa-rocket text-5xl py-2"></i>
                <h1 class="text-center p-5 font-bold ml-1">Aktiviti</h1>
            </RouterLink>
            
        </div>
        <div class="Kotak px-10">
            <div class="bg-green-200  h-[480px] w-full mx-auto mt-5 mb-10 rounded-2xl pb-10">
                <h2 class="text-xl font-bold px-14 p-5">Maklumat Kanak-Kanak</h2>
                <div class=" relative overflow-y-auto overflow-hidden  h-[380px]">
                    <table class="m-8 w-5/6 mx-auto relative overflow-y-auto h-[380px] scrollbar-hide">
                        <thead class="sticky top-0 z-10 ">
                            <tr class="border-solid border-b-2 border-black ">
                                <th class="w-auto bg-green-200">Bil.</th>
                                <th class="bg-green-200 ">Nama</th>
                                <th class="bg-green-200">Umur</th>
                                <th class="bg-green-200">Sijil Lahir</th>
                                <th class="bg-green-200">Jantina</th>
                                <th class="bg-green-200">Bangsa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(child, index) in ChildList" v-bind:key="child.id" class="border-solid border-b-2 border-[#c7fcda]">
                                <td class="text-center p-2">{{ index + 1 }}</td>
                                <td class="p-2">{{child.namaKanak}}</td>
                                <td class="text-center p-2">{{child.umur}}</td>
                                <td class="text-center p-2">{{child.sijilLahir}}</td>
                                <td class="text-center p-2">{{child.jantina}}</td>
                                <td class="text-center p-2">{{child.bangsa}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            
            </div>
            <div class="bg-green-300 hover:bg-green-400 cursor-pointer p-4 h-[60px] w-full mx-auto mb-10 drop-shadow-lg rounded-2xl text-center font-bold text-lg">
                Cetak Laporan Kanak Kanak
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
        },

        printReport(){
            
        }
    }
}


</script>