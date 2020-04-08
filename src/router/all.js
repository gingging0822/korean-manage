import Home from "@/views/Home.vue";
import WordModule from "./words";

export default [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "BasicLayout"
    },
    component: Home
  },
  {
    path: "/about",
    name: "About",
    meta: {
      layout: "BlankLayout"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  },
  // 单词模块
  ...WordModule,
  {
    // 其他页面跳转404页面
    path: "*",
    redirect: { name: "About" }
  }
];
