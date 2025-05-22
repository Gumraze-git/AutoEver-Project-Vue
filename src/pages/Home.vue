<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-bold text-gray-800">
          {{ userID.name }}님, 안녕하세요
        </h2>
      </div>
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter members"
            class="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
          <button
            class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const userID = JSON.parse(localStorage.getItem("user"));
</script>
