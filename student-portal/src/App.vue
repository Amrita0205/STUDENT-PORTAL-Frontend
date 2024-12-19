<!-- // 'npm run dev will' run this file
 -->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MyFirstComponent from './components/MyFirstComponent.vue'
import SecondComponent from './components/second.vue'
</script>

<template>
  <div>
  

  <!-- <RouterView /> -->
  <MyFirstComponent />
  <SecondComponent />
  </div>
</template>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
</style>
