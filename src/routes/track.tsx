import { useMatch } from "@tanstack/react-location";
import { useEffect } from "react";
import { useTape } from "~/hooks/tape";
import { useTrack } from "~/hooks/track";
import { Page } from "~/layouts/page";
import type { LocationGenerics } from "~/types/location";

export default function Track() {
  const {
    data: { track },
  } = useMatch<LocationGenerics>();

  const { setTape } = useTape();
  const { setTrack } = useTrack();

  useEffect(() => {
    if (track) setTape({ title: track.tapeTitle });
    if (track) setTrack(track.track);
  }, [setTape, setTrack, track]);

  return <Page title={`${track?.tapeTitle} ･ ${track?.track.title}`}>{}</Page>;
}
