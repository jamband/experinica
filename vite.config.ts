/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
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
