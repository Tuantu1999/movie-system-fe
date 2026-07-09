import type { App } from "vue";
import i18n from "./i18n";

export type ValidationRule = (value: unknown) => boolean | string;

export interface ValidationRules {
  required: ValidationRule;
  email: ValidationRule;
  phone: ValidationRule;
  password: ValidationRule;
  minLength: (min: number) => ValidationRule;
  maxLength: (max: number) => ValidationRule;
  match: (targetValue: unknown) => ValidationRule;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

const normalizeValue = (value: unknown) => {
  if (value === null || value === undefined) return "";
  return String(value).trim();
};

const t = (key: string, params?: Record<string, string | number>) => {
  return i18n.global.t(key, params ?? {}) as string;
};

export const rules: ValidationRules = {
  required: (value: unknown) => {
    const normalized = normalizeValue(value);
    return normalized.length > 0 || t("validation.required");
  },
  email: (value: unknown) => {
    const normalized = normalizeValue(value);
    if (!normalized) return t("validation.required");
    return EMAIL_REGEX.test(normalized) || t("validation.email");
  },
  phone: (value: unknown) => {
    const normalized = normalizeValue(value);
    if (!normalized) return t("validation.required");
    return PHONE_REGEX.test(normalized) || t("validation.phone");
  },
  password: (value: unknown) => {
    const normalized = normalizeValue(value);
    if (!normalized) return t("validation.required");
    return normalized.length >= 6 || t("validation.password");
  },
  minLength: (min: number) => (value: unknown) => {
    const normalized = normalizeValue(value);
    if (!normalized) return t("validation.required");
    return normalized.length >= min || t("validation.minLength", { min });
  },
  maxLength: (max: number) => (value: unknown) => {
    const normalized = normalizeValue(value);
    if (!normalized) return t("validation.required");
    return normalized.length <= max || t("validation.maxLength", { max });
  },
  match: (targetValue: unknown) => (value: unknown) => {
    const normalized = normalizeValue(value);
    if (!normalized) return t("validation.required");
    return normalized === normalizeValue(targetValue) || t("validation.match");
  },
};

export default rules;
