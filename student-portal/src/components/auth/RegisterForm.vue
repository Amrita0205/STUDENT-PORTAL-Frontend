<template>
    <div class="register-form">
      <h2 class="text-2xl font-bold mb-4">Register</h2>
      <form @submit.prevent="handleSubmit">
        <!-- Name Field -->
        <div class="form-group">
          <label for="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            v-model="name" 
            placeholder="Enter your full name" 
            required 
          />
        </div>
  
        <!-- Email Field -->
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="Enter your email" 
            required 
          />
        </div>
  
        <!-- Password Field -->
        <div class="form-group">
          <label for="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Enter your password" 
            required 
          />
        </div>
  
        <!-- Confirm Password Field -->
        <div class="form-group">
          <label for="confirm-password">Confirm Password:</label>
          <input 
            type="password" 
            id="confirm-password" 
            v-model="confirmPassword" 
            placeholder="Confirm your password" 
            required 
          />
        </div>
        <router-link to="/login" class="text-blue-500">Already have an account? Login here.</router-link>   
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'RegisterForm',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    },
    methods: {
      async handleSubmit() {
        try {
          // Validate passwords match
          if (this.password !== this.confirmPassword) {
            throw new Error('Passwords do not match!')
          }
  
          const payload = {
            name: this.name,
            email: this.email,
            password: this.password,
          }
  
          // Send registration data to the backend (adjust the API endpoint)
          const response = await fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
  
          if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || 'Registration failed!')
          }
  
          const result = await response.json()
          console.log('Registration Successful:', result)
          alert('Registration Successful! Please login.')
          // Optionally redirect to login page
        } catch (err) {
          if (err instanceof Error) {
            alert(err.message) // TypeScript now recognizes 'message' as a valid property
          } else {
            console.error('An unknown error occurred', err)
          }
        }
      },
    },
  }
  </script>
  
  <style scoped>
  .register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  .register-form h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #218838;
  }
  </style>
  