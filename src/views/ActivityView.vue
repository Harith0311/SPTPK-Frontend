<script setup>

import { RouterLink } from "vue-router";
import SideBar2 from '../components/SideBar2.vue';
import Header from "../components/Header.vue";
</script>

<template>
    <div class="flex bg-blue-100 w-full justify-between p-8">
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
            
            <h3 class="text-lg font-bold mt-5 ml-2 p-3">Senarai Aktiviti</h3>
            <div>
                <RouterView/>
            </div>

            <h3 class="text-lg font-bold mt-5 ml-2 p-3">Aktiviti Hari Ini</h3>
            <div class=" mb-10">
                <div>
                    <button class="bg-purple-300">Tambah Aktiviti</button>
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
                           <tbody v-if="AktivitiHariIniList.length > 0">
                               <tr  v-for="activity in AktivitiHariIniList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Melur')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr>
                            
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
                           <tbody v-if="AktivitiHariIniList.length > 0">
                               <tr  v-for="activity in AktivitiHariIniList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Orkid')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr>
                            
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
                           <tbody v-if="AktivitiHariIniList.length > 0">
                               <tr  v-for="activity in AktivitiHariIniList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Rose')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr>
                            
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
                           <tbody v-if="AktivitiHariIniList.length > 0">
                               <tr  v-for="activity in AktivitiHariIniList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Raya')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr>
                            
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
                           <tbody v-if="AktivitiHariIniList.length > 0">
                               <tr  v-for="activity in AktivitiHariIniList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Daisy')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr>
                            
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
                           <tbody v-if="AktivitiHariIniList.length > 0">
                               <tr  v-for="activity in AktivitiHariIniList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Matahari')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr>
                            
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
                           <tbody v-if="AktivitiHariIniList.length > 0">
                               <tr  v-for="activity in AktivitiHariIniList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Dahlia')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr>
                            
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
                           <tbody v-if="AktivitiHariIniList.length > 0">
                               <tr  v-for="activity in AktivitiHariIniList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Lily')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr>
                            
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
                           <tbody v-if="AktivitiHariIniList.length > 0">
                               <tr  v-for="activity in AktivitiHariIniList" v-bind:key="activity.id">
                                   <td class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-left">{{activity.aktiviti.namaAktiviti}}</td>
                                   <td class="py-1 w-2/4 border-solid border-b-2 border-slate-200 text-center"><i @click="deleteTodayActivity(activity.id)" class="fa-solid fa-trash hover:text-red-500"></i></td>
                               </tr>
                           </tbody>
                           <tbody v-else>
                                <td colspan="2" class="py-1 w-4/5 border-solid border-b-2 border-slate-200 text-center font-medium ">Tiada Aktiviti Hari Ini</td>                     
                           </tbody>
                            <tr>
                                <td class="py-1 w-4/5 text-center " colspan="2">
                                    <button class=" bg-zinc-300 rounded-md py-1 px-6 hover:bg-blue-300 duration-400 drop-shadow-lg" @click="toggleActivity('Tulip')">
                                        <i class="fa-regular fa-square-plus py-1 px-3"></i>
                                        Tambah Aktiviti</button>
                                </td>
                                
                            </tr>
                            
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
                                    id="kelas">
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
    <!-- Footer -->
    <div class="bg-black text-center text-white p-4">
        <h4>All rights reserved</h4>
    </div>
    
</template>

<script>
    import axios from 'axios';
    import {AktivitiList} from "../stores/index";

export default {
  data() {
    return {
        AktivitiList: [],
        AktivitiHariIniList: [],
        isOpen: false,
        activityId: '',
        kelasKanak: '',
        selectedActivity: null 
    };
  },
  mounted() {
    this.fetchAktivitiData();
    this.fetchAktivitiHariIni();
    
  },
  methods: {
    fetchAktivitiData() {
      axios.get('http://localhost:1001/aktiviti')
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
      axios.get('http://localhost:1001/aktivitiHariIni')
        .then(response => {
          this.AktivitiHariIniList = response.data;
          
          console.log("disini error");
          console.log(this.AktivitiHariIniList);
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    toggleActivity(kelas){
        this.isOpen = !this.isOpen;
        
        if (kelas == "Melur"){
            this.uploadMelur();
        }else if(kelas == "Orkid"){

        }else if(kelas == "Rose"){
            
        }
    },

    uploadTodayActivity(activity) {
        const activityId = activity;
        const kelas = this.kelasKanak;
       
        const todayActivity = 
        {
            aktivitiId: activityId,
            kelas: kelas
        }

        axios.post('http://localhost:1001/aktivitiHariIni', todayActivity)
            .then(response => {
                console.log(response.data);
                
                alert('Aktiviti berjaya ditambah!')
                this.fetchAktivitiHariIni();
                this.toggleActivity();
                router.push('/activity')
            })
            .catch(error => {
                console.error('Error upload aktiviti data:', error);
            });
    },

    uploadMelur(activity){
        const kelas = "Melur";
        const activityId = activity;
       
        const todayActivity = 
        {
            aktivitiId: activityId,
            kelas: kelas
        }

        axios.post('http://localhost:1001/aktivitiHariIni/', todayActivity)
            .then(response => {
                console.log(response.data);
                
                alert('Aktiviti berjaya ditambah!')
                this.fetchAktivitiHariIni();
                this.toggleActivity();
                router.push('/activity')
            })
            .catch(error => {
                console.error('Error upload aktiviti data:', error);
            });
    },

    uploadOrkid(){
        const kelas = "Orkid";
        const activityId = activity;
       
        const todayActivity = 
        {
            aktivitiId: activityId,
            kelas: kelas
        }

        axios.post('http://localhost:1001/aktivitiHariIni/', todayActivity)
            .then(response => {
                console.log(response.data);
                
                alert('Aktiviti berjaya ditambah!')
                this.fetchAktivitiHariIni();
                this.toggleActivity();
                router.push('/activity')
            })
            .catch(error => {
                console.error('Error upload aktiviti data:', error);
            });
    },

    uploadRose(){

    },

    uploadRaya(){

    },

    uploadDaisy(){

    },

    uploadMatahari(){

    },

    uploadDahlia(){

    },

    uploadLily(){

    },

    uploadTulip(){

    },


    async deleteTodayActivity(activity) {
        this.selectedActivity = activity;
        console.log(this.selectedActivity);
        await axios.delete(`http://localhost:1001/aktivitiHariIni/${this.selectedActivity}`)
        .then(response => {
            this.AktivitiHariIniList = this.AktivitiHariIniList.filter(
                (activity) => activity.id !== this.selectedActivity
            );
        })
        .catch(error=> console.log(error))
        
    }


  }
};
</script>