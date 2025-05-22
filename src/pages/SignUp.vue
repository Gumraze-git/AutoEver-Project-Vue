<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
      <form class="space-y-1 mt-6">
        <!-- Name Input -->
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            v-model="member.name"
            id="name"
            type="text"
            placeholder="Enter your name"
            class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>
        <!-- Email Input -->
        <div class="pt-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            v-model="member.email"
            @input=""
            id="email"
            type="email"
            placeholder="Enter your email"
            class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
          <div class="flex justify-end m-0 p-0">
            <p
              class="text-sm mt-1"
              :class="validEmail ? 'text-green-500' : 'text-red-500'"
            >
              {{
                validEmail
                  ? "사용 가능한 이메일 입니다."
                  : "사용 불가능한 이메일 입니다."
              }}
            </p>
          </div>
        </div>
        <!-- Password Input -->
        <div class="pt-0">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            v-model="member.password"
            id="password"
            type="password"
            placeholder="Create a password"
            class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
          <div class="flex justify-end m-0 p-0">
            <p
              class="text-sm mt-1"
              :class="validPassword ? 'text-green-500' : 'text-red-500'"
            >
              {{
                validPassword
                  ? "사용 가능한 비밀번호 입니다."
                  : "사용 불가능한 비밀번호 입니다."
              }}
            </p>
          </div>
        </div>
        <!-- Confirm Password -->
        <div>
          <label
            for="confirm-password"
            class="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            v-model="member.confirmPassword"
            id="confirm-password"
            type="password"
            placeholder="Confirm your password"
            class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
          <div class="flex justify-end m-0 p-0">
            <p
              class="text-sm mt-1"
              :class="validConfirmPassword ? 'text-green-500' : 'text-red-500'"
            >
              {{
                validConfirmPassword
                  ? "비밀번호가 일치합니다."
                  : "비밀번호가 일치하지 않습니다."
              }}
            </p>
          </div>
        </div>
        <!--Phone Number-->
        <div>
          <label
            for="confirm-password"
            class="block text-sm font-medium text-gray-700"
          >
            Phone Numbers
          </label>
          <input
            v-model="member.phone"
            id="confirm-password"
            type="password"
            placeholder="Confirm your phone number"
            class="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
          />
          <div class="flex justify-end m-0 p-0">
            <p
              class="text-sm mt-1"
              :class="validPhone ? 'text-green-500' : 'text-red-500'"
            >
              {{
                validPhone
                  ? "사용 가능한 번호 입니다."
                  : "사용 불가능한 번호 입니다."
              }}
            </p>
          </div>
        </div>
        <!-- Submit Button -->
        <div class="pt-4">
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

<script setup>
import { ref, computed, onMounted, reactive } from "vue";

// 정규식 패턴
const emailRegTest = /.*/;
const passwordRegTest = /.*/;
const phoneRegTest = /.*/;

const member = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
});

// 이메일, 비밀번호, 전화번호 등의 정규식 검사 객체
const useValidation = (targetRef, regPattern) => {
  return computed(() => {
    const value = targetRef();
    return value.length > 0 && regPattern.test(value);
  });
};

// 정규식 검사 결과 객체(return: bool)
const validEmail = useValidation(() => member.email, emailRegTest);
const validPassword = useValidation(() => member.password, passwordRegTest);
const validPhone = useValidation(() => member.phone, phoneRegTest);
const validConfirmPassword = computed(() => {
  return (
    member.confirmPassword.length > 0 &&
    member.confirmPassword === member.password
  );
});
</script>
