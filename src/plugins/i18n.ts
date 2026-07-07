import { createI18n } from "vue-i18n";
import en from "@/lang/en.json";
import vi from "@/lang/vi.json";

const messages = {
  en,
  vi,
};

export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  globalInjection: true,
  messages,
});

export default i18n;
