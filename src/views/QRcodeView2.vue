<script setup>
import SideBar2 from "../components/SideBar2.vue";
import Header from "../components/Header.vue";
import QRcodeScanner from '../components/QRcodeScanner.vue';

</script>

<template>
    <div
        class="flex bg-blue-100 w-full justify-between p-8 max-md:p-[1px] max-md:pt-[10px]"
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
                                Harith bin Ismail
                            </td>
                        </tr>
                        <tr class="pl-4 p-4">
                            <td class="text-base font-semibold pl-2">Umur</td>
                            <td class="text-base font-semibold">:</td>
                            <td class="text-base font-semibold">2 Tahun</td>
                        </tr>
                        <tr class="pl-4 p-4">
                            <td class="text-base font-semibold pl-2">
                                Jantina
                            </td>
                            <td class="text-base font-semibold w-2">:</td>
                            <td class="text-base font-semibold">Lelaki</td>
                        </tr>
                        <tr class="pl-4 p-4">
                            <td class="text-base font-semibold pl-2">ID</td>
                            <td class="text-base font-semibold w-2">:</td>
                            <td class="text-base font-semibold">0001</td>
                        </tr>
                    </table>
                </div>
                <h2 class="text-lg font-bold px-4">Status suhu</h2>
                <div class="flex justify-between">
                    <div
                        class="bg-green-400 w-2/5 p-4 rounded-xl text-center font-semibold m-4 drop-shadow-xl cursor-pointer"
                    >
                        <button>Normal</button>
                    </div>
                    <div
                        class="bg-red-400 w-2/5 p-4 rounded-xl text-center font-semibold m-4 drop-shadow-xl cursor-pointer"
                    >
                        <button>Tinggi</button>
                    </div>
                </div>
                <div
                    class="bg-blue-400 w-5/6 pb-5 mx-auto p-4 rounded-xl text-center font-semibold m-4 drop-shadow-xl cursor-pointer"
                >
                    <button>Semak</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <div class="bg-black text-center text-white p-1">
        <h4>All rights reserved</h4>
    </div>
</template>

<script>
// import QRCodeScanner from "../components/QRCodeScanner.vue";

export default {
    data() {
        return {
            qrCodeScanner: null
        };
    },

    methods: {
        scanQRCode(decodedText) {
            console.log(decodedText);
        }
        
    },
};
</script>
