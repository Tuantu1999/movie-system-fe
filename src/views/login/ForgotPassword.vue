<script lang="ts" setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const email = ref("");

const register = () => {
  router.push({ path: "/login" });
};

const sendEmail = () => {
  // Implementation for sending email
};
</script>

<template>
  <div class="d-flex align-center justify-center pa-4">
    <v-card class="mx-auto my-8" elevation="4" min-width="450" rounded="lg">
      <v-card-title class="text-h2 text-center">
        <div class="d-flex align-center justify-center mb-4">
          <v-avatar color="deep-purple-lighten-1" size="56">
            <v-icon icon="mdi-movie-open-play" size="28" />
          </v-avatar>
        </div>
        {{ t("common.forgotPassword") }}
      </v-card-title>
      <v-card-text class="pa-0">
        <v-form ref="form">
          <v-row dense class="pa-8">
            <v-col cols="12">
              <v-text-field
                density="compact"
                :label="t('common.email')"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                :rules="[$rules.required, $rules.email]"
                v-model="email"
              />
            </v-col>
            <v-col cols="12">
              <v-btn
                color="primary"
                size="large"
                block
                :disabled="!email"
                prepend-icon="mdi-send"
                @click="sendEmail"
              >
                {{ t("common.sendEmail") }}
              </v-btn>
            </v-col>
          </v-row>
          <v-divider class="my-4" color="primary" gradient>{{
            t("common.or")
          }}</v-divider>
          <v-row class="my-4">
            <v-col cols="12" class="text-center">
              <a
                class="text-decoration-none text-deep-purple-accent-1 cursor-pointer"
                @click="register"
                >{{ t("common.backToLogin") }}</a
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped></style>
