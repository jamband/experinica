import { useEffect } from "react";
import { useTapeAction } from "../../hooks/tape";
import { useTrackAction } from "../../hooks/track";
import { Page } from "../../layouts/page";
import { trackRoute } from ".";

export default function Component() {
  const data = trackRoute.useLoaderData();
  const { setTape } = useTapeAction();
  const { setTrack } = useTrackAction();

  useEffect(() => {
    if (data.track) {
      setTape({ title: data.tapeTitle });
      setTrack(data.track);
    }
  }, [data, setTape, setTrack]);

  return (
    <Page title={`${data.tapeTitle} ･ ${data.track.title}`}>
      {/* biome-ignore lint/complexity/noUselessFragments: reason */}
      <></>
    </Page>
  );
}
