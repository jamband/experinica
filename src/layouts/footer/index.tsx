import { useTrack } from "~/hooks/track";
import { router } from "~/routes";
import { Component } from "./component";

export const Footer: React.FC = () => {
  const { track, resetTrack } = useTrack();
  const { currentLocation } = router.store;

  const showTrackTitle =
    track.path !== "" &&
    currentLocation.pathname !== track.path &&
    currentLocation.pathname !== "/about" &&
    currentLocation.pathname !== "/contact";

  return (
    <Component
      showTrackTitle={showTrackTitle}
      track={track}
      resetTrack={resetTrack}
    />
  );
};
