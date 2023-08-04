import { RouterContext } from "@tanstack/router";
import type { loaderClient } from "./loader-client";

export const routerContext = new RouterContext<{
  loadClient: typeof loaderClient;
}>();
