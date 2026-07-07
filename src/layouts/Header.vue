<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Actions from "@/components/Actions.vue";
import Language from "@/components/Language.vue";

const router = useRouter();
const isAuthenticated = ref(false);

const login = () => {
  router.push("/login");
};
</script>
<template>
  <v-row class="d-flex justify-end">
    <v-col cols="2" class="d-flex justify-center">
      <v-img src="/Lotte__Value_Line__logo.svg" max-width="50"></v-img>
      <span class="ml-3 mt-3 font-weight-bold"> My Cinemas </span>
    </v-col>
    <v-col
      cols="10"
      class="d-flex justify-end align-center pr-2"
      style="gap: 16px"
    >
      <v-btn variant="outlined" color="primary" @click="login">
        <template #append>
          <v-icon>mdi-login</v-icon>
        </template>
        {{ $t("common.login") }}
      </v-btn>
      <div>Member Card</div>
      <div>Support</div>
      <Actions v-if="isAuthenticated" />
      <Language />
    </v-col>
  </v-row>
</template>
