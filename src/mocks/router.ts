import { Outlet, createRootRoute } from "@tanstack/react-router";

export const mockRootRoute = createRootRoute({
  component: Outlet,
});
