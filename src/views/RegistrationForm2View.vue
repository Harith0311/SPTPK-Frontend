<script setup>
    import { RouterLink } from "vue-router";
    import LogoHeader from '../components/LogoHeader.vue';
    import BlueButton from '../components/BlueButton.vue';
    import SideInput from '../components/SideInput.vue';


</script>

<template>
    <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
        <div class="loader-wrapper">
            <div class="loader"></div>
       </div>
    </div>
    <div class="registration bg-slate-400 w-screen h-full font-bold pb-4 ">
        <LogoHeader></LogoHeader>
        <div class="container m-4 pb-7 mx-auto max-w-5xl bg-blue-100 w-auto drop-shadow-2xl rounded-2xl ">
            <form v-on:submit.prevent="uploadChildInfo" >
                <ul class="flex justify-center text-center rounded-2xl">
                    <h4 class="bg-sky-200 p-2 w-64 border-solid border-2 border-sky-100 first:rounded-tl-2xl  ">Kekosongan</h4>
                    <h4 class="bg-sky-100 p-2  w-64  drop-shadow-xl" >Kanak-Kanak</h4>
                    <h4 class="bg-sky-200 p-2 w-64 border-solid border-2 border-sky-100">Ibubapa</h4>
                    <h4 class="bg-sky-200 p-2 w-64 last:rounded-tr-2xl border-solid border-2 border-sky-100">Pengesahan</h4>
                </ul>
                <h3 class="p-6 px-8 text-xl">BAHAGIAN A: BUTIRAN DIRI KANAK-KANAK</h3>
                <p class="p-2 px-8 pb-4 text-base font-medium">Masukkan maklumat kanak-kanak dalam ruangan yang disediakan.</p>
                
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Nama Penuh</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nama penuh kanak-kanak"
                        v-model="childName"
                    />  
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorName" id="errorName">{{errorName}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">No. Sijil Lahir</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor sijil lahir kanak-kanak"
                        v-model="birthCert"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorCert" id="errorCert">{{errorCert}}</label>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Bangsa / Keturunan</h3>
                    <select 
                    class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                    name="bangsa" 
                    id="bangsa"
                    v-model="race">
                        <option disabled selected>Pilih bangsa/keturunan</option>
                        <option value="Melayu">Melayu</option>
                        <option value="Cina">Cina</option>
                        <option value="India">India</option>
                        <option value="Lain-lain">Lain-lain</option>
                    </select>
                    <!-- <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Pilih bangsa/keturunan"
                        v-model="race"
                    /> -->
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorRace" id="errorRace">{{errorRace}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Tarikh Lahir</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="date"   
                        placeholder="Masukkan tarikh lahir"
                        v-model="DOB"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorBirth" id="errorBirth">{{errorBirth}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Tempat Lahir</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan tempat lahir"
                        v-model="POB"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorPlace" id="errorPlace">{{errorPlace}}</label>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Jantina</h3>
                    <select 
                    class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                    v-model="gender"  
                    name="jantina" 
                    id="jantina">
                        <option disabled selected>Pilih jantina kanak-kanak</option>
                        <option value="Lelaki">Lelaki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div> 
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorGender" id="errorGender">{{errorGender}}</label>
            
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Alamat Rumah</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan alamat rumah kanak-kanak"
                        v-model="childAddress"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorAddress" id="errorAddress">{{errorAddress}}</label>

                <p class="p-2 pt-12 px-8 pb-4 text-base font-medium">Masukkan maklumat orang yang boleh dihubungi jika berlaku kecemasan.</p>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Nama Penuh</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nama penuh"
                        v-model="gName"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorGName" id="errorGName">{{errorGName}}</label>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">No. Telefon</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor telefon"
                        v-model="gPhone"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorGPhone" id="errorGPhone">{{errorGPhone}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Hubungan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan hubungan dengan kanak-kanak"
                        v-model="gRelation"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorGRelation" id="errorGRelation">{{errorGRelation}}</label>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Alamat</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan alamat penjaga"
                        v-model="gAddress"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorGAddress" id="errorGAddress">{{errorGAddress}}</label>
                
                
                
                <div class="bg-blue-100  mx-auto py-8 px-36">
                    <BlueButton>Seterusnya</BlueButton> 
                </div>
            </form>
            <div class="flex justify-start">
                <RouterLink to="/registrationForm1">
                    <button class="bg-blue-100 p-2 px-5 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
        </div>
    </div>
    <ToastMessage ref="toast" />
