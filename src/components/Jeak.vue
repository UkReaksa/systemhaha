<template>
  <div class="text-center my-[200px]">
    <input
      class="bg-slate-100 p-5 outline-none rounded-sm"
      type="text"
    /><br /><br />
    <p class="">Answer is: {{ sumresult }}</p>
    <form @submit.prevent="sum" class="flex my-[305px]">
      <input
        class="border-2 outline-none p-3 w-full bg-slate-100"
        v-model="input1"
        placeholder="edit me"
      />
      <input
        class="border-2 outline-none p-3 w-full bg-slate-100"
        v-model="input2"
        placeholder="edit me"
      />
      <button @click="error" class="bg-slate-400 w-[200px] text-white">submit</button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const input1 = ref("");
    const input2 = ref("");
    const sumresult = ref("");
    
    const sum = () => {
      if (input1.value !== "" && input2.value !== "") {
        sumresult.value = parseInt(input1.value) / parseInt(input2.value);
      } else {
        alert("Please input values!");
      }
    };

    const error = () => {
      if (input1.value === "" || input2.value === "") {
        alert("Please input values!");
      }
    };

    return {
      sumresult,
      sum,
      input1,
      input2,
      error,
    };
  },
};
</script>
