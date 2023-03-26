<template>
  <q-page>
    <div class="row wallpaper-wrappr">
      <div class="col-3 wallpaper-info">
        <div class="avatar-user-wrappr">
          <div class="avatar">
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </div>
          <div class="info">
            <div class="wallpaper-name text-h6">Shinchan</div>
            <div class="user-name text-caption">by Hiroshi05</div>
          </div>
          <div class="download-counter text-subtitle1">
            <span><q-icon name="arrow_downward" /></span> 69933
          </div>
        </div>
        <div class="wallpaper-tags-wrappr">
          <q-btn
            rounded
            unelevated
            color="grey-2"
            label="#shinchan"
            no-caps
            style="width: fit-content"
            padding="xs lg"
            class="text-weight-bold q-mb-xs q-mr-sm text-grey-8"
          />
          <q-btn
            rounded
            unelevated
            color="grey-2"
            label="#anime"
            no-caps
            style="width: fit-content"
            padding="xs lg"
            class="text-weight-bold q-mb-xs q-mr-sm text-grey-8"
          />
        </div>
      </div>
      <div class="col-6 wallpaper-thumbnail">
        <div class="wallpaper"></div>
      </div>
      <div class="col-3 wallpaper-action">
        <div class="wallpaper-action-btns">
          <q-btn
            outline
            rounded
            unelevated
            color="primary"
            icon="share"
            no-caps
            style="width: fit-content"
            padding="xs lg"
            class="text-weight-bold q-mr-sm"
          />
          <q-btn
            rounded
            unelevated
            color="primary"
            label="Download"
            no-caps
            style="width: fit-content"
            padding="xs lg"
            class="text-weight-bold"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WallpaperPage",
});
</script>

<style scoped>
.wallpaper-wrappr {
  justify-content: space-evenly;
}

.wallpaper-thumbnail {
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding-top: 2%;
}

.wallpaper-info {
  padding-top: 2%;
  padding-left: 2%;
}

.wallpaper-action {
  padding-top: 2%;
  padding-right: 2%;
}

.wallpaper-action-btns {
  display: flex;
  justify-content: right;
  min-height: 20px;
  flex-wrap: wrap;
}

.wallpaper {
  /* max-height: 800px; */
  width: 100%;
  /* height: 67vh; */
  height: 75vh;
  background: url(src/assets/shinchan.jpg) center center / contain no-repeat;
}

.avatar-user-wrappr {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.avatar-user-wrappr > div {
  margin-right: 5px;
}

.wallpaper-action-btns > button {
  margin-bottom: 5px;
}

@media (max-width: 540px) {
  .wallpaper-wrappr {
    flex-direction: column;
  }

  .wallpaper-thumbnail {
    width: 100%;
    /* padding: 0 5%; */
    margin-bottom: 8px;
  }

  .wallpaper {
    height: 140vh;
  }

  .wallpaper-info {
    width: 100%;
    padding: 0 5%;
    margin-bottom: 8px;
  }

  .wallpaper-action {
    width: 100%;
    padding: 0 5%;
    margin-bottom: 8px;
  }

  .wallpaper-action-btns {
    justify-content: center;
  }
}
</style>
