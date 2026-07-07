<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const languages = [
  { title: "English", value: "en" },
  { title: "Vietnamese", value: "vi" },
];

const changeLanguage = (lang: string) => {
  locale.value = lang;
};
</script>
<template>
  <v-menu>
    <template v-slot:activator="{ props: menu }">
      <v-btn density="compact" icon="mdi-translate" v-bind="menu"></v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in languages"
        :key="index"
        :value="index"
        @click="changeLanguage(item.value)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
