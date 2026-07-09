import { rules } from "@/rules";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $rules: typeof rules;
  }
}
