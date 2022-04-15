import { act, renderHook } from "@testing-library/react-hooks";
import { expect, test } from "vitest";
import { useTrack } from "./track";

test("track", () => {
  const { result } = renderHook(() => useTrack());

  expect(result.current.track).toEqual({
    title: "",
    provider: "",
    provider_key: "",
    path: "",
    embed_aspect_ratio: "",
  });
});

test("setTrack", () => {
  const { result } = renderHook(() => useTrack());

  act(() =>
    result.current.setTrack({
      title: "title1",
      provider: "Bandcamp",
      provider_key: "key1",
      path: "path1",
      embed_aspect_ratio: "1/1",
    })
  );

  expect(result.current.track).toEqual({
    title: "title1",
    provider: "Bandcamp",
    provider_key: "key1",
    path: "path1",
    embed_aspect_ratio: "1/1",
  });
});

test("resetTrack", () => {
  const { result } = renderHook(() => useTrack());

  act(() =>
    result.current.setTrack({
      title: "title1",
      provider: "Bandcamp",
      provider_key: "key1",
      path: "path1",
      embed_aspect_ratio: "1/1",
    })
  );

  expect(result.current.track).toEqual({
    title: "title1",
    provider: "Bandcamp",
    provider_key: "key1",
    path: "path1",
    embed_aspect_ratio: "1/1",
  });

  act(() => result.current.resetTrack());

  expect(result.current.track).toEqual({
    title: "",
    provider: "",
    provider_key: "",
    path: "",
    embed_aspect_ratio: "",
  });
});
