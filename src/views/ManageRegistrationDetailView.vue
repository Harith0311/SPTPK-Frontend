<script setup>
import { ref } from "@vue/reactivity";
import { RouterLink } from "vue-router";
import SideBar2 from '../components/SideBar2.vue';
import Header from "../components/Header.vue";
import CanvasQR from "../components/CanvasQR.vue";

    
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
                            <h3 class="ml-4">{{ kanak.ageYears }} tahun {{ kanak.ageMonths }} bulan</h3>
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
                            <h3 class="ml-4">RM {{bapa.pendapatan}}</h3>
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
                            <h3 class="ml-4">RM {{ibu.pendapatan}}</h3>
                        </div>
                        <div class=" flex my-1">
                            <i class="fa-solid fa-phone p-1"></i>
                            <h3 class="ml-4">{{ibu.telefonPejabat}}</h3>
                        </div>
                    </div>
                </div>

                <!-- Button -->
                <div class="flex justify-center my-4">
                    <button 
                    class="bg-blue-200 py-2 px-6 m-4 mx-6 rounded-xl drop-shadow-xl font-semibold hover:bg-blue-100"
                    @click="toggleReject">
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
    <!-- <svg ref="CanvasQR" v-bind:kanakId="kanakId" :key="kanakId" class="mx-auto"></svg> -->
    
    <!-- User prompt to generate and print QR code -->
    <div 
    id="overlay" 
    class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50" 
    v-bind:class="{'hidden': !isSuccess}">
        <dialog
            class="z-10 w-5/6 bg-white absolute h-fit top-3 overflow-auto px-3 pt-4 rounded-xl"
            v-bind:open="isSuccess"
        >
            <div class="bg-green-300 rounded-lg m-4 p-2">
                <h2 class="font-bold text-xl text-center pt-3">Permohonan Berjaya!</h2>
                <p class="font-medium text-sm text-center p-2">Sila cetak kod QR di bawah bagi urusan kehadiran kanak-kanak.</p>
            </div>
                <canvasQR
                :key="kanakId"
                v-bind:kanakId="kanakId"
                id="qrcode"
                ref="canvasQR"
                />
            <h2 class="font-medium text-lg text-center mb-5 p-2">{{kanak.namaKanak}}</h2>

            <div class="flex justify-center">
                <h2 class="my-2 mr-4">Kelas: </h2>
                <div>
                    <select 
                        v-model="kelasKanak"
                        name="kelas" 
                        id="kelas" 
                        class="bg-gray-200 rounded-md my-2">
                            <option selected disabled>Sila Pilih Kelas</option>
                            <option value="Orkid">Orkid</option>
                            <option value="Raya">Raya</option>
                            <option value="Daisy">Daisy</option>
                            <option value="Matahari">Matahari</option>
                            <option value="Dahlia">Dahlia</option>
                            <option value="Lily">Lily</option>
                            <option value="Tulip">Tulip</option>
                            <option value="Melur">Melur</option>
                    </select>  
                </div>
            </div>

            <a target="_blank" v-bind:href="`https://api.whatsapp.com/send/?phone=${kanak.telefonPenjaga}&text=${text}&type=phone_number&app_absent=0`">
                <div class="flex justify-center">
                    <h2 class="font-medium text-base text-center mx-8 mb-5 p-1 bg-green-300 hover:bg-green-400 rounded-3xl w-1/4">Kod Pengesahan: {{randomCode}}</h2>
                </div>
            </a>
            <div class="flex justify-center">
                <div class="flex justify-between  bg-gray-200 p-2 w-3/5  rounded-lg mb-5">
                    <p class="text-sm p-2 text-justify mx-3 mr-10 ">Sila tekan butang di atas untuk menghantar maklumat kod pengesahan kepada penjaga kanak kanak melalui platform whatsapp</p>
                    <img class="h-auto w-10 m-2 mx-4" src="/whatsapp.png" alt="">
                </div>
            </div>
            <div class="flex justify-center">
                <button class="bg-blue-200 w-1/6 p-1 mx-8 rounded-lg" @click="printQRcode">Cetak Kod QR</button>
                <button class="bg-blue-200 w-1/6 p-1 mx-8 rounded-lg" @click="pushToList">Selesai</button>
            </div>
            
            <button @click="toggleSuccess" class="bg-red-300 ml-2 p-1 px-10 rounded-md">Batal</button>
        </dialog>
    </div>  
    <!-- End of prompt -->

    <!-- User prompt to confirm reject registration -->
    <div 
    id="overlay" 
    class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-50" 
    v-bind:class="{'hidden': !isReject}">
        <dialog
            class="z-10 w-2/6 bg-white absolute h-fit top-56 overflow-auto px-3 pt-4 rounded-xl"
            v-bind:open="isReject"
        >
            <div class="bg-red-300 rounded-lg m-4 p-2">
                <h2 class="font-bold text-xl text-center  ">Tolak Permohonan?</h2>
                
            </div>
                
            <p class="font-medium text-sm text-center p-6 ">Anda pasti untuk menolak permohonan pendaftaran {{ kanak.namaKanak }} ?</p>
            <div class="flex justify-center">
                <button class="bg-blue-200 w-2/6 p-1 mx-8 rounded-lg" @click="toggleReject">Batal</button>
                <button class="bg-blue-200 w-2/6 p-1 mx-8 rounded-lg" @click="rejectRegistration">Sahkan</button>
            </div>
        </dialog>
    </div>  
    <!-- End of prompt -->
    
    <ToastMessage ref="toast" />
