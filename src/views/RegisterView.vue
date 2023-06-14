<script setup>
    import TopLabel from '../components/TopLabel.vue';
    import TopInput from '../components/TopInput.vue';
    import BlueButton from '../components/BlueButton.vue';
    import { ref } from 'vue';
    import LogoHeader from '../components/LogoHeader.vue';
   
</script>
<template>
    
    <div class="register p-5 bg-blue-50 w-screen min-h-screen w-100 max-h-full font-bold text-center" v-on:submit.prevent="register">
        <LogoHeader></LogoHeader>
        <form v-on:submit.prevent="createNewUser" class="container px-12 m-4 p-8 mx-auto drop-shadow-2xl max-w-3xl bg-blue-100 w-auto rounded-2xl">
            <div class="flex justify-start">
                <RouterLink to="/">
                    <button class="bg-blue-100 p-2 px-5 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
            <h1 class="h1 text-2xl">DAFTAR SEKARANG!</h1>
            <h5 class="h5 font-normal mb-8">Masukkan maklumat pengguna dalam ruangan yang disediakan</h5>
            <!-- <TopLabel>Nama Penuh</TopLabel> -->
            <TopLabel textLabel="Nama Penuh"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Nama Penuh Pengguna" 
                v-model="name" 
                type="text"
            />
            <TopLabel textLabel="Emel"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Emel Pengguna" 
                v-model="email" 
                type="email"
            />
            
            <TopLabel textLabel="Nombor Kad Pengenalan"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Nombor Kad Pengenalan" 
                v-model="noIC" 
                type="text"
            />

            <TopLabel textLabel="Peranan"/>
            <select 
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal"  
                v-model="role" 
                type="text"
            >
                <option value="">Pilih peranan</option>
                <option value="Staf Taska">Staf Taska</option>
                <option value="Ibubapa">Ibubapa</option>
            </select>
          
            <TopLabel textLabel="Kata Laluan"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Kata Laluan" 
                v-model="password" 
                type="password"
            />
            
            <TopLabel textLabel="Pengesahan Kata Laluan"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Sahkan Kata Laluan" 
                v-model="confirmPassword" 
                type="password"
            />

            <!-- <p v-if="confirmPassword !== ''" :class="{'text-green-500': isPasswordMatch, 'text-right text-red-500': !isPasswordMatch}">
                {{ isPasswordMatch ? 'Password Match' : 'Password Mismatch' }}
            </p> -->
            
            <TopLabel textLabel="Kod Pengesahan"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 my-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Kod Pengesahan" 
                v-model="code" 
                type="text"
            />
    
            <h5 class="pengesahan text-right font-medium text-xs mb-10">* Dapatkan kod pengesahan melalui emel yang dihantar oleh pihak TASKA</h5>
            <!-- <TopLabel textLabel="Gambar Profil"/> -->
            <!-- <input type="file" class="file:block file:bg-orang file:rounded-full file:w-10 file:h-10 file:cursor-pointer "> -->
            
    
            <!-- <div class="upload m-4">
                <img src="../assets/hacker.png" width = 100 height = 100>
                <div class="round">
                    <input type="file">
                    <img src="../assets/camera.png" width = 150 height = 150>
                </div>
            </div> -->
            <BlueButton>Daftar Masuk</BlueButton>
        </form>
    </div>
    <dialog class="bg-blue-50 p-4 drop-shadow-xl rounded-xl" id="dialog">
        <form method="dialog">
            <img class="w-10 h-10 m-auto my-2" src="../assets/warning.png" alt="">
            <h3>Pengesahan Kata Laluan Tidak Sepadan</h3>
            <button class="w-full bg-blue-300 p-2 px-5 mt-2 ">Okay</button>
        </form>
    </dialog>
</template>

<script>
    import axios from 'axios';
    import router from '../router';

    export default {
        data() {
            return {
                role: '',
                name: '',
                email: '',
                noIC: '',
                password: '',
                confirmPassword: '',
                code: '',

            }
        },

        mounted(){

        },

        methods: {
            createNewUser() {
                const peranan = this.role;
                const nama = this.name;
                const emel = this.email;
                const noKP = this.noIC;
                const kataLaluan = this.password;
                const sahKataLaluan = this.confirmPassword
                const kodPengesahan = this.code;


                
                const pengguna = 
                {
                    peranan,
                    nama,
                    emel,
                    noKP,
                    kataLaluan,
                    kodPengesahan
                }

                if (kataLaluan !== sahKataLaluan) {
                    console.error('Password and confirm password do not match');
                    alert('Kata laluan tidak sepadan!');
                    // You can display an error message or perform any desired action
                } else {
                    // Password is valid, proceed with the API call
                    axios.post('http://localhost:1001/pengguna', pengguna)
                    .then(response => {
                        console.log(response.data);
                        alert('Selamat datang!');
                        router.push('/login');
                    })
                    .catch(error => { 
                        console.error('Error create new user: ', error);
                        alert('Pendaftaran tidak berjaya!');
                    })
                }
                    
                

               
            }

        }
    }

</script>

<style>
    .orang{
        border-radius: 9999px;
        width: 50px;
        height: 50px;
        background-image: url('../assets/vue.svg');
        color: aqua; 
    }

    .upload{
  width: 100px;
  position: relative;
  /* margin: auto; */
}

.upload img{
  border-radius: 50%;
  border: 4px solid #3d3d3d;
}

.upload .round{
  position: absolute;
  bottom: 0;
  right: 0;
  background: #00B4FF;
  width: 32px;
  height: 32px;
  line-height: 33px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
}

.upload .round input[type = "file"]{
  position: absolute;
  transform: scale(2);
  opacity: 0;
}

input[type=file]::-webkit-file-upload-button{
    cursor: pointer;
}


</style>