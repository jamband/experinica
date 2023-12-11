import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TapeProvider } from "./contexts/tape";
import { TrackProvider } from "./contexts/track";
import ErrorComponent from "./routes/error";
import { routeTree } from "./utils/router";

const queryClient = new QueryClient();

export const router = new Router({
  routeTree,
  context: {
    queryClient,
  },
  defaultErrorComponent: () => <ErrorComponent />,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const container = document.getElementById("app");

if (container === null) {
  throw new Error("Root element does not exists.");
}

createRoot(container).render(
  <StrictMode>
    <TapeProvider>
      <TrackProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </TrackProvider>
    </TapeProvider>
  </StrictMode>,
);
