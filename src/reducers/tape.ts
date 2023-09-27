import type { Tape } from "@/types/tape";

export type State = Pick<Tape, "title">;

export const initialState: State = {
  title: "",
};

type SetAction = {
  type: "set";
  payload: State;
};

type ResetAction = {
  type: "reset";
};

export type Action = SetAction | ResetAction;

export type Dispatch = (aciton: Action) => void;

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "set":
      return action.payload;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
