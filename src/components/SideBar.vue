<script setup>
    import { ref } from "@vue/reactivity";
    import { RouterLink } from "vue-router";
</script>


<template>
    <div class="Side-bar w-2/5 h-full bg-sky-100 absolute left-0 top-0 z-0">
        <!-- Title -->
        <div class="flex">
            <img src="../assets/permata-logo.png" alt="permata" class="h-32 w-auto m-4 ml-8 mt-10">
            <div class="Box-logo text-3xl mt-12 mr-2 mb-16 w-28 font-bold">Taska Permata Keluarga</div>
        </div>

        <!-- SideBar -->
        <div class="ul-menu bg-sky-100 w-full">
            <router-link to="/homePage" class="li-mneu flex mx-4 py-4 px-6 mb-2 cursor-pointer relative ">
                <i class="fa-solid fa-house p-1 mt-0.5"></i>
                <div class="title-menu pl-3 p-1 text-black" >Laman Utama</div>
            </router-link>

            <router-link to="/manageRegister" class="li-mneu flex mx-4 py-4 px-6 mb-2 cursor-pointer relative ">
                <i class="fa-solid fa-file-circle-plus p-1 mt-0.5"></i>
                <div class="title-menu pl-3 p-1 text-black" >Urus Pendaftaran</div>
            </router-link>

            <router-link to="/QRcode" class="li-mneu flex mx-4 py-4 px-6 mb-2 cursor-pointer relative "> 
                <i class="fa-solid fa-qrcode p-1 mt-0.5"></i>
                <div class="title-menu pl-3 p-1 text-black" >Kod QR</div>
            </router-link>

            <router-link to="/activity" class="li-mneu flex mx-4 py-4 px-6 mb-2 cursor-pointer relative ">
                <i class="fa-solid fa-person-running p-1 mt-0.5"></i>
                <div class="title-menu pl-3 p-1 text-black" >Aktiviti Kanak-Kanak</div>
            </router-link>

            <router-link to="/report" class="li-mneu flex mx-4 py-4 px-6 mb-2 cursor-pointer relative ">
                <i class="fa-solid fa-user-graduate p-1 mt-0.5"></i>
                <div class="title-menu pl-3 p-1 text-black" >Laporan Kanak-Kanak</div>
            </router-link>

            <router-link to="/login" class="li-mneu flex mx-4 py-4 px-6 mb-2 cursor-pointer relative ">
                <i class="fa-solid fa-right-from-bracket p-1 mt-0.5"></i>
                <div class="title-menu pl-3 p-1 text-red-600" >Log Keluar</div>
            </router-link>
            

            <!-- <ul >
                <li v-on:click="toggleSideBar('home')"   v-bind:class="{'bg-sky-600 rounded-2xl':home, 'bg-sky-100': !home}">
                    
                    
                </li>
                <li v-on:click="toggleSideBar('manage')"  class="li-mneu  flex mx-4 py-4 px-6 mb-2 cursor-pointer relative" v-bind:class="{'bg-sky-600 rounded-2xl':manage, 'bg-sky-100': !manage}" >
                    
                    <div class="title-menu pl-3 p-1 text-black"></div>
                </li>
                <li v-on:click="toggleSideBar('QRcode')" class="li-mneu  flex mx-4 py-4 px-6 mb-2 cursor-pointer relative" v-bind:class="{'bg-sky-600 rounded-2xl':QRcode, 'bg-sky-100': !QRcode}" >
                    
                    <div class="title-menu pl-3 p-1 text-black"></div>
                </li>
                <li v-on:click="toggleSideBar('activity')" class="li-mneu  flex mx-4 py-4 px-6 mb-2 cursor-pointer relative" v-bind:class="{'bg-sky-600 rounded-2xl':activity, 'bg-sky-100': !activity}" >
                    
                    <div class="title-menu pl-3 p-1 text-black"></div>
                </li>
                <li v-on:click="toggleSideBar('report')" class="li-mneu flex mx-4 py-4 px-6 mb-2 cursor-pointer relative" v-bind:class="{'bg-sky-600 rounded-2xl':report, 'bg-sky-100': !report}" >
                    
                    <div class="title-menu pl-3 p-1 text-black"></div>
                </li>
                <li  class="li-mneu bg-sky-100 flex py-4 px-6 mx-4 mb-2 cursor-pointer relative logout">
                    
                    <h3 class="title-menu pl-3 p-1 font-semibold text-red-600">Logout</h3>
                </li>
            </ul> -->
        </div>
        <!-- <div>
            <ul class="ul-menu bg-sky-100 w-2/4">
                <li v-on:click="toggleSideBar('home')"  class="li-mneu flex mx-4 py-4 px-6 mb-2 cursor-pointer relative " v-bind:class="{'bg-sky-600 rounded-2xl':home, 'bg-sky-100': !home}">
                    <i class="fa-solid fa-house p-1 mt-0.5"></i>
                    <div class="title-menu pl-3 p-1 text-black" >Laman Utama</div>
                </li>
                <li v-on:click="toggleSideBar('manage')"  class="li-mneu  flex mx-4 py-4 px-6 mb-2 cursor-pointer relative" v-bind:class="{'bg-sky-600 rounded-2xl':manage, 'bg-sky-100': !manage}" >
                    <i class="fa-solid fa-file-circle-plus p-1 mt-0.5"></i>
                    <div class="title-menu pl-3 p-1 text-black">Urus Pendaftaran</div>
                </li>
                <li v-on:click="toggleSideBar('QRcode')" class="li-mneu  flex mx-4 py-4 px-6 mb-2 cursor-pointer relative" v-bind:class="{'bg-sky-600 rounded-2xl':QRcode, 'bg-sky-100': !QRcode}" >
                    <i class="fa-solid fa-qrcode p-1 mt-0.5"></i>
                    <div class="title-menu pl-3 p-1 text-black">Kod QR</div>
                </li>
                <li v-on:click="toggleSideBar('activity')" class="li-mneu  flex mx-4 py-4 px-6 mb-2 cursor-pointer relative" v-bind:class="{'bg-sky-600 rounded-2xl':activity, 'bg-sky-100': !activity}" >
                    <i class="fa-solid fa-person-running p-1 mt-0.5"></i>
                    <div class="title-menu pl-3 p-1 text-black">Aktiviti Kanak-Kanak</div>
                </li>
                <li v-on:click="toggleSideBar('report')" class="li-mneu flex mx-4 py-4 px-6 mb-2 cursor-pointer relative" v-bind:class="{'bg-sky-600 rounded-2xl':report, 'bg-sky-100': !report}" >
                    <i class="fa-solid fa-user-graduate p-1 mt-0.5"></i>
                    <div class="title-menu pl-3 p-1 text-black">Laporan Kanak-Kanak</div>
                </li>
                <li  class="li-mneu bg-sky-100 flex py-4 px-6 mx-4 mb-2 cursor-pointer relative logout">
                    <i class="fa-solid fa-right-from-bracket p-1 mt-0.5"></i>
                    <h3 class="title-menu pl-3 p-1 font-semibold text-red-600">Logout</h3>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<style>
div.title-menu { color: rgb(0, 0, 0); font-size: 14px; font-weight: 600; animation-name: Font-Menu; }
.Side-bar { width: 20%; height: 100%; position: absolute; left: 0px; top: 0px; }
</style>