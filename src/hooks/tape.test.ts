import { act, renderHook } from "@testing-library/react";
import { useTape, type TapeValue } from "./tape";

// when using Jotai, automatic cleanup() doesn't work.

const initialValue: TapeValue = {
  title: "",
};

test("tape", async () => {
  const { result } = renderHook(() => useTape());
  expect(result.current.tape).toEqual(initialValue);

  act(() => result.current.resetTape()); // cleanup
});

test("setTape", async () => {
  const { result } = renderHook(() => useTape());
  expect(result.current.tape).toEqual({ title: "" });

  act(() => result.current.setTape({ title: "foo" }));
  expect(result.current.tape).toEqual({ title: "foo" });

  act(() => result.current.resetTape()); // cleanup
});

test("resetTape", async () => {
  const { result } = renderHook(() => useTape());
  expect(result.current.tape).toEqual({ title: "" });

  act(() => result.current.setTape({ title: "foo" }));
  expect(result.current.tape).toEqual({ title: "foo" });

  act(() => result.current.resetTape());
  expect(result.current.tape).toEqual({ title: "" });

  act(() => result.current.resetTape()); // cleanup
});
