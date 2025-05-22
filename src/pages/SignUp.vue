<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
      <form class="space-y-6 mt-6">
        <!-- Name Input -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
              v-model="name"
              id="name"
              type="text"
              placeholder="Enter your name"
              class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
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
              placeholder="Create a password"
              class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <!-- Confirm Password -->
        <div>
          <label for="confirm-password" class="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
              v-model="confirmPassword"
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <!-- Submit Button -->
        <div>
          <button
              type="submit"
              class="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p class="mt-4 text-sm text-gray-600 text-center">
        Already have an account?
        <a href="/login" class="text-blue-500 hover:underline">Login</a>
      </p>
    </div>
  </div>
</template>


<script setup></script>