import { createRouteConfig } from "@tanstack/react-router";
import { useEffect } from "react";
import { API_URL, API_URL_SUFFIX } from "~/constants/api";
import { useTape } from "~/hooks/tape";
import { useTrack } from "~/hooks/track";
import { Page } from "~/layouts/page";
import { extractProps } from "~/utils/api";
import { router } from ".";

export const trackRoute = createRouteConfig().createRoute({
  path: "/$year/$month/$tape/$track",
  component: Track,
  loader: async ({ params }) => {
    const track = await fetch(
      `${API_URL}/${params.year}/${params.month}/${params.tape}/${params.track}/${API_URL_SUFFIX}`
    );

    if (!track.ok) {
      throw new Error("Failed to fetch");
    }

    return {
      track: extractProps(await track.json()),
    };
  },
});

export default function Track() {
  const {
    loaderData: { track },
  } = router.useMatch(trackRoute.id);

  const { setTape } = useTape();
  const { setTrack } = useTrack();

  useEffect(() => {
    if (track) setTape({ title: track.tapeTitle });
    if (track) setTrack(track.track);
  }, [setTape, setTrack, track]);

  return <Page title={`${track?.tapeTitle} ･ ${track?.track.title}`}>{}</Page>;
}
