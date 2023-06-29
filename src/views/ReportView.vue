<script setup>
import { RouterLink } from "vue-router";
import SideBar2 from '../components/SideBar2.vue';
import Header from "../components/Header.vue";
</script>

<template>
    <div class="flex bg-blue-100 w-full justify-between p-8 max-md:p-[1px]">
        <SideBar2 />

        <!-- Content -->
        <!-- Header -->
        <div class="Content w-4/5 m-auto">
            <Header />
            <div class="border-solid border-b-2 border-black">
                    <!-- Horizontal Line -->
            </div>
            <!-- Breadcrumbs -->
            <div class="m-2">
                <h3>Halaman Utama > <span class="text-orange-400 font-semibold">Laporan Kanak-Kanak</span> </h3>
            </div>

            <div class="bg-white invisible py-[50px] grid place-items-center max-md:visible max-md:h-[300px] w-full my-6 mx-2 p-4 max-md:mx-0 max-md:mb-[200px] rounded-2xl drop-shadow-2xl">
                <i class="fa-solid fa-display text-[80px]"></i>
                <h2 class="font-medium text-center pt-2">Harap maaf, fungsi ini hanya tersedia bagi pengguna <span class="italic">desktop</span> sahaja</h2>
            </div>
            
            <!-- Router view to display children report, activity report, and attendance report -->
            <div class="max-md:invisible -mt-[240px]">
                <RouterView/>
            </div>
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
        }
    },

    mounted() {
        this.fetchChildData();
    },
    methods: {
        fetchChildData(){
            axios.get(BaseURL + 'kanak')
                .then(response => {
                this.ChildList = response.data;
                console.log(this.ChildList);
                })
                .catch(error => {
                console.error('Error fetching child data:', error);
            });
        }
    }
}


</script>