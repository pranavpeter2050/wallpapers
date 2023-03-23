<template>
  <q-layout view="hhr lpR fFr">
    <q-header reveal bordered class="bg-white text-primary" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold" to="/home">
          <q-avatar font-size="32px" icon="wallpaper">
            <!-- <img
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/null/external-wallpaper-stay-home-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
            /> -->
          </q-avatar>
          Wallpapers
        </q-toolbar-title>

        <q-input
          dense
          filled
          class="q-ma-sm"
          clearable
          clear-icon="close"
          placeholder="Search Wallpapers"
          style="width: 640px"
        >
          <template v-slot:prepend>
            <q-icon color="primary" name="search" />
          </template>
        </q-input>

        <q-space />

        <q-btn
          class="text-white bg-primary"
          flat
          round
          icon="arrow_upward"
          to="/user"
        />

        <q-btn
          class="q-ml-sm text-grey-9"
          flat
          round
          icon="person"
          @click="toggleProfileDrawer"
        />
        <q-btn
          class="q-ml-sm text-grey-9"
          flat
          round
          icon="menu"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="profileDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      bordered
      class="q-pt-xl"
    >
      <q-list padding class="rounded-borders" style="max-width: 350px">
        <q-item-label header>profile_name</q-item-label>

        <q-item clickable to="/user" exact>
          <q-item-section class="text-weight-bold">
            Profile Page
          </q-item-section>
        </q-item>

        <q-item clickable to="/settings" exact>
          <q-item-section class="text-weight-bold">
            Account Settings
          </q-item-section>
        </q-item>

        <q-item clickable to="/categories" exact>
          <q-item-section class="text-weight-bold"> Logout </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      bordered
      class="q-pt-xl"
    >
      <q-list padding class="rounded-borders" style="max-width: 350px">
        <q-item-label header>Content</q-item-label>

        <q-item clickable to="/home" exact>
          <q-item-section class="text-weight-bold"> Home </q-item-section>
        </q-item>

        <q-item clickable to="/categories" exact>
          <q-item-section class="text-weight-bold"> Categories </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>Share your Content</q-item-label>

        <q-item>
          <q-item-section>
            <q-btn
              rounded
              unelevated
              color="primary"
              label="Upload"
              no-caps
              style="width: fit-content"
              padding="xs lg"
              class="text-weight-bold"
              to="/user"
            />
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>Get the app</q-item-label>

        <q-item>
          <q-item-section>
            <div
              style="
                max-width: 135px;
                max-height: 40px;
                width: 100%;
                height: auto;
              "
            >
              <a
                href="https://play.google.com/store/apps/details?id=net.zedge.android&amp;referrer=utm_source%3Dzedge_net%26utm_medium%3Dweb"
                target="_blank"
                ><svg
                  viewBox="0 0 135 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="
                    max-width: 135px;
                    max-height: 40px;
                    width: 100%;
                    height: auto;
                  "
                >
                  <path
                    d="M130 0H5C2.23858 0 0 2.23858 0 5V35C0 37.7614 2.23858 40 5 40H130C132.761 40 135 37.7614 135 35V5C135 2.23858 132.761 0 130 0Z"
                    fill="black"
                  ></path>
                  <path
                    d="M130 0.8C132.32 0.8 134.2 2.68 134.2 5V35C134.2 37.32 132.32 39.2 130 39.2H5C2.68 39.2 0.800001 37.32 0.800001 35V5C0.800001 2.68 2.68 0.8 5 0.8H130ZM130 0H5C2.25 0 0 2.25 0 5V35C0 37.75 2.25 40 5 40H130C132.75 40 135 37.75 135 35V5C135 2.25 132.75 0 130 0Z"
                    fill="#A6A6A6"
                  ></path>
                  <path
                    d="M47.42 10.2401C47.42 11.0801 47.17 11.7501 46.67 12.2401C46.11 12.8301 45.38 13.1301 44.47 13.1301C43.56 13.1301 42.86 12.8301 42.26 12.2301C41.66 11.6301 41.36 10.8801 41.36 10.0001C41.36 9.12011 41.66 8.37011 42.26 7.77011C42.86 7.17011 43.6 6.86011 44.47 6.86011C44.91 6.86011 45.33 6.94011 45.72 7.09011C46.11 7.25011 46.43 7.47011 46.68 7.75011L46.13 8.30011C45.95 8.08011 45.71 7.90011 45.41 7.78011C45.12 7.65011 44.8 7.59011 44.47 7.59011C43.82 7.59011 43.26 7.82011 42.81 8.27011C42.36 8.73011 42.14 9.30011 42.14 9.99011C42.14 10.6801 42.36 11.2501 42.81 11.7101C43.26 12.1601 43.81 12.3901 44.47 12.3901C45.07 12.3901 45.56 12.2201 45.96 11.8901C46.36 11.5601 46.59 11.0901 46.65 10.5101H44.47V9.79011H47.38C47.41 9.95011 47.42 10.1001 47.42 10.2401Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M52.03 7V7.74H49.3V9.64H51.76V10.36H49.3V12.26H52.03V13H48.53V7H52.03Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M55.28 7.74V13H54.51V7.74H52.83V7H56.95V7.74H55.27H55.28Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M60.71 13H59.94V7H60.71V13Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M64.13 7.74V13H63.36V7.74H61.68V7H65.8V7.74H64.12H64.13Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M74.49 10.0001C74.49 10.8901 74.19 11.6301 73.6 12.2301C73 12.8301 72.27 13.1301 71.4 13.1301C70.53 13.1301 69.8 12.8301 69.2 12.2301C68.61 11.6301 68.31 10.8901 68.31 10.0001C68.31 9.11011 68.61 8.37011 69.2 7.77011C69.79 7.17011 70.52 6.86011 71.4 6.86011C72.28 6.86011 73 7.16011 73.6 7.77011C74.19 8.37011 74.49 9.11011 74.49 9.99011V10.0001ZM69.11 10.0001C69.11 10.6901 69.33 11.2701 69.76 11.7201C70.2 12.1701 70.75 12.4001 71.4 12.4001C72.05 12.4001 72.6 12.1701 73.03 11.7201C73.47 11.2701 73.69 10.7001 73.69 10.0001C73.69 9.30011 73.47 8.73011 73.03 8.28011C72.59 7.83011 72.05 7.60011 71.4 7.60011C70.75 7.60011 70.2 7.83011 69.76 8.28011C69.32 8.73011 69.11 9.31011 69.11 10.0001Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M76.34 13H75.57V7H76.51L79.43 11.67H79.46L79.43 10.51V7H80.2V13H79.4L76.35 8.11H76.32L76.35 9.27V13.01L76.34 13Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.2"
                    stroke-miterlimit="10"
                  ></path>
                  <path
                    d="M68.14 21.75C65.79 21.75 63.87 23.54 63.87 26C63.87 28.46 65.79 30.25 68.14 30.25C70.49 30.25 72.41 28.45 72.41 26C72.41 23.55 70.49 21.75 68.14 21.75ZM68.14 28.58C66.85 28.58 65.74 27.52 65.74 26C65.74 24.48 66.85 23.42 68.14 23.42C69.43 23.42 70.54 24.47 70.54 26C70.54 27.53 69.43 28.58 68.14 28.58ZM58.83 21.75C56.48 21.75 54.56 23.54 54.56 26C54.56 28.46 56.48 30.25 58.83 30.25C61.18 30.25 63.1 28.45 63.1 26C63.1 23.55 61.18 21.75 58.83 21.75ZM58.83 28.58C57.54 28.58 56.43 27.52 56.43 26C56.43 24.48 57.54 23.42 58.83 23.42C60.12 23.42 61.23 24.47 61.23 26C61.23 27.53 60.12 28.58 58.83 28.58ZM47.75 23.05V24.85H52.07C51.94 25.86 51.6 26.61 51.09 27.12C50.46 27.75 49.48 28.44 47.76 28.44C45.1 28.44 43.02 26.3 43.02 23.64C43.02 20.98 45.1 18.84 47.76 18.84C49.19 18.84 50.24 19.4 51.01 20.13L52.28 18.86C51.2 17.83 49.77 17.04 47.75 17.04C44.11 17.04 41.05 20 41.05 23.65C41.05 27.3 44.11 30.26 47.75 30.26C49.72 30.26 51.2 29.62 52.36 28.41C53.55 27.22 53.92 25.54 53.92 24.19C53.92 23.77 53.89 23.38 53.82 23.06H47.75V23.05ZM93.06 24.45C92.71 23.5 91.63 21.74 89.42 21.74C87.21 21.74 85.41 23.46 85.41 25.99C85.41 28.37 87.21 30.24 89.63 30.24C91.58 30.24 92.71 29.05 93.17 28.36L91.72 27.39C91.24 28.1 90.58 28.57 89.63 28.57C88.68 28.57 88 28.14 87.57 27.28L93.26 24.93L93.07 24.45H93.06ZM87.26 25.87C87.21 24.23 88.53 23.39 89.48 23.39C90.22 23.39 90.85 23.76 91.06 24.29L87.26 25.87ZM82.64 29.99H84.51V17.49H82.64V29.99ZM79.58 22.69H79.52C79.1 22.19 78.3 21.74 77.28 21.74C75.15 21.74 73.2 23.61 73.2 26.01C73.2 28.41 75.15 30.25 77.28 30.25C78.29 30.25 79.1 29.8 79.52 29.28H79.58V29.89C79.58 31.52 78.71 32.39 77.31 32.39C76.17 32.39 75.46 31.57 75.17 30.88L73.54 31.56C74.01 32.69 75.25 34.07 77.31 34.07C79.5 34.07 81.35 32.78 81.35 29.64V22H79.58V22.69ZM77.44 28.57C76.15 28.57 75.07 27.49 75.07 26.01C75.07 24.53 76.15 23.42 77.44 23.42C78.73 23.42 79.71 24.52 79.71 26.01C79.71 27.5 78.71 28.57 77.44 28.57ZM101.82 17.49H97.35V29.99H99.22V25.25H101.83C103.9 25.25 105.93 23.75 105.93 21.37C105.93 18.99 103.9 17.49 101.83 17.49H101.82ZM101.87 23.52H99.22V19.23H101.87C103.27 19.23 104.06 20.39 104.06 21.37C104.06 22.35 103.27 23.51 101.87 23.51V23.52ZM113.4 21.72C112.05 21.72 110.65 22.32 110.07 23.63L111.73 24.32C112.08 23.63 112.74 23.4 113.43 23.4C114.39 23.4 115.38 23.98 115.39 25.01V25.14C115.05 24.95 114.33 24.66 113.44 24.66C111.65 24.66 109.84 25.64 109.84 27.47C109.84 29.14 111.3 30.22 112.94 30.22C114.19 30.22 114.89 29.66 115.32 29H115.38V29.96H117.18V25.17C117.18 22.95 115.52 21.71 113.38 21.71L113.4 21.72ZM113.17 28.57C112.56 28.57 111.71 28.26 111.71 27.51C111.71 26.55 112.77 26.18 113.69 26.18C114.51 26.18 114.9 26.36 115.39 26.6C115.25 27.76 114.25 28.58 113.17 28.58V28.57ZM123.75 21.99L121.61 27.41H121.55L119.33 21.99H117.32L120.65 29.57L118.75 33.78H120.7L125.83 21.99H123.76H123.75ZM106.94 29.99H108.81V17.49H106.94V29.99Z"
                    fill="white"
                  ></path>
                  <path
                    d="M20.7199 19.4199L10.0699 30.7199C10.3999 31.9499 11.5199 32.8499 12.8499 32.8499C13.3799 32.8499 13.8799 32.7099 14.3099 32.4499L14.3399 32.4299L26.3199 25.5199L20.7099 19.4099L20.7199 19.4199Z"
                    fill="#EA4335"
                  ></path>
                  <path
                    d="M31.49 17.5H31.48L26.31 14.49L20.48 19.68L26.33 25.53L31.48 22.56C32.38 22.07 32.99 21.12 32.99 20.03C32.99 18.94 32.39 17.99 31.49 17.51V17.5Z"
                    fill="#FBBC04"
                  ></path>
                  <path
                    d="M10.07 9.27977C10.01 9.51977 9.96997 9.75978 9.96997 10.0198V29.9798C9.96997 30.2398 9.99997 30.4798 10.07 30.7198L21.08 19.7098L10.07 9.26978V9.27977Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M20.7999 19.9999L26.3099 14.4899L14.3399 7.54989C13.9099 7.28989 13.3999 7.13989 12.8499 7.13989C11.5199 7.13989 10.3999 8.04989 10.0699 9.26989L20.7999 19.9899V19.9999Z"
                    fill="#34A853"
                  ></path>
                </svg>
              </a>
            </div>
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>Important info</q-item-label>

        <q-item clickable to="/privacy">
          <q-item-section class="text-weight-bold"> Privacy </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section class="text-weight-bold">
            Community Guidelines
          </q-item-section>
        </q-item>

        <q-item clickable to="/terms-and-conditions">
          <q-item-section class="text-weight-bold">
            Terms & Conditions
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section class="text-weight-bold">
            DMCA/Copyright
          </q-item-section>
        </q-item>

        <q-separator spaced />
        <q-item-label header>Social</q-item-label>

        <q-item clickable>
          <q-item-section class="text-weight-bold">
            Facebook link
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section class="text-weight-bold">
            Twitter link
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <div class="">
        <div class="q-gutter-y-md">
          <q-tabs v-model="tab" class="text-primary">
            <q-route-tab name="home" to="/home" label="Home" exact />
            <q-route-tab
              name="categories"
              to="/categories"
              label="Categories"
              exact
            />
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
    const profileDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      profileDrawerOpen,
      toggleProfileDrawer() {
        profileDrawerOpen.value = !profileDrawerOpen.value;
      },
      tab: ref("home"),
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: unset;
}

.flex-h-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-h-space-btw {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
