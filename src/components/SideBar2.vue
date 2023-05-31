<script setup>
    import { ref } from "@vue/reactivity";
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class=" w-1/12 mx-auto py-3 px-7  fixed max-sm:hidden z-10 ">
            <div class="bg-white drop-shadow-2xl rounded-lg p-1 sticky">
                <ul>
                    <li>
                        <div class="p-4 m-1 active:none cursor-pointer">
                            <i class="fa-solid fa-bars text-2xl text-orange-300"></i>
                        </div>
                    </li>
                    <div class="border-solid my-10 mx-3  border-b-2 border-zinc-300">
                    <!-- Horizontal Line -->
                    </div>
                    <li>
                        <div>
                            <div class="group flex">
    
                                <router-link to="/homePage" class=" p-4 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer ">
                                    <i class=" fa-solid fa-house-chimney p-0.5 mt-0.5 "></i>
                                </router-link>
                                <!-- Tooltip test -->
                                <div class=" group-hover:visible  invisible w-28 bg-black text-sm text-white text-center rounded-md mt-5 ml-20 p-1  absolute z-10">
                                    Laman Utama
                                </div>
    
                            </div>
                        </div>
                    </li>
                    <!-- tt -->
                    <li>
                        <div>
                            <div class="group flex ">
    
                                <router-link to="/manageRegister" class=" p-4 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer">
                                    <i class="fa-solid fa-file-circle-plus p-0.5 mt-0.5 "></i>
                                </router-link>
                                <!-- Tooltip test -->
                                <div class=" group-hover:visible invisible w-28 bg-black text-sm text-white text-center rounded-md mt-2 ml-20 p-1  absolute z-10 ">
                                    Pengurusan Pendaftaran
                                </div>
    
                            </div>
                        </div>
                    </li>
                    <!-- tt -->
                    <li>
                        <div>
                            <div class="group flex ">
    
                                <router-link to="QRcode2" class=" p-4 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer ">
                                    <i class="fa-solid fa-qrcode p-1 mt-0.5"></i>
                                </router-link>
                                <!-- Tooltip test -->
                                <div class=" group-hover:visible invisible w-28 bg-black text-sm text-white text-center rounded-md mt-2 ml-20 p-1 absolute z-10 ">
                                    Rekod Kehadiran
                                </div>
    
                            </div>
                        </div>
                    </li>
                    <!-- tt -->
                    <li>
                        <div>
                            <div class="group flex ">
    
                                <router-link to="/activity" class=" p-4 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer ">
                                    <i class="fa-solid fa-person-running p-1 mt-0.5"></i>
                                </router-link>
                                <!-- Tooltip test -->
                                <div class=" group-hover:visible invisible w-28 bg-black text-sm text-white text-center rounded-md mt-4 ml-20 p-1  absolute z-10 ">
                                    Aktiviti
                                </div>
    
                            </div>
                        </div>
                
                    </li>
                    <!-- tt -->
                    <li>
                        <div>
                            <div class="group flex ">
    
                                <router-link to="/report" class=" p-4 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer ">
                                    <i class="fa-solid fa-user-graduate p-1 mt-0.5"></i>
                                </router-link>
                                <!-- Tooltip test -->
                                <div class=" group-hover:visible invisible w-28 bg-black text-sm text-white text-center rounded-md mt-4 ml-20 p-1  absolute z-10 ">
                                    Rekod
                                </div>
    
                            </div>

                        </div>
                        
                    </li>
                    <!-- tt -->
                    <div class="border-solid my-12 mx-3  border-b-2 border-zinc-300">
                    <!-- Horizontal Line -->
                    </div>
                    <li>
                        <router-link to="/login">
                            <div class="p-4 m-1 cursor-pointer ">
                                <i class="fa-solid fa-right-from-bracket p-1 mt-0.5 text-red-500"></i>
                            </div>

                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
</template>