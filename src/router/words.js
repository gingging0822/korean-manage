// 单词模块
const Home = () => import("@/views/Home.vue");

export default [
  {
    path: "/word",
    name: "单词管理",
    meta:{
      layout: 'no'
    },
    component: Home
  },
  {
    path: "/word/detail/:id",
    name: "单词详情",
    component: Home
  },
  {
    path: "/word/edit/:id",
    name: "单词编辑",
    component: Home
  }
];
