<script setup>
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="flex justify-between mx-6">
        <!-- Button Report Kanak Kanak -->
        <RouterLink to="/report" class="flex bg-green-200 hover:bg-green-300 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-solid fa-child text-5xl text-black py-2"></i>
                <h1 class="text-center p-5 text-black font-bold ml-1">Kanak-Kanak</h1>
            </RouterLink>
            
            <!-- Button Report Kehadiran -->         
            <RouterLink to="/report/attendance" class="flex bg-orange-200 hover:bg-orange-300 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-regular fa-calendar-check text-5xl text-black py-2"></i>
                <h1 class="text-center text-black p-5 font-bold ml-1">Kehadiran</h1>
            </RouterLink>
            
            <!-- Button Report Aktiviti -->
            <RouterLink to="/report/activity" class="flex  bg-blue-300 hover:bg-blue-400 p-8 w-2/5 mt-10 m-4 rounded-2xl justify-center cursor-pointer drop-shadow-2xl">
                <i class="fa-solid fa-rocket text-5xl py-2"></i>
                <h1 class="text-center p-5 font-bold ml-1">Aktiviti</h1>
            </RouterLink>
        </div>
        <div class="Kotak px-10">
            <div class="bg-orange-200 w-full mx-auto mt-5 mb-10 rounded-2xl pb-10">
                <h2 class="text-xl font-bold px-14 p-5">Laporan Kehadiran Kanak-Kanak</h2>

                <div class="flex justify-end mx-28 ">
                    <input class="p-2 rounded-lg drop-shadow-md" type="date" v-model="selectedDate" @change="fetchChildAttendance" >
                </div>

                <div class="relative overflow-y-auto overflow-hidden  h-[380px]">
                    <table class="m-8 w-5/6 mx-auto">
                        <thead class="sticky top-0 z-10 ">
                            <tr class="border-solid border-b-2 border-black">
                                <th class="w-auto bg-orange-200">Bil.</th>
                                <th class="bg-orange-200 ">Nama</th>
                                <th class="bg-orange-200 ">Umur</th>
                                <th class="bg-orange-200 ">Jantina</th>
                                <th class="bg-orange-200 ">Kehadiran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(child, index) in ChildList" v-bind:key="child.id" class="border-solid border-b-2 border-[#fcdebb] ">
                                <td class="text-center p-2">{{ index + 1 }}</td>
                                <td class="p-2">{{child.namaKanak}}</td>
                                <td class="text-center p-2">{{child.umur}}</td>                      
                                <td class="text-center p-2">{{child.jantina}}</td>
                                <template v-if="AttendanceList.length > 0">
                                    <template v-for="attendance in AttendanceList" v-bind:key="attendance.kanakId">
                                        <div v-if="attendance.hadir === true && attendance.kanakId === child.id">
                                            <td class="flex text-center justify-center p-2">
                                                <div class="w-3 h-3 rounded-full bg-green-600 mx-3 my-2"></div> 
                                            </td>
                                        </div>
                                        <div v-else>
                                            <td class="flex text-center justify-center p-2">
                                                <div class="w-3 h-3 rounded-full bg-red-600 mx-3 my-2"></div> 
                                            </td>
                                        </div>
                                    </template>
                                </template>
                                <div v-else>
                                            <td class="flex text-center justify-center p-2">
                                                <div class="w-3 h-3 rounded-full bg-red-600 mx-3 my-2"></div> 
                                            </td>
                                        </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
            <div class="bg-orange-300 hover:bg-orange-400 cursor-pointer p-4 h-[60px] w-full mx-auto mb-10 drop-shadow-lg rounded-2xl text-center font-bold text-lg">
                Cetak Laporan Kehadiran
            </div>

        </div>
</template>

<script>

import axios from 'axios';

export default {
    data() {
        return {
            ChildList: [],
            AttendanceList: [],
            data: null,
            dayOfWeek: '',
            selectedDate: this.getTodayDate()
        }
    },

    computed: {
        getDefaultDate() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
    },

    mounted() {
        this.fetchChildData();
        this.fetchChildAttendance();
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
        },

        fetchChildAttendance(){
            const date = this.selectedDate;

            axios.get(`http://localhost:1001/kehadiran?date=${date}`) 
                .then(response => {
                this.AttendanceList = response.data;
                this.extractDayOfWeek();
                console.log(this.data);
                })
                .catch(error => {
                console.error('Error fetching data:', error);
                });
        },

        extractDayOfWeek() {
            if (this.data && this.data.length > 0) {
                this.data.forEach(item => {
                    const dateObj = new Date(item.diciptaPada);
                    const options = { weekday: 'long' };
                    this.dayOfWeek = dateObj.toLocaleString('en-US', options);
                    console.log("Day of the week:", this.dayOfWeek);
                });
            }
        }

    }
}


</script>