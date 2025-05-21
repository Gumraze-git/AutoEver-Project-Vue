<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Login</h2>
      <form class="space-y-6 mt-6">
        <!-- Email Input -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <!-- Password Input -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            class="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
          >
            Login
          </button>
        </div>
      </form>
      <p class="mt-4 text-sm text-gray-600 text-center">
        Don't have an account?
        <a href="/signup" class="text-blue-500 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import {ref} from "vue";

const email = ref('')
const password = ref('')
</script>