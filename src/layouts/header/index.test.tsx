import {
  createReactRouter,
  createRouteConfig,
  RouterProvider,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { APP_NAME } from "~/constants/app";
import { Header } from ".";

test("", () => {
  const router = createReactRouter({
    routeConfig: createRouteConfig(),
  });

  render(
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );

  const link = screen.getByRole("link");
  expect(link).toHaveAttribute("href", "/");
  expect(link).toHaveTextContent(`jamband/${APP_NAME.toLowerCase()}`);
});
