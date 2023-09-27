import { DispatchContext, StateContext } from "@/contexts/track";
import type { State } from "@/reducers/track";
import { useCallback, useContext } from "react";

export const useTrackState = () => {
  return useContext(StateContext);
};

export const useTrackAction = () => {
  const dispatch = useContext(DispatchContext);

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
