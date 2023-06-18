<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

import LogoHeader from '../components/LogoHeader.vue';
import BlueButton from '../components/BlueButton.vue';
import LightBlueButton from '../components/LightBlueButton.vue';

const decision = ref(null);
const errorAgreement = ref('');

const router = useRouter();

const checkAgreement = () => {
  const persetujuan = decision.value;
  
  
  if (decision.value)
  {
    if (persetujuan === 'disagree') 
    {
      errorAgreement.value = ''
      alert("Pilih setuju untuk Hantar Permohonan!");
    } 
    else if (persetujuan === 'agree') 
    {
      const daftarKanak = JSON.parse(localStorage.getItem('DataKanak'));
      const daftarBapa = JSON.parse(localStorage.getItem('DataBapa'));
      const daftarIbu = JSON.parse(localStorage.getItem('DataIbu'));
  
      const pendaftaranLulus = false;
      
      const daftarBaru = 
      {
        pendaftaranLulus,
      }
  
      // Create new registration
      axios.post('http://localhost:1001/urusPendaftaran', daftarBaru)
        .then(response => { 
          console.log(response.data);
          const registrationId = response.data.id; // Retrieve the ID from the response
          console.log('New registration ID:', registrationId);
          
          // Add registration id into the child, dad, and mom data
          daftarKanak.pendaftaranId = registrationId;
          daftarBapa.pendaftaranId = registrationId;
          daftarIbu.pendaftaranId = registrationId;
  
          // Insert the child data into registration record
          axios.post('http://localhost:1001/kanak', daftarKanak)
            .then(response => 
            {
              console.log(response.data);
              sessionStorage.setItem("idKanak", JSON.stringify(response.data));
              
            })
            .catch(error => 
            {
              console.error('Error register child info:', error);
              alert("Sijil lahir dah ada");
            });
  
          // Insert the dad data into registration record
          axios.post('http://localhost:1001/bapa', daftarBapa)
            .then(response => 
            {
              console.log(response.data);
            })
            .catch(error => 
            {
              console.error('Error register child info:', error);
              alert("Sijil lahir dah ada");
            });
  
          // Insert the mom data into registration record
          axios.post('http://localhost:1001/ibu', daftarIbu)
            .then(response => 
            {
              console.log(response.data);
            })
            .catch(error => {
              console.error('Error register child info:', error);
              alert("Sijil lahir dah ada");
            });
  
          localStorage.clear();
          router.push('/')
        })
        .catch(error => {
          console.error('Error child registration', error);
        });

    }
  } 
  else 
  {
    console.log(decision.value);
    if (decision.value === null)
    {
      errorAgreement.value = '*Sila pilih yang berkenaan'
    }
    else
    {
      errorAgreement.value = ''
    }
    
  }
}

const cancel = () => {
    alert('Permohonan akan dibatalkan')
    localStorage.clear();
    router.push('/');
}
</script>

<template>
  <div class="registration w-screen bg-slate-400 h-screen font-bold pb-4 ">
    <LogoHeader></LogoHeader>
    <div class="container m-4 pb-7 mx-auto max-w-5xl bg-blue-100 w-auto drop-shadow-2xl rounded-2xl ">
      <div>
        <ul class="flex justify-center text-center rounded-2xl">
          <h4 class="bg-sky-200 p-2 w-64 border-solid border-2 border-sky-100 first:rounded-tl-2xl">Kekosongan</h4>
          <h4 class="bg-sky-200 p-2  w-64 border-solid border-2 border-sky-100">Kanak-Kanak</h4>
          <h4 class="bg-sky-200 p-2 w-64 border-solid border-2 border-sky-100">Ibubapa</h4>
          <h4 class="bg-sky-100 p-2 w-64 last:rounded-tr-2xl drop-shadow-xl">Pengesahan</h4>
        </ul>
        <h3 class="p-6 px-8 text-xl">BAHAGIAN C: PENGESAHAN DAN PERAKUAN MAKLUMAT </h3>
        <p class="p-2 px-20 pb-4 text-base font-medium text-justify">
          Saya, dengan ini mengesahkan bahawa semua maklumat yang saya isikan dalam borang ini adalah benar, tepat, dan dapat dipertanggungjawabkan. Saya bertanggungjawab untuk mengemas kini maklumat ini sekiranya terdapat perubahan dan menjamin bahawa tidak ada maklumat palsu yang diberikan. Saya juga mengakui bahawa dengan menandatangani borang ini, saya bersetuju untuk dikenakan tindakan yang sesuai jika terdapat kesilapan atau penipuan dalam maklumat yang diberikan.
        </p>
          
        <form action="">
          <div class="px-20 p-8">
            <div class="block py-2">
              <input id="agree" v-model="decision" value="agree" name="decision" type="radio">
              <label for="agree" class="px-4">Bersetuju</label> 
            </div>
            <div class="block py-2">
              <input id="disagree" v-model="decision" value="disagree" name="decision" type="radio">
              <label for="disagree" class="px-4">Tidak Bersetuju</label>
            </div>
          </div>
        </form>
        
        <div class="bg-blue-100  mx-auto py-2 px-36">
          <div class="flex justify-center">
            <label class="text-red-600 font-medium text-sm  " for="errorAgreement" id="errorAgreement">{{errorAgreement}}</label>
          </div>
          <BlueButton class="my-2" @click="checkAgreement">Hantar Permohonan</BlueButton>
          <LightBlueButton class="my-2" @click="cancel">Batal Permohonan</LightBlueButton>
        </div>
      </div>
      <div class="flex justify-start">
        <router-link to="/registrationForm3">
          <button class="bg-blue-100 p-2 px-5 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
