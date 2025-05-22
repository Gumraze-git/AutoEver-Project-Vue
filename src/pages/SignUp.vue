<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>
      <div class="space-y-1 mt-6">
        <!-- Name Input -->
        <BaseInput
          :type="'text'"
          :placeholder="'Enter your name'"
          :id="'name'"
          :label="'Name'"
          :validType="false"
        />
        <!-- Email Input -->
        <BaseInput
          :type="'text'"
          :placeholder="'Enter your email'"
          :id="'email'"
          :label="'Email'"
          :validType="true"
          :validInput="validEmail"
          :validTrue="'사용 가능한 이메일 입니다.'"
          :validFalse="'사용 불가능한 이메일 입니다.'"
          v-model="member.email"
          class="pt-4"
        />
        <!-- Password Input -->
        <BaseInput
          :type="'password'"
          :placeholder="'Create a password'"
          :id="'password'"
          :label="'Password'"
          :validType="true"
          :validInput="validPassword"
          :validTrue="'사용 가능한 비밀번호 입니다.'"
          :validFalse="'사용 불가능한 비밀번호 입니다.'"
          v-model="member.password"
        />

        <!-- Confirm Password -->
        <BaseInput
          :type="'password'"
          :placeholder="'Confirm your phone number'"
          :id="'confirm-password'"
          :label="'Confirm Password'"
          :validType="true"
          :validInput="validConfirmPassword"
          :validTrue="'비밀번호가 일치합니다.'"
          :validFalse="'비밀번호가 일치하지 않습니다.'"
          v-model="member.confirmPassword"
        />
        <!--Phone Number-->
        <BaseInput
          :type="'tel'"
          :placeholder="'Confirm your phone number'"
          :id="'phone'"
          :label="'Phone Numbers'"
          :validType="true"
          :validInput="validPhone"
          :validTrue="'사용 가능한 번호 입니다'"
          :validFalse="'사용 불가능한 번호 입니다.'"
          v-model="member.phone"
        />

        <!-- <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">
            Phone Numbers
          </label>
          <input
            v-model="member.phone"
            id="phone"
            type="tel"
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
        </div> -->
        <!-- Submit Button -->
        <div class="pt-4">
          <button
            @click="submit"
            class="w-full py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600 disabled:bg-gray-800 disabled:text-gray-400"
            :disabled="!submitState"
          >
            Sign Up
          </button>
        </div>
      </div>
      <p class="mt-4 text-sm text-gray-600 text-center">
        Already have an account?
        <router-link class="text-blue-500 hover:underline" to="/"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, reactive } from "vue";
import router from "../router";
import BaseInput from "../components/base/BaseInput.vue";

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
const validName = computed(() => member.name.length > 0);
const validEmail = useValidation(() => member.email, emailRegTest);
const validPassword = useValidation(() => member.password, passwordRegTest);
const validPhone = useValidation(() => member.phone, phoneRegTest);
const validConfirmPassword = computed(() => {
  return (
    member.confirmPassword.length > 0 &&
    member.confirmPassword === member.password
  );
});

const submitState =
  validName &&
  validEmail &&
  validPassword &&
  validConfirmPassword &&
  validPhone;

const submit = async () => {
  console.log(member.email, member.password, member.name);
  const response = await axios.post("http://222.117.237.119:8111/auth/signup", {
    email: member.email,
    pwd: member.password,
    name: member.name,
  });

  if (response.data) {
    alert("회원 가입 성공");
    router.push("/");
  } else {
    alert("회원 가입 실패");
  }
};
</script>
