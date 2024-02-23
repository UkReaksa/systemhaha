<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />

    <!-- nuvbra -->
    <div>
     <Nuvbra/>
    </div>
 <div class=" text-center my-[-500px]">
      <h3>hello This is a Homeview!</h3>
    </div>





  <!-- button search -->
    <div class=" text-center my-[-570px] sticky top-0">
   <div class="flex justify-end my-[-680px] mr-10">
      <!-- search -->
      <div class="p-3 mr-[370px]">
        <i class="fa-solid fa-magnifying-glass relative mx-[-40px] text-xl"></i>
        <input
          class="p-2 w-[400px] outline-none px-[60px] border-2 border-solid-black-500 rounded-lg"
          type="text"
          placeholder="Sreach"/>
        <button
          class="mx-[10px] w-[70px] h-[40px] rounded-lg bg-purple-600 border-none text-white font-semibold hover:bg-purple-400"
        >
          search
        </button>
      </div>
      <!-- login -->
      <button
        class="my-[20px] w-[70px] h-[40px] rounded-lg bg-purple-600 border-none text-white font-semibold hover:bg-purple-400"
      >
        Login
      </button>
    </div>
 
    </div>
   
   
</template>

<script>
import Nuvbra from "./Nuvbra.vue";
import Sarch from "./Sarch.vue";

export default {
  components: {
    Nuvbra,
    Sarch,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
