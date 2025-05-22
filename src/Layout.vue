<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div class="container mx-auto flex items-center justify-between">
        <router-link class="hover:underline" to="/home">
          <h1 class="text-xl font-bold">LOGO</h1>
        </router-link>
        <nav class="flex space-x-4">
          <router-link class="hover:underline" to="/members"
            >Members</router-link
          >
          <div class="flex gap-4">
            <span>NAME</span>
            <button class="hover:underline">로그아웃</button>
          </div>
          <div class="flex gap-4">
            <button class="hover:underline">로그인</button>
          </div>
        </nav>
      </div>
    </header>
    <main class="flex-1 container mx-auto px-4 py-6 content-center">
      <router-view />
    </main>

    <footer class="bg-gray-100 text-gray-600 text-sm py-4 mt-8 border-t">
      <div class="container mx-auto text-center">
        © 2025 MyApp. All rights reserved.
      </div>
    </footer>
  </div>
</template>
