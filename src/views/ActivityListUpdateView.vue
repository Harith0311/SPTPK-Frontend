<script setup>
     import BlueButton from '../components/BlueButton.vue';
     import { RouterLink } from "vue-router";
    
</script>
<template>
    <div class="bg-white h-auto w-full ml-2 p-3 rounded-2xl drop-shadow-2xl">
        <form v-on:submit.prevent="kemaskiniAktiviti">
            <table class=" w-5/6 my-3 mx-auto">
                <tr>
                    <th class="header1 p-4 border-solid border-b-2">Nama Aktiviti</th>
                    <th class="header1 p-4 border-solid border-b-2">Tahun</th>
                    <th class="header1 p-4 border-solid border-b-2">Kesukaran</th>
                </tr>
                <tr>
                    <td class="input1 w-2/3 px-4 py-2"><input v-model="activity.namaAktiviti" class="bg-zinc-300 p-2 outline-1 w-full rounded-lg" type="text" placeholder="Masukkan nama aktiviti"></td>
                    <td class="input2 px-4 py-2"><input v-model="activity.tahun" class="bg-zinc-300 p-2 outline-1 rounded-lg" type="text" placeholder="Tahun"></td>
                    <td class="input3 px-4 py-2">
                        <select v-model="activity.kesukaran" class="bg-zinc-300 p-2 px-4 outline-1 rounded-lg" name="kesukaran" id="">
                            <option value="">Pilih Kesukaran</option>
                            <option value="Mudah">Mudah</option>
                            <option value="Biasa">Biasa</option>
                            <option value="Sukar">Sukar</option>
                        </select>
                    </td>
                    
                </tr>
               
            </table>
            
            <div class="w-1/3 mx-auto">
                <BlueButton>Kemaskini Aktiviti</BlueButton>
            </div>
        </form>

            <div>
                <RouterLink to="/activity">
                    <button class="bg-white p-2 px-5 text-base font-bold text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
        
        </div>
</template>

<script>
import router from '../router';
import axios from 'axios';
import { successUpdateActivity } from '../stores';

export default {
    data() {
        return{
            activityId: router.currentRoute.value.params.id,
            activity: {
                namaAktiviti: '',
                tahun: '',
                kesukaran: ''
            }

        }
    },
    
    mounted(){
        console.log(this.activityId);
        axios.get('http://localhost:1001/aktiviti/'+this.activityId)
        .then(response => {
            this.activity = response.data;

        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },
    
    methods: {
        kemaskiniAktiviti() {
            axios.put('http://localhost:1001/aktiviti/'+this.activityId, this.activity)
            .then(response => {
                const updateActivity = response.data;

                successUpdateActivity.value = "updated";
                router.push('/activity');
            })
            .catch(error => {
                console.error('Error fetching aktiviti data:', error);
            });
            
        }
    }

}

</script>