<template>
    <div class="flex flex-col min-h-screen bg-gray-200">
      <!-- Login Form Section -->
      <div class="flex-grow flex items-center justify-center">
        <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <LoginForm />
        </div>
      </div>
      <!-- Footer Section -->
      <footer class="bg-indigo-900 text-white text-center py-4">
        <p>@copyright 2024 Student Portal</p>
        <p>Amrita Kadam</p>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  import LoginForm from '../components/auth/LoginForm.vue';
  </script>
  