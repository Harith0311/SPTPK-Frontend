<script setup>
    import { RouterLink } from "vue-router";
    import LogoHeader from '../components/LogoHeader.vue';
    import BlueButton from '../components/BlueButton.vue';
    


</script>

<template>
    <div class="registration bg-slate-400 h-full font-bold pb-4 ">
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
                
                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">Nama Penuh</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nama penuh bapa"
                        v-model="dadName"
                    />
                </div>

                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">Emel</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan alamat emel bapa"
                        v-model="dadEmail"
                    />
                </div>

                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">No. Kad Pengenalan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor kad pengenalan"
                        v-model="dadIC"
                    />
                </div>

                <div class="flex justify-between px-8">
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

                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">Pekerjaan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan pekerjaan bapa"
                        v-model="dadWork"
                    />
                </div>
                
                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">Pendapatan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan pendapatan bulanan bapa"
                        v-model="dadSalary"
                    />
                </div>
                
                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">No. Telefon Pejabat</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor telefon pejabat"
                        v-model="dadPhone"
                    />
                </div>

                <p class="p-2 pt-12 px-8 pb-4 text-base font-medium">Masukkan maklumat ibu kanak-kanak dalam ruangan yang disediakan.</p>
                
                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">Nama Penuh</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nama penuh ibu"
                        v-model="momName"
                    />
                </div>

                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">Emel</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan alamat emel ibu"
                        v-model="momEmail"
                    />
                </div>

                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">No. Kad Pengenalan</h3>
                     <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor kad pengenalan"
                        v-model="momIC"
                    />
                </div>

                <div class="flex justify-between px-8">
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
                
                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">Pekerjaan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan pekerjaan ibu"
                        v-model="momWork"
                    />
                </div>

                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">Pendapatan</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan pendapatan bulanan ibu"
                        v-model="momSalary"
                    />
                </div>

                <div class="flex justify-between px-8">
                    <h3 class="p-2 my-2">No. Telefon Pejabat</h3>
                    <input 
                        class="my-2 outline-blue-100 p-2 pl-4 w-3/4 rounded-lg drop-shadow-xl font-normal text-sm" 
                        type="text"   
                        placeholder="Masukkan nombor telefon pejabat"
                        v-model="momPhone"
                    />
                </div>
                
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


            // console.log(dad);

            // axios.post('http://localhost:1001/bapa', dad)
            // .then(response => {
            //     console.log(response.data);
            //     sessionStorage.setItem("idBapa", JSON.stringify(response.data));
            //     // alert('berjaya')
            // })
            // .catch(error => {
            //     console.error('Error register child info:', error);
            //     alert("Sijil lahir dah ada");

            // });
        },

        uploadMomInfo() {
            const nama = this.momName;
            const emel = this.momEmail;     
            const noKP = this.momIC;
            const status = this.momStatus;
            const pekerjaan = this.momWork;
            const pendapatan = this.momSalary;
            const telefonPejabat = this.momPhone;
            

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
            

            // axios.post('http://localhost:1001/ibu', mom)
            // .then(response => {
            //     console.log(response.data);
            //     sessionStorage.setItem("idIbu", JSON.stringify(response.data));
            //     // alert('berjaya')
            //     // router.push('/registrationForm4');
            // })
            // .catch(error => {
            //     console.error('Error register child info:', error);
            //     alert("Sijil lahir dah ada");

            // });
        },

        uploadAllInfo(){
            this.uploadDadInfo();
            this.uploadMomInfo();
            alert("Berjaya daftar!")
            router.push('/registrationForm4');
        },
    }
}
</script>