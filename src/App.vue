<template>
  <div>
  <HomeView/>
<router-view></router-view>
  </div>
</template>
<script>
import HomeView from './views/HomeView.vue';


export default {
  components: {
    HomeView,
    HomeView
},
  setup() {
    return {};
  }
};
</script>

