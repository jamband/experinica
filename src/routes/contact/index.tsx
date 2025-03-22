import { createRoute } from "@tanstack/react-router";
import { layoutRoute } from "../../layouts/layout";
import Component from "./component";

export const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: Component,
});
