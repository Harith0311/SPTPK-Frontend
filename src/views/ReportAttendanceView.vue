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
                                <th class="bg-orange-200 ">Kelas</th>
                                <th class="bg-orange-200 ">Jantina</th>
                                <th class="bg-orange-200 ">Kehadiran</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(child, index) in ChildList" v-bind:key="child.id" class="border-solid border-b-2 border-[#fcdebb] ">
                                <td class="text-center p-2">{{ index + 1 }}</td>
                                <td class="p-2">{{child.namaKanak}}</td>
                                <td class="text-center p-2">{{ child.ageYears }} tahun {{ child.ageMonths }} bulan</td> 
                                <td class="text-center p-2">{{child.kelas}}</td>                    
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
            <div @click="printReport" class="bg-orange-300 hover:bg-orange-400 cursor-pointer p-4 h-[60px] w-full mx-auto mb-10 drop-shadow-lg rounded-2xl text-center font-bold text-lg">
                Cetak Laporan Kehadiran
            </div>

        </div>
</template>

<script>

import axios from 'axios';
import { BaseURL } from '../stores';

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
        fetchChildData() {
            axios.get(BaseURL + 'kanak')
                .then(response => {
                // Filter the data where 'kelas' is not null
                this.ChildList = response.data.filter(child => child.kelas !== null);
                
                this.calculateAge();
                console.log(this.ChildList);
                })
                .catch(error => {
                console.error('Error fetching child data:', error);
                });
        },

        calculateAge() {
            if (this.ChildList.length > 0) {
                const today = new Date();
                this.ChildList.forEach((child) => {
                    const birthDate = new Date(child.tarikhLahir);
                    const yearDiff = today.getFullYear() - birthDate.getFullYear();
                    const monthDiff = today.getMonth() - birthDate.getMonth();
                    const dayDiff = today.getDate() - birthDate.getDate();

                    let ageYears = yearDiff;
                    let ageMonths = monthDiff;

                    if (dayDiff < 0) {
                    ageMonths -= 1;
                    }

                    if (ageMonths < 0) {
                    ageYears -= 1;
                    ageMonths += 12;
                    }

                    child.ageYears = ageYears;
                    child.ageMonths = ageMonths;
                });
            }
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

            axios.get(BaseURL + `kehadiran?date=${date}`) 
                .then(response => {
                this.AttendanceList = response.data;
                this.extractDayOfWeek();
                console.log(this.data);
                })
                .catch(error => {
                console.error('Error fetching data:', error);
                });
        },

        printReport(){
            // Create a new window for printing
            const printWindow = window.open('', '_blank', 'width=800,height=600,top=100,left=100,location=no');

            // Open a new document in the print window
            printWindow.document.open();

            // Extract the data from the Vue.js component
            const ChildList = this.ChildList;
            const AttendanceList = this.AttendanceList;

            // Generate the table rows using the data
            const tableRows = ChildList.map((child, index) => {
            let attendanceCell = '';

            if (AttendanceList.length > 0) {
                const attendance = AttendanceList.find(a => a.kanakId === child.id);
                if (attendance && attendance.hadir) {
                attendanceCell = `<td class="flex text-center justify-center p-2"><div class="w-3 h-3 rounded-full bg-green-600 mx-3 my-2">Hadir</div></td>`;
                } else {
                attendanceCell = `<td class="flex text-center justify-center p-2"><div class="w-3 h-3 rounded-full bg-red-600 mx-3 my-2">Tidak Hadir</div></td>`;
                }
            } else {
                attendanceCell = `<td class="flex text-center justify-center p-2"><div class="w-3 h-3 rounded-full bg-red-600 mx-3 my-2">Tidak Hadir</div></td>`;
            }

            return `
                <tr>
                <td class="text-center p-2">${index + 1}</td>
                <td class="p-2">${child.namaKanak}</td>
                <td class="text-center p-2">${ child.ageYears } tahun ${ child.ageMonths } bulan</td>
                <td class="text-center p-2">${child.kelas}</td>
                <td class="text-center p-2">${child.jantina}</td>
                ${attendanceCell}
                </tr>
            `;
            }).join('');

            // Generate the complete HTML template with the dynamic data
            const htmlTemplate = `
            <html>
                <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    * {
                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    }

                    table {
                    margin-left: auto;
                    margin-right: auto;
                    width: 80vw;
                    border-collapse: collapse;
                    }

                    table, td, th {
                    border: 2px solid black;
                    padding: 5px;
                    }

                    h2 {
                    text-align: center;
                    margin-top: 40px;
                    margin-bottom: -5px;
                    }

                    p {
                    font-size: 15px;
                    font-weight: 600;
                    text-align: center;
                    margin-bottom: 30px;
                    }
                </style>
                </head>
                <body>
                <h2>Laporan Kehadiran Kanak Kanak</h2>
                <p>TASKA PERMATA KELUARGA TAMAN DESA PERMAI</p>
                <table>
                    <thead>
                    <tr>
                        <th class="w-auto bg-orange-200">Bil.</th>
                        <th class="bg-orange-200">Nama</th>
                        <th class="bg-orange-200">Umur</th>
                        <th class="bg-orange-200">Kelas</th>
                        <th class="bg-orange-200">Jantina</th>
                        <th class="bg-orange-200">Kehadiran</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${tableRows}
                    </tbody>
                </table>
                <p>Tarikh Kehadiran: ${this.selectedDate}</p>
                
                
                </body>
            </html>
            `;

            // Write the HTML template to the print window document
            printWindow.document.write(htmlTemplate);

            // Close the document after writing
            printWindow.document.close();

            printWindow.print();

            printWindow.document.querySelector('body').style.margin = '0';
            printWindow.document.querySelector('table').style.width = '100%';
            printWindow.document.querySelector('table').style.borderCollapse = 'collapse';

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