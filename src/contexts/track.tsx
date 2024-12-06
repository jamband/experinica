import type { Dispatch, State } from "@/reducers/track";
import { initialState, reducer } from "@/reducers/track";
import { createContext, useReducer } from "react";
import type { Props } from "./types";

export const StateContext = createContext<State>({} as State);
export const DispatchContext = createContext<Dispatch>({} as Dispatch);

export const TrackProvider: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext value={state}>
      <DispatchContext value={dispatch}>{props.children}</DispatchContext>
    </StateContext>
  );
};
