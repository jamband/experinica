import { useTrack } from "@/hooks/track";
import { useRouterStore } from "@tanstack/react-router";
import { Component } from "./component";

export const Footer: React.FC = () => {
  const { track, resetTrack } = useTrack();
  const { currentLocation } = useRouterStore();

  const showTrackTitle =
    track.path !== "" &&
    currentLocation.pathname !== track.path &&
    currentLocation.pathname !== "/about" &&
    currentLocation.pathname !== "/contact";

  const trackParams = track.path.split("/").filter(Boolean);

  return (
    <Component
      showTrackTitle={showTrackTitle}
      trackParams={trackParams}
      track={track}
      resetTrack={resetTrack}
    />
  );
};
