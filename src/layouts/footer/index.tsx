import { useTrack } from "~/hooks/track";
import { router } from "~/routes";
import { Component } from "./component";

export const Footer: React.FC = () => {
  const { track, resetTrack } = useTrack();
  const { location } = router.useState();

  const showTrackTitle =
    track.path !== "" &&
    location.pathname !== track.path &&
    location.pathname !== "/about" &&
    location.pathname !== "/contact";

  return (
    <Component
      showTrackTitle={showTrackTitle}
      track={track}
      resetTrack={resetTrack}
    />
  );
};
