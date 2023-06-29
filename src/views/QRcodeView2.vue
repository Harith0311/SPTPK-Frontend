<script setup>
import SideBar2 from "../components/SideBar2.vue";
import Header from "../components/Header.vue";
import QRcodeScanner from "../components/QRcodeScanner.vue";
</script>

<template>
    <div
        class="flex bg-blue-100 w-full h-screen max-md:h-full justify-between p-8 max-md:p-[1px] "
    >
        <SideBar2 />

        <!-- Content -->
        <!-- Header -->
        <div class="Content w-4/5 m-auto">
            <Header />
            <div class="border-solid border-b-2 border-black">
                <!-- Horizontal Line -->
            </div>
            <!-- Breadcrumbs -->
            <div class="m-2 max-md:mb-5">
                <h3>
                    Halaman Utama >
                    <span class="text-orange-400 font-semibold"
                        >Rekod Kehadiran</span
                    >
                </h3>
            </div>

            <!-- Div Content -->
            <div class="max-sm:hidden">
                <div class="bg-white m-2 w-full rounded-3xl">
                    <!-- <h1 class="text-center font-bold text-2xl mt-5">Harap maaf, fungsi ini hanya tersedia bagi pengguna telefon bimbit sahaja</h1>
                <i class="fa-solid fa-mobile-screen text-9xl p-5 text-center"></i> -->
                    <div class="bg-white w-5/6 mx-auto h-4/5 rounded-3xl">
                        <div class="mt-10 py-24">
                            <h1 class="text-center font-bold text-2xl mt-5">
                                Harap maaf, fungsi ini hanya tersedia bagi
                                pengguna telefon bimbit sahaja
                            </h1>
                            <div class="flex justify-center">
                                <i
                                    class="fa-solid fa-mobile-screen text-9xl mx-auto pt-14 p-5 text-center"
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile version -->

            <div class="qr bg-blue-200 mb-6 h-full rounded-lg p-2 sm:hidden">
                <h2 class="text-lg font-bold p-2 pl-4 pb-6">Imbas Kod QR</h2>

                <div class="flex justify-center border-2 border-black">
                    <div class="flex justify-center">
                        <QRcodeScanner
                            v-bind:qrbox="300"
                            v-bind:fps="10"
                            @scan-success="scanQRCode"
                        />
                    </div>
                </div>

                <!-- <div class="border-solid border-b-2 border-black mx-4"> -->
                <!-- Horizontal Line -->
                <!-- </div> -->
                <div
                    class="flex bg-white my-8 mx-3 mb-8 p-2 rounded-lg justify-between"
                >
                    <table class="p-2">
                        <tr class="pl-4 p-4">
                            <td class="text-base font-semibold pl-2 w-20">
                                Nama
                            </td>
                            <td class="text-base font-semibold w-4">:</td>
                            <td class="text-base font-semibold w-40">
                                <!-- {{kanak.namaKanak}} -->
                                <p v-text="kanak.namaKanak"></p>
                            </td>
                        </tr>
                        <tr class="pl-4 p-4">
                            <td class="text-base font-semibold pl-2">Umur</td>
                            <td class="text-base font-semibold">:</td>
                            <td  class="text-base font-semibold"><p >3 Tahun 2 bulan</p></td>
                        </tr>
                        <tr class="pl-4 p-4">
                            <td class="text-base font-semibold pl-2">
                                Jantina
                            </td>
                            <td class="text-base font-semibold w-2">:</td>
                            <td class="text-base font-semibold">{{kanak.jantina}}</td>
                        </tr>
                        
                    </table>
                </div>
                <h2 class="text-lg font-bold px-4 mb-6">Status suhu</h2>

                <!-- Try button -->
                <div class="flex justify-between">
                    <div class="block py-2">
                        <input
                            id="Normal"
                            v-model="temp"
                            value="Normal"
                            name="temp"
                            type="radio"
                            class="hidden"
                        />
                        <label
                            for="temp"
                            class="bg-green-400 w-2/5 px-8 p-4 rounded-xl text-center font-semibold m-4 drop-shadow-xl"
                            :class="{
                                'bg-green-400': temp === 'Normal',
                                'w-2/5': true,
                                'p-4': true,
                                'rounded-xl': true,
                                'text-center': true,
                                'font-semibold': true,
                                'm-4': true,
                                'drop-shadow-xl': true,
                                ring: temp === 'Normal',
                                'ring-green-500': temp === 'Normal',
                                'ring-offset-2': temp === 'Normal',
                            }"
                            @click="handleButtonClick('Normal')"
                        >
                            Normal
                        </label>
                    </div>
                    <div class="block py-2">
                        <input
                            id="Tinggi"
                            v-model="temp"
                            value="Tinggi"
                            name="decision"
                            type="radio"
                            class="hidden"
                        />
                        <label
                            for="Tinggi"
                            class="bg-red-400 w-2/5 px-8 p-4 rounded-xl text-center font-semibold m-4 drop-shadow-xl"
                            :class="{
                                'bg-red-400': temp === 'Tinggi',
                                'w-2/5': true,
                                'p-4': true,
                                'rounded-xl': true,
                                'text-center': true,
                                'font-semibold': true,
                                'm-4': true,
                                'drop-shadow-xl': true,
                                ring: temp === 'Tinggi',
                                'ring-red-500': temp === 'Tinggi',
                                'ring-offset-2': temp === 'Tinggi',
                            }"
                            @click="handleButtonClick('Tinggi')"
                        >
                            Tinggi
                        </label>
                    </div>
                </div>
                <div
                    class="bg-blue-400 w-5/6 pb-5 mx-auto p-4 rounded-xl mt-10 text-center font-semibold m-4 drop-shadow-xl cursor-pointer"
                >
                    <button @click="recordAttendance">Semak</button>
                </div>
            </div>
        </div>
    </div>

    <!-- User prompt to notify attendance recorder successfully -->
    <div
        id="overlay"
        class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50"
        v-bind:class="{ 'hidden': !isSuccess }"
    >
        <dialog
            class="z-10 w-5/6 bg-white absolute h-fit top-16 overflow-auto px-3 pt-4 rounded-xl"
            v-bind:open="isSuccess"
        >
            <div class="bg-green-300 rounded-lg m-4 p-2">
                <h2 class="font-bold text-xl text-center pt-3">Hadir!</h2>
                <p class="font-medium text-sm text-center p-2">
                    Sila tekan butang selesai untuk merekod kehadiran kanak
                    kanak seterusnya.
                </p>
            </div>

            <div class="flex justify-center">
                <button
                    class="bg-blue-200 w-1/6 p-1 mx-8 rounded-lg"
                    @click="pushToList"
                >
                    Tutup
                </button>
            </div>
        </dialog>
    </div>
    <!-- End of prompt -->

    <!-- User prompt to notify child cannot attend due to high temp  -->
    <div
        id="overlay"
        class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50"
        v-bind:class="{ 'hidden': !isHigh }"
    >
        <dialog
            class="z-10 w-5/6 bg-white absolute h-fit top-16 overflow-auto px-3 pt-4 rounded-xl"
            v-bind:open="isHigh"
        >
            <div class="bg-red-300 rounded-lg m-4 p-2">
                <h2 class="font-bold text-xl text-center pt-3">Suhu Kanak Kanak Tinggi!</h2>
                <p class="font-medium text-sm text-center p-2">
                    Sila tekan butang selesai untuk merekod kehadiran kanak
                    kanak seterusnya.
                </p>
            </div>

            <div class="flex justify-center">
                <button
                    class="bg-blue-200 w-1/6 p-1 mx-8 rounded-lg"
                    @click="pushToList"
                >
                    Tutup   
                </button>
            </div>
        </dialog>
    </div>
    <!-- End of prompt -->

    <!-- User prompt to notify child already submit the attendance  -->
    <div
        id="overlay"
        class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50"
        v-bind:class="{ 'hidden': !isSubmit }"
    >
        <dialog
            class="z-10 w-5/6 bg-white absolute h-fit top-16 overflow-auto px-3 pt-4 rounded-xl"
            v-bind:open="isSubmit"
        >
            <div class="bg-orange-300 rounded-lg m-4 p-2">
                <h2 class="font-bold text-xl text-center pt-3">Kehadiran Kanak-Kanak telah Direkod untuk Hari ini!</h2>
                <p class="font-medium text-sm text-center p-2">
                    Sila tekan butang selesai untuk merekod kehadiran kanak
                    kanak seterusnya.
                </p>
            </div>

            <div class="flex justify-center">
                <button
                    class="bg-blue-200 w-1/6 p-1 mx-8 rounded-lg"
                    @click="pushToList"
                >
                    Tutup
                </button>
            </div>
        </dialog>
    </div>
    <!-- End of prompt -->



    
