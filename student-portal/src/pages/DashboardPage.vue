<template>
    <div class="full-page bg-white text-black text-center">
      <!-- <DashboardHeader /> -->
      <h1 class="text-2xl font-bold font-serif text-custom-50">Dashboard</h1>
      <p class="text-custom-20 padding-top-10">Welcome to the dashboard</p>
      <!-- <Chart /> -->
    </div>
  </template>
  
  <script setup lang="ts">
  // import DashboardHeader from '../components/dashboard/DashboardHeader.vue';
  // import Chart from '../components/dashboard/Chart.vue';
  </script>
  
  <style scoped>
  /* Ensure the div spans the entire viewport */
  .full-page {
    width: 100vw; /* Full viewport width */
    height: 100vh; /* Full viewport height */
    display: flex; /* Flexbox for centering content */
    flex-direction: column; /* Arrange items vertically */
    justify-content: center; /* Center items vertically */
    align-items: center; /* Center items horizontally */
    background-color: #fff; /* Set background color */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    box-sizing: border-box; /* Include padding/border in element's size */
  }
  .text-custom-50{
    font-size: 50px;
  }
  .text-custom-20{
    font-size: 20px;
  }
  .padding-top-10{
    padding-top: 10px;
  }
  /* Override body background color globally */
  body {
    background-color: #f2f2f2;
    margin: 0;
    padding: 0;
  }
  </style>
  