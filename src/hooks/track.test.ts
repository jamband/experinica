import { act, renderHook } from "@testing-library/react";
import { useTrack, type TrackValue } from "./track";

// when using Jotai, automatic cleanup() doesn't work.

const initialValue: TrackValue = {
  title: "",
  provider: "",
  provider_key: "",
  path: "",
  embed_aspect_ratio: "",
};

test("track", () => {
  const { result } = renderHook(() => useTrack());
  expect(result.current.track).toEqual(initialValue);

  act(() => result.current.resetTrack()); // cleanup
});

test("setTrack", () => {
  const { result } = renderHook(() => useTrack());
  expect(result.current.track).toEqual(initialValue);

  act(() =>
    result.current.setTrack({
      title: "title1",
      provider: "Bandcamp",
      provider_key: "key1",
      path: "path1",
      embed_aspect_ratio: "1/1",
    }),
  );

  expect(result.current.track).toEqual({
    title: "title1",
    provider: "Bandcamp",
    provider_key: "key1",
    path: "path1",
    embed_aspect_ratio: "1/1",
  });

  act(() => result.current.resetTrack()); // cleanup
});

test("resetTrack", () => {
  const { result } = renderHook(() => useTrack());
  expect(result.current.track).toEqual(initialValue);

  act(() =>
    result.current.setTrack({
      title: "title1",
      provider: "Bandcamp",
      provider_key: "key1",
      path: "path1",
      embed_aspect_ratio: "1/1",
    }),
  );

  expect(result.current.track).toEqual({
    title: "title1",
    provider: "Bandcamp",
    provider_key: "key1",
    path: "path1",
    embed_aspect_ratio: "1/1",
  });

  act(() => result.current.resetTrack());
  expect(result.current.track).toEqual(initialValue);

  act(() => result.current.resetTrack()); // cleanup
});
