<template>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />

 
<!-- Nuvar -->
<Nuvbra/>
  <!-- search button -->
  <div class=" mx-[160px] sm:text-center my-[-650px]">
   <i class="fa fa-search absolute py-3 mx-3 text-xl" aria-hidden="true"></i>
    <input class=" p-2 px-[50px] outline-none border-2 rounded-lg" type="text" placeholder="search">
  </div>

  <!-- box -->
 <div class="my-[760px]">
<Box/>

 </div>

  
</template>                                      

<script>
import Box from './Box.vue';
import Nuvbra from './Nuvbra.vue';
export default {

  components: {
    Box,
    Nuvbra
},
  setup() {
    return {};
  },
};
</script>


