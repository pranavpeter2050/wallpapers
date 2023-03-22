<template>
  <q-layout view="hhr lpR fFr">
    <q-header reveal bordered class="bg-white text-primary" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          <q-avatar font-size="32px" icon="wallpaper">
            <!-- <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/null/external-wallpaper-stay-home-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
            /> -->
          </q-avatar>
          Wallpapers
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <div class="">
        <div class="q-gutter-y-md">
          <q-tabs v-model="tab" class="text-primary">
            <q-route-tab to="/page1" label="Home" />
            <q-route-tab to="/page2" label="Categories" />
          </q-tabs>
        </div>
      </div>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
