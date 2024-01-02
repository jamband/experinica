import "@/styles/app.css";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TapeProvider } from "./contexts/tape";
import { TrackProvider } from "./contexts/track";
import { router } from "./utils/router";

const container = document.getElementById("app");

if (container === null) {
  throw new Error("app element does not exists.");
}

createRoot(container).render(
  <StrictMode>
    <TapeProvider>
      <TrackProvider>
        <RouterProvider router={router} />
      </TrackProvider>
    </TapeProvider>
  </StrictMode>,
);
