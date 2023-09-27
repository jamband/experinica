import { LoaderClientProvider } from "@tanstack/react-loaders";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TapeProvider } from "./contexts/tape";
import { TrackProvider } from "./contexts/track";
import { loaderClient } from "./utils/loader-client";
import { router } from "./utils/router";

const container = document.getElementById("app");

if (container === null) {
  throw new Error("Root element does not exists.");
}

createRoot(container).render(
  <StrictMode>
    <TapeProvider>
      <TrackProvider>
        <LoaderClientProvider client={loaderClient}>
          <RouterProvider router={router} />
        </LoaderClientProvider>
      </TrackProvider>
    </TapeProvider>
  </StrictMode>,
);
