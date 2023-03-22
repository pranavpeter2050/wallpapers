<template>
  <q-page>
    <div class="container q-mx-xl">
      <div class="q-pa-md">
        <div class="profile-pic">
          <q-avatar size="100px">
            <img src="https://picsum.photos/500/300" />
          </q-avatar>
        </div>
        <div class="profile-info text-center">
          <div class="profile-name text-h6">jason_wayn3</div>
          <div class="profile-name subtitle-2">
            <span class="q-mr-sm">0 uploads</span><span>0 downloads</span>
          </div>
        </div>
      </div>

      <div class="tabs-container">
        <div class="tabs-wrappr">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            narrow-indicator
          >
            <q-tab name="uploads" label="Uploads" />
            <q-tab name="favorites" label="Favorites" />
          </q-tabs>
        </div>

        <q-tab-panels v-model="tab" animated class="tabs-panel-wrappr">
          <q-tab-panel name="uploads">
            <div class="text-h6">Mails</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="favorites">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProfilePage",
  setup() {
    return {
      tab: ref("uploads"),
    };
  },
});
</script>
<style scoped>
.container {
  margin: 0 10% 0 10%;
}
.profile-pic {
  display: flex;
  justify-content: center;
}

.tabs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tabs-wrappr {
  width: 100%;
  border-bottom: 1px solid #e0e0e0;
}

.tabs-panel-wrappr {
  width: 100%;
}
</style>
