import { layoutRoute } from "@/layouts/layout";
import { Route } from "@tanstack/react-router";
import Component from "./component";

export const aboutRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: Component,
});
