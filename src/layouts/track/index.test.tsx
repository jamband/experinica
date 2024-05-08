import { TrackProvider } from "@/contexts/track";
import { useTapeState } from "@/hooks/tape";
import { useTrackState } from "@/hooks/track";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import type { Mock } from "vitest";
import { Track } from ".";

vi.mock("@/hooks/tape", () => ({
  useTapeState: vi.fn(),
}));

vi.mock("@/hooks/track", () => ({
  useTrackState: vi.fn(),
}));

const tapeStateMock = useTapeState as Mock;
const trackStateMock = useTrackState as Mock;

beforeEach(() => {
  vi.resetAllMocks();
});

test("", async () => {
  tapeStateMock.mockReturnValue({
    title: "Jan 01, 1999 bar",
  });

  trackStateMock.mockReturnValue({
    title: "bar",
    provider: "",
    path: "/1999/01/foo/bar",
  });

  const rootRoute = createRootRoute();

  const route = createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Track />,
  });

  const router = createRouter({
    routeTree: rootRoute.addChildren([route]),
  });

  render(
    <TrackProvider>
      <RouterProvider router={router} />
    </TrackProvider>,
  );

  await screen.findByTitle("player");
  expect(screen.getByRole("heading", { name: "bar" })).toBeInTheDocument();
  expect(screen.getByText("via")).toBeInTheDocument();
  const link = screen.getByRole("link", { name: "← Jan 01, 1999 bar" });
  expect(link).toHaveAttribute("href", "/1999/01/foo");
});