</template>

<script>
    import axios from 'axios';
    import { ref } from "@vue/reactivity";
    import { RouterLink } from "vue-router";
    import router from "../router";
    import QRCode from "qrcode";
    import { BaseURL, rejectRegister } from '../stores'
    import ToastMessage from "../components/ToastMessage.vue";
    import html2canvas from 'html2canvas';

    

export default {
    data() {
        return {
            registerId : router.currentRoute.value.params.id,
            register : "",
            kanak: "",
            bapa: "",
            ibu: "",
            kanakId: "",
            isSuccess: false,
            isReject: false,
            svgCode: '', 
            randomCode: '',
            text: '',
            kelasKanak:'',
            update: {
                pendaftaranLulus: true,
                kodPengesahan: this.randomCode,
                kelas: this.kelasKanak
            }
        }
    },
    mounted() {

        
        console.log(this.registerId);
            //Fetch data in urusPendaftaran
            axios.get(BaseURL + 'urusPendaftaran/' + this.registerId)
                .then(response => {
                    this.register = response.data;
                    console.log(this.register);

                    //get the id for kanak
                    this.kanakId = this.register.kanak.id;
                    console.log(this.kanakId);
                    //Fetch data in kanak                    
                    axios.get(BaseURL + 'kanak/' + this.kanakId)
                    .then(response => {
                    this.kanak = response.data;
                    this.calculateAge();
                    console.log(this.kanak);
                    })

                    //get the id for bapa
                    const bapaId = this.register.bapa.id;
                    console.log(bapaId);
                    //Fetch data in bapa                    
                    axios.get(BaseURL + 'bapa/' + bapaId)
                    .then(response => {
                    this.bapa = response.data;
                    console.log(this.bapa);
                    })

                    //get the id for ibu
                    const ibuId = this.register.ibu.id;
                    console.log(ibuId);
                    //Fetch data in bapa                    
                    axios.get(BaseURL + 'ibu/' + ibuId)
                    .then(response => {
                    this.ibu = response.data;
                    console.log(this.ibu);
                    })

            })
                .catch(error => {
                    console.error('Error fetching registration data:', error);
                });

                QRCode.toString(
                    this.kanakId,
                    { type: 'svg', width: 350, height: 350 },
                    (error, svgCode) => {
                        if (error) {
                            console.error(error);
                        } else {
                            this.svgCode = svgCode; // Store the SVG code in the component's data property
                        }
                    }
                );

        
            
        

        
    },

    methods: {

        formatDate(dateString) {
            const date = new Date(dateString);
    
            const day = date.getDate();
            const month = date.getMonth() + 1; // Months are zero-based
            const year = date.getFullYear();
    
            return `${day}/${month}/${year}`;
        },

        calculateAge() {
            const today = new Date();

            if (this.kanak && typeof this.kanak === 'object') {
                const birthDate = new Date(this.kanak.tarikhLahir);
                const yearDiff = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                const dayDiff = today.getDate() - birthDate.getDate();

                let ageYears = yearDiff;
                let ageMonths = monthDiff;

                if (dayDiff < 0) {
                ageMonths -= 1;
                }

                if (ageMonths < 0) {
                ageYears -= 1;
                ageMonths += 12;
                }

                this.kanak.ageYears = ageYears;
                this.kanak.ageMonths = ageMonths;
            }
                    
   
        },

        approveRegistration(){
            this.generateCode();
            console.log(this.randomCode);

            const update = {
                pendaftaranLulus: true,
                kodPengesahan: this.randomCode,
                kelas: this.kelasKanak
            }

            console.log(this.kelasKanak);

            axios.put(BaseURL + 'urusPendaftaran/' + this.registerId, update)
            .then(response => {
                this.toggleSuccess();
            })
            .catch(error => {
                console.error('Error updating registration status', error);
            })
        },

        async rejectRegistration(){

            axios.delete(BaseURL + 'urusPendaftaran/' + this.registerId)
            .then(response => {

                rejectRegister.value = "rejected";

                router.push('/manageRegister');
            })
        },

        generateCode() {
            // Generate the random code here
            const code = Math.floor(10000 + Math.random() * 90000);
            this.randomCode = code.toString();

            this.text=`Hai,Saya wakil daripada Taska Permata Keluarga Taman Desa Permai ingin memaklumkan pendaftaran anak Tuan/Puan telah diterima. Sehubungan dengan itu, Tuan/Puan dikehendaki untuk menggunakan kod pengesahan yang diberikan ini untuk mendaftar akaun pada Sistem Pengurusan Taska Permata Keluarga. Kod pengesahan anda adalah ${this.randomCode}. Terima Kasih`
            
        },

        toggleSuccess() {
            this.isSuccess = !this.isSuccess;
        },

        toggleReject() {
            this.isReject = !this.isReject;
        },

            printQRcode() {
                // Get the canvas element
                const canvas = document.getElementById('qrcode');

                // Create a new window for printing
                const printWindow = window.open('', '_blank','width=800,height=600,top=100,left=100,location=no');
                
                // Open a new document in the print window
                printWindow.document.open();

                // Add the canvas to the print document
                printWindow.document.write(`
                    <html>
                        <head>
                            <meta charset="UTF-8">
                            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Kod QR Kanak-Kanak</title>
                            <style>
                                * {
                                    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                                }

                                h1{
                                    text-align: center;
                                    margin-top: 10px;
                                    font-size: medium;
                                }

                                h3{
                                    padding-top: 20px;
                                    text-align: center;
                                    margin-top: 10px;
                                    font-size: small;
                                }

                                p{
                                    text-align: center;
                                    font-weight: 500;
                                    font-size: small;
                                }

                                .satu{
                                    border: 4px solid black;
                                    width: 350px;
                                    padding: 15px;
                                    
                                }

                                .satu img{
                                    display: block;
                                    width: 40px;
                                    height: auto;
                                    margin-top: 10px;
                                    margin-right: auto;
                                    margin-left: auto;
                                    
                                }

                                .cover{
                                    display: flex;
                                    justify-content: center;
                                    margin: 50px;
                                }

                            </style>
                        </head>
                        <body>
                            <div class="cover">
                                <div class="satu">
                                    <img src="/permata-logo.png" alt="">
                                    <h1>Kod QR Kehadiran</h1>
                                    <h3>${this.kanak.namaKanak}</h3>
                                    <img src="${canvas.toDataURL('image/png')}" alt="" style="width: 250px; height: auto;">
                                    <p>Taska Permata Keluarga Taman Desa Permai</p>
                                </div>
                            </div>

                        </body>
                    </html>
                `);

                // <img src="${canvas.toDataURL('image/png')}" />
                // Close the print document
                printWindow.document.close();

                // Print the document
                printWindow.print();
            },

            pushToList(){
                const update = {
                    kelas: this.kelasKanak
                }

                const updateKanak = {
                    kelas: this.kelasKanak,
                    kodPengesahan: this.randomCode,
                }

                console.log(this.kelasKanak);
                // Update kelas dalam jadual UrusPendaftaran
                axios.put(BaseURL + 'urusPendaftaran/' + this.registerId, update)
                    .then(response => {
                        // Update kelas kanak kanak dalam jadual DaftarKanak
                        axios.put(BaseURL + 'kanak/' + this.kanakId, updateKanak)
                            .then(response => {
                                router.push('/manageRegister');
                            })
                            .catch(error => {
                                console.error('Error updating registration status', error);
                            })
                        // Kembali kepada senarai pendaftaran
                        router.push('/manageRegister');
                    })
                    .catch(error => {
                        console.error('Error updating registration status', error);
                })
                
            }

    }

}
    

</script>