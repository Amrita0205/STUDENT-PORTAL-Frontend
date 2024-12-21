<!-- // 'npm run dev will' run this file
 -->
<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
// import MyFirstComponent from './components/MyFirstComponent.vue'

import './assets/base.css'
import './assets/main.css'
</script>

<template>
  <div>
    <router-view />
    <!-- Without this you will not be able to do routing -->
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
