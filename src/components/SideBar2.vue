<script setup>
    import { ref } from "@vue/reactivity";
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="invisible">
        <div class="p-4 m-1 active:none cursor-pointer max-md:visible">
            <i class="fa-solid fa-bars text-2xl text-orange-300"></i>
        </div>
    </div>
    <div class=" w-1/12 mx-auto py-3 px-7 max-md:px-1 fixed  z-10 ">
            
            <div class="bg-white drop-shadow-2xl w-[70px] max-md:w-[50px] rounded-lg p-1 sticky">
                <ul>
                    <li>
                        <div class="p-4 m-1 max-md:p-2 active:none cursor-pointer ">
                            <i class="fa-solid fa-bars text-xl text-orange-300"></i>
                        </div>
                    </li>
                    <div class="border-solid my-10 mx-3 border-b-2 border-zinc-300">
                    <!-- Horizontal Line -->
                    </div>
                    <li>
                        <div>
                            <div class="group flex">
    
                                <router-link to="/homePage" class=" p-4 max-md:p-1 max-md:my-2 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer ">
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
    
                                <router-link to="/manageRegister" class=" p-4 max-md:p-1 max-md:my-2 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer">
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
    
                                <router-link to="QRcode2" class=" p-4 max-md:p-1 max-md:my-2 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer ">
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
    
                                <router-link to="/activity" class=" p-4 max-md:p-1 max-md:my-2 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer ">
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
    
                                <router-link to="/report" class=" p-4 max-md:p-1 max-md:my-2 m-1 hover:bg-black hover:rounded-lg hover:text-white rounded-lg cursor-pointer ">
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
                        <!-- <router-link to="/login"> -->
                            <div @click="toggleLogout" class="group p-4 max-md:p-1 max-md:my-2 m-1 cursor-pointer ">
                                <i class="fa-solid fa-right-from-bracket p-1 mt-0.5 text-red-500"></i>
                                <div class=" group-hover:visible invisible w-28 bg-white text-sm text-red-500 text-center drop-shadow-lg rounded-md -mt-6 ml-16 p-1  absolute z-10 ">
                                    Log Keluar
                                </div>
                            </div>

                        <!-- </router-link> -->
                    </li>
                </ul>
            </div>
        </div>

        <!-- User prompt to confirm reject registration -->
        <div 
            id="overlay" 
            class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50" 
            v-bind:class="{'hidden': !isLogout}">
                <dialog
                    class="z-10 w-2/6 max-md:w-5/6 bg-blue-50 absolute h-fit top-48 overflow-auto px-3 pt-4 rounded-xl"
                    v-bind:open="isLogout"
                >
                    <!-- Header Title -->
                    <div class="bg-orange-300 rounded-lg m-4 mt-2 p-2">
                        <h2 class="font-bold text-xl text-center  ">Log Keluar</h2>
                    </div>

                    <!-- Content -->
                    
                        <p class="text-center py-4">Anda pasti ingin log keluar daripada sistem?</p>

                        <!-- Button -->
                        <div class="flex justify-center mt-4">
                            <button class="bg-blue-200 w-2/6 p-1 mx-8 rounded-lg" @click="toggleLogout">Batal</button>
                            <button class="bg-orange-300 w-2/6 p-1 mx-8 rounded-lg" @click="logOut">Sahkan</button>
                        </div>
                    
                </dialog>
            </div>  
            <!-- End of prompt -->
</template>

<script>
import router from "../router";

export default {
    data() {
        return {
            isLogout:''
        };
    },

    mounted() {

    },

    methods: {

        logOut() {
            sessionStorage.removeItem('id');
            router.push('/login');
        },

        toggleLogout() {
            this.isLogout = !this.isLogout;
        },
    }
}

</script>