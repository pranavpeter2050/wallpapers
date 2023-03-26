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
            <div class="text-h3">Register</div>

            <q-input
              class="q-mt-lg"
              outlined
              name="username"
              placeholder="Username"
            />

            <q-input
              class="q-mt-lg"
              outlined
              name="dob"
              placeholder="Date of birth"
              type="date"
              hint="Optional"
            />

            <q-input
              class="q-mt-lg"
              outlined
              name="email"
              placeholder="Email Address"
              type="email"
            />

            <q-input
              class="q-mt-lg"
              outlined
              name="password"
              placeholder="Password"
              type="password"
            />

            <div class="q-mt-lg flex-h-space-btw custom">
              <q-btn rounded label="Continue" type="submit" color="primary" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>

      <div class="sign-up-wrappr q-mt-md text-center">
        <span class="text-grey-8">Already have an account?</span>
        <span class="text-primary"><a href="#/login"> Sign In</a></span> |
        <!-- <span class="text-primary"
          ><a href="#">{{ $route }}</a></span
        > -->
        <span class="text-primary"><a href="#/home">Home</a></span>
      </div>
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
  name: "RegisterPage",
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

@media (min-width: 320px) {
  .login-card,
  .login-otp-card {
    width: 90%;
  }
  .custom {
    flex-wrap: wrap;
  }
  .custom > span {
    padding-bottom: 8px;
  }
}

@media (min-width: 540px) {
  .login-card,
  .login-otp-card {
    width: 75%;
  }
}

@media (min-width: 768px) {
  .login-card,
  .login-otp-card {
    width: 55%;
  }
}

@media (min-width: 1024px) {
  .login-card,
  .login-otp-card {
    width: 35%;
  }
}
</style>
