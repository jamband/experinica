import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root";
import Component from "./component";

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: Component,
});
