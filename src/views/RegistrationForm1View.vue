<script setup>
    import { RouterLink } from "vue-router";
    import LogoHeader from '../components/LogoHeader.vue';
    import BlueButton from '../components/BlueButton.vue';

</script>

<template>
    <div class="registration bg-slate-400 w-screen h-screen pb-12 font-bold ">
        <LogoHeader></LogoHeader>
        <div class="container m-4 pb-7 mx-auto max-w-5xl bg-blue-100 w-auto drop-shadow-2xl rounded-2xl">
            <div >
                <ul class="flex justify-center text-center rounded-2xl">
                    <h4 class="bg-sky-100 p-2 w-64 first:rounded-tl-2xl drop-shadow-xl ">Kekosongan</h4>
                    <h4 class="bg-sky-200 p-2  w-64 border-solid border-2 border-sky-100" >Kanak-Kanak</h4>
                    <h4 class="bg-sky-200 p-2 w-64 border-solid border-2 border-sky-100">Ibubapa</h4>
                    <h4 class="bg-sky-200 p-2 w-64 last:rounded-tr-2xl border-solid border-2 border-sky-100">Pengesahan</h4>
                </ul>
                <h3 class="p-6 px-8 text-xl">JUMLAH KEKOSONGAN KANAK-KANAK</h3>
                <div class="flex bg-blue-100 justify-around px-8 pb-4">
                    <div class="bg-white w-5/12 p-3 rounded-xl drop-shadow-lg">
                        <h1 class="text-lg p-2">Jumlah kanak-kanak semasa</h1>
                        <div class="flex justify-end">
                            <h1 class="text-3xl text-yellow-500 px-4">30</h1>
                            <i class="fa-solid fa-child text-4xl px-4"></i>
                        </div>
                    </div>
                    <div class="bg-white w-5/12 p-3 rounded-xl drop-shadow-lg">
                        <h1 class="text-lg p-2">Kapasiti kanak-kanak di Taska</h1>
                        <div class="flex justify-end">
                            <h1 class="text-3xl text-yellow-500 px-4">30</h1>
                            <i class="fa-solid fa-child text-4xl px-4"></i>
                        </div>
                    </div>
                </div>
                <div class="bg-blue-100 py-2 pb-8 px-8">
                    <div class="bg-white w-11/12 rounded-xl  px-10 mx-auto drop-shadow-lg">
                        <h3 class="py-4 text-lg">Kuota kekosongan kanak-kanak</h3>
                        <div class="flex justify-around py-4  ">
                            <div class="bg-sky-200 w-5/12 rounded-xl p-4">
                                <h3>Kekosongan bagi tahun semasa</h3>
                                <div class="flex justify-end">
                                    <h1 class="text-3xl text-green-600 px-4">30</h1>
                                    <i class="fa-solid fa-child text-4xl px-4"></i>
                                </div>
                            </div>
                            <div class="bg-sky-200 w-5/12 rounded-xl p-4">
                                <h3>Kekosongan bagi tahun seterusnya</h3>
                                <div class="flex justify-end">
                                    <h1 class="text-3xl text-green-600 px-4">30</h1>
                                    <i class="fa-solid fa-child text-4xl px-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-blue-100  mx-auto py-2 px-36">
                    <RouterLink to="/registrationForm2"><BlueButton>Daftar Sekarang</BlueButton></RouterLink>
                </div>
                
            </div>
            <div class="flex justify-start">
                <RouterLink to="/">
                    <button class="bg-blue-100 p-2 px-5 text-base font-bold hover:text-zinc-600"><i class="fa-solid fa-caret-left px-2 "></i>Kembali</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>