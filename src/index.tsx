import "@/styles/app.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TapeProvider } from "./contexts/tape";
import { TrackProvider } from "./contexts/track";
import { queryClient } from "./utils/query-client";
import { router } from "./utils/router";

const container = document.getElementById("app");

if (container === null) {
  throw new Error("app element does not exists.");
}

createRoot(container).render(
  <StrictMode>
    <TapeProvider>
      <TrackProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </TrackProvider>
    </TapeProvider>
  </StrictMode>,
);
