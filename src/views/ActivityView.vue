<script setup>

import { RouterLink } from "vue-router";
import SideBar2 from '../components/SideBar2.vue';
import Header from "../components/Header.vue";
</script>

<template>
    <div class="flex bg-blue-100 w-full max-md:h-screen overflow-hidden justify-between p-8 max-md:p-[1px]">
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
                <h3>Halaman Utama > <span class="text-orange-400 font-semibold">Aktiviti Kanak-Kanak</span> </h3>
            </div>

            <!-- Div Content -->
            <div class="bg-white invisible py-[50px] grid place-items-center max-md:visible max-md:h-[300px] w-full my-6 mx-2 p-4 max-md:mx-0 max-md:mb-[200px] rounded-2xl drop-shadow-2xl">
                <i class="fa-solid fa-display text-[80px]"></i>
                <h2 class="font-medium text-center pt-2">Harap maaf, fungsi ini hanya tersedia bagi pengguna <span class="italic">desktop</span> sahaja</h2>
            </div>
            
            <h3 class="text-lg font-bold ml-2 p-3 max-md:invisible -mt-[240px]">Senarai Aktiviti</h3>
            <div class="max-md:invisible max-md:h-12 ">
                <RouterView/>
            </div>

            <h3 class="text-lg font-bold mt-10 ml-2 p-3 max-md:invisible">Aktiviti Hari Ini</h3>
            <div class=" mb-10 max-md:invisible max-md:h-8">
                <div class="flex justify-center mb-5">
                    <button class=" bg-blue-400 rounded-md py-2 px-44 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Melur')"
                    >Tambah Aktiviti Hari Ini</button>
                </div>
                <div class="aktiviti flex justify-between">
                    <!-- Aktiviti 1 Tahun -->
                    <!-- <RouterView name="tahun1"/> -->
                    <div class="bg-white h-auto w-full my-2 mx-2 p-3 rounded-2xl drop-shadow-2xl">
                        <h3 class="text-center text-lg font-semibold text-orange-500">BUNGA MELUR</h3>
                        <table class="my-2 mx-auto ">
                            <tr >
                                <th class="py-1 w-4/5 border-solid border-b-2 border-black text-left">Nama Aktiviti</th>
                                <th class="py-1 w-2/4 border-solid border-b-2 border-black">Tindakan</th>
                            </tr>
                           <tbody v-if="AktivitiMelurList.length > 0">
                               <tr  v-for="activity in AktivitiMelurList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center text-zinc-400 font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <!-- <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Melur')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr> -->
                            
                        </table>
                    </div>
                    <!-- Aktiviti 2 Tahun -->
                    <div class="bg-white h-auto w-full my-2 mx-2 p-3 rounded-2xl drop-shadow-2xl">
                        <h3 class="text-center text-lg font-semibold text-orange-500">BUNGA ORKID</h3>
                        
                        <table class="my-2 mx-auto ">
                            <tr >
                                <th class="py-1 w-4/5 border-solid border-b-2 border-black text-left">Nama Aktiviti</th>
                                <th class="py-1 w-2/4 border-solid border-b-2 border-black">Tindakan</th>
                            </tr>
                           <tbody v-if="AktivitiOrkidList.length > 0">
                               <tr  v-for="activity in AktivitiOrkidList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center text-zinc-400 font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            
                            
                        </table>
                    </div>
                </div>
                <div class="flex justify-between">
                    <!-- Aktiviti 3 Tahun -->
                    <div class="bg-white h-auto w-3/5 my-2 mx-2 p-3 rounded-2xl drop-shadow-2xl">
                        <h3 class="text-center text-lg font-semibold text-orange-500">BUNGA ROSE</h3>
                        <table class="my-2 mx-auto ">
                            <tr >
                                <th class="py-1 w-4/5 border-solid border-b-2 border-black text-left">Nama Aktiviti</th>
                                <th class="py-1 w-2/4 border-solid border-b-2 border-black">Tindakan</th>
                            </tr>
                           <tbody v-if="AktivitiRoseList.length > 0">
                               <tr  v-for="activity in AktivitiRoseList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center text-zinc-400 font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            
                            
                        </table>
                    </div>
                    <!-- Aktiviti 4 Tahun -->
                    <div class="bg-white h-auto w-3/5 my-2 mx-2 p-3 rounded-2xl drop-shadow-2xl">
                        <h3 class="text-center text-lg font-semibold text-orange-500">BUNGA RAYA</h3>
                        <table class="my-2 mx-auto ">
                            <tr >
                                <th class="py-1 w-4/5 border-solid border-b-2 border-black text-left">Nama Aktiviti</th>
                                <th class="py-1 w-2/4 border-solid border-b-2 border-black">Tindakan</th>
                            </tr>
                           <tbody v-if="AktivitiRayaList.length > 0">
                               <tr  v-for="activity in AktivitiRayaList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center text-zinc-400 font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            
                            
                        </table>
                    </div>
                </div>
                <!-- New Row -->
                <div class="flex justify-between">
                    <!-- Aktiviti 3 Tahun -->
                    <div class="bg-white h-auto w-3/5 my-2 mx-2 p-3 rounded-2xl drop-shadow-2xl">
                        <h3 class="text-center text-lg font-semibold text-orange-500">BUNGA DAISY</h3>
                        <table class="my-2 mx-auto ">
                            <tr >
                                <th class="py-1 w-4/5 border-solid border-b-2 border-black text-left">Nama Aktiviti</th>
                                <th class="py-1 w-2/4 border-solid border-b-2 border-black">Tindakan</th>
                            </tr>
                           <tbody v-if="AktivitiDaisyList.length > 0">
                               <tr  v-for="activity in AktivitiDaisyList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center text-zinc-400 font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                           
                            
                        </table>
                    </div>
                    <!-- Aktiviti 4 Tahun -->
                    <div class="bg-white h-auto w-3/5 my-2 mx-2 p-3 rounded-2xl drop-shadow-2xl">
                        <h3 class="text-center text-lg font-semibold text-orange-500">BUNGA MATAHARI</h3>
                        <table class="my-2 mx-auto ">
                            <tr >
                                <th class="py-1 w-4/5 border-solid border-b-2 border-black text-left">Nama Aktiviti</th>
                                <th class="py-1 w-2/4 border-solid border-b-2 border-black">Tindakan</th>
                            </tr>
                           <tbody v-if="AktivitiMatahariList.length > 0">
                               <tr  v-for="activity in AktivitiMatahariList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center text-zinc-400 font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            
                            
                        </table>
                    </div>
                </div>
                <!-- nn -->
                <!-- New Row -->
                <div class="flex justify-between">
                    <!-- Aktiviti 3 Tahun -->
                    <div class="bg-white h-auto w-3/5 my-2 mx-2 p-3 rounded-2xl drop-shadow-2xl">
                        <h3 class="text-center text-lg font-semibold text-orange-500">BUNGA DAHLIA</h3>
                        <table class="my-2 mx-auto ">
                            <tr >
                                <th class="py-1 w-4/5 border-solid border-b-2 border-black text-left">Nama Aktiviti</th>
                                <th class="py-1 w-2/4 border-solid border-b-2 border-black">Tindakan</th>
                            </tr>
                           <tbody v-if="AktivitiDahliaList.length > 0">
                               <tr  v-for="activity in AktivitiDahliaList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center text-zinc-400 font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            
                            
                        </table>
                    </div>
                    <!-- Aktiviti 4 Tahun -->
                    <div class="bg-white h-auto w-3/5 my-2 mx-2 p-3 rounded-2xl drop-shadow-2xl">
                        <h3 class="text-center text-lg font-semibold text-orange-500">BUNGA LILY</h3>
                        <table class="my-2 mx-auto ">
                            <tr >
                                <th class="py-1 w-4/5 border-solid border-b-2 border-black text-left">Nama Aktiviti</th>
                                <th class="py-1 w-2/4 border-solid border-b-2 border-black">Tindakan</th>
                            </tr>
                           <tbody v-if="AktivitiLilyList.length > 0">
                               <tr  v-for="activity in AktivitiLilyList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center text-zinc-400 font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            
                            
                        </table>
                    </div>
                </div>
                <!-- nn -->
                <!-- New Row -->
                <div class="flex justify-center">
                    <!-- Aktiviti 3 Tahun -->
                    <div class="bg-white h-auto w-3/5 my-2 mx-2 p-3 rounded-2xl drop-shadow-2xl">
                        <h3 class="text-center text-lg font-semibold text-orange-500">BUNGA TULIP</h3>
                        <table class="my-2 mx-auto ">
                            <tr >
                                <th class="py-1 w-4/5 border-solid border-b-2 border-black text-left">Nama Aktiviti</th>
                                <th class="py-1 w-2/4 border-solid border-b-2 border-black">Tindakan</th>
                            </tr>
                           <tbody v-if="AktivitiTulipList.length > 0">
                               <tr  v-for="activity in AktivitiTulipList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center text-zinc-400 font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            
                            
                        </table>
                    </div>
                    
                    
                </div>
                <!-- nn -->
            </div>
        

        </div>

        <!-- User prompt to display list of activities to be selected -->
                <div id="overlay" class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50" v-bind:class="{'hidden': !isOpen}">
                    <dialog
                        class="z-10 w-5/6 bg-white absolute h-fit top-auto overflow-auto px-3 pt-4 rounded-xl"
                        v-bind:open="isOpen"
                    >
                        <table class="list w-5/6 my-3  mx-auto">
                            <tr>
                                <th class="border-b-2 border-black py-3">Nama Aktiviti</th>
                                <th class="border-b-2 border-black py-3">Tahun</th>
                                <th class="border-b-2 border-black py-3">Kesukaran</th>
                                <th class="border-b-2 border-black py-3">Kelas</th>
                                <th class="border-b-2 border-black py-3">Tindakan</th>
                            </tr>
                                    
                            <tr v-for="activity in AktivitiList" v-bind:key="activity.id">
                                <td class="aktiviti py-1">{{ activity.namaAktiviti }}</td>
                                <td class="text-center py-1">{{ activity.tahun }}</td>
                                <td class="text-center py-1">{{ activity.kesukaran }}</td>
                                <td class="text-center py-1">
                                    <select 
                                    v-model="kelasKanak"
                                    name="kelas" 
                                    id="kelas" >
                                        <option selected disabled>Sila Pilih Kelas</option>
                                        <option value="Melur">Melur</option>
                                        <option value="Orkid">Orkid</option>
                                        <option value="Raya">Raya</option>
                                        <option value="Daisy">Daisy</option>
                                        <option value="Matahari">Matahari</option>
                                        <option value="Dahlia">Dahlia</option>
                                        <option value="Lily">Lily</option>
                                        <option value="Tulip">Tulip</option>
                                    </select>
                                </td>
                                <td class="text-center py-1">
                                    <button class="bg-blue-200 px-2 p-0.5 text-sm rounded-lg" @click="uploadTodayActivity(activity.id)" >Pilih Aktiviti</button>
                                </td>
                            </tr>
                        </table>
                        <div class="flex justify-evenly">
                            <button class="bg-red-200 w-1/6 p-1 rounded-lg" @click="toggleActivity">Batal</button>
                        </div>
                    </dialog>
                </div>  
                <!-- End of prompt -->

    </div>
    <ToastMessage ref="toast" />
    
