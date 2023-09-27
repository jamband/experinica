import type { Track } from "@/types/track";

export type State = Pick<
  Track,
  "title" | "provider" | "provider_key" | "embed_aspect_ratio" | "path"
>;

export const initialState: State = {
  title: "",
  provider: "",
  provider_key: "",
  embed_aspect_ratio: "",
  path: "",
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
