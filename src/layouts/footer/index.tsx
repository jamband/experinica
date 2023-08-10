import { useTrack } from "@/hooks/track";
import { useRouter } from "@tanstack/react-router";
import { Component } from "./component";

export const Footer: React.FC = () => {
  const { track, resetTrack } = useTrack();

  const {
    state: { resolvedLocation },
  } = useRouter();

  const showTrackTitle =
    track.path !== "" &&
    resolvedLocation.pathname !== track.path &&
    resolvedLocation.pathname !== "/about" &&
    resolvedLocation.pathname !== "/contact";

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
