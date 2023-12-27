import type { QueryClient } from "@tanstack/react-query";
import { rootRouteWithContext } from "@tanstack/react-router";
import Component from "./component";

export const layoutRoute = rootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: Component,
});
