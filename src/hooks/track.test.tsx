import type { Props } from "@/contexts/track";
import { TrackProvider } from "@/contexts/track";
import { initialState } from "@/reducers/track";
import { act, renderHook } from "@testing-library/react";
import { useTrackAction, useTrackState } from "./track";

const wrapper: React.FC<Props> = (props) => (
  <TrackProvider>{props.children}</TrackProvider>
);

test("initial value", () => {
  const { result } = renderHook(useTrackState, { wrapper });
  expect(result.current).toEqual(initialState);
});

test("setTrack", () => {
  const { result } = renderHook(
    () => {
      const state = useTrackState();
      const { setTrack } = useTrackAction();
      return { state, setTrack };
    },
    { wrapper },
  );

  expect(result.current.state).toEqual(initialState);

  act(() =>
    result.current.setTrack({
      title: "title1",
      provider: "Bandcamp",
      provider_key: "key1",
      path: "path1",
      embed_aspect_ratio: "1/1",
    }),
  );

  expect(result.current.state).toEqual({
    title: "title1",
    provider: "Bandcamp",
    provider_key: "key1",
    path: "path1",
    embed_aspect_ratio: "1/1",
  });
});

test("resetTrack", () => {
  const { result } = renderHook(
    () => {
      const state = useTrackState();
      const { setTrack, resetTrack } = useTrackAction();
      return { state, setTrack, resetTrack };
    },
    { wrapper },
  );

  expect(result.current.state).toEqual(initialState);

  act(() =>
    result.current.setTrack({
      title: "title1",
      provider: "Bandcamp",
      provider_key: "key1",
      path: "path1",
      embed_aspect_ratio: "1/1",
    }),
  );

  expect(result.current.state).toEqual({
    title: "title1",
    provider: "Bandcamp",
    provider_key: "key1",
    path: "path1",
    embed_aspect_ratio: "1/1",
  });

  act(() => result.current.resetTrack());
  expect(result.current.state).toEqual(initialState);
});