</template>

<script>
import axios from "axios";
import router from "../router";
import { BaseURL } from '../stores';
// import QRCodeScanner from "../components/QRCodeScanner.vue";

export default {
    data() {
        return {
            qrCodeScanner: null,
            kanakId: "",
            attend: true,
            temp: "",
            kanak: [],
            isSuccess: false,
            isHigh: false,
            isSubmit: false,
            decodedText: "",
            age: ""
        };
    },

    mounted() {},

    methods: {
        scanQRCode(decodedText) {
            console.log(decodedText);
            this.decodedText = decodedText;
            

            // console.log(kehadiran);
            //Fetch data in urusPendaftaran
            axios
                .get(BaseURL + "kanak/" + this.decodedText)
                .then((response) => {
                    this.kanak = response.data;
                    this.calculateAge();
                    console.log(this.kanak);
                })
                .catch((error) => {
                    console.error("Error fetching child data:", error);
                });
        },

        calculateAge() {
            if (this.kanak.length > 0) {
                const today = new Date();
                this.kanak.forEach((child) => {
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

                    child.ageYears = ageYears ;
                    child.ageMonths = ageMonths ;

                    child.age = ageYears + " tahun " + ageMonths + " bulan";
                    
                });
            }
        },

        recordAttendance(){

            // this.kanakId = decodedText;
            const hadir = this.attend;
            const suhuNormal = this.temp;

            const kehadiran = {
                kanakId: this.decodedText,
                hadir: this.attend,
                suhuNormal: this.temp
            };

            console.log(kehadiran);

            if(suhuNormal === "Tinggi"){
                // If child temperature is high, attendance not recorded
                this.toggleHighTemp();
            }else if(suhuNormal === "Normal"){
                // If child temperature is normal, attendance recorded
                axios.post(BaseURL + 'kehadiran', kehadiran)
                    .then(response => {
                        console.log(response.data);
                        this.toggleSuccess();
                    })
                    .catch(error => {
                        console.error('Error recording attendance', error);
                        if (error.response && error.response.status === 400 && error.response.data.error === "Attendance already submitted for today") {
                        // Display dialog box for attendance already submitted error
                        this.toggleAttendanceSubmitted();

                        } else {
                        // Handle other errors accordingly
                        console.error('Error record attendance', error);
                        }
                    });
            }

        },

        handleButtonClick(buttonValue) {
            this.temp = buttonValue; // Set the selected value

            // Additional logic or actions to perform when the button is clicked
        },

        toggleSuccess() {
            this.isSuccess = !this.isSuccess;
        },

        toggleHighTemp() {
            this.isHigh = !this.isHigh;
        },

        toggleAttendanceSubmitted() {
            this.isSubmit = !this.isSubmit;
        },

        pushToList() {
            window.location.reload();    
        }
    },
};
</script>
