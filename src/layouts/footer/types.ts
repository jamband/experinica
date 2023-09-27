import type { State } from "@/reducers/track";

export type _Props = {
  track: State;
  showTrackTitle: boolean;
  trackParams: Array<string>;
  resetTrack: () => void;
};
