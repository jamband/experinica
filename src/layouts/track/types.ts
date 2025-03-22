import type { State } from "../../reducers/track";

export type _Props = {
  isTrackRoute: boolean;
  track: State;
  src: string;
  tapeTitle: string;
  tapeParams: Array<string>;
};
