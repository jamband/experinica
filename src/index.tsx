import { LoaderClientProvider } from "@tanstack/react-loaders";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { loaderClient } from "./utils/loader-client";
import { router } from "./utils/router";

const rootElement = document.getElementById("app");

if (rootElement === null) {
  throw new Error("Root element does not exists.");
}

createRoot(rootElement).render(
  <StrictMode>
    <LoaderClientProvider loaderClient={loaderClient}>
      <RouterProvider router={router} />
    </LoaderClientProvider>
  </StrictMode>
);
