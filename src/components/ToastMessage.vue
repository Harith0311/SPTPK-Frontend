<template >
    <template class="flex justify-center">
    <transition name="toast">
        <!-- v-if="isVisible" -->
    
        <div v-if="isVisible" class="fixed top-6  z-50"> 
            <div :class="toastClasses" class="w-64">
                 <div class="flex items-center">
              <span class="mr-2">
                <!-- Add appropriate icon based on the status -->
                <i v-if="type === 'success'" class="fa-solid fa-circle-check text-3xl Z text-black"></i>
                <i v-else-if="type === 'error'" class="fa-solid fa-circle-xmark text-3xl text-red-500"></i>
                <i v-else class="fa-sharp fa-solid fa-circle-info text-3xl "></i>
                
              </span>
              <div class="ml-2">
                <!-- Display the status text -->
                <div class="text-sm font-medium">{{ message.status }}</div>
                <!-- Display the message text -->
                <div class="mb-1 font-light">{{ message.text }}</div>
              </div>
            </div>
            </div>
        </div>
    
     </transition>
    </template>
 </template>
 
 <style>
    /* enter transitions */
    .toast-enter-from {
     opacity: 0;
     transform: translateY(-100%);
   }
   .toast-enter-to {
     opacity: 1;
     transform: translateY(0);
   }
   .toast-enter-active {
     transition: all 0.3s ease;
   }
   
   /* leave transitions */
   .toast-leave-from {
     opacity: 1;
     transform: translateY(0);
   }
   .toast-leave-to {
     opacity: 0;
     transform: translateY(-100%);
   }
   .toast-leave-active {
     transition: all 0.3s ease;
   }
 </style>
 
 <script>
     export default
     {
         data()
         {
             return{
                 isVisible:false,
                 message:{
                     text:'',
                     status:'',
                 },
                 type:'',
                 
             }
         },
         computed:{
             toastClasses()
             {
                 return[
                     'px-4 py-4 rounded-lg  text-sm font-medium drop-shadow-2xl',
                     {
                         'bg-[#69d67b]': this.type==='success',
                         'bg-[#ffd0cb]': this.type === 'error',
                         'bg-[#fceec7] ': this.type === 'info' 
                     },
                 ]
             }
         },
         methods:{
             toast(message,status, type='info')
             {
                 this.message={
                     text:message,
                     status:status,
                 }
                 this.type = type,
                 this.isVisible = true
                 setTimeout(()=>{
                     this.isVisible = false
                 }, 3000)
             }
         }
 
     }
 </script>