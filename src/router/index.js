import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import SignUp from "../pages/SignUp.vue";
import Layout from "../Layout.vue";
import Home from "../pages/Home.vue";

// 라우터 페이지 등록
const routes = [
  { path: "/", component: Login },
  { path: "/signup", component: SignUp },
  {
    path: "/home",
    component: Layout,
    children: [{ path: "", component: Home }],
  },
];

// 라우터 생성
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 라우터 내보내기
export default router;
