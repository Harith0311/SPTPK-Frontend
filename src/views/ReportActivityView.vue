<script>
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
                        <select class="rounded-md" name="tarikh" id="tarikh">
                            <option value="">Pilih Tarikh</option>
                            <option value="">Harini</option>
                            <option value="">Semalam</option>
                        </select>
                    </div>
                    <div class="flex">
                        <div class="bg-green-200 rounded-md mx-2 px-4">
                            Mudah
                        </div>
                        <div class="bg-orange-200 rounded-md mx-2 px-4">
                            Biasa
                        </div>
                        <div class="bg-red-200 rounded-md mx-2 px-4">
                            Sukar
                        </div> 
                    </div>
                </div>
                <!-- Kelas -->
                <div class="flex justify-between">
                    <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 z-0 rounded-md">
                        <img src="../assets/melur.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                    </div>
                    <div class="flex flex-col justify-evenly py-3 bg-blue-700 w-4/5 bg-opacity-30 h-20 m-4 mr-12 rounded-md">
                        <div class="flex justify-center">
                            <div class="bg-green-200 rounded-md m-1 mx-4 py-0.5 px-14 ">
                                Berlari
                            </div>
                            <div class="bg-orange-200 rounded-md m-1 mx-4 py-0.5 px-14 ">
                                Panjat
                            </div>
                            <div class="bg-red-200 rounded-md m-1 mx-4 py-0.5 px-14 ">
                                Lompat
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class="bg-green-200 rounded-md m-1 mx-4 py-0.5 px-14 ">
                                Berlari
                            </div>
                            <div class="bg-orange-200 rounded-md m-1 mx-4 py-0.5 px-14 ">
                                Panjat
                            </div>
                            
                        </div>
                    </div>
                </div>
                <!-- Kelas -->
                <div class="flex justify-between">
                    <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                        <img src="../assets/orkid.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                    </div>
                    <div class="bg-blue-700 w-4/5 opacity-30 h-20 m-4 mr-12 rounded-md">

                    </div>
                </div>
                <!-- Kelas -->
                <div class="flex justify-between">
                    <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                        <img src="../assets/rose.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                    </div>
                    <div class="bg-blue-700 w-4/5 opacity-30 h-20 m-4 mr-12 rounded-md">

                    </div>
                </div>
                <!-- Kelas -->
                <div class="flex justify-between">
                    <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                        <img src="../assets/raya.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                    </div>
                    <div class="bg-blue-700 w-4/5 opacity-30 h-20 m-4 mr-12 rounded-md">

                    </div>
                </div>
                <!-- Kelas -->
                <div class="flex justify-between">
                    <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                        <img src="../assets/daisy.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                    </div>
                    <div class="bg-blue-700 w-4/5 opacity-30 h-20 m-4 mr-12 rounded-md">

                    </div>
                </div>
                <!-- Kelas -->
                <div class="flex justify-between">
                    <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                        <img src="../assets/matahari.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                    </div>
                    <div class="bg-blue-700 w-4/5 opacity-30 h-20 m-4 mr-12 rounded-md">

                    </div>
                </div>
                <!-- Kelas -->
                <div class="flex justify-between">
                    <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                        <img src="../assets/dahlia.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                    </div>
                    <div class="bg-blue-700 w-4/5 opacity-30 h-20 m-4 mr-12 rounded-md">

                    </div>
                </div>
                <!-- Kelas -->
                <div class="flex justify-between">
                    <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                        <img src="../assets/lily.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                    </div>
                    <div class="bg-blue-700 w-4/5 opacity-30 h-20 m-4 mr-12 rounded-md">

                    </div>
                </div>
                <!-- Kelas -->
                <div class="flex justify-between">
                    <div class="bg-blue-700 bg-opacity-30 w-20 h-20 m-4 ml-20 rounded-md">
                        <img src="../assets/tulip.png" class="opacity-100 z-10 w-14 h-auto mx-auto my-3" alt="">
                    </div>
                    <div class="bg-blue-700 w-4/5 opacity-30 h-20 m-4 mr-12 rounded-md">

                    </div>
                </div>






                <!-- Pagination -->
                <!-- <div class="flex justify-center">
                    <div class="bg-black rounded-full h-auto w-6 m-4">
                        <h1 class="text-white text-center">1</h1>
                    </div>
                    <div class=" rounded-full h-auto w-6 m-4">
                        <h1>2</h1>
                    </div>
                    <div class=" rounded-full h-auto w-6 m-4">
                        <h1>3</h1>
                    </div>
                </div> -->
            </div>
            <div class="bg-blue-400 hover:bg-blue-500 cursor-pointer p-4 h-[60px] w-full mx-auto mb-10 drop-shadow-lg rounded-2xl text-center font-bold text-lg">
                Cetak Laporan Aktiviti
            </div>

        </div>
</template>