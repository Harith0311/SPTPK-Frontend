<script setup>
    import { RouterLink } from "vue-router";
    import LogoHeader from '../components/LogoHeader.vue';
    import BlueButton from '../components/BlueButton.vue';
    


</script>

<template>
    <div class="registration w-screen bg-slate-400 h-full font-bold pb-4 ">
        <LogoHeader></LogoHeader>
        <div class="container m-4 pb-7 mx-auto max-w-5xl bg-blue-100 w-auto drop-shadow-2xl rounded-2xl ">
            <form v-on:submit.prevent="uploadAllInfo" >
                <ul class="flex justify-center text-center rounded-2xl">
                    <h4 class="bg-sky-200 p-2 w-64 border-solid border-2 border-sky-100 first:rounded-tl-2xl  ">Kekosongan</h4>
                    <h4 class="bg-sky-200 p-2  w-64 border-solid border-2 border-sky-100 " >Kanak-Kanak</h4>
                    <h4 class="bg-sky-100 p-2 w-64 drop-shadow-xl">Ibubapa</h4>
                    <h4 class="bg-sky-200 p-2 w-64 last:rounded-tr-2xl border-solid border-2 border-sky-100">Pengesahan</h4>
                </ul>
                <h3 class="p-6 px-8 text-xl">BAHAGIAN B: MAKLUMAT IBU BAPA</h3>
                <p class="p-2 px-8 pb-4 text-base font-medium">Masukkan maklumat bapa kanak-kanak dalam ruangan yang disediakan.</p>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Nama Penuh</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nama penuh bapa"
                        v-model="dadName"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorDadName" id="errorDadName">{{errorDadName}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Emel</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan alamat emel bapa"
                        v-model="dadEmail"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorDadEmail" id="errorDadEmail">{{errorDadEmail}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">No. Kad Pengenalan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor kad pengenalan"
                        v-model="dadIC"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorDadIC" id="errorDadIC">{{errorDadIC}}</label>


                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Status</h3>
                    <select 
                    class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm"
                    v-model="dadStatus"
                    name="dadStatus"
                    id="dadStatus">
                        <option disabled selected>Pilih status perkahwinan</option>
                        <option value="Berkahwin">Berkahwin</option>
                        <option value="Berkahwin">Bujang</option>
                        <option value="Bercerai">Bercerai</option>
                    </select>
                    
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorDadStatus" id="errorDadStatus">{{errorDadStatus}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Pekerjaan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan pekerjaan bapa"
                        v-model="dadWork"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorDadWork" id="errorDadWork">{{errorDadWork}}</label>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Pendapatan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan pendapatan bulanan bapa"
                        v-model="dadSalary"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorDadSalary" id="errorDadSalary">{{errorDadSalary}}</label>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">No. Telefon Pejabat</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor telefon pejabat"
                        v-model="dadPhone"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorDadPhone" id="errorDadPhone">{{errorDadPhone}}</label>

                <!-- Maklumat ibu -->
                <p class="p-2 pt-12 px-8 pb-4 text-base font-medium">Masukkan maklumat ibu kanak-kanak dalam ruangan yang disediakan.</p>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Nama Penuh</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nama penuh ibu"
                        v-model="momName"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorMomName" id="errorMomName">{{errorMomName}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Emel</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan alamat emel ibu"
                        v-model="momEmail"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorMomEmail" id="errorMomEmail">{{errorMomEmail}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">No. Kad Pengenalan</h3>
                     <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor kad pengenalan"
                        v-model="momIC"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorMomIC" id="errorMomIC">{{errorMomIC}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Status</h3>
                    <select 
                    class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm"
                    v-model="momStatus"
                    name="momStatus"
                    id="momStatus">
                        <option disabled selected>Pilih status perkahwinan</option>
                        <option value="Berkahwin">Berkahwin</option>
                        <option value="Berkahwin">Bujang</option>
                        <option value="Bercerai">Bercerai</option>
                        
                    </select>
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorMomStatus" id="errorMomStatus">{{errorMomStatus}}</label>
                
                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Pekerjaan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan pekerjaan ibu"
                        v-model="momWork"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorMomWork" id="errorMomWork">{{errorMomWork}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">Pendapatan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan pendapatan bulanan ibu"
                        v-model="momSalary"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorMomSalary" id="errorMomSalary">{{errorMomSalary}}</label>

                <div class="flex justify-between px-8 -mb-3">
                    <h3 class="p-2 my-2">No. Telefon Pejabat</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor telefon pejabat"
                        v-model="momPhone"
                    />
                </div>
                <label class="text-red-600 font-medium text-xs pl-[280px] " for="errorMomPhone" id="errorMomPhone">{{errorMomPhone}}</label>

                
                <div class="bg-blue-100  mx-auto py-8 px-36">
                    <BlueButton>Seterusnya</BlueButton>
                </div>
            </form>
            <div class="flex justify-start">
                <RouterLink to="/registrationForm2">
                    <button class="bg-blue-100 p-2 px-5 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from "../router";

