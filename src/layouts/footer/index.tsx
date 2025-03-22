import { useRouterState } from "@tanstack/react-router";
import { useTrackAction, useTrackState } from "../../hooks/track";
import { Component } from "./component";

export const Footer: React.FC = () => {
  const track = useTrackState();
  const { resetTrack } = useTrackAction();
  const { location } = useRouterState();

  const showTrackTitle =
    track.path !== "" &&
    location.pathname !== track.path &&
    location.pathname !== "/about" &&
    location.pathname !== "/contact";

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
