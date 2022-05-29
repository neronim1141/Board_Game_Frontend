import { defineConfig } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerDirective()],
});
