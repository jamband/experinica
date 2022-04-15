import { useLocation } from "@tanstack/react-location";
import { useTrack } from "../../hooks/track";
import { Component } from "./component";

export const Footer: React.VFC = () => {
  const { track, resetTrack } = useTrack();
  const { current } = useLocation();

  return (
    <Component
      isTrackRoute={track.path === current.pathname}
      track={track}
      resetTrack={resetTrack}
    />
  );
};
