import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { Header } from ".";

test("", async () => {
  const rootRoute = createRootRoute();

  const route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Header />,
  });

  const router = createRouter({
    routeTree: rootRoute.addChildren([route]),
  });

  render(<RouterProvider router={router} />);

  const link = await screen.findByRole("link");
  expect(link).toHaveAttribute("href", "/");
});
