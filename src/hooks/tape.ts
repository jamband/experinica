import { use, useCallback } from "react";
import { DispatchContext, StateContext } from "../contexts/tape";
import type { State } from "../reducers/tape";

export const useTapeState = () => {
  return use(StateContext);
};

export const useTapeAction = () => {
  const dispatch = use(DispatchContext);

  const setTape = useCallback(
    (payload: State) => {
      dispatch({ type: "set", payload });
    },
    [dispatch],
  );

  const resetTape = useCallback(() => {
    dispatch({ type: "reset" });
  }, [dispatch]);

  return {
    setTape,
    resetTape,
  } as const;
};
