<template>
  <q-page>
    <!-- <div class="q-pa-lg bg-pink-2">hello</div> -->
    <div class="q-pa-lg bg-pink-2">
      <div class="row q-gutter-md q-mb-md row-ht">
        <div class="col">
          <q-card class="my-card">
            <q-img
              fit="cover"
              style="max-width: 300px; height: 150px"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Category 1
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img
              fit="cover"
              style="max-width: 300px; height: 150px"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Category 2
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
      <div class="row q-gutter-md q-mb-md row-ht">
        <div class="col">
          <q-card class="my-card">
            <q-img
              fit="cover"
              style="max-width: 300px; height: 150px"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Category 3
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img
              fit="cover"
              style="max-width: 300px; height: 150px"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Category 4
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
      <div class="row q-gutter-md q-mb-md row-ht">
        <div class="col">
          <q-card class="my-card">
            <q-img
              fit="cover"
              style="max-width: 300px; height: 150px"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Category 5
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col">
          <q-card class="my-card">
            <q-img
              fit="cover"
              style="max-width: 300px; height: 150px"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            >
              <div class="absolute-bottom text-subtitle2 text-center">
                Category 6
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoriesPage",
});
</script>

<style scoped>
.row-ht {
  max-height: 180px;
}
</style>
