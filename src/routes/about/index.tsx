import { layoutRoute } from "@/layouts/layout";
import { createRoute } from "@tanstack/react-router";
import Component from "./component";

export const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: Component,
});
