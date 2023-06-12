<script setup>
    import BlueButton from '../components/BlueButton.vue';
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="bg-white h-auto w-full ml-2 p-3 rounded-2xl drop-shadow-2xl">
                <table class="list w-5/6 my-3  mx-auto">
                    <tr>
                        <th class="border-b-2 border-black py-3">Nama Aktiviti</th>
                        <th class="border-b-2 border-black py-3">Tahun</th>
                        <th class="border-b-2 border-black py-3">Kesukaran</th>
                        <th class="border-b-2 border-black py-3">Tindakan</th>
                    </tr>
            
                    <tr v-for="activity in AktivitiList" v-bind:key="activity.id">
                        <td class="aktiviti py-1 border-b-2 border-gray-100">{{ activity.namaAktiviti }}</td>
                        <td class="text-center py-1 border-b-2 border-gray-100">{{ activity.tahun }}</td>
                        <td class="text-center py-1 border-b-2 border-gray-100">{{ activity.kesukaran }}</td>
                        <td class="text-center py-1 border-b-2 border-gray-100">
                          <RouterLink v-bind:to="`/activity/update/`+activity.id">
                            <i class="fa-solid fa-pen-to-square hover:text-blue-500 px-2" ></i>
                          </RouterLink>
                          <i  class="fa-solid fa-trash hover:text-red-500 px-2 " @click="toggleDelete(activity.id)"></i>
                        </td>
                        <!-- User prompt to delete activity -->
                        <dialog
                            class="z-50 w-2/6 bg-white px-3 pt-4 top-1/3 rounded-xl"
                            v-bind:open="isOpen"
                        >
                            <div>
                                <i
                                    class="bi bi-exclamation-circle text-red text-4xl float-left mr-3"
                                ></i>

                                <h1 class="font-semibold text-lg text-center">
                                    Padam Aktiviti
                                </h1>
                                <p class="font-normal m-2 text-xs text-center">
                                    Adakah anda pasti mahu memadam rekod <br> aktiviti ini daripada senarai?
                                </p>

                                <button
                                    @click="deleteActivity(activity.id)"
                                    class="bg-gray-500 text-white py-2 px-5 rounded-xl float-right mr-1 ml-3 mt-5 font-semibold text-xs"
                                >
                                    Sahkan
                                </button>
                                <button
                                    @click="toggleDelete"
                                    class="text-black py-2 px-4 rounded-xl border-2 border-blue-300 float-right mt-5 font-semibold text-xs"
                                >
                                    Batalkan
                                </button>
                            </div>
                        </dialog>
                        <div
                            class="fixed z-40 w-full h-full rounded-2xl inset-0 bg-gray-500 bg-opacity-10"
                            v-bind:class="{ hidden: !isOpen }"
                        ></div>
                        <!-- End of prompt -->
                    </tr>
                   

                </table>
                <div class="w-1/3 mx-auto">
                    <RouterLink to="/activity/add"><BlueButton>Tambah Aktiviti</BlueButton></RouterLink>
                </div>
    </div>
    <ToastMessage ref="toast" />
</template>

<script>
    import axios from 'axios';
    import {successAddActivity, successUpdateActivity} from "../stores/index";
    import ToastMessage from "../components/ToastMessage.vue";

export default {
  data() {
    return {
      AktivitiList: [],
      updateId: "",
      isOpen: false,
      selectedActivity: null
    };
  },
  mounted() {
    
    this.fetchAktivitiData();
    
    if (successAddActivity.value === "created"){
        const message = `Aktiviti berjaya ditambah!`;
        const status = "Berjaya";
        this.$refs.toast.toast(message, status, "success");

        successAddActivity.value = "";
    } 
    else if (successUpdateActivity.value === "updated"){
        const message = `Aktiviti berjaya dikemaskini!`;
        const status = "Berjaya";
        this.$refs.toast.toast(message, status, "success");

        successUpdateActivity.value = "";
    }

    // if (successUpdateActivity.value === "updated"){
    //     const message = `Aktiviti berjaya dikemaskini!`;
    //     const status = "Berjaya";
    //     this.$refs.toast.toast(message, status, "success");

    //     successUpdateActivity.value = "";
    // };
    
  },
  methods: {
    fetchAktivitiData() {
      axios.get('http://localhost:1001/aktiviti')
        .then(response => {
          this.AktivitiList = response.data;
          console.log(this.AktivitiList);
        })
        .catch(error => {
          console.error('Error fetching aktiviti data:', error);
        });
    },

    toggleDelete(activity) {
            this.selectedActivity = activity;
            this.isOpen = !this.isOpen; // Toggle the isOpen property
    },

    async deleteActivity(activity){            
            await axios.delete(`http://localhost:1001/aktiviti/${this.selectedActivity}`)
            .then(response => {
              console.log("activity deleted successfully");
                    this.isOpen = !this.isOpen;
                    this.updateId = this.selectedActivity.id;
                    console.log(this.selectedActivity);
                    this.AktivitiList = this.AktivitiList.filter(
                        (activity) => activity.id !== this.selectedActivity
                    );
              // console.log(this.AktivitiList);
              console.log(this.updateId);
              
            })
            .catch(error=> console.log(error))
            // this.isOpen = !this.isOpen; // Toggle the isOpen property
            console.log(activity)
    }
  },
};
</script>