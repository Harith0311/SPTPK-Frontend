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
                    <table class="m-8 w-5/6 mx-auto relative overflow-y-auto h-auto` scrollbar-hide" id="childTable">
                        <thead class="sticky top-0 z-10 ">
                            <tr class="border-solid border-b-2 border-black ">
                                <th class="w-auto bg-green-200">Bil.</th>
                                <th class="">Nama</th>
                                <th class="bg-green-200">Umur</th>
                                <th class="bg-green-200">Kelas</th>
                                <th class="bg-green-200">Sijil Lahir</th>
                                <th class="bg-green-200">Jantina</th>
                                <th class="bg-green-200">Bangsa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(child, index) in ApprovedChildList" v-bind:key="child.id" class="border-solid border-b-2 border-[#c7fcda]">
                                <td class="text-center p-2">{{ index + 1 }}</td>
                                <td class="p-2">{{child.kanak.namaKanak}}</td>
                                <td class="text-center p-2">{{ child.ageYears }} tahun {{ child.ageMonths }} bulan</td>
                                <td class="text-center p-2">{{child.kanak.kelas}}</td>
                                <td class="text-center p-2">{{child.kanak.sijilLahir}}</td>
                                <td class="text-center p-2">{{child.kanak.jantina}}</td>
                                <td class="text-center p-2">{{child.kanak.bangsa}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            
            </div>
            <div @click="printReport" class="bg-green-300 hover:bg-green-400 cursor-pointer p-4 h-[60px] w-full mx-auto mb-10 drop-shadow-lg rounded-2xl text-center font-bold text-lg">
                Cetak Laporan Kanak Kanak
            </div>

        </div>
</template>

<script>

import axios from 'axios';
import html2pdf from 'html2pdf.js';
import { BaseURL } from '../stores';


export default {
    data() {
        return {
            ChildList: [],
            ApprovedChildList: [],
            birthDate: [],
            age: [],
        }
    },

    mounted() {
        // this.fetchChildData();
        this.fetchApprovedChildData();

    },
    methods: {
        // fetchChildData(){
        //     axios.get(BaseURL + 'kanak')
        //         .then(response => {
        //         this.ChildList = response.data;
        //         this.calculateAge();
                
        //         // this.birthDate = this.ChildList[0].tarikhLahir;
        //         // console.log(this.birthDate);
        //         console.log(this.ChildList);
        //         })
        //         .catch(error => {
        //         console.error('Error fetching child data:', error);
        //     }); 
        // },

        // Filter based on approved registration
        fetchApprovedChildData(){
            axios.get(BaseURL + 'urusPendaftaran/lulus')
                .then(response => {
                this.ApprovedChildList = response.data;
                console.log(this.ApprovedChildList);
                this.calculateAge();
                
                // this.birthDate = this.ChildList[0].tarikhLahir;
                // console.log(this.birthDate);
                console.log(this.ChildList);
                })
                .catch(error => {
                console.error('Error fetching child data:', error);
            }); 
        },

        calculateAge() {
            if (this.ApprovedChildList.length > 0) {
                const today = new Date();
                this.ApprovedChildList.forEach((child) => {
                    const birthDate = new Date(child.kanak.tarikhLahir);
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

        printReport(){

            // Create a new window for printing
            const printWindow = window.open('', '_blank', 'width=800,height=600,top=100,left=100,location=no');

            // Open a new document in the print window
            printWindow.document.open();

            // Extract the data from the Vue.js component
            const ChildList = this.ApprovedChildList;

            // Generate the table rows using the data
            const tableRows = ChildList.map((child, index) => {
            return `
                <tr>
                <td style="text-align: center;">${index + 1}</td>
                <td>${child.kanak.namaKanak}</td>
                <td class="text-center p-2">${ child.ageYears } tahun ${ child.ageMonths } bulan</td>
                <td style="text-align: center;">${child.kanak.kelas}</td>
                <td style="text-align: center;">${child.kanak.sijilLahir}</td>
                <td style="text-align: center;">${child.kanak.jantina}</td>
                <td style="text-align: center;">${child.kanak.bangsa}</td>
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
                <h2>Laporan Maklumat Kanak Kanak</h2>
                <p>TASKA PERMATA KELUARGA TAMAN DESA PERMAI</p>
                <table>
                    <thead>
                    <tr>
                        <th style="width: 20px;">Bil.</th>
                        <th>Nama</th>
                        <th style="width: 120px;">Umur</th>
                        <th style="width: 100px;">Kelas</th>
                        <th style="width: 140px;">Sijil Lahir</th>
                        <th style="width: 100px;">Jantina</th>
                        <th style="width: 100px;">Bangsa</th>
                    </tr>
                    </thead>
                    <tbody>
                    ${tableRows}
                    </tbody>
                </table>
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
        }
    }
}


</script>