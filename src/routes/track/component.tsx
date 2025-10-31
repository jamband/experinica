import { useEffect } from "react";
import { useTrackAction } from "../../hooks/track";
import { Page } from "../../layouts/page";
import { trackRoute } from ".";

export default function Component() {
  const data = trackRoute.useLoaderData();
  const { setTrack } = useTrackAction();

  useEffect(() => {
    if (data.track) {
      setTrack(data.track);
    }
  }, [data, setTrack]);

  return (
    <Page title={`${data.track.tapeTitle} ･ ${data.track.title}`}>
      {/* biome-ignore lint/complexity/noUselessFragments: reason */}
      <></>
    </Page>
  );
}
