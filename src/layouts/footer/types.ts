import type { TrackValue } from "~/hooks/track";

export type _Props = {
  track: TrackValue;
  showTrackTitle: boolean;
  trackParams: Array<string>;
  resetTrack: () => void;
};
