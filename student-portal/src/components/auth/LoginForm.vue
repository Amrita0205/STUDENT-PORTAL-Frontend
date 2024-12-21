<template>
  <div class="login-form">
    <h2 class="text-2xl font-bold mb-4 text-black">Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email" class="text-black">Email:</label>
        <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
      </div>
      <div class="form-group">
        <label for="password" class="text-black">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <router-link to="/register" class="text-blue-500">Don't have an account? Register here.</router-link>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const payload = {
          email: this.email,
          password: this.password,
        }
        // Send login data to the backend (adjust the API endpoint)
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          const error = await response.json()
          throw new Error(error.message || 'Login failed!')
        }

        const result = await response.json()
        console.log('Login Successful:', result)
        // Handle successful login (e.g., save token, redirect)
        alert('Login Successful!')
      } catch (err) {
        if (err instanceof Error) {
            console.log(err)
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
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.login-form h2 {
  text-align: center;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  /* font-weight: bold; */
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
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
