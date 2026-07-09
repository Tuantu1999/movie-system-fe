<script lang="ts" setup>
import { ref } from "vue";

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const registerForm = ref<{ validate: () => boolean } | null>(null);

const registerModel = ref({
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  agree: false,
});

const submitRegister = () => {
  registerForm.value?.validate();
};
</script>

<template>
  <div class="d-flex align-center justify-center pa-4">
    <v-card class="mx-auto" elevation="10" max-width="560" rounded="lg">
      <v-card-text class="pa-0">
        <div class="d-flex align-center justify-center mb-4">
          <v-avatar color="deep-purple-lighten-1" size="56">
            <v-icon icon="mdi-movie-open-play" size="28" />
          </v-avatar>
        </div>

        <v-form ref="registerForm">
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="registerModel.fullName"
                :label="$t('common.fullName')"
                prepend-inner-icon="mdi-account-outline"
                variant="outlined"
                :rules="[$rules.required]"
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="registerModel.email"
                :label="$t('common.email')"
                prepend-inner-icon="mdi-email"
                variant="outlined"
                :rules="[$rules.required, $rules.email]"
              />
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="registerModel.phone"
                :label="$t('common.phoneNumber')"
                prepend-inner-icon="mdi-phone"
                variant="outlined"
                :rules="[$rules.required]"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="registerModel.password"
                :label="$t('common.password')"
                :type="showPassword ? 'text' : 'password'"
                prepend-inner-icon="mdi-lock"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                variant="outlined"
                :rules="[$rules.required, $rules.password]"
                @click:append-inner="showPassword = !showPassword"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="registerModel.confirmPassword"
                :label="$t('common.confirmPassword')"
                :type="showConfirmPassword ? 'text' : 'password'"
                prepend-inner-icon="mdi-lock-check"
                :append-inner-icon="
                  showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'
                "
                variant="outlined"
                :rules="[$rules.required, $rules.confirmPassword]"
                @click:append-inner="showConfirmPassword = !showConfirmPassword"
              />
            </v-col>

            <v-col cols="12">
              <v-checkbox
                v-model="registerModel.agree"
                :label="$t('common.agreeTerms')"
                density="compact"
                hide-details
              />
            </v-col>

            <v-col cols="12">
              <v-btn
                color="primary"
                size="large"
                block
                :disabled="
                  !registerModel.email ||
                  !registerModel.password ||
                  !registerModel.confirmPassword ||
                  !registerModel.fullName ||
                  !registerModel.phone
                "
                @click="submitRegister"
              >
                {{ $t("common.submitRegister") }}
              </v-btn>
            </v-col>
          </v-row>
        </v-form>

        <v-divider class="mx-6" />

        <div class="text-center py-4">
          <p class="mb-0 text-body-2 text-medium-emphasis">
            {{ $t("common.alreadyHaveAccount") }}
            <a class="text-deep-purple-accent-1 text-decoration-none">
              {{ $t("common.login") }}
            </a>
          </p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped></style>
