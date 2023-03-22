<template>
  <q-page>
    <div class="q-pa-lg">
      <div class="d-grid q-gutter-md">
        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center q-py-5px">
                Title
              </div>
            </q-img>
          </q-card>
        </div>

        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>

        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://randomuser.me/api/portraits/thumb/men/75.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>

        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>

        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>

        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>

        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>

        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>

        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
              </div>
            </q-img>
          </q-card>
        </div>

        <div class="d-grid-item">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div class="absolute-bottom text-subtitle2 text-center">
                Title
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
  name: "HomePage",
});
</script>

<style>
.d-grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 320px;
}

.d-grid-item {
  /* max-width: 630px; */
  /* max-height: 1587px; */
}

@media (min-width: 768px) {
  .d-grid {
    grid-template-columns: auto auto auto auto;
  }
}
@media (min-width: 1160px) {
  .d-grid {
    grid-template-columns: auto auto auto auto auto;
  }
}
@media (min-width: 1024px) {
  .d-grid {
    grid-template-columns: auto auto auto auto auto auto;
  }
}
@media (min-width: 1515px) {
  .d-grid {
    grid-template-columns: auto auto auto auto auto auto auto;
  }
}
</style>
