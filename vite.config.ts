/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const srcDir = resolve(__dirname, "src");

export default defineConfig({
  root: srcDir,
  resolve: {
    alias: { "@": srcDir },
  },
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
    setupFiles: "../vitest.setup.ts",
  },
});
