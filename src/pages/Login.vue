<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Login</h2>
      <div class="space-y-6 mt-6">
        <!-- Email Input -->
        <BaseInput
          v-model="member.email"
          :type="email"
          :placeholder="'Enter your email'"
          :label="'Email'"
          :id="'email'"
        />
        <!-- Password Input -->
        <BaseInput
          v-model="member.password"
          :label="'Password'"
          :type="password"
          :placeholder="'Enter your password'"
          :id="'password'"
        />
        <!-- Submit Button -->
        <div>
          <button
            @click="login"
            class="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
          >
            Login
          </button>
        </div>
      </div>
      <p class="mt-4 text-sm text-gray-600 text-center">
        Don't have an account?
        <router-link class="text-blue-500 hover:underline" to="/signup"
          >Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive, ref } from "vue";
import router from "../router";
import BaseInput from "../components/base/BaseInput.vue";

const member = reactive({
  email: "",
  password: "",
});

const userList = ref([]);

const login = async () => {
  const response = await axios.get("http://222.117.237.119:8111/users/list");

  userList.value = response.data;

  const matchedID = userList.value.find(
    (user) => user.email === member.email && user.pwd === member.password
  );

  console.log(member.email, member.password);
  console.log(userList.value);
  console.log(matchedID);

  if (matchedID) {
    console.log("회원 정보가 있습니다.");
    localStorage.setItem("user", JSON.stringify(matchedID));
    router.push("/home");
  } else {
    alert("이메일 또는 비밀번호가 틀렸습니다.");
  }
};
</script>
