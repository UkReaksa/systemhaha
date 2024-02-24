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
 <div class=" text-center my-[-650px]">
  <!-- search button -->
  <div>
   <i class="fa fa-search absolute py-3 mx-3 text-xl" aria-hidden="true"></i>
    <input class=" p-2 px-[50px] outline-none border-2 rounded-lg" type="text" placeholder="search">
  </div>
  <!-- box and oder -->

  <div class="my-[50px] sm:text-green-500">
          <h3>ជ្រើសរើសមុខងារនីមួយៗដើម្បីប្រើ!</h3>
          
    <!-- box -->
    <div class="boxflex">
       <div class="my-[40px] justify-center">
          <div class=" gap-10 flex justify-center ">
           <div class="w-[100px] h-[100px] bg-purple-600">
            hi
        </div>
          <div class="w-[100px] h-[100px] bg-purple-600">
            hi
        </div>
          <div class="w-[100px] h-[100px] bg-purple-600">
            hi
        </div>
          <div class="w-[100px] h-[100px] bg-purple-600">
            hi
        </div>
    </div>
        </div>

    </div>
       








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
