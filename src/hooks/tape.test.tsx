import type { Props } from "@/contexts/tape";
import { TapeProvider } from "@/contexts/tape";
import { initialState } from "@/reducers/tape";
import { act, renderHook } from "@testing-library/react";
import { useTapeAction, useTapeState } from "./tape";

const wrapper: React.FC<Props> = (props) => (
  <TapeProvider>{props.children}</TapeProvider>
);

test("initial value", () => {
  const { result } = renderHook(useTapeState, { wrapper });
  expect(result.current).toEqual(initialState);
});

test("setTape", () => {
  const { result } = renderHook(
    () => {
      const state = useTapeState();
      const { setTape } = useTapeAction();
      return { state, setTape };
    },
    { wrapper },
  );

  expect(result.current.state).toEqual(initialState);

  act(() => result.current.setTape({ title: "foo" }));
  expect(result.current.state).toEqual({ title: "foo" });
});

test("resetTape", () => {
  const { result } = renderHook(
    () => {
      const state = useTapeState();
      const { setTape, resetTape } = useTapeAction();
      return { state, setTape, resetTape };
    },
    { wrapper },
  );

  expect(result.current.state).toEqual(initialState);

  act(() => result.current.setTape({ title: "foo" }));
  expect(result.current.state).toEqual({ title: "foo" });

  act(() => result.current.resetTape());
  expect(result.current.state).toEqual(initialState);
});
