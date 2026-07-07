<script lang="ts" setup>
const actions = [
  { title: "Profile", value: "profile" },
  { title: "Settings", value: "settings" },
  { title: "Logout", value: "logout" },
];

const handleClick = (value: string) => {
  console.log("clicked", value);
};
</script>
<template>
  <v-menu>
    <template v-slot:activator="{ props: menu }">
      <v-avatar v-bind="menu">
        <v-img
          alt="John"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
        ></v-img>
      </v-avatar>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in actions"
        :key="index"
        :value="index"
        @click="handleClick(item.value)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
