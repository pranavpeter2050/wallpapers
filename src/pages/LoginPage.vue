<template>
  <div class="fullscreen bg-pink-2 container">
    <div class="quasar-logo">
      <img class="" src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" /><img
        class=""
        src="https://cdn.quasar.dev/logo-v2/svg/logotype.svg"
      />
    </div>

    <div class="login-card">
      <q-card class="my-card">
        <q-card-section>
          <q-form
            action="https://some-url.com"
            method="post"
            @submit.prevent="onSubmit"
          >
            <q-input outlined name="email" placeholder="Email Address" />

            <div class="q-mt-lg">
              <q-btn rounded label="Continue" type="submit" color="primary" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>

    <div class="login-otp-card">
      <q-card class="my-card">
        <q-card-section>
          <q-form
            action="https://some-url.com"
            method="post"
            @submit.prevent="onSubmit"
          >
            <q-input outlined name="email" placeholder="Email Address" />

            <div class="q-mt-lg">
              <q-btn rounded label="Continue" type="submit" color="primary" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginPage",
});
</script>
<style scoped>
.container {
  padding: 5% 10% 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.quasar-logo {
  width: 100px;
}

.login-card,
.login-otp-card {
  width: 35%;
}

.my-card {
  padding: 5%;
}
</style>
