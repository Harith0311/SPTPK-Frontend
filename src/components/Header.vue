<script setup>
    import { ref } from "@vue/reactivity";
    import { RouterLink } from "vue-router";
</script>

<template>
    <div class="header flex justify-between">
         <div class="flex">
             <img src="../assets/permata-logo.png" alt="permata" class="h-14 w-auto m-4 max-md:h-13">
             <div class=" h-14 my-4 w-28 font-semibold text-red-600 text-sm py-2 max-md:py-0 max-md:font-medium max-md:w-20 ">
                Taska Permata Keluarga
             </div>
         </div>
         <div class="flex my-auto mr-4">
             <img class="w-10 h-10 rounded-full mx-3  border-solid border-2 border-black" src="../assets/hacker.png" alt="">
             <div>
                <div class="info-name px-2 font-bold max-md:hidden">{{currentUser.nama}}</div>
                <p class="info-name text-sm text-blue-900 px-2 font-normal max-md:hidden">{{ currentUser.peranan }}</p>
            </div>
                
         </div>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        data() {
            return {
                currentUser: '',
                userId: '',
            }
        },
        
        mounted() {
            this.fetchCurrentUser();
        },

        methods: {

            fetchCurrentUser() {
                this.userId = JSON.parse(sessionStorage.getItem('id'));
                console.log(this.userId);

                axios.get('http://localhost:1001/pengguna/' + this.userId)
                    .then(response => {
                        this.currentUser = response.data;
                        console.log(response.data);
                        console.log(this.currentUser);
                        
                    })
                    .catch(error => {
                        console.error('Error fetching registration data:', error);
                    });

            }
        }
    }



</script>