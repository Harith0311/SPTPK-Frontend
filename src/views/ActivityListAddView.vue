<script setup>
import BlueButton from "../components/BlueButton.vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
        <div class="loader-wrapper">
            <div class="loader"></div>
       </div>
    </div>
    <div class="bg-white h-auto w-full ml-2 p-3 rounded-2xl drop-shadow-2xl">
        <form v-on:submit.prevent="createAktivitiData">
            <table class="w-5/6 my-3 mx-auto">
                <tr>
                    <th class="header1 p-4 border-solid border-b-2">
                        Nama Aktiviti
                    </th>
                    <th class="header1 p-4 border-solid border-b-2">Tahun</th>
                    <th class="header1 p-4 border-solid border-b-2">
                        Kesukaran
                    </th>
                </tr>
                <tr>
                    <td class="input1 w-2/3 px-4 py-2">
                        <input
                            v-model="activityName"
                            class="bg-zinc-300 p-2 outline-1 w-full rounded-lg"
                            type="text"
                            placeholder="Masukkan nama aktiviti"
                        />
                    </td>
                    <td class="input2 px-4 py-2">
                        <input
                            v-model="year"
                            class="bg-zinc-300 p-2 outline-1 rounded-lg"
                            type="text"
                            placeholder="Tahun"
                        />
                    </td>
                    <td class="input3 px-4 py-2">
                        <select
                            v-model="difficulty"
                            class="bg-zinc-300 p-2 px-4 outline-1 rounded-lg"
                            name="kesukaran"
                            id=""
                        >
                            <option value="">Pilih Kesukaran</option>
                            <option value="Mudah">Mudah</option>
                            <option value="Biasa">Biasa</option>
                            <option value="Sukar">Sukar</option>
                        </select>
                    </td>
                </tr>
            </table>
            <div class="w-1/3 mx-auto">
                <BlueButton>Tambah Aktiviti</BlueButton>
            </div>
            <div>
                <RouterLink to="/activity">
                    <button class="bg-white p-2 px-5 text-base font-bold text-zinc-600">
                        <i class="fa-solid fa-caret-left px-2"></i>Kembali
                    </button>
                </RouterLink>
            </div>
        </form>
    </div>
    <ToastMessage ref="toast" />
</template>

<script>
import axios from 'axios';
import router from '../router';
import {AktivitiList, BaseURL, successAddActivity,} from "../stores/index";
import ToastMessage from "../components/ToastMessage.vue";


export default {
    components: {
        ToastMessage
    },
    data() {
        return {
            AktivitiList: [],
            activityName: '',
            year: '',
            difficulty: '',
            loading: false,
        };
    },

    mounted(){
        this.fetchAktivitiData();
    },

    methods: {
        createAktivitiData() {
            const namaAktiviti = this.activityName;
            const tahun = this.year;
            const kesukaran = this.difficulty;

            const aktiviti =
            {
                namaAktiviti,
                tahun,
                kesukaran
            }

            this.loading = true;
            axios.post(BaseURL + 'aktiviti', aktiviti)
            .then(response => {
                this.loading = false;
                AktivitiList.value = [...AktivitiList.value, response.data];  
                successAddActivity.value = "created";
                console.log(successAddActivity.value);
                router.push('/activity');
            })
            .catch(error => {
                console.error('Error upload aktiviti data:', error);
            });
        },

        fetchAktivitiData() {
            this.loading = true;
            axios.get(BaseURL + 'aktiviti')
                .then(response => {
                    this.loading = false;
                    AktivitiList.value = [...AktivitiList.value, response.data];
                })
                .catch(error => {
                console.error('Error fetching aktiviti data:', error);
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
