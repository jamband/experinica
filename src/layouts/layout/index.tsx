import { createRootRoute } from "@tanstack/react-router";
import Component from "./component";

export const layoutRoute = createRootRoute({
  component: Component,
});
