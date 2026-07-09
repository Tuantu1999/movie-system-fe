<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const form = ref<{ validate: () => boolean } | null>(null);

const registerModel = ref({
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  agree: false,
});

const submitRegister = () => {
  form.value?.validate();
};

const toLogin = () => {
  router.push("/login");
};
</script>

<template>
  <v-card class="mx-auto my-8" elevation="10" max-width="560" rounded="lg">
    <v-card-title class="text-h2 text-center">
      {{ $t("common.register") }}
    </v-card-title>
    <v-card-text class="pa-8">
      <div class="d-flex align-center justify-center mb-4">
        <v-avatar color="deep-purple-lighten-1" size="56">
          <v-icon icon="mdi-movie-open-play" size="28" />
        </v-avatar>
      </div>

      <v-form ref="form">
        <v-row density="compact">
          <v-col cols="12">
            <v-text-field
              :label="$t('common.fullName')"
              prepend-inner-icon="mdi-account-outline"
              variant="outlined"
              density="compact"
              :rules="[$rules.required]"
              v-model="registerModel.fullName"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              density="compact"
              :label="$t('common.email')"
              prepend-inner-icon="mdi-email"
              variant="outlined"
              :rules="[$rules.required, $rules.email]"
              v-model="registerModel.email"
            />
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              density="compact"
              :label="$t('common.phoneNumber')"
              prepend-inner-icon="mdi-phone"
              variant="outlined"
              :rules="[$rules.required]"
              v-model="registerModel.phone"
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              density="compact"
              :label="$t('common.password')"
              :type="showPassword ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              variant="outlined"
              :rules="[$rules.required, $rules.password]"
              v-model="registerModel.password"
              @click:append-inner="showPassword = !showPassword"
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              density="compact"
              :label="$t('common.confirmPassword')"
              :type="showConfirmPassword ? 'text' : 'password'"
              prepend-inner-icon="mdi-lock-check"
              :append-inner-icon="
                showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'
              "
              variant="outlined"
              :rules="[$rules.required, $rules.confirmPassword]"
              v-model="registerModel.confirmPassword"
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

      <div class="text-center py-4">
        <p class="mb-0 text-body-2 text-medium-emphasis">
          {{ $t("common.alreadyHaveAccount") }}
          <a
            class="text-deep-purple-accent-1 text-decoration-none cursor-pointer"
            @click="toLogin"
          >
            {{ $t("common.login") }}
          </a>
        </p>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
