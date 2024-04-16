import type { Dispatch, State } from "@/reducers/tape";
import { initialState, reducer } from "@/reducers/tape";
import { createContext, useReducer } from "react";
import type { Props } from "./types";

export const StateContext = createContext<State>({} as State);
export const DispatchContext = createContext<Dispatch>({} as Dispatch);

export const TapeProvider: React.FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
