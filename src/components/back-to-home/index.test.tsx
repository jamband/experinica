import {
  createReactRouter,
  createRouteConfig,
  RouterProvider,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { BackToHome } from ".";

test("", () => {
  const router = createReactRouter({
    routeConfig: createRouteConfig(),
  });

  render(
    <RouterProvider router={router}>
      <BackToHome />
    </RouterProvider>
  );
  const link = screen.getByRole("link", { name: "← Back to Home" });
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});
