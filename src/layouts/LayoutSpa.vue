<script lang="ts" setup>
import Header from "./Header.vue";
</script>
<template>
  <v-app>
    <v-app-bar>
      <Header />
    </v-app-bar>
    <v-navigation-drawer width="150" border="none">
      <slot name="sidebar-right"></slot>
    </v-navigation-drawer>
    <v-navigation-drawer location="right" width="150" border="none">
      <slot name="sidebar-left"></slot>
    </v-navigation-drawer>
    <v-main>
      <slot></slot>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>
