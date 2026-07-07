<template>
  <v-app>
    <v-main>
      <layout-spa>
        <router-view />
      </layout-spa>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import LayoutSpa from "./layouts/LayoutSpa.vue";
</script>