export default {
    data() {
        return {
            dadName: '',
            dadEmail: '',
            dadIC: '',
            dadStatus: '',   
            dadWork: '',    
            dadSalary: '',
            dadPhone: '',
            momName: '',
            momEmail: '',
            momIC: '',
            momStatus: '',    
            momWork: '',    
            momSalary: '',
            momPhone: '',

            // error
            errorDadName: '',
            errorDadEmail: '',
            errorDadIC: '',
            errorDadStatus: '',
            errorDadWork: '',
            errorDadSalary:'',
            errorDadPhone: '',

            errorMomName: '',
            errorMomEmail: '',
            errorMomIC: '',
            errorMomStatus: '',
            errorMomWork: '',
            errorMomSalary:'',
            errorMomPhone: '',

        };

    },

    mounted() {
        // this.uploadDadInfo();
        // this.uploadMomInfo();
    },

    methods: {

        uploadDadInfo() {
            const nama = this.dadName;
            const emel = this.dadEmail;     
            const noKP = this.dadIC;
            const status = this.dadStatus;
            const pekerjaan = this.dadWork;
            const pendapatan = this.dadSalary;
            const telefonPejabat = this.dadPhone;
            
            if (this.dadName && this.dadEmail && this.dadIC && this.dadStatus && this.dadWork && this.dadSalary && this.dadPhone)
            {
                const dad =
                {
                    nama,
                    emel,
                    noKP,
                    status,
                    pekerjaan,
                    pendapatan,
                    telefonPejabat,
                    pendaftaranId: ""
                }

                const dadJSON = JSON.stringify(dad);
                localStorage.setItem('DataBapa', dadJSON);
            }
            else
            {
                if (this.dadName === '')
                {
                    this.errorDadName = '*Sila masukkan nama penuh bapa'
                }
                else
                {
                    this.errorDadName = ''
                }

                if (this.dadEmail === '')
                {
                    this.errorDadEmail = '*Sila masukkan alamat emel bapa'
                }
                else
                {
                    this.errorDadEmail = ''
                }

                if (this.dadIC === '')
                {
                    this.errorDadIC = '*Sila masukkan nombor kad pengenalan bapa'
                }
                else
                {
                    this.errorDadIC = ''
                }

                if (this.dadStatus === '')
                {
                    this.errorDadStatus = '*Sila masukkan status bapa'
                }
                else
                {
                    this.errorDadStatus = ''
                }

                if (this.dadWork === '')
                {
                    this.errorDadWork = '*Sila masukkan pekerjaan bapa'
                }
                else
                {
                    this.errorDadWork = ''
                }

                if (this.dadSalary === '')
                {
                    this.errorDadSalary = '*Sila masukkan jumlah pendapatan bapa'
                }
                else
                {
                    this.errorDadSalary = ''
                }

                if (this.dadPhone === '')
                {
                    this.errorDadPhone = '*Sila masukkan nombor telefon bapa'
                }
                else
                {
                    this.errorDadPhone = ''
                }
            }
            

            


        },

        uploadMomInfo() {
            const nama = this.momName;
            const emel = this.momEmail;     
            const noKP = this.momIC;
            const status = this.momStatus;
            const pekerjaan = this.momWork;
            const pendapatan = this.momSalary;
            const telefonPejabat = this.momPhone;
            
            if (this.momName && this.momEmail && this.momIC && this.momStatus && this.momWork && this.momSalary && this.momPhone)
            {
                const mom =
                {
                    nama,
                    emel,
                    noKP,
                    status,
                    pekerjaan,
                    pendapatan,
                    telefonPejabat,
                    pendaftaranId: ""
                }

                const momJSON = JSON.stringify(mom);
                localStorage.setItem('DataIbu', momJSON);
                router.push('/registrationForm4');
            }
            else
            {
                if (this.momName === '')
                {
                    this.errorMomName = '*Sila masukkan nama penuh ibu'
                }
                else
                {
                    this.errorMomName = ''
                }

                if (this.momEmail === '')
                {
                    this.errorMomEmail = '*Sila masukkan alamat emel ibu'
                }
                else
                {
                    this.errorMomEmail = ''
                }

                if (this.momIC === '')
                {
                    this.errorMomIC = '*Sila masukkan nombor kad pengenalan ibu'
                }
                else
                {
                    this.errorMomIC = ''
                }

                if (this.momStatus === '')
                {
                    this.errorMomStatus = '*Sila masukkan status ibu'
                }
                else
                {
                    this.errorMomStatus = ''
                }

                if (this.momWork === '')
                {
                    this.errorMomWork = '*Sila masukkan pekerjaan ibu'
                }
                else
                {
                    this.errorMomWork = ''
                }

                if (this.momSalary === '')
                {
                    this.errorMomSalary = '*Sila masukkan jumlah pendapatan ibu'
                }
                else
                {
                    this.errorMomSalary = ''
                }

                if (this.momPhone === '')
                {
                    this.errorMomPhone = '*Sila masukkan nombor telefon ibu'
                }
                else
                {
                    this.errorMomPhone = ''
                }
            }
        },

        uploadAllInfo(){
            this.uploadDadInfo();
            this.uploadMomInfo();
            
            
        },
    }
}
</script>