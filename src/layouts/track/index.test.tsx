import {
  createMemoryHistory,
  ReactLocation,
  Router,
} from "@tanstack/react-location";
import { render } from "@testing-library/react";
import type { MemoryHistoryOptions } from "history";
import type { Mock } from "vitest";
import { beforeEach, expect, test, vi } from "vitest";
import { useTrack } from "~/hooks/track";
import { Track } from ".";

vi.mock("~/hooks/track", () => ({
  useTrack: vi.fn(),
}));

const useTrackMock = useTrack as Mock;

const location = (historyOptions: MemoryHistoryOptions) => {
  return new ReactLocation({
    history: createMemoryHistory(historyOptions),
  });
};

beforeEach(() => {
  vi.resetAllMocks();
});

test("when don't have the data for track", () => {
  useTrackMock.mockReturnValue({ track: { path: "" } });

  const { container } = render(
    <Router location={location({ initialEntries: ["/"] })} routes={[]}>
      <Track />
    </Router>
  );

  expect(container).toBeEmptyDOMElement();
});

test("when does not match the /:track route", () => {
  useTrackMock.mockReturnValue({ track: { path: "/foo" } });

  const { container } = render(
    <Router location={location({ initialEntries: ["/"] })} routes={[]}>
      <Track />
    </Router>
  );

  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveAttribute("class", "hidden");
});

test("when matches the /:track route", () => {
  useTrackMock.mockReturnValue({ track: { path: "/foo" } });

  const { container } = render(
    <Router location={location({ initialEntries: ["/foo"] })} routes={[]}>
      <Track />
    </Router>
  );

  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveAttribute("class", "");
});
