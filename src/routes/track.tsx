import { useEffect } from "react";
import { useTape } from "~/hooks/tape";
import { useTrack } from "~/hooks/track";
import { Page } from "~/layouts/page";
import { router } from ".";

export default function Track() {
  const {
    loaderData: { track },
  } = router.useMatch("/$year/$month/$tape/$track");

  const { setTape } = useTape();
  const { setTrack } = useTrack();

  useEffect(() => {
    if (track) setTape({ title: track.tapeTitle });
    if (track) setTrack(track.track);
  }, [setTape, setTrack, track]);

  return <Page title={`${track?.tapeTitle} ･ ${track?.track.title}`}>{}</Page>;
}
