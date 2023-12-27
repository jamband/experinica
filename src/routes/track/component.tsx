import { useTapeAction } from "@/hooks/tape";
import { useTrackAction } from "@/hooks/track";
import { Page } from "@/layouts/page";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { trackQueryOptions, trackRoute } from ".";

export default function Component() {
  const params = trackRoute.useParams();
  const { data } = useSuspenseQuery(trackQueryOptions(params));
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
      <></>
    </Page>
  );
}
