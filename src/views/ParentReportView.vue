<script setup>
import { RouterLink } from "vue-router";
import SideBarParent from "../components/SideBarParent.vue";
import Header from "../components/Header.vue";
</script>

<template>
    <div class="flex bg-blue-100 w-full h-full justify-between p-8">
        <SideBarParent />

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
            
            <!-- Router view to display children report, activity report, and attendance report -->
            <div>
                <RouterView/>
            </div>
        </div>
    </div>   
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            ChildList: [],
        };
    },
    mounted() {
        this.fetchChildData();
    },
    methods: {
        fetchChildData() {
            axios.get("http://localhost:1001/kanak")
                .then(response => {
                this.ChildList = response.data;
                console.log(this.ChildList);
            })
                .catch(error => {
                console.error("Error fetching child data:", error);
            });
        }
    },
    
}


</script>