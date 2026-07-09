<script lang="ts" setup>
import type { ResetPasswordRequest } from "@/models/auth/LoginRequest";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const showPassword = ref(false);
const showNewPassword = ref(false);
const resetPasswordModel = ref<ResetPasswordRequest>({
  email: "",
  oldPassword: "",
  newPassword: "",
});

const resetPassword = () => {
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
        {{ t("common.resetPassword") }}
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
                v-model="resetPasswordModel.email"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                density="compact"
                :label="t('common.password')"
                :type="showPassword ? 'text' : 'password'"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                variant="outlined"
                :rules="[$rules.required]"
                v-model="resetPasswordModel.oldPassword"
                @click:append-inner="showPassword = !showPassword"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                density="compact"
                :label="t('common.newPassword')"
                :type="showNewPassword ? 'text' : 'password'"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showNewPassword ? 'mdi-eye-off' : 'mdi-eye'"
                variant="outlined"
                :rules="[$rules.required]"
                v-model="resetPasswordModel.newPassword"
                @click:append-inner="showNewPassword = !showNewPassword"
              />
            </v-col>
            <v-col cols="12">
              <v-btn
                color="primary"
                size="large"
                block
                :disabled="
                  !resetPasswordModel.email ||
                  !resetPasswordModel.oldPassword ||
                  !resetPasswordModel.newPassword
                "
                @click="resetPassword"
              >
                {{ t("common.resetPassword") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped></style>
