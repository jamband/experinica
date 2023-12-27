import { Route } from "@tanstack/react-router";
import { rootRoute } from "../root";
import Component from "./component";

export const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Component,
});
