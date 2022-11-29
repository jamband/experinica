import { render } from "@testing-library/react";
import type { Mock } from "vitest";
import { beforeEach, expect, test, vi } from "vitest";
import { useTrack } from "~/hooks/track";
import { Track } from ".";

vi.mock("~/hooks/track", () => ({
  useTrack: vi.fn(),
}));

const useTrackMock = useTrack as Mock;

beforeEach(() => {
  vi.resetAllMocks();
});

test("when don't have the data for track", () => {
  useTrackMock.mockReturnValue({ track: { path: "" } });

  const { container } = render(<Track />);

  expect(container).toBeEmptyDOMElement();
});

test("when does not match the /:track route", () => {
  useTrackMock.mockReturnValue({ track: { path: "/foo" } });

  const { container } = render(<Track />);

  // eslint-disable-next-line testing-library/no-node-access
  expect(container.firstChild).toHaveAttribute("class", "hidden");
});

// test("when matches the /:track route", () => {
//   useTrackMock.mockReturnValue({ track: { path: "/foo" } });

//   const router = createReactRouter({
//     routeConfig: createRouteConfig(),
//   });

//   const { container } = render(
//     <RouterProvider router={router}>
//       <Track />
//     </RouterProvider>
//   );

//   // eslint-disable-next-line testing-library/no-node-access
//   expect(container.firstChild).toHaveAttribute("class", "");
// });
