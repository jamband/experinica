import { TrackProvider } from "@/contexts/track";
import { useTrackState } from "@/hooks/track";
import {
  RouterProvider,
  createMemoryHistory,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import type { Mock } from "vitest";
import { Footer } from ".";

vi.mock("@/hooks/track", () => ({
  useTrackState: vi.fn(),
  useTrackAction: () => ({
    resetTrack: () => vi.fn(),
  }),
}));

const trackStateMock = useTrackState as Mock;

beforeEach(() => {
  vi.resetAllMocks();
});

test("", async () => {
  trackStateMock.mockReturnValue({
    path: "",
  });

  const rootRoute = createRootRoute();

  const route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Footer />,
  });

  const router = createRouter({
    routeTree: rootRoute.addChildren([route]),
  });

  render(
    <TrackProvider>
      <RouterProvider router={router} />
    </TrackProvider>,
  );

  const links = await screen.findAllByRole("link");
  expect(links).length(3); // about, contact, github
});

test("has track state and not on track route", async () => {
  trackStateMock.mockReturnValue({
    title: "bar",
    path: "/1999/01/foo/bar",
  });

  const rootRoute = createRootRoute();

  const route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Footer />,
  });

  const router = createRouter({
    routeTree: rootRoute.addChildren([route]),
  });

  render(
    <TrackProvider>
      <RouterProvider router={router} />
    </TrackProvider>,
  );

  const link = await screen.findByRole("link");
  expect(link).toHaveAttribute("href", "/1999/01/foo/bar");
  expect(link).toHaveTextContent("bar");
});

test("has track state and on track route", async () => {
  trackStateMock.mockReturnValue({
    title: "bar",
    path: "/1999/01/foo/bar",
  });

  const rootRoute = createRootRoute();

  const route1 = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Footer />,
  });

  const route2 = createRoute({
    getParentRoute: () => rootRoute,
    path: "/1999/01/foo/bar",
    component: () => <Footer />,
  });

  const router = createRouter({
    routeTree: rootRoute.addChildren([route1, route2]),
    history: createMemoryHistory({
      initialEntries: ["/1999/01/foo/bar"],
    }),
  });

  render(
    <TrackProvider>
      <RouterProvider router={router} />
    </TrackProvider>,
  );

  const links = await screen.findAllByRole("link");
  expect(links).length(3); // about, contact, github
});
