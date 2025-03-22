import { use, useCallback } from "react";
import { DispatchContext, StateContext } from "../contexts/track";
import type { State } from "../reducers/track";

export const useTrackState = () => {
  return use(StateContext);
};

export const useTrackAction = () => {
  const dispatch = use(DispatchContext);

  const setTrack = useCallback(
    (payload: State) => {
      dispatch({ type: "set", payload });
    },
    [dispatch],
  );

  const resetTrack = useCallback(() => {
    dispatch({ type: "reset" });
  }, [dispatch]);

  return {
    setTrack,
    resetTrack,
  } as const;
};
