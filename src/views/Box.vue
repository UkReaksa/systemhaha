<template>
      <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />


     <div class=" gap-10 mx-[200px] columns-1  sm:columns-4 space-y-5 ">
        <router-link to="All">
        <!-- + -->
           <div class="w-[100px] h-[100px] bg-purple-600 rounded-lg cursor-pointer scale-100 ">
           <p class=" text-center items-center  py-7 text-white font-semibold"> ប្រមាណវិធី​ បូក</p>
        </div>
     </router-link> 
     
     
        <!--  -  -->
          <router-link to="Drk">
          <div class="w-[100px] h-[100px] bg-purple-600 rounded-lg cursor-pointer">
         <p class=" text-center items-center  py-7 text-white font-semibold"> ប្រមាណវិធី​ ដក</p>

        </div>
        </router-link>
        <!-- * -->
        <router-link to="Kound">
          <div class="w-[100px] h-[100px] bg-purple-600 rounded-lg cursor-pointer">
         <p class=" text-center items-center  py-7 text-white font-semibold"> ប្រមាណវិធី​ គុណ</p>

        </div>
      </router-link>
        <!-- % -->
        <router-link to="Jeak">
          <div class="w-[100px] h-[100px] bg-purple-600 rounded-lg cursor-pointer">
         <p class=" text-center items-center  py-7 text-white font-semibold"> ប្រមាណវិធី​ ចែក</p>

        </div>
      </router-link>
    </div>
 
   
</template>

<script>
import Nuvbra from './Nuvbra.vue';

export default {
    components: {
        Nuvbra
    },
    setup() {
     
        return {};
    },
    components: { Nuvbra }
}
</script>

<style lang="scss" scoped>

</style>