<script setup>
    import TopLabel from '../components/TopLabel.vue';
    import TopInput from '../components/TopInput.vue';
    import BlueButton from '../components/BlueButton.vue';
    import { ref } from 'vue';
    import LogoHeader from '../components/LogoHeader.vue';
   
</script>
<template>
    <div v-if="loading" class="fixed inset-0 flex items-center bg-black bg-opacity-50 justify-center z-50">
        <div class="loader-wrapper">
            <div class="loader"></div>
       </div>
    </div>
    <div class="register p-5 bg-blue-100 w-screen min-h-screen w-100 max-h-full font-bold " v-on:submit.prevent="register">
        <LogoHeader></LogoHeader>
        <form v-on:submit.prevent="createNewUser" class="container px-12 max-md:px-4 m-4 p-8 mx-auto drop-shadow-2xl max-w-3xl bg-blue-200 w-auto rounded-2xl">
            <div class="flex justify-start">
                <RouterLink to="/">
                    <button class="bg-blue-200 p-2 px-5 text-base max-md:text-sm max-md:px-0 max-md:mb-4 font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
            <h1 class="h1 text-2xl text-center max-md:text-base">DAFTAR SEKARANG!</h1>
            <h5 class="h5 font-normal mb-8 text-center max-md:text-xs">Masukkan maklumat pengguna dalam ruangan yang disediakan</h5>
            <!-- <TopLabel>Nama Penuh</TopLabel> -->
            <TopLabel textLabel="Nama Penuh"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 mt-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Nama Penuh Pengguna" 
                v-model="name" 
                type="text"
            />
            <label class="text-red-600 font-medium text-xs pl-[8px] " for="errorName" id="errorName">{{errorName}}</label>

            <TopLabel textLabel="Emel"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 mt-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Emel Pengguna" 
                v-model="email" 
                type="email"
            />
            <label class="text-red-600 font-medium text-xs pl-[8px] " for="errorEmail" id="errorEmail">{{errorEmail}}</label>
            
            <TopLabel textLabel="Nombor Kad Pengenalan"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 mt-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Nombor Kad Pengenalan" 
                v-model="noIC" 
                type="text"
            />
            <label class="text-red-600 font-medium text-xs pl-[8px] " for="errorIC" id="errorIC">{{errorIC}}</label>

            <TopLabel textLabel="Peranan"/>
            <select 
                class="inputTop w-full  outline-blue-100 p-3 px-6 mt-2 drop-shadow-lg rounded-lg placeholder:font-normal"  
                v-model="role" 
                type="text"
            >
                <option value="" disabled>Pilih peranan</option>
                <option value="Staf Taska">Staf Taska</option>
                <option value="Ibubapa">Ibubapa</option>
            </select>
            <label class="text-red-600 font-medium text-xs pl-[8px] " for="errorRole" id="errorRole">{{errorRole}}</label>
          
            <TopLabel textLabel="Kata Laluan"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 mt-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Kata Laluan" 
                v-model="password" 
                type="password"
            />
            <label class="text-red-600 font-medium text-xs pl-[8px] " for="errorPass" id="errorPass">{{errorPass}}</label>
            <label class="text-red-600 font-medium text-xs pl-[8px] " for="passwordValidation" id="passwordValidation">{{passwordValidation}}</label>
            
            <TopLabel textLabel="Pengesahan Kata Laluan"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 mt-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Sahkan Kata Laluan" 
                v-model="confirmPassword" 
                type="password"
            />
            <label class="text-red-600 font-medium text-xs pl-[8px] " for="errorConfirmPass" id="errorConfirmPass">{{errorConfirmPass}}</label>

            
            <TopLabel textLabel="Kod Pengesahan"/>
            <input 
                class="inputTop w-full outline-blue-100 p-3 px-6 mt-2 drop-shadow-lg rounded-lg placeholder:font-normal" 
                placeholder="Masukkan Kod Pengesahan" 
                v-model="code" 
                type="text"
            />
            <label class="text-red-600 font-medium text-xs pl-[8px] " for="errorCode" id="errorCode">{{errorCode}}</label>
    
            <h5 class="pengesahan text-right font-medium text-xs mb-10 max-md:text-[11px]">* Dapatkan kod pengesahan melalui mesej Whatsapp yang dihantar oleh pihak TASKA</h5>
            
            <BlueButton>Daftar Masuk</BlueButton>
        </form>
    </div>
    <dialog class="bg-blue-50 p-4 drop-shadow-xl rounded-xl" id="dialog">
        <form method="dialog">
            <img class="w-10 h-10 m-auto my-2" src="/warning.png" alt="">
            <h3>Pengesahan Kata Laluan Tidak Sepadan</h3>
            <button class="w-full bg-blue-300 p-2 px-5 mt-2 ">Okay</button>
        </form>
    </dialog>
