import { useLocation } from "@tanstack/react-location";
import { useTrack } from "../../hooks/track";
import { Component } from "./component";

export const Header: React.VFC = () => {
  const { track } = useTrack();
  const { current } = useLocation();

  return <Component isTrackRoute={track.path === current.pathname} />;
};
