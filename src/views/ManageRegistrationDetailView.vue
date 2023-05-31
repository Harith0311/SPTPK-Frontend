<script setup>
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";
import SideBar2 from '../components/SideBar2.vue';
import Header from "../components/Header.vue";

</script>

<template>
    <div class="flex bg-blue-100 w-full justify-between p-4">
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
                <h3>Halaman Utama > Pengurusan Pendaftaran > <span class="text-orange-400 font-semibold">{{kanak.namaKanak}}</span> </h3>
            </div>

            <!-- Div Content -->

            <div class="bg-white h-auto w-full my-6 mx-2 p-4 px-10 rounded-2xl drop-shadow-2xl">
                <!-- Button back -->
                <router-link to="/manageRegister">
                    <button class=" py-2  text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 text-orange-400"></i>Kembali</button>

                </router-link>
                <h1 class="pt-4 px-2 font-bold text-lg">{{kanak.namaKanak}}</h1>
                <div class="border-solid border-b-2 py-1 border-black">
                    <!-- Horizontal Line -->
                </div>
                <h3 class="text-right">Tarikh Permohonan: {{formatDate(register.diciptaPada)}}</h3>

                <!-- Maklumat Kanak-Kanak -->
                <h2 class="pt-8 px-2 font-semibold text-base">Maklumat Kanak-Kanak</h2>
                <div class="flex justify-around bg-blue-100 my-2 py-4 rounded-md ">
                    <div class=" w-5/12">
                        <div class=" flex my-1">
                            <i class="fa-solid fa-user p-1"></i>
                            <h3 class="ml-4">{{kanak.namaKanak}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-file-lines p-1"></i>
                            <h3 class="ml-4">{{kanak.sijilLahir}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-users-line p-1"></i>
                            <h3 class="ml-4">{{kanak.bangsa}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-cake-candles p-1"></i>
                            <h3 class="ml-4">{{kanak.tarikhLahir}}</h3>
                        </div>
                    </div>
                    <div class=" w-5/12">
                        <div class=" flex my-1">
                            <i class="fa-solid fa-hospital p-1"></i>
                            <h3 class="ml-4">{{kanak.tempatLahir}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-calendar p-1"></i>
                            <h3 class="ml-4">{{kanak.umur}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-venus-mars p-1"></i>
                            <h3 class="ml-4">{{kanak.jantina}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-map p-1"></i>
                            <h3 class="ml-4">{{kanak.alamatKanak}}</h3>
                        </div>
                    </div>
                </div>

                <!-- Maklumat Penjaga Kanak-Kanak -->
                <h2 class="pt-8 px-2 font-semibold text-base">Maklumat Penjaga Kanak-Kanak</h2>
                <div class="flex justify-around bg-blue-100 my-2 py-4 rounded-md ">
                    <div class=" w-5/12">
                        <div class=" flex my-1">
                            <i class="fa-solid fa-user p-1"></i>
                            <h3 class="ml-4">{{kanak.namaPenjaga}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-phone p-1"></i>
                            <h3 class="ml-4">{{kanak.telefonPenjaga}}</h3>
                        </div>
                    </div>
                    <div class=" w-5/12">
                        <div class=" flex my-1">
                            <i class="fa-solid fa-hands-holding-child p-1"></i>
                            <h3 class="ml-4">{{kanak.hubunganPenjaga}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-map p-1"></i>
                            <h3 class="ml-4">{{kanak.alamatPenjaga}}</h3>
                        </div>
                    </div>
                </div>
                <!-- Maklumat Bapa -->
                <h2 class="pt-8 px-2 font-semibold text-base">Maklumat Bapa</h2>
                <div class="flex justify-around bg-blue-100 my-2 py-4 rounded-md ">
                    <div class=" w-5/12">
                        <div class=" flex my-1">
                            <i class="fa-solid fa-user p-1"></i>
                            <h3 class="ml-4">{{bapa.nama}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-envelope p-1"></i>
                            <h3 class="ml-4">{{bapa.emel}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-file-lines p-1"></i>
                            <h3 class="ml-4">{{bapa.noKP}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-user-group"></i>
                            <h3 class="ml-4">{{bapa.status}}</h3>
                        </div>
                    </div>
                    <div class=" w-5/12">
                        <div class=" flex my-1">
                            <i class="fa-solid fa-briefcase p-1"></i>
                            <h3 class="ml-4">{{bapa.pekerjaan}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-dollar-sign p-1"></i>
                            <h3 class="ml-4">{{bapa.pendapatan}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-phone p-1"></i>
                            <h3 class="ml-4">{{bapa.telefonPejabat}}</h3>
                        </div>
                    </div>
                </div>
                <!-- Maklumat Ibu -->
                <h2 class="pt-8 px-2 font-semibold text-base">Maklumat Ibu</h2>
                <div class="flex justify-around bg-blue-100 my-2 py-4 rounded-md ">
                    <div class=" w-5/12">
                        <div class=" flex my-1">
                            <i class="fa-solid fa-user p-1"></i>
                            <h3 class="ml-4">{{ibu.nama}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-envelope p-1"></i>
                            <h3 class="ml-4">{{ibu.emel}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-file-lines p-1"></i>
                            <h3 class="ml-4">{{ibu.noKP}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-user-group"></i>
                            <h3 class="ml-4">{{ibu.status}}</h3>
                        </div>
                    </div>
                    <div class=" w-5/12">
                        
                        <div class=" flex my-1">
                            <i class="fa-solid fa-briefcase p-1"></i>
                            <h3 class="ml-4">{{ibu.pekerjaan}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-dollar-sign p-1"></i>
                            <h3 class="ml-4">{{ibu.pendapatan}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-phone p-1"></i>
                            <h3 class="ml-4">{{ibu.telefonPejabat}}</h3>
                        </div>
                    </div>
                </div>

                <!-- Button -->
                <div class="flex justify-center my-4">
                    <button class="bg-blue-200 py-2 px-6 m-4 mx-6 rounded-xl drop-shadow-xl font-semibold hover:bg-blue-100">
                        Tolak Permohonan
                    </button>
                    <button 
                    class="bg-blue-400 py-2 px-6 m-4 mx-6 rounded-xl drop-shadow-xl font-semibold hover:bg-blue-300"
                    @click="approveRegistration">
                        Terima Permohonan
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer -->
    <div class="bg-black text-center text-white p-4 py-1">
        <h4>All rights reserved</h4>
    </div>
</template>

<script>
    import axios from 'axios';
    import { ref } from "@vue/reactivity";
    import { RouterLink } from "vue-router";
    import router from "../router";

export default {
    data() {
        return {
            registerId : router.currentRoute.value.params.id,
            register : "",
            kanak: "",
            bapa: "",
            ibu: "",
            update: {
                pendaftaranLulus: true
            }
        }
    },
    mounted() {
        console.log(this.registerId);
            //Fetch data in urusPendaftaran
            axios.get('http://localhost:1001/urusPendaftaran/' + this.registerId)
                .then(response => {
                    this.register = response.data;
                    console.log(this.register);

                    //get the id for kanak
                    const kanakId = this.register.kanak[0].id;
                    console.log(kanakId);
                    //Fetch data in kanak                    
                    axios.get('http://localhost:1001/kanak/' + kanakId)
                    .then(response => {
                    this.kanak = response.data;
                    console.log(this.kanak);
                    })

                    //get the id for bapa
                    const bapaId = this.register.bapa[0].id;
                    console.log(bapaId);
                    //Fetch data in bapa                    
                    axios.get('http://localhost:1001/bapa/' + bapaId)
                    .then(response => {
                    this.bapa = response.data;
                    console.log(this.bapa);
                    })

                    //get the id for ibu
                    const ibuId = this.register.ibu[0].id;
                    console.log(ibuId);
                    //Fetch data in bapa                    
                    axios.get('http://localhost:1001/ibu/' + ibuId)
                    .then(response => {
                    this.ibu = response.data;
                    console.log(this.ibu);
                    })

            })
                .catch(error => {
                    console.error('Error fetching registration data:', error);
                });
        
    },

    methods: {

        formatDate(dateString) {
            const date = new Date(dateString);
    
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based
            const year = date.getFullYear();
    
            return `${day}/${month}/${year}`;
        },

        approveRegistration(){
            axios.put('http://localhost:1001/urusPendaftaran/' + this.registerId, this.update)
            .then(response => {
                alert('Berjaya didaftarkan!')
            })
            .catch(error => {
                console.error('Error updating registration status', error);
            })
        }
    }

}
    

</script>