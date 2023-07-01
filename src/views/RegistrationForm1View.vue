<script setup>
    import { RouterLink } from "vue-router";
    import LogoHeader from '../components/LogoHeader.vue';
    import BlueButton from '../components/BlueButton.vue';

</script>

<template>
    <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
        <div class="loader-wrapper">
            <div class="loader"></div>
       </div>
    </div>
    <div class="invisible max-md:visible bg-blue-100 h-screen p-4">
        <div class="bg-white invisible py-[50px] grid place-items-center max-md:visible max-md:h-[300px] w-full my-6 mx-2 p-4 max-md:mx-0 max-md:mb-[200px] rounded-2xl drop-shadow-2xl">
            <i class="fa-solid fa-display text-[80px]"></i>
            <h2 class="font-medium text-center pt-2">Harap maaf, sila gunakan <span class="italic">desktop</span> untuk membuat pendaftaran baharu</h2>
            <RouterLink to="/">
                <button class="bg-blue-300 drop-shadow-xl px-8 py-2 rounded-lg mt-4">Kembali</button>
            </RouterLink>
        </div>
    </div>
    <div class="registration max-md:invisible bg-slate-400 w-screen h-screen pb-12 -mt-[746px] font-bold ">
        <LogoHeader></LogoHeader>
        <div class="container m-4 pb-7 mx-auto max-w-5xl bg-blue-100 w-auto drop-shadow-2xl rounded-2xl">
            <div >
                <ul class="flex justify-center text-center rounded-2xl">
                    <h4 class="bg-sky-100 p-2 w-64 first:rounded-tl-2xl drop-shadow-xl ">Maklumat</h4>
                    <h4 class="bg-sky-200 p-2  w-64 border-solid border-2 border-sky-100" >Kanak-Kanak</h4>
                    <h4 class="bg-sky-200 p-2 w-64 border-solid border-2 border-sky-100">Ibubapa</h4>
                    <h4 class="bg-sky-200 p-2 w-64 last:rounded-tr-2xl border-solid border-2 border-sky-100">Pengesahan</h4>
                </ul>
                <h3 class="p-6 px-8 text-xl">MAKLUMAT TASKA PERMATA KELUARGA</h3>
                <div class="flex bg-blue-100 justify-around px-8 pb-4">

                    <div class="flex justify-between bg-white w-5/12 p-3 rounded-xl drop-shadow-lg">
                        <h1 class="text-lg p-2">Jumlah kanak-kanak </h1>
                        <div class="flex justify-end">
                            <h1 class="text-3xl text-yellow-500 px-4">{{ChildList.length}}</h1>
                            <i class="fa-solid fa-child text-4xl px-4"></i>
                        </div>
                    </div>

                    

                </div>
                <div class="flex bg-blue-100 justify-around px-8 pb-4">
                    <div class="flex justify-between bg-white w-5/12 p-3 rounded-xl drop-shadow-lg">
                            <h1 class="text-lg p-2">Jantina kanak-kanak</h1>
                            <div class="flex justify-end">
                                <div class="flex">
                                    <h1 class="text-3xl text-blue-500 px-2 py-1">{{MaleList.length}}  </h1>
                                    <i class="fa-solid fa-mars text-2xl mx-3 py-2"></i>
                                </div>
                                <div class="flex">
                                    <h1 class="text-3xl text-pink-500 px-2 py-1">{{ FemaleList.length }}</h1>
                                    <i class="fa-solid fa-venus text-2xl mx-3 py-2"></i>
                                </div>
                            </div>
                        </div>
                </div>
                <div class="flex bg-blue-100 justify-around px-8 pb-4">
                    <div class="flex justify-between bg-white w-5/12 p-3 rounded-xl drop-shadow-lg">
                            <h1 class="text-lg p-2">Jumlah Staf</h1>
                            <div class="flex justify-end">
                                <h1 class="text-3xl text-yellow-500 px-4">{{ StaffList.length }}</h1>
                                <i class="fa-solid fa-child text-4xl px-4"></i>
                            </div>
                        </div>
                </div>
                <!--  -->
                <div class="bg-blue-100  mx-auto py-2 px-36">
                    <RouterLink to="/registrationForm2"><BlueButton>Daftar Sekarang</BlueButton></RouterLink>
                </div>
                
            </div>
            <div class="flex justify-start">
                <RouterLink to="/">
                    <button class="bg-blue-100 p-2 px-5 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
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
                MaleList: [],
                FemaleList: [],
                StaffList: [],
                currentUser: '',
                userId: '',
                loading: false,
                

                
            }
        },

        mounted() {
            this.fetchChildList();
            this.fetchMaleList();
            this.fetchFemaleList();
            this.fetchStaffList();
            this.fetchCurrentUser();
        },

        methods: {

            fetchChildList() {
                axios.get(BaseURL + 'urusPendaftaran/lulus')
                    .then(response => {
                        this.ChildList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchMaleList() {
                axios.get(BaseURL + 'urusPendaftaran/lelaki')
                    .then(response => {
                        this.MaleList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchFemaleList() {
                axios.get(BaseURL + 'urusPendaftaran/perempuan')
                    .then(response => {
                        this.FemaleList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchStaffList() {
                axios.get(BaseURL + 'pengguna/staf')
                    .then(response => {
                        this.StaffList = response.data;
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

            fetchCurrentUser() {
                this.userId = JSON.parse(sessionStorage.getItem('id'));
                console.log(this.userId);

                axios.get(BaseURL + 'pengguna/' + this.userId)
                    .then(response => {
                        this.currentUser = response.data;
                        console.log(response.data);
                        console.log(this.currentUser);
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            },

           

            
        }
    }


</script>

<style>
    .loader {
            position: relative;
            width: 48px;
            height: 48px;
            }
            .loader:before,
            .loader:after {
            content:"";
            display: block;
            border: 32px solid transparent;
            border-top-color: #fff;
            position: absolute;
            left: 0;
            top: 0;
            animation: weld-rotate 2s infinite ease-in;
            }
            .loader:before {
            border-color: transparent  transparent transparent #FF3D00;
            animation-delay: 0.5s;
            }
            @keyframes weld-rotate {
            0% , 25% {transform: rotate(0deg)}
            50% , 75% {transform: rotate(180deg)}
            100% {transform: rotate(360deg)}
            }
      
</style>