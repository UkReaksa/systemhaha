<template>
   
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
 
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

