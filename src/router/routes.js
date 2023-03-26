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
      {
        path: "/login",
        component: () => import("pages/LoginPage.vue"),
        name: "Login",
      },
      {
        path: "/register",
        component: () => import("pages/RegisterPage.vue"),
        name: "Register",
      },
      {
        path: "/user",
        component: () => import("pages/ProfilePage.vue"),
        name: "My uploads",
      },
      {
        path: "/privacy",
        component: () => import("pages/PrivacyPage.vue"),
        name: "Privacy",
      },
      {
        path: "/terms-and-conditions",
        component: () => import("pages/TermsPage.vue"),
        name: "Terms & Conditions",
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
