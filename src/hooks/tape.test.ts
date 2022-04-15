import { act, renderHook } from "@testing-library/react-hooks";
import { expect, test } from "vitest";
import { useTape } from "./tape";

test("tape", () => {
  const { result } = renderHook(() => useTape());
  expect(result.current.tape).toEqual({ title: "" });
});

test("setTape", () => {
  const { result } = renderHook(() => useTape());

  act(() => result.current.setTape({ title: "foo" }));
  expect(result.current.tape).toEqual({ title: "foo" });
});

test("resetTape", () => {
  const { result } = renderHook(() => useTape());
  act(() => result.current.setTape({ title: "foo" }));
  expect(result.current.tape).toEqual({ title: "foo" });

  act(() => result.current.resetTape());
  expect(result.current.tape).toEqual({ title: "" });
});
