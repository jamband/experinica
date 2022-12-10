/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
    },
  },
  root: resolve(__dirname, "src"),
  build: {
    outDir: resolve(__dirname, "dist"),
  },
  plugins: [react()],
  test: {
    globals: true,
    cache: {
      dir: resolve(__dirname, "node_modules/.vitest"),
    },
    environment: "happy-dom",
    setupFiles: "tests/setup.ts",
  },
});