</template>

<script>
    import axios from 'axios';
    import {AktivitiList, BaseURL, successAddActivity} from "../stores/index";
    import ToastMessage from "../components/ToastMessage.vue";


export default {
    components: {
        ToastMessage
    },
    
  data() {
    return {
        AktivitiList: [],
        AktivitiHariIniList: [],
        AktivitiMelurList: [],
        AktivitiOrkidList: [],
        AktivitiRoseList: [],
        AktivitiRayaList: [],
        AktivitiDaisyList: [],
        AktivitiMatahariList: [],
        AktivitiDahliaList: [],
        AktivitiLilyList: [],
        AktivitiTulipList: [],
        isOpen: false,
        activityId: '',
        kelasKanak: '',
        selectedActivity: null 
    };
  },
  mounted() {

      console.log(successAddActivity.value);
    if (successAddActivity.value === "created"){
        const message = `Aktiviti berjaya ditambah!`;
        const status = "Berjaya";
        this.$refs.toast.toast(message, status, "success");
    };

    this.fetchAktivitiData();
    this.fetchAktivitiHariIni();
    this.fetchAktivitiMelur();
    this.fetchAktivitiOrkid();
    this.fetchAktivitiRose();
    this.fetchAktivitiRaya();
    this.fetchAktivitiDaisy();
    this.fetchAktivitiMatahari();
    this.fetchAktivitiDahlia();
    this.fetchAktivitiLily();
    this.fetchAktivitiTulip();

    
  },
  methods: {
    fetchAktivitiData() {
      axios.get(BaseURL + 'aktiviti')
        .then(response => {
        //   this.AktivitiList = response.data;
          AktivitiList.value = response.data;
          console.log(this.AktivitiList);
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    fetchAktivitiHariIni() {
      axios.get(BaseURL + 'aktivitiHariIni')
        .then(response => {
          this.AktivitiHariIniList = response.data;
          
          
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    fetchAktivitiMelur() {
        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format

      axios.get(BaseURL + 'aktivitiHariIni')
        .then(response => {
          this.AktivitiMelurList = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Melur" && itemDate === today;
                });
         
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    fetchAktivitiOrkid() {
        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format

      axios.get(BaseURL + 'aktivitiHariIni')
        .then(response => {
          this.AktivitiOrkidList = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Orkid" && itemDate === today;
                });
          
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    fetchAktivitiRose() {
        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format

      axios.get(BaseURL + 'aktivitiHariIni')
        .then(response => {
          this.AktivitiRoseList = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Rose" && itemDate === today;
                });
          
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    fetchAktivitiRaya() {
        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format

      axios.get(BaseURL + 'aktivitiHariIni')
        .then(response => {
          this.AktivitiRayaList = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Raya" && itemDate === today;
                });
          
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    fetchAktivitiDaisy() {
        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format

      axios.get(BaseURL + 'aktivitiHariIni')
        .then(response => {
          this.AktivitiDaisyList = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Daisy" && itemDate === today;
                });
         
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    fetchAktivitiMatahari() {
        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format 

      axios.get(BaseURL + 'aktivitiHariIni')
        .then(response => {
          this.AktivitiMatahariList = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Matahari" && itemDate === today;
                });
          
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    fetchAktivitiDahlia() {
        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format

      axios.get(BaseURL + 'aktivitiHariIni')
        .then(response => {
          this.AktivitiDahliaList = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Dahlia" && itemDate === today;
                });
          
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },


    fetchAktivitiLily() {
        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format

        axios.get(BaseURL + 'aktivitiHariIni')
            .then(response => {
            this.AktivitiLilyList = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Lily" && itemDate === today;
                });
            
            })
            .catch(error => {
            console.error('Error fetching aktiviti data:', error);
            });
    },

    fetchAktivitiTulip() {
        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format

        axios.get(BaseURL + 'aktivitiHariIni')
            .then(response => {
            this.AktivitiTulipList = response.data.filter(item => {
                    const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                    return item.kelas === "Tulip" && itemDate === today;
                });
            
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    toggleActivity(){
        this.isOpen = !this.isOpen;
    },

    uploadTodayActivity(activity) {
        const activityId = activity;
        const kelasKanak = this.kelasKanak;

        const today = new Date().toISOString().slice(0, 10); // Get the current date in YYYY-MM-DD format
       
        axios.get(BaseURL + 'aktivitiHariIni/')
            .then(response => {
            const existingActivities = response.data.filter(item => {
                const itemDate = item.tarikh.slice(0, 10); // Extract the date portion from item.tarikh
                return item.kelas === kelasKanak && itemDate === today;
                });
            console.log("Existing activity" + existingActivities.length);
            if (existingActivities.length >= 4) {
                const message = `Kelas Bunga ${this.kelasKanak} tidak boleh melebihi 4 aktiviti `;
                const status = "Gagal";
                this.$refs.toast.toast(message, status, "error")
                
                this.toggleActivity();
                router.push('/activity')
                return;
            }
            else{
                const todayActivity = 
                {
                    aktivitiId: activityId,
                    kelas: kelasKanak
                }

                axios.post(BaseURL + 'aktivitiHariIni', todayActivity)
                    .then(response => {
                        const message = `Aktiviti berjaya ditambah!`;
                        const status = "Berjaya";
                        this.$refs.toast.toast(message, status, "success")
                        
                    
                        this.fetchAktivitiHariIni();
                        this.fetchAktivitiMelur();
                        this.fetchAktivitiOrkid();
                        this.fetchAktivitiRose();
                        this.fetchAktivitiRaya();
                        this.fetchAktivitiDaisy();
                        this.fetchAktivitiMatahari();
                        this.fetchAktivitiDahlia();
                        this.fetchAktivitiLily();
                        this.fetchAktivitiTulip();
                        this.toggleActivity();
                        router.push('/activity')
                    })
                    .catch(error => {
                        console.error('Error upload aktiviti data:', error);
                    });
            }
        });

        
    },


    async deleteTodayActivity(activity) {
        this.selectedActivity = activity;
        console.log(this.selectedActivity);
        await axios.delete(BaseURL + `aktivitiHariIni/${this.selectedActivity}`)
        .then(response => {
            this.AktivitiHariIniList = this.AktivitiHariIniList.filter(
                (activity) => activity.id !== this.selectedActivity
            );

            const message = "Aktiviti Telah Dipadam";
            const status = "Berjaya";
            this.$refs.toast.toast(message, status, "success")


            this.fetchAktivitiHariIni();
            this.fetchAktivitiMelur();
            this.fetchAktivitiOrkid();
            this.fetchAktivitiRose();
            this.fetchAktivitiRaya();
            this.fetchAktivitiDaisy();
            this.fetchAktivitiMatahari();
            this.fetchAktivitiDahlia();
            this.fetchAktivitiLily();
            this.fetchAktivitiTulip();
        
        })
        .catch(error=> console.log(error))
        
    }


  }
};
</script>