import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomeIndex",
    component: () => import("../views/HomeIndex.vue"),
    meta: { title: "LoveBlog" },
  },
  {
    path: "/album",
    name: "AlbumSpace",
    component: () => import("../views/AlbumSpace.vue"),
    meta: { title: "相册" },
  },
  {
    path: "/comment",
    name: "CommentSpace",
    component: () => import("../views/CommentSpace.vue"),
    meta: { title: "留言" },
  },
  {
    path: "/about",
    name: "AboutContact",
    component: () => import("../views/AboutContact.vue"),
    meta: { title: "关于" },
  },
  {
    path: '/personal',
    name: 'PersonalSpace',
    component: () => import('../views/PersonalSpace.vue'),
    meta: { title: '个人中心' }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/UserLogin.vue"),
    meta: { title: "登录" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
