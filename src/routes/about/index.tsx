import { createRoute } from "@tanstack/react-router";
import { layoutRoute } from "../../layouts/layout";
import Component from "./component";

export const aboutRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/about",
  component: Component,
});
