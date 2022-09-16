/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
  root: "src",
  build: {
    outDir: "../dist",
  },
  plugins: [react()],
  test: {
    globals: true,
    cache: {
      dir: "../node_modules/.vitest",
    },
    environment: "happy-dom",
    setupFiles: "tests/setup.ts",
  },
});
