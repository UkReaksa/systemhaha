<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />

    <!-- nuvbra -->
    <div>
     <Nuvbra/>
    </div>
    <!-- all -->
 <div class="  sm:text-center my-[-650px]">
  <!-- search button -->
  <div class=" mx-[160px]">
   <i class="fa fa-search absolute py-3 mx-3 text-xl" aria-hidden="true"></i>
    <input class=" p-2 px-[50px] outline-none border-2 rounded-lg" type="text" placeholder="search">
  </div>
  <!-- box and oder -->

  <div class="my-[50px]">
    <div class=" mx-[170px] my-[50px] md:mx-[400px] xl:mx-[600px]">
           <h3 class="w-[300px]">ជ្រើសរើសមុខងារនីមួយៗដើម្បីប្រើ!</h3>

    </div>
          
    <!-- box -->
   <Box></Box>
<!--  -->

  </div>
     
    </div>

</template>

<script>
import Nuvbra from "./Nuvbra.vue";
import Box from "./Box.vue"

export default {
  components: {
    Nuvbra,
    Box
  
  },
  setup() {
    return {};
  },
};
</script>

<style >
@media screen and (max-width: 778px) {
   .boxflex{
flex-wrap: wrap;
   }
}
</style>
