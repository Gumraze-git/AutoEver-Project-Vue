<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-6 text-center">
      AutoEver Web/App Members
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="flex items-center p-4 bg-white shadow-md rounded-lg"
        v-for="(item, index) in allMembers"
        :key="index"
      >
        <div
          class="flex justify-center items-center h-[80px] w-[80px] bg-slate-300 rounded-md"
        >
          <p class="text-gray-500">image</p>
        </div>
        <div class="ml-4">
          <p class="text-lg font-semibold text-gray-800">
            {{ item.name }}
          </p>
          <p class="text-sm text-gray-600">
            {{ item.email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const allMembers = ref([]);

const fetchMembers = async () => {
  try {
    const response = await axios.get("http://222.117.237.119:8111/users/list");
    allMembers.value = response.data;
  } catch (error) {
    console.error("Error fetching members:", error);
  }
};

onMounted(() => {
  fetchMembers();
});
</script>
