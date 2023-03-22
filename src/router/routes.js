const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/home",
        component: () => import("pages/HomePage.vue"),
        name: "Home",
      },
      {
        path: "/categories",
        component: () => import("pages/CategoriesPage.vue"),
        name: "Categories",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
