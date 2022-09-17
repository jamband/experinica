import { useLocation } from "@tanstack/react-location";
import { useTrack } from "~/hooks/track";
import { Component } from "./component";

export const Footer: React.FC = () => {
  const { track, resetTrack } = useTrack();
  const { current } = useLocation();

  const showTrackTitle =
    track.path !== "" &&
    current.pathname !== track.path &&
    current.pathname !== "/about" &&
    current.pathname !== "/contact";

  return (
    <Component
      showTrackTitle={showTrackTitle}
      track={track}
      resetTrack={resetTrack}
    />
  );
};
