import { Outlet } from "@tanstack/react-location";
import { render } from "@testing-library/react";
import type { SpyInstanceFn } from "vitest";
import { beforeEach, expect, test, vi } from "vitest";
import { Track } from ".";
import { useTrack } from "../../hooks/track";
import { RouterMock } from "../../tests/router-mock";

vi.mock("../../hooks/track", () => ({
  useTrack: vi.fn(),
}));

const useTrackMock = useTrack as SpyInstanceFn;

beforeEach(() => {
  vi.resetAllMocks();
});

test("when don't have the data for track", () => {
  useTrackMock.mockReturnValue({ track: { path: "" } });

  const { container } = render(
    <RouterMock initialEntries={["/"]}>
      <Track />
      <Outlet />
    </RouterMock>
  );

  expect(container).toBeEmptyDOMElement();
});

test("when does not match the /:track route", () => {
  useTrackMock.mockReturnValue({ track: { path: "/foo" } });

  const { container } = render(
    <RouterMock initialEntries={["/"]}>
      <Track />
      <Outlet />
    </RouterMock>
  );

  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveAttribute("class", "hidden");
});

test("when matches the /:track route", () => {
  useTrackMock.mockReturnValue({ track: { path: "/foo" } });

  const { container } = render(
    <RouterMock initialEntries={["/foo"]}>
      <Track />
      <Outlet />
    </RouterMock>
  );

  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveAttribute("class", "");
});