</template>

<script>
    import axios from 'axios';
    import router from '../router';
import { BaseURL } from '../stores';

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
                child: '',

                // error
                errorName: '',
                errorEmail: '',
                errorIC: '',
                errorRole: '',
                errorPass: '',
                errorConfirmPass: '',
                errorCode: '',
                passwordValidation: '',
                loading: false,


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

            
                

                if (this.role && this.name && this.email && this.noIC && this.password && this.confirmPassword && this.code)
                {
                    this.errorName = '';
                    this.errorEmail = '';
                    this.errorIC = '';
                    this.errorRole = '';
                    this.errorPass = '';
                    this.errorConfirmPass = '';
                    this.errorCode = '';
                    
                    // Check if the password meets the required criteria
                    // const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
                    
                    if (!/(?=.*[A-Z])(?=.*[0-9]).{8,}/.test(this.password)) {
                        this.errorPass = '*Kata laluan perlulah mengandungi huruf kecil, huruf besar, nombor, simbol, dan lebih daripada 8 karakter';
                    }   
                    else 
                    {
                        this.errorPass = '';

                        if (this.password !== this.confirmPassword)
                        {
                            this.errorConfirmPass = '*Pengesahan kata laluan tidak sepadan'
                        }
                        else
                        {
                            this.loading = true;
                            // Dapatkan list pendaftaran yang telah diluluskan
                            axios.get(BaseURL + 'urusPendaftaran/lulus')
                            .then(response => {
                                console.log(response.data);
                                this.loading = false;
                                this.child = response.data.filter(item => item.kodPengesahan === this.code);
                                        
                                console.log(this.child);
            
                                // Check jika kod pengesahan tiada dalam sistem
                                if (this.child.length < 1)
                                {
                                    alert('kod pengesahan tidak sah')
                                }
                                // Check jika kod pengesahan wujud
                                else if(this.child.length > 0)
                                {
                                    alert('kod pengesahan sah')
            
                                    const pengguna = 
                                    {
                                        peranan,
                                        nama,
                                        emel,
                                        noKP,
                                        kataLaluan,
                                        kodPengesahan
                                    }
            
                                    // Check kata laluan
                                    if (kataLaluan !== sahKataLaluan) {
                                        console.error('Password and confirm password do not match');
                                        alert('Kata laluan tidak sepadan!');
                                        // You can display an error message or perform any desired action
                                    } else {
                                        this.loading = true;
                                        // Password is valid, proceed with the API call
                                        axios.post(BaseURL + 'pengguna', pengguna)
                                        .then(response => {
                                            this.loading = false;
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
                            })
                            .catch(error => {
                            // alert('kod pengesahan tidak sah')
                            console.error('Error fetching child data:', error);
                            });
                        }

                    }
                    
                    
                        
                     
                    
                    

                }
                else
                {
                    if (this.name === '')
                    {
                        this.errorName = '*Sila masukkan nama pengguna'
                    }
                    else
                    {
                        this.errorName = ''
                    }

                    if (this.email === '')
                    {
                        this.errorEmail = '*Sila masukkan alamat emel pengguna'
                    }
                    else
                    {
                        this.errorEmail = ''
                    }

                    if (this.noIC === '')
                    {
                        this.errorIC = '*Sila masukkan nombor kad pengenalan pengguna'
                    }
                    else
                    {
                        this.errorIC = ''
                    }

                    if (this.role === '')
                    {
                        this.errorRole = '*Sila masukkan peranan pengguna'
                    }
                    else
                    {
                        this.errorRole = ''
                    }

                    if (this.password === '')
                    {
                        this.errorPass = '*Sila masukkan kata laluan pengguna'
                    }
                    else
                    {
                        this.errorPass = ''
                    }

                    if (this.confirmPassword === '')
                    {
                        this.errorConfirmPass = '*Sila sahkan kata laluan pengguna'
                    }
                    else
                    {
                        this.errorConfirmPass = ''
                    }

                    if (this.code === '')
                    {
                        this.errorCode = '*Sila masukkan kod pengesahan'
                    }
                    else
                    {
                        this.errorCode = ''
                    }
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
        background-image: url('/vue.svg');
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