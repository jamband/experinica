import { RouterContext } from "@tanstack/react-router";
import type { loaderClient } from "./loader-client";

export const routerContext = new RouterContext<{
  loadClient: typeof loaderClient;
}>();