</template>

<script>
import axios from 'axios';
import router from "../router";
import ToastMessage from "../components/ToastMessage.vue";
import { successChild } from '../stores';

export default {
    data() {
        return {
            childName: '',
            birthCert: '',
            race: '',
            DOB: '',    //Date of Birth
            POB: '',    //Place of Birth
            // age: '',
            gender: '',
            childAddress: '',
            gName: '',  //g = guardian
            gPhone: '',
            gRelation: '',
            gAddress: '',
            loading: false,

            // Error
            errorName: '',
            errorCert: '',
            errorRace: '',
            errorBirth:'',
            errorPlace:'',
            errorGender:'',
            errorAddress:'',

            errorGName: '',
            errorGPhone: '',
            errorGRelation: '',
            errorGAddress: '',
        };

    },

    mounted() {

    },

    methods: {
        uploadChildInfo() {
            const namaKanak = this.childName;
            const sijilLahir = this.birthCert;     
            const bangsa = this.race;
            const tarikhLahir = this.DOB;
            const tempatLahir = this.POB;
            const jantina = this.gender;
            const alamatKanak = this.childAddress;

            const namaPenjaga = this.gName;
            const telefonPenjaga = this.gPhone;
            const hubunganPenjaga = this.gRelation;
            const alamatPenjaga = this.gAddress;

            if (this.childName && this.birthCert && this.race && this.DOB && this.POB && this.gender && this.childAddress && this.gName && this.gPhone && this.gRelation && this.gAddress)
            {
                const child =
                {
                    namaKanak,
                    sijilLahir,
                    bangsa,
                    tarikhLahir,
                    tempatLahir,
                    jantina,
                    alamatKanak,
                    namaPenjaga,
                    telefonPenjaga,
                    hubunganPenjaga,
                    alamatPenjaga,
                    pendaftaranId: ""
                }

                const childJSON = JSON.stringify(child);
                localStorage.setItem('DataKanak', childJSON);
                successChild.value = "success";
                
                router.push('/registrationForm3');
            }
            else{
                const message = `Sila isi semua maklumat `;
                const status = "Peringatan";
                this.$refs.toast.toast(message, status, "error");

                if (this.childName === '')
                {
                    this.errorName='*Sila masukkan nama kanak-kanak'
                }
                else
                {
                    this.errorName = ''
                }
                
                if (this.birthCert === '')
                {
                    this.errorCert='*Sila masukkan sijil lahir kanak-kanak'
                }
                else
                {
                    this.errorCert = ''
                }

                if (this.race === '')
                {
                    this.errorRace='*Sila pilih bangsa'
                }
                else
                {
                    this.errorRace = ''
                }

                if (this.DOB === '')
                {
                    this.errorBirth='*Sila masukkan tarikh lahir'
                }
                else
                {
                    this.errorBirth = ''
                }

                if (this.POB === '')
                {
                    this.errorPlace='*Sila masukkan tempat lahir'
                }
                else
                {
                    this.errorPlace = ''
                }

                if (this.gender === '')
                {
                    this.errorGender='*Sila pilih jantina'
                }
                else
                {
                    this.errorGender = ''
                }

                if (this.childAddress === '')
                {
                    this.errorAddress='*Sila masukkan alamat kanak-kanak'
                }
                else
                {
                    this.errorAddress = ''
                }

                // Penjaga
                if (this.gName === '')
                {
                    this.errorGName='*Sila masukkan nama penjaga'
                }
                else
                {
                    this.errorGName = ''
                }

                if (this.gPhone === '')
                {
                    this.errorGPhone='*Sila masukkan nombor telefon penjaga'
                }
                else
                {
                    this.errorGPhone = ''
                }

                if (this.gRelation === '')
                {
                    this.errorGRelation='*Sila masukkan hubungan penjaga dengan kanak-kanak'
                }
                else
                {
                    this.errorGRelation = ''
                }

                if (this.gAddress === '')
                {
                    this.errorGAddress='*Sila masukkan alamat penjaga '
                }
                else
                {
                    this.errorGAddress = ''
                }


            }

            

            
            
        }
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