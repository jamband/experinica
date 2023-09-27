import { DispatchContext, StateContext } from "@/contexts/tape";
import type { State } from "@/reducers/tape";
import { useCallback, useContext } from "react";

export const useTapeState = () => {
  return useContext(StateContext);
};

export const useTapeAction = () => {
  const dispatch = useContext(DispatchContext);

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
