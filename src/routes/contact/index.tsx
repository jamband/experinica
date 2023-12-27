import { layoutRoute } from "@/layouts/layout";
import { Route } from "@tanstack/react-router";
import Component from "./component";

export const contactRoute = new Route({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: Component,
});
