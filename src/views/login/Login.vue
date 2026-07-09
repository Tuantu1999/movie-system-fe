<script lang="ts" setup>
import type { LoginRequest } from "@/models/auth/LoginRequest";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter();
const showPassword = ref(false);
const form = ref<any>(null);

interface LoginForm extends LoginRequest {
  remember: boolean;
}

const loginModel = ref<LoginForm>({
  userName: "",
  password: "",
  remember: false,
});

const submitLogin = async (): Promise<{ valid: boolean }> => {
  if (!form.value) return { valid: false };
  return await form.value?.validate();
};

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  const { valid } = await submitLogin();
  console.log("valid", valid);
  if (!valid) return;
};

const register = () => {
  router.push({ path: "/register" });
};

const forgotPassword = () => {
  router.push("/forgot-password");
};
</script>

<template>
  <div class="d-flex align-center justify-center pa-4">
    <v-card class="mx-auto my-8" elevation="4" max-width="560" rounded="lg">
      <v-card-title class="text-h2 text-center">
        {{ t("common.login") }}
      </v-card-title>
      <v-card-text class="pa-0">
        <div class="d-flex align-center justify-center mb-4">
          <v-avatar color="deep-purple-lighten-1" size="56">
            <v-icon icon="mdi-movie-open-play" size="28" />
          </v-avatar>
        </div>

        <v-form ref="form">
          <v-row class="pa-8" density="compact">
            <v-col cols="12">
              <v-text-field
                density="compact"
                :label="t('common.userName')"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                :rules="[$rules.required]"
                v-model="loginModel.userName"
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
                v-model="loginModel.password"
                @click:append-inner="showPassword = !showPassword"
              />
            </v-col>

            <v-col cols="12" class="d-flex align-center justify-space-between">
              <v-checkbox
                :label="t('common.rememberMe')"
                density="compact"
                hide-details
                v-model="loginModel.remember"
              />
              <a
                class="text-decoration-none text-deep-purple-accent-1 cursor-pointer"
                @click="forgotPassword"
              >
                {{ t("common.forgotPassword") }}
              </a>
            </v-col>

            <v-col cols="12">
              <v-btn
                color="primary"
                size="large"
                block
                :disabled="!loginModel.userName || !loginModel.password"
                @click="handleSubmit"
              >
                {{ t("common.login") }}
              </v-btn>
            </v-col>
            <v-col cols="12" class="text-center">
              <a
                class="text-decoration-none text-deep-purple-accent-1 cursor-pointer"
                @click="register"
                >{{ t("common.dontHaveAccount") }}</a
              >
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped></style>
