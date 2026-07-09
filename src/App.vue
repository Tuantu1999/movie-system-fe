<template>
  <v-app>
    <v-main>
      <layout-spa>
        <router-view />
        <!-- <template #sidebar-right>
          <div>Sidebar Right</div>
        </template>
        <template #sidebar-left>
          <div>Sidebar Left</div>
        </template> -->
      </layout-spa>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import LayoutSpa from "./layouts/LayoutSpa.vue";
</script>
<style lang="scss">
@use "./styles/custom.scss";
</style>
